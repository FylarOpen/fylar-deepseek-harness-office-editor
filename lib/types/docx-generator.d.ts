/** Markdown-to-DOCX conversion used by the model-facing Office tool. */
import { TextRun } from 'docx';
/** Convert small, common Markdown inline spans into Word text runs. */
export declare function inlineRuns(text: string): TextRun[];
/** Build a standards-compliant DOCX buffer from a title and Markdown body. */
export declare function createDocxBuffer(title: string | undefined, markdown: string): Promise<Buffer>;
//# sourceMappingURL=docx-generator.d.ts.map