/** Model-facing Office creation and delivery tools for the active DSH workspace. */
import { randomUUID } from 'node:crypto'
import { link, mkdir, rm, writeFile } from 'node:fs/promises'
import { basename, dirname, extname, join } from 'node:path'
import type { Context } from '@deepseek-ai/cordis'
import { defineTool, type ToolResult } from '@deepseek-ai/dsh-tools'
import type {} from '@deepseek-ai/dsh-fs'
import type {} from '@deepseek-ai/dsh-sandbox-policy'
import type {} from '@deepseek-ai/dsh-system-prompt'
import { createDocxBuffer } from './docx-generator.ts'
import { MAX_OFFICE_FILE_BYTES } from './office-file-route.ts'

const MAX_MARKDOWN_CHARS = 1_000_000
const PRESENTABLE_OFFICE_TYPES = ['doc', 'docx', 'xls', 'xlsx', 'pptx'] as const
type PresentableOfficeType = (typeof PRESENTABLE_OFFICE_TYPES)[number]

export interface CreateDocxArgs {
  file_path: string
  content: string
  title?: string
}

export interface CreateDocxResult {
  path: string
  fileName: string
  bytes: number
  type: 'docx'
}

export interface PresentOfficeFileArgs {
  file_path: string
}

export interface PresentOfficeFileResult {
  path: string
  fileName: string
  bytes: number
  type: PresentableOfficeType
}

/** Validate constraints that the DSH schema DSL cannot express. */
export function validateCreateDocxArgs(args: CreateDocxArgs): void {
  if (args.file_path.trim() === '') throw new Error('file_path must be a non-empty path')
  if (extname(args.file_path).toLowerCase() !== '.docx') throw new Error('file_path must end with .docx')
  if (args.content.length > MAX_MARKDOWN_CHARS) {
    throw new Error(`content exceeds the ${MAX_MARKDOWN_CHARS}-character limit`)
  }
}

/** Validate the path shape before resolving it against the active Workspace. */
export function validatePresentOfficeFileArgs(args: PresentOfficeFileArgs): PresentableOfficeType {
  if (args.file_path.trim() === '') throw new Error('file_path must be a non-empty path')
  const extension = extname(args.file_path).toLowerCase().slice(1)
  if (!PRESENTABLE_OFFICE_TYPES.includes(extension as PresentableOfficeType)) {
    throw new Error('file_path must end with .doc, .docx, .xls, .xlsx, or .pptx')
  }
  return extension as PresentableOfficeType
}

async function writeNewFile(path: string, bytes: Uint8Array, signal: AbortSignal): Promise<void> {
  await mkdir(dirname(path), { recursive: true })
  const temporary = join(dirname(path), `.${basename(path)}.${randomUUID()}.tmp`)
  try {
    await writeFile(temporary, bytes, { flag: 'wx', signal })
    signal.throwIfAborted()
    // Publishing with a hard link is atomic and fails if another writer created
    // the destination after our initial existence check. `rename` would silently
    // replace that file on POSIX.
    await link(temporary, path)
  } finally {
    await rm(temporary, { force: true }).catch(() => undefined)
  }
}

