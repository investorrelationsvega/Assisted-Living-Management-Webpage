/**
 * Page content, kept out of the templates so it can be edited without touching
 * markup. Anything a family would rely on to make a decision — pricing, staff
 * ratios, care specifics — is marked PLACEHOLDER and must be confirmed against
 * the community's actual operations before launch.
 */

export interface CareLevel {
  slug: string;
  name: string;
  summary: string;
  bestFor: string;
  includes: string[];
}

export const CARE_LEVELS: CareLevel[] = [
  {
    slug: 'independent-plus',
    name: 'Independent Plus',
    summary:
      'For residents who manage their own day but want meals, housekeeping and a nurse on call to stop being their responsibility.',
    bestFor: 'Living alone has become more work than it is worth.',
    includes: [
      'Private apartment with kitchenette',
      'Three chef-prepared meals daily',
      'Weekly housekeeping and linen service',
      'Scheduled transportation to appointments',
      '24-hour emergency call system',
    ],
  },
  {
    slug: 'assisted-living',
    name: 'Assisted Living',
    summary:
      'Hands-on help with the parts of the day that have gotten harder, written into a care plan we revisit as things change.',
    bestFor: 'Bathing, dressing or medications now need a steady hand.',
    includes: [
      'Personal care assistance on your schedule',
      'Medication management by licensed staff',
      'Mobility and transfer support',
      'Care plan reviewed quarterly with family',
      'Coordination with your physicians',
    ],
  },
  {
    slug: 'memory-care',
    name: 'Memory Care',
    summary:
      'A secured neighborhood with a calmer rhythm, purpose-built routines and staff trained specifically in dementia care.',
    bestFor: 'Alzheimer’s or another dementia makes safety a daily concern.',
    includes: [
      'Secured, easy-to-navigate neighborhood',
      'Staff trained in dementia-specific care',
      'Structured daily routine and sensory programming',
      'Behavior and wandering support',
      'Family education and support group',
    ],
  },
  {
    slug: 'respite',
    name: 'Short-Term Respite',
    summary:
      'A furnished stay from a few days to a few weeks — for recovery after a hospital visit, or when a family caregiver needs a break.',
    bestFor: 'You need care covered for a defined stretch of time.',
    includes: [
      'Fully furnished private suite',
      'Same care services as a permanent resident',
      'Meals, activities and housekeeping included',
      'No long-term commitment',
      'A way to try the community before deciding',
    ],
  },
];

export interface Feature {
  title: string;
  body: string;
}

export const DIFFERENTIATORS: Feature[] = [
  {
    title: 'Small by design',
    body: 'A limited number of residences means staff know every resident by name, not by room number — and notice the day something changes.',
  },
  {
    title: 'Care that adjusts',
    body: 'Needs rarely hold still. Care plans are reviewed on a set schedule and whenever something shifts, so support arrives before a crisis does.',
  },
  {
    title: 'Pricing you can read',
    body: 'One monthly rate, a clear care-level fee, and a written list of what is included. No à la carte surprises at the end of the month.',
  },
  {
    title: 'Families in the loop',
    body: 'Regular care conferences, a direct line to the care team, and updates that do not wait for you to call and ask.',
  },
];

export const AMENITIES: { category: string; items: string[] }[] = [
  {
    category: 'Residences',
    items: [
      'Private studio, one-bedroom and companion suites',
      'Kitchenette and private bath in every apartment',
      'Bring your own furniture and pets welcome',
      'Individual climate control',
      'Emergency call system in every room',
    ],
  },
  {
    category: 'Dining',
    items: [
      'Three meals daily in a restaurant-style dining room',
      'Menus built around resident requests',
      'Therapeutic and texture-modified diets accommodated',
      'All-day snacks and beverages',
      'Private dining room for family occasions',
    ],
  },
  {
    category: 'Community',
    items: [
      'Landscaped courtyard and walking paths',
      'Activity and craft studio',
      'Library and quiet lounge',
      'On-site salon and barber',
      'Wellness and therapy space',
    ],
  },
  {
    category: 'Daily life',
    items: [
      'Daily activity calendar with outings',
      'Fitness and balance classes',
      'Scheduled transportation',
      'Housekeeping, laundry and maintenance',
      'Faith services and visiting clergy',
    ],
  },
];

