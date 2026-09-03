import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Context } from '@deepseek-ai/cordis';
/** Stable Cordis plugin name. */
export declare const name = "dsh-fylar-office-editor";
/** Host services required by the SDK route, workspace file route, and Agent tool. */
export declare const inject: string[];
/**
 * Create the versioned Office static-asset handler.
 * @param sdkRoot - Absolute vendored lib directory; overridable by tests.
 * @returns A node:http request handler.
 */
export declare function createOfficeAssetHandler(sdkRoot?: string): (req: IncomingMessage, res: ServerResponse) => Promise<void>;
/** Register the Office runtime under the DSH Web origin. */
export declare function apply(ctx: Context): void;
//# sourceMappingURL=index.d.ts.map