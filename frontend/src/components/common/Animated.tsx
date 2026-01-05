"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// Clean, minimalist coffee-themed background
export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle warm gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #faf8f5 0%, #f5f1eb 50%, #f0e9df 100%)",
            "linear-gradient(135deg, #faf8f5 0%, #f3eee6 50%, #efe8dc 100%)",
            "linear-gradient(135deg, #faf8f5 0%, #f5f1eb 50%, #f0e9df 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Minimal, elegant particle system
export const ParticleBackground = ({ transparent = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scene = new THREE.Scene();
    if (!transparent) {
      scene.background = new THREE.Color(0xffffff);
    }

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: transparent,
      antialias: true,
    });

    if (transparent) {
      renderer.setClearColor(0x000000, 0);
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Simple, subtle particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 8000; // Increased for denser particle field
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 6;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: "#b8a590",
      transparent: true,
      opacity: 0.35, // More visible
      sizeAttenuation: true,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);
    camera.position.z = 2.5;

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Gentle animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0003; // Slower rotation
      particlesMesh.rotation.x += 0.0001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      if (container && renderer.domElement.parentNode) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [transparent]);

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" />;
};
