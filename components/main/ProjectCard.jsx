'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
    <section className="projects-section ">
      <h1 className="md:font-bold text-cyan-500 text-[40px] flex flex-col items-center justify-center py-20" id="projects">
        Projects
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants} whileHover="hover" className="project-card mt-4 flex flex-col items-center justify-center">
            <div className="relative w-60 h-40 mt-9">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">{project.title}</h2>
            <p className="text-gray-600 text-white text-center md:flex md:justify-center md:items-center grid white-space-pre-wrap">
              {project.description}
            </p>
            <br />
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="btn px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-red-700 focus:outline-none mt-">
                Link
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;

