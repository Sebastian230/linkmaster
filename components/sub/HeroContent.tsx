"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const HeroContent = () => {
  const { language } = useLanguage();
  const es = language === "es";

  return (
    <motion.div
      initial="visible"
      animate="visible"
      className="relative z-30 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-6 px-5 pb-16 pt-24 sm:gap-10 sm:px-8 sm:pt-36 lg:flex-row lg:gap-8 lg:px-12 lg:pt-28"
    >
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left">
        <div className="mobile-planet-wrap" aria-label="Dos planetas orbitando">
          <motion.div
            variants={slideInFromTop}
            className="hero-planet-system"
          >
            <span className="hero-planet-main" />
            <span className="hero-planet-ring" />
            <span className="hero-planet-orbit"><span className="hero-planet-small" /></span>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-4 max-w-[720px] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span>
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 ">
              {" "}
              {es ? "Todos tus proyectos en un solo lugar" : "Bringing all your projects together"}
            </span>
             
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-3 max-w-[600px] text-base leading-7 text-slate-300 sm:text-lg"
        >
          {es
            ? "Soy estudiante de ingeniería y creo experiencias cuidadas para web, móvil y software. Explorá una selección de mis últimos proyectos."
            : "I'm an engineering student building thoughtful experiences for web, mobile, and software. Explore a selection of my latest projects."}
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="button-primary mt-2 hidden min-h-12 items-center justify-center rounded-full border border-violet-400/30 px-7 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:border-violet-300/60 lg:inline-flex"
        >
          {es ? "Ver mis proyectos" : "View my work"}
        </motion.a>

        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="keyboard-project-link lg:hidden"
          aria-label="Ver mis proyectos"
        >
          <Image
            src="/split-keyboard-3d.png"
            alt="Teclado mecánico split 3D"
            width={768}
            height={512}
            className="h-auto w-full"
            priority
          />
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden w-full max-w-[520px] flex-1 items-center justify-center lg:flex lg:max-w-none"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={680}
          width={680}
          priority
          className="h-auto w-full max-w-[520px] drop-shadow-[0_0_60px_rgba(124,58,237,0.22)] lg:max-w-[620px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
