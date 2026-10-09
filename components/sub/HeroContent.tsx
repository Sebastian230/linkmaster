"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

const fadeUp = (delay: number) => ({
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

const facts = [
  { value: "06", es: "Servicios", en: "Services" },
  { value: "09", es: "Proyectos hechos", en: "Projects built" },
  { value: "L–S", es: "Disponibles de lunes a sábado", en: "Available Monday to Saturday" },
  { value: "UY", es: "Desde Uruguay", en: "Based in Uruguay" },
];

const HeroContent = () => {
  const { language } = useLanguage();
  const es = language === "es";

  return (
    <motion.div initial="hidden" animate="visible" className="relative z-30 w-full pt-[178px] lg:pt-[262px]">
      {/* Franja de vidrio de lado a lado, pisando el borde inferior del agujero negro */}
      <div className="hero-band relative w-full border-y border-white/10 bg-black/30 backdrop-blur-xl">
        <span className="hero-panel-line" aria-hidden="true" />

        <div className="px-4 pb-10 pt-9 sm:px-8 sm:pt-12 lg:px-12 lg:pb-14 lg:pt-14">
          <motion.p
            variants={fadeUp(0.1)}
            className="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-300 sm:text-xs sm:tracking-[0.32em]"
          >
            Software · {es ? "Agentes" : "Agents"} · {es ? "Redes" : "Networks"} · PC · 3D
          </motion.p>

          <motion.h1
            variants={fadeUp(0.2)}
            className="mt-5 text-[8.5vw] font-semibold leading-[0.98] tracking-[-0.03em] text-white lg:text-[clamp(2rem,7vw,7rem)]"
          >
            {es ? "Tecnología" : "Technology"}
            <span className="shine-text block pb-[0.12em]">{es ? "que trabaja por vos." : "that works for you."}</span>
          </motion.h1>

          <motion.div
            variants={fadeUp(0.35)}
            className="mt-8 flex flex-col gap-7 md:flex-row md:items-end md:justify-between lg:mt-10"
          >
            <p className="max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              {es
                ? "Software a medida, agentes de IA, redes, armado de PC e impresión 3D. Un solo contacto para todo."
                : "Custom software, AI agents, networks, PC builds and 3D printing. One point of contact for everything."}
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-slate-200"
              >
                {es ? "Ver servicios" : "View services"}
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/40"
              >
                {es ? "Pedir presupuesto" : "Get a quote"}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.dl variants={fadeUp(0.5)} className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={fact.value}
              className={`flex flex-col gap-1 border-white/10 px-4 py-5 sm:px-8 lg:px-12 ${index % 2 === 1 ? "border-l" : ""} ${index > 1 ? "border-t md:border-t-0" : ""} ${index === 2 ? "md:border-l" : ""}`}
            >
              <dt className="order-2 text-xs leading-5 text-slate-500 sm:text-sm">{es ? fact.es : fact.en}</dt>
              <dd className="order-1 font-mono text-2xl font-medium tracking-tight text-white sm:text-3xl">{fact.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </motion.div>
  );
};

export default HeroContent;
