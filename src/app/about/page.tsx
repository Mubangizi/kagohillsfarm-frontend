import { currentUrl } from "@/assets/data";
import AboutContent from "@/components/about/AboutContent";

export const metadata = {
  title: "About Us - Women-Led Coffee Farm Empowering Communities",
  description: "Inspired by Margaret Mugisha's entrepreneurial journey, Kago Hill Farm transforms lives through sustainable coffee farming, women's empowerment, and community development in Kambuga, Kanungu.",
  openGraph: {
    title: "About Kago Hill Farm - Our Story of Coffee & Community",
    description: "From a mother's legacy to a thriving women-led coffee enterprise empowering families and creating world-class Ugandan coffee.",
    url: `${currentUrl}/about`,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
