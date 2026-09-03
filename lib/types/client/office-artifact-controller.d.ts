/** Global browser session linking Chat artifacts, the Office tab, and details. */
import type { ILayout } from '@deepseek-ai/dsh-client-ui-layout/client';
import type { ObservableSnapshot, OfficeWorkspace } from './office-workspace.ts';
import type { OfficeDocType } from './office-types.ts';
export type OfficePresentation = 'inline' | 'details' | 'office-view' | 'parked';
export type OfficeDocumentSource = {
    readonly kind: 'workspace';
    readonly path: string;
    readonly cwd: string;
    readonly fileName: string;
    readonly url: string;
    readonly docType: OfficeDocType;
} | {
    readonly kind: 'local';
    readonly fileName: string;
    readonly docType: OfficeDocType;
} | {
    readonly kind: 'created';
    readonly fileName: string;
    readonly docType: OfficeDocType;
};
export interface OfficeSessionSelection {
    readonly source: OfficeDocumentSource;
    readonly presentation: OfficePresentation;
}
export interface OfficeSessionSnapshot {
    readonly current: OfficeSessionSelection | null;
}
export interface OfficeArtifactTarget {
    readonly path: string;
    readonly cwd?: string | undefined;
}
export interface OfficeLayoutLeaseLike {
    acquire(): boolean;
    release(): boolean;
    dispose(): void;
}
export declare function workspaceOfficeUrl(cwd: string, path: string): string;
/** Owns the one live Office document and every place where its DOM may appear. */
export declare class OfficeSessionController {
    private readonly workspace;
    private readonly layout;
    private readonly layoutLease;
    private readonly showPanel;
    private readonly releasePanel;
    private snapshot;
    private readonly listeners;
    private disposed;
    readonly source: ObservableSnapshot<OfficeSessionSnapshot>;
    constructor(workspace: OfficeWorkspace, layout: ILayout, layoutLease: OfficeLayoutLeaseLike, showPanel: () => void, releasePanel: () => void);
    private publish;
    private present;
    private openWorkspaceNow;
    private openWorkspace;
    openDetails(target: OfficeArtifactTarget): Promise<void>;
    openInline(target: OfficeArtifactTarget): Promise<void>;
    openLocal(file: File): Promise<void>;
    create(docType: OfficeDocType): Promise<void>;
    activateOfficeView(): void;
    parkOfficeView(): void;
    collapseInline(): void;
    retry(): Promise<void>;
    close(): Promise<void>;
    dispose(): Promise<void>;
}
//# sourceMappingURL=office-artifact-controller.d.ts.map