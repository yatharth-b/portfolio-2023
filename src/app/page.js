import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import localFont from 'next/font/local';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Noto_Color_Emoji } from 'next/font/google';
import './globals.css'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './fonts/CabinetGrotesk-Variable.ttf', variable: '--font-cabinet' });
const myFont2 = localFont({ src: './fonts/Druk.ttf', variable: '--font-druk' });
const myFont3 = Noto_Color_Emoji({ variable: '--font-emoji', subsets: ['emoji'], weight: '400' })

export default function Home() {
  return (
    <div className={`${myFont.variable} ${myFont2.variable} ${myFont3.variable}`}>
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}
