import { currentUrl } from "@/assets/data";
import ContactContent from "@/components/contact/ContactContent";


export const metadata = {
  title: "Contact Us - Partner with Kago Hill Farm",
  description: "Connect with Kago Hill Farm to partner with us, invest in sustainable coffee farming, or learn about our women's empowerment programs in Kambuga, Kanungu.",
  openGraph: {
    title: "Contact Kago Hill Farm - Partner With Us",
    description: "Join us in transforming lives through coffee. Support our mission to empower women and communities in Uganda.",
    url: `${currentUrl}/contact`,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