/** Register Office creation/presentation tools and their stable model guidance. */
export function registerOfficeTools(ctx: Context): void {
  ctx.systemPrompt.section({
    name: 'tool:office-create-docx',
    order: 106,
    text: 'When the user asks for a Word document, use office_create_docx to create a real .docx file in the current workspace. Pass the complete document body as Markdown. When an existing .doc, .docx, .xls, .xlsx, or .pptx file was created through bash, Python, or another tool, call office_present_file exactly once with its Workspace-relative path so the Web UI can render a clickable Office file card. Do not call office_present_file after office_create_docx because that tool already publishes its result.',
  })

  ctx.tools.register(defineTool({
    name: 'office_create_docx',
    description: 'Create a real Microsoft Word .docx file in the current workspace from Markdown content. The result opens in the DSH Office side panel.',
    parameters: {
      file_path: {
        type: 'string',
        required: true,
        description: 'Workspace-relative output path ending in .docx, for example reports/summary.docx. The file must not already exist.',
      },
      title: {
        type: 'string',
        description: 'Optional document title placed before the Markdown body.',
      },
      content: {
        type: 'string',
        required: true,
        description: 'Complete document body in Markdown. Headings, paragraphs, bullets, numbered lists, fenced code, simple tables, bold, italic, and inline code are supported.',
      },
    },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
          path: { type: 'string', required: true },
          fileName: { type: 'string', required: true },
          bytes: { type: 'integer', required: true },
          type: { type: 'string', required: true, enum: ['docx'] },
        },
      },
      render: (_args, value) => [{
        type: 'text',
        text: `<path>${value.path}</path>\n<type>file</type>\n<content>Created DOCX file (${value.bytes} bytes)</content>`,
      }],
    },
    async execute(args: CreateDocxArgs, exec): Promise<CreateDocxResult> {
      validateCreateDocxArgs(args)
      const session = exec.agent?.session
      if (session === undefined) throw new Error('office_create_docx requires an agent workspace')
      const cwd = session.header.cwd
      if (cwd === undefined) throw new Error('office_create_docx requires an agent workspace path')
      const policy = ctx.sandboxPolicy.resolve({ session })
      if (policy.mode === 'read-only') {
        throw new Error('[sandbox: read-only] office_create_docx cannot create files in the current permission mode')
      }

      const resolveOptions = { cwd, signal: exec.signal }
      const workspace = await ctx.fs.resolve('.', resolveOptions)
      let target = await ctx.fs.resolve(args.file_path, resolveOptions)
      if (!ctx.fs.contains(workspace, target)) {
        throw new Error('file_path must stay inside the current workspace')
      }
      if (await ctx.fs.stat(target, exec.signal) !== undefined) {
        throw new Error(`refusing to overwrite existing file: ${args.file_path}`)
      }

      const buffer = await createDocxBuffer(args.title, args.content)
      exec.signal.throwIfAborted()
      await writeNewFile(ctx.fs.processPath(target), buffer, exec.signal)

      // Re-resolve after publication so any newly materialized path components
      // are canonical before the final containment assertion.
      target = await ctx.fs.resolve(args.file_path, resolveOptions)
      if (!ctx.fs.contains(workspace, target)) {
        throw new Error('created file resolved outside the current workspace')
      }
      return {
        path: args.file_path,
        fileName: basename(args.file_path),
        bytes: buffer.byteLength,
        type: 'docx',
      }
    },
    presentCall: args => ({
      card: 'generic',
      title: `Create Word document ${args.file_path}`,
      kind: 'other',
      locations: [{ path: args.file_path }],
    }),
    presentResult(args, result: ToolResult) {
      if (result.isError) return undefined
      return {
        card: 'generic',
        title: `Created Word document ${args.file_path}`,
        kind: 'other',
        locations: [{ path: args.file_path }],
      }
    },
  }))

  ctx.tools.register(defineTool({
    name: 'office_present_file',
    description: 'Publish an existing Office file from the current workspace as a clickable preview/edit card. Use this after another tool creates DOC, DOCX, XLS, XLSX, or PPTX.',
    parameters: {
      file_path: {
        type: 'string',
        required: true,
        description: 'Workspace-relative path to an existing .doc, .docx, .xls, .xlsx, or .pptx file.',
      },
    },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
          path: { type: 'string', required: true },
          fileName: { type: 'string', required: true },
          bytes: { type: 'integer', required: true },
          type: { type: 'string', required: true, enum: [...PRESENTABLE_OFFICE_TYPES] },
        },
      },
      render: (_args, value) => [{
        type: 'text',
        text: `<path>${value.path}</path>\n<type>file</type>\n<content>Office file is ready to preview (${value.bytes} bytes)</content>`,
      }],
    },
    async execute(args: PresentOfficeFileArgs, exec): Promise<PresentOfficeFileResult> {
      const type = validatePresentOfficeFileArgs(args)
      const session = exec.agent?.session
      if (session === undefined) throw new Error('office_present_file requires an agent workspace')
      const cwd = session.header.cwd
      if (cwd === undefined) throw new Error('office_present_file requires an agent workspace path')

      const resolveOptions = { cwd, signal: exec.signal }
      const workspace = await ctx.fs.resolve('.', resolveOptions)
      const target = await ctx.fs.resolve(args.file_path, resolveOptions)
      if (!ctx.fs.contains(workspace, target)) {
        throw new Error('file_path must stay inside the current workspace')
      }
      const info = await ctx.fs.stat(target, exec.signal)
      if (info === undefined) throw new Error(`Office file does not exist: ${args.file_path}`)
      if (info.type !== 'file') throw new Error(`Office path is not a regular file: ${args.file_path}`)
      if (info.size !== undefined && info.size > MAX_OFFICE_FILE_BYTES) {
        throw new Error(`Office file exceeds the ${MAX_OFFICE_FILE_BYTES}-byte preview limit`)
      }
      return {
        path: args.file_path,
        fileName: basename(args.file_path),
        bytes: info.size ?? 0,
        type,
      }
    },
    presentCall: args => ({
      card: 'generic',
      title: `Present Office file ${args.file_path}`,
      kind: 'other',
      locations: [{ path: args.file_path }],
    }),
    presentResult(args, result: ToolResult) {
      if (result.isError) return undefined
      return {
        card: 'generic',
        title: `Office file ready ${args.file_path}`,
        kind: 'other',
        locations: [{ path: args.file_path }],
      }
    },
  }))
}
