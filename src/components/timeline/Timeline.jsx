import { motion } from 'framer-motion'
import { timeline } from '../../data/portfolio'
import styles from './Timeline.module.css'

export default function Timeline() {
  return (
    <section id="timeline" className={styles.section}>
      <div className={styles.wrap}>
        <div className="section-label">04 — Journey</div>
        <h2 className="section-title">Learning <span className="grad-text">Trajectory</span></h2>
        <p className={styles.sub}>Every milestone, a star mapped in the constellation of growth.</p>
        <div className={styles.track}>
          {timeline.map((item, i) => (
            <motion.div key={i} className={styles.item}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={styles.dotWrap}>
                <div className={styles.dot} style={{ borderColor: item.color, boxShadow: `0 0 14px ${item.color}55` }} />
                {i < timeline.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.content}>
                <span className={styles.year}>{item.year}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
