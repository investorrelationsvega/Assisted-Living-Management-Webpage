import type { APIRoute } from 'astro';
import { IS_NOINDEX } from '../deploy';

/**
 * Generated rather than static, so preview deployments disallow crawling while
 * production allows it. See src/deploy.ts for how the two are told apart.
 */
export const GET: APIRoute = ({ site }) => {
  const body = IS_NOINDEX
    ? ['User-agent: *', 'Disallow: /', ''].join('\n')
    : [
        'User-agent: *',
        'Allow: /',
        '',
        `Sitemap: ${new URL('sitemap-index.xml', site).href}`,
        '',
      ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
