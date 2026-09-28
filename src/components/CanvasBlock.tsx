"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Play, Maximize2 } from "lucide-react";

export interface CanvasElement {
  type: "text" | "image" | "video" | "embed" | "other";
  bounds: {
    top: number;
    left: number;
    width: number;
    height: number;
    rotate?: number;
  };
  text?: string;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  fontWeight?: string;
  isUnderline?: boolean;
  link?: string | null;
  semantic?: string;
  imgId?: string;
  url?: string | null;
  width?: number;
  height?: number;
  vidId?: string;
  embedData?: any;
}

export interface CanvasBlockData {
  width: number;
  height: number;
  bgUrl?: string | null;
  elements: CanvasElement[];
}

interface CanvasBlockProps {
  block: CanvasBlockData;
  blockIndex: number;
  pageId: string;
  onImageClick?: (url: string, alt?: string) => void;
  onVideoClick?: (url: string) => void;
}

export default function CanvasBlock({
  block,
  blockIndex,
  pageId,
  onImageClick,
  onVideoClick,
}: CanvasBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width: blockWidth, height: blockHeight, bgUrl, elements } = block;

  return (
    <div
      ref={containerRef}
      className="@container relative w-full max-w-[1366px] mx-auto overflow-hidden select-none bg-transparent"
      style={{
        aspectRatio: `${blockWidth} / ${blockHeight}`,
        backgroundColor: "transparent",
        backgroundImage: bgUrl ? `url(${bgUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {elements.map((el, elIdx) => {
        const { bounds, link } = el;
        
        // Exact percentage coordinates based on Canva artboard
        const leftPercent = (bounds.left / blockWidth) * 100;
        const topPercent = (bounds.top / blockHeight) * 100;
        const widthPercent = (bounds.width / blockWidth) * 100;
        const heightPercent = (bounds.height / blockHeight) * 100;
        const rotateDeg = bounds.rotate || 0;

        const commonStyle: React.CSSProperties = {
          position: "absolute",
          left: `${leftPercent}%`,
          top: `${topPercent}%`,
          width: `${widthPercent}%`,
          height: `${heightPercent}%`,
          transform: rotateDeg !== 0 ? `rotate(${rotateDeg}deg)` : "none",
          transformOrigin: "center center",
          zIndex: el.type === "text" ? 20 : 10,
        };

        // Render Text
        if (el.type === "text" && el.text) {
          const fontClass =
            el.fontFamily === "Intro Rust"
              ? "font-intro-rust uppercase"
              : el.fontFamily === "Intro Pro"
              ? "font-intro-pro"
              : el.fontFamily === "Give You Glory"
              ? "font-glory"
              : "font-arimo";

          const content = (
            <div
              className={`w-full h-full flex flex-col justify-start leading-tight whitespace-pre-wrap ${fontClass} ${
                el.isUnderline ? "underline underline-offset-4" : ""
              } ${link ? "cursor-pointer hover:opacity-75 transition-opacity" : ""}`}
              style={{
                color: el.color || "#000000",
                fontSize: `calc((${el.fontSize || 20} / ${blockWidth}) * 100cqi)`,
                textAlign: el.textAlign || "left",
                fontWeight: el.fontWeight === "bold" ? 700 : 400,
                lineHeight: "1.05",
                letterSpacing: "-0.015em",
              }}
            >
              {el.text}
            </div>
          );

          if (link) {
            const isInternal = link.startsWith("/") || link.startsWith("#");
            if (isInternal) {
              return (
                <div key={elIdx} style={commonStyle}>
                  <Link href={link} className="block w-full h-full">
                    {content}
                  </Link>
                </div>
              );
            }
            return (
              <div key={elIdx} style={commonStyle}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full group"
                >
                  {content}
                </a>
              </div>
            );
          }

          return (
            <div key={elIdx} style={commonStyle}>
              {content}
            </div>
          );
        }

        // Render Image
        if (el.type === "image" && el.url) {
          const isIconOrShape = bounds.width < 90 && bounds.height < 90;
          const imageContent = (
            <div 
              className={`relative w-full h-full group ${!isIconOrShape && !link ? "cursor-zoom-in" : ""}`}
              onClick={(e) => {
                if (!link && !isIconOrShape && onImageClick && el.url) {
                  onImageClick(el.url, `Portfolio image ${pageId}-${elIdx}`);
                }
              }}
            >
              <img
                src={el.url}
                alt={`Image ${elIdx}`}
                className="w-full h-full object-contain pointer-events-auto"
                loading="lazy"
              />
              {!isIconOrShape && !link && (
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center pointer-events-none">
                  <div className="p-1 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-gray-800">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          );

          if (link) {
            const isInternal = link.startsWith("/") || link.startsWith("#");
            if (isInternal) {
              return (
                <div key={elIdx} style={commonStyle}>
                  <Link href={link} className="block w-full h-full cursor-pointer hover:opacity-85 transition-opacity">
                    {imageContent}
                  </Link>
                </div>
              );
            }
            return (
              <div key={elIdx} style={commonStyle}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full cursor-pointer hover:scale-105 transition-transform"
                >
                  {imageContent}
                </a>
              </div>
            );
          }

          return (
            <div key={elIdx} style={commonStyle}>
              {imageContent}
            </div>
          );
        }

        // Render Video
        if (el.type === "video" && el.url) {
          return (
            <div
              key={elIdx}
              style={commonStyle}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-sm"
              onClick={() => onVideoClick && el.url && onVideoClick(el.url)}
            >
              <video
                src={el.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/90 text-pink-600 flex items-center justify-center shadow-lg">
                  <Play className="w-4 h-4 ml-0.5 fill-current" />
                </div>
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
