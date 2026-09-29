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
    <footer className="w-full max-w-[1366px] mx-auto px-4 sm:px-12 py-6 sm:py-10 relative z-20 select-none">
      <div className="flex flex-row items-center justify-between gap-2 xs:gap-4 sm:gap-8 pt-2 sm:pt-6">
        {/* Left Info Section */}
        <div className="flex flex-col items-start text-left flex-1 min-w-0">
          <h2 className="font-['Intro_Rust'] text-xl xs:text-2xl sm:text-4xl lg:text-[54px] text-[#f783b7] tracking-wider leading-none mb-2 sm:mb-3 uppercase">
            let’s get in touch!
          </h2>

          <h3 className="font-['Intro_Rust'] text-sm xs:text-lg sm:text-2xl lg:text-[28px] text-[#ffc7e0] tracking-wider leading-tight mb-2.5 sm:mb-4 uppercase">
            hoang pham thuy anh
          </h3>

          <div className="font-['Intro_Pro'] text-xs xs:text-sm sm:text-base lg:text-[17px] text-black space-y-0.5 sm:space-y-1 mb-3 sm:mb-6">
            <p>
              <span>Phone Number: </span>
              <a
                href="tel:0906236009"
                className="hover:text-[#f783b7] transition-colors font-medium"
              >
                0906236009
              </a>
            </p>
            <p>
              <span>Mail: </span>
              <a
                href="mailto:hptanhhh@gmail.com"
                className="hover:text-[#f783b7] transition-colors font-medium"
              >
                hptanhhh@gmail.com
              </a>
            </p>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-1.5 xs:gap-2.5 sm:gap-4 flex-wrap">
            {SOCIAL_LINKS.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                title={soc.name}
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0"
              >
                <img src={soc.icon} alt={soc.name} className="w-full h-full object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Decorative Character Sticker (Thu nhỏ, nằm cùng hàng) */}
        <div className="w-24 xs:w-32 sm:w-56 lg:w-72 flex-shrink-0 flex items-center justify-center relative">
          <img
            src="https://hoangphamthuyanh.com/_assets/media/1106e09433d14fa46e18f926751f65f3.png"
            alt="Hoang Pham Thuy Anh Character Sticker"
            className="w-full h-auto object-contain max-w-[130px] xs:max-w-[160px] sm:max-w-[240px] lg:max-w-none"
          />
        </div>
      </div>
    </footer>
  );
}
