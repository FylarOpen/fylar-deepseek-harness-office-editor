// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import type { OfficeSdk, OfficeWidget } from '../src/client/office-types.ts'
import { OfficeWorkspace, type OfficeSdkLoaderLike } from '../src/client/office-workspace.ts'

function enableCapabilities(): void {
  for (const name of ['Worker', 'SharedWorker', 'indexedDB']) {
    Object.defineProperty(window, name, { value: {}, configurable: true })
  }
  Object.defineProperty(window, 'isSecureContext', { value: true, configurable: true })
  Object.defineProperty(window, 'queryLocalFonts', { value: vi.fn(async () => []), configurable: true })
}

function createHarness(render?: () => Promise<ReturnType<typeof createApp>>) {
  enableCapabilities()
  let readOnly = false
  const app = createApp(
    () => readOnly,
    value => { readOnly = value },
  )
  const widget: OfficeWidget = {
    docType: 1,
    docTypeName: 'WORD',
    mount: vi.fn(function (this: OfficeWidget) { return this }),
    render: vi.fn(render ?? (async () => app)),
    close: vi.fn(async () => undefined),
  }
  const sdk: OfficeSdk = {
    openfile: vi.fn(async () => ({ docType: 1, widget })),
    createfile: vi.fn(async docType => ({ docType, widget: { ...widget, docType } })),
  }
  const loader: OfficeSdkLoaderLike = {
    preload: vi.fn(async () => undefined),
    load: vi.fn(async () => sdk),
    resetFailure: vi.fn(),
  }
  const resize = { observe: vi.fn(), disconnect: vi.fn() }
  const workspace = new OfficeWorkspace(loader, {
    window,
    document,
    createResizeObserver: () => resize,
  })
  return { app, loader, resize, sdk, widget, workspace }
}

function createApp(getReadOnly: () => boolean, setReadOnly: (value: boolean) => void) {
  return {
    Document: {
      updateVisibleArea: vi.fn(),
      exportDocument: vi.fn(async () => undefined),
      exportPdf: vi.fn(async () => undefined),
      startReadOnly: vi.fn(() => { setReadOnly(true) }),
      endReadOnly: vi.fn(() => { setReadOnly(false) }),
      isReadOnly: vi.fn(() => getReadOnly()),
    },
  }
}

