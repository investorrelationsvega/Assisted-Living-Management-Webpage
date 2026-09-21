/**
 * Careers page copy.
 *
 * The argument is staffing first, because staffing is what backs every promise
 * made to owners on the other pages. This page also carries the consumer facing
 * job search terms, which are the highest volume terms on the whole site.
 *
 * House style: no em dashes.
 */

export const CAREERS_HERO = {
  eyebrow: 'Careers',
  /** Brand line from the design handoff. */
  headline: 'The staffing plan is the care plan.',
  body: 'Vega ALM hires caregivers, med techs, nurses and community leaders across the assisted living and memory care communities we manage. Consistent assignment, published ratios, and a path that does not dead end.',
  primaryCta: { label: 'See Open Roles', href: '#roles' },
} as const;

export interface CareersValueCard {
  kicker: string;
  title: string;
  body: string;
}

export const WHY_WORK_HERE = {
  eyebrow: 'Why Vega ALM',
  heading: 'What We Put in Writing',
  cards: <CareersValueCard[]>[
    {
      kicker: 'Ratios',
      title: 'Published Staffing Ratios',
      body: 'Every community posts its ratios where staff and families can see them. If a shift is short, that is a scheduling failure to fix, not a number to quietly absorb.',
    },
    {
      kicker: 'Advancement',
      title: 'Promotion From Within',
      body: 'Med techs, care coordinators and executive directors are hired from inside the buildings first. The people who know the residents are the people we would rather promote.',
    },
    {
      kicker: 'Training',
      title: 'Tuition and Licensure Paid',
      body: 'CNA certification, med tech training and nursing coursework are paid for. If you want to move from caregiver to LPN or RN, the path is funded.',
    },
  ],
} as const;

export const CONSISTENT_ASSIGNMENT = {
  eyebrow: 'How We Staff',
  heading: 'Consistent Assignment, Not a Rotating Roster',
  photoSlotLabel: 'Caregiver With Resident',
  body: [
    'Caregivers work with the same residents shift after shift. It is a harder schedule to build and it is the single largest driver of care quality we have measured, because the person who sees someone every day is the person who notices the day something changes.',
    'It is also why our roles are written as full positions with real hours rather than as float pools. Continuity for residents requires continuity for staff, and that starts with a schedule someone can build a life around.',
  ],
} as const;

export interface JobPosting {
  title: string;
  location: string;
  employmentType: string;
  summary: string;
  requirements: string[];
}

/**
 * PLACEHOLDER postings. All four are invented, including locations. Replace
 * with real openings before launch, and keep the on-page caption until then.
 *
 * Worth noting for whoever wires this up: job postings are the one part of
 * this site with a real structured data opportunity. Adding JobPosting schema
 * makes these eligible for Google Jobs, which is a far larger traffic source
 * than anything the owner facing pages can rank for.
 */
export const OPEN_ROLES = {
  eyebrow: 'Open Roles',
  heading: 'Where We Are Hiring',
  caption: 'Placeholder postings pending real openings.',
  roles: <JobPosting[]>[
    {
      title: 'Caregiver',
      location: 'Multiple Communities',
      employmentType: 'Full Time',
      summary:
        'Direct care for a consistent group of residents: personal care, mobility support, and the daily observation that catches a change before it becomes an incident.',
      requirements: [
        'No prior experience required, training provided',
        'CNA certification paid for after ninety days',
        'Reliable attendance and a clean background check',
        'Comfort with physical work across a full shift',
      ],
    },
    {
      title: 'Medication Technician',
      location: 'Multiple Communities',
      employmentType: 'Full Time',
      summary:
        'Medication administration and documentation for an assigned neighborhood, working alongside the nurse on duty and the care team.',
      requirements: [
        'State med tech certification, or CNA with willingness to certify',
        'Six months of senior living or clinical experience',
        'Accurate documentation habits',
        'Available for rotating weekend coverage',
      ],
    },
    {
      title: 'Licensed Practical Nurse',
      location: 'Multiple Communities',
      employmentType: 'Full Time',
      summary:
        'Care plan oversight, assessments, family communication, and clinical supervision of caregivers and med techs on shift.',
      requirements: [
        'Active LPN license in the state of the community',
        'One year of assisted living or memory care experience preferred',
        'Assessment and care planning experience',
        'Supervisory comfort with a small team',
      ],
    },
    {
      title: 'Executive Director',
      location: 'Multiple Communities',
      employmentType: 'Full Time',
      summary:
        'Full operational accountability for one community: census, staffing, survey readiness, budget, and the monthly variance narrative that goes to the owner.',
      requirements: [
        'State administrator license, or eligibility to obtain it',
        'Three or more years leading a senior living community',
        'Demonstrated census growth and budget accountability',
        'Track record of retaining a care team',
      ],
    },
  ],
} as const;

export const APPLICATION_FORM = {
  eyebrow: 'Apply',
  heading: 'Tell Us About Your Experience',
  body: 'A person reads every application. If your experience is close but not exact, apply anyway and say so.',
  licensureOptions: ['CNA', 'Med tech', 'LPN', 'RN', 'Administrator', 'None yet'],
  toast: 'Application received. A person reads every one.',
} as const;
