"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ElementData {
  type: string;
  text?: string;
  url?: string;
  linkUrl?: string;
}

interface BlockData {
  elements: ElementData[];
}

interface PageData {
  id?: string;
  title: string;
  slug: string;
  blocks: BlockData[];
}

interface ProjectDetailProps {
  page: PageData;
}

const isNavOrFooter = (txt: string) =>
  [
    "hoang pham thuy anh",
    "home",
    "about me",
    "experience",
    "testimonies",
    "let’s get in touch!",
    "Phone Number: 0906236009",
    "Mail: hptanhhh@gmail.com",
  ].some((s) => txt.toLowerCase().includes(s.toLowerCase()));

export default function ProjectDetailSection({ page }: ProjectDetailProps) {
  // Parse blocks
  const sections = (page.blocks || [])
    .map((b, bi) => {
      const texts = b.elements
        .filter((e) => e.text && !isNavOrFooter(e.text))
        .map((e) => e.text!.trim());

      const images = b.elements
        .filter(
          (e) =>
            e.url &&
            !e.url.includes("avatar") &&
            !e.url.endsWith(".svg") &&
            !e.url.includes("813d1384daf8a7d3a253ceb1888613a0") && // header logo
            !e.url.includes("95cac10af42d51fea008a82099e325f2") && // footer
            !e.url.includes("aae225a5c4dad5cccc72857d6faae06f") && // footer
            !e.url.includes("1106e09433d14fa46e18f926751f65f3") // footer
        )
        .map((e) => e.url!.replace("https://hoangphamthuyanh.com", ""));

      return {
        blockIndex: bi,
        texts,
        images,
      };
    })
    .filter((s) => s.texts.length > 0 || s.images.length > 0);

  // Extract header info from section 0
  const heroSection = sections[0] || { texts: [], images: [] };
  const subSections = sections.slice(1);

  // Find Role badge (e.g. Event Organizer, Head of Event Organizing, Communication Intern)
  const roleText =
    heroSection.texts.find((t) =>
      ["organizer", "head", "intern", "leader", "relations", "coordinator"].some((k) =>
        t.toLowerCase().includes(k)
      )
    ) || "";

  // Other intro texts (excluding the main title if duplicated and role)
  const introTexts = heroSection.texts.filter(
    (t) =>
      t.toLowerCase() !== page.title.toLowerCase() &&
      t !== roleText &&
      !/^\d+$/.test(t.trim()) // not a standalone number
  );

  return (
    <article className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-16">
      {/* Back Button & Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 font-['Intro_Rust'] text-[14px] sm:text-[16px] text-[#f783b7] hover:text-[#d65d95] transition-colors uppercase tracking-wider group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Experience
        </Link>
      </div>

      {/* Main Hero Header */}
      <header className="space-y-6">
        <div className="space-y-4">
          <h1 className="font-['Intro_Rust'] text-[36px] sm:text-[52px] lg:text-[68px] leading-[1.05] text-[#f783b7] uppercase tracking-wide">
            {page.title}
          </h1>

          {roleText && (
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#ffc7e0]/60 border border-[#f783b7]/30 text-[#f783b7] font-['Intro_Rust'] text-[13px] sm:text-[15px] uppercase tracking-wider shadow-sm">
                {roleText}
              </span>
            </div>
          )}
        </div>

        {introTexts.length > 0 && (
          <div className="space-y-3 max-w-4xl">
            {introTexts.map((txt, idx) => (
              <p
                key={idx}
                className="font-['Intro_Pro'] text-[15px] sm:text-[17px] text-[#444444] leading-relaxed font-light whitespace-pre-line"
              >
                {txt}
              </p>
            ))}
          </div>
        )}

        {/* Hero Gallery (Images from block 0) */}
        {heroSection.images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {heroSection.images.map((imgSrc, idx) => (
              <div
                key={`hero-img-${idx}`}
                className="group relative overflow-hidden rounded-[20px] bg-white/50 border border-white/70 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt={`${page.title} image ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Subsequent Sections (Blocks 1+) */}
      {subSections.map((sec, sIdx) => {
        // Find section title (first short text or uppercase phrase)
        const sectionTitle = sec.texts.length > 0 ? sec.texts[0] : "";
        const sectionContent = sec.texts.slice(1);

        return (
          <section key={`sub-sec-${sIdx}`} className="pt-8 border-t border-[#f783b7]/20 space-y-6">
            {sectionTitle && (
              <div className="space-y-3">
                <h2 className="font-['Intro_Rust'] text-[24px] sm:text-[34px] text-[#f783b7] uppercase tracking-wide">
                  {sectionTitle}
                </h2>
                {sectionContent.length > 0 && (
                  <div className="space-y-2 max-w-4xl">
                    {sectionContent.map((cTxt, cIdx) => (
                      <p
                        key={cIdx}
                        className="font-['Intro_Pro'] text-[15px] sm:text-[16px] text-[#444444] leading-relaxed font-light whitespace-pre-line"
                      >
                        {cTxt}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {sec.images.length > 0 && (
              <div
                className={`grid gap-6 ${
                  sec.images.length <= 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : sec.images.length <= 4
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                }`}
              >
                {sec.images.map((imgSrc, idx) => (
                  <div
                    key={`sec-${sIdx}-img-${idx}`}
                    className="group relative overflow-hidden rounded-[18px] bg-white/50 border border-white/70 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={imgSrc}
                        alt={`${sectionTitle || page.title} image ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        );
      })}

      {/* Footer Back Button */}
      <div className="pt-8 text-center">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#f783b7] text-white font-['Intro_Rust'] text-[15px] uppercase tracking-wider shadow-md hover:bg-[#eb74a9] hover:shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          <span>←</span> Back to All Experiences
        </Link>
      </div>
    </article>
  );
}
