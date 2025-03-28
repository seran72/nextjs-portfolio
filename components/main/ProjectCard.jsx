'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PinContainer } from "../ui/3d-pin"; // Import PinContainer component
import {  slideInFromTop } from '@/utils/motion'
import { CiLink } from "react-icons/ci";

const projects = [
{
    id: 1,
    title: 'Next JS Portfolio',
    description: 'NextjS, Typescript, Tailwind, Framer Motion, Vercel',
    imageUrl: '/nextproject.jpg',
    link: 'https://seran-portfolio.vercel.app/',
  },
  {
    id: 2,
    title: 'Vendor Portal',
    description: 'PostgreSQL, Express, Nodejs, ReactJS, Nodejs',
    imageUrl: '/pern.jpg',
    link: 'https://www.csus.edu/college/engineering-computer-science/about-the-college/_internal/_documents/posters/sds/csc190-team-omega-harris-spring22.pdf'
  },
  {
    id: 3,
    title: 'FullStack Blog',
    description: 'Next14, Javascript, Mongodb, Prisma, Firebase, Docker, GCP Cloud Run, Oauth',
    imageUrl: '/fullstackblog.png',
    link: 'https://myblog-s43l5afo5a-uc.a.run.app/'
  },
  {
    id: 4,
    title: 'Django Fullstack App',
    description: 'Full Stack blog app built with Django framework for creating and managing blog posts. It provides an easy-to-use interface for both administrators and users to write, publish, and interact with blog content.',
    imageUrl: '/dj-blog-app.png',
    link: 'https://github.com/seran72/Django-blog-app'
  },
  {
    id: 5,
    title: 'WiFi/WPA Hacking',
    description: 'Kali Linux: Leveraged pen-testing techniques and tools to identify potential security risks and exploit WPA vulnerabilities in a controlled environment.',
    imageUrl: '/wpa.png',
    link: 'https://cyberwbo.blogspot.com/2023/02/crack-wpawpa2-wifi-passwords-in-afaan.html'
  },
  {
    id: 6,
    title: 'AI-based Network IDS',
    description: 'Built a custom PyTorch MLP for anomaly detection on a cyber-attack network traffic dataset and employed AutoML’s XGBoostClassifier—both achieved 99% accuracy. ',
    imageUrl: '/ml.png',
    link: 'https://github.com/seran72/AI-Network-Intrusion-Detection-System/blob/main/NIDS%20Paper.pdf'
  },
]

const ProjectCard = () => {
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
        {/* <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-6 mb-8 border border-[#7042f88b] opacity-100"
        > */}
          <motion.h2
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-cyan-400 text-4xl md:text-5xl font-bold z-10 mt-10 tracking-widest"
                >
                  Projects
                </motion.h2>
        {/* </motion.div> */}
      </div>
      <h1><br></br></h1>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-9">
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants} whileHover="hover" className="project-card mt-4 flex flex-col items-center justify-center">
            <PinContainer
              title={project.title} // Set title prop for PinContainer
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className="relative w-60 h-40 mt-9">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="rounded object-cover"
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
