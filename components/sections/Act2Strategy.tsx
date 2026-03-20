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
    <section id="act2" className="section-container min-h-screen py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60vw', height: '60vh',
            background: 'radial-gradient(ellipse, rgba(61,0,0,0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      <div ref={ref} className="max-w-5xl w-full mx-auto relative z-10">

        <p data-reveal className="act-label">Act 02 — Strategy</p>

        <h2 data-reveal className="headline-xl mb-4">
          Structure is{' '}
          <span className="gradient-text">Strategy.</span>
        </h2>

        <p data-reveal className="body-text max-w-xl mb-16">
          We don't design pages.<br />
          We design <strong style={{ color: 'var(--fg)' }}>systems.</strong> Every engagement starts with defined goals,
          measurable targets, and a structured plan — before a single component is designed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {pillars.map((p, i) => (
            <div
              key={i}
              data-reveal
              className="glass-card p-7 rounded-sm group cursor-default"
            >
              <span
                className="text-2xl mb-5 block transition-transform duration-300 group-hover:scale-110"
                style={{ color: 'var(--accent)' }}
              >
                {p.icon}
              </span>
              <h3
                className="font-semibold text-sm tracking-wide mb-3 uppercase font-mono"
                style={{ color: 'var(--accent)' }}
              >
                {p.label}
              </h3>
              <p className="body-text text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Positioning statement */}
        <div
          data-reveal
          className="glass-card p-6 rounded-sm"
          style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1.5rem' }}
        >
          <p className="font-mono text-xs tracking-widest mb-3" style={{ color: 'var(--accent)' }}>OUR POSITIONING</p>
          <p className="body-text text-sm leading-relaxed">
            Luminexis operates as a{' '}
            <strong style={{ color: 'var(--fg)' }}>Design &amp; Development Studio</strong> — not a freelancer, not a template shop.
            We serve clients across India and globally, delivering structured, scalable digital platforms engineered for performance and conversion.
          </p>
        </div>
      </div>
    </section>
  )
}
