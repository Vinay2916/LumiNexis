'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { AUTHORITY_STATS } from '@/lib/constants'

export default function Act2Strategy() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const pillars = [
    { icon: '◈', label: 'UX Research',           desc: 'Audience mapping, competitor analysis, conversion paths' },
    { icon: '⬡', label: 'Architecture Planning',  desc: 'Component hierarchy, data flow, routing strategy' },
    { icon: '◎', label: 'Performance Goals',      desc: '90+ Lighthouse, Core Web Vitals targets set before design' },
  ]

  return (
    <section id="act2" className="section-container min-h-screen py-24">
      <div ref={ref} className="max-w-5xl w-full mx-auto">

        {/* Authority stats strip */}
        <div data-reveal className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 p-6 glass-card rounded-sm">
          {AUTHORITY_STATS.map((s, i) => (
            <div key={i} className="text-center py-2">
              <p className="text-3xl md:text-4xl font-bold gradient-text font-mono mb-1">{s.value}</p>
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-muted)' }}>{s.label}</p>
            </div>
          ))}
        </div>

        <p data-reveal className="act-label">Act 02 — Strategy</p>

        <h2 data-reveal className="headline-xl mb-4">
          Structure is{' '}
          <span className="gradient-text">Strategy.</span>
        </h2>

        <p data-reveal className="body-text max-w-xl mb-16">
          We don't design pages.<br />
          We design <strong className="text-fg">systems.</strong> Every engagement starts with defined goals,
          measurable targets, and a structured plan — before a single component is designed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} data-reveal className="glass-card p-6 rounded-sm group hover:border-accent transition-all duration-300"
              style={{ borderColor: 'var(--border)' }}>
              <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform" style={{ color: 'var(--accent)' }}>{p.icon}</span>
              <h3 className="font-semibold text-sm tracking-wide mb-2 uppercase font-mono" style={{ color: 'var(--accent)' }}>{p.label}</h3>
              <p className="body-text text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-12 glass-card p-6 rounded-sm border-l-2" style={{ borderLeftColor: 'var(--accent)' }}>
          <p className="font-mono text-xs tracking-widest mb-2 text-accent">OUR POSITIONING</p>
          <p className="body-text">
            Luminexis operates as a <strong className="text-fg">Design &amp; Development Studio</strong> — not a freelancer, not a template shop.
            We serve clients across India and globally, delivering structured, scalable digital platforms engineered for performance and conversion.
          </p>
        </div>
      </div>
    </section>
  )
}
