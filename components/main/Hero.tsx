// Hero.tsx (Landing Section)
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Matrix3DBackground from '../ui/Matrix3DBackground';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center h-screen text-white px-4 text-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Matrix3DBackground/>
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-6 text-green-400 font-mono text-sm sm:text-base tracking-wide"
      >
        <Typewriter
          options={{
            strings: [
              'Master of systems — from hardware to intelligence.',
              'Adaptable. Reliable. Engineered for impact.',
              'Why hire potential when you can hire proof?',
              'Cloud-native. AI-integrated. Team-ready.',
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 25,
          }}
        />
      </motion.div>

      {/* <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold text-cyan-400 tracking-tight"
      >
        Welcome to <span className="text-pink-500">The Core!</span>
      </motion.h1> */}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-3xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-cyan-400 via-white to-pink-500 bg-clip-text text-transparent"
      >
        SERAN GEMECHU
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-6 text-base md:text-lg text-slate-400 max-w-xl"
      >
        Results-driven Engineer specialized in <span className="text-white">Customer Engineering</span>, <span className="text-white">Networking</span>, and <span className="text-white">Software Development</span>,with hands-on experience and a growing passion for <span className="text-white">AI</span> and <span className="text-white">Machine Learning</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8 flex gap-4"
      >
        <Link
          href="https://nextjs-mongodb-google-auth-blog-6hf26hrrfa-uw.a.run.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 rounded-lg text-white bg-cyan-600 hover:bg-pink-600 transition-all">
            Read My Blog
          </button>
        </Link>

        <Link href="https://www.linkedin.com/in/serangemechu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 rounded-lg border border-cyan-600 text-cyan-400 hover:bg-cyan-800 hover:text-white transition-all">
            Contact Me
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
