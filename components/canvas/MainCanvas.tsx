'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei'
import * as THREE from 'three'

/* ─── Shared scroll state ─────────────────────────── */
interface CanvasProps {
  scrollProgress: number   // 0 → 1 across all 6 acts
}

/* ─── Particle Field (Act 1 — Chaos) ─────────────── */
function ParticleField({ progress }: { progress: number }) {
  const ref = useRef<THREE.Points>(null!)
  const count = 350

  const { chaosPos, stablePos } = useMemo(() => {
    const chaos  = new Float32Array(count * 3)
    const stable = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      chaos[i * 3]     = (Math.random() - 0.5) * 22
      chaos[i * 3 + 1] = (Math.random() - 0.5) * 22
      chaos[i * 3 + 2] = (Math.random() - 0.5) * 12
      const col = Math.floor(i % 20)
      const row = Math.floor(i / 20)
      stable[i * 3]     = (col / 19) * 14 - 7
      stable[i * 3 + 1] = (row / 19) * 9  - 4.5
      stable[i * 3 + 2] = 0
    }
    return { chaosPos: chaos, stablePos: stable }
  }, [])

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(chaosPos), 3))
    return g
  }, [chaosPos])

  useFrame((state, delta) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const positions = ref.current.geometry.attributes.position.array as Float32Array
    const t2 = Math.min(progress / 0.16, 1)

    for (let i = 0; i < count; i++) {
      const cx = chaosPos[i * 3]
      const cy = chaosPos[i * 3 + 1]
      const cz = chaosPos[i * 3 + 2]
      const sx = stablePos[i * 3]
      const sy = stablePos[i * 3 + 1]
      const jitter = (1 - t2) * Math.sin(t * 2.2 + i * 0.8) * 0.07
      positions[i * 3]     = cx + (sx - cx) * t2 + jitter
      positions[i * 3 + 1] = cy + (sy - cy) * t2 + jitter * 0.7
      positions[i * 3 + 2] = cz * (1 - t2)
    }
    ref.current.geometry.attributes.position.needsUpdate = true
    ref.current.rotation.y = t * 0.018 * (1 - Math.min(progress / 0.1, 1))
  })

  const opacity = progress < 0.32 ? 1 : Math.max(0, 1 - (progress - 0.32) / 0.08)
  if (opacity <= 0) return null

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.08}
        color="#FF0000"
        transparent
        opacity={opacity * 0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

/* ─── Wireframe Grid (Act 2) ─────────────────────── */
function WireframeGrid({ progress }: { progress: number }) {
  const ref = useRef<THREE.Mesh>(null!)
  const enter = Math.max(0, Math.min((progress - 0.12) / 0.1, 1))
  const exit  = progress > 0.30 ? Math.max(0, 1 - (progress - 0.30) / 0.08) : 1
  const opacity = enter * exit

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.28) * 0.08
    ref.current.rotation.z = state.clock.elapsedTime * 0.035
  })

  if (opacity <= 0.01) return null

  return (
    <mesh ref={ref} scale={[1 + enter * 0.3, 1 + enter * 0.3, 1]}>
      <planeGeometry args={[16, 10, 12, 8]} />
      <meshBasicMaterial
        color="#950101"
        wireframe
        transparent
        opacity={opacity * 0.22}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

/* ─── Floating UI Planes (Act 3 — Design) ───────── */
function FloatingPlanes({ progress }: { progress: number }) {
  const enter = Math.max(0, Math.min((progress - 0.33) / 0.1, 1))
  const exit  = progress > 0.50 ? Math.max(0, 1 - (progress - 0.50) / 0.08) : 1
  const opacity = enter * exit
  if (opacity <= 0.01) return null

  const planes = [
    { pos: [-3, 1.2, -1]   as [number,number,number], rot: [0.15, 0.3, 0]    as [number,number,number], color: '#FF0000', w: 3.2, h: 1.8 },
    { pos: [2.5, -0.5, -0.5] as [number,number,number], rot: [-0.1, -0.25, 0]  as [number,number,number], color: '#950101', w: 2.8, h: 1.6 },
    { pos: [-1, -1.8, 0.5] as [number,number,number], rot: [0.2, 0.1, 0.05]  as [number,number,number], color: '#FF3333', w: 2.4, h: 1.4 },
    { pos: [3.5, 1.8, -2]  as [number,number,number], rot: [0.05, -0.2, 0]   as [number,number,number], color: '#CC0000', w: 2.0, h: 1.2 },
  ]

  return (
    <group>
      {planes.map((p, i) => (
        <Float key={i} speed={1.2 + i * 0.3} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh position={p.pos} rotation={p.rot}>
            <planeGeometry args={[p.w, p.h]} />
            <meshBasicMaterial color={p.color} wireframe transparent opacity={opacity * 0.28} side={THREE.DoubleSide} />
          </mesh>
          <mesh position={p.pos} rotation={p.rot}>
            <planeGeometry args={[p.w, p.h]} />
            <meshStandardMaterial color={p.color} transparent opacity={opacity * 0.035} side={THREE.DoubleSide} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

/* ─── Node Network (Act 4 — Engineering) ─────────── */
function NodeNetwork({ progress }: { progress: number }) {
  const enter  = Math.max(0, Math.min((progress - 0.50) / 0.1, 1))
  const exit   = progress > 0.66 ? Math.max(0, 1 - (progress - 0.66) / 0.08) : 1
  const opacity = enter * exit

  const nodeCount = 14
  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }, (_, i) => ({
      pos: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
      connections: [] as number[],
    }))
  }, [])

  // build connections
  const edges = useMemo(() => {
    const pairs: [number, number][] = []
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = nodes[i].pos[0] - nodes[j].pos[0]
        const dy = nodes[i].pos[1] - nodes[j].pos[1]
        const dz = nodes[i].pos[2] - nodes[j].pos[2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 4.5) pairs.push([i, j])
      }
    }
    return pairs
  }, [nodes])

  const lineGeometries = useMemo(() => {
    return edges.map(([i, j]) => {
      const points = [new THREE.Vector3(...nodes[i].pos), new THREE.Vector3(...nodes[j].pos)]
      const g = new THREE.BufferGeometry().setFromPoints(points)
      return g
    })
  }, [edges, nodes])

  const pulseMaterial = useRef<THREE.MeshBasicMaterial>(null!)

  useFrame(({ clock }) => {
    if (pulseMaterial.current) {
      pulseMaterial.current.opacity = opacity * (0.2 + 0.2 * Math.sin(clock.elapsedTime * 2))
    }
  })

  if (opacity <= 0.01) return null

  return (
    <group>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <sphereGeometry args={[0.12, 6, 6]} />
          <meshBasicMaterial ref={i === 0 ? pulseMaterial : undefined} color="#FF0000" transparent opacity={opacity * 0.45} />
        </mesh>
      ))}
      {lineGeometries.map((g, i) => {
        const lineObj = new THREE.Line(g, new THREE.LineBasicMaterial({ color: '#950101', transparent: true, opacity: opacity * 0.15 }))
        return <primitive key={i} object={lineObj} />
      })}
    </group>
  )
}

