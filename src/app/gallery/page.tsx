import { currentUrl } from "@/assets/data";
import GalleryContent from "@/components/gallery/GalleryContent";

export const metadata = {
    title: "Gallery - Life at Kago Hill Farm",
    description:
        "Explore Kago Hill Farm through photos of our farm landscape, women-led coffee work, processing, training, and community impact in Kambuga, Kanungu District.",
    openGraph: {
        title: "Gallery - Life at Kago Hill Farm",
        description:
            "Browse our farm, our people, and the journey from seed to cup—organized by category.",
        url: `${currentUrl}/gallery`,
    },
};

export default function GalleryPage() {
    return <GalleryContent />;
}