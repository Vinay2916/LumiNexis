'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Act1Chaos from '@/components/sections/Act1Chaos'
import Act2Strategy from '@/components/sections/Act2Strategy'
import Act3Design from '@/components/sections/Act3Design'
import Act4Engineering from '@/components/sections/Act4Engineering'
import Act5Impact from '@/components/sections/Act5Impact'
import Act6Future from '@/components/sections/Act6Future'
import ProcessSection from '@/components/sections/ProcessSection'
import TechStackSection from '@/components/sections/TechStackSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

const MainCanvas = dynamic(() => import('@/components/canvas/MainCanvas'), {
  ssr: false,
  loading: () => null,
})

export default function LuminexisPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const scrollTop   = window.scrollY
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress    = totalHeight > 0 ? Math.min(scrollTop / totalHeight, 1) : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    ScrollTrigger.refresh()

    return () => {
      window.removeEventListener('scroll', update)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <>
      <MainCanvas scrollProgress={scrollProgress} />
      <Navigation />
      <ScrollProgress progress={scrollProgress} />

      <main ref={mainRef} className="scroll-content">
        {/* Act 1 — Hero */}
        <Act1Chaos />

        {/* Act 2 — Strategy + Authority */}
        <Act2Strategy />

        {/* Process — Discovery → Launch */}
        <ProcessSection />

        {/* Act 3 — Services / Design */}
        <Act3Design />

        {/* Tech Stack */}
        <TechStackSection />

        {/* Act 4 — Engineering / Metrics */}
        <Act4Engineering />

        {/* Act 5 — Work / Case Studies */}
        <Act5Impact />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Act 6 — Future + Contact */}
        <Act6Future />
      </main>
    </>
  )
}