describe('OfficeWorkspace lifecycle', () => {
  it('parks and reattaches one live SDK host without closing it', async () => {
    const { app, loader, widget, workspace } = createHarness()
    const first = document.createElement('div')
    const second = document.createElement('div')
    document.body.append(first, second)

    workspace.attach(first)
    await workspace.create(1)
    expect(loader.preload).toHaveBeenCalledOnce()
    const host = first.querySelector('[data-fylar-office-sdk-host]')
    expect(host).not.toBeNull()
    workspace.detach(first)
    expect(widget.close).not.toHaveBeenCalled()
    workspace.attach(second)
    expect(second.querySelector('[data-fylar-office-sdk-host]')).toBe(host)

    await workspace.setReadOnly(true)
    expect(workspace.source.getSnapshot()).toMatchObject({ status: 'ready', readOnly: true })
    await workspace.exportDocument()
    await workspace.exportPdf()
    expect(app.Document.exportDocument).toHaveBeenCalledOnce()
    expect(app.Document.exportPdf).toHaveBeenCalledOnce()

    await workspace.close()
    expect(widget.close).toHaveBeenCalledOnce()
    expect(workspace.source.getSnapshot()).toEqual({ status: 'empty' })
    await workspace.dispose()
  })

  it('closes a stale widget when a newer open wins', async () => {
    enableCapabilities()
    let releaseFirst: ((value: ReturnType<typeof createApp>) => void) | undefined
    const firstReady = new Promise<ReturnType<typeof createApp>>(resolve => { releaseFirst = resolve })
    const firstApp = createApp(() => false, () => undefined)
    const secondApp = createApp(() => false, () => undefined)
    const firstWidget: OfficeWidget = {
      docType: 1, docTypeName: 'WORD',
      mount: vi.fn(function (this: OfficeWidget) { return this }),
      render: vi.fn(() => firstReady),
      close: vi.fn(async () => undefined),
    }
    const secondWidget: OfficeWidget = {
      docType: 2, docTypeName: 'EXCEL',
      mount: vi.fn(function (this: OfficeWidget) { return this }),
      render: vi.fn(async () => secondApp),
      close: vi.fn(async () => undefined),
    }
    const sdk: OfficeSdk = {
      openfile: vi.fn()
        .mockResolvedValueOnce({ docType: 1, widget: firstWidget })
        .mockResolvedValueOnce({ docType: 2, widget: secondWidget }),
      createfile: vi.fn(),
    }
    const loader: OfficeSdkLoaderLike = {
      preload: vi.fn(async () => undefined), load: vi.fn(async () => sdk), resetFailure: vi.fn(),
    }
    const workspace = new OfficeWorkspace(loader, {
      window, document, createResizeObserver: () => null,
    })
    const first = workspace.open(new File(['a'], 'a.docx'))
    await vi.waitFor(() => { expect(firstWidget.render).toHaveBeenCalledOnce() })
    const second = workspace.open(new File(['b'], 'b.xlsx'))
    releaseFirst?.(firstApp)
    await Promise.all([first, second])

    expect(firstWidget.close).toHaveBeenCalledOnce()
    expect(workspace.source.getSnapshot()).toMatchObject({ status: 'ready', fileName: 'b.xlsx', docType: 2 })
    await workspace.dispose()
  })

  it('does not expose PDF export for PowerPoint', async () => {
    const { app, workspace } = createHarness()
    await workspace.create(3)
    await workspace.exportPdf()
    expect(app.Document.exportPdf).not.toHaveBeenCalled()
    await workspace.dispose()
  })

  it('warns on unload only for possible edits and clears them after Office download', async () => {
    const { workspace } = createHarness()
    await workspace.create(1)
    const cleanEvent = new Event('beforeunload', { cancelable: true })
    window.dispatchEvent(cleanEvent)
    expect(cleanEvent.defaultPrevented).toBe(false)

    workspace.markPotentialEdits()
    expect(workspace.source.getSnapshot()).toMatchObject({ hasPotentialEdits: true })
    const dirtyEvent = new Event('beforeunload', { cancelable: true })
    window.dispatchEvent(dirtyEvent)
    expect(dirtyEvent.defaultPrevented).toBe(true)

    await workspace.exportPdf()
    expect(workspace.source.getSnapshot()).toMatchObject({ hasPotentialEdits: true })
    await workspace.exportDocument()
    expect(workspace.source.getSnapshot()).toMatchObject({ hasPotentialEdits: false })
    await workspace.dispose()
  })

  it('reports an unsupported local file without replacing a live edited document', async () => {
    const { widget, workspace } = createHarness()
    await workspace.create(1)
    workspace.markPotentialEdits()

    await workspace.open(new File(['plain text'], 'notes.txt'))

    expect(workspace.source.getSnapshot()).toMatchObject({
      status: 'ready',
      fileName: 'Untitled.docx',
      hasPotentialEdits: true,
      issue: { kind: 'unsupported-file', retryable: false },
    })
    expect(widget.close).not.toHaveBeenCalled()
    const dirtyEvent = new Event('beforeunload', { cancelable: true })
    window.dispatchEvent(dirtyEvent)
    expect(dirtyEvent.defaultPrevented).toBe(true)
    await workspace.dispose()
  })

  it('keeps the possible-edit marker when an Office download fails', async () => {
    const { app, workspace } = createHarness()
    const log = vi.spyOn(console, 'error').mockImplementation(() => undefined)
    await workspace.create(1)
    workspace.markPotentialEdits()
    vi.mocked(app.Document.exportDocument).mockRejectedValueOnce(new Error('download failed'))

    await workspace.exportDocument()

    expect(workspace.source.getSnapshot()).toMatchObject({
      status: 'ready', hasPotentialEdits: true, issue: { kind: 'export' },
    })
    log.mockRestore()
    await workspace.dispose()
  })
})
