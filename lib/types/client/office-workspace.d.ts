import type { OfficePluginIssue } from './office-errors.ts';
import type { OfficeDocType } from './office-types.ts';
import type { OfficeSdk } from './office-types.ts';
export type OfficeOperation = 'readonly' | 'export' | 'pdf' | 'close';
export type OfficeWorkspaceSnapshot = {
    status: 'empty';
} | {
    status: 'loading';
    action: 'open' | 'create' | 'preload';
    label: string;
} | {
    status: 'ready';
    fileName: string;
    docType: OfficeDocType;
    origin: 'opened' | 'created' | 'workspace';
    readOnly: boolean;
    operation: OfficeOperation | null;
    hasPotentialEdits: boolean;
    issue?: OfficePluginIssue | undefined;
} | {
    status: 'error';
    issue: OfficePluginIssue;
};
export interface ObservableSnapshot<T> {
    getSnapshot(): T;
    subscribe(listener: () => void): () => void;
}
interface ResizeObserverLike {
    observe(target: Element): void;
    disconnect(): void;
}
interface OfficeWorkspaceEnvironment {
    window: Window;
    document: Document;
    createResizeObserver(callback: () => void): ResizeObserverLike | null;
}
export interface OfficeWorkspaceActions {
    preload(): Promise<void>;
    retry(): Promise<void>;
    attach(container: HTMLElement): void;
    detach(container: HTMLElement): void;
    open(file: File): Promise<void>;
    openUrl(fileName: string, url: string): Promise<void>;
    create(docType: OfficeDocType): Promise<void>;
    setReadOnly(readOnly: boolean): Promise<void>;
    exportDocument(): Promise<void>;
    exportPdf(): Promise<void>;
    close(): Promise<void>;
    clearIssue(): void;
    markPotentialEdits(): void;
}
export interface OfficeSdkLoaderLike {
    preload(): Promise<void>;
    load(): Promise<OfficeSdk>;
    resetFailure(): void;
}
/** Browser-wide owner of the single Office SDK instance and persistent DOM host. */
export declare class OfficeWorkspace {
    private readonly loader;
    private snapshot;
    private readonly listeners;
    private readonly environment;
    private readonly root;
    private readonly parking;
    private readonly observer;
    private widget;
    private app;
    private generation;
    private queue;
    private disposed;
    private lastRetry;
    private timers;
    private frames;
    readonly source: ObservableSnapshot<OfficeWorkspaceSnapshot>;
    readonly actions: OfficeWorkspaceActions;
    constructor(loader: OfficeSdkLoaderLike, environment?: OfficeWorkspaceEnvironment);
    private readonly beforeUnload;
    private publish;
    private publishIssue;
    private enqueue;
    private assertCurrent;
    private clearScheduledRefresh;
    private refresh;
    private scheduleRefresh;
    private options;
    private cleanupWidget;
    private mount;
    preload(): Promise<void>;
    retry(): Promise<void>;
    attach(container: HTMLElement): void;
    detach(container: HTMLElement): void;
    open(file: File): Promise<void>;
    /** Fetch a workspace Office file from the same-origin Host route and open it. */
    openUrl(fileName: string, url: string): Promise<void>;
    create(docType: OfficeDocType): Promise<void>;
    private ready;
    private readyOperation;
    setReadOnly(readOnly: boolean): Promise<void>;
    exportDocument(): Promise<void>;
    exportPdf(): Promise<void>;
    clearIssue(): void;
    markPotentialEdits(): void;
    close(): Promise<void>;
    dispose(): Promise<void>;
}
export {};
//# sourceMappingURL=office-workspace.d.ts.map