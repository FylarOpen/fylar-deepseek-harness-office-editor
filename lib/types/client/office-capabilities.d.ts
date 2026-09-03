export declare const REQUIRED_BROWSER_CAPABILITIES: readonly ["Worker", "SharedWorker", "WebAssembly", "indexedDB", "Blob", "ArrayBuffer"];
/** Return missing Office runtime browser capabilities. */
export declare function missingOfficeCapabilities(subject?: object): string[];
/** Fail before runtime initialization when the browser cannot host the SDK. */
export declare function assertOfficeCapabilities(subject?: object): void;
/** Map the host language to one of the two locale bundles shipped by the vendored SDK. */
export declare function resolveOfficeLocale(language: string | undefined): 'zh-CN' | 'en-US';
export type PdfEnvironmentProblem = 'insecure-context' | 'local-fonts-unavailable';
export declare function pdfEnvironmentProblem(subject?: Window): PdfEnvironmentProblem | null;
//# sourceMappingURL=office-capabilities.d.ts.map