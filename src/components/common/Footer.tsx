import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GoHome, GoInfo, GoImage } from "react-icons/go";
import { TWITTER_LINK, LINKEDIN_LINK, EMAIL, ADDRESS } from "@/assets/data";
import { LogoDarkIcon } from "@/assets/images";

const quickLinks = [
  { name: "Home", href: "/", icon: GoHome },
  { name: "About", href: "/about", icon: GoInfo },
  { name: "Gallery", href: "/gallery", icon: GoImage },
];

const socialLinks = [
  {
    name: "Email",
    href: `mailto:${EMAIL}`,
    icon: FaEnvelope,
  },
  {
    name: "LinkedIn",
    href: LINKEDIN_LINK,
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    href: TWITTER_LINK,
    icon: FaTwitter,
  },
];

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-[var(--background)]">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Tagline */}
          <div className="space-y-4 text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-x-3">
              <Image
                alt="Kago Hill Farm"
                src={LogoDarkIcon}
                width={48}
                height={48}
              />
              <span className="text-2xl font-bold text-white">
                Kago Hill Farm
              </span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Crafting exceptional coffee, empowering communities
            </p>
            <p className="text-xs text-gray-400">
              {ADDRESS}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <nav className="grid grid-cols-3 gap-x-6 gap-y-3 w-fit">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-sm font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-end space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Kago Hill Farm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
