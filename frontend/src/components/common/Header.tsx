"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FiHome, FiInfo, FiImage, FiMail } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedButton from "./Buttons";
import { Logoicon } from "@/assets/images";

const navigation = [
  { name: "Home", href: "/", icon: FiHome },
  { name: "About", href: "/about", icon: FiInfo },
  { name: "Gallery", href: "/gallery", icon: FiImage },
  { name: "Contact", href: "/contact", icon: FiMail },
];

interface HeaderProps {
  light?: boolean;
}

export default function Header({ light = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  const textColor = light && !isScrolled ? "text-gray-100" : "text-[var(--primary-color)]";
  const iconColor = light && !isScrolled ? "text-gray-100" : "text-gray-700";

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className={`mx-auto flex items-center justify-between p-6 lg:px-8 lg:py-3 fixed w-full transition-all duration-200 ${isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-transparent"
          }`}
      >
        <div className="flex lg:flex-1">
          <AnimatedButton
            href="/"
            variant="secondary"
            className="flex items-center gap-x-2 -m-1.5 p-1.5"
          >
            <Image alt="Kago Hill Farm" src={Logoicon} width={40} height={40} />
            <span className={`text-2xl font-semibold tracking-tight text-balance transition-colors duration-200 ${textColor}`}>
              Kago Hill Farm
            </span>
          </AnimatedButton>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2 transition-all duration-200 hover:bg-white/10 active:scale-95 ${iconColor}`}
            aria-label="Open menu"
          >
            <Bars3Icon aria-hidden="true" className="h-7 w-7" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group text-sm font-semibold transition-all duration-200 relative ${active
                  ? light && !isScrolled
                    ? "text-white"
                    : "text-[var(--accent-color)]"
                  : light && !isScrolled
                    ? "text-gray-100 hover:text-white"
                    : "text-[var(--primary-color)] hover:text-[var(--accent-color)]"
                  }`}
              >
                {item.name}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-color)] rounded-full" />
                )}
              </Link>
            );
          })}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <AnimatedButton
            href="/contact"
            variant="secondary"
            className={light && !isScrolled ? "!text-gray-100 hover:!text-white transition-colors duration-200" : "transition-colors duration-200"}
          >
            Partner With Us
          </AnimatedButton>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <Image alt="Kago Hill Farm" src={Logoicon} width={32} height={32} />
              <span className="text-lg font-semibold text-[var(--primary-color)]">
                Kago Hill Farm
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-full p-2 text-gray-700 hover:bg-gray-100 active:scale-95 transition-all duration-200"
              aria-label="Close menu"
            >
              <XMarkIcon aria-hidden="true" className="h-7 w-7" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-1 py-6">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-semibold transition-all duration-200 ${active
                        ? "bg-[var(--accent-color)] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[var(--primary-color)] px-4 py-3 text-base font-semibold text-white hover:bg-[var(--primary-color-light)] transition-colors duration-200"
                >
                  <FiMail className="h-5 w-5" />
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
