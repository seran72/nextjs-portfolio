'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Skills array
const skills = [
  'JavaScript', 'Flask', 'React', 'Three.js', 'Intune',
  'PyTorch', 'Git', 'Docker', 'Jira', 'Azure', 'GCP', 'Linux',
  'Ansible', 'SSH', 'Wireshark', 'VMware', 'OAuth', 'Python',
  'Java', 'SQL', 'Grafana'
];

// Random position generator (tighter clustering)
const getRandomPosition = (): [number, number, number] => {
  const spread = 8;
  return [
    (Math.random() - 0.5) * spread,
    (Math.random() - 0.5) * spread,
    (Math.random() - 0.5) * spread,
  ];
};



const FloatingSkill: React.FC<{ text: string; position: [number, number, number] }> = ({ text, position }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      // Smooth bobbing animation
      meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.5;
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.5;
    }
  });

  return (
    <Text
      ref={meshRef}
      position={position}
      fontSize={0.5}
      color="#FF33FF"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

const SkillField: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const positions = useMemo(() => skills.map(() => getRandomPosition()), []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <FloatingSkill key={i} text={skill} position={positions[i]} />
      ))}
    </group>
  );
};

const Skills: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      style={{ width: '100vw', height: '120vh' }}
      className="relative flex flex-col items-center justify-center"
    >
      {/* Skills Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-cyan-400 text-4xl md:text-5xl font-bold z-10 mt-10 tracking-widest"
      >
        Skills
      </motion.h2>

      {/* 3D Canvas */}
      <div className="w-full h-full mt-6">
        <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <SkillField />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.05} />
        </Canvas>
      </div>
    </motion.div>
  );
};


export default Skills;