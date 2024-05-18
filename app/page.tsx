'use client'
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import ProjectCard from "@/components/main/ProjectCard";
import WorkHistory from "@/components/sub/WorkHistory"


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
    description: 'Supervised machine learning project to analyze network data and identify potential threats.',
    imageUrl: '/ml.png',
    link: 'https://github.com/seran72'
  },

]

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Skills/>
        <WorkHistory/>
        <ProjectCard projects={projects} />
      </div>
    </main>
  );
}

