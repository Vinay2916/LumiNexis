'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export default function Act1Chaos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0,
          duration: 0.85,
          stagger: 0.16,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="section-container blueprint-bg min-h-screen pt-24">
      <div ref={containerRef} className="max-w-5xl w-full mx-auto">

        {/* Studio label */}
        <div data-reveal className="inline-flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
          <span className="font-mono text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--accent)' }}>
            Design &amp; Development Studio
          </span>
        </div>

        {/* Main headline */}
        <div data-reveal className="mb-6">
          <h1 className="headline-xl">
            We design and engineer<br />
            <span className="gradient-text">high-performance</span><br />
            digital experiences.
          </h1>
        </div>

        {/* Sub-headline */}
        <p data-reveal className="body-text text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Structured architecture. Conversion-focused design. Performance-first engineering.
          We build scalable digital platforms that grow with your business.
        </p>

        {/* Dual CTAs */}
        <div data-reveal className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
          <a href="#work" className="cta-primary">
            View Our Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="cta-secondary">
            Start a Project
          </a>
        </div>

        {/* Narrative divider */}
        <div data-reveal className="pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="headline-lg text-fg-muted font-light leading-tight">
                Most websites<br />
                <span className="relative glitch-text text-fg font-semibold" data-text="look built.">
                  look built.
                </span>
              </p>
              <p className="body-text mt-3">
                Few are <span className="text-accent font-semibold">engineered.</span>
              </p>
            </div>
            <ul className="space-y-3">
              {[
                'Poor structural architecture',
                'Slow performance & high bounce rate',
                'Weak conversion logic',
                'No scalable foundation',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3 body-text text-sm">
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scroll nudge */}
        <div data-reveal className="mt-12 flex items-center gap-4 opacity-40">
          <div className="h-px w-12" style={{ background: 'var(--accent)' }} />
          <span className="font-mono text-xs tracking-widest text-accent">SCROLL TO EXPLORE</span>
          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
        </div>
      </div>
    </section>
  )
}
