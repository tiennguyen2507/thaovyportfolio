"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TypewriterText from "@/components/common/TypewriterText";

export const NAV_ITEMS = [
  { name: "home", href: "/" },
  { name: "about me", href: "/about-me" },
  { name: "experience", href: "/experience" },
  { name: "testimonies", href: "/testimonies" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="w-full max-w-[1366px] mx-auto px-4 sm:px-10 pt-2.5 sm:pt-5 pb-1 sm:pb-2 relative z-30 select-none">
      <div className="flex items-center justify-between">
        {/* Left: Avatar + Title with Zero-Shift Typewriter Animation */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-4 group">
          <div className="w-14 h-14 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0">
            <img
              src="https://hoangphamthuyanh.com/_assets/media/813d1384daf8a7d3a253ceb1888613a0.png"
              alt="Hoang Pham Thuy Anh"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <TypewriterText
            text="hoang pham thuy anh"
            speed={90}
            className="font-['Intro_Rust'] text-lg xs:text-xl sm:text-2xl lg:text-[33px] text-[#f783b7] tracking-wider capitalize leading-none pt-1 sm:pt-2 flex items-center whitespace-nowrap"
          />
        </Link>

        {/* Right: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 pt-2">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item.href);
            return (
              <div key={item.name} className="relative flex flex-col items-center">
                {/* Active Soft Pink Heart Indicator */}
                <div
                  className={`absolute -top-6 transition-all duration-300 ${
                    active ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="#ffc7e0"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>

                <Link
                  href={item.href}
                  className={`font-['Intro_Rust'] text-lg sm:text-[20px] tracking-wider transition-colors duration-200 uppercase inline-flex items-center ${
                    active
                      ? "text-black font-normal"
                      : "text-[#f783b7] hover:text-pink-600"
                  }`}
                >
                  <TypewriterText text={item.name} speed={90} />
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#f783b7] hover:bg-pink-50 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-pink-100 flex flex-col gap-4 z-50 mt-2">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-['Intro_Rust'] text-lg py-2 px-3 rounded-lg uppercase flex items-center justify-between transition-colors ${
                  active ? "bg-pink-50 text-black font-bold" : "text-[#f783b7] hover:bg-pink-50"
                }`}
              >
                <span className="inline-flex items-center">
                  <TypewriterText text={item.name} speed={90} />
                </span>
                {active && (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#ffc7e0">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
