'use client';
import Hero from '@/components/main/Hero';
import Skills from '@/components/main/Skills';
import ProjectCard from '@/components/main/ProjectCard';
import Matrix3DBackground from '@/components/ui/Matrix3DBackground';

export default function Home() {
  return (
    // <main className="relative h-full w-full bg-black dark:bg-[#030014] overflow-hidden">
    <main>
      <Matrix3DBackground />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 flex flex-col gap-20">
        <Hero />
        <Skills />
        <ProjectCard />
      </div>
    </main>
  );
}
