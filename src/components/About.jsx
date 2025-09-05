import React from "react";

export default function About() {
  return (
    <section className="section-container about">
      <div className="about-section about-1">
        <p className="about-text about-text-1">
          Modern mind, horizon boundless, inspiration soaring, creativity
          beyond sky and ocean.
        </p>
        <img
          className="about-img-1"
          src="/assets/img/pexels-ana-benet-8243124 2.png"
          alt="img"
        />
      </div>

      <div className="about-section about-2">
        <img
          className="about-img-2"
          src="/assets/img/pexels-rachel-claire-4997822 2.png"
          alt="img"
        />
        <p className="about-text about-text-2">
          Thoughts stretch boundless, waves ignite creation’s ripples,
          flowing into tranquil clarity.
        </p>
      </div>
    </section>
  );
}
