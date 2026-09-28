"use client";

import React, { useEffect } from "react";
import { X, Film } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string | null;
  onClose: () => void;
}

export default function VideoModal({ isOpen, videoUrl, onClose }: VideoModalProps) {
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

  if (!isOpen || !videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        <div className="w-full flex items-center justify-between text-white mb-3">
          <div className="flex items-center gap-2 text-pink-400 font-semibold text-sm">
            <Film className="w-4 h-4" />
            <span>Event Highlight Video</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 hover:bg-red-500/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
          <video
            src={videoUrl}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
