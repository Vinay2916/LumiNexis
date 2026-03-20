'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { TECH_STACK } from '@/lib/constants'

export default function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="stack" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden" style={{ background: 'var(--bg-alt)' }}>
      {/* Dot grid bg */}
      <div className="absolute inset-0 dot-grid-bg opacity-40 pointer-events-none" aria-hidden />
      {/* Red ambient glow */}
      <div
        className="absolute top-0 inset-x-0 pointer-events-none"
        style={{ height: '35vh', background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(61,0,0,0.5) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div ref={ref} className="max-w-5xl w-full mx-auto relative">
        <p data-reveal className="act-label">Technology</p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2 data-reveal className="headline-lg">
            Built with the{' '}
            <span className="gradient-text">right stack.</span>
          </h2>
          <p data-reveal className="body-text max-w-sm text-sm">
            We choose technology based on project requirements — not personal preference.
            Every stack decision is justified by performance, scalability, or maintainability goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_STACK.map((layer, i) => (
            <div
              key={i}
              data-reveal
              className="glass-card p-6 rounded-2xl group"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
                <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
                  {layer.category}
                </p>
                <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
              </div>

              <div className="flex flex-wrap gap-2">
                {layer.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 font-mono text-xs rounded-full cursor-default transition-all duration-250"
                    style={{
                      background: 'rgba(10,0,0,0.9)',
                      border: '1px solid rgba(149,1,1,0.35)',
                      color: 'var(--fg)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(255,0,0,0.6)'
                      ;(e.currentTarget as HTMLSpanElement).style.color = 'var(--accent)'
                      ;(e.currentTarget as HTMLSpanElement).style.boxShadow = '0 0 12px rgba(255,0,0,0.15)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(149,1,1,0.35)'
                      ;(e.currentTarget as HTMLSpanElement).style.color = 'var(--fg)'
                      ;(e.currentTarget as HTMLSpanElement).style.boxShadow = 'none'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Serving notice */}
        <div data-reveal className="mt-10 text-center">
          <p className="body-text text-sm">
            Serving clients across <span className="text-fg font-medium">India and globally</span> — with the same structured process, regardless of project size.
          </p>
        </div>
      </div>
    </section>
  )
}
