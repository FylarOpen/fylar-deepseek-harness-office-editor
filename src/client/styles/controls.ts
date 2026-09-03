/** Shared file identity, ghost actions, and accessible popover menus. */
export const CONTROL_STYLES = `
.bamboo-office-artifact-icon {
  display: grid;
  flex: 0 0 38px;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 9px;
  background: color-mix(in srgb, #1769e0 11%, transparent);
  color: #1769e0;
}

.bamboo-office-artifact-icon[data-compact='true'] {
  flex-basis: 32px;
  width: 32px;
  height: 32px;
  border-radius: 7px;
}

.bamboo-office-artifact-icon[data-compact='true'] svg {
  width: 19px;
  height: 19px;
}

.bamboo-office-artifact-icon[data-accent='excel'] {
  background: color-mix(in srgb, #178a52 11%, transparent);
  color: #178a52;
}

.bamboo-office-artifact-icon[data-accent='powerpoint'] {
  background: color-mix(in srgb, #d6572a 11%, transparent);
  color: #d6572a;
}

.bamboo-office-action-menu-wrap {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
}

.bamboo-office-action-trigger {
  display: inline-flex;
  min-width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0 9px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-fg-default, #344054);
  font: inherit;
  font-size: 13px;
  line-height: 1;
  cursor: pointer;
}

.bamboo-office-action-trigger[data-variant='text'] {
  min-width: auto;
  padding-inline: 10px 8px;
}

.bamboo-office-action-trigger:hover:not(:disabled),
.bamboo-office-action-trigger[aria-expanded='true'] {
  background: var(--dsw-alias-bg-hover, #f1f3f5);
}

.bamboo-office-action-trigger:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.bamboo-office-action-chevron {
  color: var(--dsw-alias-fg-muted, #667085);
}

.bamboo-office-action-menu {
  position: absolute;
  z-index: 40;
  top: calc(100% + 4px);
  right: 0;
  display: flex;
  width: max-content;
  min-width: 220px;
  max-width: min(280px, calc(100vw - 24px));
  flex-direction: column;
  gap: 2px;
  padding: 6px;
  border: 1px solid var(--dsw-alias-border-subtle, #d8dee4);
  border-radius: 10px;
  background: var(--dsw-alias-bg-elevated, #fff);
  box-shadow: 0 12px 32px color-mix(in srgb, currentColor 15%, transparent);
}

.bamboo-office-action-menu button {
  display: flex;
  min-height: 44px;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 7px 10px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: inherit;
  text-align: left;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}

.bamboo-office-action-menu button:hover:not(:disabled) {
  background: var(--dsw-alias-bg-hover, #eef1f4);
}

.bamboo-office-action-menu button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.bamboo-office-action-menu button[data-danger='true'] {
  color: var(--dsw-alias-fg-danger, #b42318);
}

.bamboo-office-action-menu button small {
  max-width: 240px;
  color: var(--dsw-alias-fg-muted, #667085);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.35;
  white-space: normal;
}

.bamboo-office-action-trigger:focus-visible,
.bamboo-office-action-menu button:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary, #1769e0);
  outline-offset: 2px;
}

@media (max-width: 639px) {
  .bamboo-office-action-menu {
    max-width: min(260px, calc(100vw - 16px));
  }
}
`
