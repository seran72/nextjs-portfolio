'use client';

import Hero from '@/components/main/Hero';
import Skills from '@/components/main/Skills';
import ProjectCard from '@/components/main/ProjectCard';
import Matrix3DBackground from '@/components/ui/Matrix3DBackground';
import Edu from '@/components/main/Edu';
import { ChevronsDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Matrix3DBackground />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 flex flex-col gap-20">
        <Hero />
        <Edu />
        <Skills />
        <ProjectCard />
      </div>

      {/* Global Scroll Button */}
      <Link href="#education" scroll={true}>
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
          <button className="p-2 rounded-full border border-cyan-500 text-cyan-300 bg-black/60 hover:bg-cyan-700 hover:text-white backdrop-blur-md transition-all animate-bounce">
            <ChevronsDown className="w-5 h-5" />
          </button>
        </div>
      </Link>
    </main>
  );
}
