"use client";
import AnimatedButton from "../common/Buttons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useHeaderLight } from "@/components/providers/HeaderLightProvider";

const slides = [
  {
    title: "Exceptional Coffee",
    subtitle: "Grown with Purpose",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=85&auto=format&fit=crop",
    alt: "Coffee plantation at sunrise",
    badge: "100% Arabica",
    showStats: true,
  },
  {
    title: "Women-Led",
    subtitle: "Community-Driven",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=85&auto=format&fit=crop",
    alt: "Women farmers working together",
    badge: "30+ Women Employed",
  },
  {
    title: "From Farm to Cup",
    subtitle: "Quality at Every Step",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&q=85&auto=format&fit=crop",
    alt: "Coffee cherries being handpicked",
    badge: "Sustainable Farming",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setIsLight } = useHeaderLight();

  useEffect(() => {
    // Set header to light mode when component mounts
    setIsLight(true);

    // Revert to dark mode when component unmounts
    return () => setIsLight(false);
  }, [setIsLight]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="carousel h-screen relative">
        <div className="carousel-body h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
                aria-label={slide.alt}
              />

              {/* Overlay gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" /> */}

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 w-full">
                  <div className="max-w-3xl">
                    <motion.div
                      key={`content-${index}-${activeIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: index === activeIndex ? 1 : 0, y: index === activeIndex ? 0 : 20 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {/* Badge */}
                      <div className="inline-flex items-center gap-3 mb-6 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20 text-sm text-white">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
                        {slide.badge}
                      </div>

                      {/* Title */}
                      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
                        {slide.title}
                        <span className="block mt-2 text-amber-200 sm:text-5xl lg:text-6xl font-semibold">
                          {slide.subtitle}
                        </span>
                      </h1>

                      {/* Buttons */}
                      <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                        <AnimatedButton href="/contact#contact-form">Partner With Us</AnimatedButton>
                        <AnimatedButton variant="secondary" color="#fff" href="/about">
                          Our Story
                        </AnimatedButton>
                      </div>

                      {/* Stats */}
                      {slide.showStats && (
                        <div className="mt-12 grid grid-cols-3 gap-6 text-sm">
                          <div>
                            <div className="text-2xl font-bold text-white">100%</div>
                            <div className="mt-1 text-gray-200">Arabica Coffee</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">Premium</div>
                            <div className="mt-1 text-gray-200">High-Altitude</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">Community</div>
                            <div className="mt-1 text-gray-200">First Approach</div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Pagination Dots */}
      <div className="carousel-pagination absolute bottom-8 start-0 end-0 flex justify-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`carousel-dot h-3 w-3 rounded-full transition-all duration-300 ${idx === activeIndex
              ? "bg-white w-8"
              : "bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      {/* <div className="absolute bottom-8 right-8 text-sm text-white/80 backdrop-blur-sm bg-black/20 px-3 py-2 rounded-lg hidden lg:block z-20">
        {activeIndex + 1} / {slides.length}
      </div> */}
    </div>
  );
}
