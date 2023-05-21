import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import localFont from 'next/font/local';
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './fonts/CabinetGrotesk-Variable.ttf' });

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  )
}
