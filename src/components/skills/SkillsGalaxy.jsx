import { useRef, Suspense, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Stars, Html, Line } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'
import { skills as skillData } from '../../data/portfolio'
import styles from './SkillsGalaxy.module.css'

// Draw the elliptical orbit path as a visible ring
function OrbitRing({ orbitRadius }) {
  const points = useMemo(() => {
    const pts = []
    const segments = 120
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      pts.push(new THREE.Vector3(
        Math.cos(angle) * orbitRadius,
        0,
        Math.sin(angle) * orbitRadius * 0.55
      ))
    }
    return pts
  }, [orbitRadius])

  return (
    <Line
      points={points}
      color="#C4A8FF"
      lineWidth={0.4}
      transparent
      opacity={0.18}
    />
  )
}

// Planet that orbits a central star — with visible name label
function SkillPlanet({ skill, index, total, onHover, onLeave, isHovered }) {
  const planetRef = useRef()
  const groupRef = useRef()
  const orbitRadius = 1.6 + (index % 4) * 0.72
  const orbitSpeed = 0.14 + index * 0.012
  const orbitTilt = (index * 23.5 * Math.PI) / 180
  const startAngle = (index / total) * Math.PI * 2
  const planetSize = 0.13 + skill.level * 0.0018

  // Track whether planet is "in front" of center for label visibility
  const angleRef = useRef(startAngle)

  useFrame((s) => {
    const t = s.clock.getElapsedTime()
    const angle = startAngle + t * orbitSpeed * 0.35
    angleRef.current = angle
    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(angle) * orbitRadius
      groupRef.current.position.y = Math.sin(angle * 0.5) * orbitRadius * Math.sin(orbitTilt) * 0.45
      groupRef.current.position.z = Math.sin(angle) * orbitRadius * 0.55
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01
    }
  })

  const scale = isHovered ? 1.45 : 1

  return (
    <>
      {/* Orbit ring drawn once per unique radius */}
      <group ref={groupRef} scale={[scale, scale, scale]}>
        {/* Planet sphere */}
        <Sphere
          ref={planetRef}
          args={[planetSize, 24, 24]}
          onPointerEnter={(e) => { e.stopPropagation(); onHover(skill) }}
          onPointerLeave={onLeave}
        >
          <meshStandardMaterial
            color={skill.color}
            emissive={skill.color}
            emissiveIntensity={isHovered ? 0.9 : 0.45}
            roughness={0.12}
            metalness={0.65}
          />
        </Sphere>

        {/* Soft glow halo */}
        <Sphere args={[planetSize * 1.7, 10, 10]}>
          <meshStandardMaterial
            color={skill.color}
            transparent
            opacity={isHovered ? 0.2 : 0.1}
            roughness={1}
          />
        </Sphere>

        {/* Always-visible name label via Html — faces camera */}
        <Html
          center
          position={[0, planetSize + 0.18, 0]}
          distanceFactor={5}
          occlude={false}
          style={{ pointerEvents: 'none' }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              color: isHovered ? skill.color : 'rgba(240,232,255,0.82)',
              whiteSpace: 'nowrap',
              textShadow: `0 0 8px ${skill.color}88`,
              transition: 'color 0.25s',
              letterSpacing: '0.03em',
              userSelect: 'none',
            }}
          >
            {skill.name}
          </div>
        </Html>
      </group>
    </>
  )
}

// Deduplicated orbit rings (one per unique radius band)
function OrbitRings() {
  const radii = useMemo(() => {
    const seen = new Set()
    skillData.forEach((_, i) => {
      const r = 1.6 + (i % 4) * 0.72
      seen.add(r)
    })
    return [...seen]
  }, [])

  return (
    <>
      {radii.map((r) => (
        <OrbitRing key={r} orbitRadius={r} />
      ))}
    </>
  )
}

