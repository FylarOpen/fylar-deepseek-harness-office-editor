import { strFromU8, unzipSync } from 'fflate'
import { describe, expect, it } from 'vitest'
import { createDocxBuffer, inlineRuns } from '../src/docx-generator.ts'
import { validateCreateDocxArgs, validatePresentOfficeFileArgs } from '../src/office-tool.ts'

describe('DOCX generation', () => {
  it('creates an OOXML Word document from common Markdown blocks', async () => {
    const buffer = await createDocxBuffer('测试报告', [
      '# 摘要',
      '',
      '这是 **自动生成** 的文档。',
      '',
      '- 第一项',
      '- 第二项',
      '',
      '| 名称 | 数量 |',
      '| --- | --- |',
      '| Bamboo | 2 |',
    ].join('\n'))

    expect(buffer.subarray(0, 2).toString()).toBe('PK')
    const files = unzipSync(buffer)
    expect(files['[Content_Types].xml']).toBeDefined()
    const document = strFromU8(files['word/document.xml'] as Uint8Array)
    expect(document).toContain('测试报告')
    expect(document).toContain('自动生成')
    expect(document).toContain('Bamboo')
  })

  it('parses inline emphasis and validates the output path', () => {
    expect(inlineRuns('plain **bold** `code`')).toHaveLength(4)
    expect(() => validateCreateDocxArgs({ file_path: 'report.docx', content: 'ok' })).not.toThrow()
    expect(() => validateCreateDocxArgs({ file_path: '../report.pdf', content: 'no' })).toThrow(/\.docx/)
    expect(() => validateCreateDocxArgs({ file_path: '', content: 'no' })).toThrow(/non-empty/)
    expect(validatePresentOfficeFileArgs({ file_path: 'reports/table.xlsx' })).toBe('xlsx')
    expect(validatePresentOfficeFileArgs({ file_path: 'slides/demo.PPTX' })).toBe('pptx')
    expect(() => validatePresentOfficeFileArgs({ file_path: 'notes.md' })).toThrow(/\.xlsx/)
  })
})
