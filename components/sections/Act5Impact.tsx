'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { PROJECTS } from '@/lib/constants'

const PHASES = [
  { label: 'Business Context',      key: 'businessContext'     as const, type: 'text' as const },
  { label: 'Structural Challenge',  key: 'structuralChallenge' as const, type: 'text' as const },
  { label: 'Strategic Decisions',   key: 'strategicDecisions'  as const, type: 'list' as const },
  { label: 'What We Avoided',       key: 'whatWeAvoided'       as const, type: 'list' as const },
  { label: 'Measurable Impact',     key: 'measurableImpact'    as const, type: 'list' as const },
]

export default function Act5Impact() {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState<string>('businessContext')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.14,
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
    <section id="work" className="section-container py-24">
      <div ref={ref} className="max-w-5xl w-full mx-auto">

        <div data-reveal className="mb-14">
          <p className="font-mono text-xs tracking-[0.28em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
            Strategic Work
          </p>
          <h2 className="headline-xl mb-5">
            Documented Engagements,{' '}
            <span className="gradient-text">Verified Outcomes.</span>
          </h2>
          <p className="body-text max-w-xl leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            Each engagement is documented with full structural context — from the business challenge
            through to the decisions made and measurable results delivered.
          </p>
        </div>

        {PROJECTS.map((project) => (
          <div key={project.id} data-reveal className="glass-card rounded-2xl overflow-hidden mb-8">

            {/* ── Engagement header ── */}
            <div
              className="p-6 md:p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(10,0,0,0.95), rgba(32,0,0,0.9))',
                borderBottom: '1px solid rgba(149,1,1,0.35)',
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#22c55e', boxShadow: '0 0 6px rgba(34,197,94,0.5)' }} />
                    <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#22c55e' }}>{project.status}</span>
                    <span className="font-mono text-xs" style={{ color: 'var(--fg-muted)' }}>/ {project.year}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--fg)' }}>{project.title}</h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                    {[
                      { label: 'Partner',        value: project.partner },
                      { label: 'Industry',        value: project.industry },
                      { label: 'Duration',        value: project.duration },
                      { label: 'Engagement Type', value: project.category },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="p-3 rounded-xl"
                        style={{
                          background: 'rgba(10,0,0,0.8)',
                          border: '1px solid rgba(149,1,1,0.3)',
                          boxShadow: '0 2px 8px rgba(255,0,0,0.05)',
                        }}
                      >
                        <p className="font-mono text-xs tracking-wider uppercase mb-0.5" style={{ color: 'var(--accent)' }}>{m.label}</p>
                        <p className="text-xs font-medium leading-snug" style={{ color: 'var(--fg)' }}>{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                  <div className="flex flex-col gap-3 flex-shrink-0">
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>Scope</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-xs px-2 py-1 rounded-full"
                          style={{ background: 'rgba(149,1,1,0.15)', color: 'var(--accent)', border: '1px solid rgba(149,1,1,0.4)' }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2 py-1 rounded-full"
                          style={{ background: 'rgba(10,0,0,0.8)', color: 'var(--fg-muted)', border: '1px solid rgba(149,1,1,0.25)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Case study documentation accordion ── */}
            <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
              {PHASES.map(({ label, key, type }) => {
                const isOpen = open === key
                const content = project[key]
                return (
                  <div key={key}>
                    <button
                      className="w-full flex items-center justify-between px-6 md:px-8 py-4 text-left transition-all duration-200"
                      style={{ background: isOpen ? 'rgba(149,1,1,0.1)' : 'transparent' }}
                      onClick={() => setOpen(isOpen ? '' : key)}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                          style={{ background: isOpen ? 'var(--accent)' : 'var(--border)' }}
                        />
                        <span className="font-semibold text-sm tracking-wide" style={{ color: isOpen ? 'var(--accent)' : 'var(--fg)' }}>
                          {label}
                        </span>
                      </div>
                      <span className="text-lg font-light flex-shrink-0" style={{ color: 'var(--accent)' }}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 md:px-8 py-6" style={{ background: 'var(--bg-alt)' }}>
                        {type === 'text' ? (
                          <p className="body-text text-sm leading-relaxed">{content as string}</p>
                        ) : (
                          <ul className="space-y-3">
                            {(content as string[]).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span
                                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ background: key === 'measurableImpact' ? '#22c55e' : 'var(--accent)' }}
                                />
                                <span className="body-text text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* ── Partner testimony ── */}
            {project.testimonial && (
              <div className="p-6 md:p-8" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="glass-card p-6 rounded-2xl border-l-4" style={{ borderLeftColor: 'var(--accent)' }}>
                  <p className="font-mono text-xs tracking-widest mb-4 text-accent">PARTNER TESTIMONY</p>
                  <blockquote className="body-text text-sm italic mb-4 leading-relaxed">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm font-semibold text-fg">{project.testimonial.author}</p>
                  <p className="font-mono text-xs" style={{ color: 'var(--fg-muted)' }}>{project.testimonial.role}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
