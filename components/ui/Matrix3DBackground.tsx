'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Matrix3DBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current!.appendChild(renderer.domElement);

    // === Particle Field ===
    const particleCount = 1000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      particlePositions[i] = THREE.MathUtils.randFloatSpread(100);
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ffee,
      size: 0.2,
      transparent: true,
      opacity: 0.5,
    });

    const particleMesh = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleMesh);

    // === Neural Core (nodes + connections) ===
    const nodes: THREE.Vector3[] = [];
    const nodeCount = 200;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(80),
          THREE.MathUtils.randFloatSpread(80),
          THREE.MathUtils.randFloatSpread(80)
        )
      );
    }

    // Connection lines
    const linePositions: number[] = [];
    nodes.forEach((a, i) => {
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        if (a.distanceTo(b) < 10) {
          linePositions.push(...a.toArray(), ...b.toArray());
        }
      }
    });

    const connectionGeometry = new THREE.BufferGeometry();
    connectionGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    const connectionMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffcc,
      transparent: true,
      opacity: 0.15,
    });

    const networkLines = new THREE.LineSegments(connectionGeometry, connectionMaterial);
    scene.add(networkLines);

    // Glowing nodes
    const nodeGeometry = new THREE.BufferGeometry().setFromPoints(nodes);
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      transparent: true,
      opacity: 1,
    });

    const nodeMesh = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodeMesh);

    // Camera
    camera.position.z = 60;

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      networkLines.rotation.y += 0.0015;
      nodeMesh.rotation.y += 0.0015;
      particleMesh.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden" />;
};

export default Matrix3DBackground;

