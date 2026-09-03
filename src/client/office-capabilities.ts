import { OfficePluginFailure } from './office-errors.ts'

export const REQUIRED_BROWSER_CAPABILITIES = [
  'Worker',
  'SharedWorker',
  'WebAssembly',
  'indexedDB',
  'Blob',
  'ArrayBuffer',
] as const

/** Return missing Office runtime browser capabilities. */
export function missingOfficeCapabilities(subject: object = globalThis): string[] {
  return REQUIRED_BROWSER_CAPABILITIES.filter(name => !(name in subject))
}

/** Fail before runtime initialization when the browser cannot host the SDK. */
export function assertOfficeCapabilities(subject: object = globalThis): void {
  const missing = missingOfficeCapabilities(subject)
  if (missing.length > 0) {
    throw new OfficePluginFailure('unsupported-browser', `Missing browser capabilities: ${missing.join(', ')}`)
  }
}

/** Map the host language to one of the two locale bundles shipped by the vendored SDK. */
export function resolveOfficeLocale(language: string | undefined): 'zh-CN' | 'en-US' {
  return language?.toLowerCase().startsWith('zh') === true ? 'zh-CN' : 'en-US'
}

export type PdfEnvironmentProblem = 'insecure-context' | 'local-fonts-unavailable'

export function pdfEnvironmentProblem(subject: Window = window): PdfEnvironmentProblem | null {
  const browser = subject as Window & { queryLocalFonts?: () => Promise<unknown> }
  if (!browser.isSecureContext) return 'insecure-context'
  if (typeof browser.queryLocalFonts !== 'function') return 'local-fonts-unavailable'
  return null
}
