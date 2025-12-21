import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { AnimatedBackground, ParticleBackground } from "@/components/common/Animated";
import { currentUrl } from "@/assets/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kago Hill Farm - Strategic Partner in Digital Transformation | Custom Software Development",
    template: "%s | Kago Hill Farm"
  },
  description: "Transform your business with comprehensive digital solutions. We deliver scalable web, mobile & AI applications, cloud infrastructure, and strategic consulting that drive measurable growth.",
  keywords: ["digital transformation", "custom software development", "web development", "mobile app development", "AI solutions", "cloud services", "DevOps", "business consulting", "enterprise software", "SaaS development"],
  authors: [{ name: "Kago Hill Farm" }],
  creator: "Kago Hill Farm",
  publisher: "Kago Hill Farm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(currentUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kago Hill Farm - Strategic Partner in Digital Transformation",
    description: "From concept to deployment, we deliver scalable web, mobile & AI solutions that transform your business and drive measurable growth.",
    url: currentUrl,
    siteName: "Kago Hill Farm",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kago Hill Farm - Digital Transformation Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kago Hill Farm - Strategic Partner in Digital Transformation",
    description: "Transform your business with our comprehensive digital solutions. Custom software, AI, cloud services & more.",
    images: ["/twitter-image.jpg"],
    creator: "@kagoHillFarm",
    site: "@kagoHillFarm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatedBackground />
        <ParticleBackground transparent />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
