'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { PROCESS_STEPS } from '@/lib/constants'

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.12,
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
    <section id="process" className="section-container min-h-screen py-24 relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none" aria-hidden />

      <div ref={ref} className="max-w-5xl w-full mx-auto relative z-10">
        <p data-reveal className="font-mono text-xs tracking-[0.28em] uppercase mb-4" style={{ color: 'var(--accent)', opacity: 0.85 }}>
          The Luminexis Method
        </p>

        <h2 data-reveal className="headline-xl mb-4">
          Structure before{' '}
          <span className="gradient-text">execution.</span>
        </h2>

        <p data-reveal className="body-text max-w-xl mb-16" style={{ color: 'var(--fg-muted)' }}>
          Every engagement follows the same disciplined sequence — from structural clarity
          through to validated delivery. No shortcuts. No ambiguous phases.
        </p>

        {/* Desktop: horizontal timeline */}
        <div data-reveal className="hidden md:flex items-stretch gap-0 mb-10">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="flex-1 relative group">
              {i < PROCESS_STEPS.length - 1 && (
                <div
                  className="absolute top-7 left-1/2 w-full h-px z-0"
                  style={{ background: 'linear-gradient(90deg, rgba(149,1,1,0.6), rgba(149,1,1,0.15))' }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center text-center px-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(10,0,0,0.9)',
                    border: '1px solid rgba(149,1,1,0.5)',
                    boxShadow: '0 0 0 0 rgba(255,0,0,0)',
                    transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,0,0,0.8)'
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 20px rgba(255,0,0,0.35)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(149,1,1,0.5)'
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 0 rgba(255,0,0,0)'
                  }}
                >
                  <span className="font-mono text-xs font-bold" style={{ color: 'var(--accent)' }}>
                    {step.number}
                  </span>
                </div>
                <span className="text-xl mb-2 block" style={{ color: 'var(--accent)' }}>{step.icon}</span>
                <h3 className="font-semibold text-sm text-fg">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={i}
              data-reveal
              className="glass-card p-6 rounded-sm group cursor-default relative overflow-hidden"
            >
              {/* Background number */}
              <span
                className="absolute top-2 right-4 font-mono text-7xl font-bold select-none pointer-events-none"
                style={{ color: 'var(--accent)', opacity: 0.04 }}
              >
                {step.number}
              </span>

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-sm flex items-center justify-center"
                  style={{
                    background: 'rgba(149,1,1,0.2)',
                    border: '1px solid rgba(149,1,1,0.5)',
                  }}
                >
                  <span className="font-mono text-xs font-bold" style={{ color: 'var(--accent)' }}>{step.number}</span>
                </div>
                <span className="text-lg" style={{ color: 'var(--accent)' }}>{step.icon}</span>
                <h3 className="font-semibold text-base" style={{ color: 'var(--fg)' }}>{step.title}</h3>
              </div>

              <p className="body-text text-sm leading-relaxed">{step.description}</p>

              {/* Bottom accent bar */}
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
