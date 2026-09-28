"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowUp, 
  ListOrdered, 
  Phone, 
  Mail, 
  Sparkles,
  X
} from "lucide-react";
import { MAIN_NAV_ITEMS, PROJECT_ITEMS } from "./Navigation";

export default function FloatingControls() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Bottom Right Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2">
        {/* Table of contents toggle */}
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="p-3 rounded-full bg-white text-gray-800 shadow-xl border border-pink-100 hover:text-pink-600 hover:scale-110 transition-all group relative"
          title="All Pages Directory"
        >
          <ListOrdered className="w-5 h-5 text-pink-500" />
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-gray-900 text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Site Directory
          </span>
        </button>

        {/* Back to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gradient-to-tr from-[#f783b7] to-[#ff9ebb] text-white shadow-xl hover:scale-110 active:scale-95 transition-all"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Pages Directory Drawer Modal */}
      {tocOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-pink-100">
                <div className="flex items-center gap-2 text-pink-600 font-bold">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-intro-rust text-lg uppercase">Pages Directory</span>
                </div>
                <button
                  onClick={() => setTocOpen(false)}
                  className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Main Sections</h4>
                  <div className="space-y-1">
                    {MAIN_NAV_ITEMS.map((item, idx) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setTocOpen(false)}
                        className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors capitalize flex items-center justify-between"
                      >
                        <span>{idx + 1}. {item.name}</span>
                        <span className="text-[10px] text-pink-400 font-mono">#{idx + 1}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Events & Projects</h4>
                  <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                    {PROJECT_ITEMS.map((proj, idx) => (
                      <Link
                        key={proj.href}
                        href={proj.href}
                        onClick={() => setTocOpen(false)}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-600 transition-colors flex items-center justify-between"
                      >
                        <span className="truncate">{idx + 9}. {proj.name}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-pink-100 text-pink-600 shrink-0 ml-2">
                          {proj.tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-6 border-t border-pink-100 space-y-2">
              <a
                href="tel:0906236009"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-pink-50 text-pink-600 text-xs font-bold hover:bg-pink-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>0906 236 009</span>
              </a>
              <a
                href="mailto:hptanhhh@gmail.com"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#f783b7] to-[#ff9ebb] text-white text-xs font-bold shadow-md hover:opacity-95 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>hptanhhh@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
