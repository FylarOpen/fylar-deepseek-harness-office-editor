/** Tool progress, assistant deliverables, and artifact action menus. */
export const ARTIFACT_STYLES = `
.bamboo-office-tool-status {
  display: flex;
  width: min(520px, 100%);
  min-height: 36px;
  align-items: center;
  gap: 8px;
  margin: 6px 0;
  color: var(--dsw-alias-fg-muted, #667085);
  font-size: 13px;
}

.bamboo-office-tool-status small {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bamboo-office-tool-status-dot {
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--dsw-alias-fg-muted, #667085);
}

.bamboo-office-tool-status[data-state='running'] .bamboo-office-tool-status-dot {
  background: var(--dsw-alias-brand-primary, #1769e0);
  animation: bamboo-office-pulse 1.2s ease-in-out infinite;
}

.bamboo-office-tool-status[data-state='ready'] .bamboo-office-tool-status-dot { background: #178a52; }
.bamboo-office-tool-status[data-state='error'] .bamboo-office-tool-status-dot { background: #d92d20; }

@keyframes bamboo-office-pulse {
  50% { opacity: 0.35; }
}

.bamboo-office-artifact-card {
  display: flex;
  width: min(560px, 100%);
  align-items: stretch;
  margin: 8px 0;
  border: 1px solid var(--dsw-alias-border-subtle, #d8dee4);
  border-radius: 12px;
  background: var(--dsw-alias-bg-elevated, #fff);
  color: inherit;
  box-shadow: 0 1px 2px color-mix(in srgb, currentColor 5%, transparent);
}

.bamboo-office-artifact-primary {
  display: flex;
  min-width: 0;
  flex: 1;
  align-items: center;
  gap: 12px;
  padding: 13px 14px;
  border: 0;
  border-radius: 11px 0 0 11px;
  background: transparent;
  color: inherit;
  text-align: left;
  font: inherit;
  cursor: pointer;
}

.bamboo-office-artifact-primary:hover:not(:disabled) {
  background: var(--dsw-alias-bg-hover, #f8fafc);
}

.bamboo-office-artifact-primary:disabled { cursor: not-allowed; opacity: 0.55; }

.bamboo-office-artifact-copy {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 2px;
}

.bamboo-office-artifact-copy strong,
.bamboo-office-artifact-copy span,
.bamboo-office-artifact-copy small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bamboo-office-artifact-copy strong { font-size: 14px; }
.bamboo-office-artifact-copy span { color: var(--dsw-alias-fg-muted, #667085); font-size: 12px; }
.bamboo-office-artifact-copy small { color: var(--dsw-alias-fg-subtle, #98a2b3); font-size: 11px; }

.bamboo-office-artifact-card > .bamboo-office-action-menu-wrap {
  flex: 0 0 52px;
}

.bamboo-office-artifact-card > .bamboo-office-action-menu-wrap .bamboo-office-action-menu {
  right: 6px;
}

.bamboo-office-deliverables {
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  align-items: stretch;
  margin-top: 6px;
}

.bamboo-office-artifact-primary:focus-visible,
.bamboo-office-artifact-card .bamboo-office-action-trigger:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary, #1769e0);
  outline-offset: 2px;
}
`
