"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import AnimatedButton from "./Buttons";
import { Logoicon } from "@/assets/images";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className={`mx-auto flex items-center justify-between p-6 lg:px-8 lg:py-3 fixed w-full transition-all duration-200 ${
          isScrolled
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
            <span className="text-2xl font-semibold tracking-tight text-balance text-[var(--primary-color)]">
            Kago Hill Farm
            </span>
          </AnimatedButton>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-10 items-center">
          {navigation.map((item) => (
            <AnimatedButton
              key={item.name}
              href={item.href}
              variant="secondary"
            >
              {item.name}
            </AnimatedButton>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <AnimatedButton href="#" variant="secondary">
            Get Started
          </AnimatedButton>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Kago Hill Farm</span>
              <Image alt="Kago Hill Farm" src={Logoicon} width={32} height={32} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <AnimatedButton
                    key={item.name}
                    href={item.href}
                    variant="secondary"
                  >
                    {item.name}
                  </AnimatedButton>
                ))}
              </div>
              <div className="py-6">
                <AnimatedButton href="#" variant="secondary">
                  Get Started
                </AnimatedButton>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
