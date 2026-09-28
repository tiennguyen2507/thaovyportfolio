"use client";

import React from "react";
import Image from "next/image";

const articles = [
  {
    title: "TƯ TƯỞNG CỦA MẠNH TỬ VỀ “BẢN CHẤT CON NGƯỜI LÀ THIỆN LƯƠNG” LIỆU CÓ CÒN ĐÚNG TRONG CUỐN “CHÚA RUỒI\"?",
    image: "/_assets/media/f6e8af905f21ec0a1648ef9af6d22129.png",
  },
  {
    title: "SỰ ẢNH HƯỞNG CỦA NGƯỜI LỚN ĐỐI VỚI VIỆC HÌNH THÀNH NÊN NHỮNG ĐỨA TRẺ BỊ “CHÍN ÉP\"",
    image: "/_assets/media/f2f324c61ba35f4a9c9d2387d0faf462.png",
  },
  {
    title: "TÍNH HAI MẶT CỦA TRI THỨC TRONG QUÁ KHỨ, THỰC TẠI VÀ TƯƠNG LAI",
    image: "/_assets/media/c53f5455a0f2e48770249fc952c176e6.png",
  },
  {
    title: "NHÂN QUYỀN PHƯƠNG TÂY VÀ PHƯƠNG ĐÔNG CÓ GÌ KHÁC BIỆT?",
    image: "/_assets/media/814bf84e6d2247ade9799c0974f159eb.png",
  },
];

export default function WritingSection() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 space-y-12">
      {/* Title & Intro */}
      <div className="space-y-6">
        <h1 className="font-['Intro_Rust'] text-[42px] sm:text-[60px] lg:text-[76px] leading-[1.0] text-[#f783b7] uppercase tracking-wide">
          writing
        </h1>
        <p className="font-['Intro_Pro'] text-[15px] sm:text-[17px] text-[#4a4a4a] leading-relaxed max-w-4xl font-light">
          Writing articles is a passion of mine, offering me a platform to share insights and stories with others. I enjoy
          exploring diverse topics, from current events to personal reflections, which allows me to connect with a broad
          audience. Crafting each article requires me to research, analyze, and structure my ideas, making it a rewarding
          intellectual challenge. Each piece I write is an opportunity to deepen my understanding of the topic and improve my
          writing skills.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((item, idx) => (
          <article
            key={idx}
            className="group flex flex-col overflow-hidden rounded-[20px] bg-white/70 border border-white/80 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <h2 className="font-['Intro_Rust'] text-[17px] sm:text-[19px] text-[#333333] leading-snug uppercase group-hover:text-[#f783b7] transition-colors">
                {item.title}
              </h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
