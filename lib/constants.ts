export const AUTHORITY_STATS = [
  { value: '20+',    label: 'Projects Delivered' },
  { value: '8+',     label: 'Industries Served' },
  { value: '3+',     label: 'Years Engineering' },
  { value: '100%',   label: 'Client Retention' },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Clarity',
    description: 'Business objectives defined. Goals quantified. Ambiguity removed before work begins.',
    icon: '◈',
  },
  {
    number: '02',
    title: 'Structure',
    description: 'Information architecture, conversion paths, and system hierarchy established. Every decision documented.',
    icon: '⬡',
  },
  {
    number: '03',
    title: 'Interface',
    description: 'Visual logic built from structural decisions — not the other way around. Function drives form.',
    icon: '◎',
  },
  {
    number: '04',
    title: 'Engineering',
    description: 'Robust execution. Performance targets enforced. Every component built for longevity.',
    icon: '⬢',
  },
  {
    number: '05',
    title: 'Validation',
    description: 'Performance audited. Accessibility verified. Business outcomes measured against original objectives.',
    icon: '✦',
  },
]

export const TECH_STACK = [
  { category: 'Frontend',     items: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Three.js'] },
  { category: 'Backend',      items: ['Node.js', 'Express', 'tRPC', 'GraphQL', 'REST APIs', 'Prisma ORM'] },
  { category: 'Database',     items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'PlanetScale'] },
  { category: 'Infrastructure', items: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Sentry', 'Cloudflare'] },
]

export const TESTIMONIALS = [
  {
    id: 't1',
    quote: 'Luminexis didn\'t just build us a digital system — they engineered a platform. Our online engagements increased by 340% within the first two months. The performance and structure exceeded every expectation.',
    author: 'Hari Prasad',
    role: 'Owner',
    company: 'Sri Hari Towing Services',
    engagement: 'Full-Stack Digital System',
  },
  {
    id: 't2',
    quote: 'Their process is unlike any studio I\'ve worked with. They mapped our architecture before the first interface was sketched. The result is a platform that actually scales with the business.',
    author: 'Partner',
    role: 'Founder',
    company: 'E-Commerce Platform',
    engagement: 'Interface Structure',
  },
  {
    id: 't3',
    quote: 'The attention to engineering detail is remarkable. Sub-second load times, fluid interactions, zero downtime — delivered on schedule. This is what a structured digital system looks like.',
    author: 'Partner',
    role: 'CTO',
    company: 'SaaS Platform',
    engagement: 'Frontend Engineering Execution',
  },
]

export const ACTS = [
  {
    id: 'act1',
    number: '01',
    label: 'The Problem',
    theme: 'Chaos',
  },
  {
    id: 'act2',
    number: '02',
    label: 'Strategy',
    theme: 'Clarity',
  },
  {
    id: 'act3',
    number: '03',
    label: 'Design Execution',
    theme: 'Precision',
  },
  {
    id: 'act4',
    number: '04',
    label: 'Engineering',
    theme: 'Depth',
  },
  {
    id: 'act5',
    number: '05',
    label: 'Impact',
    theme: 'Authority',
  },
  {
    id: 'act6',
    number: '06',
    label: 'The Future',
    theme: 'Vision',
  },
]

export const LUMINEXIS_PRINCIPLES = [
  'Clarity precedes creativity.',
  'Structure precedes styling.',
  'Performance precedes animation.',
  'Longevity precedes trend.',
]

export const SERVICES = [
  {
    id: 'digital-product',
    icon: '◈',
    title: 'Interface Structure',
    description: 'UX research, information architecture, and interface systems built around conversion logic and commercial intent.',
    tags: ['UX Research', 'UI Systems', 'Conversion Design'],
  },
  {
    id: 'frontend',
    icon: '⬡',
    title: 'Frontend Engineering Execution',
    description: 'Component architecture, performance-first rendering pipelines, and interaction systems built for scale.',
    tags: ['React', 'Next.js', 'GSAP', 'Three.js'],
  },
  {
    id: 'backend',
    icon: '◎',
    title: 'Backend Engineering Execution',
    description: 'Scalable API design, database architecture, and infrastructure built to support long-term platform growth.',
    tags: ['Node.js', 'PostgreSQL', 'REST / GraphQL'],
  },
  {
    id: 'platforms',
    icon: '⬢',
    title: 'Full Digital Systems',
    description: 'End-to-end digital system engineering — from structural planning through deployment and performance validation.',
    tags: ['Full-Stack', 'DevOps', 'CI/CD'],
  },
]

export const METRICS = [
  { value: '90+', label: 'Lighthouse Score', suffix: '' },
  { value: '60',  label: 'FPS Target',        suffix: 'FPS' },
  { value: '<1.2',label: 'LCP',                suffix: 's' },
  { value: '100', label: 'Accessibility',      suffix: '%' },
]

export const PROJECTS = [
  {
    id: 'sri-hari-towing',
    title: 'Sri Hari Towing Services',
    category: 'Full-Stack Digital System',
    industry: 'Automotive / Roadside Assistance',
    partner: 'Sri Hari Towing Services',
    duration: '6 Weeks',
    services: ['Interface Structure', 'Frontend Engineering Execution', 'Backend Engineering Execution', 'Stripe Integration'],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    businessContext:
      'A regional towing and roadside assistance operator required a functional digital system capable of generating revenue through self-service bookings — replacing a static, non-converting web presence with a structured platform aligned to measurable business outcomes.',
    structuralChallenge:
      'The existing digital presence had no booking mechanism, exhibited 8+ second load times, lacked mobile optimisation, and required manual dispatch coordination consuming 4+ hours of staff time daily. Competitors were capturing demand through digital channels while this business had no corresponding infrastructure.',
    strategicDecisions: [
      'Defined performance targets (sub-second LCP) and conversion architecture before interface work began',
      'Mapped the complete customer journey from urgency trigger through completed booking — removing all friction points',
      'Built a modular component system to allow future service expansion without structural rewrites',
      'Chose server-side rendering with React Server Components to eliminate JavaScript overhead on critical booking paths',
      'Integrated automated SMS dispatch confirmations to remove manual coordination dependency',
    ],
    whatWeAvoided: [
      'Flashy visual treatments that add load weight without conversion contribution',
      'Generic template structures that do not accommodate real dispatch workflows',
      'Client-side data fetching on booking-critical pages — removes predictability under poor network conditions',
      'Tight coupling between UI layer and business logic — prevents future service additions',
    ],
    measurableImpact: [
      '340% increase in online engagements within 60 days of launch',
      'Page load reduced from 8.2s to 0.9s LCP',
      'Mobile conversion rate increased by 280%',
      'Dispatch coordination time reduced by 73% through automation',
      '96 Lighthouse performance score on launch',
      'Zero downtime since deployment',
    ],
    testimonial: {
      quote: 'Luminexis didn\'t just build us a digital system — they engineered a platform that actually works for the business. Engagements increased by 340% within the first two months.',
      author: 'Hari Prasad',
      role: 'Owner, Sri Hari Towing Services',
    },
    year: '2025',
    status: 'Live',
  },
]
