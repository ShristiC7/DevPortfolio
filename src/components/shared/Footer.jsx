import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Designed &amp; Developed by <strong>Shristi Choudhary</strong> — Built with ✦ and cosmic energy</span>
      <span className={styles.year}>© {new Date().getFullYear()}</span>
    </footer>
  )
}
