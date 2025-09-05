import React from "react";

export default function Header() {
  return (
    <section className="header">
      <p className="logo">novatra</p>

      <div className="glass nav-container">
        <a href="#" className="nav-link">about</a>
        <span className="nav-line" />
        <a href="#" className="nav-link">portfolio</a>
        <span className="nav-line" />
        <a href="#" className="nav-link">service</a>
      </div>

      <a href="#contact-form" className="header-contact">
        <p className="glass nav-link">contact</p>
        <ion-icon name="mail-outline" class="contact-icon glass"></ion-icon>
      </a>
    </section>
  );
}
