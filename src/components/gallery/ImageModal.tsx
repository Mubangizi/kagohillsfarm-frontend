"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

type ModalImage = {
    id: string;
    imageUrl: string;
    alt: string;
};

type ImageModalProps = {
    isOpen: boolean;
    onClose: () => void;
    images: ModalImage[];
    initialIndex?: number;
};

export default function ImageModal({ isOpen, onClose, images, initialIndex = 0 }: ImageModalProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
        if (e.key === "Escape") onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-0 md:p-4"
                    onClick={onClose}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 md:top-4 md:right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                        aria-label="Close modal"
                    >
                        <FiX className="h-6 w-6" />
                    </button>

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 md:top-4 rounded-full bg-white/10 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-white backdrop-blur-sm z-20">
                            {currentIndex + 1} / {images.length}
                        </div>
                    )}

                    {/* Main Image Container */}
                    <div
                        className="relative w-full h-full md:h-auto md:max-w-6xl md:mx-4 md:aspect-[4/3] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full md:rounded-2xl overflow-hidden"
                            >
                                <Image
                                    src={images[currentIndex].imageUrl}
                                    alt={images[currentIndex].alt}
                                    fill
                                    className="object-contain md:object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1536px) 90vw, 1536px"
                                    priority
                                    quality={95}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrevious();
                                }}
                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                                aria-label="Previous image"
                            >
                                <FiChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                                aria-label="Next image"
                            >
                                <FiChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                            </button>
                        </>
                    )}

                    {/* Thumbnail Strip (if multiple images) - Bottom positioned */}
                    {images.length > 1 && (
                        <div className="absolute bottom-2 md:bottom-4 left-0 right-0 z-20 flex justify-center px-2 md:px-4">
                            <div className="flex gap-2 overflow-x-auto p-2 max-w-full scrollbar-hide">
                                {images.map((image, index) => (
                                    <button
                                        key={image.id}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentIndex(index);
                                        }}
                                        className={`relative h-12 w-12 md:h-16 md:w-16 flex-shrink-0 overflow-hidden rounded-lg transition-all ${index === currentIndex
                                                ? "ring-2 ring-white ring-offset-2 ring-offset-black"
                                                : "opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                            sizes="64px"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