/* ─── Stable Orb (Acts 5 + 6) ───────────────────── */
function StableOrb({ progress }: { progress: number }) {
  const enter  = Math.max(0, Math.min((progress - 0.65) / 0.1, 1))
  const opacity = enter
  if (opacity <= 0.01) return null

  const scale = 1 + (progress - 0.65) * 0.35

  return (
    <Float speed={0.8} floatIntensity={0.3} rotationIntensity={0.15}>
      <Sphere args={[2, 32, 32]} scale={scale}>
        <MeshDistortMaterial
          color="#FF0000"
          attach="material"
          distort={0.3}
          speed={1.8}
          roughness={0.05}
          metalness={0.85}
          transparent
          opacity={opacity * 0.07}
          wireframe={false}
        />
      </Sphere>
      <Sphere args={[2.06, 16, 16]} scale={scale}>
        <meshBasicMaterial color="#CC0000" wireframe transparent opacity={opacity * 0.05} />
      </Sphere>
    </Float>
  )
}

/* ─── Main Canvas ────────────────────────────────── */
export default function MainCanvas({ scrollProgress }: CanvasProps) {
  const bgColor = new THREE.Color('#000000')

  return (
    <div id="luminexis-canvas" aria-hidden="true">
      <Canvas
        camera={{ fov: 55, near: 0.1, far: 100, position: [0, 0, 8] }}
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance', stencil: false }}
        dpr={1}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]}  intensity={1.8} color="#FF0000" />
        <pointLight position={[-8, -6, -5]}  intensity={0.8} color="#950101" />
        <pointLight position={[0, -10, 5]}   intensity={0.4} color="#3D0000" />

        <ParticleField  progress={scrollProgress} />
        <WireframeGrid  progress={scrollProgress} />
        <FloatingPlanes progress={scrollProgress} />
        <NodeNetwork    progress={scrollProgress} />
        <StableOrb      progress={scrollProgress} />

        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
