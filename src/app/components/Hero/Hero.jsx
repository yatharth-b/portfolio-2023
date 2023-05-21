import Header from "./Header/Header"
import GradientComp from "./Gradient/GradientComp"
import "./Hero.css"


export default function Hero() {
  return (
    <div className="hero" style={{
      backgroundImage: "url('/hero-bg.png')",
    }}>
      <Header />
      <img src="/hero-text.png" className="hero-text"></img>
      
    </div>
  )
}