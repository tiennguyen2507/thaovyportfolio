"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Play, Maximize2 } from "lucide-react";

export interface CanvasElement {
  type: "text" | "image" | "video" | "embed" | "progress" | "shape" | "other";
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
  colorMap?: Record<string, string>;
  percent?: number;
  bgColor?: string;
  fillColor?: string;
  borderRadius?: number;
}

export interface CanvasBlockData {
  width: number;
  height: number;
  bgUrl?: string | null;
  elements: CanvasElement[];
}

const SLUG_MAP: Record<string, string> = {
  "1": "/",
  "2": "/about-me",
  "3": "/experience",
  "4": "/testimonies",
  "5": "/drawing",
  "6": "/speaking-and-singing",
  "7": "/photography",
  "8": "/writing",
  "9": "/grand-opening-starbucks-quang-trung",
  "a": "/starbucks-100th-store-open-celebration",
  "b": "/starbucks-fansipan-mountain-opening",
  "c": "/3x3-hooptopia-uprising-2025",
  "d": "/3x3-hooptopia-vietnamfinance-2025",
  "e": "/5x5-hooptopia-season-i-2026",
  "f": "/family-day",
  "g": "/drama-show---dinh-bo-linh-the-reed-flag-hero",
  "h": "/gladia-by-the-water-event-in-hanoi",
  "i": "/edufit-summer-intern-program",
  "j": "/dewey-university-fair-2023",
  "k": "/prom",
  "l": "/mount-vernon-school-visit-2024",
  "m": "/tet-market",
};

export function resolvePageLink(link?: string | null): string | null {
  if (!link) return null;
  const pageMatch = link.match(/^#page-([0-9a-z]+)/i);
  if (pageMatch) {
    const pageKey = pageMatch[1].toLowerCase();
    if (SLUG_MAP[pageKey]) {
      return SLUG_MAP[pageKey];
    }
  }
  return link;
}

export function normalizeAssetUrl(url?: string | null): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("blob:") || url.startsWith("data:")) {
    return url;
  }
  const cleanPath = url.replace(/^\/+/, "");
  return `https://hoangphamthuyanh.com/${cleanPath}`;
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
  const normalizedBg = bgUrl ? normalizeAssetUrl(bgUrl) : undefined;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[1366px] mx-auto select-none bg-transparent overflow-visible"
      style={{
        aspectRatio: `${blockWidth} / ${blockHeight}`,
        containerType: "inline-size",
        backgroundColor: "transparent",
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
          overflow: "visible",
        };

        const resolvedLink = resolvePageLink(link);

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
              className={`w-full h-full flex flex-col justify-start whitespace-pre-wrap overflow-visible ${fontClass} ${
                el.isUnderline ? "underline underline-offset-4" : ""
              } ${resolvedLink ? "cursor-pointer hover:opacity-75 transition-opacity" : ""}`}
              style={{
                color: el.color || "#000000",
                fontSize: `calc((${el.fontSize || 20} / ${blockWidth}) * 100cqi)`,
                textAlign: el.textAlign || "left",
                fontWeight: el.fontWeight === "bold" ? 700 : 400,
                lineHeight: el.fontSize && el.fontSize > 100 ? "1.015" : "1.15",
                letterSpacing: "-0.015em",
              }}
            >
              {el.text}
            </div>
          );

          if (resolvedLink) {
            const isInternal = resolvedLink.startsWith("/") || resolvedLink.startsWith("#");
            if (isInternal) {
              return (
                <div key={elIdx} style={commonStyle}>
                  <Link href={resolvedLink} className="block w-full h-full">
                    {content}
                  </Link>
                </div>
              );
            }
            return (
              <div key={elIdx} style={commonStyle}>
                <a
                  href={resolvedLink}
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
          const finalUrl = normalizeAssetUrl(el.url);
          const isHeartSvg = finalUrl.includes("31c0105f470124ec88db7826b2892025.svg");
          const heartFill = el.colorMap?.["#c6302c"] || (isHeartSvg ? "#ffc7e0" : undefined);
          const isIconOrShape =
            bounds.width < 90 && bounds.height < 90;
          const isTransparentPng =
            finalUrl.includes(".png") || finalUrl.includes(".svg");

          const imageContent = (
            <div
              className={`relative w-full h-full group ${
                !isIconOrShape && !resolvedLink ? "cursor-zoom-in" : ""
              }`}
              onClick={() => {
                if (!resolvedLink && !isIconOrShape && onImageClick && finalUrl) {
                  onImageClick(finalUrl, `Portfolio image ${pageId}-${elIdx}`);
                }
              }}
            >
              {isHeartSvg ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-9.6 -14.5 219.1 194.5"
                  className="w-full h-full pointer-events-auto"
                >
                  <g id="change1_1">
                    <path
                      d="M199.326,44.459c-11.27-57.967-81.908-58.936-99.326-4.746 C82.582-14.476,11.942-13.508,0.674,44.459C-9.551,97.051,100,180.024,100,180.024S209.55,97.051,199.326,44.459z"
                      fill={heartFill || "#ffc7e0"}
                    />
                  </g>
                </svg>
              ) : (
                <img
                  src={finalUrl}
                  alt={`Image ${elIdx}`}
                  className={`w-full h-full ${
                    isTransparentPng ? "object-contain" : "object-cover"
                  } pointer-events-auto`}
                  loading="lazy"
                />
              )}
              {!isIconOrShape && !resolvedLink && (
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center pointer-events-none">
                  <div className="p-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-gray-800">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>
          );

          if (resolvedLink) {
            const isInternal = resolvedLink.startsWith("/") || resolvedLink.startsWith("#");
            if (isInternal) {
              return (
                <div key={elIdx} style={commonStyle}>
                  <Link
                    href={resolvedLink}
                    className="block w-full h-full cursor-pointer hover:opacity-85 transition-opacity"
                  >
                    {imageContent}
                  </Link>
                </div>
              );
            }
            return (
              <div key={elIdx} style={commonStyle}>
                <a
                  href={resolvedLink}
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
          const finalVidUrl = normalizeAssetUrl(el.url);
          return (
            <div
              key={elIdx}
              style={commonStyle}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-sm"
              onClick={() => onVideoClick && finalVidUrl && onVideoClick(finalVidUrl)}
            >
              <video
                src={finalVidUrl}
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

        // Render Progress Bar
        if (el.type === "progress") {
          const percent = el.percent || 0;
          const bg = el.bgColor || "#ffc7e0";
          const fill = el.fillColor || "#f783b7";
          return (
            <div
              key={elIdx}
              style={{
                ...commonStyle,
                backgroundColor: bg,
                borderRadius: "9999px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${percent}%`,
                  backgroundColor: fill,
                }}
              />
            </div>
          );
        }

        // Render Shape / Button Pill
        if (el.type === "shape") {
          const shapeStyle: React.CSSProperties = {
            width: "100%",
            height: "100%",
            backgroundColor: el.color || "#f783b7",
            borderRadius: "9999px",
          };

          if (resolvedLink) {
            const isInternal = resolvedLink.startsWith("/") || resolvedLink.startsWith("#");
            return (
              <div key={elIdx} style={{ ...commonStyle, zIndex: 15 }}>
                {isInternal ? (
                  <Link
                    href={resolvedLink}
                    className="block w-full h-full cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                  >
                    <div style={shapeStyle} />
                  </Link>
                ) : (
                  <a
                    href={resolvedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                  >
                    <div style={shapeStyle} />
                  </a>
                )}
              </div>
            );
          }

          return (
            <div key={elIdx} style={{ ...commonStyle, zIndex: 15 }}>
              <div style={shapeStyle} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
