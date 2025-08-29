import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="bg"
        src="/assets/novatra-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* 白色卡片 */}
      <div className="card">
        <div className="title">
          <p>
            WE ARE <span className="highlight">NOVATRA STUDIO</span>. WE DESIGN
            AND DEVELOP WEBSITES.
          </p>
        </div>
      </div>
    </section>
  );
}
