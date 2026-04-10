import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import Avatar3D from './Avatar3D'
import { personalInfo } from '../../data/portfolio'
import styles from './Hero.module.css'

// Floating cosmic particles bg for hero
function CosmicBg() {
  return (
    <Stars radius={80} depth={50} count={1200} factor={3} saturation={0.4} fade speed={0.6} />
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const { name, role, description, github, linkedin, available, photoUrl, photoPlaceholder } = personalInfo
  const hasPhoto = !photoPlaceholder && !!photoUrl
  const firstName = name.split(' ')[0]
  const lastName = name.split(' ')[1]

  return (
    <section className={styles.hero} id="hero">
      {/* Cosmic canvas bg */}
      <div className={styles.cosmosCanvas}>
        <Canvas camera={{ position: [0, 0, 1], fov: 75 }} gl={{ antialias: false, alpha: true }} style={{ background: 'transparent' }}>
          <CosmicBg />
        </Canvas>
      </div>

      {/* Gradient orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      <div className={styles.inner}>
        {/* LEFT — Text content */}
        <div className={styles.textCol}>
          <motion.div className={styles.statusTag} {...fadeUp(0.2)}>
            <span className={styles.dot} />
            <span>Available for opportunities</span>
          </motion.div>

          <motion.h1 className={styles.name} {...fadeUp(0.4)}>
            <span className={styles.firstName}>{firstName}</span>
            <br />
            <span className={styles.lastName}>{lastName}</span>
          </motion.h1>

          <motion.p className={styles.role} {...fadeUp(0.6)}>
            Full-Stack Developer &amp; <span className={styles.roleAccent}>AI/ML Engineer</span>
          </motion.p>

          <motion.p className={styles.desc} {...fadeUp(0.75)}>
            {description}
          </motion.p>

          <motion.div className={styles.ctas} {...fadeUp(0.9)}>
            <a href="#projects" className="btn-primary">Explore Projects ↗</a>
            <a href={github} target="_blank" rel="noreferrer" className="btn-ghost">GitHub Profile</a>
          </motion.div>

          <motion.div className={styles.socials} {...fadeUp(1.05)}>
            <a href={linkedin} target="_blank" rel="noreferrer" className={styles.socialLink}>
              <LinkedInIcon /> LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className={styles.socialLink}>
              <MailIcon /> Email
            </a>
          </motion.div>
        </div>

        {/* RIGHT — 3D Avatar + passport photo */}
        <motion.div
          className={styles.avatarCol}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Avatar3D photoUrl={photoUrl} hasPhoto={hasPhoto} />

          {/* Passport photo badge — below/beside avatar */}
          <motion.div
            className={styles.passportBadge}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className={styles.passportFrame}>
              {hasPhoto ? (
                <img src={photoUrl} alt="Shristi" className={styles.passportPhoto} />
              ) : (
                <div className={styles.passportFallback}>
                  <span>SC</span>
                  <small>Shristi C.</small>
                </div>
              )}
            </div>
            <div className={styles.passportInfo}>
              <span className={styles.passportName}>Shristi Choudhary</span>
              <span className={styles.passportTitle}>Developer · AI Engineer</span>
              <span className={styles.passportLoc}>📍 India</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className={styles.scrollHint} {...fadeUp(1.4)}>
        <span>Scroll to explore</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
