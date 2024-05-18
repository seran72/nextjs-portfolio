import React from "react";
import { FaHome } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            <FaHome />
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#work" className="cursor-pointer">
              Experience
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            
            <a target="_blank" href="https://myblog-s43l5afo5a-uc.a.run.app" className="cursor-pointer">
              Blog
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/serangemechu/" className="cursor-pointer">
              Linkedin
            </a>
            <a href="#" className="cursor-pointer">
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;