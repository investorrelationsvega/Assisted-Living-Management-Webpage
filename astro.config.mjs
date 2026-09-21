// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * The site is served at https://vegarei.com/ALM, a subpath of the main Vega
 * domain rather than its own host. `base` makes Astro emit every asset and
 * route under that prefix, so the build works identically on the pages.dev
 * preview URL and behind the production Worker proxy.
 *
 * Internal links written by hand must go through the `path()` helper in
 * src/utils/url.ts. Astro prefixes assets automatically but not hrefs.
 */
export default defineConfig({
  site: 'https://vegarei.com',
  base: '/ALM',
  /**
   * Nest the build under the base path on disk as well as in URLs. Astro does
   * not do this by itself: with only `base` set, it writes index.html to the
   * output root while that file references /ALM/_astro/..., so every asset
   * 404s unless something is already serving the directory at /ALM.
   *
   * Nesting makes the preview URL (pages.dev/ALM/) behave exactly like
   * production (vegarei.com/ALM/), and lets the Worker proxy pass paths
   * straight through without rewriting them.
   */
  outDir: './dist/ALM',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
