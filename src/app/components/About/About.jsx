import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.AboutTop}>
        <div className={styles.AboutLeft}>
          <h1 className={styles.AboutHeading}>ABOUT ME</h1>
          <p className={styles.AboutBody}>👋 Hi! I’m Yatharth, a creative fueled by a knack for developing and designing innovative solutions. I’m currently excited about Systems, Generative AI, and the web. I love hackathons, all-nighters, and in general anything that shoots electricity in my veins. In my free time, you can find me fighting my valorant addiction, playing tennis or making a hype trailer. <br></br>ヽ(⌐■_■)ノ♪♬</p>
        </div>
        <div className={styles.AboutImages}>
          <img src="/patd.png" className={styles.patd}></img>
          <img src="/pig.png" className={styles.pig}></img>
          <img src='/chamber.webp' className={styles.chamber}></img>
        </div>
      </div>
      <div className={styles.AboutBottom}>
        <p>Bee</p>
        <div className={styles.GTStack}>
          <div className={styles.currently}>✨Currently building at✨</div>
          <div className={styles.GT}>GEORGIA TECH</div>
        </div>
      </div>

    </div>
  )
}