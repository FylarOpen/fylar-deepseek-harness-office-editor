import { execFileSync } from 'node:child_process'
import { resolve } from 'node:path'

const projectRoot = resolve(new URL('..', import.meta.url).pathname)
function git(args) {
  return execFileSync('git', args, {
    cwd: projectRoot,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit'],
  }).trim()
}

const diff = git(['diff', '--name-status', '--', 'lib'])
const untracked = git(['ls-files', '--others', '--exclude-standard', '--', 'lib'])
const changed = [diff, untracked].filter(Boolean).join('\n')

if (changed !== '') {
  const paths = changed.split('\n')
  const preview = paths.slice(0, 20).join('\n')
  const remainder = paths.length > 20 ? `\n... and ${paths.length - 20} more files` : ''
  throw new Error(`Built lib/ does not match the staged or committed distribution files:\n${preview}${remainder}`)
}

console.log('Verified built lib/ matches the staged or committed distribution files')
