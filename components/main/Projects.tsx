import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { SparklesIcon } from '@heroicons/react/24/solid'

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
          <h1 className="md:font-bold text-cyan-500 text-[40px]">
            Projects
          </h1>
      <h2  className='text-[20px] text-white font-medium mt-[10px] text-center mb-[15px]'>
        Following projects showcase my skills and experience through real-world examples of my work. 
        Each project is briefly described with links to live demos in it. It reflects my ability to 
        solve complex problems, work with different technologies, and manage projects effectively.
      </h2>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/next.png"
          title="Modern Next.js Portfolio"
          description="Responsive dynamic portfolio website that highlights my expertise and experience.
          Nextjs, Typescript, Tailwind CSS, Framer Motion, Vercel"
        />
        <ProjectCard
          src="/dj.png"
          title="BLOG"
          description="Fullstack Blog App Using Django."
        />
        <ProjectCard
          src="/py.png"
          title="AI-based Network IDS"
          description=""
        />
        <ProjectCard
          src="/react.png"
          title="High School Vendor Portal"
          description="PostgreSQL, Express, ReactJS, Node.js"
        />
      </div>
    </div>
  );
};

export default Projects;