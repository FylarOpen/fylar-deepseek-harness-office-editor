export interface SdkLockFile {
  formatVersion: number
  sdkName: string
  sdkVersion: string
  source: string
  sourceSha256: string
  files: Array<{ path: string; size: number; sha256: string }>
}

export const REQUIRED_SDK_PATHS: string[]
export const OFFICE_SDK_LICENSE_ENDPOINT: string
export function sha256(data: string | NodeJS.ArrayBufferView): string
export function sdkZipRootPrefix(rawNames: Iterable<string>): string
export function sdkZipLibRelativePath(rawName: string, rootPrefix?: string): string | null
export function listRegularFiles(root: string): Promise<string[]>
export function buildFileInventory(root: string): Promise<SdkLockFile['files']>
export function validateLicenseDefaults(source: string): Map<string, string>
export function validateRequiredFiles(root: string): Promise<{
  metadata: Record<string, unknown> & { name: string; version: string }
  manifest: Record<string, unknown> & { version: string }
}>
export function verifyNoticeCopies(vendorRoot: string): Promise<void>
export function verifyLock(vendorRoot: string): Promise<{
  lock: SdkLockFile
  metadata: Record<string, unknown> & { name: string; version: string }
}>
