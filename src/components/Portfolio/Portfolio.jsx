import React from "react";
import Card from "./Card";

const works = [
  { img: "/assets/img/mimos.png", name: "Mimos" },
  { img: "/assets/img/lumea.png", name: "Lumea" },
  { img: "/assets/img/mimos.png", name: "Mimos" },
  { img: "/assets/img/lumea.png", name: "Lumea" },
];

export default function Portfolio() {
  return (
    <section className="section-container portfolio">
      <div className="portfolio-card-container">
        {works.map((w, i) => (
          <Card key={i} imgSrc={w.img} name={w.name} />
        ))}
      </div>
    </section>
  );
}
