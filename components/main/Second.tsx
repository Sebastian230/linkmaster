"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import Works from "./Works";



const Second = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row items-center justify-center px-20 mt-40 mb-40 w-full z-[20]  "
  >
    <motion.div
      variants={slideInFromLeft(0.8)}
      className="w-full h-full flex "
    >
      <Works/>
    </motion.div>
    
    <div className="h-full w-full flex flex-col ml-40 text-start">
      

      <motion.div
        variants={slideInFromRight(0.5)}
        className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
      >
        <span>
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            the best{" "}
          </span>
          project exprience
        </span>
      </motion.div>

      <motion.p
        variants={slideInFromRight(0.8)}
        className="text-lg text-gray-400 my-5 max-w-[600px]"
      >
        I&apos;m a Full Stack Software Engineer with experience in Website,
        Mobile, and Software development. Check out my projects and skills.
      </motion.p>
     
    </div>

    
  </motion.div>
);
  
}

export default Second