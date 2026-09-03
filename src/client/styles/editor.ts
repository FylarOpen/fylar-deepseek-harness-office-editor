/** Shared details-column and wide inline editor surfaces. */
export const EDITOR_STYLES = `
.fylar-office-details {
  position: relative;
  display: flex;
  height: 100%;
  min-height: 0;
  flex-direction: column;
  isolation: isolate;
  z-index: 0;
  container-type: inline-size;
  background: var(--dsw-alias-bg-base, #fff);
  color: var(--dsw-alias-fg-default, #1f2328);
}

.fylar-office-details:fullscreen {
  width: 100%;
  max-width: none;
  height: 100%;
  min-height: 0;
  margin: 0;
  border: 0;
  border-radius: 0;
  background: var(--dsw-alias-bg-base, #fff);
  box-shadow: none;
}

.fylar-office-details:fullscreen::backdrop {
  background: var(--dsw-alias-bg-base, #fff);
}

.fylar-office-details:fullscreen .fylar-office-details-header {
  border-radius: 0;
}

.fylar-office-editor-inline {
  --fylar-office-inline-width: min(
    900px,
    calc(var(--dsh-conversation-column-width, 964px) - 64px)
  );

  width: var(--fylar-office-inline-width);
  max-width: none;
  height: clamp(
    420px,
    calc(
      var(--dsh-conversation-viewport-height, 100dvh) -
      var(--dsh-composer-height, 152px) -
      72px
    ),
    600px
  );
  box-sizing: border-box;
  margin: 8px 0 12px;
  margin-left: calc((100% - var(--fylar-office-inline-width)) / 2);
  overflow: visible;
  scroll-margin-top: 16px;
  scroll-margin-bottom: calc(var(--dsh-composer-height, 152px) + 16px);
  border: 1px solid var(--dsw-alias-border-subtle, #d8dee4);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07);
}

.fylar-office-details-header {
  position: relative;
  z-index: 10;
  display: flex;
  min-height: 52px;
  box-sizing: border-box;
  align-items: center;
  gap: 8px;
  padding: 4px 8px 4px 10px;
  border-bottom: 1px solid var(--dsw-alias-border-subtle, #d8dee4);
  background: var(--dsw-alias-bg-elevated, #fff);
}

.fylar-office-editor-inline .fylar-office-details-header {
  border-radius: 11px 11px 0 0;
}

.fylar-office-document-identity {
  display: flex;
  min-width: 0;
  flex: 1;
  align-items: center;
  gap: 8px;
}

.fylar-office-details-heading {
  display: flex;
  min-width: 0;
  flex: 1;
  align-items: center;
  gap: 8px;
}

.fylar-office-details-heading strong {
  min-width: 0;
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25;
}

.fylar-office-document-meta {
  display: flex;
  min-width: 0;
  flex: 0 1 auto;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: var(--dsw-alias-fg-muted, #667085);
}

.fylar-office-document-product,
.fylar-office-document-separator {
  flex: 0 0 auto;
}

.fylar-office-mode-badge {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: 5px;
  overflow: hidden;
  color: var(--dsw-alias-fg-muted, #667085);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fylar-office-mode-badge > span {
  width: 6px;
  height: 6px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #1769e0;
}

.fylar-office-mode-badge[data-tone='dirty'] > span { background: #e78b18; }
.fylar-office-mode-badge[data-tone='readonly'] > span { background: #98a2b3; }
.fylar-office-mode-badge[data-tone='loading'] > span { background: #1769e0; animation: fylar-office-pulse 1.2s ease-in-out infinite; }
.fylar-office-mode-badge[data-tone='error'] > span { background: #d92d20; }

.fylar-office-details-header-actions {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 4px;
}

.fylar-office-details-close {
  display: inline-flex;
  min-width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0 9px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}

.fylar-office-details-close:hover {
  background: var(--dsw-alias-bg-hover, #eef1f4);
}

.fylar-office-details-close:disabled,
.fylar-office-details-error button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.fylar-office-details-error button {
  white-space: nowrap;
  border: 1px solid var(--dsw-alias-border-default, #c8cdd3);
  border-radius: 6px;
  background: var(--dsw-alias-bg-elevated, #fff);
  color: inherit;
  padding: 5px 8px;
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}

.fylar-office-details-body {
  position: relative;
  z-index: 0;
  min-height: 0;
  flex: 1;
  overflow: hidden;
}

.fylar-office-details-viewer {
  position: absolute;
  inset: 0;
  min-height: 0;
  overflow: hidden;
}

.fylar-office-details-loading {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: grid;
  place-items: center;
  padding: 20px;
  background: color-mix(in srgb, var(--dsw-alias-bg-base, #fff) 88%, transparent);
  font-size: 13px;
}

.fylar-office-details-error {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 9px 11px;
  border-bottom: 1px solid color-mix(in srgb, #d92d20 35%, transparent);
  background: color-mix(in srgb, #d92d20 10%, var(--dsw-alias-bg-base, #fff));
  color: var(--dsw-alias-fg-default, #7a271a);
  font-size: 12px;
}

.fylar-office-details-error div {
  display: flex;
  gap: 6px;
  margin-top: 4px;
}

.fylar-office-details-error strong,
.fylar-office-details-error span {
  display: block;
}

.fylar-office-details-close:focus-visible,
.fylar-office-details-error button:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary, #1769e0);
  outline-offset: 2px;
}

@container (max-width: 720px) {
  .fylar-office-document-product,
  .fylar-office-document-separator { display: none; }
  .fylar-office-details-header { gap: 5px; padding-inline: 7px 5px; }
  .fylar-office-document-identity,
  .fylar-office-details-heading { gap: 6px; }
}

@container (max-width: 460px) {
  .fylar-office-details-header-actions .fylar-office-action-trigger[data-variant='text'] > span,
  .fylar-office-details-header-actions .fylar-office-action-chevron { display: none; }
  .fylar-office-details-header-actions .fylar-office-action-trigger[data-variant='text'] {
    min-width: 44px;
    padding-inline: 0;
  }
  .fylar-office-details-close span { display: none; }
  .fylar-office-details-close { padding-inline: 0; }
}

@container (max-width: 360px) {
  .fylar-office-document-meta { display: none; }
  .fylar-office-document-identity { gap: 6px; }
}

@media (max-width: 1023px) {
  .fylar-office-editor-inline {
    width: 100%;
    height: clamp(
      360px,
      calc(
        var(--dsh-conversation-viewport-height, 100dvh) -
        var(--dsh-composer-height, 152px) -
        64px
      ),
      560px
    );
    margin: 8px 0 12px;
  }
}

@media (max-width: 639px) {
  .fylar-office-editor-inline {
    width: 100%;
    height: clamp(
      320px,
      calc(
        var(--dsh-conversation-viewport-height, 100svh) -
        var(--dsh-composer-height, 152px) -
        48px
      ),
      480px
    );
    min-height: 320px;
    margin-inline: 0;
    border-radius: 0;
    box-shadow: none;
  }
}
`
