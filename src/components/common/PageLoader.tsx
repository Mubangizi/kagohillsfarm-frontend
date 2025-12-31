"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LogoDarkIcon } from "@/assets/images";

export default function PageLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Wait for the page to be fully loaded
        const handleLoad = () => {
            // Add a small delay for smooth transition
            setTimeout(() => {
                setLoading(false);
            }, 800);
        };

        // Check if page is already loaded
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    initial={{ scale: 1 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0b3d2e] via-[#0f5a43] to-[#0b3d2e]"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Growing circular rings */}
                        {[0, 1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute inset-0 rounded-full border-2 border-amber-400/30"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 2.5, 2.5],
                                    opacity: [0, 0.6, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                    delay: i * 0.6,
                                }}
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    left: "50%",
                                    top: "50%",
                                    marginLeft: "-100px",
                                    marginTop: "-100px",
                                }}
                            />
                        ))}

                        {/* Logo with rotating animation */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.34, 1.56, 0.64, 1],
                                type: "spring",
                            }}
                            className="relative mb-8 z-10"
                            style={{ perspective: "1000px" }}
                        >
                            <motion.div
                                animate={{
                                    rotateY: [0, 360],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src={LogoDarkIcon}
                                    alt="Kago Hill Farm"
                                    width={120}
                                    height={120}
                                    priority
                                />
                            </motion.div>

                            {/* Pulsing glow */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-amber-400/30 blur-3xl"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>

                        {/* Brand name with growing animation */}
                        <motion.h2
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 200,
                            }}
                            className="text-2xl font-bold text-white mb-2 z-10"
                        >
                            Kago Hill Farm
                        </motion.h2>

                        {/* Loading text */}
                        <motion.p
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: 0.6,
                                duration: 0.4,
                                type: "spring",
                            }}
                            className="text-gray-300 text-sm z-10"
                        >
                            Loading...
                        </motion.p>

                        {/* Growing progress dots */}
                        <div className="flex gap-3 mt-6 z-10">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-3 h-3 bg-amber-400 rounded-full"
                                    initial={{ scale: 0 }}
                                    animate={{
                                        scale: [0, 1.5, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.3,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

