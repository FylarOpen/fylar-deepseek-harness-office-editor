import type { IncomingMessage, ServerResponse } from 'node:http';
export declare const OFFICE_FILE_ROUTE_PREFIX = "/fylar-office-files";
export declare const MAX_OFFICE_FILE_BYTES: number;
export interface WorkspacePathRegistry {
    list(): readonly {
        readonly path: string;
    }[];
}
/** Build a URL that the browser can fetch without exposing a filesystem API. */
export declare function officeFileUrl(workspace: string, path: string): string;
/** Create a GET/HEAD handler restricted to registered DSH workspace roots. */
export declare function createOfficeFileHandler(workspaces: WorkspacePathRegistry): (req: IncomingMessage, res: ServerResponse) => Promise<void>;
//# sourceMappingURL=office-file-route.d.ts.map