/** User-facing error taxonomy for the Office adapter. */
export type OfficePluginErrorKind =
  | 'unsupported-file'
  | 'unsupported-browser'
  | 'runtime-load'
  | 'asset'
  | 'open'
  | 'create'
  | 'export'
  | 'pdf-environment'
  | 'cancelled'
  | 'unknown'

export interface OfficePluginIssue {
  kind: OfficePluginErrorKind
  retryable: boolean
}

export class OfficePluginFailure extends Error {
  constructor(
    readonly kind: OfficePluginErrorKind,
    message: string,
    options?: ErrorOptions,
  ) {
    super(message, options)
    this.name = 'OfficePluginFailure'
  }
}

const RETRYABLE: Readonly<Record<OfficePluginErrorKind, boolean>> = {
  'unsupported-file': false,
  'unsupported-browser': false,
  'runtime-load': true,
  asset: true,
  open: true,
  create: true,
  export: true,
  'pdf-environment': false,
  cancelled: false,
  unknown: true,
}

export function issueFor(kind: OfficePluginErrorKind): OfficePluginIssue {
  return { kind, retryable: RETRYABLE[kind] }
}

export function classifyOfficeError(error: unknown, fallback: OfficePluginErrorKind): OfficePluginIssue {
  if (error instanceof OfficePluginFailure) return issueFor(error.kind)
  const message = error instanceof Error ? error.message : String(error ?? '')
  if (/OPEN_CANCELLED|cancelled|canceled/iu.test(message)) return issueFor('cancelled')
  if (/worker|sharedworker|wasm|webassembly|404|cors|mime|network|fetch/iu.test(message)) {
    return issueFor('asset')
  }
  return issueFor(fallback)
}
