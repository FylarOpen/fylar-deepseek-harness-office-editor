import type { OfficeSessionSelection } from './office-artifact-controller.ts';
import type { OfficeWorkspaceActions, OfficeWorkspaceSnapshot } from './office-workspace.ts';
import { type OfficeTranslate } from './locales.ts';
export interface OfficeEditorSurfaceProps extends Pick<OfficeWorkspaceActions, 'attach' | 'detach' | 'setReadOnly' | 'exportDocument' | 'exportPdf' | 'clearIssue' | 'markPotentialEdits'> {
    readonly snapshot: OfficeWorkspaceSnapshot;
    readonly current: OfficeSessionSelection | null;
    readonly presentation: 'details' | 'inline' | 'office-view';
    readonly onRetry: () => Promise<void>;
    readonly onClose: () => void;
    readonly onCollapse?: (() => void) | undefined;
    readonly onOpenDetails?: (() => void) | undefined;
    readonly t?: OfficeTranslate | undefined;
}
/** Render one live SDK host; callers decide whether it occupies Chat or details. */
export declare function OfficeEditorSurface({ snapshot, current, presentation, attach, detach, onRetry, setReadOnly, exportDocument, exportPdf, clearIssue, markPotentialEdits, onClose, onCollapse, onOpenDetails, t, }: OfficeEditorSurfaceProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=OfficeEditorSurface.d.ts.map