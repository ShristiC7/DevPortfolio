import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { personalInfo } from '../../data/portfolio'
import styles from './About.module.css'

function FloatingBlob() {
  const ref = useRef()
  useFrame((s) => {
    const t = s.clock.getElapsedTime()
    ref.current.rotation.x = t * 0.32
    ref.current.rotation.y = t * 0.48
  })
  return (
    <Float speed={0.9} rotationIntensity={0.35} floatIntensity={0.7}>
      <Sphere ref={ref} args={[1.05, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#7840CC"
          distort={0.42}
          speed={2.2}
          roughness={0.08}
          metalness={0.55}
          transparent
          opacity={0.88}
          emissive="#5020A0"
          emissiveIntensity={0.6}
        />
      </Sphere>
      {/* Inner highlight sphere for depth */}
      <Sphere args={[0.6, 32, 32]} position={[-0.2, 0.2, 0.3]}>
        <meshStandardMaterial
          color="#C4A8FF"
          transparent
          opacity={0.18}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  )
}

function BlobScene() {
  return (
    <>
      {/* Brighter, more directional lights so the blob has visible 3D shading */}
      <ambientLight intensity={0.2} color="#C4A8FF" />
      <pointLight position={[3, 4, 4]} intensity={5} color="#C4A8FF" />
      <pointLight position={[-3, -3, -2]} intensity={3} color="#FFB09A" />
      <pointLight position={[0, -4, 3]} intensity={2} color="#7EDDFF" />
      <spotLight position={[5, 5, 5]} intensity={4} color="#ffffff" angle={0.4} penumbra={0.5} />
      <FloatingBlob />
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
          {/* 3D blob + rocket overlay */}
          <motion.div
            className={styles.blobCol}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Canvas + rocket icon layered on top */}
            <div className={styles.blobWrap}>
              <div className={styles.blobCanvas}>
                <Canvas
                  camera={{ position: [0, 0, 3.2], fov: 42 }}
                  gl={{ antialias: true, alpha: true }}
                  style={{ background: 'transparent' }}
                >
                  <Suspense fallback={null}>
                    <BlobScene />
                  </Suspense>
                </Canvas>
              </div>

              {/* Rocket icon — absolutely centered over the blob */}
              <div className={styles.rocketOverlay}>
                <span className={styles.rocketIcon}>🚀</span>
              </div>

              {/* Decorative ring around blob */}
              <div className={styles.blobRing} />
            </div>

            {/* Stats below blob */}
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

          {/* Text content */}
          <motion.div
            className={styles.textCol}
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
                <motion.span
                  key={i}
                  className={styles.chip}
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
