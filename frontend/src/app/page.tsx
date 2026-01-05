import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";
import TechStackSection from "@/components/home/TechStackSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import { CURRENT_URL, EMAIL, LINKEDIN_LINK, PHONE, TWITTER_LINK } from "@/assets/data";

const structuredData = {
  "@context": CURRENT_URL,
  "@type": "Organization",
  "name": "Kago Hill Farm",
  "url": CURRENT_URL,
  "logo": `${CURRENT_URL}/logo.png`,
  "description": "Women-led coffee enterprise in Kambuga, Kanungu creating world-class Ugandan coffee while empowering women, training youth, and transforming local livelihoods through sustainable farming.",
  "email": EMAIL,
  "telephone": PHONE,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kambuga",
    "addressLocality": "Kanungu District",
    "addressCountry": "Uganda"
  },
  "sameAs": [
    TWITTER_LINK,
    LINKEDIN_LINK
  ],
  "serviceType": [
    "Coffee Farming",
    "Coffee Processing",
    "Barista Training",
    "Women's Empowerment Programs",
    "Agricultural Training",
    "Coffee Tourism",
    "Sustainable Agriculture"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Kambuga, Kanungu District, Uganda"
  },
  "foundingDate": "2019",
  "numberOfEmployees": "30+",
  "slogan": "Crafting Exceptional Coffee. Empowering Communities. Transforming Futures."
};

const serviceStructuredData = {
  "@context": CURRENT_URL,
  "@type": "Service",
  "name": "Coffee Production & Community Empowerment Services",
  "description": "Sustainable coffee farming, processing, women's empowerment programs, barista training, and agricultural education creating world-class Ugandan coffee.",
  "provider": {
    "@type": "Organization",
    "name": "Kago Hill Farm"
  },
  "serviceType": "Agricultural Services",
  "areaServed": "Kambuga, Kanungu District, Uganda",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Coffee & Community Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sustainable Coffee Farming",
          "description": "Training and support for smallholder farmers in improved farming practices, climate-resilient methods, and quality coffee production."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Coffee Processing & Value Addition",
          "description": "Professional hulling, drying, grading, and processing services that enable farmers to earn premium prices for quality coffee."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Women's Empowerment & Training",
          "description": "Structured programs for women in coffee farming, leadership, entrepreneurship, and economic independence."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Barista Training & Coffee Culture",
          "description": "Youth skills development in barista training, coffee tasting, and modern agricultural methods."
        }
      }
    ]
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <TechStackSection />
      <ProcessSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </>
  );
}
