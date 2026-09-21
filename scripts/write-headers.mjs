/**
 * Writes dist/_headers for Cloudflare Pages after the Astro build.
 *
 * This is a post-build step because Astro will not route a file whose name
 * starts with an underscore, so _headers cannot be generated as a page
 * endpoint the way robots.txt is.
 */

import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const PRODUCTION_BRANCH = 'main';
const branch = process.env.CF_PAGES_BRANCH;
const isPreview = Boolean(branch) && branch !== PRODUCTION_BRANCH;
const isNoindex = process.env.SITE_NOINDEX === '1' || isPreview;

const blocks = [
  `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: geolocation=(), microphone=(), camera=()`,
];

if (isNoindex) {
  blocks[0] += `
  X-Robots-Tag: noindex, nofollow`;
}

// Fingerprinted assets are safe to cache indefinitely.
blocks.push(`/_astro/*
  Cache-Control: public, max-age=31536000, immutable`);

const body = blocks.join('\n\n') + '\n';
const out = join(process.cwd(), 'dist', '_headers');
await writeFile(out, body, 'utf8');

console.log(
  `[headers] wrote dist/_headers (branch: ${branch ?? 'local'}, noindex: ${isNoindex})`,
);
