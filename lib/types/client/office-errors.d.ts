/** User-facing error taxonomy for the Office adapter. */
export type OfficePluginErrorKind = 'unsupported-file' | 'unsupported-browser' | 'runtime-load' | 'asset' | 'open' | 'create' | 'export' | 'pdf-environment' | 'cancelled' | 'unknown';
export interface OfficePluginIssue {
    kind: OfficePluginErrorKind;
    retryable: boolean;
}
export declare class OfficePluginFailure extends Error {
    readonly kind: OfficePluginErrorKind;
    constructor(kind: OfficePluginErrorKind, message: string, options?: ErrorOptions);
}
export declare function issueFor(kind: OfficePluginErrorKind): OfficePluginIssue;
export declare function classifyOfficeError(error: unknown, fallback: OfficePluginErrorKind): OfficePluginIssue;
//# sourceMappingURL=office-errors.d.ts.map