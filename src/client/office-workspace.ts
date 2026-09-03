import type { OfficePluginErrorKind, OfficePluginIssue } from './office-errors.ts'
import { classifyOfficeError, issueFor, OfficePluginFailure } from './office-errors.ts'
import { assertOfficeCapabilities, pdfEnvironmentProblem, resolveOfficeLocale } from './office-capabilities.ts'
import { assertSupportedOfficeFile, createdFileName, inferOfficeDocType } from './office-files.ts'
import type {
  OfficeDocType, OfficeRenderedApp, OfficeSdkOpenOptions, OfficeWidget, OfficeWidgetResult,
} from './office-types.ts'
import type { OfficeSdk } from './office-types.ts'

export type OfficeOperation = 'readonly' | 'export' | 'pdf' | 'close'

export type OfficeWorkspaceSnapshot =
  | { status: 'empty' }
  | { status: 'loading'; action: 'open' | 'create' | 'preload'; label: string }
  | {
    status: 'ready'
    fileName: string
    docType: OfficeDocType
    origin: 'opened' | 'created' | 'workspace'
    readOnly: boolean
    operation: OfficeOperation | null
    hasPotentialEdits: boolean
    issue?: OfficePluginIssue | undefined
  }
  | { status: 'error'; issue: OfficePluginIssue }

type OfficeReadySnapshot = Extract<OfficeWorkspaceSnapshot, { status: 'ready' }>

export interface ObservableSnapshot<T> {
  getSnapshot(): T
  subscribe(listener: () => void): () => void
}

interface ResizeObserverLike {
  observe(target: Element): void
  disconnect(): void
}

interface OfficeWorkspaceEnvironment {
  window: Window
  document: Document
  createResizeObserver(callback: () => void): ResizeObserverLike | null
}

export interface OfficeWorkspaceActions {
  preload(): Promise<void>
  retry(): Promise<void>
  attach(container: HTMLElement): void
  detach(container: HTMLElement): void
  open(file: File): Promise<void>
  openUrl(fileName: string, url: string): Promise<void>
  create(docType: OfficeDocType): Promise<void>
  setReadOnly(readOnly: boolean): Promise<void>
  exportDocument(): Promise<void>
  exportPdf(): Promise<void>
  close(): Promise<void>
  clearIssue(): void
  markPotentialEdits(): void
}

export interface OfficeSdkLoaderLike {
  preload(): Promise<void>
  load(): Promise<OfficeSdk>
  resetFailure(): void
}

function defaultEnvironment(): OfficeWorkspaceEnvironment {
  return {
    window,
    document,
    createResizeObserver: callback => typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(callback),
  }
}

function isDocType(value: number): value is OfficeDocType {
  return value === 1 || value === 2 || value === 3
}

/** Browser-wide owner of the single Office SDK instance and persistent DOM host. */
export class OfficeWorkspace {
  private snapshot: OfficeWorkspaceSnapshot = { status: 'empty' }
  private readonly listeners = new Set<() => void>()
  private readonly environment: OfficeWorkspaceEnvironment
  private readonly root: HTMLDivElement
  private readonly parking: HTMLDivElement
  private readonly observer: ResizeObserverLike | null
  private widget: OfficeWidget | null = null
  private app: OfficeRenderedApp | null = null
  private generation = 0
  private queue: Promise<void> = Promise.resolve()
  private disposed = false
  private lastRetry: (() => Promise<void>) | null = null
  private timers: number[] = []
  private frames: number[] = []

  readonly source: ObservableSnapshot<OfficeWorkspaceSnapshot> = {
    getSnapshot: () => this.snapshot,
    subscribe: listener => {
      this.listeners.add(listener)
      return () => { this.listeners.delete(listener) }
    },
  }

