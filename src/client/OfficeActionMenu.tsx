import { useEffect, useId, useRef, useState } from 'react'

export interface OfficeActionMenuItem {
  readonly id: string
  readonly label: string
  readonly description?: string | undefined
  readonly disabled?: boolean | undefined
  readonly danger?: boolean | undefined
  readonly onSelect: () => void
}

export interface OfficeActionMenuProps {
  readonly label: string
  readonly icon: 'export' | 'more'
  readonly variant?: 'text' | 'icon' | undefined
  readonly disabled?: boolean | undefined
  readonly items: readonly OfficeActionMenuItem[]
}

function MenuIcon({ icon }: { readonly icon: OfficeActionMenuProps['icon'] }) {
  return icon === 'export' ? (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden>
      <path d="M8 2.5v7m0 0 2.5-2.5M8 9.5 5.5 7M3 11v2h10v-2" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" width="17" height="17" aria-hidden>
      <circle cx="3.25" cy="8" r="1.1" fill="currentColor" />
      <circle cx="8" cy="8" r="1.1" fill="currentColor" />
      <circle cx="12.75" cy="8" r="1.1" fill="currentColor" />
    </svg>
  )
}

/** Shared DSH-like action menu used by editor headers and delivery cards. */
export function OfficeActionMenu({
  label, icon, variant = 'icon', disabled = false, items,
}: OfficeActionMenuProps) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    menuRef.current?.querySelector<HTMLButtonElement>('button:not(:disabled)')?.focus()
    const closeOutside = (event: PointerEvent): void => {
      if (rootRef.current?.contains(event.target as Node) !== true) setOpen(false)
    }
    const closeWithEscape = (event: KeyboardEvent): void => {
      if (event.key !== 'Escape') return
      event.preventDefault()
      setOpen(false)
      triggerRef.current?.focus()
    }
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeWithEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeWithEscape)
    }
  }, [open])

  const navigateMenu = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    const controls = [...(menuRef.current?.querySelectorAll<HTMLButtonElement>('button:not(:disabled)') ?? [])]
    if (controls.length === 0) return
    event.preventDefault()
    const current = controls.indexOf(document.activeElement as HTMLButtonElement)
    const next = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? controls.length - 1
        : event.key === 'ArrowUp'
          ? (current <= 0 ? controls.length : current) - 1
          : (current + 1) % controls.length
    controls[next]?.focus()
  }

  return (
    <div ref={rootRef} className="bamboo-office-action-menu-wrap">
      <button
        ref={triggerRef}
        type="button"
        className="bamboo-office-action-trigger"
        data-variant={variant}
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        disabled={disabled}
        onClick={() => { setOpen(value => !value) }}
      >
        <MenuIcon icon={icon} />
        {variant === 'text' ? <span>{label}</span> : null}
        {variant === 'text' ? (
          <svg className="bamboo-office-action-chevron" viewBox="0 0 12 12" width="12" height="12" aria-hidden>
            <path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : null}
      </button>
      {open ? (
        <div
          ref={menuRef}
          id={menuId}
          className="bamboo-office-action-menu"
          role="menu"
          aria-label={label}
          onKeyDown={navigateMenu}
        >
          {items.map(item => (
            <button
              key={item.id}
              type="button"
              role="menuitem"
              data-danger={item.danger === true ? 'true' : undefined}
              disabled={item.disabled}
              title={item.disabled ? item.description : undefined}
              onClick={() => {
                setOpen(false)
                item.onSelect()
              }}
            >
              <span>{item.label}</span>
              {item.description === undefined ? null : <small>{item.description}</small>}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
