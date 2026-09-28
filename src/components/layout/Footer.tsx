"use client";

import React from "react";

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/anh.hoangphamthuy.3/",
    icon: "https://hoangphamthuyanh.com/_assets/media/d606b63d598ec8af626529997ec4a624.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hpt.anhhh/",
    icon: "https://hoangphamthuyanh.com/_assets/media/95cac10af42d51fea008a82099e325f2.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hptanhhh/",
    icon: "https://hoangphamthuyanh.com/_assets/media/ccf218b1e0274a3a0303ac9bc39230bb.svg",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@hptanhhh",
    icon: "https://hoangphamthuyanh.com/_assets/media/aae225a5c4dad5cccc72857d6faae06f.png",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@hptanhhh",
    icon: "https://hoangphamthuyanh.com/_assets/media/b32781384ab83a36757b33e25f86136f.svg",
  },
];

export default function Footer() {
  return (
    <footer className="w-full max-w-[1366px] mx-auto px-6 sm:px-12 py-10 relative z-20 select-none">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
        {/* Left Info Section */}
        <div className="flex flex-col items-start text-left max-w-xl">
          <h2 className="font-['Intro_Rust'] text-4xl sm:text-5xl lg:text-[54px] text-[#f783b7] tracking-wider leading-none mb-3 uppercase">
            let’s get in touch!
          </h2>

          <h3 className="font-['Intro_Rust'] text-2xl sm:text-[28px] text-[#ffc7e0] tracking-wider leading-tight mb-4 uppercase">
            hoang pham thuy anh
          </h3>

          <div className="font-['Intro_Pro'] text-base sm:text-[17px] text-black space-y-1 mb-6">
            <p>
              <span>Phone Number: </span>
              <a
                href="tel:0906236009"
                className="hover:text-[#f783b7] transition-colors"
              >
                0906236009
              </a>
            </p>
            <p>
              <span>Mail: </span>
              <a
                href="mailto:hptanhhh@gmail.com"
                className="hover:text-[#f783b7] transition-colors"
              >
                hptanhhh@gmail.com
              </a>
            </p>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-3 sm:gap-4">
            {SOCIAL_LINKS.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                title={soc.name}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
              >
                <img src={soc.icon} alt={soc.name} className="w-full h-full object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Decorative Character Sticker */}
        <div className="w-56 sm:w-72 lg:w-80 flex-shrink-0 flex items-center justify-center relative">
          <img
            src="https://hoangphamthuyanh.com/_assets/media/1106e09433d14fa46e18f926751f65f3.png"
            alt="Hoang Pham Thuy Anh Character Sticker"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
