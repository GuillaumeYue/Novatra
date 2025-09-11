import React, { useState } from "react";
import Card from "./Card";

const works = [
  { img: "/assets/img/mimos.png", name: "Mimos" },
  { img: "/assets/img/lumea.png", name: "Lumea" },
  { img: "/assets/img/mimos.png", name: "Mimos" },
  { img: "/assets/img/lumea.png", name: "Lumea" },
  { img: "/assets/img/mimos.png", name: "Mimos" },
  { img: "/assets/img/lumea.png", name: "Lumea" },
  { img: "/assets/img/mimos.png", name: "Mimos" },
  { img: "/assets/img/lumea.png", name: "Lumea" },
  { img: "/assets/img/mimos.png", name: "Mimos" },
  { img: "/assets/img/lumea.png", name: "Lumea" },
  // 还可以继续添加更多作品
];

const DEFAULT_COUNT = 4;
const STEP = 4;

export default function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(DEFAULT_COUNT);

  const handleClick = () => {
    if (visibleCount >= works.length) {
      // 已经展开全部 → 收起
      setVisibleCount(DEFAULT_COUNT);
    } else {
      // 每次多显示 4 个
      setVisibleCount((prev) => Math.min(prev + STEP, works.length));
    }
  };

  const isAllVisible = visibleCount >= works.length;
  const btnText = isAllVisible ? "View Less" : "View More";

  return (
    <section id="portfolio" className="section-container portfolio">
      <div className="portfolio-card-container">
        {works.slice(0, visibleCount).map((w, i) => (
          <Card key={i} imgSrc={w.img} name={w.name} />
        ))}
      </div>

      {works.length > DEFAULT_COUNT && (
        <div className="portfolio-viewmore">
          <button className="glass viewmore-btn" onClick={handleClick}>
            {btnText}
          </button>
        </div>
      )}
    </section>
  );
}
