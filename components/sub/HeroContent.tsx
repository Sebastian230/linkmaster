"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

const fadeUp = (delay: number) => ({
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

const HeroContent = () => {
  const { language } = useLanguage();
  const es = language === "es";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-30 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-10 pt-[178px] text-center sm:px-8 lg:pt-[262px]"
    >
      <motion.div
        variants={fadeUp(0.1)}
        className="hero-panel relative w-full max-w-4xl rounded-[28px] border border-white/10 bg-black/35 px-5 py-10 backdrop-blur-xl sm:px-12 sm:py-14"
      >
        <span className="hero-panel-line" aria-hidden="true" />

        <motion.p
          variants={fadeUp(0.2)}
          className="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-300 sm:text-xs sm:tracking-[0.32em]"
        >
          Software · {es ? "Agentes" : "Agents"} · {es ? "Redes" : "Networks"} · PC · 3D
        </motion.p>

        <motion.h1
          variants={fadeUp(0.3)}
          className="mt-5 text-[2rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {es ? "Tecnología" : "Technology"}
          <span className="shine-text block">{es ? "que trabaja por vos." : "that works for you."}</span>
        </motion.h1>

        <motion.p
          variants={fadeUp(0.4)}
          className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg"
        >
          {es
            ? "Software a medida, agentes de IA, redes, armado de PC e impresión 3D. Un solo contacto para todo."
            : "Custom software, AI agents, networks, PC builds and 3D printing. One point of contact for everything."}
        </motion.p>

        <motion.div variants={fadeUp(0.5)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#services"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-slate-200"
          >
            {es ? "Ver servicios" : "View services"}
          </a>
          <a
            href="https://wa.me/59895821202"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/40"
          >
            {es ? "Pedir presupuesto" : "Get a quote"}
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
