import { describe, expect, it, vi } from 'vitest'
import { OfficeSdkLoader } from '../src/client/office-sdk-loader.ts'

describe('OfficeSdkLoader', () => {
  it('deduplicates successful preload and UI imports', async () => {
    const sdk = { openfile: vi.fn(), createfile: vi.fn() }
    const importer = vi.fn(async (url: string) => url.endsWith('/UI.js') ? { default: sdk } : {})
    const loader = new OfficeSdkLoader('/sdk', importer)

    await Promise.all([loader.preload(), loader.preload()])
    const [first, second] = await Promise.all([loader.load(), loader.load()])

    expect(first).toBe(sdk)
    expect(second).toBe(sdk)
    expect(importer).toHaveBeenCalledTimes(2)
    expect(importer).toHaveBeenNthCalledWith(1, '/sdk/preload.js')
    expect(importer).toHaveBeenNthCalledWith(2, '/sdk/UI.js')
  })

  it('clears failed imports so retry can succeed', async () => {
    const sdk = { openfile: vi.fn(), createfile: vi.fn() }
    const importer = vi.fn()
      .mockRejectedValueOnce(new Error('network down'))
      .mockResolvedValueOnce({ default: sdk })
    const loader = new OfficeSdkLoader('/sdk', importer)

    await expect(loader.load()).rejects.toMatchObject({ kind: 'runtime-load' })
    await expect(loader.load()).resolves.toBe(sdk)
    expect(importer).toHaveBeenCalledTimes(2)
  })

  it('rejects a module without the documented API', async () => {
    const loader = new OfficeSdkLoader('/sdk', async () => ({ default: {} }))
    await expect(loader.load()).rejects.toMatchObject({ kind: 'runtime-load' })
  })
})
