/** Shared Office editor chrome for the details column and inline Chat card. */
import { useEffect, useRef, useState } from 'react'
import type { OfficeSessionSelection } from './office-artifact-controller.ts'
import { pdfEnvironmentProblem } from './office-capabilities.ts'
import { describeOfficeDocument } from './office-files.ts'
import type { OfficeWorkspaceActions, OfficeWorkspaceSnapshot } from './office-workspace.ts'
import { OfficeActionMenu, type OfficeActionMenuItem } from './OfficeActionMenu.tsx'
import { OfficeFileIcon } from './OfficeFileIcon.tsx'
import { officeIssueCopy, type OfficeTranslate, zhT } from './locales.ts'

export interface OfficeEditorSurfaceProps extends Pick<
  OfficeWorkspaceActions,
  'attach' | 'detach' | 'setReadOnly' | 'exportDocument' | 'exportPdf' | 'clearIssue' | 'markPotentialEdits'
> {
  readonly snapshot: OfficeWorkspaceSnapshot
  readonly current: OfficeSessionSelection | null
  readonly presentation: 'details' | 'inline' | 'office-view'
  readonly onRetry: () => Promise<void>
  readonly onClose: () => void
  readonly onCollapse?: (() => void) | undefined
  readonly onOpenDetails?: (() => void) | undefined
  readonly t?: OfficeTranslate | undefined
}

