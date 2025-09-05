import React from "react";

export default function ServiceCard({ title, details }) {
  return (
    <div className="service-card">
      <p className="service-name">{title}</p>
      <p className="service-details">{details}</p>
      <a href="#" className="service-link" aria-label={`${title} details`}>
        {/* 注意：SVG 属性要用 React 的驼峰写法 */}
        <svg
          width="73"
          height="73"
          viewBox="0 0 73 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_280_231)">
            <circle
              cx="36.2702"
              cy="31.2702"
              r="22.778"
              fill="#EDEDED"
              fillOpacity="0.2"
              shapeRendering="crispEdges"
            />
            <circle
              cx="36.2702"
              cy="31.2702"
              r="22.1272"
              stroke="#F3F3F3"
              strokeWidth="1.3016"
              shapeRendering="crispEdges"
            />
          </g>
          <path
            d="M29.4275 37.4597L40.7021 26.1852L31.0382 26.1852L30.9553 24.8874H42.9202V36.8523L41.6224 36.7694L41.6224 27.1055L30.3479 38.3801L29.4275 37.4597Z"
            fill="#2A3440"
          />
          <defs>
            <filter
              id="filter0_d_280_231"
              x="0.476172"
              y="0.682579"
              width="71.5882"
              height="71.5882"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.20641" />
              <feGaussianBlur stdDeviation="6.50801" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_280_231" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_280_231" result="shape" />
            </filter>
          </defs>
        </svg>
      </a>
    </div>
  );
}
