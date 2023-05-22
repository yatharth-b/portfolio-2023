import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>made with <span className="emoji">☕</span> and <span className="emoji">🌯</span></div>
    </div>
  )
}