import { OfficePluginFailure } from './office-errors.ts'
import type { OfficeDocType } from './office-types.ts'

export const OFFICE_FILE_ACCEPT = '.doc,.docx,.xls,.xlsx,.pptx'
const SUPPORTED_EXTENSIONS = new Set(['doc', 'docx', 'xls', 'xlsx', 'pptx'])

export interface OfficeDocumentDescriptor {
  readonly docType: OfficeDocType
  readonly product: 'Word' | 'Excel' | 'PowerPoint'
  readonly extension: 'DOC' | 'DOCX' | 'XLS' | 'XLSX' | 'PPTX'
  readonly supportsPdf: boolean
  readonly accent: 'word' | 'excel' | 'powerpoint'
}

export function officeFileExtension(name: string): string {
  const index = name.lastIndexOf('.')
  return index < 0 ? '' : name.slice(index + 1).toLowerCase()
}

export function officeBaseName(path: string): string {
  const index = Math.max(path.lastIndexOf('/'), path.lastIndexOf('\\'))
  return index < 0 ? path : path.slice(index + 1)
}

export function isSupportedOfficeFile(name: string): boolean {
  return SUPPORTED_EXTENSIONS.has(officeFileExtension(name))
}

export function assertSupportedOfficeFile(file: Pick<File, 'name'>): void {
  if (!isSupportedOfficeFile(file.name)) {
    throw new OfficePluginFailure('unsupported-file', `Unsupported Office file: ${file.name}`)
  }
}

export function inferOfficeDocType(name: string): OfficeDocType {
  switch (officeFileExtension(name)) {
    case 'doc':
    case 'docx': return 1
    case 'xls':
    case 'xlsx': return 2
    case 'pptx': return 3
    default: throw new OfficePluginFailure('unsupported-file', `Unsupported Office file: ${name}`)
  }
}

export function createdFileName(docType: OfficeDocType): string {
  if (docType === 1) return 'Untitled.docx'
  if (docType === 2) return 'Untitled.xlsx'
  return 'Untitled.pptx'
}

export function describeOfficeDocument(name: string, fallbackType?: OfficeDocType): OfficeDocumentDescriptor {
  const extension = officeFileExtension(name)
  const docType = extension === '' && fallbackType !== undefined ? fallbackType : inferOfficeDocType(name)
  if (docType === 1) {
    return {
      docType,
      product: 'Word',
      extension: extension === 'doc' ? 'DOC' : 'DOCX',
      supportsPdf: true,
      accent: 'word',
    }
  }
  if (docType === 2) {
    return {
      docType,
      product: 'Excel',
      extension: extension === 'xls' ? 'XLS' : 'XLSX',
      supportsPdf: true,
      accent: 'excel',
    }
  }
  return {
    docType,
    product: 'PowerPoint',
    extension: 'PPTX',
    supportsPdf: false,
    accent: 'powerpoint',
  }
}

export function officeDirectoryLabel(path: string, rootLabel: string): string {
  const normalized = path.replaceAll('\\', '/')
  const index = normalized.lastIndexOf('/')
  return index <= 0 ? rootLabel : normalized.slice(0, index)
}
