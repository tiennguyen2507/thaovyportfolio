"use client";

import React from "react";

export default function HomeHero() {
  return (
    <div className="w-full max-w-[1366px] mx-auto px-6 sm:px-10 py-4 flex flex-col gap-6 lg:gap-8 select-none">
      {/* 1. TOP HERO SECTION */}
      <section className="w-full relative flex flex-col lg:flex-row items-start justify-between min-h-[560px] lg:min-h-[620px] pb-2">
        {/* Left: Giant Typography with Cutout Portrait Layered Underneath Text */}
        <div className="relative w-full lg:w-[62%] flex flex-col justify-start">
          {/* Cutout Portrait Image Behind Text (z-0) */}
          <div className="absolute top-[14%] sm:top-[15%] lg:top-[15%] left-[13%] sm:left-[14%] lg:left-[15%] w-[350px] sm:w-[490px] lg:w-[590px] z-0 pointer-events-none">
            <div className="relative w-full">
              <img
                src="/_assets/media/ac79b52be38aaa3d387de99b05db06ba.png"
                alt="Hoang Pham Thuy Anh Welcome"
                className="w-full h-auto object-contain"
              />

              {/* Soft Pink Heart snug right next to her right shoulder */}
              <div className="absolute top-[34%] right-[16%] sm:right-[18%] transform rotate-[42deg]">
                <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 24 24" fill="#ffc7e0">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Giant Typography Sitting In Front of the Image (z-10) */}
          <h1 className="relative z-10 font-['Intro_Rust'] text-[78px] sm:text-[115px] lg:text-[142px] leading-[0.98] sm:leading-[1.0] lg:leading-[1.02] text-[#f783b7] tracking-normal uppercase">
            welcome
            <br />
            to
            <br />
            my
            <br />
            portfolio
          </h1>
        </div>

        {/* Right: Right-Aligned Details (Name, Major, Pointing Chibi) */}
        <div className="w-full lg:w-[38%] flex flex-col items-end text-right space-y-6 pt-4 lg:pt-2 z-10">
          {/* Name & Nickname */}
          <div className="text-right w-full flex flex-col items-end">
            <h2 className="font-['Intro_Rust'] text-2xl sm:text-[30px] lg:text-[33px] text-[#ffc7e0] uppercase leading-tight tracking-wide text-right">
              hoang pham
              <br />
              thuy anh
            </h2>
            <p className="font-['Intro_Pro'] text-base sm:text-[19px] text-black font-semibold mt-1 text-right">
              Blaze
            </p>
          </div>

          {/* Major & Subtitle */}
          <div className="text-right w-full flex flex-col items-end">
            <h3 className="font-['Intro_Rust'] text-2xl sm:text-[30px] lg:text-[33px] text-[#ffc7e0] uppercase leading-tight tracking-wide text-right">
              communication and
              <br />
              event student
            </h3>
            <p className="font-['Intro_Pro'] text-base sm:text-[19px] text-black font-semibold mt-1 text-right">
              Major PR and Event
            </p>
          </div>

          {/* Pointing Anime Character with Crown - strictly right-aligned */}
          <div className="w-56 sm:w-68 lg:w-76 flex justify-end ml-auto pt-2">
            <img
              src="https://hoangphamthuyanh.com/_assets/media/ce8f972eb76eecf7814d5dd455c4f81c.png"
              alt="Thuy Anh Pointing Character"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. BUS ADVERTISEMENT FEATURE SECTION */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 pt-2">
        {/* Left: Full Standing Anime Girl */}
        <div className="w-full lg:w-[30%] flex justify-center lg:justify-start">
          <img
            src="https://hoangphamthuyanh.com/_assets/media/936b3b4192f93b1614f4f61142f9f73f.png"
            alt="Hoang Pham Thuy Anh Standing Character"
            className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain"
          />
        </div>

        {/* Right: Bus Collage + Slogan */}
        <div className="w-full lg:w-[70%] flex flex-col items-end text-right gap-4">
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src="https://hoangphamthuyanh.com/_assets/media/bf9f155ca16bb72b7e706e4950bcf484.png"
              alt="Thuy Anh on Bus Ads"
              className="w-full h-auto object-contain"
            />
          </div>

          <h2 className="font-['Intro_Rust'] text-xl sm:text-2xl lg:text-[30px] text-[#f783b7] uppercase leading-snug tracking-wide max-w-2xl mt-1 text-right">
            you might just spot me... because i'm
            <br />
            literally everywhere! even on bus ads! 🚍✨
          </h2>
        </div>
      </section>
    </div>
  );
}
