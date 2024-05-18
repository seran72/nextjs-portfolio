'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PinContainer } from "../ui/3d-pin"; // Import PinContainer component
import {  slideInFromTop } from '@/utils/motion'
import { CiLink } from "react-icons/ci";



const ProjectCard = ({ projects }) => {
  const cardVariants = {
    initial: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Initial dark blue background
    },
    hover: {
      scale: 1.1, // Increase scale on hover (pop effect)
      backgroundColor: '', // Lighter blue on hover
      transition: { duration: 0.2 }, // Adjust transition duration for pop speed
    },
  };

  return (
    <section className="projects-section">
      <div className="flex justify-center items-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-6 mb-8 border border-[#7042f88b] opacity-100"
        >
          <h1 className="md:font-bold text-cyan-500 text-[40px]" id="projects">
            Projects
          </h1>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-9">
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants} whileHover="hover" className="project-card mt-4 flex flex-col items-center justify-center">
            <PinContainer
              title={project.title} // Set title prop for PinContainer
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <div className="relative w-60 h-40 mt-9">
                  <Image
                    src={project.imageUrl}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <br></br>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    {project.description} 
                  </span>
                </div>
                {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-500 via-red-500 to-blue-500" /> */}
                <Link href={project.link} target='_blank' rel="noopener noreferrer"> 
                  <div className="flex justify-center">
                    <button className="btn px-4 py-2 rounded-lg text-white bg-blue-800 hover:bg-red-700 focus:outline-none">
                    <CiLink />
                    </button>
                  </div>
                </Link>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
