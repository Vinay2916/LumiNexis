'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)

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
    <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-24">
      <div ref={ref} className="max-w-5xl w-full mx-auto">
        <p data-reveal className="act-label">Client Results</p>

        <h2 data-reveal className="headline-lg mb-4">
          What clients{' '}
          <span className="gradient-text">say.</span>
        </h2>

        <p data-reveal className="body-text max-w-xl mb-14">
          We measure success by outcomes — not deliverables.
          Here is what structured engineering looks like from the client's perspective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              data-reveal
              className="glass-card p-6 rounded-sm flex flex-col gap-5 group hover:border-accent transition-all duration-300"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Quote mark */}
              <span className="text-4xl font-serif leading-none" style={{ color: 'var(--accent)', opacity: 0.5 }}>"</span>

              <p className="body-text text-sm leading-relaxed flex-1 italic">
                {t.quote}
              </p>

              <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold"
                    style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', color: 'var(--accent)' }}
                  >
                    {t.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-fg leading-tight">{t.author}</p>
                    <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--fg-muted)' }}>
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>

              <span
                className="font-mono text-xs px-2 py-1 rounded-sm self-start"
                style={{ background: 'var(--bg-alt)', color: 'var(--accent)', border: '1px solid var(--border)' }}
              >
                {t.project}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
