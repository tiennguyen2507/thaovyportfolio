"use client";

import React from "react";
import Image from "next/image";

const filmPhotos = [
  { src: "/_assets/media/10dd410baeca12ee267ad758bcc90f48.jpg", alt: "Film photo 1" },
  { src: "/_assets/media/977dbd2c8b6b4f83a2bee6c07144ad80.jpg", alt: "Film photo 2" },
  { src: "/_assets/media/5bd98e65bea0d7f6306e4a1b5aba14a5.jpg", alt: "Film photo 3" },
  { src: "/_assets/media/b2e1efb749d4b9e39cd14049112362bb.jpg", alt: "Film photo 4" },
  { src: "/_assets/media/3cf7a26707b8b2b0caaec7b3819359b9.jpg", alt: "Film photo 5" },
  { src: "/_assets/media/00917c8038d3d877d416e4d574f0789c.jpg", alt: "Film photo 6" },
  { src: "/_assets/media/3c16fe8dfc8dc049d5988f57653b5488.jpg", alt: "Film photo 7" },
];

const fujiPhotos = [
  { src: "/_assets/media/7d640a4f02263966a8df54bbd1ae1cbf.jpg", alt: "Fujifilm photo 1" },
  { src: "/_assets/media/42a547ab778a1ed5ae8c603216390315.jpg", alt: "Fujifilm photo 2" },
  { src: "/_assets/media/6adb96c43a7a604bf8790a25bb539636.jpg", alt: "Fujifilm photo 3" },
  { src: "/_assets/media/4e6e73a0415bd9960d5ab22902c35227.jpg", alt: "Fujifilm photo 4" },
  { src: "/_assets/media/b8d205df3564973943ee7437eb90a768.jpg", alt: "Fujifilm photo 5" },
  { src: "/_assets/media/4d423fee39c7b279dc7414860e240ebc.jpg", alt: "Fujifilm photo 6" },
  { src: "/_assets/media/fda893aa037b58c2738300520d0ebd67.jpg", alt: "Fujifilm photo 7" },
  { src: "/_assets/media/9dfd320bf2393b9c9792b6080291f507.jpg", alt: "Fujifilm photo 8" },
  { src: "/_assets/media/73df3a8aee4fa20e12b26c8d21f29850.jpg", alt: "Fujifilm photo 9" },
  { src: "/_assets/media/714a3b55a053dff66c2e229466fa45e0.jpg", alt: "Fujifilm photo 10" },
  { src: "/_assets/media/699b0b828be8ab444402ba201ad82248.jpg", alt: "Fujifilm photo 11" },
  { src: "/_assets/media/4a3f9a726f6550cfd4116bdd76b1cbfd.jpg", alt: "Fujifilm photo 12" },
  { src: "/_assets/media/0d2aaf5606d07ca96a51a0982c0a3acd.jpg", alt: "Fujifilm photo 13" },
  { src: "/_assets/media/8d3c999d8a5b99c4ffc111c863e0eccb.jpg", alt: "Fujifilm photo 14" },
  { src: "/_assets/media/9f90f27c337a1893ab5986069c1408e2.jpg", alt: "Fujifilm photo 15" },
];

