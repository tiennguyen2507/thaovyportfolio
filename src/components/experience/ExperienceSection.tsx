"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import TypewriterText from "@/components/common/TypewriterText";

interface ExperienceItem {
  title: string;
  role: string;
  description: string;
  image: string;
  href: string;
}

interface CategoryGroup {
  categoryName: string;
  items: ExperienceItem[];
}

const EXPERIENCE_DATA: CategoryGroup[] = [
  {
    categoryName: "food and beverage",
    items: [
      {
        title: "grand opening starbucks quang trung",
        role: "Event Organizer",
        description:
          "A private party held ahead of the grand opening of the first Starbucks x Mixology concept in Vietnam.",
        image: "https://hoangphamthuyanh.com/_assets/media/bb8ca7eb07bed126babe02369a4e8dc4.jpg",
        href: "/grand-opening-starbucks-quang-trung",
      },
      {
        title: "starbucks 100th store open celebration",
        role: "Event Organizer",
        description:
          "Starbucks Vietnam's 100th store opening event at Lotte West Lake, Hanoi.",
        image: "https://hoangphamthuyanh.com/_assets/media/3ddbfb7b59c5af1ec6f6f07a55c4317c.jpg",
        href: "/starbucks-100th-store-open-celebration",
      },
      {
        title: "starbucks fansipan mountain opening",
        role: "Event Organizer",
        description:
          "The opening event for one of the highest Starbucks locations took place atop Fansipan mountain.",
        image: "https://hoangphamthuyanh.com/_assets/media/132587134bfcd95789dcd11adbee71c0.jpg",
        href: "/starbucks-fansipan-mountain-opening",
      },
    ],
  },
  {
    categoryName: "sports",
    items: [
      {
        title: "3x3 hooptopia uprising 2025",
        role: "Head of Event Organizing",
        description:
          "This is a youth basketball tournament, held in observance of National Independent Day.",
        image: "https://hoangphamthuyanh.com/_assets/media/4d784a8163a83621c782d0fe8d9a12fe.jpg",
        href: "/3x3-hooptopia-uprising-2025",
      },
      {
        title: "3x3 vietnamfinance hooptopia 2025",
        role: "Head of Event Organizing",
        description:
          "This basketball tournament is for young people, in celebration of a vibrant and active summer.",
        image: "https://hoangphamthuyanh.com/_assets/media/80c64b9a81251e71cfad808a045b4e4d.png",
        href: "/3x3-hooptopia-vietnamfinance-2025",
      },
      {
        title: "5x5 hooptopia season i 2026",
        role: "Head of Event Organizing",
        description:
          "This basketball tournament is for young people, aiming to enhance the experience and skills of the players.",
        image: "https://hoangphamthuyanh.com/_assets/media/c2027ef86e93db74a23078a9ffb8e6ee.png",
        href: "/5x5-hooptopia-season-i-2026",
      },
      {
        title: "family day 2023",
        role: "Event Organizing Department",
        description:
          "The event brought students and parents meaningful experiences and built up the spirit of sport.",
        image: "https://hoangphamthuyanh.com/_assets/media/c816b5e45b8fe906f0d279da2985e5b7.jpg",
        href: "/family-day",
      },
    ],
  },
  {
    categoryName: "education",
    items: [
      {
        title: "drama show - dinh bo linh, the reed flag hero",
        role: "Head of External Relations and Event",
        description:
          "Vietnamese historical plays are written in English, aiming to bring historical knowledge closer to international students.",
        image: "https://hoangphamthuyanh.com/_assets/media/98f42bb077d0ac5e92812ed34e8f8d91.jpg",
        href: "/drama-show---dinh-bo-linh-the-reed-flag-hero",
      },
      {
        title: "edufit summer intern program",
        role: "Communication Intern",
        description:
          "This internship program is designed for students to learn about and gain firsthand experience in media work.",
        image: "https://hoangphamthuyanh.com/_assets/media/e8c36f3b346e840269e4195e437f5a6c.jpg",
        href: "/edufit-summer-intern-program",
      },
      {
        title: "dewey university fair 2023",
        role: "Event Organizer",
        description:
          "The event provided extensive opportunities for students to explore 50 colleges and universities from 17 countries.",
        image: "https://hoangphamthuyanh.com/_assets/media/be1cae5c8ce07065b298a3ef9575596c.jpg",
        href: "/dewey-university-fair-2023",
      },
      {
        title: "prom 2024",
        role: "Head of Event Organizing",
        description:
          "The annual Prom event for graduating high school students includes many games and spectacular performances.",
        image: "https://hoangphamthuyanh.com/_assets/media/49f5f30ee6c3358b12d4f2e850c3eff3.jpg",
        href: "/prom",
      },
      {
        title: "mount vernon school visit 2024",
        role: "Head of Event Organizing",
        description:
          "The event was organized to welcome the student group from the partner school Mount Vernon, Georgia (US).",
        image: "https://hoangphamthuyanh.com/_assets/media/1d45f7e3b1e06d5f22a00d3447c573d8.jpg",
        href: "/mount-vernon-school-visit-2024",
      },
      {
        title: "tet market 2023",
        role: "Head of Event Organizing",
        description:
          "The Tet Market event aims to bring the traditional Tet celebrations of countries closer to the school's diverse community.",
        image: "https://hoangphamthuyanh.com/_assets/media/b65f0fddf5e5ccd71e844c798d2d44b7.jpg",
        href: "/tet-market",
      },
    ],
  },
  {
    categoryName: "real estate",
    items: [
      {
        title: "gladia by the water hanoi event",
        role: "Event Organizer",
        description:
          "Gladia By The Water, a real estate in Ho Chi Minh City, which has been launched for customers in the Hanoi area.",
        image: "https://hoangphamthuyanh.com/_assets/media/b65f0fddf5e5ccd71e844c798d2d44b7.jpg",
        href: "/gladia-by-the-water-event-in-hanoi",
      },
    ],
  },
];

