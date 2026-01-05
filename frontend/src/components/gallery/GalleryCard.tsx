import Image from "next/image";
import { FiMaximize2, FiImage } from "react-icons/fi";

type GalleryCardProps = {
    imageUrl: string;
    alt: string;
    title?: string;
    category?: string;
    imageCount?: number;
    loading?: "lazy" | "eager";
    quality?: number;
    onClick?: () => void;
};

export default function GalleryCard({
    imageUrl,
    alt,
    title,
    category,
    imageCount,
    loading = "lazy",
    quality = 85,
    onClick
}: GalleryCardProps) {
    return (
        <button
            onClick={onClick}
            className="gallery-card group relative flex-shrink-0 w-80 h-64 overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2"
        >
            <Image
                src={imageUrl}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="320px"
                loading={loading}
                quality={quality}
            />

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category Details on Hover */}
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {category && (
                    <div className="mb-2">
                        <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-[var(--accent-color)] text-white">
                            {category}
                        </span>
                    </div>
                )}
                {title && (
                    <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                        {title}
                    </h3>
                )}
                {imageCount && imageCount > 1 && (
                    <div className="flex items-center gap-1 text-xs text-white/80">
                        <FiImage className="h-3 w-3" />
                        <span>{imageCount} photos</span>
                    </div>
                )}
            </div>

            {/* Expand Icon */}
            <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiMaximize2 className="h-4 w-4 text-white" />
            </div>
        </button>
    );
}

