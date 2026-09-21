/**
 * Serves the Vega ALM site at vegarei.com/ALM.
 *
 * Cloudflare Pages attaches a custom domain, never a subpath, so a Pages
 * project alone cannot answer at vegarei.com/ALM. This Worker sits on that
 * route and proxies through to the Pages deployment.
 *
 * The proxy is deliberately path-through: the site is built with Astro's
 * `base` set to /ALM and nested under that prefix on disk, so the Pages origin
 * already serves /ALM/... and nothing needs rewriting. That keeps the preview
 * URL and production byte-identical.
 */

const PREFIX = '/ALM';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Canonicalize casing. Paths are case sensitive, so /alm would otherwise
    // miss every asset; redirect it once rather than serving a broken page.
    if (url.pathname.toUpperCase().startsWith(PREFIX) && !url.pathname.startsWith(PREFIX)) {
      const canonical = new URL(url);
      canonical.pathname = PREFIX + url.pathname.slice(PREFIX.length);
      return Response.redirect(canonical.toString(), 301);
    }

    if (!url.pathname.startsWith(PREFIX)) {
      return new Response('Not Found', { status: 404 });
    }

    const target = new URL(url.pathname + url.search, env.PAGES_ORIGIN);

    // redirect: 'manual' so the Pages origin's own redirects (trailing slash
    // normalization, mainly) reach the browser instead of being followed here,
    // which would otherwise expose the pages.dev hostname.
    const response = await fetch(new Request(target, request), { redirect: 'manual' });

    const location = response.headers.get('location');
    if (!location) return response;

    // Rewrite any redirect that points back at the origin so the visitor stays
    // on vegarei.com.
    const rewritten = new Headers(response.headers);
    const resolved = new URL(location, env.PAGES_ORIGIN);
    if (resolved.origin === new URL(env.PAGES_ORIGIN).origin) {
      resolved.protocol = url.protocol;
      resolved.host = url.host;
      rewritten.set('location', resolved.toString());
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: rewritten,
    });
  },
};
