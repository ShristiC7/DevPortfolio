import { motion } from 'framer-motion'
import { hackathons } from '../../data/portfolio'
import styles from './Hackathons.module.css'

export default function Hackathons() {
  return (
    <section id="hackathons" className={styles.section}>
      <div className={styles.wrap}>
        <div className="section-label">05 — Missions</div>
        <h2 className="section-title">Hackathon <span className="grad-text">Chronicles</span></h2>
        <div className={styles.grid}>
          {hackathons.map((h, i) => (
            <motion.div key={i} className={styles.card}
              style={{ '--hc': h.color }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.top}>
                <span className={styles.icon}>{h.icon}</span>
                <span className={`status-badge ${h.status === 'live' ? 'status-live' : h.status === 'hackathon' ? 'status-hackathon' : 'status-wip'}`}>{h.result}</span>
              </div>
              <h3 className={styles.name}>{h.name}</h3>
              <p className={styles.proj}>{h.project}</p>
              <p className={styles.role}>{h.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
