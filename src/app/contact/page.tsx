import { currentUrl } from "@/assets/data";
import ContactContent from "@/components/contact/ContactContent";


export const metadata = {
  title: "Contact Us - Get in Touch with kago Hill Farm",
  description: "Ready to start your digital transformation? Contact kago Hill Farm today for a free consultation. We're here to help you achieve your technology goals.",
  openGraph: {
    title: "Contact kago Hill Farm - How to work with us",
    description: "Get in touch with our expert team. Free consultation available to discuss your project needs and goals.",
    url: `${currentUrl}/contact`,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
