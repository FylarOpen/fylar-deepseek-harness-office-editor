/** DeepSeek Harness host entry for the Bamboo Office SDK static runtime. */
import { readFile, realpath, stat } from 'node:fs/promises'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { extname, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Context } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-fs'
import type {} from '@deepseek-ai/dsh-host-webserver'
import type {} from '@deepseek-ai/dsh-sandbox-policy'
import type {} from '@deepseek-ai/dsh-system-prompt'
import type {} from '@deepseek-ai/dsh-tools'
import type {} from '@deepseek-ai/dsh-workspace'
import { createOfficeFileHandler, OFFICE_FILE_ROUTE_PREFIX } from './office-file-route.ts'
import { registerOfficeTools } from './office-tool.ts'
import { OFFICE_SDK_BASE_PATH, OFFICE_SDK_ROUTE_PREFIX } from './office-sdk.generated.ts'

/** Stable Cordis plugin name. */
export const name = 'dsh-fylar-office-editor'

/** Host services required by the SDK route, workspace file route, and Agent tool. */
export const inject = ['webServer', 'tools', 'fs', 'workspaceRegistry', 'systemPrompt', 'sandboxPolicy']

const SDK_ROOT = fileURLToPath(new URL('../vendor/office-sdk/lib/', import.meta.url))
const CACHE_CONTROL = 'public, max-age=31536000, immutable'
const MIME: Readonly<Record<string, string>> = {
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.wasm': 'application/wasm',
  '.zip': 'application/zip',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.txt': 'text/plain; charset=utf-8',
  '.ts': 'text/plain; charset=utf-8',
}

function end(res: ServerResponse, status: number): void {
  res.writeHead(status)
  res.end()
}

function isWithin(root: string, target: string): boolean {
  return target === root || target.startsWith(root + sep)
}

/**
 * Create the versioned Office static-asset handler.
 * @param sdkRoot - Absolute vendored lib directory; overridable by tests.
 * @returns A node:http request handler.
 */
export function createOfficeAssetHandler(sdkRoot = SDK_ROOT) {
  return async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      end(res, 405)
      return
    }

    const rawPath = (req.url ?? '/').split(/[?#]/u, 1)[0] ?? '/'
    let pathname: string
    try {
      pathname = decodeURIComponent(rawPath)
    } catch {
      end(res, 400)
      return
    }
    if (!pathname.startsWith(`${OFFICE_SDK_ROUTE_PREFIX}/`)) {
      end(res, 404)
      return
    }
    if (!pathname.startsWith(`${OFFICE_SDK_BASE_PATH}/`)) {
      end(res, 404)
      return
    }

    const relativePath = pathname.slice(OFFICE_SDK_BASE_PATH.length + 1)
    const segments = relativePath.split('/')
    if (
      relativePath === ''
      || pathname.includes('\\')
      || segments.some(segment => segment === '' || segment === '.' || segment === '..')
    ) {
      end(res, 403)
      return
    }

    const canonicalRoot = await realpath(sdkRoot)
    const target = resolve(canonicalRoot, ...segments)
    if (!isWithin(canonicalRoot, target)) {
      end(res, 403)
      return
    }

    const targetStat = await stat(target).catch(() => null)
    if (targetStat === null || !targetStat.isFile()) {
      end(res, 404)
      return
    }
    const canonicalTarget = await realpath(target)
    if (!isWithin(canonicalRoot, canonicalTarget)) {
      end(res, 403)
      return
    }

    const body = await readFile(canonicalTarget)
    res.writeHead(200, {
      'cache-control': CACHE_CONTROL,
      'content-length': String(body.byteLength),
      'content-type': MIME[extname(canonicalTarget).toLowerCase()] ?? 'application/octet-stream',
      'cross-origin-resource-policy': 'same-origin',
      'x-content-type-options': 'nosniff',
    })
    res.end(req.method === 'HEAD' ? undefined : body)
  }
}

/** Register the Office runtime under the DSH Web origin. */
export function apply(ctx: Context): void {
  const handler = createOfficeAssetHandler()
  const fileHandler = createOfficeFileHandler(ctx.workspaceRegistry)
  ctx.effect(
    () => ctx.webServer.register({ kind: 'prefix', path: OFFICE_SDK_ROUTE_PREFIX, handler }),
    'dsh-fylar-office-editor: static runtime',
  )
  ctx.effect(
    () => ctx.webServer.register({ kind: 'prefix', path: OFFICE_FILE_ROUTE_PREFIX, handler: fileHandler }),
    'dsh-fylar-office-editor: workspace files',
  )
  registerOfficeTools(ctx)
}
