"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const AnimatedBackground = () => {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{
        // background: [
        //   "linear-gradient(45deg, #f9fafb, #f3f4f6)",
        //   "linear-gradient(45deg, #f3f4f6, #e5e7eb)",
        //   "linear-gradient(45deg, #e5e7eb, #f1f5f9)",
        //   "linear-gradient(45deg, #f1f5f9, #f9fafb)",
        // ],
        background: [
          "linear-gradient(45deg, #faf7f2, #f5f0e8)",
          "linear-gradient(45deg, #f5f0e8, #efe7dd)",
          "linear-gradient(45deg, #efe7dd, #f7f3ec)",
          "linear-gradient(45deg, #f7f3ec, #faf7f2)",
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

export const ParticleBackground = ({ transparent = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    if (!transparent) {
      scene.background = new THREE.Color(0xffffff); // Set white background
    }

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: !transparent,
      antialias: true, // Add antialiasing for smoother particles
    });

    if (transparent) {
      // Set clear color to transparent
      renderer.setClearColor(0x000000, 0);
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: "#b08968",
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);
    camera.position.z = 2;

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};
