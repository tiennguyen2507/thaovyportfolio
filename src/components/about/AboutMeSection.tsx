"use client";

import React from "react";
import Link from "next/link";
import { SOCIAL_LINKS } from "../layout/Footer";
import TypewriterText from "@/components/common/TypewriterText";

const TOOL_LOGOS = [
  { name: "Adobe Illustrator", src: "https://hoangphamthuyanh.com/_assets/media/8dd64ec508694e41bc95232b7b21b9b3.png" },
  { name: "Canva", src: "https://hoangphamthuyanh.com/_assets/media/15d79e0e5c9ac0397d85b0311a806717.png" },
  { name: "Figma", src: "https://hoangphamthuyanh.com/_assets/media/d4234a3c721fb654d5f6e9db8d2f3a21.png" },
  { name: "Tinkercad", src: "https://hoangphamthuyanh.com/_assets/media/ef12f06887016eb78a717f0e1463a919.png" },
  { name: "CapCut", src: "https://hoangphamthuyanh.com/_assets/media/b02ae07d739e8b848e1cd03f985c903b.png" },
  { name: "Procreate", src: "https://hoangphamthuyanh.com/_assets/media/6934e821c9e09bad33951ecf6c0ea74e.png" },
];

const SKILL_BARS = [
  { name: "Copywriting", percent: 80 },
  { name: "Social Media Communication", percent: 70 },
  { name: "Event Communication", percent: 60 },
  { name: "Public Speaking", percent: 90 },
];

const HOBBIES = [
  {
    title: "Drawing",
    href: "/drawing",
    img: "https://hoangphamthuyanh.com/_assets/media/0a42a7ef0e6fb6013a47ec96058e0ec0.png",
  },
  {
    title: "Speaking and Singing",
    href: "/speaking-and-singing",
    img: "https://hoangphamthuyanh.com/_assets/media/7e9030bb3723075f34d6f12cf1dd8418.png",
  },
  {
    title: "Photography",
    href: "/photography",
    img: "https://hoangphamthuyanh.com/_assets/media/b4e382db36593e0959bbc6ff2da34921.png",
  },
  {
    title: "Writing",
    href: "/writing",
    img: "https://hoangphamthuyanh.com/_assets/media/f5dd7b0af174a3505e7172fb0f265421.png",
  },
];

