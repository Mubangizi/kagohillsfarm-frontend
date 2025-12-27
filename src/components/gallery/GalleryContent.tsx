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

// Gallery images - duplicate these for infinite scroll effect
const galleryImages: GalleryImage[] = [
    {
        id: "1",
        imageUrl: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=800&q=80&auto=format&fit=crop",
        alt: "Coffee farm landscape",
        title: "Hills of Kambuga at Sunrise",
        category: "Farm & Landscape",
    },
    {
        id: "2",
        imageUrl: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80&auto=format&fit=crop",
        alt: "Coffee trees",
        title: "Coffee Trees in Lush Terrain",
        category: "Farm & Landscape",
    },
    {
        id: "3",
        imageUrl: "https://images.unsplash.com/photo-1528826194825-5bb3d2ce127a?w=800&q=80&auto=format&fit=crop",
        alt: "Sorting coffee cherries",
        title: "Women Sorting Coffee Cherries",
        category: "Women at Work",
    },
    {
        id: "4",
        imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80&auto=format&fit=crop",
        alt: "Coffee cherries",
        title: "Hand-picking Ripe Cherries",
        category: "Women at Work",
    },
    {
        id: "5",
        imageUrl: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=800&q=80&auto=format&fit=crop",
        alt: "Coffee drying",
        title: "Drying Coffee on Raised Beds",
        category: "Coffee Processing",
    },
    {
        id: "6",
        imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80&auto=format&fit=crop",
        alt: "Coffee processing",
        title: "From Cherry to Clean Bean",
        category: "Coffee Processing",
        images: [
            {
                id: "6.1",
                imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=85&auto=format&fit=crop",
                alt: "Coffee processing - Step 1",
            },
            {
                id: "6.2",
                imageUrl: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=1200&q=85&auto=format&fit=crop",
                alt: "Coffee processing - Step 2",
            },
            {
                id: "6.3",
                imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=85&auto=format&fit=crop",
                alt: "Coffee processing - Step 3",
            },
        ]
    },
    {
        id: "7",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format&fit=crop",
        alt: "Community training",
        title: "Hands-on Farm Learning",
        category: "Training & Community",
    },
    {
        id: "8",
        imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop",
        alt: "Women empowerment",
        title: "Women's Empowerment Sessions",
        category: "Training & Community",
    },
    {
        id: "9",
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80&auto=format&fit=crop",
        alt: "Coffee tasting",
        title: "Coffee Tasting & Culture",
        category: "Coffee Culture",
    },
    {
        id: "10",
        imageUrl: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800&q=80&auto=format&fit=crop",
        alt: "Barista training",
        title: "Barista Training Moments",
        category: "Coffee Culture",
    },
];

export default function GalleryContent() {
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
    const row1Images = [...galleryImages, ...galleryImages];
    const row2Images = [...galleryImages, ...galleryImages];

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
