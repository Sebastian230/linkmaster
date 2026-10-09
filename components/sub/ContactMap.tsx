"use client";

import React from "react";
import { useLanguage } from "../LanguageProvider";

// Coordenadas sobre public/map-americas.svg (viewBox 0 0 92 90), generado con dotted-map.
const base = { x: 74, y: 66.7 };
const places = [
  { x: 74, y: 66.7, es: "Uruguay", en: "Uruguay", dx: 2, dy: 3.4, anchor: "start" },
  { x: 81, y: 58, es: "São Paulo", en: "São Paulo", dx: -1.8, dy: 3, anchor: "end" },
  { x: 83.5, y: 57.2, es: "Río de Janeiro", en: "Rio de Janeiro", dx: 0, dy: -2.4, anchor: "middle" },
  { x: 63.5, y: 76.2, es: "Sur de Chile", en: "Southern Chile", dx: -2, dy: 0.8, anchor: "end" },
  { x: 58, y: 23.4, es: "Miami", en: "Miami", dx: 2, dy: 0.8, anchor: "start" },
  { x: 46, y: 19.9, es: "Texas", en: "Texas", dx: 0, dy: -2.4, anchor: "middle" },
  { x: 5, y: 26.8, es: "Hawái", en: "Hawaii", dx: 2, dy: 0.8, anchor: "start" },
] as const;

const arc = (to: { x: number; y: number }) => {
  const midX = (base.x + to.x) / 2;
  const midY = Math.min(base.y, to.y) - Math.abs(base.x - to.x) * 0.22 - 4;
  return `M ${base.x} ${base.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
};

const ContactMap = () => {
  const { language } = useLanguage();
  const es = language === "es";

  return (
    <div className="relative mx-auto aspect-[92/90] w-full max-w-[520px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/map-americas.svg" alt="" className="absolute inset-0 h-full w-full" draggable={false} />
      <svg viewBox="0 0 92 90" className="absolute inset-0 h-full w-full overflow-visible" role="img" aria-label={es ? "Mapa de América con los lugares marcados" : "Map of the Americas with the marked places"}>
        <defs>
          <linearGradient id="arc-gradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
            <stop offset="20%" stopColor="#a78bfa" />
            <stop offset="80%" stopColor="#f5f3ff" />
            <stop offset="100%" stopColor="#f5f3ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {places.slice(1).map((place, index) => (
          <path key={place.es} d={arc(place)} pathLength={1} className="map-arc" style={{ animationDelay: `${index * 0.5}s` }} />
        ))}
        {places.map((place, index) => (
          <g key={place.es}>
            <circle cx={place.x} cy={place.y} r="0.8" className="map-ring" style={{ animationDelay: `${index * 0.35}s` }} />
            <circle cx={place.x} cy={place.y} r="0.8" fill={index === 0 ? "#fff" : "#a78bfa"} />
            <text x={place.x + place.dx} y={place.y + place.dy} textAnchor={place.anchor} className="map-label">{es ? place.es : place.en}</text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default ContactMap;
