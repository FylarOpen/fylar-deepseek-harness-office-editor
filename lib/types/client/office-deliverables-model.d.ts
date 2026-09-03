/** Persisted successful Office file outputs for one conversation turn. */
export interface ProducedOfficeFile {
    readonly seq: number;
    readonly path: string;
}
export interface OfficeDeliverablesData {
    readonly produced: readonly ProducedOfficeFile[];
}
/** Return only file outputs that existed when the closing message was rendered. */
export declare function officeFilesForClosing(data: Readonly<OfficeDeliverablesData> | undefined, seq: number): readonly string[];
//# sourceMappingURL=office-deliverables-model.d.ts.map