export default function ExperienceSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  // Pre-calculate starting index for each category
  const categoryStartIndexes = EXPERIENCE_DATA.reduce<number[]>((acc, cat, idx) => {
    if (idx === 0) return [0];
    return [...acc, acc[idx - 1] + EXPERIENCE_DATA[idx - 1].items.length];
  }, []);

  const totalCards = EXPERIENCE_DATA.reduce((acc, cat) => acc + cat.items.length, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 80);

    const doneTimer = setTimeout(() => {
      setAnimationDone(true);
    }, totalCards * 100 + 750);

    return () => {
      clearTimeout(timer);
      clearTimeout(doneTimer);
    };
  }, [totalCards]);

  return (
    <div className="w-full max-w-[1366px] mx-auto px-4 sm:px-12 py-4 flex flex-col gap-8 sm:gap-10 select-none">
      {/* 1. Page Title */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <TypewriterText
          as="h1"
          text="event"
          speed={80}
          className="font-['Intro_Rust'] text-4xl sm:text-6xl lg:text-[66px] text-[#f783b7] tracking-wider uppercase leading-none"
        />
        <div className="transform rotate-[41deg]">
          <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="#ffc7e0">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      {/* 2. Categorized Project Grids */}
      {EXPERIENCE_DATA.map((cat, catIdx) => (
        <section key={cat.categoryName} className="flex flex-col gap-6">
          {/* Category Header */}
          <TypewriterText
            as="h2"
            text={cat.categoryName}
            speed={65}
            className="font-['Intro_Rust'] text-2xl sm:text-[30px] text-black uppercase tracking-wider underline decoration-black decoration-2 underline-offset-4"
          />

          {/* 2-Column on Mobile, 3-Column on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8 lg:gap-10 items-start">
            {cat.items.map((item, itemIdx) => {
              const cardIndex = categoryStartIndexes[catIdx] + itemIdx;
              return (
                <article
                  key={item.title}
                  style={
                    animationDone
                      ? undefined
                      : {
                          transitionDelay: isLoaded ? `${cardIndex * 100}ms` : "0ms",
                        }
                  }
                  className={`flex flex-col justify-start group transition-all duration-700 ease-out ${
                    isLoaded
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95 pointer-events-none"
                  }`}
                >
                {/* Thumbnail Image */}
                <Link
                  href={item.href}
                  className="block w-full overflow-hidden rounded-xl sm:rounded-2xl mb-2 sm:mb-4 aspect-[16/10] bg-gray-100 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Project Title */}
                <Link href={item.href} className="inline-block">
                  <h3 className="font-['Intro_Rust'] text-xs xs:text-sm sm:text-[20px] lg:text-[21px] text-[#ffc7e0] uppercase leading-snug tracking-wide underline decoration-[#ffc7e0] underline-offset-2 sm:underline-offset-4 group-hover:text-pink-400 transition-colors mb-1 sm:mb-2 min-h-[34px] sm:min-h-[50px]">
                    {item.title}
                  </h3>
                </Link>

                {/* Role */}
                <p className="font-['Intro_Pro'] text-xs xs:text-sm sm:text-[17px] font-bold text-[#f783b7] mb-1 sm:mb-1.5">
                  {item.role}
                </p>

                {/* Description */}
                <p className="font-['Intro_Pro'] text-[10.5px] xs:text-xs sm:text-[13.5px] text-black leading-relaxed mb-3 sm:mb-4 min-h-[32px] sm:min-h-[42px] line-clamp-3 sm:line-clamp-none">
                  {item.description}
                </p>

                {/* More Pill Button */}
                <div className="pt-0.5 sm:pt-1">
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center px-4 sm:px-6 py-1 sm:py-1.5 rounded-full bg-[#f783b7] text-white font-['Intro_Pro'] text-xs sm:text-sm font-bold shadow-xs hover:bg-pink-500 hover:scale-105 transition-all duration-300"
                  >
                    More
                  </Link>
                </div>
              </article>
            );
          })}
          </div>
        </section>
      ))}
    </div>
  );
}
