import styles from './Work.module.css'

export default function Work() {

  const cards = [
    {
      title: 'GT Scheduler',
      body: 'Open-source Scheduling tool used by 24k Tech students monthly. Maintained the website and implemented new features.',
      image: '/gt-sched.png',
      link: 'https://halocrypt.com'
    }, {
      title: 'ImmerseGT',
      body: 'Played a pivotal role in organzining and establishing Georgia Tech’s first XR hackathon.',
      image: '/immerse.png',
    }, {
      title: 'Halocrypt',
      body: "Established India’s largest cryptic hunt with 5000+ participants over 2 iterations.",
      image: '/halo.webp'
    }, {
      title: 'Duality',
      body: 'Chrome extension that reduced bias by suggesting articles with opposite sentiments to the one the user is reading.',
      image: '/duality.png'
    }, {
      title: 'Cantus',
      body: 'A natural language interface for Spotify built using OpenAI APIs.',
      image: '/cantus.png'
    }, {
      title: 'CSGO Aimbot',
      body: 'CSGO aimbot made with tensorflow object detection API and YOLOv5.',
      image: '/aimbot.jpg'
    }
  ]

  return (
    <div className={styles.work}>
      <div className={styles.WorkHeading}>SELECTED WORK</div>
      <div className={styles.CardGrid}>
        {
          cards.map((card, index) => {
            return (
              <div className={styles.CardContainer}>
                <img src={card.image} className={styles.CardContainerBG}></img>
                <div className={styles.CardImage} style={{
                  backgroundImage: `url('${card.image}')`
                }}>
                  <h2>{card.title}</h2>
                  <p className={styles.CardBody}>{card.body}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={styles.WorkButtons}>
        <a className={`${styles.WorkButton} ${styles.beige}`} href='/resume.pdf'>
        <span className='emoji'>📝</span> Resume
        </a>
        <a className={`${styles.WorkButton} ${styles.purple}`} href='/dev'>
          <span className="emoji">💻</span> Dev Work
        </a>
        <a className={`${styles.WorkButton} ${styles.pink}`} href='/design'>
        <span className="emoji">🖌️</span> Design Work
        </a>
      </div>
    </div>
  )
}