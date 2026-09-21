/**
 * Removes dist/ before a build.
 *
 * Astro only cleans its own outDir, which is dist/ALM. Anything previously
 * written to the dist root (a stale build from a different base, or the
 * generated _headers) would otherwise survive and ship.
 */

import { rm } from 'node:fs/promises';
import { join } from 'node:path';

await rm(join(process.cwd(), 'dist'), { recursive: true, force: true });
console.log('[clean] removed dist/');
