import "./Hero.css";
import bgVideo from "./assets/novatra-bg.mp4";
import maskPng from "./assets/masks/logo-cutout-new.png";

export default function Hero() {
  return (
    <section className="hero">
      <video className="bg" src={bgVideo} autoPlay muted loop playsInline />

      <div className="card">
        <div className="title">
          <p>
            WE ARE <span className="highlight">NOVATRA STUDIO</span>. WE DESIGN
            AND DEVELOP WEBSITES.
          </p>
        </div>
      </div>
      <video
        className="logo-video"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <img className="mask-overlay" src={maskPng} alt="" aria-hidden="true" />
    </section>
  );
}
