"use client";
import AnimatedButton from "../common/Buttons";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <div className="mx-auto max-w-2xl min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden sm:mb-8 sm:flex sm:justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative rounded-full px-3 py-1 text-pretty text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Free consultation for your next project - limited time.{" "}
            <a href="#" className="font-semibold primary-color">
              <span aria-hidden="true" className="absolute inset-0" />
              Book now <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-5xl font-semibold tracking-tight text-balance primary-color sm:text-7xl"
          >
            Your Strategic Partner in <span className="text-gray-800">Digital Transformation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
          >
            From concept to deployment, we deliver scalable web, mobile & AI solutions that transform your business and drive measurable growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <AnimatedButton href="/contact#contact-form">Get started</AnimatedButton>
            <AnimatedButton variant="secondary" href="/about">
              Learn more
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
