import type { IncomingMessage, OutgoingHttpHeaders, ServerResponse } from 'node:http'
import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createOfficeFileHandler, officeFileUrl } from '../src/office-file-route.ts'

interface CapturedResponse {
  status: number
  headers: OutgoingHttpHeaders
  body: Buffer
}

describe('workspace Office file route', () => {
  let root: string

  beforeEach(async () => {
    root = await mkdtemp(join(tmpdir(), 'bamboo-office-workspace-'))
    await writeFile(join(root, 'report.docx'), new Uint8Array([80, 75, 3, 4]))
    await writeFile(join(root, 'notes.txt'), 'not office')
  })

  afterEach(async () => {
    await rm(root, { recursive: true, force: true })
  })

  async function request(url: string, method = 'GET'): Promise<CapturedResponse> {
    let status = 0
    const headers: OutgoingHttpHeaders = {}
    let body = Buffer.alloc(0)
    const response = {
      setHeader(name: string, value: string) { headers[name.toLowerCase()] = value },
      writeHead(code: number, values?: OutgoingHttpHeaders) {
        status = code
        Object.assign(headers, values ?? {})
        return response
      },
      end(chunk?: string | Uint8Array) {
        body = chunk === undefined ? Buffer.alloc(0) : Buffer.from(chunk)
        return response
      },
    }
    await createOfficeFileHandler({ list: () => [{ path: root }] })(
      { method, url } as IncomingMessage,
      response as unknown as ServerResponse,
    )
    return { status, headers, body }
  }

  it('serves only supported files inside a registered workspace', async () => {
    const response = await request(officeFileUrl(root, 'report.docx'))
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toContain('wordprocessingml')
    expect(response.headers['cache-control']).toBe('private, no-store')
    expect(response.body).toEqual(Buffer.from([80, 75, 3, 4]))
  })

  it('supports HEAD and rejects methods, unknown roots, traversal, and non-Office files', async () => {
    const head = await request(officeFileUrl(root, 'report.docx'), 'HEAD')
    expect(head.status).toBe(200)
    expect(head.body).toHaveLength(0)
    expect((await request(officeFileUrl(root, 'report.docx'), 'POST')).status).toBe(405)
    expect((await request(officeFileUrl('/not-registered', 'report.docx'))).status).toBe(403)
    expect((await request(officeFileUrl(root, '../secret.docx'))).status).toBe(403)
    expect((await request(officeFileUrl(root, 'notes.txt'))).status).toBe(415)
  })
})
