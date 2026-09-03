/** Narrow bridge to DSH layout state that is not exposed through ILayout. */
import type { ILayout } from '@deepseek-ai/dsh-client-ui-layout/client';
/**
 * Owns a temporary collapse of DSH's left sidebar while Office uses details.
 * A later user or responsive-layout change invalidates restoration ownership.
 */
export declare class OfficeLayoutLease {
    private readonly layout;
    private readonly documentTarget;
    private frame;
    private observer;
    private restore;
    private expectedCollapse;
    private overridden;
    constructor(layout: ILayout, documentTarget?: Document);
    acquire(): boolean;
    release(): boolean;
    dispose(): void;
}
//# sourceMappingURL=layout-interop.d.ts.map