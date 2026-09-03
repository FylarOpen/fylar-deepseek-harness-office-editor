import { execFileSync } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const projectRoot = new URL('..', import.meta.url)
const npmCache = mkdtempSync(join(tmpdir(), 'fylar-office-npm-cache-'))
try {
  execFileSync('npm', ['run', 'build'], {
    cwd: projectRoot,
    encoding: 'utf8',
    env: { ...process.env, npm_config_cache: npmCache },
    stdio: ['ignore', 'inherit', 'inherit'],
  })
  const output = execFileSync('npm', ['pack', '--json', '--ignore-scripts'], {
    cwd: projectRoot,
    encoding: 'utf8',
    env: { ...process.env, npm_config_cache: npmCache },
    stdio: ['ignore', 'pipe', 'inherit'],
  })
  const jsonStart = output.lastIndexOf('\n[')
  const payload = jsonStart === -1 ? output : output.slice(jsonStart + 1)
  const [result] = JSON.parse(payload)
  if (result?.filename === undefined) throw new Error('npm pack did not return a tarball filename')
  console.log(result.filename)
} finally {
  rmSync(npmCache, { recursive: true, force: true })
}
