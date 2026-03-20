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
        <p data-reveal className="act-label">Partner Testimonies</p>

        <h2 data-reveal className="headline-lg mb-4">
          What partners{' '}
          <span className="gradient-text">say.</span>
        </h2>

        <p data-reveal className="body-text max-w-xl mb-14">
          We measure success by outcomes — not deliverables.
          Here is what structured digital systems look like from a partner’s perspective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              data-reveal
              className="glass-card p-7 rounded-sm flex flex-col gap-4 group cursor-default"
            >
              {/* Large quote mark */}
              <span
                className="text-5xl font-serif leading-none transition-all duration-300 group-hover:scale-110"
                style={{ color: 'var(--accent)', opacity: 0.6, display: 'block' }}
              >
                &ldquo;
              </span>

              <p className="body-text text-sm leading-relaxed flex-1 italic">
                {t.quote}
              </p>

              <div className="pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold"
                    style={{
                      background: 'linear-gradient(135deg, rgba(149,1,1,0.5), rgba(61,0,0,0.8))',
                      border: '1px solid rgba(255,0,0,0.3)',
                      color: 'var(--accent)',
                      boxShadow: '0 0 12px rgba(255,0,0,0.15)',
                    }}
                  >
                    {t.author.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>{t.author}</p>
                    <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--fg-muted)' }}>
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>

              <span
                className="font-mono text-xs px-2 py-1 rounded-sm self-start transition-all duration-300"
                style={{
                  background: 'rgba(149,1,1,0.15)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(149,1,1,0.4)',
                }}
              >
                {t.engagement}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
