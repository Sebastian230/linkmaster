"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-[20] mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:flex-row lg:gap-8 lg:px-12 lg:pt-28"
    >
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box hidden border border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9] sm:flex"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
              linktree
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-4 max-w-[720px] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span>
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 ">
              {" "}
              Bringing all your projects together
            </span>
             
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-3 max-w-[600px] text-base leading-7 text-slate-300 sm:text-lg"
        >
          I&apos;m an engineering student building thoughtful experiences for web,
          mobile, and software. Explore a selection of my latest projects.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="button-primary mt-2 inline-flex min-h-12 items-center justify-center rounded-full border border-violet-400/30 px-7 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:border-violet-300/60"
        >
          View my work
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex w-full max-w-[520px] flex-1 items-center justify-center lg:max-w-none"
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
