import { CURRENT_URL } from "@/assets/data";
import GalleryContent from "@/components/gallery/GalleryContent";
import { getGalleryImages } from "@/lib/sanity-queries";

export const metadata = {
    title: "Gallery - Life at Kago Hill Farm",
    description:
        "Explore Kago Hill Farm through photos of our farm landscape, women-led coffee work, processing, training, and community impact in Kambuga, Kanungu District.",
    openGraph: {
        title: "Gallery - Life at Kago Hill Farm",
        description:
            "Browse our farm, our people, and the journey from seed to cup—organized by category.",
        url: `${CURRENT_URL}/gallery`,
    },
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function GalleryPage() {
    const galleryImages = await getGalleryImages();
    
    return <GalleryContent images={galleryImages} />;
}