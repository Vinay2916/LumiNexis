export const AUTHORITY_STATS = [
  { value: '20+',    label: 'Projects Delivered' },
  { value: '8+',     label: 'Industries Served' },
  { value: '3+',     label: 'Years Engineering' },
  { value: '100%',   label: 'Client Retention' },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Business audit, audience mapping, competitor analysis, and technical constraint identification. We define measurable goals before anything else.',
    icon: '◈',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Information architecture, conversion path design, performance targets, and component system planning — all decided before design begins.',
    icon: '⬡',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Wireframes, UI system, responsive logic, and prototype iteration. Every layout decision maps back to a defined conversion or clarity objective.',
    icon: '◎',
  },
  {
    number: '04',
    title: 'Engineering',
    description: 'Frontend architecture, backend systems, API design, database schema, and CI/CD pipeline — built for scale from day one.',
    icon: '⬢',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Performance validation, accessibility audit, SEO-ready architecture, and deployment. 90+ Lighthouse scores are a delivery requirement, not a bonus.',
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
    quote: 'Luminexis didn\'t just build us a website — they engineered a system. Our online bookings increased by 340% within the first two months. The performance and structure of the platform exceeded every expectation.',
    author: 'Hari Prasad',
    role: 'Owner',
    company: 'Sri Hari Towing Services',
    project: 'Full-Stack Web Platform',
  },
  {
    id: 't2',
    quote: 'Their process is unlike any agency I\'ve worked with. They mapped our architecture before the first design was sketched. The result is a platform that actually scales with our business.',
    author: 'Client',
    role: 'Founder',
    company: 'E-Commerce Platform',
    project: 'Digital Product Design',
  },
  {
    id: 't3',
    quote: 'The attention to engineering detail is remarkable. Sub-second load times, fluid animations, zero downtime — and they delivered on time. This is what premium digital work looks like.',
    author: 'Client',
    role: 'CTO',
    company: 'SaaS Startup',
    project: 'Frontend Engineering',
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

export const SERVICES = [
  {
    id: 'digital-product',
    icon: '◈',
    title: 'Digital Product Design',
    description: 'UX research, information architecture, and interface systems built around conversion logic.',
    tags: ['UX Research', 'UI Systems', 'Conversion Design'],
  },
  {
    id: 'frontend',
    icon: '⬡',
    title: 'Frontend Engineering',
    description: 'Component architecture, animation systems, and performance-first rendering pipelines.',
    tags: ['React', 'Next.js', 'GSAP', 'Three.js'],
  },
  {
    id: 'backend',
    icon: '◎',
    title: 'Backend Development',
    description: 'Scalable API design, database architecture, and serverless infrastructure.',
    tags: ['Node.js', 'PostgreSQL', 'REST / GraphQL'],
  },
  {
    id: 'platforms',
    icon: '⬢',
    title: 'Scalable Web Platforms',
    description: 'End-to-end platform engineering from architecture to deployment pipelines.',
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
    category: 'Full-Stack Web Platform',
    industry: 'Automotive / Roadside Assistance',
    client: 'Sri Hari Towing Services',
    duration: '6 Weeks',
    services: ['UX Design', 'Frontend Engineering', 'Backend Development', 'Stripe Integration'],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    overview:
      'A full-stack booking and fleet management platform for a regional towing company — converting an outdated static site into a revenue-generating digital engine. Serving customers across multiple districts with real-time dispatch and a self-service booking flow.',
    challenge:
      'The business had no online presence capable of generating revenue. Page loads exceeded 8 seconds, there was no booking mechanism, zero mobile optimization, and manual dispatch coordination consumed 4+ hours of staff time daily. Competitors were capturing bookings through digital channels while this business relied entirely on word-of-mouth.',
    approach:
      'Began with a full UX audit and competitor analysis. Defined performance targets (sub-second LCP) and conversion architecture before any design work began. Mapped the complete customer journey from urgency trigger to completed booking. Planned a modular component system to allow future service expansion without rewrites.',
    designExecution:
      'Mobile-first wireframes built around a 3-step booking flow. High-contrast accessibility system (WCAG AA). Trust signals — certifications, response times, and testimonials — strategically placed at decision points. UI system built on a design token foundation for consistency across 18 components.',
    devExecution:
      'Next.js 14 App Router with React Server Components for maximum performance. Server Actions for real-time booking without an API layer. PostgreSQL with Prisma for type-safe data access. Stripe integration for deposit payments. Automated SMS confirmations via Twilio. GitHub Actions CI/CD to Vercel.',
    results: [
      '340% increase in online bookings within 60 days',
      'Page load reduced from 8.2s → 0.9s LCP',
      'Mobile conversion rate lifted 280%',
      'Dispatch coordination time reduced by 73%',
      '96 Lighthouse performance score',
      'Zero downtime since launch',
    ],
    testimonial: {
      quote: 'Luminexis didn\'t just build us a website — they engineered a system. Our online bookings increased by 340% within the first two months.',
      author: 'Hari Prasad',
      role: 'Owner, Sri Hari Towing Services',
    },
    year: '2025',
    status: 'Live',
  },
]