  readonly actions: OfficeWorkspaceActions = {
    preload: () => this.preload(),
    retry: () => this.retry(),
    attach: container => { this.attach(container) },
    detach: container => { this.detach(container) },
    open: file => this.open(file),
    openUrl: (fileName, url) => this.openUrl(fileName, url),
    create: docType => this.create(docType),
    setReadOnly: readOnly => this.setReadOnly(readOnly),
    exportDocument: () => this.exportDocument(),
    exportPdf: () => this.exportPdf(),
    close: () => this.close(),
    clearIssue: () => { this.clearIssue() },
    markPotentialEdits: () => { this.markPotentialEdits() },
  }

  constructor(
    private readonly loader: OfficeSdkLoaderLike,
    environment: OfficeWorkspaceEnvironment = defaultEnvironment(),
  ) {
    this.environment = environment
    this.root = environment.document.createElement('div')
    this.root.className = 'fylar-office-sdk-host'
    this.root.dataset.fylarOfficeSdkHost = 'true'
    this.parking = environment.document.createElement('div')
    this.parking.hidden = true
    this.parking.dataset.fylarOfficeParking = 'true'
    this.parking.append(this.root)
    ;(environment.document.body ?? environment.document.documentElement).append(this.parking)
    this.observer = environment.createResizeObserver(() => { this.refresh() })
    this.observer?.observe(this.root)
    environment.window.addEventListener('beforeunload', this.beforeUnload)
  }

  private readonly beforeUnload = (event: BeforeUnloadEvent): void => {
    if (this.snapshot.status !== 'ready' || !this.snapshot.hasPotentialEdits) return
    event.preventDefault()
    event.returnValue = ''
  }

  private publish(snapshot: OfficeWorkspaceSnapshot): void {
    this.snapshot = snapshot
    for (const listener of this.listeners) listener()
  }

  private publishIssue(issue: OfficePluginIssue): void {
    const current = this.ready()
    this.publish(current === null ? { status: 'error', issue } : { ...current, issue })
  }

  private enqueue(operation: () => Promise<void>): Promise<void> {
    const result = this.queue.then(operation, operation)
    this.queue = result.catch(() => undefined)
    return result
  }

  private assertCurrent(generation: number): void {
    if (generation !== this.generation || this.disposed) {
      throw new OfficePluginFailure('cancelled', 'OPEN_CANCELLED')
    }
  }

  private clearScheduledRefresh(): void {
    for (const timer of this.timers) this.environment.window.clearTimeout(timer)
    for (const frame of this.frames) this.environment.window.cancelAnimationFrame?.(frame)
    this.timers = []
    this.frames = []
  }

  private refresh(): void {
    this.app?.Document.updateVisibleArea()
  }

  private scheduleRefresh(): void {
    this.clearScheduledRefresh()
    const run = (): void => { this.refresh() }
    if (typeof this.environment.window.requestAnimationFrame === 'function') {
      this.frames.push(this.environment.window.requestAnimationFrame(run))
      this.frames.push(this.environment.window.requestAnimationFrame(() => {
        this.frames.push(this.environment.window.requestAnimationFrame(run))
      }))
    }
    this.timers.push(this.environment.window.setTimeout(run, 80))
    this.timers.push(this.environment.window.setTimeout(run, 220))
  }

  private options(): OfficeSdkOpenOptions {
    const language = this.environment.document.documentElement.lang || this.environment.window.navigator.language
    return {
      uiOptions: { showTopBar: true, showBottomBar: true },
      mode: { readOnly: false, lang: resolveOfficeLocale(language) },
    }
  }

  private async cleanupWidget(): Promise<void> {
    this.clearScheduledRefresh()
    const current = this.widget
    this.widget = null
    this.app = null
    try {
      await current?.close()
    } catch (error) {
      console.warn('[dsh-fylar-office-editor] widget cleanup failed', error)
    } finally {
      this.root.replaceChildren()
    }
  }

