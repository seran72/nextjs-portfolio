'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Matrix3DBackground from '../ui/Matrix3DBackground';
import Typewriter from 'typewriter-effect';
import { FileText, Send, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center h-screen text-white px-4 text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Matrix3DBackground />
      </div>

      {/* Typewriter Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-6 text-green-400 font-mono text-sm sm:text-base tracking-wide"
      >
        <Typewriter
          options={{
            strings: [
              'Adaptable. Reliable. Engineered for impact.',
              'Cloud-native. AI-integrated. Team-ready.',
              'Built to deploy. Designed to scale.',
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 25,
          }}
        />
      </motion.div>

      {/* Name with glow pulse */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-3xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-cyan-400 via-white to-pink-500 bg-clip-text text-transparent animate-pulse"
      >
        SERAN GEMECHU
      </motion.h2>

      {/* Location with icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-3 flex items-center gap-2 text-sm md:text-base text-slate-400"
      >
        <MapPin className="w-4 h-4 text-green-400" />
        SF Bay Area, CA
      </motion.div>

      {/* Intro paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-6 text-base md:text-lg text-slate-400 max-w-xl leading-relaxed"
      >
        Results-driven engineer with hands-on experience in <span className="text-white">infrastructure</span>, <span className="text-white">automation</span>, and <span className="text-white">software development</span> specialized in <span className="text-white">reliable systems</span>, <span className="text-white">real-time support</span>, and <span className="text-white">customer success</span>. I build platforms that <span className="text-white">run fast</span>, <span className="text-white">stay resilient</span>, and <span className="text-white">scale smart</span>.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <Link
          href="https://nextjs-mongodb-google-auth-blog-6hf26hrrfa-uw.a.run.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 rounded-lg text-white bg-cyan-600 hover:bg-pink-600 transition-all flex items-center gap-2">
            <FileText className="w-4 h-4" /> Read My Blog
          </button>
        </Link>

        <Link
          href="https://www.linkedin.com/in/serangemechu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 rounded-lg border border-cyan-600 text-cyan-400 hover:bg-cyan-800 hover:text-white transition-all flex items-center gap-2">
            <Send className="w-4 h-4" /> Contact Me
          </button>
        </Link>

        {/* Optional resume button */}
        {/* 
        <Link
          href="/Seran_Gemechu_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 rounded-lg border border-pink-500 text-pink-400 hover:bg-pink-600 hover:text-white transition-all flex items-center gap-2">
            <FileText className="w-4 h-4" /> View Resume
          </button>
        </Link> 
        */}
      </motion.div>
    </section>
  );
};

export default Hero;
