import type { InjectFace, PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { ObservableSnapshot, OfficeWorkspaceActions, OfficeWorkspaceSnapshot } from './office-workspace.ts';
import type { OfficeSessionSnapshot } from './office-artifact-controller.ts';
import { OFFICE_LOCALE_NS } from './locales.ts';
export interface OfficeDetailsInjected extends Pick<OfficeWorkspaceActions, 'attach' | 'detach' | 'setReadOnly' | 'exportDocument' | 'exportPdf' | 'clearIssue' | 'markPotentialEdits'> {
    hooks: {
        workspace: ObservableSnapshot<OfficeWorkspaceSnapshot>;
        officeSession: ObservableSnapshot<OfficeSessionSnapshot>;
    };
    retrySession: () => Promise<void>;
    closePanel: () => void;
}
export type OfficeDetailsPanelProps = PropsRuntime<'details'> & PropsLocale<typeof OFFICE_LOCALE_NS> & InjectFace<OfficeDetailsInjected>;
/** Render the persistent SDK root plus compact edit/export controls. */
export declare function OfficeDetailsPanel({ useWorkspace, useOfficeSession, attach, detach, retrySession, setReadOnly, exportDocument, exportPdf, clearIssue, markPotentialEdits, closePanel, t, }: OfficeDetailsPanelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=OfficeDetailsPanel.d.ts.map