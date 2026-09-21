// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update `site` to the production domain before deploying — it is used for
// canonical URLs, Open Graph tags and the generated sitemap.
export default defineConfig({
  site: 'https://www.vega-alm.example',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
