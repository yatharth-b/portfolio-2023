import Header from "./Header/Header";
import GradientComp from "./Gradient/GradientComp";
import "./Hero.css";

export default function Hero() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      <Header />
      <img src="/hero-text.png" className="hero-text"></img>
      <div className="logos">
        <a href="https://github.com/yatharth-b">
          <img src="/github-mark-white.svg" className="logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/yatharth-bhargava/">
          <img src="/linkedin-white.png" className="logo"></img>
        </a>
        <a href="https://twitter.com/yatharthdotdev">
          <img src="/twitter.svg" className="logo"></img>
        </a>
      </div>
    </div>
  );
}