// Central YOU star
function CentralStar() {
  const ref = useRef()
  useFrame((s) => {
    const t = s.clock.getElapsedTime()
    ref.current.rotation.y = t * 0.28
    ref.current.rotation.z = Math.sin(t * 0.5) * 0.08
  })
  return (
    <group>
      {/* Core */}
      <Sphere ref={ref} args={[0.3, 32, 32]}>
        <meshStandardMaterial
          color="#C4A8FF"
          emissive="#8040FF"
          emissiveIntensity={1.8}
          roughness={0}
          metalness={0.2}
        />
      </Sphere>
      {/* Inner glow layer */}
      <Sphere args={[0.52, 16, 16]}>
        <meshStandardMaterial color="#C4A8FF" transparent opacity={0.1} roughness={1} />
      </Sphere>
      {/* Outer haze */}
      <Sphere args={[0.78, 12, 12]}>
        <meshStandardMaterial color="#FFB09A" transparent opacity={0.04} roughness={1} />
      </Sphere>
      {/* YOU label */}
      <Html center position={[0, 0, 0]} distanceFactor={6} style={{ pointerEvents: 'none' }}>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '9px',
          fontWeight: 700,
          color: '#060410',
          letterSpacing: '0.08em',
          userSelect: 'none',
        }}>
          YOU
        </div>
      </Html>
    </group>
  )
}

function Scene({ hoveredName, onHover, onLeave }) {
  return (
    <>
      <ambientLight intensity={0.45} color="#C4A8FF" />
      <pointLight position={[5, 5, 5]} intensity={3} color="#C4A8FF" />
      <pointLight position={[-5, -3, -5]} intensity={2} color="#FFB09A" />
      <pointLight position={[0, 5, -5]} intensity={1.5} color="#7EDDFF" />
      <Stars radius={50} depth={30} count={350} factor={2} saturation={0.4} fade />

      {/* Orbit path rings */}
      <OrbitRings />

      <CentralStar />

      {skillData.map((skill, i) => (
        <SkillPlanet
          key={skill.name}
          skill={skill}
          index={i}
          total={skillData.length}
          onHover={onHover}
          onLeave={onLeave}
          isHovered={hoveredName === skill.name}
        />
      ))}
    </>
  )
}

export default function SkillsGalaxy() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.wrap}>
        <div className="section-label">02 — Skills</div>
        <h2 className="section-title">Skills <span className="grad-text">Galaxy</span></h2>
        <p className={styles.subtitle}>Each planet is a technology orbiting your core. Hover to inspect.</p>

        <div className={styles.canvasWrap}>
          <Canvas
            camera={{ position: [0, 2.5, 7.5], fov: 48 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <Scene
                hoveredName={hovered?.name ?? null}
                onHover={setHovered}
                onLeave={() => setHovered(null)}
              />
            </Suspense>
          </Canvas>

          <AnimatePresence>
            {hovered && (
              <motion.div
                className={styles.tooltip}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                key={hovered.name}
              >
                <span className={styles.tooltipIcon}>{hovered.icon}</span>
                <div className={styles.tooltipBody}>
                  <strong>{hovered.name}</strong>
                  <span>{hovered.desc}</span>
                  <div className={styles.levelBar}>
                    <div
                      className={styles.levelFill}
                      style={{ width: `${hovered.level}%`, background: hovered.color }}
                    />
                  </div>
                  <span className={styles.levelPct}>{hovered.level}% proficiency</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Skill pills grid */}
        <div className={styles.pillGrid}>
          {['Frontend', 'Backend', 'Database', 'Tools', 'Language', 'AI'].map(cat => {
            const catSkills = skillData.filter(s => s.category === cat)
            if (!catSkills.length) return null
            return (
              <div key={cat} className={styles.pillGroup}>
                <span className={styles.catLabel}>{cat}</span>
                <div className={styles.pills}>
                  {catSkills.map(s => (
                    <span
                      key={s.name}
                      className={styles.pill}
                      style={{ '--pill-color': s.color }}
                    >
                      {s.icon} {s.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
