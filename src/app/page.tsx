import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";
import TechStackSection from "@/components/home/TechStackSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import { currentUrl, email, phone, address, linkedinLink } from "@/assets/data";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const structuredData = {
  "@context": "https://kagohillfarm.com",
  "@type": "Organization",
  "name": "kago Hill Farm",
  "url": currentUrl,
  "logo": `${currentUrl}/logo.png`,
  "description": "Strategic partner in digital transformation delivering scalable web, mobile & AI solutions that transform businesses and drive measurable growth.",
  "email": email,
  "telephone": phone,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": address.split(",")[0].trim(),
    "addressCountry": address.split(",")[1].trim()
  },
  "sameAs": [
    linkedinLink,
    "https://twitter.com/kagohillfarm"
  ],
  "serviceType": [
    "Custom Software Development",
    "Web Development", 
    "Mobile App Development",
    "AI Solutions",
    "Cloud Services",
    "DevOps",
    "Digital Consulting"
  ],
  "areaServed": "Global",
  "foundingDate": "2020",
  "numberOfEmployees": "10-50"
};

const serviceStructuredData = {
  "@context": "https://kagohillfarm.com",
  "@type": "Service",
  "name": "Digital Transformation Services",
  "description": "Comprehensive digital transformation services including custom software development, web and mobile applications, AI solutions, cloud infrastructure, and strategic consulting.",
  "provider": {
    "@type": "Organization",
    "name": "kago Hill Farm"
  },
  "serviceType": "Technology Consulting",
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development",
          "description": "Tailored enterprise solutions built to scale with your business needs and integrate seamlessly with existing systems."
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Web & Mobile Development",
          "description": "Modern, responsive applications that deliver exceptional user experiences across all devices and platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "AI & Data Analytics",
          "description": "Intelligent solutions that transform your data into actionable insights and automated business processes."
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
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
