'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

const RISK_ITEMS = [
  'Structural inefficiencies that require full rebuilds to correct',
  'Performance debt that accumulates until it becomes a business problem',
  'Dependency on specific tools or agencies to maintain the system',
  'Digital assets that require replacements every 18–24 months',
]

export default function RiskReductionSection() {
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
    <section id="risk" className="section-container py-24">
      <div ref={ref} className="max-w-5xl w-full mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <div>
            <div data-reveal className="mb-10">
              <p className="font-mono text-xs tracking-[0.28em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
                Structural Integrity
              </p>
              <h2 className="headline-xl mb-5">
                Designed to Reduce<br />
                <span className="gradient-text">Future Risk.</span>
              </h2>
              <p className="body-text text-base leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                Digital systems should not require rebuilding every year.
                Poor structural decisions made during initial build become compounding liabilities.
                We eliminate those decisions at the foundation.
              </p>
            </div>

            <div data-reveal className="pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
              <p className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: 'var(--fg-muted)' }}>
                What We Systematically Minimise
              </p>
              <ul className="space-y-4">
                {RISK_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="mt-1 w-5 h-5 rounded-sm flex-shrink-0 flex items-center justify-center font-mono text-xs font-bold"
                      style={{
                        background: 'rgba(149,1,1,0.2)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(149,1,1,0.5)',
                        boxShadow: '0 0 8px rgba(255,0,0,0.1)',
                      }}
                    >
                      ✕
                    </span>
                    <p className="body-text text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: structural principle card */}
          <div data-reveal>
            <div
              className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between"
              style={{ borderColor: 'var(--border)', minHeight: '340px' }}
            >
              <div>
                <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--accent)' }}>
                  The Luminexis Standard
                </p>
                <div className="space-y-5">
                  {[
                    { label: 'Architecture Review', val: 'Every engagement' },
                    { label: 'Performance Baseline', val: 'Set at project start' },
                    { label: 'Structural Documentation', val: 'Delivered on completion' },
                    { label: 'Scalability Assessment', val: 'Built into planning phase' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--border)' }}>
                      <span className="body-text text-sm">{row.label}</span>
                      <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="body-text text-xs mt-6 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                These are not optional additions. They are requirements for every engagement we undertake.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
