/**
 * For Owners page copy.
 *
 * This is the commercial page and the primary conversion is Request a
 * Proposal. The argument is that Vega ALM can be held to a number, so the
 * reporting section is the centerpiece: it is proof rather than another claim.
 *
 * House style: no em dashes.
 */

export const OWNERS_HERO = {
  eyebrow: 'For Owners',
  /** Brand line from the design handoff. */
  headline: 'An operator you can hold to a number.',
  body: 'Vega ALM provides third party management for assisted living, memory care and independent living communities. We take over operations, stabilize census, and report every month in a format you can audit against your own books.',
  primaryCta: { label: 'Request a Proposal', href: '#proposal' },
  secondaryCta: { label: 'See a Reporting Sample', href: '#reporting' },
} as const;

export interface OwnerValueCard {
  kicker: string;
  title: string;
  body: string;
}

export const WHY_VEGA_ALM = {
  eyebrow: 'Why Vega ALM',
  heading: 'Built for Owners Who Have Been Disappointed Before',
  cards: <OwnerValueCard[]>[
    {
      kicker: 'Transparency',
      title: 'Reporting You Can Audit',
      body: 'A fixed monthly package covering census by care level, labor detail including agency hours, and revenue and expense against budget. Same format, same day, every month. Nothing to chase.',
    },
    {
      kicker: 'Alignment',
      title: 'Real Estate Discipline',
      body: 'We come out of a real estate operator, so we underwrite your building the way you do. The operating plan is written to serve the asset, not just to pass the next survey.',
    },
    {
      kicker: 'Stability',
      title: 'Staffing That Holds',
      body: 'Consistent assignment, published ratios, and promotion from within. Stable staffing is the cheapest occupancy strategy there is, and the only one that compounds.',
    },
  ],
} as const;

export const REPORTING_SECTION = {
  eyebrow: 'Owner Reporting',
  heading: 'What Arrives Every Month',
  body: [
    'The reporting package closes on the same calendar day each month. You receive census by care level, labor detail including agency and overtime hours, revenue and expense against budget, and a written variance narrative from the executive director who owns the result.',
    'Every figure ties back to source. If net operating income moved, the narrative says what moved it, who is accountable for it, and what changes in the coming month.',
    'Each quarter adds a capital and market review: competitive rate positioning, deferred maintenance status, and a rolling twelve month occupancy forecast you can plan against.',
  ],
  tableColumns: ['Community', 'Units', 'Occupancy', 'NOI Variance'],
  /** PLACEHOLDER. Keep this caption on-page until real portfolio data lands. */
  tableCaption: 'Illustrative figures. Placeholder data pending real portfolio numbers.',
} as const;

export interface EngagementType {
  title: string;
  body: string;
}

export const ENGAGEMENT_TYPES = {
  eyebrow: 'Engagement Types',
  heading: 'Three Ways Owners Work With Us',
  photoSlotLabel: 'Community Exterior',
  entries: <EngagementType[]>[
    {
      title: 'Full Management',
      body: 'We operate the community end to end under a management agreement. Staffing, clinical, dining, plant, sales and financials all report to us, and we report to you.',
    },
    {
      title: 'Turnaround and Lease Up',
      body: 'For a community that is underperforming or newly opened. A defined stabilization plan with milestones and dates, then a transition to standard management once the numbers hold.',
    },
    {
      title: 'Transition and Receivership Support',
      body: 'Short term operational control during a sale, a lender action or an operator change, with the documentation and continuity of care those situations require.',
    },
  ],
} as const;

export const PROPOSAL_FORM = {
  eyebrow: 'Request a Proposal',
  heading: 'Tell Us About the Building',
  body: 'Send the basics and we will come back with an operational read and a proposed scope. If it is not a fit, we will tell you that instead of pitching you.',
  ndaNote: 'Anything you send is treated as confidential. We will sign your NDA before any financials change hands.',
  engagementOptions: [
    'Full management',
    'Turnaround or lease up',
    'Transition or receivership support',
    'Not sure yet',
  ],
  careLevelOptions: [
    'Independent living',
    'Assisted living',
    'Memory care',
    'Multiple care levels',
  ],
  toast: 'Proposal request received. We will respond within two business days.',
} as const;
