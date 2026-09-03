import type { OfficeDocumentDescriptor } from './office-files.ts'

export function OfficeFileIcon({
  descriptor, compact = false,
}: {
  readonly descriptor: OfficeDocumentDescriptor
  readonly compact?: boolean | undefined
}) {
  const letter = descriptor.docType === 1 ? 'W' : descriptor.docType === 2 ? 'X' : 'P'
  return (
    <span className="bamboo-office-artifact-icon" data-accent={descriptor.accent} data-compact={compact ? 'true' : undefined} aria-hidden>
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path d="M6 2.75h8l4 4V21.25H6z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 2.75v4h4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="8" y="17" fill="currentColor" fontSize="8" fontWeight="700">{letter}</text>
      </svg>
    </span>
  )
}
