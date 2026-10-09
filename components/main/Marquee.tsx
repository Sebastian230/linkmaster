"use client";

import React from "react";
import { useLanguage } from "../LanguageProvider";

const words = [
  ["Software a medida", "Custom software"],
  ["Tiendas online", "Online stores"],
  ["Agentes de IA", "AI agents"],
  ["Bots de WhatsApp", "WhatsApp bots"],
  ["Redes", "Networks"],
  ["Armado de PC", "PC builds"],
  ["Impresión 3D", "3D printing"],
  ["Soporte", "IT support"],
];

const Marquee = () => {
  const { language } = useLanguage();
  const es = language === "es";

  return (
    <div className="marquee relative z-40 border-y border-white/10 py-5" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {words.map(([wordEs, wordEn]) => (
              <span key={wordEs} className="flex items-center whitespace-nowrap text-lg font-semibold uppercase tracking-tight text-slate-300 sm:text-2xl">
                {es ? wordEs : wordEn}
                <span className="mx-6 text-violet-400 sm:mx-9">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
