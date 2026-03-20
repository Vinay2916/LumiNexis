'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { AUTHORITY_STATS } from '@/lib/constants'

const TICKER_ITEMS = [
  '⬡ Interface Structure',
  '◈ Frontend Engineering',
  '◎ Backend Systems',
  '⬢ Full Digital Platforms',
  '◈ UX Research',
  '⬡ Performance Engineering',
  '◎ CI/CD Infrastructure',
  '⬢ Structured Design Systems',
]

export default function Act1Chaos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          stagger: 0.14,
          ease: 'power3.out',
          delay: 0.2,
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden scanlines">

      {/* ── Ambient background glows ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-0 inset-x-0"
          style={{
            height: '65vh',
            background: 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(61,0,0,0.75) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0"
          style={{
            width: '55vw',
            height: '50vh',
            background: 'radial-gradient(ellipse at 90% 90%, rgba(149,1,1,0.22) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute top-1/3 left-0"
          style={{
            width: '40vw',
            height: '40vh',
            background: 'radial-gradient(ellipse at 0% 50%, rgba(61,0,0,0.25) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* ── Main hero content ── */}
      <div
        ref={containerRef}
        className="flex-1 flex flex-col justify-center max-w-5xl w-full mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-16 relative z-10"
      >
        {/* Studio tag */}
        <div data-reveal className="flex items-center gap-3 mb-12">
          <span
            className="block w-8 h-px"
            style={{ background: 'linear-gradient(90deg, #FF0000, transparent)' }}
          />
          <span className="font-mono text-xs tracking-[0.32em] uppercase" style={{ color: 'var(--accent)', opacity: 0.9 }}>
            Digital Systems Studio
          </span>
          <span
            className="block h-px flex-1 max-w-[80px]"
            style={{ background: 'linear-gradient(90deg, rgba(149,1,1,0.5), transparent)' }}
          />
        </div>

        {/* Primary headline */}
        <h1 data-reveal className="headline-xl leading-[1.02] mb-7">
          Structured Digital<br />
          <span className="gradient-text">Systems</span>{' '}for<br />
          Growth&#8209;Focused Businesses.
        </h1>

        {/* Sub copy */}
        <p data-reveal className="body-text text-lg max-w-2xl mb-14 leading-relaxed">
          We partner with companies that require{' '}
          <span className="text-fg font-medium">clarity</span>,{' '}
          <span className="text-fg font-medium">performance</span>, and long&#8209;term digital
          stability — not disposable builds.
        </p>

        {/* CTAs */}
        <div data-reveal className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-20">
          <a href="#contact" className="cta-primary group">
            Request Strategic Consultation
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#work" className="cta-secondary group">
            View Strategic Work
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className="opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-2 group-hover:ml-0"
            >
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* ── Stats honor card / banner ── */}
        <div data-reveal className="honor-card">
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ gap: '1px', background: 'rgba(149,1,1,0.35)' }}
          >
            {AUTHORITY_STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-6 cursor-default transition-all duration-300"
                style={{ background: 'var(--bg-alt)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(149,1,1,0.20)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-alt)' }}
              >
                <span className="font-mono text-3xl md:text-4xl font-bold mb-2 gradient-text">
                  {stat.value}
                </span>
                <span className="font-mono text-xs tracking-widest uppercase text-center" style={{ color: 'var(--fg-muted)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Structural differentiators */}
        <div data-reveal className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { label: 'Structure First',         desc: 'Every engagement begins with architecture — not aesthetics.' },
            { label: 'Commercial Alignment',    desc: 'Every system is mapped to a measurable business outcome.' },
            { label: 'Built for Longevity',     desc: 'No disposable builds. No annual redesigns. Foundations that hold.' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1 h-4 rounded-sm" style={{ background: 'var(--accent)' }} />
                <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
                  {item.label}
                </p>
              </div>
              <p className="body-text text-sm leading-relaxed pl-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee ticker strip ── */}
      <div
        className="relative z-10 overflow-hidden py-3.5"
        style={{
          borderTop: '1px solid rgba(149,1,1,0.35)',
          borderBottom: '1px solid rgba(149,1,1,0.2)',
          background: 'rgba(61,0,0,0.3)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'marquee 32s linear infinite', width: 'max-content' }}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-[0.25em] uppercase px-10 flex-shrink-0"
              style={{ color: 'var(--accent)', opacity: i % 2 === 0 ? 0.7 : 0.4 }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
