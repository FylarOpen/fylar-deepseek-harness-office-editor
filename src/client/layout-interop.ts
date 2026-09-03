/** Narrow bridge to DSH layout state that is not exposed through ILayout. */
import type { ILayout } from '@deepseek-ai/dsh-client-ui-layout/client'

function layoutFrame(documentTarget: Document): HTMLElement | null {
  const rootSlot = documentTarget.querySelector<HTMLElement>('[data-slot="root"]')
  const frame = rootSlot?.firstElementChild
  return frame instanceof HTMLElement ? frame : null
}

/**
 * Owns a temporary collapse of DSH's left sidebar while Office uses details.
 * A later user or responsive-layout change invalidates restoration ownership.
 */
export class OfficeLayoutLease {
  private frame: HTMLElement | null = null
  private observer: MutationObserver | null = null
  private restore = false
  private expectedCollapse = false
  private overridden = false

  constructor(
    private readonly layout: ILayout,
    private readonly documentTarget: Document = document,
  ) {}

  acquire(): boolean {
    if (this.frame !== null) return this.restore
    const frame = layoutFrame(this.documentTarget)
    if (frame === null) return false
    this.frame = frame
    if (frame.hasAttribute('data-sidebar-collapsed')) return false

    this.restore = true
    this.expectedCollapse = true
    this.observer = new MutationObserver(() => {
      const current = this.frame
      if (current === null) return
      const collapsed = current.hasAttribute('data-sidebar-collapsed')
      if (this.expectedCollapse && collapsed) {
        this.expectedCollapse = false
        return
      }
      this.overridden = true
    })
    this.observer.observe(frame, { attributes: true, attributeFilter: ['data-sidebar-collapsed'] })
    this.layout.toggleSidebar()
    return true
  }

  release(): boolean {
    const frame = this.frame
    const shouldRestore = frame !== null
      && this.restore
      && !this.overridden
      && (this.expectedCollapse || frame.hasAttribute('data-sidebar-collapsed'))
    this.observer?.disconnect()
    this.observer = null
    this.frame = null
    this.restore = false
    this.expectedCollapse = false
    this.overridden = false
    if (shouldRestore) this.layout.toggleSidebar()
    return shouldRestore
  }

  dispose(): void {
    this.release()
  }
}
