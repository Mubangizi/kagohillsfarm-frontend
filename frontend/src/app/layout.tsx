import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/common/HeaderWrapper";
import Footer from "@/components/common/Footer";
import { AnimatedBackground, ParticleBackground } from "@/components/common/Animated";
import HeaderLightProvider from "@/components/providers/HeaderLightProvider";
import PageLoader from "@/components/common/PageLoader";
import { CURRENT_URL } from "@/assets/data";

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
    default: "Kago Hill Farm - Crafting Exceptional Coffee | Empowering Communities | Women-Led Coffee Enterprise",
    template: "%s | Kago Hill Farm"
  },
  description: "A women-led coffee farm in Kambuga, Kanungu creating world-class Ugandan coffee while empowering women, training youth, and transforming local livelihoods through sustainable farming.",
  keywords: ["Uganda coffee", "women-led coffee farm", "sustainable coffee farming", "Kambuga coffee", "Kanungu coffee", "women's empowerment", "coffee processing", "barista training", "coffee tourism", "specialty coffee Uganda", "organic coffee", "community coffee"],
  authors: [{ name: "Kago Hill Farm" }],
  creator: "Kago Hill Farm",
  publisher: "Kago Hill Farm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(CURRENT_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kago Hill Farm - Crafting Exceptional Coffee, Empowering Communities",
    description: "A women-led coffee enterprise in the hills of Kambuga, creating world-class coffee while uplifting the people who grow it.",
    url: CURRENT_URL,
    siteName: "Kago Hill Farm",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kago Hill Farm - Women-Led Coffee Enterprise in Uganda",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kago Hill Farm - Crafting Exceptional Coffee, Empowering Communities",
    description: "Women-led coffee farm in Kambuga, Uganda transforming lives through sustainable coffee farming and community empowerment.",
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
        <HeaderLightProvider>
          <AnimatedBackground />
          <ParticleBackground transparent />
          <HeaderWrapper />
          {children}
          <Footer />
          <PageLoader />
        </HeaderLightProvider>
      </body>
    </html>
  );
}
