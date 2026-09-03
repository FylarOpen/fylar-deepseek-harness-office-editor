/** Bamboo Office editor hosted in DSH's right details column. */
import type {} from '@deepseek-ai/dsh-client-ui-layout/client'
import type { InjectFace, PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import type { ObservableSnapshot, OfficeWorkspaceActions, OfficeWorkspaceSnapshot } from './office-workspace.ts'
import type { OfficeSessionSnapshot } from './office-artifact-controller.ts'
import { OfficeEditorSurface } from './OfficeEditorSurface.tsx'
import { OFFICE_LOCALE_NS, zhT } from './locales.ts'

export interface OfficeDetailsInjected extends Pick<
  OfficeWorkspaceActions,
  'attach' | 'detach' | 'setReadOnly' | 'exportDocument' | 'exportPdf' | 'clearIssue' | 'markPotentialEdits'
> {
  hooks: {
    workspace: ObservableSnapshot<OfficeWorkspaceSnapshot>
    officeSession: ObservableSnapshot<OfficeSessionSnapshot>
  }
  retrySession: () => Promise<void>
  closePanel: () => void
}

export type OfficeDetailsPanelProps = PropsRuntime<'details'>
  & PropsLocale<typeof OFFICE_LOCALE_NS>
  & InjectFace<OfficeDetailsInjected>

/** Render the persistent SDK root plus compact edit/export controls. */
export function OfficeDetailsPanel({
  useWorkspace, useOfficeSession, attach, detach, retrySession, setReadOnly,
  exportDocument, exportPdf, clearIssue, markPotentialEdits, closePanel, t = zhT,
}: OfficeDetailsPanelProps) {
  const snapshot = useWorkspace(value => value)
  const current = useOfficeSession(value => value.current)
  return (
    <OfficeEditorSurface
      snapshot={snapshot}
      current={current}
      presentation="details"
      attach={attach}
      detach={detach}
      onRetry={retrySession}
      setReadOnly={setReadOnly}
      exportDocument={exportDocument}
      exportPdf={exportPdf}
      clearIssue={clearIssue}
      markPotentialEdits={markPotentialEdits}
      t={t}
      onClose={closePanel}
    />
  )
}