/** Render one live SDK host; callers decide whether it occupies Chat or details. */
export function OfficeEditorSurface({
  snapshot, current, presentation, attach, detach, onRetry, setReadOnly,
  exportDocument, exportPdf, clearIssue, markPotentialEdits, onClose, onCollapse, onOpenDetails,
  t = zhT,
}: OfficeEditorSurfaceProps) {
  const surfaceRef = useRef<HTMLElement>(null)
  const viewerRef = useRef<HTMLDivElement>(null)
  const [fullscreen, setFullscreen] = useState(false)
  const fullscreenSupported = typeof Element !== 'undefined'
    && typeof Element.prototype.requestFullscreen === 'function'
    && typeof document.exitFullscreen === 'function'

  useEffect(() => {
    const container = viewerRef.current
    if (container === null) return
    attach(container)
    return () => { detach(container) }
  }, [attach, detach])

  useEffect(() => {
    const container = viewerRef.current
    if (container === null || snapshot.status !== 'ready' || snapshot.readOnly) return
    const mark = (): void => { markPotentialEdits() }
    container.addEventListener('pointerdown', mark, true)
    container.addEventListener('keydown', mark, true)
    container.addEventListener('input', mark, true)
    return () => {
      container.removeEventListener('pointerdown', mark, true)
      container.removeEventListener('keydown', mark, true)
      container.removeEventListener('input', mark, true)
    }
  }, [markPotentialEdits, snapshot])

  useEffect(() => {
    const surface = surfaceRef.current
    if (
      presentation !== 'inline'
      || snapshot.status !== 'ready'
      || surface === null
      || typeof surface.scrollIntoView !== 'function'
    ) return
    surface.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' })
  }, [presentation, snapshot.status])

  useEffect(() => {
    const update = (): void => {
      setFullscreen(document.fullscreenElement === surfaceRef.current)
    }
    document.addEventListener('fullscreenchange', update)
    return () => { document.removeEventListener('fullscreenchange', update) }
  }, [])

  const toggleFullscreen = (): void => {
    const surface = surfaceRef.current
    if (surface === null || !fullscreenSupported) return
    const request = document.fullscreenElement === surface
      ? document.exitFullscreen()
      : surface.requestFullscreen()
    void request.catch(error => {
      console.error('[dsh-fylar-office-editor] fullscreen transition failed', error)
    })
  }

  const ready = snapshot.status === 'ready'
  const busy = snapshot.status === 'loading' || (ready && snapshot.operation !== null)
  const issue = snapshot.status === 'error' ? snapshot.issue : ready ? snapshot.issue : undefined
  const localizedIssue = issue === undefined ? undefined : officeIssueCopy(t, issue.kind)
  const fileName = ready ? snapshot.fileName : current?.source.fileName ?? t('document.fallback')
  const descriptor = describeOfficeDocument(fileName, ready ? snapshot.docType : current?.source.docType ?? 1)
  const pdfProblemCode = ready && descriptor.supportsPdf ? pdfEnvironmentProblem() : null
  const pdfProblem = pdfProblemCode === 'insecure-context'
    ? t('pdf.insecureContext')
    : pdfProblemCode === 'local-fonts-unavailable' ? t('pdf.localFontsUnavailable') : null
  const modeLabel = snapshot.status === 'error'
    ? t('mode.openFailed')
    : !ready
      ? t('mode.preparing')
      : snapshot.operation === 'readonly'
        ? t('mode.switching')
        : snapshot.readOnly
          ? t('mode.readOnly')
          : snapshot.hasPotentialEdits ? t('mode.dirty') : t('mode.editing')
  const modeTone = snapshot.status === 'error'
    ? 'error'
    : !ready
      ? 'loading'
      : snapshot.readOnly
        ? 'readonly'
        : snapshot.hasPotentialEdits ? 'dirty' : 'editing'
  const modeHelp = ready && snapshot.readOnly
    ? t('help.readOnly')
    : t('help.editing')
  const exportLabel = ready && snapshot.operation === 'export'
    ? t('action.downloading')
    : ready && snapshot.operation === 'pdf' ? t('action.exporting') : t('action.export')
  const exportItems: OfficeActionMenuItem[] = ready ? [{
    id: 'office',
    label: t('action.download', { extension: descriptor.extension }),
    description: t('action.downloadDescription'),
    onSelect: () => { void exportDocument() },
  }] : []
  if (ready && descriptor.supportsPdf) {
    exportItems.push({
      id: 'pdf',
      label: t('action.exportPdf'),
      description: pdfProblem ?? t('action.exportPdfDescription'),
      disabled: pdfProblem !== null,
      onSelect: () => { void exportPdf() },
    })
  }
  const moreItems: OfficeActionMenuItem[] = []
  if (ready) {
    moreItems.push({
      id: 'readonly',
      label: snapshot.readOnly ? t('action.enableEditing') : t('action.readOnly'),
      description: snapshot.readOnly ? t('action.enableEditingDescription') : t('action.readOnlyDescription'),
      onSelect: () => { void setReadOnly(!snapshot.readOnly) },
    })
  }
  if (onOpenDetails !== undefined) {
    moreItems.push({ id: 'details', label: t('action.openDetails'), onSelect: onOpenDetails })
  }
  const directClose = presentation === 'details'
  if (!directClose) {
    moreItems.push({
      id: 'close',
      label: t('action.closeSession'),
      description: t('action.closeSessionDescription'),
      danger: true,
      onSelect: onClose,
    })
  }

  return (
    <section
      ref={surfaceRef}
      className={`fylar-office-details fylar-office-editor-${presentation}`}
      data-fullscreen={fullscreen ? 'true' : undefined}
      aria-label={presentation === 'inline' ? t('editor.inlineAria') : t('editor.aria')}
    >
      <header className="fylar-office-details-header">
        <div className="fylar-office-document-identity">
          <OfficeFileIcon descriptor={descriptor} compact />
          <div className="fylar-office-details-heading">
            <strong>{fileName}</strong>
            <span className="fylar-office-document-meta">
              <span className="fylar-office-document-product">{t('document.kind', { product: descriptor.product })}</span>
              <span className="fylar-office-document-separator" aria-hidden>·</span>
              <span className="fylar-office-mode-badge" data-tone={modeTone} title={modeHelp} aria-label={`${modeLabel}: ${modeHelp}`}>
                <span aria-hidden />
                {modeLabel}
              </span>
            </span>
          </div>
        </div>
        <div className="fylar-office-details-header-actions">
          <OfficeActionMenu label={exportLabel} icon="export" variant="text" disabled={!ready || busy} items={exportItems} />
          <button
            type="button"
            className="fylar-office-details-close"
            disabled={busy || !fullscreenSupported}
            aria-label={fullscreen ? t('action.exitFullscreen') : t('action.fullscreen')}
            title={fullscreenSupported
              ? (fullscreen ? t('action.exitFullscreen') : t('action.fullscreen'))
              : t('action.fullscreenUnsupported')}
            onClick={toggleFullscreen}
          >
            {fullscreen ? (
              <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden>
                <path d="M6.5 2.5v4h-4M9.5 2.5v4h4M6.5 13.5v-4h-4M9.5 13.5v-4h4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden>
                <path d="M6 2.5H2.5V6M10 2.5h3.5V6M6 13.5H2.5V10M10 13.5h3.5V10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          {onCollapse === undefined ? null : (
            <button type="button" className="fylar-office-details-close" disabled={busy} aria-label={t('action.collapseAria')} onClick={onCollapse}>
              <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden>
                <path d="M3.5 10l4.5-4 4.5 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{t('action.collapse')}</span>
            </button>
          )}
          {moreItems.length === 0 ? null : (
            <OfficeActionMenu label={t('action.moreDocument')} icon="more" disabled={snapshot.status === 'loading'} items={moreItems} />
          )}
          {directClose ? (
            <button
              type="button"
              className="fylar-office-details-close"
              disabled={busy}
              aria-label={t('action.closeDocument')}
              title={t('action.closeDocument')}
              onClick={onClose}
            >
              <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden>
                <path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          ) : null}
        </div>
      </header>
      {issue !== undefined ? (
        <div className="fylar-office-details-error" role="alert">
          <strong>{localizedIssue?.title}</strong>
          <span>{localizedIssue?.detail}</span>
          <div>
            {issue.retryable ? <button type="button" onClick={() => void onRetry()}>{t('action.retry')}</button> : null}
            {ready ? <button type="button" onClick={clearIssue}>{t('action.dismiss')}</button> : null}
          </div>
        </div>
      ) : null}
      <div className="fylar-office-details-body">
        <div ref={viewerRef} className="fylar-office-details-viewer" />
        {snapshot.status === 'loading' ? (
          <div className="fylar-office-details-loading" role="status">{t('editor.opening', { name: snapshot.label })}</div>
        ) : null}
      </div>
    </section>
  )
}
