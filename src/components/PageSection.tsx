"use client";

import React from "react";
import CanvasBlock, { CanvasBlockData } from "./CanvasBlock";

export interface PageData {
  id: string;
  title: string;
  blocks: CanvasBlockData[];
}

interface PageSectionProps {
  page: PageData;
  onImageClick?: (url: string, alt?: string) => void;
  onVideoClick?: (url: string) => void;
}

export default function PageSection({
  page,
  onImageClick,
  onVideoClick,
}: PageSectionProps) {
  const sectionId = `page-${page.id}`;

  return (
    <section
      id={sectionId}
      data-page-title={page.title}
      className="relative w-full bg-white transition-colors duration-500 scroll-mt-16"
    >
      <div className="w-full flex flex-col items-center justify-center">
        {page.blocks.map((block, idx) => (
          <CanvasBlock
            key={`${page.id}-block-${idx}`}
            block={block}
            blockIndex={idx}
            pageId={page.id}
            onImageClick={onImageClick}
            onVideoClick={onVideoClick}
          />
        ))}
      </div>
    </section>
  );
}
