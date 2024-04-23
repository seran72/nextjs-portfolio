import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
    Skill_data,
  } from "@/constants";
  import React from "react";
  import SkillDataProvider from "../sub/SkillDataProvider";
  import SkillText from "../sub/SkillText";
  import { SparklesIcon } from '@heroicons/react/24/solid'

  const Skills = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
        style={{ transform: "scale(0.9" }}
      >
        <SkillText/>
  
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <SparklesIcon className="text-[#03fcd7] mr-[10px] h-5 w-5" />
          <h1 className="md:font-bold text-cyan-500 text-[28px]">
            FRONT END
          </h1>
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
  
        {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div> */}
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <SparklesIcon className="text-[#03fcd7] mr-[10px] h-5 w-5" />
          <h1 className="md:font-bold text-cyan-500 text-[28px]">
            BACK END
          </h1>
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <SparklesIcon className="text-[#03fcd7] mr-[10px] h-5 w-5" />
          <h1 className="md:font-bold text-cyan-500 text-[28px]">
            CI CD
          </h1>
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div> */}
  
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;