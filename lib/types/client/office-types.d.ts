/** Minimal public Office SDK surface consumed by the DSH adapter. */
export type OfficeDocType = 1 | 2 | 3;
export type OfficeLocale = 'zh-CN' | 'en-US';
export interface OfficeSdkOpenOptions {
    uiOptions?: {
        showTopBar?: boolean;
        showBottomBar?: boolean;
    };
    mode?: {
        readOnly?: boolean;
        lang?: OfficeLocale;
    };
}
export interface OfficeDocumentApi {
    updateVisibleArea(): void;
    exportDocument(): Promise<void>;
    exportPdf(printOptions?: unknown): Promise<void>;
    startReadOnly(): void;
    endReadOnly(): void;
    isReadOnly(): boolean;
}
export interface OfficeRenderedApp {
    Document: OfficeDocumentApi;
}
export interface OfficeWidget {
    mount(target: HTMLElement): OfficeWidget;
    render(): Promise<OfficeRenderedApp>;
    close(): Promise<void>;
    readonly docType: number;
    readonly docTypeName: string | null;
}
export interface OfficeWidgetResult {
    docType: number;
    widget: OfficeWidget;
}
export interface OfficeSdk {
    openfile(fileData: {
        fileName: string;
        file: Blob;
        docId?: string;
    }, options?: OfficeSdkOpenOptions): Promise<OfficeWidgetResult>;
    createfile(docType: OfficeDocType, options?: OfficeSdkOpenOptions): Promise<OfficeWidgetResult>;
}
export interface OfficeSdkModule {
    default?: OfficeSdk;
    openfile?: OfficeSdk['openfile'];
    createfile?: OfficeSdk['createfile'];
}
//# sourceMappingURL=office-types.d.ts.map