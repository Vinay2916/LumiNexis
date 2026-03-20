'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

const INTENT_PILLARS = [
  {
    icon: '◈',
    title: 'Revenue Alignment',
    desc: 'Every structural decision is mapped to a revenue path. Interface flows are engineered to convert, not decorate.',
  },
  {
    icon: '⬡',
    title: 'Decision Flow Control',
    desc: 'Visitor journeys are architected — not left to chance. Users arrive at decision points with context, not confusion.',
  },
  {
    icon: '◎',
    title: 'Trust Architecture',
    desc: 'Credibility signals positioned at structural decision points. Authority built through consistency, not claims.',
  },
  {
    icon: '⬢',
    title: 'Scalability Planning',
    desc: 'Systems built to grow. No rewrites when the business expands. Structural investment that compounds.',
  },
]

export default function BusinessIntentSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0,
          duration: 0.85,
          stagger: 0.13,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 68%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="intent" className="section-container py-24">
      <div ref={ref} className="max-w-5xl w-full mx-auto">

        <div data-reveal className="mb-14">
          <p className="font-mono text-xs tracking-[0.28em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
            Commercial Foundation
          </p>
          <h2 className="headline-xl mb-5">
            Built Around<br />
            <span className="gradient-text">Commercial Intent.</span>
          </h2>
          <p className="body-text text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            A digital system without commercial alignment is an expense without return.
            Every structural decision we make is anchored to measurable business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {INTENT_PILLARS.map((pillar, i) => (
            <div
              key={i}
              data-reveal
              className="glass-card p-7 rounded-sm group cursor-default relative overflow-hidden"
            >
              {/* Number badge */}
              <span
                className="absolute top-4 right-5 font-mono text-xs font-bold"
                style={{ color: 'rgba(149,1,1,0.5)' }}
              >
                0{i + 1}
              </span>

              <span
                className="text-2xl mb-5 block transition-all duration-300 group-hover:scale-110"
                style={{
                  color: 'var(--accent)',
                  filter: 'none',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.filter = 'drop-shadow(0 0 6px rgba(255,0,0,0.7))' }}
                onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.filter = 'none' }}
              >
                {pillar.icon}
              </span>
              <h3 className="font-semibold text-base mb-3" style={{ color: 'var(--fg)' }}>{pillar.title}</h3>
              <p className="body-text text-sm leading-relaxed">{pillar.desc}</p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
