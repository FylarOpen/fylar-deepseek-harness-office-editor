// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react'
import type { ComponentProps } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { OfficeEditorSurface } from '../src/client/OfficeEditorSurface.tsx'

describe('OfficeEditorSurface inline mode', () => {
  it('attaches one SDK host and exposes move, collapse, and close actions', () => {
    const scrollIntoView = vi.fn()
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView,
    })
    const attach = vi.fn()
    const detach = vi.fn()
    const openDetails = vi.fn()
    const collapse = vi.fn()
    const close = vi.fn()
    const view = render(
      <OfficeEditorSurface
        snapshot={{
          status: 'ready', fileName: 'inline.docx', docType: 1, origin: 'workspace',
          readOnly: false, operation: null, hasPotentialEdits: false,
        }}
        current={{
          source: {
            kind: 'workspace', path: 'inline.docx', cwd: '/workspace', fileName: 'inline.docx',
            url: '/fylar-office-files', docType: 1,
          },
          presentation: 'inline',
        }}
        presentation="inline"
        attach={attach}
        detach={detach}
        onRetry={vi.fn(async () => {})}
        setReadOnly={vi.fn(async () => {})}
        exportDocument={vi.fn(async () => {})}
        exportPdf={vi.fn(async () => {})}
        clearIssue={vi.fn()}
        markPotentialEdits={vi.fn()}
        onOpenDetails={openDetails}
        onCollapse={collapse}
        onClose={close}
      />,
    )

    expect(attach).toHaveBeenCalledOnce()
    expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start', inline: 'nearest', behavior: 'smooth' })
    expect(document.querySelector('.fylar-office-details-toolbar')).toBeNull()
    expect(screen.getByText('临时编辑').getAttribute('title')).toContain('不会覆盖原文件')
    fireEvent.click(screen.getByRole('button', { name: '更多文档操作' }))
    fireEvent.click(screen.getByRole('menuitem', { name: '在侧边栏打开' }))
    fireEvent.click(screen.getByRole('button', { name: '收起对话内编辑器' }))
    fireEvent.click(screen.getByRole('button', { name: '更多文档操作' }))
    fireEvent.click(screen.getByRole('menuitem', { name: /关闭编辑会话/ }))
    expect(openDetails).toHaveBeenCalledOnce()
    expect(collapse).toHaveBeenCalledOnce()
    expect(close).toHaveBeenCalledOnce()

    view.unmount()
    expect(detach).toHaveBeenCalledOnce()
    delete (HTMLElement.prototype as Partial<HTMLElement>).scrollIntoView
  })

  it('uses multi-format download copy and marks editable SDK interaction', () => {
    const markPotentialEdits = vi.fn()
    const props = {
      snapshot: {
        status: 'ready', fileName: 'sheet.xlsx', docType: 2, origin: 'opened',
        readOnly: false, operation: null, hasPotentialEdits: false,
      },
      current: {
        source: { kind: 'local', fileName: 'sheet.xlsx', docType: 2 }, presentation: 'office-view',
      },
      presentation: 'office-view',
      attach: vi.fn(), detach: vi.fn(), onRetry: vi.fn(), setReadOnly: vi.fn(),
      exportDocument: vi.fn(), exportPdf: vi.fn(), clearIssue: vi.fn(), markPotentialEdits,
      onClose: vi.fn(),
    } as unknown as ComponentProps<typeof OfficeEditorSurface>
    const view = render(<OfficeEditorSurface {...props} />)
    fireEvent.click(screen.getByRole('button', { name: '导出' }))
    expect(screen.getByRole('menuitem', { name: /下载并保存 XLSX/ })).toBeTruthy()
    expect(screen.getByRole('menuitem', { name: /导出 PDF/ })).toBeTruthy()
    const viewer = document.querySelector('.fylar-office-details-viewer')
    if (viewer === null) throw new Error('viewer missing')
    fireEvent.pointerDown(viewer)
    expect(markPotentialEdits).toHaveBeenCalledOnce()
    view.unmount()

    const powerpoint = render(<OfficeEditorSurface {...({
      ...props,
      snapshot: { ...props.snapshot, fileName: 'slides.pptx', docType: 3 },
      current: { source: { kind: 'local', fileName: 'slides.pptx', docType: 3 }, presentation: 'office-view' },
    } as unknown as ComponentProps<typeof OfficeEditorSurface>)} />)
    fireEvent.click(screen.getByRole('button', { name: '导出' }))
    expect(screen.getByRole('menuitem', { name: /下载并保存 PPTX/ })).toBeTruthy()
    expect(screen.queryByRole('menuitem', { name: /导出 PDF/ })).toBeNull()
    powerpoint.unmount()
  })

  it('shows a direct close action in the details column instead of putting it in the menu', () => {
    const close = vi.fn()
    const view = render(<OfficeEditorSurface {...({
      snapshot: {
        status: 'ready', fileName: 'details.docx', docType: 1, origin: 'workspace',
        readOnly: false, operation: null, hasPotentialEdits: false,
      },
      current: {
        source: {
          kind: 'workspace', path: 'details.docx', cwd: '/workspace', fileName: 'details.docx',
          url: '/fylar-office-files', docType: 1,
        },
        presentation: 'details',
      },
      presentation: 'details',
      attach: vi.fn(), detach: vi.fn(), onRetry: vi.fn(), setReadOnly: vi.fn(),
      exportDocument: vi.fn(), exportPdf: vi.fn(), clearIssue: vi.fn(), markPotentialEdits: vi.fn(),
      onClose: close,
    } as unknown as ComponentProps<typeof OfficeEditorSurface>)} />)

    fireEvent.click(screen.getByRole('button', { name: '更多文档操作' }))
    expect(screen.queryByRole('menuitem', { name: /关闭编辑会话/ })).toBeNull()
    fireEvent.keyDown(document, { key: 'Escape' })
    fireEvent.click(screen.getByRole('button', { name: '关闭 Office 文档' }))
    expect(close).toHaveBeenCalledOnce()
    view.unmount()
  })

  it('enters and exits native fullscreen from the editor header', () => {
    let fullscreenElement: Element | null = null
    const requestFullscreen = vi.fn(function (this: Element) {
      fullscreenElement = this
      document.dispatchEvent(new Event('fullscreenchange'))
      return Promise.resolve()
    })
    const exitFullscreen = vi.fn(() => {
      fullscreenElement = null
      document.dispatchEvent(new Event('fullscreenchange'))
      return Promise.resolve()
    })
    Object.defineProperty(document, 'fullscreenElement', {
      configurable: true,
      get: () => fullscreenElement,
    })
    Object.defineProperty(Element.prototype, 'requestFullscreen', {
      configurable: true,
      value: requestFullscreen,
    })
    Object.defineProperty(document, 'exitFullscreen', {
      configurable: true,
      value: exitFullscreen,
    })

    const view = render(<OfficeEditorSurface {...({
      snapshot: {
        status: 'ready', fileName: 'slides.pptx', docType: 3, origin: 'workspace',
        readOnly: true, operation: null, hasPotentialEdits: false,
      },
      current: {
        source: {
          kind: 'workspace', path: 'slides.pptx', cwd: '/workspace', fileName: 'slides.pptx',
          url: '/fylar-office-files', docType: 3,
        },
        presentation: 'inline',
      },
      presentation: 'inline',
      attach: vi.fn(), detach: vi.fn(), onRetry: vi.fn(), setReadOnly: vi.fn(),
      exportDocument: vi.fn(), exportPdf: vi.fn(), clearIssue: vi.fn(), markPotentialEdits: vi.fn(),
      onCollapse: vi.fn(), onClose: vi.fn(),
    } as unknown as ComponentProps<typeof OfficeEditorSurface>)} />)

    fireEvent.click(screen.getByRole('button', { name: '全屏编辑' }))
    expect(requestFullscreen).toHaveBeenCalledOnce()
    expect(document.querySelector('.fylar-office-details')?.getAttribute('data-fullscreen')).toBe('true')
    fireEvent.click(screen.getByRole('button', { name: '退出全屏编辑' }))
    expect(exitFullscreen).toHaveBeenCalledOnce()
    expect(document.querySelector('.fylar-office-details')?.hasAttribute('data-fullscreen')).toBe(false)

    view.unmount()
    Reflect.deleteProperty(Element.prototype, 'requestFullscreen')
    Reflect.deleteProperty(document, 'exitFullscreen')
    Reflect.deleteProperty(document, 'fullscreenElement')
  })

  it('disables lifecycle actions while loading', () => {
    render(<OfficeEditorSurface {...({
      snapshot: { status: 'loading', action: 'open', label: 'loading.docx' },
      current: {
        source: {
          kind: 'workspace', path: 'loading.docx', cwd: '/workspace', fileName: 'loading.docx',
          url: '/fylar-office-files', docType: 1,
        },
        presentation: 'inline',
      },
      presentation: 'inline',
      attach: vi.fn(), detach: vi.fn(), onRetry: vi.fn(), setReadOnly: vi.fn(),
      exportDocument: vi.fn(), exportPdf: vi.fn(), clearIssue: vi.fn(), markPotentialEdits: vi.fn(),
      onOpenDetails: vi.fn(), onCollapse: vi.fn(), onClose: vi.fn(),
    } as unknown as ComponentProps<typeof OfficeEditorSurface>)} />)
    expect((screen.getByRole('button', { name: '导出' }) as HTMLButtonElement).disabled).toBe(true)
    expect((screen.getByRole('button', { name: '收起对话内编辑器' }) as HTMLButtonElement).disabled).toBe(true)
    expect((screen.getByRole('button', { name: '更多文档操作' }) as HTMLButtonElement).disabled).toBe(true)
  })
})
