'use client';

import React from 'react';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-[65px] z-50 backdrop-blur-md bg-[#03001417] shadow-lg shadow-[#2A0E61]/50 px-6 md:px-10">
      <div className="flex justify-between items-center h-full">
        {/* Logo or Home */}
        <a href="#hero" className="flex items-center text-gray-300 text-xl">
          <FaHome className="mr-2" />
          <span className="hidden md:inline font-bold">Home</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-4 md:gap-6 px-6 py-2 border border-[#7042f861] bg-[#0300145e] rounded-full text-sm text-gray-200">
          <a href="#education" className="hover:text-cyan-400 transition">Education</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nextjs-mongodb-google-auth-blog-6hf26hrrfa-uw.a.run.app/"
            className="hover:text-pink-400 transition"
          >
            Blog
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/serangemechu/"
            className="hover:text-pink-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
