"use client";

import React, { useState } from "react";
import CanvasBlock from "./CanvasBlock";
import LightboxModal from "./LightboxModal";
import VideoModal from "./VideoModal";

interface SinglePageRendererProps {
  page: any;
}

export default function SinglePageRenderer({ page }: SinglePageRendererProps) {
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
    <div className="w-full flex flex-col items-center bg-transparent">
      {/* 100% Native Canvas Blocks with built-in Native Header and Footer over Yellow Dotted Background */}
      <div className="w-full flex flex-col items-center bg-transparent">
        {page.blocks.map((block: any, idx: number) => (
          <CanvasBlock
            key={`${page.id}-block-${idx}`}
            block={block}
            blockIndex={idx}
            pageId={page.id}
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
    </div>
  );
}
