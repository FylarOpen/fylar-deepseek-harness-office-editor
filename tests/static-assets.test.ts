import type { IncomingMessage, OutgoingHttpHeaders, ServerResponse } from 'node:http'
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createOfficeAssetHandler } from '../src/index.ts'
import { OFFICE_SDK_BASE_PATH } from '../src/office-sdk.generated.ts'

interface CapturedResponse {
  status: number
  headers: OutgoingHttpHeaders
  body: Buffer
}

describe('Office static asset handler', () => {
  let root: string

  beforeEach(async () => {
    root = await mkdtemp(join(tmpdir(), 'fylar-office-assets-'))
    await mkdir(join(root, 'worker/wasm'), { recursive: true })
    await writeFile(join(root, 'UI.js'), 'export default {}')
    await writeFile(join(root, 'worker/wasm/test.wasm'), new Uint8Array([0, 97, 115, 109]))
  })

  afterEach(async () => {
    await rm(root, { recursive: true, force: true })
  })

  async function request(url: string, method = 'GET'): Promise<CapturedResponse> {
    let status = 0
    let headers: OutgoingHttpHeaders = {}
    let body = Buffer.alloc(0)
    const response = {
      writeHead(code: number, values?: OutgoingHttpHeaders) {
        status = code
        headers = values ?? {}
        return response
      },
      end(chunk?: string | Uint8Array) {
        body = chunk === undefined ? Buffer.alloc(0) : Buffer.from(chunk)
        return response
      },
    }
    await createOfficeAssetHandler(root)(
      { method, url } as IncomingMessage,
      response as unknown as ServerResponse,
    )
    return { status, headers, body }
  }

  const assetUrl = (path: string): string => `${OFFICE_SDK_BASE_PATH}/${path}`

  it('serves versioned assets with immutable same-origin headers', async () => {
    const response = await request(assetUrl('UI.js'))
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toBe('text/javascript; charset=utf-8')
    expect(response.headers['cache-control']).toContain('immutable')
    expect(response.headers['cross-origin-resource-policy']).toBe('same-origin')
    expect(response.headers['x-content-type-options']).toBe('nosniff')
    expect(response.body.toString()).toBe('export default {}')
  })

  it('sets WASM MIME and suppresses HEAD bodies', async () => {
    const wasm = await request(assetUrl('worker/wasm/test.wasm'))
    expect(wasm.headers['content-type']).toBe('application/wasm')
    const head = await request(assetUrl('UI.js'), 'HEAD')
    expect(head.status).toBe(200)
    expect(head.headers['content-length']).toBe(String('export default {}'.length))
    expect(head.body.byteLength).toBe(0)
  })

  it('rejects methods, wrong versions, missing files, and traversal', async () => {
    expect((await request(assetUrl('UI.js'), 'POST')).status).toBe(405)
    expect((await request('/fylar-office-sdk/wrong-build/UI.js')).status).toBe(404)
    expect((await request(assetUrl('missing.js'))).status).toBe(404)
    expect((await request(assetUrl('%252e%252e/secret'))).status).toBe(404)
    expect((await request(assetUrl('%2e%2e/secret'))).status).toBe(403)
    expect((await request(assetUrl('%5c..%5csecret'))).status).toBe(403)
  })
})
