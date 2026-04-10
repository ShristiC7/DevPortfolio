import { useRef, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Sphere, Float, Stars, Html } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'
import { skills as skillData } from '../../data/portfolio'
import styles from './SkillsGalaxy.module.css'

// Planet that orbits a central star
function SkillPlanet({ skill, index, total, onHover, onLeave }) {
  const ref = useRef()
  const groupRef = useRef()
  const orbitRadius = 1.4 + (index % 4) * 0.7
  const orbitSpeed = 0.18 + index * 0.015
  const orbitTilt = (index * 23.5 * Math.PI) / 180
  const startAngle = (index / total) * Math.PI * 2

  useFrame((s) => {
    const t = s.clock.getElapsedTime()
    const angle = startAngle + t * orbitSpeed * 0.4
    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(angle) * orbitRadius
      groupRef.current.position.y = Math.sin(angle * 0.5) * orbitRadius * Math.sin(orbitTilt) * 0.5
      groupRef.current.position.z = Math.sin(angle) * orbitRadius * 0.55
    }
    if (ref.current) ref.current.rotation.y += 0.012
  })

  const color = new THREE.Color(skill.color)

  return (
    <group ref={groupRef}>
      <Sphere
        ref={ref}
        args={[0.13 + skill.level * 0.002, 24, 24]}
        onPointerEnter={(e) => { e.stopPropagation(); onHover(skill) }}
        onPointerLeave={onLeave}
      >
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={0.5}
          roughness={0.15}
          metalness={0.6}
        />
      </Sphere>
      {/* Glow halo */}
      <Sphere args={[0.22 + skill.level * 0.002, 12, 12]}>
        <meshStandardMaterial color={skill.color} transparent opacity={0.12} roughness={1} />
      </Sphere>
    </group>
  )
}

// Central YOU star
function CentralStar() {
  const ref = useRef()
  useFrame((s) => {
    const t = s.clock.getElapsedTime()
    ref.current.rotation.y = t * 0.3
    ref.current.rotation.z = Math.sin(t * 0.5) * 0.1
  })
  return (
    <group>
      <Sphere ref={ref} args={[0.32, 32, 32]}>
        <meshStandardMaterial color="#C4A8FF" emissive="#8040FF" emissiveIntensity={1.5} roughness={0} metalness={0.3} />
      </Sphere>
      <Sphere args={[0.55, 16, 16]}>
        <meshStandardMaterial color="#C4A8FF" transparent opacity={0.07} roughness={1} />
      </Sphere>
      <Sphere args={[0.75, 12, 12]}>
        <meshStandardMaterial color="#FFB09A" transparent opacity={0.04} roughness={1} />
      </Sphere>
    </group>
  )
}

function Scene({ onHover, onLeave }) {
  return (
    <>
      <ambientLight intensity={0.4} color="#C4A8FF" />
      <pointLight position={[5, 5, 5]} intensity={3} color="#C4A8FF" />
      <pointLight position={[-5, -3, -5]} intensity={2} color="#FFB09A" />
      <pointLight position={[0, 5, -5]} intensity={1.5} color="#7EDDFF" />
      <Stars radius={50} depth={30} count={400} factor={2} saturation={0.4} fade />
      <CentralStar />
      {skillData.map((skill, i) => (
        <SkillPlanet key={skill.name} skill={skill} index={i} total={skillData.length} onHover={onHover} onLeave={onLeave} />
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
          <Canvas camera={{ position: [0, 2, 6.5], fov: 50 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
            <Suspense fallback={null}>
              <Scene onHover={setHovered} onLeave={() => setHovered(null)} />
            </Suspense>
          </Canvas>

          <AnimatePresence>
            {hovered && (
              <motion.div className={styles.tooltip}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                key={hovered.name}
              >
                <span className={styles.tooltipIcon}>{hovered.icon}</span>
                <div>
                  <strong>{hovered.name}</strong>
                  <span>{hovered.desc}</span>
                  <div className={styles.levelBar}>
                    <div className={styles.levelFill} style={{ width: `${hovered.level}%`, background: hovered.color }} />
                  </div>
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
                    <span key={s.name} className={styles.pill} style={{ '--pill-color': s.color }}>
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
