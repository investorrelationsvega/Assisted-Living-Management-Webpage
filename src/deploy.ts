/**
 * Deploy environment detection, used to keep preview deployments out of the
 * search index.
 *
 * Cloudflare Pages sets CF_PAGES_BRANCH on every build. A build of any branch
 * other than the production branch is a preview, and previews must not be
 * indexed: they would compete with the real site for the same terms and leak
 * placeholder content into search results.
 *
 * The default leans toward indexable on purpose. Only a positively identified
 * preview is blocked, so a local build or a manual deploy cannot silently
 * suppress the production site. Set SITE_NOINDEX=1 to force the block.
 */

const PRODUCTION_BRANCH = 'main';

const branch = process.env.CF_PAGES_BRANCH;
const forced = process.env.SITE_NOINDEX === '1';

/** True on a Cloudflare Pages build of a non-production branch. */
export const IS_PREVIEW_DEPLOY = Boolean(branch) && branch !== PRODUCTION_BRANCH;

/** True when this build should be kept out of search indexes. */
export const IS_NOINDEX = forced || IS_PREVIEW_DEPLOY;

/** Branch name when built on Cloudflare Pages, otherwise null. */
export const DEPLOY_BRANCH = branch ?? null;
