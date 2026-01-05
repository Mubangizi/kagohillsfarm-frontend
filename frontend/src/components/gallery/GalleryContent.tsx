"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GalleryCard from "./GalleryCard";
import ImageModal from "./ImageModal";

type SubImage = {
    id: string;
    imageUrl: string;
    alt: string;
};

type GalleryImage = {
    id: string;
    imageUrl: string;
    alt: string;
    title?: string;
    category?: string;
    images?: SubImage[];
};

interface GalleryContentProps {
    images: GalleryImage[];
}

export default function GalleryContent({ images }: GalleryContentProps) {
    // Use provided images or fallback to empty array
    const galleryImages = images.length > 0 ? images : [];
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState<SubImage[]>([]);

    const handleCardClick = (image: GalleryImage) => {
        // If the image has sub-images, show those, otherwise show the main image
        const imagesToShow = image.images && image.images.length > 0
            ? image.images
            : [{ id: image.id, imageUrl: image.imageUrl, alt: image.alt }];

        setSelectedImages(imagesToShow);
        setModalOpen(true);
    };

    // Duplicate images for seamless infinite scroll
    const row1Images = galleryImages.length > 0 ? [...galleryImages, ...galleryImages] : [];
    const row2Images = galleryImages.length > 0 ? [...galleryImages, ...galleryImages] : [];

    return (
        <main className="relative overflow-hidden min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-24 pb-4 sm:pt-28 sm:pb-6">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight primary-color sm:text-5xl lg:text-6xl">
                            Our Work, Captured in Frames
                        </h1>
                        <p className="mt-3 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                            From concept to reality—discover the visual representation of our journey and achievements
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Infinite Scroll Gallery - Two Rows */}
            <section className="relative flex-1 flex flex-col justify-center pb-8">
                {galleryImages.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">
                            No gallery images available yet. Add some images in the Sanity CMS!
                        </p>
                    </div>
                )}
                
                {galleryImages.length > 0 && (
                    <>
                <style jsx>{`
                    @keyframes scroll-left {
                        0% {
                            transform: translate3d(0, 0, 0);
                        }
                        100% {
                            transform: translate3d(-50%, 0, 0);
                        }
                    }
                    @keyframes scroll-right {
                        0% {
                            transform: translate3d(-50%, 0, 0);
                        }
                        100% {
                            transform: translate3d(0, 0, 0);
                        }
                    }
                    .animate-scroll-left {
                        animation: scroll-left 20s linear infinite;
                        will-change: transform;
                    }
                    .animate-scroll-right {
                        animation: scroll-right 20s linear infinite;
                        will-change: transform;
                    }
                    .gallery-row {
                        contain: layout style paint;
                        overflow-x: auto;
                        overflow-y: hidden;
                        -webkit-overflow-scrolling: touch;
                        scroll-behavior: smooth;
                        scrollbar-width: thin;
                        scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
                    }
                    .gallery-row::-webkit-scrollbar {
                        height: 6px;
                    }
                    .gallery-row::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .gallery-row::-webkit-scrollbar-thumb {
                        background: rgba(255, 255, 255, 0.3);
                        border-radius: 3px;
                    }
                    .gallery-row::-webkit-scrollbar-thumb:hover {
                        background: rgba(255, 255, 255, 0.5);
                    }
                    /* Pause animation on interaction */
                    .gallery-row:hover .animate-scroll-left,
                    .gallery-row:hover .animate-scroll-right,
                    .gallery-row:active .animate-scroll-left,
                    .gallery-row:active .animate-scroll-right {
                        animation-play-state: paused;
                    }
                    .gallery-card {
                        contain: layout style paint;
                        transform: translateZ(0);
                        backface-visibility: hidden;
                        perspective: 1000px;
                    }
                `}</style>

                {/* First Row - Scrolling Right */}
                <div className="gallery-row mb-6">
                    <div className="flex animate-scroll-right gap-6">
                        {row1Images.map((image, index) => (
                            <GalleryCard
                                key={`row1-${image.id}-${index}`}
                                imageUrl={image.imageUrl}
                                alt={image.alt}
                                title={image.title}
                                category={image.category}
                                imageCount={image.images?.length}
                                loading={index > 3 ? "lazy" : "eager"}
                                quality={85}
                                onClick={() => handleCardClick(image)}
                            />
                        ))}
                    </div>
                </div>

                {/* Second Row - Scrolling Left */}
                <div className="gallery-row">
                    <div className="flex animate-scroll-left gap-6">
                        {row2Images.map((image, index) => (
                            <GalleryCard
                                key={`row2-${image.id}-${index}`}
                                imageUrl={image.imageUrl}
                                alt={image.alt}
                                title={image.title}
                                category={image.category}
                                imageCount={image.images?.length}
                                loading={index > 3 ? "lazy" : "eager"}
                                quality={85}
                                onClick={() => handleCardClick(image)}
                            />
                        ))}
                    </div>
                </div>
                </>
                )}
            </section>

            {/* Image Modal */}
            <ImageModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                images={selectedImages}
            />
        </main>
    );
}
