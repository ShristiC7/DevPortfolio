import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import styles from './Projects.module.css'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      style={{ '--accent': project.color }}
    >
      <div className={styles.cardTop}>
        <div className={styles.icon} style={{ background: project.iconBg }}>{project.icon}</div>
        <div className={styles.cardMeta}>
          {project.statusLabel && <span className={`status-badge ${project.status === 'live' ? 'status-live' : project.status === 'hackathon' ? 'status-hackathon' : 'status-wip'}`}>{project.statusLabel}</span>}
          <div className={styles.links}>
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" title="GitHub" className={styles.linkBtn}>GH</a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" title="Demo" className={styles.linkBtn}>↗</a>}
          </div>
        </div>
      </div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardSub}>{project.subtitle}</p>
      <p className={styles.cardDesc}>{project.description}</p>
      <div className={styles.badgeRow}>
        {project.stack.map(t => <span key={t} className="tech-badge">{t}</span>)}
      </div>
      <div className={styles.accentLine} />
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filters = ['all', 'live', 'hackathon', 'wip']
  const filtered = filter === 'all' ? projects : projects.filter(p => p.status === filter)

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrap}>
        <div className="section-label">03 — Projects</div>
        <h2 className="section-title">Mission <span className="grad-text">Log</span></h2>

        <div className={styles.filterRow}>
          {filters.map(f => (
            <button key={f} className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`} onClick={() => setFilter(f)}>
              {f === 'all' ? 'All Missions' : f === 'live' ? '● Live' : f === 'hackathon' ? '🏆 Hackathon' : '◎ In Dev'}
            </button>
          ))}
        </div>

        <motion.div className={styles.grid} layout>
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </motion.div>
      </div>
    </section>
  )
}
