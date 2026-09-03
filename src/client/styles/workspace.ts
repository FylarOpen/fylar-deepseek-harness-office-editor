/** Standalone Office empty state and shared buttons. */
export const WORKSPACE_STYLES = `
.fylar-office-view {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
  background: var(--dsw-alias-bg-base, #f7f7f5);
  color: var(--dsw-alias-fg-default, #1f2328);
}

.fylar-office-button {
  appearance: none;
  border: 1px solid var(--dsw-alias-border-default, #c8cdd3);
  border-radius: 7px;
  background: var(--dsw-alias-bg-elevated, #fff);
  color: inherit;
  min-height: 44px;
  padding: 7px 11px;
  font: inherit;
  cursor: pointer;
}

.fylar-office-button:hover:not(:disabled) {
  background: var(--dsw-alias-bg-hover, #f0f2f4);
}

.fylar-office-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.fylar-office-button-primary {
  background: #1769e0;
  color: #fff;
  border-color: #1769e0;
}

.fylar-office-button:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary, #1769e0);
  outline-offset: 2px;
}

.fylar-office-sdk-host {
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}

.fylar-office-empty {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 32px;
}

.fylar-office-empty-card {
  width: min(560px, 100%);
  padding: 30px;
  border: 1px solid var(--dsw-alias-border-subtle, #d8dee4);
  border-radius: 14px;
  background: var(--dsw-alias-bg-elevated, #fff);
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

.fylar-office-brand-mark {
  display: grid;
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
  place-items: center;
  border-radius: 12px;
  background: var(--dsw-alias-brand-primary, #1769e0);
  color: #fff;
  font-weight: 700;
}

.fylar-office-empty h2 {
  margin: 0 0 8px;
  font-size: 24px;
}

.fylar-office-empty p {
  margin: 0 0 22px;
  color: var(--dsw-alias-fg-muted, #667085);
}

.fylar-office-empty-card > small {
  display: block;
  margin: -12px 0 22px;
  color: var(--dsw-alias-fg-subtle, #98a2b3);
}

.fylar-office-empty-error {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0 0 16px;
  padding: 10px;
  border-radius: 8px;
  background: color-mix(in srgb, #d92d20 10%, var(--dsw-alias-bg-base, #fff));
  text-align: left;
}

.fylar-office-empty-status {
  margin: 0 0 16px;
  color: var(--dsw-alias-fg-muted, #667085);
  font-size: 13px;
}

.fylar-office-actions {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.fylar-office-create-label {
  margin: 22px 0 8px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--dsw-alias-fg-muted, #667085);
}

@media (max-width: 639px) {
  .fylar-office-empty { padding: 16px; }
  .fylar-office-empty-card { padding: 22px 16px; border-radius: 10px; box-shadow: none; }
}
`
