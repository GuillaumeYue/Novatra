import React from "react";

export default function Hero() {
  return (
    <section className="section-container hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/img/fallback.png"
      >
        <source src="/assets/novatra-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content-container">
        <div className="hero-fill-top" />
        <img
          className="hero-title"
          src="/assets/img/titleHollowingOut.png"
          alt="title"
        />
        <div className="hero-fill">
          <p className="hero-text">
            we are <span className="hero-text-strong">novatra studio</span>. we
            design and develop websites.
          </p>
        </div>
      </div>
    </section>
  );
}
