import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import localFont from 'next/font/local';
import About from './components/About/About';
import Work from './components/Work/Work';
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './fonts/CabinetGrotesk-Variable.ttf', variable: '--font-cabinet' });
const myFont2 = localFont({ src: './fonts/Druk.ttf', variable: '--font-druk' });

export default function Home() {
  return (
    <div className={`${myFont.variable} ${myFont2.variable}`}>
      <Hero />
      <About />
      <Work />
    </div>
  )
}
