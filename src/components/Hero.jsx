import "./Hero.css";
import bgVideo from "./assets/novatra-bg.mp4";
import maskPng from "./assets/masks/logo-cutout-new.png"; // 这张应为“白填充=可见”的版本

export default function Hero() {
  return (
    <section className="hero">
      {/* 1) 大背景视频（最底层） */}
      <video className="bg" src={bgVideo} autoPlay muted loop playsInline />

      {/* 2) 小一号矩形视频（在卡片之下） */}
      <video
        className="inner-video"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* 3) 白色卡片（盖在小视频之上） */}
      <div className="card">
        {/* 4) 镂空视频（卡片内，位于最上层，用 mask 裁剪） */}
        <video
          className="logo-video"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          style={{
            WebkitMaskImage: `url(${maskPng})`,
            maskImage: `url(${maskPng})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            // 注意：mask 尺寸交给 CSS 控制（不要在这里再写 size）
          }}
        />

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
