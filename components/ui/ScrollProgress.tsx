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
      <div
        className="relative w-px h-48 rounded-full overflow-hidden"
        style={{ background: 'rgba(149,1,1,0.25)' }}
      >
        <div
          ref={lineRef}
          className="absolute top-0 left-0 right-0 origin-top rounded-full"
          style={{
            height: '100%',
            background: 'linear-gradient(180deg, #FF0000 0%, #950101 100%)',
            transform: 'scaleY(0)',
            boxShadow: '0 0 8px rgba(255,0,0,0.6)',
          }}
        />
      </div>

      {/* Act dots */}
      {ACTS.map((act, i) => (
        <button
          key={act.id}
          onClick={() => document.getElementById(act.id)?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 group"
          title={`Act ${act.label}`}
        >
          <span
            className="rounded-full transition-all duration-300"
            style={{
              width:     i === activeAct ? '8px' : '6px',
              height:    i === activeAct ? '8px' : '6px',
              background: i === activeAct ? '#FF0000' : 'rgba(149,1,1,0.5)',
              boxShadow:  i === activeAct ? '0 0 10px rgba(255,0,0,0.8), 0 0 20px rgba(255,0,0,0.3)' : 'none',
            }}
          />
          <span
            className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ color: 'var(--accent)' }}
          >
            {act.label}
          </span>
        </button>
      ))}
    </div>
  )
}