export default function AboutMeSection() {
  return (
    <div className="w-full max-w-[1366px] mx-auto px-4 sm:px-12 py-4 flex flex-col gap-6 sm:gap-8 select-none">
      {/* 1. Page Title */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <TypewriterText
          as="h1"
          text="about me"
          speed={80}
          className="font-['Intro_Rust'] text-4xl sm:text-6xl lg:text-[66px] text-[#f783b7] tracking-wider uppercase leading-none"
        />
        <div className="transform rotate-[41deg]">
          <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="#ffc7e0">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      {/* 2. Intro Statement */}
      <div className="space-y-3 max-w-5xl">
        <TypewriterText
          as="h2"
          lines={[
            "hi, i’m thuy anh!",
            "a student who is interested in pr and event organizing.",
          ]}
          speed={35}
          delay={200}
          className="font-['Intro_Rust'] text-xl sm:text-2xl lg:text-[28px] text-black uppercase tracking-wide leading-snug underline decoration-black decoration-2 underline-offset-4"
          lineClassName="relative block"
        />
        <p className="font-['Intro_Pro'] text-sm sm:text-base text-gray-900 leading-relaxed max-w-4xl pt-1">
          With hands-on experience in media relations and event communication, I aim to craft thoughtful communication experiences that blend creativity, strategy, and human connection.
        </p>
      </div>

      {/* 3. Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-2 items-start">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-8">
          {/* EDUCATION */}
          <section className="flex flex-col gap-3">
            <TypewriterText
              as="h3"
              text="education"
              speed={70}
              className="font-['Intro_Rust'] text-2xl sm:text-[28px] text-black uppercase tracking-wider underline decoration-black decoration-2 underline-offset-4"
            />
            <div className="space-y-4 pt-1">
              <div>
                <h4 className="font-['Intro_Pro'] text-lg sm:text-[20px] font-bold text-[#f783b7]">
                  RMIT University Hanoi | Mar 2026 - Present
                </h4>
                <p className="font-['Intro_Pro'] text-sm sm:text-[16px] text-gray-900 mt-0.5">
                  Bachelor of Professional Communication
                </p>
              </div>
              <div>
                <h4 className="font-['Intro_Pro'] text-lg sm:text-[20px] font-bold text-[#f783b7]">
                  VinUniversity | Aug 2025 - Jan 2026
                </h4>
                <p className="font-['Intro_Pro'] text-sm sm:text-[16px] text-gray-900 mt-0.5">
                  Bachelor of Multimedia Communication
                </p>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="flex flex-col gap-4">
            <TypewriterText
              as="h3"
              text="skills"
              speed={70}
              className="font-['Intro_Rust'] text-2xl sm:text-[28px] text-black uppercase tracking-wider underline decoration-black decoration-2 underline-offset-4"
            />

            {/* 2-Column Grid for Skills: Col 1 is Title (nowrap), Col 2 is Bars/Logos */}
            <div className="grid grid-cols-[max-content_auto] gap-x-6 sm:gap-x-8 gap-y-3.5 items-center max-w-xl pt-1">
              {/* Creativity Row */}
              <span className="font-['Intro_Pro'] text-sm sm:text-[16px] text-black font-normal whitespace-nowrap">
                Creativity
              </span>
              <div className="flex items-center gap-2">
                {TOOL_LOGOS.map((logo, idx) => (
                  <div key={idx} className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0">
                    <img src={logo.src} alt={logo.name} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>

              {/* Progress Bars Rows */}
              {SKILL_BARS.map((sk) => (
                <React.Fragment key={sk.name}>
                  <span className="font-['Intro_Pro'] text-xs sm:text-[16px] text-black font-normal whitespace-nowrap">
                    {sk.name}
                  </span>
                  <div className="w-[120px] xs:w-[160px] sm:w-[210px] h-3 sm:h-3.5 bg-[#ffc7e0] rounded-full overflow-hidden flex-shrink-0">
                    <div
                      className="h-full bg-[#f783b7] rounded-full"
                      style={{ width: `${sk.percent}%` }}
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* HOBBIES */}
          <section className="flex flex-col gap-4">
            <TypewriterText
              as="h3"
              text="hobbies"
              speed={70}
              className="font-['Intro_Rust'] text-2xl sm:text-[28px] text-black uppercase tracking-wider underline decoration-black decoration-2 underline-offset-4"
            />

            <div className="grid grid-cols-2 gap-6 max-w-md pt-1">
              {HOBBIES.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mb-2 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="px-5 py-1.5 rounded-full bg-[#f783b7] text-white font-['Intro_Pro'] text-xs sm:text-sm font-bold group-hover:bg-pink-500 transition-colors whitespace-nowrap">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-8">
          {/* EXPERIENCE */}
          <section className="flex flex-col gap-3">
            <TypewriterText
              as="h3"
              text="experience"
              speed={70}
              className="font-['Intro_Rust'] text-2xl sm:text-[28px] text-black uppercase tracking-wider underline decoration-black decoration-2 underline-offset-4"
            />
            <div className="space-y-4 pt-1">
              <div>
                <h4 className="font-['Intro_Pro'] text-lg sm:text-[20px] font-bold text-[#f783b7]">
                  Hoang Mai Media | Jan 2025 - Present
                </h4>
                <p className="font-['Intro_Pro'] text-sm sm:text-[16px] text-gray-900 mt-0.5">
                  Communication Executive (Part-time)
                </p>
              </div>
              <div>
                <h4 className="font-['Intro_Pro'] text-lg sm:text-[20px] font-bold text-[#f783b7]">
                  HoopTopia | May 2025 - Present
                </h4>
                <p className="font-['Intro_Pro'] text-sm sm:text-[16px] text-gray-900 mt-0.5">
                  Founder
                </p>
              </div>
              <div>
                <h4 className="font-['Intro_Pro'] text-lg sm:text-[20px] font-bold text-[#f783b7]">
                  Edufit | Jun 2024 - Jul 2024
                </h4>
                <p className="font-['Intro_Pro'] text-sm sm:text-[16px] text-gray-900 mt-0.5">
                  Communication Intern
                </p>
              </div>
              <div>
                <h4 className="font-['Intro_Pro'] text-lg sm:text-[20px] font-bold text-[#f783b7]">
                  PARD Vietnam | Jun 2023 - Jul 2023
                </h4>
                <p className="font-['Intro_Pro'] text-sm sm:text-[16px] text-gray-900 mt-0.5">
                  Communication Intern
                </p>
              </div>
            </div>
          </section>

          {/* RESUME/CV */}
          <section className="flex flex-col gap-3">
            <TypewriterText
              as="h3"
              text="resume/cv"
              speed={70}
              className="font-['Intro_Rust'] text-2xl sm:text-[28px] text-black uppercase tracking-wider underline decoration-black decoration-2 underline-offset-4"
            />
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://canva.link/9b9zi2ev641k0qt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-[#f783b7] text-white font-['Intro_Pro'] text-base font-bold hover:bg-pink-500 hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Resume/CV
              </a>
              {/* Pink pointer cursor arrow */}
              <div className="w-6 h-6 transform -rotate-12 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="#ffc7e0" stroke="#f783b7" strokeWidth="1.5">
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
              </div>
            </div>
          </section>

          {/* LANGUAGE */}
          <section className="flex flex-col gap-3">
            <TypewriterText
              as="h3"
              text="language"
              speed={70}
              className="font-['Intro_Rust'] text-2xl sm:text-[28px] text-black uppercase tracking-wider underline decoration-black decoration-2 underline-offset-4"
            />
            <div className="space-y-3 pt-1">
              <div>
                <h4 className="font-['Intro_Pro'] text-base sm:text-[18px] font-bold text-[#f783b7]">
                  Vietnamese
                </h4>
                <p className="font-['Intro_Pro'] text-sm sm:text-[15px] text-gray-900 mt-0.5">
                  Native or bilingual proficiency
                </p>
              </div>
              <div>
                <h4 className="font-['Intro_Pro'] text-base sm:text-[18px] font-bold text-[#f783b7]">
                  English
                </h4>
                <p className="font-['Intro_Pro'] text-sm sm:text-[15px] text-gray-900 mt-0.5">
                  Professional working proficiency (IELTS Academic 6.5 - 2026)
                </p>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="flex flex-col gap-3">
            <h3 className="font-['Intro_Rust'] text-2xl sm:text-[28px] text-black uppercase tracking-wider underline decoration-black decoration-2 underline-offset-4">
              contact
            </h3>
            <div className="font-['Intro_Pro'] text-sm sm:text-[15px] text-black space-y-1 pt-1">
              <p>Phone Number: 0906236009</p>
              <p>Mail: hptanhhh@gmail.com</p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={soc.name}
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 flex-shrink-0"
                >
                  <img src={soc.icon} alt={soc.name} className="w-full h-full object-contain" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
