/** Tool progress, assistant deliverables, and artifact action menus. */
export const ARTIFACT_STYLES = `
.fylar-office-tool-status {
  display: flex;
  width: min(520px, 100%);
  min-height: 36px;
  align-items: center;
  gap: 8px;
  margin: 6px 0;
  color: var(--dsw-alias-fg-muted, #667085);
  font-size: 13px;
}

.fylar-office-tool-status small {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fylar-office-tool-status-dot {
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--dsw-alias-fg-muted, #667085);
}

.fylar-office-tool-status[data-state='running'] .fylar-office-tool-status-dot {
  background: var(--dsw-alias-brand-primary, #1769e0);
  animation: fylar-office-pulse 1.2s ease-in-out infinite;
}

.fylar-office-tool-status[data-state='ready'] .fylar-office-tool-status-dot { background: #178a52; }
.fylar-office-tool-status[data-state='error'] .fylar-office-tool-status-dot { background: #d92d20; }

@keyframes fylar-office-pulse {
  50% { opacity: 0.35; }
}

.fylar-office-artifact-card {
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

.fylar-office-artifact-primary {
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

.fylar-office-artifact-primary:hover:not(:disabled) {
  background: var(--dsw-alias-bg-hover, #f8fafc);
}

.fylar-office-artifact-primary:disabled { cursor: not-allowed; opacity: 0.55; }

.fylar-office-artifact-copy {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 2px;
}

.fylar-office-artifact-copy strong,
.fylar-office-artifact-copy span,
.fylar-office-artifact-copy small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fylar-office-artifact-copy strong { font-size: 14px; }
.fylar-office-artifact-copy span { color: var(--dsw-alias-fg-muted, #667085); font-size: 12px; }
.fylar-office-artifact-copy small { color: var(--dsw-alias-fg-subtle, #98a2b3); font-size: 11px; }

.fylar-office-artifact-card > .fylar-office-action-menu-wrap {
  flex: 0 0 52px;
}

.fylar-office-artifact-card > .fylar-office-action-menu-wrap .fylar-office-action-menu {
  right: 6px;
}

.fylar-office-deliverables {
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  align-items: stretch;
  margin-top: 6px;
}

.fylar-office-artifact-primary:focus-visible,
.fylar-office-artifact-card .fylar-office-action-trigger:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary, #1769e0);
  outline-offset: 2px;
}
`
