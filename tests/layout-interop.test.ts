// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { ILayout } from '@deepseek-ai/dsh-client-ui-layout/client'
import { OfficeLayoutLease } from '../src/client/layout-interop.ts'

function layout(): ILayout {
  return { toggleSidebar: vi.fn(), openDetails: vi.fn(), closeDetails: vi.fn() }
}

function frame(): HTMLElement {
  const root = document.createElement('div')
  root.dataset.slot = 'root'
  const frame = document.createElement('div')
  root.append(frame)
  document.body.append(root)
  return frame
}

describe('Office details layout lease', () => {
  beforeEach(() => { document.body.replaceChildren() })

  it('restores only a sidebar that Office collapsed', async () => {
    const target = layout()
    const host = frame()
    const lease = new OfficeLayoutLease(target, document)
    expect(lease.acquire()).toBe(true)
    expect(target.toggleSidebar).toHaveBeenCalledOnce()
    host.dataset.sidebarCollapsed = 'true'
    await Promise.resolve()
    expect(lease.release()).toBe(true)
    expect(target.toggleSidebar).toHaveBeenCalledTimes(2)
  })

  it('does not restore after the user overrides the sidebar', async () => {
    const target = layout()
    const host = frame()
    const lease = new OfficeLayoutLease(target, document)
    lease.acquire()
    host.dataset.sidebarCollapsed = 'true'
    await Promise.resolve()
    host.removeAttribute('data-sidebar-collapsed')
    await Promise.resolve()
    expect(lease.release()).toBe(false)
    expect(target.toggleSidebar).toHaveBeenCalledOnce()
  })

  it('leaves an already-collapsed or unavailable layout untouched', () => {
    const target = layout()
    const host = frame()
    host.dataset.sidebarCollapsed = 'true'
    const lease = new OfficeLayoutLease(target, document)
    expect(lease.acquire()).toBe(false)
    expect(lease.release()).toBe(false)
    document.body.replaceChildren()
    expect(new OfficeLayoutLease(target, document).acquire()).toBe(false)
    expect(target.toggleSidebar).not.toHaveBeenCalled()
  })
})
