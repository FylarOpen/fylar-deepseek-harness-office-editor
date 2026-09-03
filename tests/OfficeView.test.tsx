// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import type { ComponentProps } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { OfficeView } from '../src/client/OfficeView.tsx'
import type { OfficeWorkspaceSnapshot } from '../src/client/office-workspace.ts'
import type { OfficeSessionSnapshot } from '../src/client/office-artifact-controller.ts'
import { enT } from '../src/client/locales.ts'

afterEach(cleanup)

function propsFor(snapshot: OfficeWorkspaceSnapshot): ComponentProps<typeof OfficeView> {
  const noop = vi.fn(async () => undefined)
  const useWorkspace = <Slice,>(selector: (value: OfficeWorkspaceSnapshot) => Slice): Slice => selector(snapshot)
  const current: OfficeSessionSnapshot = snapshot.status === 'ready'
    ? {
        current: {
          source: { kind: 'local', fileName: snapshot.fileName, docType: snapshot.docType },
          presentation: 'office-view',
        },
      }
    : { current: null }
  const useOfficeSession = <Slice,>(selector: (value: OfficeSessionSnapshot) => Slice): Slice => selector(current)
  return {
    useWorkspace,
    useOfficeSession,
    preload: noop,
    attach: vi.fn(),
    detach: vi.fn(),
    setReadOnly: noop,
    exportDocument: noop,
    exportPdf: noop,
    clearIssue: vi.fn(),
    markPotentialEdits: vi.fn(),
    openLocal: noop,
    createDocument: noop,
    retrySession: noop,
    activateOfficeView: vi.fn(),
    parkOfficeView: vi.fn(),
    closeDocument: noop,
  } as unknown as ComponentProps<typeof OfficeView>
}

describe('OfficeView host actions', () => {
  it('shows PDF export for DOCX but not PPTX', () => {
    const ready = (docType: 1 | 3): OfficeWorkspaceSnapshot => ({
      status: 'ready', fileName: docType === 1 ? 'a.docx' : 'a.pptx', docType,
      origin: 'opened', readOnly: false, operation: null, hasPotentialEdits: false,
    })
    const first = render(<OfficeView {...propsFor(ready(1))} />)
    fireEvent.click(screen.getByRole('button', { name: '导出' }))
    expect(screen.getByRole('menuitem', { name: /导出 PDF/ })).toBeTruthy()
    first.unmount()
    render(<OfficeView {...propsFor(ready(3))} />)
    fireEvent.click(screen.getByRole('button', { name: '导出' }))
    expect(screen.queryByRole('menuitem', { name: /导出 PDF/ })).toBeNull()
  })

  it('only offers the five documented file extensions', () => {
    render(<OfficeView {...propsFor({ status: 'empty' })} />)
    expect(document.querySelector('input[type="file"]')?.getAttribute('accept'))
      .toBe('.doc,.docx,.xls,.xlsx,.pptx')
  })

  it('renders the plugin shell in the locale injected by DSH', () => {
    render(<OfficeView {...propsFor({ status: 'empty' })} t={enT} />)
    expect(screen.getByRole('button', { name: 'Open Office file' })).toBeTruthy()
    expect(screen.getByText('Create document')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'New PowerPoint' })).toBeTruthy()
    expect(screen.queryByText('新建文档')).toBeNull()
  })
})
