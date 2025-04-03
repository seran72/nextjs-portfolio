// EducationPortfolio.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  Sparkles,
  BrainCircuit,
  Cpu,
  Sigma,
  DatabaseZap,
} from "lucide-react";
import { useState } from "react";

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`rounded-2xl p-4 shadow-xl ${className}`}>{children}</div>
);

const CardContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

const courseData = [
  // MSc
  { name: "Artificial Intelligence", category: "AI", desc: "Core concepts in intelligent systems.", program: "MSc" },
  { name: "Machine Learning", category: "AI", desc: "Algorithms for pattern recognition and prediction.", program: "MSc" },
  { name: "Natural Language Processing", category: "AI", desc: "Working with human language and AI.", program: "MSc" },
  { name: "Deep Learning", category: "AI", desc: "Neural networks and deep architectures.", program: "MSc" },
  { name: "Computer Vision", category: "AI", desc: "Interpreting visual information through machines.", program: "MSc" },
  { name: "Reinforcement Learning", category: "AI", desc: "Learning through interactions and rewards.", program: "MSc" },
  { name: "Ethics in AI", category: "AI", desc: "Responsible AI development and deployment.", program: "MSc" },
  { name: "Data Mining", category: "AI", desc: "Extracting patterns from large data sets.", program: "MSc" },
  { name: "Optimization", category: "Math", desc: "Improving performance under constraints.", program: "MSc" },
  { name: "Data Engineering", category: "Data", desc: "Building systems to collect and analyze data.", program: "MSc" },

  // BSc
  { name: "Calculus", category: "Math", desc: "Limits, derivatives, integrals, and their applications.", program: "BSc" },
  { name: "Discrete Math", category: "Math", desc: "Logic, sets, functions, and combinatorics.", program: "BSc" },
  { name: "Linear Algebra", category: "Math", desc: "Vector spaces and matrix operations.", program: "BSc" },
  { name: "Statistics", category: "Math", desc: "Data analysis and probability theory.", program: "BSc" },
  { name: "Cyber Security", category: "Systems", desc: "Security principles, cryptography, and threat mitigation.", program: "BSc" },
  { name: "Data Structures and Algorithms", category: "Systems", desc: "Efficient computation and data access.", program: "BSc" },
  { name: "Networking", category: "Systems", desc: "Computer communication protocols and systems.", program: "BSc" },
  { name: "DBMS", category: "Data", desc: "Database Management Systems", program: "BSc" },
  { name: "Software Engineering", category: "Systems", desc: "Principles of scalable software development.", program: "BSc" },
  { name: "Computer Architecture", category: "Systems", desc: "Design and structure of computer hardware.", program: "BSc" },
  { name: "Operating Systems", category: "Systems", desc: "Managing hardware and software resources.", program: "BSc" },
  { name: "Automata Theory", category: "Theory", desc: "Computation theory and language design.", program: "BSc" },
];

const categories = [
  { label: "All", icon: Sparkles },
  { label: "AI", icon: BrainCircuit },
  { label: "Systems", icon: Cpu },
  { label: "Data", icon: DatabaseZap },
  { label: "Math", icon: Sigma },
  { label: "Theory", icon: School },
];

export default function Edu() {
  const [filter, setFilter] = useState("All");
  const filteredCourses =
    filter === "All"
      ? courseData
      : courseData.filter((c) => c.category === filter);

  return (
    <div className="relative min-h-screen text-white font-sans">
      <Canvas className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>

      <div
        id="education"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 tracking-wider text-blue-400 drop-shadow"
        >
          Education
        </motion.h1>

        <div className="w-full max-w-2xl mx-auto space-y-4">
  {/* SJSU */}
  <div className="p-4 bg-zinc-900/70 border-l-4 border-blue-500 rounded-lg shadow hover:shadow-blue-500/20 transition">
    <div className="flex items-center gap-2 mb-1">
      <GraduationCap className="w-4 h-4 text-blue-300" />
      <h2 className="text-base font-semibold text-blue-300">
        San Jose State University (SJSU)
      </h2>
    </div>
    <p className="text-sm text-zinc-300 italic">MSc. Artificial Intelligence</p>
    {/* <p className="text-xs text-zinc-400">
      July 2024 – Present | Part-Time Online Program
    </p> */}
  </div>

  {/* CSU */}
  <div className="p-4 bg-zinc-900/70 border-l-4 border-purple-500 rounded-lg shadow hover:shadow-purple-500/20 transition">
    <div className="flex items-center gap-2 mb-1">
      <School className="w-4 h-4 text-purple-300" />
      <h2 className="text-base font-semibold text-purple-300">
        California State University - Sacramento
      </h2>
    </div>
    <p className="text-sm text-zinc-300 italic">BSc. Computer Science</p>
    {/* <p className="text-xs text-zinc-400">Aug 2018 – May 2023 | Dean’s Honors List</p> */}
  </div>
</div>



        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-green-400 mb-6 drop-shadow"
        >
          Coursework
        </motion.h2>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setFilter(label)}
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                filter === label
                  ? "bg-green-600 text-white border-green-500"
                  : "bg-zinc-800 text-zinc-300 border-zinc-600 hover:bg-green-700 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4" /> {label}
            </button>
          ))}
        </div>

        {/* 🔘 Matrix Node Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl w-full bg-zinc-900/80 p-6 rounded-2xl border border-green-500 shadow-md hover:shadow-green-500/40 transition duration-300"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {filteredCourses.map((course, index) => {
              const isGrad = course.program === "MSc";
              const icon = isGrad ? (
                <GraduationCap className="w-4 h-4 text-blue-300" />
              ) : (
                <School className="w-4 h-4 text-purple-300" />
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.12 }}
                  transition={{ delay: index * 0.02, duration: 0.3 }}
                  className={`relative group p-2 rounded-full border-2 text-xs sm:text-sm flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden
                    ${isGrad
                      ? "border-blue-400 hover:bg-blue-600 hover:text-white"
                      : "border-purple-400 hover:bg-purple-600 hover:text-white"
                    }`}
                >
                  {/* Pulse effect */}
                  <span
                    className={`absolute inset-0 z-0 rounded-full animate-pulse-once opacity-0 group-hover:opacity-100 pointer-events-none
                      ${isGrad ? "bg-blue-300/20" : "bg-purple-300/20"}`}
                  ></span>

                  <div className="z-10 mb-1">{icon}</div>
                  <div className="z-10 font-medium">{course.name}</div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute z-20 bottom-full mb-2 px-3 py-2 rounded shadow-lg text-white text-center whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none text-[10px] sm:text-xs
                      ${isGrad ? "bg-blue-700/90" : "bg-purple-700/90"}`}
                  >
                    {course.desc}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
