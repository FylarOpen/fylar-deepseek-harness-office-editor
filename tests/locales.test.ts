import { describe, expect, it } from 'vitest'
import { en, enT, officeIssueCopy, zh, zhT } from '../src/client/locales.ts'

describe('Office wrapper locales', () => {
  it('keeps the Chinese and English dictionaries in lockstep', () => {
    expect(Object.keys(en).sort()).toEqual(Object.keys(zh).sort())
  })

  it('interpolates actions in both supported languages', () => {
    expect(zhT('action.download', { extension: 'XLSX' })).toBe('下载并保存 XLSX')
    expect(enT('action.download', { extension: 'XLSX' })).toBe('Download and save XLSX')
  })

  it('resolves error copy through the selected locale', () => {
    expect(officeIssueCopy(zhT, 'open')).toEqual({ title: '无法打开文档', detail: '请确认文件是有效且受支持的 Office 文档，然后重试。' })
    expect(officeIssueCopy(enT, 'open')).toEqual({ title: 'Unable to open document', detail: 'Confirm that the file is a valid, supported Office document, then retry.' })
  })
})
