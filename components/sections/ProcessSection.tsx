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
    <section id="process" className="section-container min-h-screen py-24">
      <div ref={ref} className="max-w-5xl w-full mx-auto">
        <p data-reveal className="act-label">How We Work</p>

        <h2 data-reveal className="headline-xl mb-4">
          A structured{' '}
          <span className="gradient-text">process.</span>
        </h2>

        <p data-reveal className="body-text max-w-xl mb-16">
          Every project follows the same disciplined framework — from first conversation
          to live platform. No surprises. No shortcuts.
        </p>

        {/* Desktop: horizontal timeline */}
        <div data-reveal className="hidden md:flex items-stretch gap-0 mb-12">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="flex-1 relative group">
              {/* Connector line */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="absolute top-[28px] left-1/2 w-full h-px z-0"
                  style={{ background: 'var(--border)' }} />
              )}
              <div className="relative z-10 flex flex-col items-center text-center px-4">
                {/* Step circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 glass-card transition-all duration-300 group-hover:border-accent group-hover:shadow-lg"
                  style={{ borderColor: 'var(--border)', boxShadow: 'none' }}
                >
                  <span className="font-mono text-xs font-bold" style={{ color: 'var(--accent)' }}>
                    {step.number}
                  </span>
                </div>
                <span className="text-xl mb-2 block" style={{ color: 'var(--accent)' }}>{step.icon}</span>
                <h3 className="font-semibold text-sm mb-2 text-fg">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Full step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={i}
              data-reveal
              className="glass-card p-6 rounded-sm group hover:border-accent transition-all duration-300 relative overflow-hidden"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Background number */}
              <span
                className="absolute top-2 right-4 font-mono text-7xl font-bold opacity-[0.04] select-none pointer-events-none"
                style={{ color: 'var(--accent)' }}
              >
                {step.number}
              </span>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-sm flex items-center justify-center"
                  style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)' }}>
                  <span className="font-mono text-xs font-bold" style={{ color: 'var(--accent)' }}>{step.number}</span>
                </div>
                <span className="text-lg" style={{ color: 'var(--accent)' }}>{step.icon}</span>
                <h3 className="font-semibold text-base text-fg">{step.title}</h3>
              </div>

              <p className="body-text text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
