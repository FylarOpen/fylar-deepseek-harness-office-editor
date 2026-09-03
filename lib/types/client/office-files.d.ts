import type { OfficeDocType } from './office-types.ts';
export declare const OFFICE_FILE_ACCEPT = ".doc,.docx,.xls,.xlsx,.pptx";
export interface OfficeDocumentDescriptor {
    readonly docType: OfficeDocType;
    readonly product: 'Word' | 'Excel' | 'PowerPoint';
    readonly extension: 'DOC' | 'DOCX' | 'XLS' | 'XLSX' | 'PPTX';
    readonly supportsPdf: boolean;
    readonly accent: 'word' | 'excel' | 'powerpoint';
}
export declare function officeFileExtension(name: string): string;
export declare function officeBaseName(path: string): string;
export declare function isSupportedOfficeFile(name: string): boolean;
export declare function assertSupportedOfficeFile(file: Pick<File, 'name'>): void;
export declare function inferOfficeDocType(name: string): OfficeDocType;
export declare function createdFileName(docType: OfficeDocType): string;
export declare function describeOfficeDocument(name: string, fallbackType?: OfficeDocType): OfficeDocumentDescriptor;
export declare function officeDirectoryLabel(path: string, rootLabel: string): string;
//# sourceMappingURL=office-files.d.ts.map