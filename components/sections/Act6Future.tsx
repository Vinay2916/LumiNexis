'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'

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

  const principles = [
    { icon: '◈', title: 'Structured',  desc: 'Systems thinking applied to every layer of the stack.' },
    { icon: '⬡', title: 'Scalable',    desc: 'Architecture that grows without rewrites.' },
    { icon: '◎', title: 'Performant',  desc: 'Speed is a feature. We engineer it in.' },
    { icon: '⬢', title: 'Purposeful',  desc: 'Every decision maps to a measurable outcome.' },
  ]

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
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)' }} />
      </div>

      <div ref={ref} className="max-w-5xl w-full mx-auto relative">
        <p data-reveal className="act-label">Act 06 — The Future</p>

        <h2 data-reveal className="headline-xl mb-6">
          Built for{' '}
          <span className="gradient-text">Longevity.</span>
        </h2>

        <p data-reveal className="body-text max-w-2xl mb-16 text-lg md:text-xl leading-relaxed">
          We build structured, scalable digital platforms that grow with your business.
          Not templates. Not shortcuts. Engineered foundations.
        </p>

        {/* Principles */}
        <div data-reveal className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {principles.map((p, i) => (
            <div key={i} className="glass-card p-5 rounded-sm text-center group hover:border-accent transition-all duration-200"
              style={{ borderColor: 'var(--border)' }}>
              <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform"
                style={{ color: 'var(--accent)' }}>{p.icon}</span>
              <h4 className="font-semibold text-sm mb-1 text-fg">{p.title}</h4>
              <p className="body-text text-xs">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Contact Section ── */}
        <div id="contact" className="scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left: copy */}
            <div data-reveal className="lg:col-span-2 flex flex-col justify-start">
              <p className="font-mono text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
                Book a Strategy Call
              </p>
              <h3 className="headline-lg mb-5">
                Start Building<br />
                with <span className="gradient-text">Structure.</span>
              </h3>
              <p className="body-text mb-8">
                Tell us about your project. We'll map the architecture, define the strategy,
                and deliver a clear brief — before the first invoice.
              </p>

              <div className="space-y-4">
                {[
                  { icon: '◈', label: 'Discovery call within 24 hours' },
                  { icon: '⬡', label: 'Structured project brief provided' },
                  { icon: '◎', label: 'No commitment required' },
                  { icon: '⬢', label: 'Serving clients across India and globally' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-base" style={{ color: 'var(--accent)' }}>{item.icon}</span>
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
                    We'll review your project details and reach out within 24 hours with next steps.
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
                      Project Type
                    </label>
                    <select
                      name="project"
                      value={formState.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm text-sm outline-none transition-all duration-200 font-sans"
                      style={{
                        background: 'var(--bg)',
                        border: '1px solid var(--border)',
                        color: formState.project ? 'var(--fg)' : 'var(--fg-muted)',
                      }}
                    >
                      <option value="">Select project type…</option>
                      <option>Digital Product Design</option>
                      <option>Frontend Engineering</option>
                      <option>Backend Development</option>
                      <option>Full-Stack Platform</option>
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
                          className="px-3 py-1.5 font-mono text-xs rounded-sm transition-all duration-150"
                          style={{
                            border: '1px solid',
                            borderColor: formState.budget === b ? 'var(--accent)' : 'var(--border)',
                            background: formState.budget === b ? 'rgba(26,82,255,0.08)' : 'var(--bg)',
                            color: formState.budget === b ? 'var(--accent)' : 'var(--fg-muted)',
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe your goals, timeline, and any specific requirements…"
                      className="w-full px-4 py-3 rounded-sm text-sm outline-none transition-all duration-200 resize-none font-sans"
                      style={{
                        background: 'var(--bg)',
                        border: '1px solid var(--border)',
                        color: 'var(--fg)',
                      }}
                    />
                  </div>

                  <button type="submit" className="cta-primary w-full justify-center">
                    Send Project Brief
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
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          color: 'var(--fg)',
        }}
        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />
    </div>
  )
}

function LuminexisLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
      <polygon points="14,8 20,11 20,17 14,20 8,17 8,11" fill="var(--accent)" opacity="0.3" />
      <circle cx="14" cy="14" r="2" fill="var(--accent)" />
    </svg>
  )
}
