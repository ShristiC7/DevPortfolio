import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { githubStats } from '../../data/portfolio'
import styles from './OpenSource.module.css'

function Heatmap() {
  const weeks = 52, days = 7
  const cells = []
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const r = Math.random()
      let lvl = 0
      if (r > 0.65) lvl = 1
      if (r > 0.8) lvl = 2
      if (r > 0.9) lvl = 3
      if (r > 0.96) lvl = 4
      if (w > 44 && r > 0.5) lvl = Math.min(4, lvl + 1)
      cells.push({ w, d, lvl })
    }
  }
  return (
    <div className={styles.heatmap}>
      <p className={styles.hmLabel}>CONTRIBUTION HEATMAP — @{githubStats.username}</p>
      <div className={styles.hmGrid}>
        {Array.from({ length: weeks }, (_, w) => (
          <div key={w} className={styles.hmCol}>
            {Array.from({ length: days }, (_, d) => {
              const cell = cells.find(c => c.w === w && c.d === d)
              return <div key={d} className={styles.hmCell} data-level={cell?.lvl || 0} />
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function OpenSource() {
  const stats = [
    { n: githubStats.repos, label: 'Repositories' },
    { n: githubStats.contributions, label: 'Contributions' },
    { n: githubStats.languages, label: 'Languages' },
    { n: githubStats.streak, label: 'Streak' },
  ]
  return (
    <section id="opensource" className={styles.section}>
      <div className={styles.wrap}>
        <div className="section-label">06 — Open Source</div>
        <h2 className="section-title">Contribution <span className="grad-text">Cosmos</span></h2>
        <div className={styles.statsRow}>
          {stats.map((s, i) => (
            <motion.div key={i} className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className={styles.statNum}>{s.n}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </motion.div>
          ))}
        </div>
        <Heatmap />
      </div>
    </section>
  )
}
