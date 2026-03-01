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
    <section id="act3" className="section-container min-h-screen py-24">
      <div ref={ref} className="max-w-5xl w-full mx-auto">
        <p data-reveal className="act-label">Act 03 — Design Execution</p>

        <h2 data-reveal className="headline-xl mb-4">
          Design with{' '}
          <span className="gradient-text">Purpose.</span>
        </h2>

        <p data-reveal className="body-text max-w-xl mb-16">
          Built around clarity and conversion logic.
          Every component earns its place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              data-reveal
              className="service-module rounded-sm relative overflow-hidden group"
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Blueprint corner lines */}
              <span className="absolute top-0 left-0 w-4 h-4 border-t border-l transition-all duration-300 group-hover:w-8 group-hover:h-8"
                style={{ borderColor: 'var(--accent)' }} />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r transition-all duration-300 group-hover:w-8 group-hover:h-8"
                style={{ borderColor: 'var(--accent)' }} />

              <span className="text-2xl mb-4 block transition-transform duration-300 group-hover:scale-110"
                style={{ color: hovered === s.id ? 'var(--accent)' : 'var(--fg-muted)' }}>
                {s.icon}
              </span>

              <h3 className="font-semibold text-lg mb-2 text-fg">{s.title}</h3>
              <p className="body-text text-sm mb-4">{s.description}</p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag}
                    className="font-mono text-xs px-2 py-1 rounded-sm"
                    style={{ background: 'var(--bg-alt)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
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
