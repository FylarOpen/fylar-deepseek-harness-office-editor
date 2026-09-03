import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { verifyLock } from './lib/sdk-integrity.mjs'

const projectRoot = resolve(new URL('..', import.meta.url).pathname)
const vendorRoot = resolve(projectRoot, 'vendor/office-sdk')
const { lock, metadata } = await verifyLock(vendorRoot)
const generated = await readFile(resolve(projectRoot, 'src/office-sdk.generated.ts'), 'utf8')
if (!generated.includes(`OFFICE_SDK_VERSION = ${JSON.stringify(metadata.version)}`)) {
  throw new Error('Generated Office SDK version constant is stale')
}
const revision = lock.sourceSha256.slice(0, 12)
if (!generated.includes(`OFFICE_SDK_REVISION = ${JSON.stringify(revision)}`)) {
  throw new Error('Generated Office SDK revision constant is stale')
}
if (!generated.includes("OFFICE_SDK_ROUTE_PREFIX = '/fylar-office-sdk'")) {
  throw new Error('Generated Office SDK route prefix is invalid')
}
if (!generated.includes('`${OFFICE_SDK_ROUTE_PREFIX}/${OFFICE_SDK_VERSION}-${OFFICE_SDK_REVISION}`')) {
  throw new Error('Generated Office SDK cache-busting base path is invalid')
}
console.log(`Verified Office SDK ${metadata.version}: ${lock.files.length} files`)
