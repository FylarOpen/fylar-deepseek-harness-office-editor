// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import type { ILayout } from '@deepseek-ai/dsh-client-ui-layout/client'
import {
  OfficeSessionController, type OfficeLayoutLeaseLike, workspaceOfficeUrl,
} from '../src/client/office-artifact-controller.ts'
import { officeFilesForClosing } from '../src/client/office-deliverables-model.ts'
import { officeArtifactRowModel } from '../src/client/OfficeArtifactRow.tsx'
import type { OfficeWorkspace, OfficeWorkspaceSnapshot } from '../src/client/office-workspace.ts'

function workspace(snapshot: OfficeWorkspaceSnapshot) {
  let current = snapshot
  return {
    source: { getSnapshot: () => current, subscribe: () => () => {} },
    openUrl: vi.fn(async () => {}),
    open: vi.fn(async () => {}),
    create: vi.fn(async () => {}),
    retry: vi.fn(async () => {}),
    close: vi.fn(async () => {}),
    dispose: vi.fn(async () => {}),
    setSnapshot(value: OfficeWorkspaceSnapshot) { current = value },
  } as unknown as OfficeWorkspace & { setSnapshot(value: OfficeWorkspaceSnapshot): void }
}

function dependencies() {
  const layout = { openDetails: vi.fn(), closeDetails: vi.fn(), toggleSidebar: vi.fn() } satisfies ILayout
  const lease = {
    acquire: vi.fn(() => true), release: vi.fn(() => true), dispose: vi.fn(),
  } satisfies OfficeLayoutLeaseLike
  return { layout, lease, show: vi.fn(), release: vi.fn() }
}

const ready = (hasPotentialEdits = false): OfficeWorkspaceSnapshot => ({
  status: 'ready', fileName: 'old.docx', docType: 1, origin: 'workspace',
  readOnly: false, operation: null, hasPotentialEdits,
})

describe('Office session linkage', () => {
  it('opens a generated file in details only after a valid Workspace target', async () => {
    const office = workspace({ status: 'empty' })
    const d = dependencies()
    const controller = new OfficeSessionController(office, d.layout, d.lease, d.show, d.release)

    await controller.openDetails({ path: 'reports/summary.docx' })
    expect(d.lease.acquire).not.toHaveBeenCalled()
    expect(d.layout.openDetails).not.toHaveBeenCalled()

    await controller.openDetails({ path: 'reports/summary.docx', cwd: '/workspace' })
    expect(d.lease.acquire).toHaveBeenCalledOnce()
    expect(d.show).toHaveBeenCalledOnce()
    expect(office.openUrl).toHaveBeenCalledWith(
      'summary.docx', workspaceOfficeUrl('/workspace', 'reports/summary.docx'),
    )
    expect(controller.source.getSnapshot().current).toMatchObject({
      presentation: 'details', source: { kind: 'workspace', path: 'reports/summary.docx' },
    })
  })

  it('restores sidebar ownership after a details load failure and reacquires it for retry', async () => {
    const office = workspace({ status: 'empty' })
    const d = dependencies()
    vi.mocked(office.openUrl).mockImplementation(async () => {
      office.setSnapshot({
        status: 'error',
        issue: { kind: 'open', retryable: true },
      })
    })
    const controller = new OfficeSessionController(office, d.layout, d.lease, d.show, d.release)
    await controller.openDetails({ path: 'broken.docx', cwd: '/workspace' })
    expect(d.lease.acquire).toHaveBeenCalledOnce()
    expect(d.lease.release).toHaveBeenCalledOnce()
    await controller.retry()
    expect(d.lease.acquire).toHaveBeenCalledTimes(2)
    expect(d.lease.release).toHaveBeenCalledTimes(2)
    expect(d.release).not.toHaveBeenCalled()
  })

  it('moves one live Workspace document without reopening the SDK', async () => {
    const office = workspace({ status: 'empty' })
    const d = dependencies()
    const controller = new OfficeSessionController(office, d.layout, d.lease, d.show, d.release)
    await controller.openInline({ path: 'same.docx', cwd: '/workspace' })
    office.setSnapshot(ready())
    await controller.openDetails({ path: 'same.docx', cwd: '/workspace' })
    expect(office.openUrl).toHaveBeenCalledOnce()
    expect(controller.source.getSnapshot().current?.presentation).toBe('details')
    controller.activateOfficeView()
    expect(controller.source.getSnapshot().current?.presentation).toBe('office-view')
    expect(d.lease.release).toHaveBeenCalled()
    controller.parkOfficeView()
    expect(controller.source.getSnapshot().current?.presentation).toBe('parked')
    expect(office.close).not.toHaveBeenCalled()
  })

  it('replaces the current document directly even when it may contain edits', async () => {
    const office = workspace({ status: 'empty' })
    const d = dependencies()
    const controller = new OfficeSessionController(office, d.layout, d.lease, d.show, d.release)
    await controller.openInline({ path: 'old.docx', cwd: '/workspace' })
    office.setSnapshot(ready(true))

    await controller.openInline({ path: 'new.docx', cwd: '/workspace' })
    expect(office.openUrl).toHaveBeenCalledTimes(2)
    expect(controller.source.getSnapshot().current).toMatchObject({
      presentation: 'inline', source: { kind: 'workspace', path: 'new.docx' },
    })
  })

  it('opens local files and creates all document types in the Office view', async () => {
    const office = workspace({ status: 'empty' })
    const d = dependencies()
    const controller = new OfficeSessionController(office, d.layout, d.lease, d.show, d.release)
    const file = new File(['x'], 'sheet.xlsx')
    await controller.openLocal(file)
    expect(office.open).toHaveBeenCalledWith(file)
    expect(controller.source.getSnapshot().current).toMatchObject({
      presentation: 'office-view', source: { kind: 'local', docType: 2 },
    })
    await controller.create(3)
    expect(office.create).toHaveBeenCalledWith(3)
    expect(controller.source.getSnapshot().current).toMatchObject({ source: { kind: 'created', docType: 3 } })
  })

  it('closes directly and restores layout ownership', async () => {
    const office = workspace(ready(true))
    const d = dependencies()
    const controller = new OfficeSessionController(office, d.layout, d.lease, d.show, d.release)
    await controller.close()
    expect(office.close).toHaveBeenCalledOnce()
    expect(d.layout.closeDetails).toHaveBeenCalledOnce()
    expect(d.lease.release).toHaveBeenCalledOnce()
    expect(controller.source.getSnapshot().current).toBeNull()
  })

  it('derives stable running, success, and failure status states', () => {
    const running = { callId: 'c1', name: 'office_create_docx', argsRaw: '{"file_path":"a.docx"}', subCalls: [] }
    expect(officeArtifactRowModel(running as never)).toEqual({ path: 'a.docx', state: 'running' })
    expect(officeArtifactRowModel({
      kind: 'tool-result', callId: 'c1', isError: false,
      call: { argsRaw: '{"file_path":"a.docx"}' }, content: [], subCalls: [],
    } as never)).toEqual({ path: 'a.docx', state: 'ready' })
    expect(officeArtifactRowModel({
      kind: 'tool-result', callId: 'c1', isError: true,
      call: { argsRaw: '{"file_path":"a.docx"}' }, content: [], subCalls: [],
    } as never).state).toBe('error')
  })

  it('only exposes successfully produced files visible at the closing event', () => {
    expect(officeFilesForClosing({
      produced: [{ path: 'first.docx', seq: 7 }, { path: 'later.docx', seq: 12 }],
    }, 10)).toEqual(['first.docx'])
  })
})