const leicaPhotos = [
  { src: "/_assets/media/435901ce82dcb71dd1cbe1e0af9d8435.jpg", alt: "Leica photo 1" },
  { src: "/_assets/media/b4eee95a2ab17f7c496f6162df37fef5.jpg", alt: "Leica photo 2" },
  { src: "/_assets/media/47b1e86cc32731211f98ccedc5abb4d5.jpg", alt: "Leica photo 3" },
  { src: "/_assets/media/e7c187ae1bc3a4a8bc9060f6501ba274.jpg", alt: "Leica photo 4" },
  { src: "/_assets/media/c3b55daa138ea34b9367e39422442503.jpg", alt: "Leica photo 5" },
  { src: "/_assets/media/bf64db96fe27836ef2defe8b77ec1dce.jpg", alt: "Leica photo 6" },
  { src: "/_assets/media/c3639b8331fb2677a01b06359560b7aa.jpg", alt: "Leica photo 7" },
  { src: "/_assets/media/8b55ed4bb6a6652eafe7c1f610779197.jpg", alt: "Leica photo 8" },
  { src: "/_assets/media/ec2c9c930177be8276998ac15f488ecd.jpg", alt: "Leica photo 9" },
  { src: "/_assets/media/29fa8765aa95f45f5d9ce2cfe538860a.jpg", alt: "Leica photo 10" },
  { src: "/_assets/media/7d857f64afad611fa7ba1e50a982e56a.jpg", alt: "Leica photo 11" },
  { src: "/_assets/media/7df39676a7001d670ae9c88007ff5c79.jpg", alt: "Leica photo 12" },
  { src: "/_assets/media/a427920c1eb73076bae96ebfbc5bf405.jpg", alt: "Leica photo 13" },
];

export default function PhotographySection() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 space-y-16">
      {/* Title & Intro */}
      <div className="space-y-6">
        <h1 className="font-['Intro_Rust'] text-[42px] sm:text-[60px] lg:text-[76px] leading-[1.0] text-[#f783b7] uppercase tracking-wide">
          photography
        </h1>
        <p className="font-['Intro_Pro'] text-[15px] sm:text-[17px] text-[#4a4a4a] leading-relaxed max-w-4xl font-light">
          Photography is one of my passions, and I enjoy working with digital and film cameras. I love capturing moments,
          knowing each photo tells its story and holds unique memories through my Leica Mini 3. Digital photography allows me
          the freedom to experiment with various styles and edit creatively, while film photography brings a sense of nostalgia
          and timelessness to my work. I appreciate the patience and precision required in using film; every shot becomes a
          well-thought-out decision. Photography lets me explore the world through different perspectives, revealing beauty in unexpected places.
        </p>
      </div>

      {/* Film Photos Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filmPhotos.map((photo, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-[18px] bg-white/50 border border-white/70 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Fujifilm Section */}
      <div className="space-y-6 pt-8 border-t border-[#f783b7]/20">
        <div className="space-y-4 max-w-4xl">
          <h2 className="font-['Intro_Rust'] text-[24px] sm:text-[32px] text-[#f783b7] uppercase tracking-wide">
            Fujifilm X-S20
          </h2>
          <p className="font-['Intro_Pro'] text-[15px] sm:text-[17px] text-[#4a4a4a] leading-relaxed font-light">
            I am particularly drawn to modern mirrorless cameras with interchangeable lenses, especially the Fujifilm X-S20. I
            enjoy the balance it offers between creativity and technical flexibility, allowing me to experiment with different
            focal lengths, lighting conditions, and visual styles. The tactile experience of adjusting lenses and settings makes
            photography feel more intentional and immersive. What I appreciate most is how the camera combines modern performance
            with a classic shooting experience, encouraging me to slow down and thoughtfully compose each frame.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {fujiPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[14px] bg-white/50 border border-white/70 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leica D-Lux 7 Section */}
      <div className="space-y-6 pt-8 border-t border-[#f783b7]/20">
        <div className="space-y-4 max-w-4xl">
          <h2 className="font-['Intro_Rust'] text-[24px] sm:text-[32px] text-[#f783b7] uppercase tracking-wide">
            Leica D-Lux 7
          </h2>
          <p className="font-['Intro_Pro'] text-[15px] sm:text-[17px] text-[#4a4a4a] leading-relaxed font-light">
            I also have a strong appreciation for compact digital cameras such as the Leica D-Lux 7. Its portability allows me to
            capture spontaneous everyday moments effortlessly, making photography feel natural and closely connected to daily life.
            I admire the camera’s minimalist design and the distinct visual character it produces — clean, cinematic, and timeless.
            Using a compact camera helps me focus less on technical complexity and more on emotion, atmosphere, and storytelling
            within each image.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {leicaPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[14px] bg-white/50 border border-white/70 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
