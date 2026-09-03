import type { OfficeSdk } from './office-types.ts';
export type RuntimeImporter = (url: string) => Promise<unknown>;
/** Deduplicated same-origin loader for the unbundled Office SDK runtime. */
export declare class OfficeSdkLoader {
    private readonly basePath;
    private readonly importer;
    private preloadPromise;
    private sdkPromise;
    constructor(basePath?: string, importer?: RuntimeImporter);
    preload(): Promise<void>;
    load(): Promise<OfficeSdk>;
    resetFailure(): void;
}
//# sourceMappingURL=office-sdk-loader.d.ts.map