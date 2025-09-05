import React from "react";
import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* 全局背景视频（固定在页面底层） */}
      <video
        className="body-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/img/fallback.png"
      >
        <source src="/assets/novatra-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main className="main">
        <div className="main-container">
          <Header />
          <Hero />
          <About />
          <Portfolio />
          <Services />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
