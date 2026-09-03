import { describe, expect, it } from 'vitest'
import {
  createdFileName, describeOfficeDocument, inferOfficeDocType, isSupportedOfficeFile, officeBaseName,
  officeDirectoryLabel, OFFICE_FILE_ACCEPT,
} from '../src/client/office-files.ts'
import { missingOfficeCapabilities, resolveOfficeLocale } from '../src/client/office-capabilities.ts'

describe('Office file classification', () => {
  it('accepts exactly the vendored SDK public formats case-insensitively', () => {
    expect(OFFICE_FILE_ACCEPT).toBe('.doc,.docx,.xls,.xlsx,.pptx')
    for (const name of ['a.doc', 'a.DOCX', 'a.xls', 'a.XLSX', 'a.pptx']) {
      expect(isSupportedOfficeFile(name)).toBe(true)
    }
    for (const name of ['a.ppt', 'a.pdf', 'a', '.docx.tmp']) {
      expect(isSupportedOfficeFile(name)).toBe(false)
    }
  })

  it('maps open and create types without claiming PPT support', () => {
    expect(inferOfficeDocType('a.doc')).toBe(1)
    expect(inferOfficeDocType('a.xlsx')).toBe(2)
    expect(inferOfficeDocType('a.pptx')).toBe(3)
    expect(createdFileName(1)).toBe('Untitled.docx')
    expect(createdFileName(2)).toBe('Untitled.xlsx')
    expect(createdFileName(3)).toBe('Untitled.pptx')
  })

  it('describes multi-format labels, colors, paths, and PDF support', () => {
    expect(describeOfficeDocument('report.doc')).toMatchObject({ product: 'Word', extension: 'DOC', supportsPdf: true, accent: 'word' })
    expect(describeOfficeDocument('data.xlsx')).toMatchObject({ product: 'Excel', extension: 'XLSX', supportsPdf: true, accent: 'excel' })
    expect(describeOfficeDocument('slides.pptx')).toMatchObject({ product: 'PowerPoint', extension: 'PPTX', supportsPdf: false, accent: 'powerpoint' })
    expect(officeDirectoryLabel('reports/weekly/report.docx', 'Workspace root')).toBe('reports/weekly')
    expect(officeDirectoryLabel('report.docx', 'Workspace root')).toBe('Workspace root')
    expect(officeBaseName('reports/weekly/report.docx')).toBe('report.docx')
    expect(officeBaseName('reports\\weekly\\report.docx')).toBe('report.docx')
  })
})

describe('browser capability and locale resolution', () => {
  it('reports only absent required capabilities', () => {
    const subject = { Worker: {}, WebAssembly: {}, Blob: {}, ArrayBuffer: {} }
    expect(missingOfficeCapabilities(subject)).toEqual(['SharedWorker', 'indexedDB'])
  })

  it('maps all Chinese locales to zh-CN and all others to en-US', () => {
    expect(resolveOfficeLocale('zh-Hans')).toBe('zh-CN')
    expect(resolveOfficeLocale('zh-CN')).toBe('zh-CN')
    expect(resolveOfficeLocale('en-GB')).toBe('en-US')
    expect(resolveOfficeLocale(undefined)).toBe('en-US')
  })
})
