"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from '@/utils/motion';

const jobHistories = [
  {
    company: "Embedded Works Inc",
    role: "Applications Support Engineer",
    period: "03/2023 – 01/2024",
    description: [],
  },
  {
    company: "Tesla",
    role: "Technical Support Engineer Intern",
    period: "05/2022 – 12/2022",
    description: [],
  },
  {
    company: "CSU Sacramento",
    role: "Resident Advisor",
    period: "08/2021 – 05/2022",
    description: [],
  },
  {
    company: "Experimax",
    role: "Apple Repair Technician",
    period: "01/2020 – 08/2020",
    description: [],
  },
  {
    company: "CSU Sacramento",
    role: "Associated Student Incorporated (ASI) on the IT Advisory Board",
    period: "09/2018 – 05/2019",
    description: [],
  },
  {
    company: "UbreakiFix",
    role: "Electronic Repair Technician",
    period: "06/2018 – 08/2018",
    description: [],
  },
];

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WorkHistory = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-10 mb-[200px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="Welcome-box py-2 px-6 mb-8 border border-[#7042f88b] opacity-100"
      >
        <h1 className="md:font-bold text-cyan-500 text-[40px]" id="work">
          Work Experience
        </h1>
      </motion.div>
      <div className="relative w-full max-w-4xl">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-cyan-300"></div>
        {jobHistories.map((job, index) => (
          <motion.div
            custom={index}
            initial="hidden"
            animate="visible"
            variants={timelineVariants}
            className={`mb-8 flex justify-${index % 2 === 0 ? 'start' : 'end'} w-full`}
            key={index}
          >
            <div className={`relative p-2 rounded-lg shadow-md w-[40%] ${index % 2 === 0 ? 'mr-[calc(60%-20px)]' : 'ml-[calc(60%-20px)]'} 
              bg-gradient-to-r from-green-400 to-blue-500 
              dark:from-purple-600 dark:to-indigo-800`}>
              {/* Connector dots */}
              {/* <span className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-500 border-4 border-white dark:border-gray-800 ${index % 2 === 0 ? '-right-[28px]' : '-left-[28px]'}`}></span> */}
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                {job.role}
              </h2>
              <p className="text-lg font-semibold text-black-700 dark:text-black-300 mb-2">
                {job.company}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {job.period}
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                {job.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkHistory;
