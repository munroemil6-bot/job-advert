export const services = [
  {
    slug: 'graphic-design',
    index: '01',
    name: 'Graphic Design',
    lead: 'Justin',
    phone: '+254 757 131197',
    whatsapp: '+254757131197',
    email: 'munroemil6@gmail.com',
    tagline: 'Brand identities, presentation pieces, and print-ready visuals that feel premium from the first glance.',
    summary:
      'Justin shapes distinct visual systems for founders, boutique businesses, and service brands who want their work to feel established, memorable, and beautifully considered. Each concept begins by hand and is refined to a clean final identity you can actually use.',
    heroNote: 'Concepts sketched by hand, refined for real-world use.',
    included: [
      'Logo concepts with primary, secondary and icon variants',
      'Colour palette and typography system for consistent use',
      'Social graphics, business cards, and print assets',
      'Delivery files in AI, SVG, PDF and PNG',
      'A polished one-page brand sheet for your team',
    ],
    process: [
      { title: 'Brief & inspiration', body: 'We align on audience, positioning, and the visual mood you want your brand to carry.' },
      { title: 'Sketch directions', body: 'A few thoughtful concepts are explored quickly before the strongest direction is refined.' },
      { title: 'Detail & polish', body: 'We tighten the selected concept, build the toolkit, and finalise brand assets.' },
      { title: 'Delivery', body: 'You receive the final files, usage guidance, and a clean handoff package.' },
    ],
    pricing: [
      { tier: 'Logo refresh', price: 'KSh 15,000', unit: 'flat', detail: 'A clean logo concept with basic revisions and final files.' },
      { tier: 'Brand identity', price: 'KSh 45,000', unit: 'flat', detail: 'Logo, colour palette, typography, and a simple brand guide.' },
      { tier: 'Social & promo kit', price: 'KSh 12,000', unit: 'flat', detail: 'Posters, social creatives, and branded marketing assets for campaigns.' },
    ],
    faqs: [
      { q: 'How many revisions are included?', a: 'Two focused rounds on the chosen direction. Additional revisions are billed hourly.' },
      { q: 'Do I own the final files?', a: 'Yes — the final artwork transfers to you after payment and final approval.' },
      { q: 'How long does it take?', a: 'A single mark usually takes around a week, while a full identity typically takes 2–3 weeks.' },
    ],
  },
  {
    slug: 'web-development',
    index: '02',
    name: 'Web Development',
    lead: 'Myles',
    tagline: 'Responsive websites and custom digital experiences built to look sharp and work smoothly.',
    summary:
      'Myles builds clean, fast, conversion-focused websites for businesses that want a digital presence that feels premium without being overbuilt. The stack is tuned for clarity, speed, and flexibility — whether it is a landing page or a small business site.',
    heroNote: 'Built mobile-first and checked across real devices.',
    included: [
      'Custom-coded, responsive website built from scratch',
      'Up to 6 pages or a compact custom web app',
      'Contact forms, SEO basics, analytics, and launch support',
      'Deployment to your preferred hosting setup',
      'Two weeks of post-launch refinement included',
    ],
    process: [
      { title: 'Discovery & map', body: 'We define your goals, the pages you need, and what success will look like.' },
      { title: 'Structure & wireframe', body: 'The site flow is mapped so content and navigation have a clear rhythm.' },
      { title: 'Build & styling', body: 'The design is translated into a smooth, responsive front-end experience.' },
      { title: 'Launch', body: 'We test, deploy, and leave you with the site, files, and instructions to keep it moving.' },
    ],
    pricing: [
      { tier: 'Landing page', price: 'KSh 35,000', unit: 'flat', detail: 'A polished single-page website with contact form and basic launch setup.' },
      { tier: 'Business website', price: 'KSh 95,000', unit: 'flat', detail: 'Up to 5 pages, responsive layout, and custom styling for a business.' },
      { tier: 'Maintenance', price: 'KSh 4,500', unit: '/ hr', detail: 'For updates, fixing issues, or adding content after launch.' },
    ],
    faqs: [
      { q: 'Do you help with copy and messaging?', a: 'Yes — we can work with your copy or help shape a tighter version to suit the site.' },
      { q: 'Can you adapt an existing design?', a: 'Absolutely. If you have a mockup, moodboard, or references, we can build to match.' },
      { q: 'What about hosting?', a: 'We can deploy to your chosen host or recommend a reliable setup for your needs.' },
    ],
  },
  {
    slug: 'branding-identity',
    index: '03',
    name: 'Web Creation',
    lead: 'Justin + Myles',
    tagline: 'A complete design and web package that keeps your brand and digital presence aligned.',
    summary:
      'The combined package brings the identity and the site together under one thoughtful brief. You get a stronger visual presence, a clearer digital customer journey, and a more cohesive brand from the first impression to the final click.',
    heroNote: 'One brief, one timeline, one cohesive package.',
    included: [
      'Everything in the identity package',
      'Everything in the website package',
      'Shared timeline for design and build',
      'A consistent system across print, web and social',
      'A single handoff with brand assets and live site',
    ],
    process: [
      { title: 'Joint brief', body: 'We define your brand voice, goals and what your site needs to do.' },
      { title: 'Identity first', body: 'The brand is shaped and approved before the site moves into build.' },
      { title: 'Build from the system', body: 'The website is designed directly around the approved identity and messaging.' },
      { title: 'Launch together', body: 'The final brand pack and the live website are delivered together.' },
    ],
    pricing: [
      { tier: 'Launch bundle', price: 'KSh 120,000', unit: 'flat', detail: 'Brand basics + a simple, polished website for launch.' },
      { tier: 'Growth bundle', price: 'KSh 180,000', unit: 'flat', detail: 'A complete identity and business website with custom pages and launch support.' },
      { tier: 'Custom scope', price: 'KSh 220,000+', unit: 'flat', detail: 'For larger brand systems, multi-page websites, and custom marketing needs.' },
    ],
    faqs: [
      { q: 'Is this better value than booking separately?', a: 'Yes — it saves time, keeps the work aligned, and avoids the usual handoff problems between design and build.' },
      { q: 'Can we start with the brand only?', a: 'Absolutely. We can begin with identity and then build the website shortly after.' },
      { q: 'Who is my main contact?', a: 'You will work directly with the same team throughout the project so communication stays simple.' },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
