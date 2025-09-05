import React from "react";

export default function Card({ imgSrc, name }) {
  return (
    <div className="card">
      <img className="card-img" src={imgSrc} alt={name} />
      <div className="card-info">
        <p className="card-name">{name}</p>
        <a className="card-detail" href="#">
          <p className="card-detail-link glass">details</p>
          {/* 箭头用 Ionicon，自带旋转效果在 CSS */}
          <ion-icon class="card-detail-icon glass" name="arrow-up-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
}
