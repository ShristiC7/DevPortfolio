import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { personalInfo } from '../../data/portfolio'
import styles from './About.module.css'

function FloatingBlob({ position, color, speed, distort }) {
  const ref = useRef()
  useFrame((s) => {
    ref.current.rotation.x = s.clock.getElapsedTime() * speed * 0.4
    ref.current.rotation.y = s.clock.getElapsedTime() * speed * 0.6
  })
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={ref} args={[1, 32, 32]} position={position}>
        <MeshDistortMaterial color={color} distort={distort} speed={2} roughness={0.1} metalness={0.3} transparent opacity={0.7} emissive={color} emissiveIntensity={0.3} />
      </Sphere>
    </Float>
  )
}

function BlobScene() {
  return (
    <>
      <ambientLight intensity={0.5} color="#C4A8FF" />
      <pointLight position={[3, 3, 3]} intensity={2} color="#C4A8FF" />
      <pointLight position={[-3, -3, -3]} intensity={1.5} color="#FFB09A" />
      <FloatingBlob position={[0, 0, 0]} color="#9060D0" speed={0.8} distort={0.45} />
    </>
  )
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.wrap}>
        <div className="section-label">01 — About</div>
        <h2 className="section-title">Mission <span className="grad-text">Briefing</span></h2>

        <div className={styles.grid}>
          {/* 3D blob avatar */}
          <motion.div className={styles.blobCol}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.blobCanvas}>
              <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
                <Suspense fallback={null}>
                  <BlobScene />
                </Suspense>
              </Canvas>
            </div>
            {/* Stats ring */}
            <div className={styles.statsRing}>
              {[
                { n: '15+', l: 'Projects' },
                { n: '3+', l: 'Years' },
                { n: '8+', l: 'Tech Stack' },
              ].map((s, i) => (
                <div key={i} className={styles.miniStat}>
                  <span className={styles.miniNum}>{s.n}</span>
                  <span className={styles.miniLabel}>{s.l}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div className={styles.textCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className={styles.para}>
              Hello! I'm <strong>Shristi</strong>, a passionate full-stack developer focused on building impactful web applications. I enjoy solving problems with code and am continuously learning new technologies.
            </p>
            <p className={styles.para}>
              I operate at the intersection of <strong>AI/ML</strong> and modern web development — building systems that are not just functional, but genuinely intelligent and beautiful.
            </p>
            <p className={styles.para}>
              Currently exploring the frontiers of AI-powered applications — from mental health platforms to biodiversity analysis tools. Every project is a new planet to discover.
            </p>
            <div className={styles.chips}>
              {personalInfo.funFacts.map((f, i) => (
                <motion.span key={i} className={styles.chip}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                >
                  {f.icon} {f.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
