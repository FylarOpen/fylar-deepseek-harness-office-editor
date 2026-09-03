/** Same-origin, workspace-confined Office file reader for the browser SDK. */
import { readFile, realpath, stat } from 'node:fs/promises'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { extname, resolve, sep } from 'node:path'

export const OFFICE_FILE_ROUTE_PREFIX = '/fylar-office-files'
export const MAX_OFFICE_FILE_BYTES = 128 * 1024 * 1024

const OFFICE_MIME: Readonly<Record<string, string>> = {
  '.doc': 'application/msword',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.xls': 'application/vnd.ms-excel',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
}

export interface WorkspacePathRegistry {
  list(): readonly { readonly path: string }[]
}

function finish(res: ServerResponse, status: number): void {
  res.writeHead(status)
  res.end()
}

function within(root: string, target: string): boolean {
  return target === root || target.startsWith(root + sep)
}

/** Build a URL that the browser can fetch without exposing a filesystem API. */
export function officeFileUrl(workspace: string, path: string): string {
  const query = new URLSearchParams({ workspace, path })
  return `${OFFICE_FILE_ROUTE_PREFIX}?${query.toString()}`
}

/** Create a GET/HEAD handler restricted to registered DSH workspace roots. */
export function createOfficeFileHandler(workspaces: WorkspacePathRegistry) {
  return async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.setHeader('allow', 'GET, HEAD')
      finish(res, 405)
      return
    }

    let url: URL
    try {
      url = new URL(req.url ?? '/', 'http://dsh.local')
    } catch {
      finish(res, 400)
      return
    }
    if (url.pathname !== OFFICE_FILE_ROUTE_PREFIX) {
      finish(res, 404)
      return
    }
    const workspacePath = url.searchParams.get('workspace')
    const requestedPath = url.searchParams.get('path')
    if (workspacePath === null || requestedPath === null || requestedPath.trim() === '') {
      finish(res, 400)
      return
    }

    const registered = workspaces.list().find(workspace => workspace.path === workspacePath)
    if (registered === undefined) {
      finish(res, 403)
      return
    }

    const canonicalRoot = await realpath(registered.path).catch(() => null)
    if (canonicalRoot === null) {
      finish(res, 404)
      return
    }
    const candidate = resolve(canonicalRoot, requestedPath)
    if (!within(canonicalRoot, candidate)) {
      finish(res, 403)
      return
    }
    const canonicalTarget = await realpath(candidate).catch(() => null)
    if (canonicalTarget === null || !within(canonicalRoot, canonicalTarget)) {
      finish(res, canonicalTarget === null ? 404 : 403)
      return
    }

    const extension = extname(canonicalTarget).toLowerCase()
    const contentType = OFFICE_MIME[extension]
    if (contentType === undefined) {
      finish(res, 415)
      return
    }
    const info = await stat(canonicalTarget).catch(() => null)
    if (info === null || !info.isFile()) {
      finish(res, 404)
      return
    }
    if (info.size > MAX_OFFICE_FILE_BYTES) {
      finish(res, 413)
      return
    }

    const body = await readFile(canonicalTarget)
    res.writeHead(200, {
      'cache-control': 'private, no-store',
      'content-length': String(body.byteLength),
      'content-type': contentType,
      'cross-origin-resource-policy': 'same-origin',
      'x-content-type-options': 'nosniff',
    })
    res.end(req.method === 'HEAD' ? undefined : body)
  }
}
