"use client";

import React from "react";
import { 
  Mail, 
  Phone, 
  Heart,
  ArrowUp,
  Sparkles
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white border-t border-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-pink-500" />
            <h3 className="font-intro-rust text-xl font-bold text-[#f783b7] uppercase tracking-wide">
              Hoang Pham Thuy Anh
            </h3>
          </div>
          <p className="text-xs text-gray-500 max-w-sm font-intro-pro">
            Communication & Event Student | RMIT University Hanoi & VinUniversity
          </p>
          <div className="flex items-center gap-4 mt-3 text-xs text-gray-600">
            <a href="tel:0906236009" className="hover:text-pink-600 transition-colors flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-pink-400" />
              <span>0906 236 009</span>
            </a>
            <span>•</span>
            <a href="mailto:hptanhhh@gmail.com" className="hover:text-pink-600 transition-colors flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-pink-400" />
              <span>hptanhhh@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Social Icons with standard SVGs */}
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/anh.hoangphamthuy.3/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-pink-50 text-gray-700 shadow-sm transition-all duration-200 hover:scale-110 hover:bg-blue-600 hover:text-white"
            title="Facebook"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/hptanhhh/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-pink-50 text-gray-700 shadow-sm transition-all duration-200 hover:scale-110 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white"
            title="Instagram"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hptanhhh/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-pink-50 text-gray-700 shadow-sm transition-all duration-200 hover:scale-110 hover:bg-blue-700 hover:text-white"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@hptanhhh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-pink-50 text-gray-700 shadow-sm transition-all duration-200 hover:scale-110 hover:bg-red-600 hover:text-white"
            title="YouTube"
            aria-label="YouTube"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@hptanhhh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-pink-50 text-gray-700 shadow-sm transition-all duration-200 hover:scale-110 hover:bg-black hover:text-white"
            title="TikTok"
            aria-label="TikTok"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01v8.43c0 1.25-.26 2.5-.83 3.61-.9 1.75-2.43 3.12-4.29 3.8-1.57.57-3.29.62-4.88.16-1.84-.53-3.48-1.74-4.52-3.37-1.05-1.64-1.42-3.64-1.06-5.56.36-1.92 1.48-3.64 3.09-4.75 1.62-1.12 3.63-1.54 5.56-1.19.16.03.32.07.47.12v4.15c-.47-.16-.98-.24-1.49-.24-1.02.01-2.02.43-2.73 1.15-.71.72-1.07 1.74-1 2.76.08 1.02.58 1.98 1.4 2.58.82.6 1.86.81 2.85.58.99-.23 1.83-.91 2.29-1.82.25-.5.37-1.06.37-1.63V.02z" />
            </svg>
          </a>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
          <p className="text-xs text-gray-400 flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" />
            <span>for Hoang Pham Thuy Anh Portfolio</span>
          </p>
          <button
            onClick={scrollToTop}
            className="text-xs font-semibold text-pink-500 hover:text-pink-600 flex items-center gap-1 group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
