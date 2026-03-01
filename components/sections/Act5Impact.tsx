'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { PROJECTS } from '@/lib/constants'

const PHASES = [
  { label: 'Project Overview',      key: 'overview'       as const },
  { label: 'The Challenge',         key: 'challenge'      as const },
  { label: 'Strategic Approach',    key: 'approach'       as const },
  { label: 'Design Execution',      key: 'designExecution'as const },
  { label: 'Development Execution', key: 'devExecution'   as const },
]

export default function Act5Impact() {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState<string>('overview')

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
    <section id="work" className="section-container min-h-screen py-24">
      <div ref={ref} className="max-w-5xl w-full mx-auto">
        <p data-reveal className="act-label">Act 05 — Work</p>

        <h2 data-reveal className="headline-xl mb-4">
          Structured work,{' '}
          <span className="gradient-text">measurable results.</span>
        </h2>

        <p data-reveal className="body-text max-w-xl mb-16">
          Every project follows our repeatable framework: challenge → strategy → design → engineering → impact.
          Here is the evidence.
        </p>

        {PROJECTS.map((project) => (
          <div key={project.id} data-reveal className="glass-card rounded-sm overflow-hidden mb-8">

            {/* ── Project header ── */}
            <div className="p-6 md:p-8" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ background: '#22c55e' }} />
                    <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#22c55e' }}>{project.status}</span>
                    <span className="font-mono text-xs" style={{ color: 'var(--fg-muted)' }}>/ {project.year}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-fg mb-2">{project.title}</h3>

                  {/* Metadata grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                    {[
                      { label: 'Client',   value: project.client },
                      { label: 'Industry', value: project.industry },
                      { label: 'Duration', value: project.duration },
                      { label: 'Type',     value: project.category },
                    ].map((m) => (
                      <div key={m.label} className="glass-card p-3 rounded-sm">
                        <p className="font-mono text-xs tracking-wider uppercase mb-0.5" style={{ color: 'var(--accent)' }}>{m.label}</p>
                        <p className="text-xs font-medium text-fg leading-snug">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services + tags column */}
                <div className="flex flex-col gap-3 flex-shrink-0">
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>Services</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((s) => (
                        <span key={s} className="font-mono text-xs px-2 py-1 rounded-sm"
                          style={{ background: 'var(--bg)', color: 'var(--accent)', border: '1px solid var(--border)' }}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span key={t} className="font-mono text-xs px-2 py-1 rounded-sm"
                          style={{ background: 'var(--bg)', color: 'var(--fg-muted)', border: '1px solid var(--border)' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Case study accordion ── */}
            <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
              {PHASES.map(({ label, key }) => {
                const isOpen = open === key
                return (
                  <div key={key}>
                    <button
                      className="w-full flex items-center justify-between px-6 md:px-8 py-4 text-left transition-colors"
                      style={{ background: isOpen ? 'rgba(26,82,255,0.04)' : 'transparent' }}
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
                      <div className="px-6 md:px-8 py-5" style={{ background: 'var(--bg-alt)' }}>
                        <p className="body-text text-sm leading-relaxed">{project[key]}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* ── Results & Impact ── */}
            <div className="p-6 md:p-8" style={{ borderTop: '1px solid var(--border)' }}>
              <p className="font-mono text-xs tracking-widest mb-5 text-accent">RESULTS &amp; IMPACT</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {project.results.map((r, i) => (
                  <div key={i} className="flex items-start gap-3 glass-card px-4 py-3 rounded-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#22c55e' }} />
                    <span className="text-sm font-medium text-fg">{r}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="glass-card p-5 rounded-sm border-l-2" style={{ borderLeftColor: 'var(--accent)' }}>
                  <p className="font-mono text-xs tracking-widest mb-3 text-accent">CLIENT TESTIMONIAL</p>
                  <blockquote className="body-text text-sm italic mb-4">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <p className="text-sm font-semibold text-fg">{project.testimonial.author}</p>
                  <p className="font-mono text-xs" style={{ color: 'var(--fg-muted)' }}>{project.testimonial.role}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
