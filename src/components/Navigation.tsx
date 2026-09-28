"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Sparkles, 
  FolderKanban, 
  ChevronDown, 
  Phone, 
  Mail,
  ArrowUpRight
} from "lucide-react";

export const MAIN_NAV_ITEMS = [
  { name: "home", href: "/" },
  { name: "about me", href: "/about-me" },
  { name: "experience", href: "/experience" },
  { name: "testimonies", href: "/testimonies" },
  { name: "drawing", href: "/drawing" },
  { name: "speaking and singing", href: "/speaking-and-singing" },
  { name: "photography", href: "/photography" },
  { name: "writing", href: "/writing" },
];

export const PROJECT_ITEMS = [
  { href: "/grand-opening-starbucks-quang-trung", name: "Grand Opening Starbucks Quang Trung", tag: "Starbucks" },
  { href: "/starbucks-100th-store-open-celebration", name: "Starbucks 100th Store open Celebration", tag: "Starbucks" },
  { href: "/starbucks-fansipan-mountain-opening", name: "Starbucks Fansipan Mountain Opening", tag: "Starbucks" },
  { href: "/3x3-hooptopia-uprising-2025", name: "3x3 HoopTopia Uprising 2025", tag: "HoopTopia" },
  { href: "/3x3-hooptopia-vietnamfinance-2025", name: "3x3 HoopTopia VietnamFinance 2025", tag: "HoopTopia" },
  { href: "/5x5-hooptopia-season-i-2026", name: "5x5 hoopTopia season I 2026", tag: "HoopTopia" },
  { href: "/family-day", name: "Family Day", tag: "Event" },
  { href: "/drama-show---dinh-bo-linh-the-reed-flag-hero", name: "Drama Show - Dinh Bo Linh Hero", tag: "Theatre" },
  { href: "/gladia-by-the-water-event-in-hanoi", name: "Gladia By The Water Event in Hanoi", tag: "Real Estate" },
  { href: "/edufit-summer-intern-program", name: "Edufit summer intern program", tag: "Education" },
  { href: "/dewey-university-fair-2023", name: "Dewey University Fair 2023", tag: "Education" },
  { href: "/prom", name: "Prom", tag: "Event" },
  { href: "/mount-vernon-school-visit-2024", name: "Mount Vernon School Visit 2024", tag: "International" },
  { href: "/tet-market", name: "Tet market", tag: "Culture" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-pink-100 py-3 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/"
          className="group flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold group-hover:scale-110 transition-transform">
            ✨
          </div>
          <span className="font-intro-rust text-xl sm:text-2xl font-bold tracking-tight text-[#f783b7] group-hover:text-pink-600 transition-colors uppercase">
            hoang pham thuy anh
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-all duration-200 capitalize tracking-wide hover:text-[#f783b7] ${
                  isActive 
                    ? "text-[#f783b7] border-b-2 border-[#f783b7] pb-0.5 font-bold" 
                    : "text-gray-700 hover:scale-105"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Projects Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
              onMouseEnter={() => setProjectsDropdownOpen(true)}
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#f783b7] px-3 py-1.5 rounded-full hover:bg-pink-50 transition-all"
            >
              <FolderKanban className="w-4 h-4 text-[#f783b7]" />
              <span>Projects ({PROJECT_ITEMS.length})</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${projectsDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {projectsDropdownOpen && (
              <div 
                onMouseLeave={() => setProjectsDropdownOpen(false)}
                className="absolute right-0 mt-2 w-80 max-h-[460px] overflow-y-auto bg-white rounded-2xl shadow-xl border border-pink-100 p-2 z-50 animate-in fade-in slide-in-from-top-2"
              >
                <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                  Featured Events & Projects
                </div>
                <div className="divide-y divide-gray-50">
                  {PROJECT_ITEMS.map((proj) => {
                    const isProjActive = pathname === proj.href;
                    return (
                      <Link
                        key={proj.href}
                        href={proj.href}
                        onClick={() => setProjectsDropdownOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-pink-50 group transition-colors text-left ${
                          isProjActive ? "bg-pink-50 text-pink-600 font-bold" : ""
                        }`}
                      >
                        <div>
                          <p className="text-xs font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                            {proj.name}
                          </p>
                          <span className="text-[10px] text-pink-400 font-medium">
                            {proj.tag}
                          </span>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-pink-500 opacity-0 group-hover:opacity-100 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Contact Action button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:hptanhhh@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#f783b7] to-[#ff9ebb] text-white text-xs font-bold shadow-md hover:shadow-pink-200 hover:scale-105 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white/95 backdrop-blur-xl border-b border-pink-100 max-h-[85vh] overflow-y-auto px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Main Pages</p>
            {MAIN_NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 border-b border-gray-100 capitalize flex items-center justify-between ${
                  pathname === item.href ? "text-[#f783b7] font-bold" : "text-gray-800 hover:text-pink-500"
                }`}
              >
                <span>{item.name}</span>
                <Sparkles className="w-3.5 h-3.5 text-pink-300" />
              </Link>
            ))}

            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-4">Projects & Events</p>
            <div className="grid grid-cols-1 gap-1.5 pl-2">
              {PROJECT_ITEMS.map((proj) => (
                <Link
                  key={proj.href}
                  href={proj.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs py-1.5 flex items-center justify-between ${
                    pathname === proj.href ? "text-pink-600 font-bold" : "text-gray-600 hover:text-pink-600"
                  }`}
                >
                  <span>{proj.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-50 text-pink-500">
                    {proj.tag}
                  </span>
                </Link>
              ))}
            </div>

            {/* Quick Contact buttons in mobile */}
            <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col gap-2">
              <a 
                href="tel:0906236009"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-pink-50 text-pink-600 text-sm font-bold hover:bg-pink-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call: 0906 236 009</span>
              </a>
              <a 
                href="mailto:hptanhhh@gmail.com"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#f783b7] to-[#ff9ebb] text-white text-sm font-bold shadow-md hover:scale-[1.02] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>hptanhhh@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
