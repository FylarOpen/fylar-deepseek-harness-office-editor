/** Persisted successful Office file outputs for one conversation turn. */
export interface ProducedOfficeFile {
  readonly seq: number
  readonly path: string
}

export interface OfficeDeliverablesData {
  readonly produced: readonly ProducedOfficeFile[]
}

/** Return only file outputs that existed when the closing message was rendered. */
export function officeFilesForClosing(
  data: Readonly<OfficeDeliverablesData> | undefined,
  seq: number,
): readonly string[] {
  if (data === undefined) return []
  return data.produced.filter(file => file.seq <= seq).map(file => file.path)
}
