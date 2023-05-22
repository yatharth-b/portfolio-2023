import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.ContactHeading}>CONTACT</div>
      <div className={styles.ContactBody}><u>hello@yatharth.dev</u></div>
      <div className={styles.logos}>
        <a href="https://github.com/yatharth-b">
          <img src="/github-mark-dark.svg" className={styles.logo}></img>
        </a>
        <a href="https://www.linkedin.com/in/yatharth-bhargava/">
          <img src="/linkedin.png" className={styles.logo}></img>
        </a>
        <a href="https://twitter.com/yatharthdotdev">
          <img src="/twitter_dark.svg" className={styles.logo}></img>
        </a>
      </div>
    </div>
  )
}