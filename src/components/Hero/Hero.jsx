import Header from "./Header/Header"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <Header />
      <img src="/hero-text.png" className="hero-text"></img>
    </div>
  )
}