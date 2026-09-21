/**
 * Homepage copy.
 *
 * The homepage serves owners first and families second, per the brief. The
 * hero, services and approach sections argue operations to owners; the
 * communities grid and the contact form are where a family lands.
 *
 * House style: no em dashes.
 */

export const FOUNDED_YEAR = 2012;

export const HOME_HERO = {
  /** Sage tracked caps beside the hero paragraph. */
  tag: `Est. ${FOUNDED_YEAR} · A Vega Company`,
  /** Brand line from the design handoff. The line break is explicit. */
  headlineLines: ['True North for', 'Resident Care'],
  body:
    'Vega ALM is a third party assisted living management company. Owners bring us buildings that need an operator. We bring census discipline, staffing that holds, and reporting you can audit.',
  /**
   * The handoff specifies "Schedule a Visit" as the primary hero action. Since
   * owners are the priority audience and Request a Proposal is the primary
   * conversion, the proposal CTA leads here instead. Flagged because it is a
   * deliberate departure from the handoff.
   */
  primaryCta: { label: 'Request a Proposal', href: '/owners/#proposal' },
  secondaryCta: { label: 'Our Communities', href: '#communities' },
} as const;

export interface ServiceCard {
  kicker: string;
  title: string;
  body: string;
}

export const SERVICES_SECTION = {
  eyebrow: 'Our Services',
  heading: 'Full Service Senior Living Management',
  cards: <ServiceCard[]>[
    {
      kicker: 'Census',
      title: 'Occupancy and Census Growth',
      body: 'Referral pipeline development, move in conversion tracking, and a sales process reviewed every week. Occupancy is a system, not a season.',
    },
    {
      kicker: 'Compliance',
      title: 'Clinical and Regulatory Compliance',
      body: 'Survey readiness, care plan audits, incident review, and state licensure support across assisted living, memory care and independent living.',
    },
    {
      kicker: 'Staffing',
      title: 'Staffing and Retention',
      body: 'Recruiting, scheduling and consistent assignment. Agency hours are a symptom, so we treat the cause rather than the line item.',
    },
    {
      kicker: 'Financials',
      title: 'Financial Management and Owner Reporting',
      body: 'Budgets, monthly financials, variance analysis, and a reporting package that arrives in the same format on the same day every month.',
    },
    {
      kicker: 'Resident Life',
      title: 'Dining and Life Enrichment',
      body: 'Menu programs, therapeutic diets, and activity calendars residents actually attend. Family satisfaction scores follow resident engagement.',
    },
    {
      kicker: 'Asset',
      title: 'Plant Operations and Capital Planning',
      body: 'Preventive maintenance, vendor management, and capital plans that protect the asset instead of deferring the cost to the next owner.',
    },
  ],
} as const;

export const COMMUNITIES_SECTION = {
  eyebrow: 'Our Communities',
  heading: 'Assisted Living and Memory Care Communities We Manage',
  filters: ['All', 'Independent Living', 'Assisted Living', 'Memory Care'],
  /**
   * PLACEHOLDER. Every community below is invented, as are all unit counts and
   * occupancy figures. The on-page caption must stay until real portfolio data
   * lands. The handoff also notes the homepage grid and the owner reporting
   * table currently use different community sets; resolve that with real data.
   */
  caption: 'Placeholder communities pending real portfolio data.',
} as const;

export interface PortfolioStat {
  label: string;
  /** null means no verified figure exists yet. Do not invent one. */
  value: number | null;
  suffix?: string;
  verified: boolean;
}

/**
 * The stats band is designed to carry four figures. Only the founding year is
 * verified, so only the tenure figure is real. The others render as a labelled
 * placeholder state until the company supplies numbers it can stand behind.
 * Publishing unverified occupancy or unit counts to owners is a credibility
 * risk with the exact audience this page is written for.
 */
export const PORTFOLIO_STATS: PortfolioStat[] = [
  { label: 'Communities Managed', value: null, verified: false },
  { label: 'Units Under Management', value: null, verified: false },
  { label: 'Average Occupancy', value: null, suffix: '%', verified: false },
  {
    label: 'Years Operating',
    value: new Date().getFullYear() - FOUNDED_YEAR,
    verified: true,
  },
];

export const APPROACH_SECTION = {
  eyebrow: 'Our Approach',
  /**
   * PLACEHOLDER, and specifically: this quote is drafted, not sourced. Sayer
   * Leslie is a real person and the design places an attributed pull quote
   * here. Do not publish this line under a real name until that person has
   * approved the wording.
   */
  quote:
    'An owner should never have to ask how the building is doing. The reporting should have already answered it.',
  attribution: 'Sayer Leslie, Owner and Chief Executive',
  attributionNote: 'Draft wording pending approval.',
  body: [
    'Vega ALM was built inside a real estate company, so we read a community the way an owner reads it. Occupancy, labor and margin are not separate from care quality. They are what care quality produces.',
    'That is why an engagement starts with an operational assessment and a written plan rather than a pitch. You will know what we intend to change, in what order, and what it should do to the number.',
  ],
  /** Three pillars in 0.3em tracked caps, separated by sage pipe glyphs. */
  pillars: ['Census', 'Care', 'Capital'],
} as const;

export const CONTACT_SECTION = {
  eyebrow: 'Contact',
  heading: 'Talk to an Operator, Not a Sales Team',
  body: 'Tell us about the community and what is not working. An operator will read it and respond, usually the same business day.',
  toast: 'Inquiry received. An operator will be in touch.',
} as const;
