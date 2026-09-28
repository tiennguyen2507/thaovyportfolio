"use client";

import React from "react";
import Image from "next/image";

const artworks = [
  // Block 0
  { src: "/_assets/media/362be781578cf78d5559b8d88daf9c5e.jpg", alt: "Artwork 1" },
  { src: "/_assets/media/b335edb45415295418dd477b709a970a.jpg", alt: "Artwork 2" },
  { src: "/_assets/media/c6206e2d809dea7d935dbb6714c62371.jpg", alt: "Artwork 3" },
  { src: "/_assets/media/d6e3a1c22225c1dfb986c3cbbd2c687a.jpg", alt: "Artwork 4" },
  { src: "/_assets/media/be0de9a70133e2ba4ad96aa388587486.jpg", alt: "Artwork 5" },
  // Block 1
  { src: "/_assets/media/210cf9d969fb161b461b6431af9683fc.jpg", alt: "Artwork 6" },
  { src: "/_assets/media/6c965c30ff1138d249ce4c8563ec034b.jpg", alt: "Artwork 7" },
  { src: "/_assets/media/d13cedd591050363e3be815d00ad288f.jpg", alt: "Artwork 8" },
  { src: "/_assets/media/e6ca17092ebaadfcfaa7207ce93f9148.jpg", alt: "Artwork 9" },
  { src: "/_assets/media/9ac6fc311efdf32d8fbe15d0af5ed385.jpg", alt: "Artwork 10" },
  { src: "/_assets/media/2ee36c1ed41dddf1db89992c2c7ec521.jpg", alt: "Artwork 11" },
  { src: "/_assets/media/d7d2ea43f7dc135c4b32d9f0c648e51c.jpg", alt: "Artwork 12" },
  { src: "/_assets/media/22542ff536b4c00a2a7d3123649934f6.jpg", alt: "Artwork 13" },
  // Block 2
  { src: "/_assets/media/7948aec8bbb7b9a2a67d2a9616fbe562.jpg", alt: "Artwork 14" },
  { src: "/_assets/media/3fa2313a243ef550c207834d60e6d2a0.jpg", alt: "Artwork 15" },
  { src: "/_assets/media/e1a75df9450e60bafa69b280bd345279.jpg", alt: "Artwork 16" },
  { src: "/_assets/media/fbc2356626dd95950215f2e7615c447e.jpg", alt: "Artwork 17" },
  { src: "/_assets/media/5099d0490199005bcd94d9028f869c22.jpg", alt: "Artwork 18" },
  { src: "/_assets/media/5a7e239f3ca787296f2b1fcd59cd5b18.jpg", alt: "Artwork 19" },
  { src: "/_assets/media/4929184c3c21f2b62ac4078d23fbb976.jpg", alt: "Artwork 20" },
  { src: "/_assets/media/23fcdd8ebb3dae3ed7ecdad101f8ffdc.jpg", alt: "Artwork 21" },
];

export default function DrawingSection() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      {/* Title */}
      <div className="mb-8 sm:mb-12">
        <h1 className="font-['Intro_Rust'] text-[42px] sm:text-[60px] lg:text-[76px] leading-[1.0] text-[#f783b7] uppercase tracking-wide">
          drawing
        </h1>
      </div>

      {/* Artwork Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artworks.map((art, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-[18px] bg-white/50 border border-white/70 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={art.src}
                alt={art.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
