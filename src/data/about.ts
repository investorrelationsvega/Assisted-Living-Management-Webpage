/**
 * About and Leadership page copy.
 *
 * Purpose is to establish operating history and state the Vega to Vega ALM
 * relationship explicitly, because both owners and families ask about it.
 *
 * House style: no em dashes.
 */

import { FOUNDED_YEAR } from './home';

export const ABOUT_HERO = {
  eyebrow: 'About',
  /** Brand line from the design handoff. */
  headline: 'A real estate operator that learned to run care.',
  body: `Vega ALM is the senior housing operating company of Vega. We have been operating since ${FOUNDED_YEAR}, and we manage assisted living, memory care and independent living communities on behalf of the owners who hold the real estate.`,
} as const;

export interface TimelineEntry {
  year: string;
  title: string;
  body: string;
}

/**
 * PLACEHOLDER. Only the founding year is verified. The three later milestones
 * describe a plausible arc for an operator of this shape and must be replaced
 * with the company's actual history before launch. Do not publish invented
 * milestones on a page whose entire job is establishing credibility.
 */
export const TIMELINE = {
  eyebrow: 'History',
  heading: 'How the Operating Practice Came Together',
  caption: 'Placeholder milestones pending the company history.',
  entries: <TimelineEntry[]>[
    {
      year: '2012',
      title: 'Founded',
      body: 'Vega begins acquiring and operating real estate, with senior housing among the earliest asset types in the portfolio.',
    },
    {
      year: '2016',
      title: 'Care Operations In House',
      body: 'Third party operators are brought in house after repeated gaps between what reporting claimed and what the buildings showed.',
    },
    {
      year: '2019',
      title: 'Management Practice Formalized',
      body: 'The operating team is organized as a standalone management company so it can take on communities Vega does not own.',
    },
    {
      year: '2024',
      title: 'Vega ALM Today',
      body: 'A dedicated operating company managing communities across multiple care levels for owners, lenders and partners.',
    },
  ],
} as const;

export const VEGA_RELATIONSHIP = {
  eyebrow: 'The Vega Relationship',
  heading: 'How Vega and Vega ALM Fit Together',
  body: [
    'Vega is a real estate operator. Vega ALM is its senior housing operating company. Vega owns and underwrites assets; Vega ALM runs the care and the day to day operations inside them.',
    'That structure is the reason the reporting looks the way it does. Vega ALM was built to answer to an owner, because for years the only owner it answered to was Vega, and the standard was set there first.',
    'Vega ALM now manages communities Vega does not own. The standard did not change. An owner outside the Vega portfolio receives the same package, on the same cadence, with the same person accountable for the variance.',
  ],
} as const;

export interface Leader {
  name: string;
  role: string;
  /** false means the name is a placeholder awaiting a real appointment. */
  confirmed: boolean;
}

export const LEADERSHIP = {
  eyebrow: 'Leadership',
  heading: 'The People Accountable for the Result',
  caption: 'Awaiting names and portraits for three roles.',
  people: <Leader[]>[
    { name: 'Sayer Leslie', role: 'Owner and Chief Executive', confirmed: true },
    { name: 'Name TK', role: 'Director of Operations', confirmed: false },
    { name: 'Name TK', role: 'Director of Clinical Services', confirmed: false },
    { name: 'Name TK', role: 'Director of Finance', confirmed: false },
  ],
} as const;

export interface ValueCard {
  kicker: string;
  title: string;
  body: string;
}

export const VALUES = {
  eyebrow: 'What We Hold To',
  heading: 'Three Standards, Plainly Stated',
  cards: <ValueCard[]>[
    {
      kicker: 'Candor',
      title: 'The Number Is the Number',
      body: 'Bad months get reported the same way good ones do, with the same detail and the same deadline. An owner who is surprised in month nine was failed in month three.',
    },
    {
      kicker: 'Care',
      title: 'Residents Are Not a Line Item',
      body: 'Every operating decision is tested against what it does to the people living in the building. Margin earned by thinning care is borrowed, and it comes due at survey.',
    },
    {
      kicker: 'Continuity',
      title: 'We Keep the People We Train',
      body: 'Turnover is the most expensive thing that happens in a senior living community. We staff ahead of need and promote from within so the caregivers residents know stay.',
    },
  ],
  cta: { label: 'Work With Us', href: '/owners/#proposal' },
} as const;
