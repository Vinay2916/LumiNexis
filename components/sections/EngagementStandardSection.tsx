'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

const FIT_CRITERIA = [
  {
    icon: '◈',
    title: 'Businesses with a clear commercial objective',
    desc: 'We structure digital systems around outcomes. Partners who can articulate what success looks like allow us to build with precision.',
  },
  {
    icon: '⬡',
    title: 'Operators who value structure over speed',
    desc: 'The Luminexis process requires proper discovery and planning. We are not structured for rushed or disposable builds.',
  },
  {
    icon: '◎',
    title: 'Companies planning for long-term digital stability',
    desc: 'Our systems are designed to hold and grow. Partners who need a foundation — not a rebrand — are where we operate best.',
  },
]

export default function EngagementStandardSection() {
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
    <section id="engagement" className="section-container py-24">
      <div ref={ref} className="max-w-5xl w-full mx-auto">

        <div data-reveal className="mb-14">
          <p className="font-mono text-xs tracking-[0.28em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
            Engagement Standard
          </p>
          <h2 className="headline-xl mb-5">
            Who We Work<br />
            <span className="gradient-text">Best With.</span>
          </h2>
          <p className="body-text text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            We are selective. The quality of an engagement depends as much on the right fit
            as it does on execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {FIT_CRITERIA.map((item, i) => (
            <div
              key={i}
              data-reveal
              className="glass-card p-7 rounded-sm group cursor-default relative overflow-hidden"
            >
              <span
                className="text-2xl mb-5 block transition-all duration-300 group-hover:scale-110"
                style={{ color: 'var(--accent)' }}
              >
                {item.icon}
              </span>
              <h3 className="font-semibold text-sm mb-3 leading-snug" style={{ color: 'var(--fg)' }}>{item.title}</h3>
              <p className="body-text text-xs leading-relaxed">{item.desc}</p>
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }}
              />
            </div>
          ))}
        </div>

        {/* Capacity discipline — subtle scarcity signal */}
        <div data-reveal className="pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="body-text text-sm max-w-lg leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              We take on a limited number of structured engagements per quarter to maintain execution quality.
              If your requirement is time-sensitive, we recommend initiating contact early.
            </p>
            <a
              href="#contact"
              className="cta-secondary text-sm flex-shrink-0"
            >
              Check Availability
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
