"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const words = [
    { 
      text: "a Gen-AI enthusiast" , 
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    { 
      text: "an AI/ML developer" , 
      gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    { 
      text: "a Backend developer" , 
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500"
    }
  ];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 mt-32 lg:mt-48 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-3 lg:gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-6 text-3xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <div className="flex flex-wrap items-center gap-x-4 whitespace-nowrap">
            <span>I&apos;m Yash </span>
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`text-transparent bg-clip-text ${words[currentWord].gradient} font-bold`}
            >
              {words[currentWord].text}
            </motion.span>
            <span>creating amazing things.</span>
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm lg:text-lg text-gray-400 my-3 lg:my-5 max-w-[600px]"
        >
          Check out my projects and skills.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm lg:text-base"
        >
          Learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-8 lg:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none w-[280px] h-[280px] lg:w-[650px] lg:h-[650px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;