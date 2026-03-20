'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { LUMINEXIS_PRINCIPLES } from '@/lib/constants'

export default function Act6Future() {
  const ref = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState({ name: '', email: '', company: '', project: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.9,
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

  const budgets = ['< ₹50k', '₹50k – ₹1L', '₹1L – ₹3L', '₹3L – ₹5L', '₹5L+', 'Let\'s discuss']

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: send to API route / form service
    setSubmitted(true)
  }

  return (
    <section id="act6" className="section-container min-h-screen py-24 relative overflow-hidden">
      {/* Ambient red glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(61,0,0,0.45) 0%, transparent 65%)', opacity: 0.8 }} />
      </div>

      <div ref={ref} className="max-w-5xl w-full mx-auto relative">
        <p data-reveal className="font-mono text-xs tracking-[0.28em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
          The Luminexis Principles
        </p>

        <h2 data-reveal className="headline-xl mb-6">
          If your digital presence requires structural clarity<br />
          <span className="gradient-text">rather than surface improvement.</span>
        </h2>

        <p data-reveal className="body-text max-w-2xl mb-16 text-lg leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
          We build digital systems that are structured, measurable, and built to hold — not to be replaced.
        </p>

        {/* Luminexis Principles */}
        <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
          {LUMINEXIS_PRINCIPLES.map((principle, i) => (
            <div key={i} className="glass-card px-6 py-5 rounded-sm flex items-center gap-4 group cursor-default">
              <span
                className="font-mono text-xs font-bold flex-shrink-0 transition-all duration-200"
                style={{ color: 'var(--accent)' }}
              >
                0{i + 1}
              </span>
              <p className="body-text text-sm font-medium">{principle}</p>
            </div>
          ))}
        </div>

        {/* ── Contact Section ── */}
        <div id="contact" className="scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Left: copy */}
            <div data-reveal className="lg:col-span-2 flex flex-col justify-start">
              <p className="font-mono text-xs tracking-[0.28em] uppercase mb-4" style={{ color: 'var(--accent)', opacity: 0.85 }}>
                Request Consultation
              </p>
              <h3 className="headline-lg mb-5">
                Let&apos;s Begin<br />
                <span className="gradient-text">Properly.</span>
              </h3>
              <p className="body-text mb-8 leading-relaxed">
                Tell us about your digital requirement. We will review the structural context
                and respond with a clear scope — before any commitment.
              </p>

              <div className="space-y-4">
                {[
                  { icon: '◈', label: 'Response within 24 hours' },
                  { icon: '⬡', label: 'Structural scope provided at no cost' },
                  { icon: '◎', label: 'No obligation required' },
                  { icon: '⬢', label: 'Serving partners across India and globally' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <span
                      className="text-base transition-all duration-200 group-hover:scale-110"
                      style={{ color: 'var(--accent)', filter: 'drop-shadow(0 0 4px rgba(255,0,0,0.4))' }}
                    >
                      {item.icon}
                    </span>
                    <span className="body-text text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div data-reveal className="lg:col-span-3">
              {submitted ? (
                <div className="glass-card p-10 rounded-sm flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
                  <span className="text-4xl" style={{ color: 'var(--accent)' }}>◈</span>
                  <h4 className="text-xl font-bold text-fg">Message Received.</h4>
                  <p className="body-text max-w-sm">
                    We’ll review your structural requirement and reach out within 24 hours with a proposed scope.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="cta-secondary text-sm mt-4"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card p-6 md:p-8 rounded-sm space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField label="Your Name *" name="name" value={formState.name} onChange={handleChange} placeholder="Hari Prasad" required />
                    <FormField label="Email Address *" name="email" type="email" value={formState.email} onChange={handleChange} placeholder="hello@company.com" required />
                  </div>
                  <FormField label="Company / Organisation" name="company" value={formState.company} onChange={handleChange} placeholder="Your company name" />

                  <div>
                    <label className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>
                      Engagement Type
                    </label>
                    <select
                      name="project"
                      value={formState.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm text-sm outline-none transition-all duration-200 font-sans"
                      style={{
                        background: 'rgba(8,0,0,0.9)',
                        border: '1px solid rgba(149,1,1,0.35)',
                        color: formState.project ? 'var(--fg)' : 'var(--fg-muted)',
                      }}
                    >
                      <option value="">Select engagement type…</option>
                      <option>Interface Structure</option>
                      <option>Frontend Engineering Execution</option>
                      <option>Backend Engineering Execution</option>
                      <option>Full Digital System</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>
                      Estimated Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormState(p => ({ ...p, budget: b }))}
                          className="px-3 py-1.5 font-mono text-xs rounded-sm transition-all duration-200"
                          style={{
                            border: '1px solid',
                            borderColor: formState.budget === b ? 'rgba(255,0,0,0.6)' : 'rgba(149,1,1,0.35)',
                            background: formState.budget === b ? 'rgba(255,0,0,0.1)' : 'transparent',
                            color: formState.budget === b ? 'var(--accent)' : 'var(--fg-muted)',
                            boxShadow: formState.budget === b ? '0 0 12px rgba(255,0,0,0.15)' : 'none',
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>
                      Describe Your Requirement *
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe your structural requirements, objectives, and timeline…"
                      className="w-full px-4 py-3 rounded-sm text-sm outline-none transition-all duration-200 resize-none font-sans"
                      style={{
                        background: 'rgba(8,0,0,0.9)',
                        border: '1px solid rgba(149,1,1,0.35)',
                        color: 'var(--fg)',
                      }}
                    />
                  </div>

                  <button type="submit" className="cta-primary w-full justify-center">
                    Request Consultation
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div data-reveal className="mt-20 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-3">
            <LuminexisLogo />
            <span className="font-semibold text-sm text-fg">Luminexis Technologies</span>
          </div>
          <p className="font-mono text-xs text-fg-muted">
            © {new Date().getFullYear()} · Engineered for Performance · Built for Longevity
          </p>
        </div>
      </div>
    </section>
  )
}

interface FieldProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  required?: boolean
}

function FormField({ label, name, value, onChange, placeholder, type = 'text', required }: FieldProps) {
  return (
    <div>
      <label className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-sm text-sm outline-none transition-all duration-200 font-sans"
        style={{
          background: 'rgba(8,0,0,0.9)',
          border: '1px solid rgba(149,1,1,0.35)',
          color: 'var(--fg)',
        }}
        onFocus={e => {
          e.target.style.borderColor = 'rgba(255,0,0,0.6)'
          e.target.style.boxShadow = '0 0 12px rgba(255,0,0,0.1)'
        }}
        onBlur={e => {
          e.target.style.borderColor = 'rgba(149,1,1,0.35)'
          e.target.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}

function LuminexisLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="14,2 25,8 25,20 14,26 3,20 3,8"
        stroke="#FF0000"
        strokeWidth="1.5"
        fill="none"
        style={{ filter: 'drop-shadow(0 0 3px rgba(255,0,0,0.5))' }}
      />
      <polygon points="14,8 20,11.5 20,17.5 14,21 8,17.5 8,11.5" fill="#950101" opacity="0.55" />
      <circle cx="14" cy="14" r="2.2" fill="#FF0000" style={{ filter: 'drop-shadow(0 0 2px rgba(255,0,0,0.8))' }} />
    </svg>
  )
}
