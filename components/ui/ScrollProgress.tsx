'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

const ACTS = [
  { id: 'act1', label: '01' },
  { id: 'act2', label: '02' },
  { id: 'act3', label: '03' },
  { id: 'act4', label: '04' },
  { id: 'act5', label: '05' },
  { id: 'act6', label: '06' },
]

export default function ScrollProgress({ progress }: { progress: number }) {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lineRef.current) {
      gsap.to(lineRef.current, {
        scaleY: progress,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }, [progress])

  const activeAct = Math.min(Math.floor(progress * 6), 5)

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      {/* Track */}
      <div className="relative w-px h-48 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
        <div
          ref={lineRef}
          className="absolute top-0 left-0 right-0 origin-top rounded-full"
          style={{ height: '100%', background: 'var(--accent)', transform: 'scaleY(0)' }}
        />
      </div>

      {/* Act dots */}
      {ACTS.map((act, i) => (
        <button
          key={act.id}
          onClick={() => document.getElementById(act.id)?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-1.5 group"
          title={`Act ${act.label}`}
        >
          <span
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              background: i === activeAct ? 'var(--accent)' : 'var(--border)',
              transform: i === activeAct ? 'scale(1.5)' : 'scale(1)',
              boxShadow: i === activeAct ? '0 0 6px var(--glow)' : 'none',
            }}
          />
          <span
            className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: 'var(--fg-muted)' }}
          >
            {act.label}
          </span>
        </button>
      ))}
    </div>
  )
}
