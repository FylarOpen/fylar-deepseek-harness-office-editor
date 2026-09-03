import type { ConvViewProps } from '@deepseek-ai/dsh-client-ui-conversation/client';
import type { InjectFace, PropsLocale } from '@deepseek-ai/dsh-client-ui-slots';
import type { ObservableSnapshot, OfficeWorkspaceActions, OfficeWorkspaceSnapshot } from './office-workspace.ts';
import type { OfficeSessionSnapshot } from './office-artifact-controller.ts';
import type { OfficeDocType } from './office-types.ts';
import { OFFICE_LOCALE_NS } from './locales.ts';
export interface OfficeViewInjected extends Pick<OfficeWorkspaceActions, 'preload' | 'attach' | 'detach' | 'setReadOnly' | 'exportDocument' | 'exportPdf' | 'clearIssue' | 'markPotentialEdits'> {
    hooks: {
        workspace: ObservableSnapshot<OfficeWorkspaceSnapshot>;
        officeSession: ObservableSnapshot<OfficeSessionSnapshot>;
    };
    openLocal: (file: File) => Promise<void>;
    createDocument: (docType: OfficeDocType) => Promise<void>;
    retrySession: () => Promise<void>;
    activateOfficeView: () => void;
    parkOfficeView: () => void;
    closeDocument: () => Promise<void>;
}
type OfficeViewProps = ConvViewProps & PropsLocale<typeof OFFICE_LOCALE_NS> & InjectFace<OfficeViewInjected>;
export declare function OfficeView({ useWorkspace, useOfficeSession, preload, attach, detach, setReadOnly, exportDocument, exportPdf, clearIssue, markPotentialEdits, openLocal, createDocument, retrySession, activateOfficeView, parkOfficeView, closeDocument, t, }: OfficeViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=OfficeView.d.ts.map