  private async mount(
    action: 'open' | 'create',
    label: string,
    origin: 'opened' | 'created' | 'workspace',
    fallbackType: OfficeDocType,
    createWidget: () => Promise<OfficeWidgetResult>,
    retry: () => Promise<void>,
  ): Promise<void> {
    const generation = ++this.generation
    this.lastRetry = retry
    this.publish({ status: 'loading', action, label })
    await this.enqueue(async () => {
      let openedWidget: OfficeWidget | null = null
      try {
        this.assertCurrent(generation)
        await this.cleanupWidget()
        this.assertCurrent(generation)
        assertOfficeCapabilities(this.environment.window)
        await this.loader.preload()
        this.assertCurrent(generation)
        await this.loader.load()
        this.assertCurrent(generation)
        const result = await createWidget()
        openedWidget = result.widget
        this.assertCurrent(generation)
        const rendered = await openedWidget.mount(this.root).render()
        this.assertCurrent(generation)
        this.widget = openedWidget
        this.app = rendered
        openedWidget = null
        const docType = isDocType(result.docType) ? result.docType : fallbackType
        this.publish({
          status: 'ready',
          fileName: label,
          docType,
          origin,
          readOnly: rendered.Document.isReadOnly(),
          operation: null,
          hasPotentialEdits: false,
        })
        this.scheduleRefresh()
      } catch (error) {
        await openedWidget?.close().catch(cleanupError => {
          console.warn('[dsh-fylar-office-editor] cancelled widget cleanup failed', cleanupError)
        })
        const issue = classifyOfficeError(error, action)
        if (issue.kind !== 'cancelled' && generation === this.generation && !this.disposed) {
          console.error(`[dsh-fylar-office-editor] ${action} failed`, error)
          this.publish({ status: 'error', issue })
        }
      }
    })
  }

  async preload(): Promise<void> {
    if (this.disposed || this.widget !== null) return
    try {
      assertOfficeCapabilities(this.environment.window)
      if (this.snapshot.status === 'empty') this.publish({ status: 'loading', action: 'preload', label: 'Office' })
      await this.loader.preload()
      if (this.snapshot.status === 'loading' && this.snapshot.action === 'preload') this.publish({ status: 'empty' })
    } catch (error) {
      console.error('[dsh-fylar-office-editor] preload failed', error)
      if (this.widget === null) this.publish({ status: 'error', issue: classifyOfficeError(error, 'runtime-load') })
    }
  }

  async retry(): Promise<void> {
    this.loader.resetFailure()
    if (this.lastRetry !== null) await this.lastRetry()
    else await this.preload()
  }

  attach(container: HTMLElement): void {
    if (this.disposed) return
    container.append(this.root)
    this.scheduleRefresh()
  }

  detach(container: HTMLElement): void {
    if (this.disposed || this.root.parentElement !== container) return
    this.parking.append(this.root)
  }

  async open(file: File): Promise<void> {
    try {
      assertSupportedOfficeFile(file)
    } catch (error) {
      this.publishIssue(classifyOfficeError(error, 'unsupported-file'))
      return
    }
    const retry = (): Promise<void> => this.open(file)
    await this.mount(
      'open', file.name, 'opened', inferOfficeDocType(file.name),
      async () => (await this.loader.load()).openfile(
        { docId: `local-${Date.now()}`, fileName: file.name, file },
        this.options(),
      ),
      retry,
    )
  }

  /** Fetch a workspace Office file from the same-origin Host route and open it. */
  async openUrl(fileName: string, url: string): Promise<void> {
    try {
      assertSupportedOfficeFile({ name: fileName })
    } catch (error) {
      this.publishIssue(classifyOfficeError(error, 'unsupported-file'))
      return
    }
    const retry = (): Promise<void> => this.openUrl(fileName, url)
    await this.mount(
      'open', fileName, 'workspace', inferOfficeDocType(fileName),
      async () => {
        const response = await this.environment.window.fetch(url, { credentials: 'same-origin' })
        if (!response.ok) {
          throw new OfficePluginFailure('asset', `WORKSPACE_FILE_${response.status}`)
        }
        const file = await response.blob()
        return (await this.loader.load()).openfile(
          { docId: `workspace-${encodeURIComponent(url)}`, fileName, file },
          this.options(),
        )
      },
      retry,
    )
  }

