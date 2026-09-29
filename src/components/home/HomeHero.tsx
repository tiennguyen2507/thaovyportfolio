"use client";

import React from "react";
import TypewriterText from "@/components/common/TypewriterText";

const FULL_LINES = ["WELCOME", "TO", "MY", "PORTFOLIO"];

export default function HomeHero() {
  return (
    <div className="w-full max-w-[1366px] mx-auto px-4 sm:px-10 py-1 sm:py-4 flex flex-col gap-5 sm:gap-8 select-none overflow-x-hidden">
      {/* 1. TOP HERO SECTION */}
      <section className="w-full relative flex flex-col lg:flex-row items-start justify-between min-h-0 lg:min-h-[620px] pb-1 sm:pb-2">
        {/* Left: Giant Typography with Cutout Portrait Layered Underneath Text */}
        <div className="relative w-full lg:w-[62%] flex flex-col justify-start">
          {/* Cutout Portrait Image Behind Text (z-0) */}
          <div className="absolute top-[12%] sm:top-[15%] lg:top-[15%] left-[11%] xs:left-[12%] sm:left-[14%] lg:left-[15%] w-[300px] xs:w-[320px] sm:w-[490px] lg:w-[590px] z-0 pointer-events-none transition-opacity duration-700 ease-out">
            <div className="relative w-full">
              <img
                src="/_assets/media/ac79b52be38aaa3d387de99b05db06ba.png"
                alt="Hoang Pham Thuy Anh Welcome"
                className="w-full h-auto object-contain"
              />

              {/* Soft Pink Heart snug right next to her right shoulder */}
              <div className="absolute top-[34%] right-[15%] sm:right-[18%] transform rotate-[42deg]">
                <svg className="w-8 h-8 sm:w-11 sm:h-11" viewBox="0 0 24 24" fill="#ffc7e0">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Giant Typography with Zero-Shift Typewriter Animation (z-10) */}
          <TypewriterText
            as="h1"
            lines={FULL_LINES}
            speed={110}
            className="relative z-10 font-['Intro_Rust'] text-[60px] sm:text-[115px] lg:text-[142px] leading-[0.96] sm:leading-[1.0] lg:leading-[1.02] text-[#f783b7] tracking-normal uppercase flex flex-col items-start justify-start"
            lineClassName="relative whitespace-nowrap flex items-center"
          />
        </div>

        {/* Right Section: Details + Pointing Chibi (Side by side on mobile: Image Left, Text Right) */}
        <div className="w-full lg:w-[38%] flex flex-row lg:flex-col items-center lg:items-end justify-between gap-3 sm:gap-6 mt-3 sm:mt-6 lg:mt-2 z-10">
          {/* Hình bên trái (Left on mobile, bottom on desktop) */}
          <div className="w-[36%] xs:w-[40%] sm:w-[42%] lg:w-76 flex justify-start lg:justify-end order-1 lg:order-2 flex-shrink-0">
            <img
              src="https://hoangphamthuyanh.com/_assets/media/ce8f972eb76eecf7814d5dd455c4f81c.png"
              alt="Thuy Anh Pointing Character"
              className="w-full h-auto object-contain max-w-[170px] xs:max-w-[210px] sm:max-w-[280px] lg:max-w-none"
            />
          </div>

          {/* Chữ bên phải (Right on mobile, top on desktop) */}
          <div className="w-[62%] xs:w-[58%] sm:w-[55%] lg:w-full flex flex-col items-end text-right space-y-2.5 xs:space-y-3.5 sm:space-y-6 order-2 lg:order-1">
            {/* Name & Nickname */}
            <div className="text-right w-full flex flex-col items-end">
              <TypewriterText
                as="h2"
                lines={["hoang pham", "thuy anh"]}
                speed={70}
                delay={200}
                className="font-['Intro_Rust'] text-base xs:text-xl sm:text-[30px] lg:text-[33px] text-[#ffc7e0] uppercase leading-tight tracking-wide text-right"
                lineClassName="relative whitespace-nowrap block"
              />
              <TypewriterText
                as="p"
                text="Blaze"
                speed={80}
                delay={450}
                className="font-['Intro_Pro'] text-xs xs:text-sm sm:text-[19px] text-black font-semibold mt-0.5 sm:mt-1 text-right"
              />
            </div>

            {/* Major & Subtitle */}
            <div className="text-right w-full flex flex-col items-end">
              <TypewriterText
                as="h3"
                lines={["communication and", "event student"]}
                speed={60}
                delay={350}
                className="font-['Intro_Rust'] text-[13px] xs:text-base sm:text-[30px] lg:text-[33px] text-[#ffc7e0] uppercase leading-tight tracking-wide text-right"
                lineClassName="relative whitespace-nowrap block"
              />
              <TypewriterText
                as="p"
                text="Major PR and Event"
                speed={60}
                delay={600}
                className="font-['Intro_Pro'] text-[11px] xs:text-xs sm:text-[19px] text-black font-semibold mt-0.5 sm:mt-1 text-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUS ADVERTISEMENT FEATURE SECTION */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-8 pt-2 sm:pt-4">
        {/* Full Standing Anime Girl (Nằm dưới ảnh xe bus trên mobile, bên trái trên desktop) */}
        <div className="w-full lg:w-[28%] flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            src="https://hoangphamthuyanh.com/_assets/media/936b3b4192f93b1614f4f61142f9f73f.png"
            alt="Hoang Pham Thuy Anh Standing Character"
            className="w-full max-w-[120px] xs:max-w-[150px] sm:max-w-[240px] lg:max-w-[320px] h-auto object-contain"
          />
        </div>

        {/* Bus Collage + Slogan (Nằm trên ảnh hoạt hình trên mobile, bên phải trên desktop) */}
        <div className="w-full lg:w-[72%] flex flex-col items-end text-right gap-2.5 sm:gap-4 order-1 lg:order-2">
          <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-sm">
            <img
              src="https://hoangphamthuyanh.com/_assets/media/bf9f155ca16bb72b7e706e4950bcf484.png"
              alt="Thuy Anh on Bus Ads"
              className="w-full h-auto object-contain"
            />
          </div>

          <TypewriterText
            as="h2"
            lines={[
              "you might just spot me... because i'm",
              "literally everywhere! even on bus ads! 🚍✨",
            ]}
            speed={45}
            delay={100}
            className="font-['Intro_Rust'] text-xs xs:text-sm sm:text-2xl lg:text-[30px] text-[#f783b7] uppercase leading-snug tracking-wide max-w-2xl mt-0.5 sm:mt-1 text-right"
            lineClassName="relative block"
          />
        </div>
      </section>
    </div>
  );
}
