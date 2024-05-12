// import React from 'react';
// import Image from 'next/image'
// import Link from 'next/link';

// const ProjectCard = ({ projects }) => {
//   return (
//     <section className="projects-section">
//       <h1 className="md:font-bold text-cyan-500 text-[40px] flex flex-col items-center justify-center py-20" id="skills">
//          Projects
//       </h1>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {projects.slice(0, 4).map((project) => (
//           <div key={project.id} className="project-card">
//             <div className="relative w-20 h-20">
//               <Image
//                 src={project.imageUrl}
//                 alt={project.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded"
//               />
//             </div>
//             <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
//             <p className="text-gray-600">{project.description}</p>
//             <Link href={project.link} target="_blank" rel="noopener noreferrer">
//               <span className="text-blue-500 hover:text-blue-700">View Project</span>
//             </Link>
//           </div>
//         ))}
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//         {projects.slice(4).map((project) => (
//           <div key={project.id} className="project-card">
//             <div className="relative w-10 h-10">
//               <Image
//                 src={project.imageUrl}
//                 alt={project.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded"
//               />
//             </div>
//             <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
//             <p className="text-gray-600">{project.description}</p>
//             <Link href={project.link} target="_blank" rel="noopener noreferrer">
//               <span className="text-blue-500 hover:text-blue-700">View Project</span>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
// export default ProjectCard;