  async create(docType: OfficeDocType): Promise<void> {
    const fileName = createdFileName(docType)
    const retry = (): Promise<void> => this.create(docType)
    await this.mount(
      'create', fileName, 'created', docType,
      async () => (await this.loader.load()).createfile(docType, this.options()),
      retry,
    )
  }

  private ready(): OfficeReadySnapshot | null {
    return this.snapshot.status === 'ready' ? this.snapshot : null
  }

  private async readyOperation<Result>(
    operation: Exclude<OfficeOperation, 'close'>,
    fallback: OfficePluginErrorKind,
    run: (app: OfficeRenderedApp) => Result | Promise<Result>,
    complete?: (current: OfficeReadySnapshot, result: Result) => OfficeReadySnapshot,
  ): Promise<boolean> {
    const ready = this.ready()
    const app = this.app
    if (ready === null || app === null || ready.operation !== null) return false
    this.publish({ ...ready, operation, issue: undefined })
    try {
      const result = await run(app)
      const current = this.ready()
      if (current === null || this.app !== app) return false
      const completed = { ...current, operation: null, issue: undefined }
      this.publish(complete?.(completed, result) ?? completed)
      return true
    } catch (error) {
      console.error(`[dsh-fylar-office-editor] ${operation} failed`, error)
      const current = this.ready()
      if (current !== null && this.app === app) {
        this.publish({ ...current, operation: null, issue: classifyOfficeError(error, fallback) })
      }
      return false
    }
  }

  async setReadOnly(readOnly: boolean): Promise<void> {
    await this.readyOperation('readonly', 'unknown', (app) => {
      if (readOnly) app.Document.startReadOnly()
      else app.Document.endReadOnly()
      return app.Document.isReadOnly()
    }, (current, actualReadOnly) => ({
      ...current,
      readOnly: actualReadOnly,
      hasPotentialEdits: current.hasPotentialEdits || !readOnly,
    }))
  }

  async exportDocument(): Promise<void> {
    await this.readyOperation(
      'export', 'export', app => app.Document.exportDocument(),
      current => ({ ...current, hasPotentialEdits: false }),
    )
  }

  async exportPdf(): Promise<void> {
    const ready = this.ready()
    if (ready === null || ready.docType === 3) return
    if (pdfEnvironmentProblem(this.environment.window) !== null) {
      this.publish({ ...ready, issue: issueFor('pdf-environment') })
      return
    }
    await this.readyOperation('pdf', 'export', app => app.Document.exportPdf())
  }

  clearIssue(): void {
    const ready = this.ready()
    if (ready !== null && ready.issue !== undefined) {
      const { issue: _issue, ...withoutIssue } = ready
      this.publish(withoutIssue)
    }
  }

  markPotentialEdits(): void {
    const current = this.ready()
    if (current === null || current.readOnly || current.hasPotentialEdits) return
    this.publish({ ...current, hasPotentialEdits: true })
  }

  async close(): Promise<void> {
    const generation = ++this.generation
    this.lastRetry = null
    const ready = this.ready()
    if (ready !== null) this.publish({ ...ready, operation: 'close', issue: undefined })
    await this.enqueue(async () => {
      if (generation !== this.generation) return
      await this.cleanupWidget()
      if (!this.disposed) this.publish({ status: 'empty' })
    })
  }

  async dispose(): Promise<void> {
    if (this.disposed) return
    this.disposed = true
    ++this.generation
    this.environment.window.removeEventListener('beforeunload', this.beforeUnload)
    this.observer?.disconnect()
    await this.enqueue(async () => { await this.cleanupWidget() })
    this.parking.remove()
    this.root.remove()
    this.listeners.clear()
  }
}
