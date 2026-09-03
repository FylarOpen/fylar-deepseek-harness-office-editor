// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { OfficeActionMenu } from '../src/client/OfficeActionMenu.tsx'

describe('OfficeActionMenu', () => {
  it('supports focus entry, arrow navigation, selection, and Escape focus recovery', () => {
    const select = vi.fn()
    render(<OfficeActionMenu
      label="文档操作"
      icon="more"
      items={[
        { id: 'first', label: '第一项', onSelect: vi.fn() },
        { id: 'second', label: '第二项', description: '第二项说明', onSelect: select },
      ]}
    />)

    const trigger = screen.getByRole('button', { name: '文档操作' })
    fireEvent.click(trigger)
    const first = screen.getByRole('menuitem', { name: '第一项' })
    const second = screen.getByRole('menuitem', { name: /第二项/ })
    expect(document.activeElement).toBe(first)
    fireEvent.keyDown(first, { key: 'ArrowDown' })
    expect(document.activeElement).toBe(second)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(document.activeElement).toBe(trigger)

    fireEvent.click(trigger)
    fireEvent.click(screen.getByRole('menuitem', { name: /第二项/ }))
    expect(select).toHaveBeenCalledOnce()
    expect(screen.queryByRole('menu')).toBeNull()
  })
})
