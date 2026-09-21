/**
 * Per-page SEO metadata.
 *
 * Positioning: Vega ALM is a third party management company selling to owners
 * of senior housing assets. It is not a community selling to families, so the
 * head terms are operator and management terms, not "assisted living near me".
 *
 * Targeting is national, so there are no geographic modifiers. If the company
 * later focuses on specific states, add them to the title tags and add a
 * markets-served section; local terms are far easier to rank for than these.
 *
 * House style: no em dashes anywhere in customer-facing copy.
 */

export interface PageSeo {
  /** Title tag. Aim for under 60 characters so it does not truncate in SERPs. */
  title: string;
  /** Meta description. Aim for 150 to 160 characters. */
  description: string;
  /** Primary term this page is built to rank for. One page, one head term. */
  primaryTerm: string;
  /** Supporting terms that should appear naturally in headings and body copy. */
  supportingTerms: string[];
}

export const SEO: Record<'home' | 'owners' | 'about' | 'careers', PageSeo> = {
  home: {
    title: 'Assisted Living Management Company | Vega ALM',
    description:
      'Vega ALM is a third party assisted living management company. We run senior living communities for owners who want stable occupancy and clear reporting.',
    primaryTerm: 'assisted living management company',
    supportingTerms: [
      'senior living management company',
      'third party management',
      'memory care management',
      'senior housing operator',
    ],
  },
  owners: {
    title: 'Third Party Senior Living Management | Vega ALM',
    description:
      'Vega ALM provides third party assisted living and memory care management for building owners, with monthly owner reporting you can audit.',
    primaryTerm: 'third party senior living management',
    supportingTerms: [
      'assisted living management services',
      'owner reporting',
      'senior housing management agreement',
      'turnaround and lease up',
    ],
  },
  about: {
    title: 'About Vega ALM | Senior Living Operator Since 2012',
    description:
      'Vega ALM is the senior housing operating company of Vega, a real estate operator that learned to run care. Meet the team behind our management practice.',
    primaryTerm: 'senior living operator',
    supportingTerms: [
      'assisted living operating company',
      'senior housing management leadership',
      'Vega ALM',
    ],
  },
  careers: {
    title: 'Senior Living Careers and Caregiver Jobs | Vega ALM',
    description:
      'The staffing plan is the care plan. Explore caregiver, med tech, nurse, and community leadership roles across Vega ALM managed senior living communities.',
    primaryTerm: 'senior living careers',
    supportingTerms: [
      'caregiver jobs',
      'assisted living jobs',
      'memory care caregiver',
      'executive director senior living',
    ],
  },
};

/**
 * A note on the two hero headlines.
 *
 * "True North for Resident Care" and "An operator you can hold to a number."
 * are brand lines from the design handoff, and the handoff treats them as
 * fixed. Neither carries a keyword, which is normally a cost on an H1.
 *
 * The keyword load is therefore carried by the title tag, the meta
 * description, the hero sub-paragraph, and the H2s, all of which are written
 * to do that work. This is a deliberate trade of a little on-page signal for
 * brand voice. If ranking turns out to matter more than the line, swapping the
 * homepage H1 to something like "Assisted Living Management, Run Like an
 * Operator" is a one-line change in the home copy file.
 */
