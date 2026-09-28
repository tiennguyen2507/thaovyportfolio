"use client";

import React, { useEffect } from "react";
import { X, ZoomIn, ZoomOut, Download, ExternalLink } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  altText?: string;
  onClose: () => void;
}

export default function LightboxModal({
  isOpen,
  imageUrl,
  altText = "Image",
  onClose,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
        {/* Controls */}
        <div className="absolute -top-12 right-0 flex items-center gap-3 text-white">
          <a
            href={imageUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
            title="Open original image"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 hover:bg-red-500/80 transition-colors"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Full Image */}
        <div className="overflow-hidden rounded-2xl shadow-2xl bg-black/40 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={altText}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
