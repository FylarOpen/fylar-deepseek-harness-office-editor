/** Compose and install plugin-owned CSS without emitting a separate runtime asset. */
import { ARTIFACT_STYLES } from './styles/artifacts.ts'
import { CONTROL_STYLES } from './styles/controls.ts'
import { EDITOR_STYLES } from './styles/editor.ts'
import { WORKSPACE_STYLES } from './styles/workspace.ts'

export const OFFICE_STYLES = [
  WORKSPACE_STYLES,
  CONTROL_STYLES,
  ARTIFACT_STYLES,
  EDITOR_STYLES,
].join('\n')

/** Install plugin-owned styles and return their disposer. */
export function installOfficeStyles(documentTarget: Document = document): () => void {
  const existing = documentTarget.querySelector<HTMLStyleElement>('style[data-dsh-fylar-office-editor]')
  if (existing !== null) return () => undefined
  const style = documentTarget.createElement('style')
  style.dataset.dshFylarOfficeEditor = 'true'
  style.textContent = OFFICE_STYLES
  documentTarget.head.append(style)
  return () => { style.remove() }
}
