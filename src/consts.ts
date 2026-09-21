/**
 * Site-wide constants.
 *
 * PLACEHOLDER VALUES: phone, email, address, license number and hours are
 * stand-ins so the pages render end to end. Replace every value marked
 * `PLACEHOLDER` with the real details before this site goes live — several of
 * them (license number, address) are legally significant.
 */

export const SITE = {
  name: 'Vega Assisted Living',
  shortName: 'Vega ALM',
  tagline: 'Assisted living, thoughtfully managed.',
  description:
    'Vega Assisted Living provides personalized assisted living and memory care in a small, well-staffed community — with transparent pricing and care plans that adapt as needs change.',
} as const;

export const CONTACT = {
  phone: '(555) 014-2200', // PLACEHOLDER
  phoneHref: 'tel:+15550142200', // PLACEHOLDER
  email: 'hello@example.com', // PLACEHOLDER
  addressLines: ['1200 Meadowbrook Lane', 'Suite 100', 'Your City, ST 00000'], // PLACEHOLDER
  licenseNumber: 'PENDING', // PLACEHOLDER — state assisted living facility license number
  hours: [
    { days: 'Monday – Friday', time: '8:00 am – 6:00 pm' },
    { days: 'Saturday & Sunday', time: '9:00 am – 4:00 pm' },
  ],
  tourNote: 'Tours are available daily, including evenings by appointment.',
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: 'Levels of Care', href: '/levels-of-care/' },
  { label: 'Life at Vega', href: '/life-at-vega/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

/**
 * Where the tour-request form POSTs.
 *
 * PLACEHOLDER: this site is fully static, so the form needs an external
 * handler (Formspree, Netlify Forms, a serverless function, or the CRM the
 * community already uses). Until a real endpoint is set, the form is rendered
 * in a disabled state rather than silently dropping submissions.
 *
 * Whatever is chosen must be covered by a business associate agreement if it
 * will ever receive health information — see the note on the contact page.
 */
export const FORM_ENDPOINT = '' as string;
