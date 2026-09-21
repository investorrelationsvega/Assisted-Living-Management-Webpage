/**
 * Builds an internal URL underneath the configured base path.
 *
 * The site lives at /ALM, so a bare href of "/owners/" would escape the
 * subpath and land on the parent Vega site. Every internal link goes through
 * here instead. Astro handles asset URLs itself; this is for hrefs.
 *
 *   path('/owners/')        ->  /ALM/owners/
 *   path('/owners/#form')   ->  /ALM/owners/#form
 *   path('/')               ->  /ALM/
 */
export function path(to: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!to.startsWith('/')) return to; // external or already relative
  return `${base}${to}`;
}

/** True when `href` is the page currently being rendered. */
export function isCurrent(href: string, pathname: string): boolean {
  const target = path(href).replace(/\/$/, '');
  return pathname.replace(/\/$/, '') === target;
}
