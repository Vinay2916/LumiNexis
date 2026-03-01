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
    <section id="stack" className="py-24 px-6 md:px-12 lg:px-24 relative" style={{ background: 'var(--bg-alt)' }}>
      {/* Blueprint dot grid */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

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
              className="glass-card p-6 rounded-sm group"
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
                    className="px-3 py-1.5 font-mono text-xs rounded-sm transition-all duration-200 hover:border-accent cursor-default"
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--fg)',
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
