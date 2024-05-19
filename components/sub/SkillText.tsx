"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

// Define new animations
const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};

const h1Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: 'spring', stiffness: 100 } }
};

const SkillText = () => {
  return (
    <motion.div
      className='w-full h-auto flex flex-col items-center justify-center'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-6 mb-8 border border-[#7042f88b] opacity-100"
      >
        <motion.h1
          className="md:font-bold text-cyan-500 text-[40px]"
          variants={h1Variants}
          initial="hidden"
          animate="visible"
        >
          Technologies
        </motion.h1>
      </motion.div>
    </motion.div>
  )
}

export default SkillText;
