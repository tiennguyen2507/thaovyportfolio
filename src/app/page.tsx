"use client";

import React, { useState } from "react";
import CanvasBlock from "@/components/CanvasBlock";
import LightboxModal from "@/components/LightboxModal";
import VideoModal from "@/components/VideoModal";
import routesPagesDataRaw from "@/data/routes_pages_data.json";

const routesPagesData = routesPagesDataRaw as any[];
const homePage = routesPagesData.find((p) => p.slug === "home") || routesPagesData[0];

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageAlt, setImageAlt] = useState<string>("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleImageClick = (url: string, alt?: string) => {
    setSelectedImage(url);
    setImageAlt(alt || "Portfolio image");
  };

  const handleVideoClick = (url: string) => {
    setSelectedVideo(url);
  };

  return (
    <main className="min-h-screen bg-transparent flex flex-col items-center justify-start w-full">
      {/* 100% Native Canvas Blocks with built-in Native Header and Footer over Yellow Dotted Texture */}
      <div className="w-full flex flex-col items-center bg-transparent">
        {homePage.blocks.map((block: any, idx: number) => (
          <CanvasBlock
            key={`home-block-${idx}`}
            block={block}
            blockIndex={idx}
            pageId={homePage.id}
            onImageClick={handleImageClick}
            onVideoClick={handleVideoClick}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={!!selectedImage}
        imageUrl={selectedImage}
        altText={imageAlt}
        onClose={() => setSelectedImage(null)}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        videoUrl={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </main>
  );
}
