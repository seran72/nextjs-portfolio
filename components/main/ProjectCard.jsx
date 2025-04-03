'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PinContainer } from '../ui/3d-pin';
import { CiLink } from 'react-icons/ci';

const projects = [
  {
    id: 1,
    title: 'Next JS Portfolio',
    description: 'Next.js, TypeScript, Tailwind, Framer Motion, Vercel',
    imageUrl: '/nextproject.jpg',
    link: 'https://seran-portfolio.vercel.app/',
  },
  {
    id: 2,
    title: 'Vendor Portal',
    description: 'PostgreSQL, Express, Node.js, React',
    imageUrl: '/pern.jpg',
    link: 'https://www.csus.edu/college/engineering-computer-science/about-the-college/_internal/_documents/posters/sds/csc190-team-omega-harris-spring22.pdf',
  },
  {
    id: 3,
    title: 'FullStack Blog',
    description: 'Next 14, JavaScript, MongoDB, Prisma, Firebase, Docker, GCP, OAuth',
    imageUrl: '/fullstackblog.png',
    link: 'https://myblog-s43l5afo5a-uc.a.run.app/',
  },
  {
    id: 4,
    title: 'Django Fullstack App',
    description:
      'Full-stack blog app with Django — admin + user interface for content publishing and interaction.',
    imageUrl: '/dj-blog-app.png',
    link: 'https://github.com/seran72/Django-blog-app',
  },
  {
    id: 5,
    title: 'Ethical Hacking: WiFi/WPA PenTest',
    description:
      'Kali Linux: Identified WPA vulnerabilities using controlled penetration testing techniques.',
    imageUrl: '/kali.jpg',
    link: 'https://cyberwbo.blogspot.com/2023/02/crack-wpawpa2-wifi-passwords-in-afaan.html',
  },
  {
    id: 6,
    title: 'AI-based Network IDS',
    description:
      'PyTorch MLP & AutoML XGBoost classifier for network intrusion detection. Achieved 99% accuracy.',
    imageUrl: '/ml.png',
    link: 'https://github.com/seran72/AI-Network-Intrusion-Detection-System/blob/main/NIDS%20Paper.pdf',
  },
];

const ProjectCard = () => {
  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cyan-400 text-4xl md:text-5xl font-bold tracking-widest"
        >
          Projects
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-[18rem] h-[20rem] flex flex-col items-center"
          >
            <PinContainer title={project.title}>
              <div className="flex flex-col p-3 text-slate-300 tracking-tight h-full">
                <div className="relative w-56 h-36 mb-3 mx-auto">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="text-sm mb-3 line-clamp-3">
                  {project.description}
                </div>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-center">
                    <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-white bg-cyan-700 hover:bg-pink-600 transition-all shadow-md">
                      <CiLink className="w-5 h-5" />
                      <span className="text-sm font-medium">View</span>
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
