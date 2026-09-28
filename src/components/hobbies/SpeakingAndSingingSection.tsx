"use client";

import React from "react";
import Image from "next/image";

const block0Photos = [
  { src: "/_assets/media/1fe69ec866386f65f2ed7be31554f7ec.jpg", alt: "Speaking performance 1" },
  { src: "/_assets/media/07abb9743a50044c24d7e151860295a9.jpg", alt: "Speaking performance 2" },
  { src: "/_assets/media/0d27f470c15f94d3312ea0d62686be11.jpg", alt: "Speaking performance 3" },
  { src: "/_assets/media/966e069544ded4aab72bef9cfe834d3f.jpg", alt: "Speaking performance 4" },
  { src: "/_assets/media/be95da8fd2cca27357276095d34f2c96.jpg", alt: "Singing performance 5" },
  { src: "/_assets/media/93c4942c92c19fbf5d2b29694e601359.jpg", alt: "Singing performance 6" },
  { src: "/_assets/media/a87f0e16d8cf7e8dfe1ded70ac026a88.jpg", alt: "Singing performance 7" },
  { src: "/_assets/media/486a172f599fe571dc6693ab2192705a.jpg", alt: "Singing performance 8" },
  { src: "/_assets/media/04cd8fbfbf0c89dcf631c5530c57e527.jpg", alt: "Stage performance 9" },
];

const block1Photos = [
  { src: "/_assets/media/65131ebbd8da90e86e9f06fc183b4e82.jpg", alt: "Stage spotlight 1" },
  { src: "/_assets/media/1a4582e73fa2bc727f7690f04901760c.jpg", alt: "Stage spotlight 2" },
  { src: "/_assets/media/a97de9e209581c83006431d1213a3c0b.jpg", alt: "Stage spotlight 3" },
];

export default function SpeakingAndSingingSection() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      {/* Title */}
      <div className="mb-8 sm:mb-12">
        <h1 className="font-['Intro_Rust'] text-[42px] sm:text-[60px] lg:text-[76px] leading-[1.0] text-[#f783b7] uppercase tracking-wide">
          speaking and singing
        </h1>
      </div>

      {/* Main Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        {block0Photos.map((photo, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-[20px] bg-white/40 border border-white/60 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Spotlight Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {block1Photos.map((photo, idx) => (
          <div
            key={`stage-${idx}`}
            className="group relative overflow-hidden rounded-[20px] bg-white/40 border border-white/60 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
