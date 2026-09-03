/** Plugin-owned copy for every UI element outside the Fylar Office SDK. */
import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots'
import type { OfficePluginErrorKind } from './office-errors.ts'

export const OFFICE_LOCALE_NS = 'fylar-office'

export const zh = {
  'view.label': 'Office',
  'document.fallback': 'Office 文档',
  'document.kind': '{product} 文档',
  'workspace.root': '工作区根目录',
  'tool.present.running': '正在准备 Office 文件预览…',
  'tool.present.error': 'Office 文件发布失败',
  'tool.present.stopped': 'Office 文件发布已停止',
  'tool.present.ready': 'Office 文件已可预览',
  'tool.create.running': '正在生成 Word 文档…',
  'tool.create.error': 'Word 文档生成失败',
  'tool.create.stopped': 'Word 文档生成已停止',
  'tool.create.ready': 'Word 文档已生成',
  'artifact.workspaceUnavailable': '当前会话工作区不可用',
  'artifact.parked': '临时编辑已保留 · 继续编辑',
  'artifact.details': '正在侧边栏编辑 · 点击移至对话',
  'artifact.officeView': '正在 Office 页签编辑 · 点击移至对话',
  'artifact.openInline': '{product} 文档 · 点击在对话中打开',
  'artifact.more': '更多操作：{name}',
  'artifact.group': '本轮生成的 Office 文件',
  'mode.openFailed': '打开失败',
  'mode.preparing': '正在准备',
  'mode.switching': '正在切换…',
  'mode.readOnly': '只读',
  'mode.dirty': '有临时修改',
  'mode.editing': '临时编辑',
  'help.readOnly': '文档当前为只读状态，可在更多菜单中启用编辑。',
  'help.editing': '当前修改不会覆盖原文件，请通过导出菜单下载副本保存。',
  'action.export': '导出',
  'action.downloading': '正在下载…',
  'action.exporting': '正在导出…',
  'action.download': '下载并保存 {extension}',
  'action.downloadDescription': '保存当前编辑内容的本地副本',
  'action.exportPdf': '导出 PDF',
  'action.exportPdfDescription': '生成便于分享的 PDF 副本',
  'action.enableEditing': '启用编辑',
  'action.enableEditingDescription': '允许修改当前文档',
  'action.readOnly': '切换为只读',
  'action.readOnlyDescription': '防止误触修改文档',
  'action.openDetails': '在侧边栏打开',
  'action.closeSession': '关闭编辑会话',
  'action.closeSessionDescription': '未下载的临时修改将不再保留',
  'action.fullscreen': '全屏编辑',
  'action.exitFullscreen': '退出全屏编辑',
  'action.fullscreenUnsupported': '当前浏览器不支持全屏',
  'action.collapse': '收起',
  'action.collapseAria': '收起对话内编辑器',
  'action.moreDocument': '更多文档操作',
  'action.closeDocument': '关闭 Office 文档',
  'action.retry': '重试',
  'action.dismiss': '关闭提示',
  'editor.inlineAria': '对话内 Office 文档编辑器',
  'editor.aria': 'Office 文档编辑器',
  'editor.opening': '正在打开 {name}…',
  'empty.description': '打开或新建 Word、Excel、PowerPoint 文档，在浏览器中临时编辑并下载保存。',
  'empty.loading': '正在加载 Office 运行时…',
  'empty.openFile': '打开 Office 文件',
  'empty.newDocument': '新建文档',
  'empty.newWord': '新建 Word',
  'empty.newExcel': '新建 Excel',
  'empty.newPowerPoint': '新建 PowerPoint',
  'pdf.insecureContext': 'PDF 导出需要在 localhost 或 HTTPS 安全上下文中运行。',
  'pdf.localFontsUnavailable': '当前浏览器不支持读取本地字体，无法导出 PDF。',
  'error.unsupported-file.title': '不支持的文件',
  'error.unsupported-file.detail': '请选择 DOC、DOCX、XLS、XLSX 或 PPTX 文件。',
  'error.unsupported-browser.title': '浏览器能力不可用',
  'error.unsupported-browser.detail': 'Fylar Office 需要浏览器支持 Worker、SharedWorker、WebAssembly、IndexedDB、Blob 和 ArrayBuffer。',
  'error.runtime-load.title': 'Office 运行时加载失败',
  'error.runtime-load.detail': '请重试；如果仍然失败，请检查已安装的 Office SDK 资源。',
  'error.asset.title': 'Office 资源加载失败',
  'error.asset.detail': 'Worker、WebAssembly、语言包或运行时资源无法加载。',
  'error.open.title': '无法打开文档',
  'error.open.detail': '请确认文件是有效且受支持的 Office 文档，然后重试。',
  'error.create.title': '无法新建文档',
  'error.create.detail': 'Office SDK 无法新建文档，请重试。',
  'error.export.title': '导出失败',
  'error.export.detail': 'Office SDK 无法完成导出，请重试。',
  'error.pdf-environment.title': '当前环境无法导出 PDF',
  'error.pdf-environment.detail': 'PDF 导出需要 localhost 或 HTTPS，并且浏览器必须支持访问本地字体。',
  'error.cancelled.title': '操作已取消',
  'error.cancelled.detail': '当前操作已被更新的 Office 操作替代。',
  'error.unknown.title': 'Office 操作失败',
  'error.unknown.detail': '发生了意外错误，请重试。',
} satisfies Record<string, string>

export type OfficeLocaleKey = keyof typeof zh
export type OfficeTranslate = TranslateNS<typeof OFFICE_LOCALE_NS>

