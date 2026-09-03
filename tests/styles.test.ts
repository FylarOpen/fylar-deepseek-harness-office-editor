// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { installOfficeStyles, OFFICE_STYLES } from '../src/client/styles.ts'

describe('Office styles', () => {
  it('composes the workspace, artifact, and editor sections', () => {
    expect(OFFICE_STYLES).toContain('.bamboo-office-view')
    expect(OFFICE_STYLES).toContain('.bamboo-office-artifact-card')
    expect(OFFICE_STYLES).toContain('.bamboo-office-editor-inline')
    expect(OFFICE_STYLES).toContain('.bamboo-office-action-menu')
    expect(OFFICE_STYLES).toContain('.bamboo-office-mode-badge')
    expect(OFFICE_STYLES).toContain('900px')
    expect(OFFICE_STYLES).toContain('var(--dsh-conversation-column-width, 964px)')
    expect(OFFICE_STYLES).toContain('var(--dsh-conversation-viewport-height, 100dvh)')
    expect(OFFICE_STYLES).toContain('isolation: isolate')
    expect(OFFICE_STYLES).toContain('z-index: 10')
    expect(OFFICE_STYLES).toContain('.bamboo-office-details:fullscreen')
    expect(OFFICE_STYLES).toContain('min-height: 52px')
    expect(OFFICE_STYLES).toContain('flex: 1 1 auto')
    expect(OFFICE_STYLES).toContain('@media (max-width: 1023px)')
    expect(OFFICE_STYLES).toContain('@media (max-width: 639px)')
    expect(OFFICE_STYLES).toContain('width: 44px')
    expect(OFFICE_STYLES).toContain(':focus-visible')
    expect(OFFICE_STYLES).not.toContain('.bamboo-office-dialog')
  })

  it('installs one style element and disposes its owner', () => {
    const dispose = installOfficeStyles(document)
    const style = document.querySelector<HTMLStyleElement>('style[data-dsh-fylar-office-editor]')
    expect(style?.textContent).toBe(OFFICE_STYLES)

    const disposeDuplicate = installOfficeStyles(document)
    expect(document.querySelectorAll('style[data-dsh-fylar-office-editor]')).toHaveLength(1)
    disposeDuplicate()
    expect(style?.isConnected).toBe(true)

    dispose()
    expect(style?.isConnected).toBe(false)
  })
})
