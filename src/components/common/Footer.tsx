import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { twitterLink, linkedinLink, email } from "@/assets/data";
import { LogoDarkIcon } from "@/assets/images";

const navigation = {
  product: [
    { name: "Our Coffee", href: "#" },
    { name: "Processing", href: "#" },
    { name: "Farm Visits", href: "#" },
    { name: "Coffee Tourism", href: "#" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/about" },
    { name: "Team", href: "/about" },
    { name: "Impact", href: "/about" },
  ],
  resources: [
    { name: "Women's Programs", href: "#" },
    { name: "Training", href: "#" },
    { name: "Partnerships", href: "#" },
    { name: "Support Us", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Email",
      href: `mailto:${email}`,
      icon: FaEnvelope,
    },
    {
      name: "LinkedIn",
      href: linkedinLink,
      icon: FaLinkedin,
    },
    {
      name: "Twitter",
      href: twitterLink,
      icon: FaTwitter,
    },
  ],
};

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-[var(--background)]">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-x-2">
                <Image
                  alt="Kago Hill Farm"
                  src={LogoDarkIcon}
                  width={40}
                  height={40}
                />
                <span className="text-2xl font-semibold text-white">
                Kago Hill Farm
                </span>
              </Link>
              <p className="text-sm leading-6 text-gray-300">
                Crafting exceptional coffee, empowering communities
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Product
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Kago Hill Farm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
