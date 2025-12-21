import { currentUrl } from "@/assets/data";
import AboutContent from "@/components/about/AboutContent";

export const metadata = {
  title: "About Us - Leading Digital Transformation Partner",
  description: "Learn about kago Hill Farm's mission, values, and expert team. We're passionate about delivering scalable digital solutions that transform businesses and drive growth.",
  openGraph: {
    title: "About kago Hill Farm - Your Strategic Coffee Partner",
    description: "Discover how our expert team delivers cutting-edge digital solutions that transform businesses worldwide.",
    url: `${currentUrl}/about`,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
