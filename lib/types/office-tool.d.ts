import type { Context } from '@deepseek-ai/cordis';
declare const PRESENTABLE_OFFICE_TYPES: readonly ["doc", "docx", "xls", "xlsx", "pptx"];
type PresentableOfficeType = (typeof PRESENTABLE_OFFICE_TYPES)[number];
export interface CreateDocxArgs {
    file_path: string;
    content: string;
    title?: string;
}
export interface CreateDocxResult {
    path: string;
    fileName: string;
    bytes: number;
    type: 'docx';
}
export interface PresentOfficeFileArgs {
    file_path: string;
}
export interface PresentOfficeFileResult {
    path: string;
    fileName: string;
    bytes: number;
    type: PresentableOfficeType;
}
/** Validate constraints that the DSH schema DSL cannot express. */
export declare function validateCreateDocxArgs(args: CreateDocxArgs): void;
/** Validate the path shape before resolving it against the active Workspace. */
export declare function validatePresentOfficeFileArgs(args: PresentOfficeFileArgs): PresentableOfficeType;
/** Register Office creation/presentation tools and their stable model guidance. */
export declare function registerOfficeTools(ctx: Context): void;
export {};
//# sourceMappingURL=office-tool.d.ts.map