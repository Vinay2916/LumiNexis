'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { SERVICES } from '@/lib/constants'

export default function Act3Design() {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<string | null>(null)

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
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="act3" className="section-container min-h-screen py-24 relative overflow-hidden">
      {/* Red corner accent */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '40vw', height: '40vh',
          background: 'radial-gradient(ellipse at 100% 0%, rgba(61,0,0,0.35) 0%, transparent 65%)',
        }}
        aria-hidden
      />

      <div ref={ref} className="max-w-5xl w-full mx-auto relative z-10">
        <p data-reveal className="font-mono text-xs tracking-[0.28em] uppercase mb-4" style={{ color: 'var(--accent)', opacity: 0.85 }}>
          What We Build
        </p>

        <h2 data-reveal className="headline-xl mb-4">
          Every System,{' '}
          <span className="gradient-text">Structurally Accountable.</span>
        </h2>

        <p data-reveal className="body-text max-w-xl mb-16" style={{ color: 'var(--fg-muted)' }}>
          Interface decisions are made after structural planning — not before.
          Every component is accountable to a commercial objective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              data-reveal
              className="service-module rounded-2xl relative overflow-hidden group"
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Corner accent lines — expand on hover */}
              <span
                className="absolute top-0 left-0 border-t border-l transition-all duration-400"
                style={{
                  width:  hovered === s.id ? '40px' : '16px',
                  height: hovered === s.id ? '40px' : '16px',
                  borderColor: 'var(--accent)',
                  opacity: hovered === s.id ? 1 : 0.6,
                }}
              />
              <span
                className="absolute bottom-0 right-0 border-b border-r transition-all duration-400"
                style={{
                  width:  hovered === s.id ? '40px' : '16px',
                  height: hovered === s.id ? '40px' : '16px',
                  borderColor: 'var(--accent)',
                  opacity: hovered === s.id ? 1 : 0.6,
                }}
              />

              <span
                className="text-2xl mb-5 block transition-all duration-300"
                style={{
                  color: hovered === s.id ? 'var(--accent)' : 'var(--fg-muted)',
                  transform: hovered === s.id ? 'scale(1.15) translateY(-2px)' : 'scale(1)',
                  filter: hovered === s.id ? 'drop-shadow(0 0 8px rgba(255,0,0,0.6))' : 'none',
                }}
              >
                {s.icon}
              </span>

              <h3 className="font-semibold text-lg mb-3" style={{ color: 'var(--fg)' }}>{s.title}</h3>
              <p className="body-text text-sm mb-5">{s.description}</p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded-full transition-all duration-200"
                    style={{
                      background: hovered === s.id ? 'rgba(255,0,0,0.1)' : 'var(--bg-alt)',
                      color: 'var(--accent)',
                      border: '1px solid',
                      borderColor: hovered === s.id ? 'rgba(255,0,0,0.4)' : 'var(--border)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
