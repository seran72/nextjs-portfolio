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
import { TypewriterEffectSmooth } from "../ui/typewriter-effect"; // Import TypewriterEffectSmooth component

const HeroContent = () => {
  const words = [
    {
      text: "SERAN",
      className: "text-white",
    },
    {
      text: "GEMECHU",
      className: "text-white",
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#ffffff8b] opacity-[0.9] flex items-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Welcome to my portfolio.
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          // className="flex flex-col gap-6 mt-6 text-6xl font-bold text-cyan max-w-[600px] w-auto h-auto"
        >
          <TypewriterEffectSmooth words={words} />
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Results-oriented Engineer with expertise in tech support, networking, and full-stack development. Proven track record of adapting and exceeding expectations in dynamic technical environments. Skilled in identifying and resolving complex technical issues, ensuring seamless operations, and delivering high-quality software solutions. Demonstrated ability to work collaboratively in team settings and independently drive projects to successful completion. Committed to continuous learning and staying up-to-date with the latest industry trends and technologies.
          </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <a target="_blank" href="https://myblog-s43l5afo5a-uc.a.run.app" className="cursor-pointer">
            Visit My Blog
          </a>
        </motion.a>
      </div>
      
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
