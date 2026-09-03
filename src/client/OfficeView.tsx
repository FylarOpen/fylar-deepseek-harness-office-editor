import { useEffect, useRef } from 'react'
import type { ConvViewProps } from '@deepseek-ai/dsh-client-ui-conversation/client'
import type { InjectFace, PropsLocale } from '@deepseek-ai/dsh-client-ui-slots'
import type { ObservableSnapshot, OfficeWorkspaceActions, OfficeWorkspaceSnapshot } from './office-workspace.ts'
import type { OfficeSessionSnapshot } from './office-artifact-controller.ts'
import { OFFICE_FILE_ACCEPT } from './office-files.ts'
import type { OfficeDocType } from './office-types.ts'
import { OfficeEditorSurface } from './OfficeEditorSurface.tsx'
import { officeIssueCopy, OFFICE_LOCALE_NS, zhT } from './locales.ts'

export interface OfficeViewInjected extends Pick<
  OfficeWorkspaceActions,
  'preload' | 'attach' | 'detach' | 'setReadOnly' | 'exportDocument' | 'exportPdf' | 'clearIssue' | 'markPotentialEdits'
> {
  hooks: {
    workspace: ObservableSnapshot<OfficeWorkspaceSnapshot>
    officeSession: ObservableSnapshot<OfficeSessionSnapshot>
  }
  openLocal: (file: File) => Promise<void>
  createDocument: (docType: OfficeDocType) => Promise<void>
  retrySession: () => Promise<void>
  activateOfficeView: () => void
  parkOfficeView: () => void
  closeDocument: () => Promise<void>
}

type OfficeViewProps = ConvViewProps
  & PropsLocale<typeof OFFICE_LOCALE_NS>
  & InjectFace<OfficeViewInjected>

export function OfficeView({
  useWorkspace, useOfficeSession, preload, attach, detach, setReadOnly, exportDocument, exportPdf,
  clearIssue, markPotentialEdits, openLocal, createDocument, retrySession, activateOfficeView,
  parkOfficeView, closeDocument, t = zhT,
}: OfficeViewProps) {
  const snapshot = useWorkspace(value => value)
  const current = useOfficeSession(value => value.current)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    activateOfficeView()
    void preload()
    return () => { parkOfficeView() }
  }, [activateOfficeView, parkOfficeView, preload])

  const chooseFile = (): void => { inputRef.current?.click() }
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.currentTarget.files?.[0]
    event.currentTarget.value = ''
    if (file !== undefined) void openLocal(file)
  }

  if (current !== null) {
    return (
      <OfficeEditorSurface
        snapshot={snapshot}
        current={current}
        presentation="office-view"
        attach={attach}
        detach={detach}
        onRetry={retrySession}
        setReadOnly={setReadOnly}
        exportDocument={exportDocument}
        exportPdf={exportPdf}
        clearIssue={clearIssue}
        markPotentialEdits={markPotentialEdits}
        t={t}
        onClose={() => { void closeDocument() }}
      />
    )
  }

  const issue = snapshot.status === 'error' ? snapshot.issue : undefined
  const issueCopy = issue === undefined ? undefined : officeIssueCopy(t, issue.kind)
  const busy = snapshot.status === 'loading'
  return (
    <section className="bamboo-office-view" aria-label="Bamboo Office">
      <input ref={inputRef} type="file" accept={OFFICE_FILE_ACCEPT} hidden onChange={onFileChange} />
      <div className="bamboo-office-empty">
        <div className="bamboo-office-empty-card">
          <div className="bamboo-office-brand-mark" aria-hidden>BO</div>
          <h2>Bamboo Office</h2>
          <p>{t('empty.description')}</p>
          <small>Powered by Bamboo Office SDK</small>
          {busy ? <div className="bamboo-office-empty-status" role="status">{t('empty.loading')}</div> : null}
          {issue === undefined ? null : (
            <div className="bamboo-office-empty-error" role="alert">
              <strong>{issueCopy?.title}</strong>
              <span>{issueCopy?.detail}</span>
              {issue.retryable ? <button className="bamboo-office-button" onClick={() => void retrySession()}>{t('action.retry')}</button> : null}
            </div>
          )}
          <div className="bamboo-office-actions">
            <button className="bamboo-office-button bamboo-office-button-primary" disabled={busy} onClick={chooseFile}>
              {t('empty.openFile')}
            </button>
          </div>
          <div className="bamboo-office-create-label">{t('empty.newDocument')}</div>
          <div className="bamboo-office-actions">
            <button className="bamboo-office-button" disabled={busy} onClick={() => void createDocument(1)}>{t('empty.newWord')}</button>
            <button className="bamboo-office-button" disabled={busy} onClick={() => void createDocument(2)}>{t('empty.newExcel')}</button>
            <button className="bamboo-office-button" disabled={busy} onClick={() => void createDocument(3)}>{t('empty.newPowerPoint')}</button>
          </div>
        </div>
      </div>
    </section>
  )
}
