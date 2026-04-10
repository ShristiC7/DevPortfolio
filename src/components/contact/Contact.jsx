import { motion } from 'framer-motion'
import { personalInfo } from '../../data/portfolio'
import styles from './Contact.module.css'

const links = [
  { label: 'LinkedIn', href: personalInfo.linkedin, icon: '💼', external: true },
  { label: 'GitHub', href: personalInfo.github, icon: '🐙', external: true },
  { label: 'Email', href: `mailto:${personalInfo.email}`, icon: '✉️', external: false },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <div className="section-label" style={{ justifyContent: 'center' }}>07 — Contact</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Open <span className="grad-text">Comms</span></h2>
        <motion.p className={styles.desc}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Whether you're a recruiter, collaborator, or fellow cosmic explorer — the transmission channel is open.
        </motion.p>
        <div className={styles.linkRow}>
          {links.map((l, i) => (
            <motion.a key={l.label} href={l.href} target={l.external ? '_blank' : undefined} rel="noreferrer" className={styles.contactLink}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <span>{l.icon}</span> {l.label}
            </motion.a>
          ))}
          <motion.a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-primary"
            style={{ borderRadius: '50px' }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
            Download Resume ↓
          </motion.a>
        </div>
      </div>
    </section>
  )
}
