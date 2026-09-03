import { OFFICE_SDK_BASE_PATH } from '../office-sdk.generated.ts'
import { OfficePluginFailure } from './office-errors.ts'
import type { OfficeSdk, OfficeSdkModule } from './office-types.ts'

export type RuntimeImporter = (url: string) => Promise<unknown>

const dynamicImport: RuntimeImporter = url => import(/* @vite-ignore */ url)

/** Deduplicated same-origin loader for the unbundled Office SDK runtime. */
export class OfficeSdkLoader {
  private preloadPromise: Promise<void> | null = null
  private sdkPromise: Promise<OfficeSdk> | null = null

  constructor(
    private readonly basePath = OFFICE_SDK_BASE_PATH,
    private readonly importer: RuntimeImporter = dynamicImport,
  ) {}

  preload(): Promise<void> {
    if (this.preloadPromise !== null) return this.preloadPromise
    const request = this.importer(`${this.basePath}/preload.js`).then(() => undefined)
    this.preloadPromise = request.catch((error: unknown) => {
      this.preloadPromise = null
      throw new OfficePluginFailure('runtime-load', 'Office preload failed', { cause: error })
    })
    return this.preloadPromise
  }

  load(): Promise<OfficeSdk> {
    if (this.sdkPromise !== null) return this.sdkPromise
    const request = this.importer(`${this.basePath}/UI.js`).then((value) => {
      const module = value as OfficeSdkModule
      const sdk = module.default ?? (
        typeof module.openfile === 'function' && typeof module.createfile === 'function'
          ? { openfile: module.openfile, createfile: module.createfile }
          : undefined
      )
      if (sdk === undefined || typeof sdk.openfile !== 'function' || typeof sdk.createfile !== 'function') {
        throw new Error('UI.js does not expose openfile and createfile')
      }
      return sdk
    })
    this.sdkPromise = request.catch((error: unknown) => {
      this.sdkPromise = null
      throw new OfficePluginFailure('runtime-load', 'Office UI runtime failed to load', { cause: error })
    })
    return this.sdkPromise
  }

  resetFailure(): void {
    this.preloadPromise = null
    this.sdkPromise = null
  }
}
