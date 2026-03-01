'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { useTheme } from '@/components/providers/ThemeProvider'

const NAV_LINKS = [
  { label: 'Work',        href: '#work' },
  { label: 'Services',    href: '#act3' },
  { label: 'Process',     href: '#process' },
  { label: 'Engineering', href: '#act4' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
    )

    // Scroll shadow
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? theme === 'dark'
            ? 'rgba(5,10,20,0.85)'
            : 'rgba(248,250,252,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3 group">
          <LuminexisLogo />
          <span className="font-semibold text-sm tracking-wide text-fg group-hover:text-accent transition-colors">
            Luminexis
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-mono text-xs tracking-widest uppercase transition-colors hover:text-accent"
              style={{ color: 'var(--fg-muted)' }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-sm transition-all hover:border-accent"
            style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark'
              ? <SunIcon />
              : <MoonIcon />
            }
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:flex cta-primary text-xs py-2.5 px-5"
          >
            Start a Project
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center"
            style={{ color: 'var(--fg)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          background: theme === 'dark' ? 'rgba(5,10,20,0.95)' : 'rgba(248,250,252,0.95)',
          backdropFilter: 'blur(16px)',
          borderBottom: menuOpen ? '1px solid var(--border)' : 'none',
        }}
      >
        <div className="px-6 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block font-mono text-xs tracking-widest uppercase w-full text-left py-2 hover:text-accent transition-colors"
              style={{ color: 'var(--fg-muted)' }}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo('#contact')} className="cta-primary w-full justify-center text-xs py-3">
            Start a Project
          </button>
        </div>
      </div>
    </nav>
  )
}

function LuminexisLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
      <polygon points="14,8 20,11 20,17 14,20 8,17 8,11" fill="var(--accent)" opacity="0.3" />
      <circle cx="14" cy="14" r="2" fill="var(--accent)" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      {open ? (
        <>
          <line x1="3" y1="3" x2="15" y2="15"/>
          <line x1="15" y1="3" x2="3" y2="15"/>
        </>
      ) : (
        <>
          <line x1="3" y1="5" x2="15" y2="5"/>
          <line x1="3" y1="9" x2="15" y2="9"/>
          <line x1="3" y1="13" x2="15" y2="13"/>
        </>
      )}
    </svg>
  )
}