export interface PricingTier {
  name: string;
  rate: string;
  cadence: string;
  note: string;
  includes: string[];
  featured?: boolean;
}

/** PLACEHOLDER: every rate below is illustrative and must be replaced with the
 *  community's published rates before launch. */
export const PRICING: PricingTier[] = [
  {
    name: 'Independent Plus',
    rate: '$3,400',
    cadence: 'per month',
    note: 'PLACEHOLDER rate',
    includes: [
      'Private apartment',
      'All meals and housekeeping',
      'Activities and transportation',
      'Emergency call system',
    ],
  },
  {
    name: 'Assisted Living',
    rate: '$4,600',
    cadence: 'per month',
    note: 'PLACEHOLDER rate — plus care level fee',
    featured: true,
    includes: [
      'Everything in Independent Plus',
      'Personal care assistance',
      'Medication management',
      'Quarterly care conferences',
    ],
  },
  {
    name: 'Memory Care',
    rate: '$5,900',
    cadence: 'per month',
    note: 'PLACEHOLDER rate — all-inclusive',
    includes: [
      'Secured neighborhood residence',
      'Dementia-trained care team',
      'Structured daily programming',
      'Family support group',
    ],
  },
];

export const PRICING_INCLUDED = [
  'Rent and utilities, including Wi-Fi and cable',
  'Three meals a day plus snacks',
  'Weekly housekeeping, linens and laundry',
  'Daily activities and scheduled transportation',
  '24-hour on-site staffing and emergency response',
];

export const PRICING_EXTRA = [
  'Care level fee, set by assessment and reviewed quarterly',
  'Second occupant fee for shared apartments',
  'Salon, barber and guest meals',
  'Incontinence supplies and specialty items',
  'One-time community fee at move-in',
];

export interface Step {
  title: string;
  body: string;
}

export const MOVE_IN_STEPS: Step[] = [
  {
    title: 'Talk it through',
    body: 'A call or visit with no pressure. We ask what a normal day looks like now and where it has gotten hard.',
  },
  {
    title: 'Tour the community',
    body: 'Walk the building, meet the care team, stay for a meal. Bring whoever else is part of the decision.',
  },
  {
    title: 'Nurse assessment',
    body: 'A licensed nurse meets your family member to determine the right level of care and what the monthly cost will actually be.',
  },
  {
    title: 'Move in',
    body: 'We help with the logistics, set up the apartment and check in daily through the first weeks of settling in.',
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: 'How is the monthly cost determined?',
    a: 'Two parts: the apartment rate, which depends on the residence you choose, and a care fee based on a nurse assessment of how much hands-on support is needed. Both are written into the residency agreement before move-in.',
  },
  {
    q: 'What happens if care needs increase?',
    a: 'The care plan is reassessed and adjusted. Most residents can stay in the same apartment as needs grow; if a move to memory care makes sense, we walk the family through it well before it becomes urgent.',
  },
  {
    q: 'Do you accept long-term care insurance or Medicaid?',
    a: 'PLACEHOLDER — confirm which payment sources this community accepts, including long-term care insurance, VA Aid and Attendance, and any state Medicaid waiver participation.',
  },
  {
    q: 'Can residents bring their own furniture and pets?',
    a: 'Yes. Apartments are unfurnished so residents bring their own things, and small pets are welcome with a pet agreement.',
  },
  {
    q: 'What are visiting hours?',
    a: 'Family and friends are welcome any time of day. We only ask that overnight visits be arranged with the care team in advance.',
  },
  {
    q: 'Is there a waiting list?',
    a: 'Availability changes month to month. Call for current openings — a deposit holds an apartment once one is available.',
  },
];
