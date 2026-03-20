'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { METRICS } from '@/lib/constants'

export default function Act4Engineering() {
  const ref = useRef<HTMLDivElement>(null)
  const [counts, setCounts] = useState(METRICS.map(() => 0))

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
          onEnter: () => animateCounters(),
        },
      })

      tl.fromTo(
        ref.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
      )
    }, ref)

    function animateCounters() {
      METRICS.forEach((m, i) => {
        const raw = parseFloat(m.value.replace('<', ''))
        const obj = { val: 0 }
        gsap.to(obj, {
          val: raw,
          duration: 2,
          ease: 'power2.out',
          onUpdate() {
            setCounts((prev) => {
              const next = [...prev]
              next[i] = Math.round(obj.val * 10) / 10
              return next
            })
          },
        })
      })
    }

    return () => ctx.revert()
  }, [])

  const stack = [
    { layer: 'Rendering',    tech: 'Next.js 14 · React Server Components · Streaming' },
    { layer: 'Interactions', tech: 'GSAP 3 · React Three Fiber · Framer Motion' },
    { layer: 'API Layer',    tech: 'REST · GraphQL · Server Actions · tRPC' },
    { layer: 'Database',     tech: 'PostgreSQL · Prisma · Redis · Supabase' },
    { layer: 'DevOps',       tech: 'Vercel · Docker · GitHub Actions · Sentry' },
  ]

  return (
    <section id="act4" className="section-container min-h-screen py-24 relative overflow-hidden">
      {/* Red ambient bottom glow */}
      <div
        className="absolute bottom-0 inset-x-0 pointer-events-none"
        style={{ height: '40vh', background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(61,0,0,0.4) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div ref={ref} className="max-w-5xl w-full mx-auto relative z-10">
        <p data-reveal className="act-label">Act 04 — Engineering</p>

        <h2 data-reveal className="headline-xl mb-4">
          Engineered for{' '}
          <span className="gradient-text">Performance.</span>
        </h2>

        <p data-reveal className="body-text max-w-xl mb-16">
          Architecture decisions made before the first line of code.
          Measured outcomes. Zero compromise.
        </p>

        {/* Metric counters */}
        <div data-reveal className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-14 honor-card">
          {METRICS.map((m, i) => (
            <div
              key={i}
              className="metric-box rounded-none border-0 text-center cursor-default transition-all duration-300 hover:bg-[rgba(149,1,1,0.15)]"
              style={{ background: 'transparent', boxShadow: 'none' }}
            >
              <span className="text-3xl md:text-4xl font-bold gradient-text font-mono">
                {m.value.startsWith('<') ? '<' : ''}{counts[i]}{m.suffix}
              </span>
              <span className="body-text text-xs uppercase tracking-widest block mt-1">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Stack table */}
        <div data-reveal className="space-y-2">
          <p className="font-mono text-xs tracking-widest mb-4" style={{ color: 'var(--accent)' }}>TECHNOLOGY STACK</p>
          {stack.map((s, i) => (
            <div
              key={i}
              className="glass-card flex items-start md:items-center gap-4 px-5 py-4 rounded-2xl group"
            >
              <span className="font-mono text-xs w-28 flex-shrink-0 uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                {s.layer}
              </span>
              <div className="h-px flex-1 hidden md:block opacity-20" style={{ background: 'var(--accent)' }} />
              <span className="body-text text-sm">{s.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
