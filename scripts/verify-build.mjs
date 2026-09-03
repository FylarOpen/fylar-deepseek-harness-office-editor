import { readFile, stat } from 'node:fs/promises'
import { resolve } from 'node:path'

const projectRoot = resolve(new URL('..', import.meta.url).pathname)
const clientPath = resolve(projectRoot, 'lib/client.js')
const hostPath = resolve(projectRoot, 'lib/index.js')
const packagePath = resolve(projectRoot, 'package.json')
const sdkLockPath = resolve(projectRoot, 'vendor/office-sdk/LOCK.json')
const client = await readFile(clientPath, 'utf8')
const host = await readFile(hostPath, 'utf8')
const manifest = JSON.parse(await readFile(packagePath, 'utf8'))
const sdkLock = JSON.parse(await readFile(sdkLockPath, 'utf8'))
const sdkBasePath = `/fylar-office-sdk/${sdkLock.sdkVersion}-${sdkLock.sourceSha256.slice(0, 12)}`

const requiredClientFragments = [
  'window.__ModuleLoader__.load({',
  'id: "dsh-fylar-office-editor"',
  'factory: (require) => {',
  'import(',
  sdkBasePath,
  '/preload.js',
  '/UI.js',
  '/fylar-office-files',
  'office_create_docx',
  'office_present_file',
  'tool.call.toolview',
  'conversation.chat.turnTail',
  'conversation.view',
  'conversationEvents',
  'id: "office"',
  'fylar-office-tool-status',
  'fylar-office-editor-inline',
  '--dsh-conversation-viewport-height',
  '--dsh-conversation-column-width',
  '900px',
  'isolation: isolate',
  'z-index: 10',
  'scrollIntoView',
  'requestFullscreen',
  'locale.register',
  'fylar-office',
  '全屏编辑',
  'Edit in full screen',
  '在侧边栏打开',
  'Open in side panel',
  '当前修改不会覆盖原文件',
  '更多文档操作',
  'OfficeLayoutLease',
  'hasPotentialEdits',
  '收起对话内编辑器',
  'return module.exports;',
]
for (const fragment of requiredClientFragments) {
  if (!client.includes(fragment)) throw new Error(`Client artifact is missing: ${fragment}`)
}
for (const removed of ['shell.overlay', 'fylar-office-replacement', 'fylar-office-dialog']) {
  if (client.includes(removed)) throw new Error(`Removed replacement dialog remains in Client artifact: ${removed}`)
}
const platformModules = new Set([
  'react',
  'react/jsx-runtime',
  'react-dom',
  'react-dom/client',
  '@deepseek-ai/cordis',
  '@deepseek-ai/dsh-client-store',
  '@deepseek-ai/dsh-client-ui-slots',
  '@deepseek-ai/dsh-client-ui-primitives',
])
const moduleRequests = [...client.matchAll(/\brequire\((['"])([^'"]+)\1\)/g)]
  .map(match => match[2])
for (const request of moduleRequests) {
  if (request === undefined || platformModules.has(request)) continue
  throw new Error(`Client artifact has an undeclared DSH module request: ${request}`)
}
const clientManifest = manifest.dsh?.client
if (manifest.dsh?.bundle?.patch !== './cordis.patch.yml') {
  throw new Error('dsh.bundle.patch must point to ./cordis.patch.yml')
}
for (const lifecycle of ['prepare', 'prepack', 'preinstall', 'install', 'postinstall']) {
  if (manifest.scripts?.[lifecycle] !== undefined) {
    throw new Error(`Repository installs must not execute the ${lifecycle} lifecycle script`)
  }
}
if (clientManifest?.external !== undefined && clientManifest.external.length !== 0) {
  throw new Error('This plugin must bundle its non-platform browser code instead of declaring client externals')
}
if (!clientManifest?.inject?.includes('@deepseek-ai/dsh-client-locale')) {
  throw new Error('The DSH locale service is missing from dsh.client.inject')
}
for (const forbidden of ['office.core.js', 'mountDocxApp.js', 'canvaskit.wasm']) {
  if (client.includes(forbidden)) throw new Error(`Client artifact bundled Office runtime content: ${forbidden}`)
}
for (const fragment of ['register({', '/fylar-office-sdk', '/fylar-office-files', 'office_create_docx', 'office_present_file']) {
  if (!host.includes(fragment)) throw new Error(`Host artifact is missing: ${fragment}`)
}
for (const path of [
  'lib/types/index.d.ts',
  'lib/types/client/index.d.ts',
  'lib/index.js.map',
  'lib/client.js.map',
]) {
  const value = await stat(resolve(projectRoot, path)).catch(() => null)
  if (value === null || !value.isFile()) throw new Error(`Build artifact is missing: ${path}`)
}

console.log('Verified Host routes, unique Chat delivery, Office tab/details editors, declarations, and unbundled SDK loading')
