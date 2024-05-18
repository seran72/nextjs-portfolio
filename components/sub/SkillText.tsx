"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-6 mb-8 border border-[#7042f88b] opacity-100"
        >
          <h1 className="md:font-bold text-cyan-500 text-[40px]">
            Technologies
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[20px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
    </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            {/* Never miss a task, deadline or idea */}
        </motion.div>
    </div>
  )
}

export default SkillText;
