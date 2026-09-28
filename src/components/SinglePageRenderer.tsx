"use client";

import React, { useState } from "react";
import CanvasBlock from "./CanvasBlock";
import LightboxModal from "./LightboxModal";
import VideoModal from "./VideoModal";

import TestimoniesSection from "./TestimoniesSection";

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

  // Special structured rendering for Testimonies
  if (page.slug === "testimonies") {
    const headerBlock = {
      ...page.blocks[0],
      height: 280,
      elements: page.blocks[0].elements.filter((el: any) => el.bounds.top < 260),
    };
    const footerBlock = page.blocks[page.blocks.length - 1];

    return (
      <div className="w-full flex flex-col items-center bg-transparent">
        <CanvasBlock
          block={headerBlock}
          blockIndex={0}
          pageId={page.id}
          onImageClick={handleImageClick}
          onVideoClick={handleVideoClick}
        />
        <TestimoniesSection />
        <CanvasBlock
          block={footerBlock}
          blockIndex={page.blocks.length - 1}
          pageId={page.id}
          onImageClick={handleImageClick}
          onVideoClick={handleVideoClick}
        />
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