export const en = {
  'view.label': 'Office',
  'document.fallback': 'Office document',
  'document.kind': '{product} document',
  'workspace.root': 'Workspace root',
  'tool.present.running': 'Preparing Office file preview…',
  'tool.present.error': 'Failed to publish Office file',
  'tool.present.stopped': 'Office file publishing stopped',
  'tool.present.ready': 'Office file ready to preview',
  'tool.create.running': 'Creating Word document…',
  'tool.create.error': 'Failed to create Word document',
  'tool.create.stopped': 'Word document creation stopped',
  'tool.create.ready': 'Word document created',
  'artifact.workspaceUnavailable': 'The current conversation workspace is unavailable',
  'artifact.parked': 'Temporary edits retained · Continue editing',
  'artifact.details': 'Editing in the side panel · Click to move into chat',
  'artifact.officeView': 'Editing in the Office tab · Click to move into chat',
  'artifact.openInline': '{product} document · Click to open in chat',
  'artifact.more': 'More actions: {name}',
  'artifact.group': 'Office files created in this turn',
  'mode.openFailed': 'Open failed',
  'mode.preparing': 'Preparing',
  'mode.switching': 'Switching…',
  'mode.readOnly': 'Read only',
  'mode.dirty': 'Temporary changes',
  'mode.editing': 'Temporary editing',
  'help.readOnly': 'This document is read only. Enable editing from the More menu.',
  'help.editing': 'Changes do not overwrite the original file. Download a copy from the Export menu to save them.',
  'action.export': 'Export',
  'action.downloading': 'Downloading…',
  'action.exporting': 'Exporting…',
  'action.download': 'Download and save {extension}',
  'action.downloadDescription': 'Save a local copy of the current edits',
  'action.exportPdf': 'Export PDF',
  'action.exportPdfDescription': 'Create a PDF copy for sharing',
  'action.enableEditing': 'Enable editing',
  'action.enableEditingDescription': 'Allow changes to the current document',
  'action.readOnly': 'Switch to read only',
  'action.readOnlyDescription': 'Prevent accidental document changes',
  'action.openDetails': 'Open in side panel',
  'action.closeSession': 'Close editing session',
  'action.closeSessionDescription': 'Temporary changes that were not downloaded will be lost',
  'action.fullscreen': 'Edit in full screen',
  'action.exitFullscreen': 'Exit full screen',
  'action.fullscreenUnsupported': 'Full screen is not supported by this browser',
  'action.collapse': 'Collapse',
  'action.collapseAria': 'Collapse the inline document editor',
  'action.moreDocument': 'More document actions',
  'action.closeDocument': 'Close Office document',
  'action.retry': 'Retry',
  'action.dismiss': 'Dismiss',
  'editor.inlineAria': 'Inline Office document editor',
  'editor.aria': 'Office document editor',
  'editor.opening': 'Opening {name}…',
  'empty.description': 'Open or create Word, Excel, and PowerPoint documents for temporary browser editing and download.',
  'empty.loading': 'Loading Office runtime…',
  'empty.openFile': 'Open Office file',
  'empty.newDocument': 'Create document',
  'empty.newWord': 'New Word',
  'empty.newExcel': 'New Excel',
  'empty.newPowerPoint': 'New PowerPoint',
  'pdf.insecureContext': 'PDF export requires localhost or a secure HTTPS context.',
  'pdf.localFontsUnavailable': 'This browser cannot access local fonts, so PDF export is unavailable.',
  'error.unsupported-file.title': 'Unsupported file',
  'error.unsupported-file.detail': 'Choose a DOC, DOCX, XLS, XLSX, or PPTX file.',
  'error.unsupported-browser.title': 'Browser capabilities unavailable',
  'error.unsupported-browser.detail': 'Fylar Office requires Worker, SharedWorker, WebAssembly, IndexedDB, Blob, and ArrayBuffer support.',
  'error.runtime-load.title': 'Failed to load the Office runtime',
  'error.runtime-load.detail': 'Retry. If it still fails, check the installed Office SDK assets.',
  'error.asset.title': 'Failed to load Office assets',
  'error.asset.detail': 'A Worker, WebAssembly module, locale bundle, or runtime asset could not be loaded.',
  'error.open.title': 'Unable to open document',
  'error.open.detail': 'Confirm that the file is a valid, supported Office document, then retry.',
  'error.create.title': 'Unable to create document',
  'error.create.detail': 'The Office SDK could not create the document. Please retry.',
  'error.export.title': 'Export failed',
  'error.export.detail': 'The Office SDK could not complete the export. Please retry.',
  'error.pdf-environment.title': 'PDF export is unavailable in this environment',
  'error.pdf-environment.detail': 'PDF export requires localhost or HTTPS and browser access to local fonts.',
  'error.cancelled.title': 'Operation cancelled',
  'error.cancelled.detail': 'A newer Office operation replaced this operation.',
  'error.unknown.title': 'Office operation failed',
  'error.unknown.detail': 'An unexpected error occurred. Please retry.',
} satisfies Record<OfficeLocaleKey, string>

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Copy owned by the Fylar Office plugin shell. */
    'fylar-office': OfficeLocaleKey
  }
}

function translator(dictionary: Record<OfficeLocaleKey, string>): OfficeTranslate {
  return (key, params) => {
    const template = dictionary[key as OfficeLocaleKey] ?? key
    if (params === undefined) return template
    return template.replace(/\{(\w+)\}/gu, (match, name: string) =>
      Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match)
  }
}

/** Chinese fallback for direct embedding and isolated component tests. */
export const zhT = translator(zh)

/** English translator used by locale coverage tests. */
export const enT = translator(en)

export function officeIssueCopy(t: OfficeTranslate, kind: OfficePluginErrorKind): { title: string; detail: string } {
  return {
    title: t(`error.${kind}.title`),
    detail: t(`error.${kind}.detail`),
  }
}
