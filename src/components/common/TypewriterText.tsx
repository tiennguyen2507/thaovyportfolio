"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * Safely split string into full grapheme clusters / characters (never breaking surrogate pairs like emojis).
 */
function getCharacters(str: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(str), (s) => s.segment);
  }
  return Array.from(str);
}

/**
 * Custom hook for typewriter character count progression
 */
export function useTypewriter(
  totalLength: number,
  speed = 90,
  delay = 0,
  enabled = true
) {
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let timer: NodeJS.Timeout;
    const startTimer = setTimeout(() => {
      let count = 0;
      timer = setInterval(() => {
        count++;
        setRevealedCount(count);
        if (count >= totalLength) {
          clearInterval(timer);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimer);
      if (timer) clearInterval(timer);
    };
  }, [totalLength, speed, delay, enabled]);

  return revealedCount;
}

export interface TypewriterTextProps {
  /** Single line of text */
  text?: string;
  /** Multiple lines to be typed sequentially */
  lines?: string[];
  /** Typing speed in milliseconds per character (default: 80) */
  speed?: number;
  /** Delay before typing starts in milliseconds (default: 0) */
  delay?: number;
  /** Only start animation when scrolled into viewport (default: true) */
  triggerOnView?: boolean;
  /** Wrapper element class name */
  className?: string;
  /** Class name for each line div (only when `lines` is provided) */
  lineClassName?: string;
  /** Wrapper HTML tag or component (default: "span") */
  as?: React.ElementType;
}

/**
 * Reusable Typewriter component with zero layout shift, preserved whitespace,
 * Unicode/emoji-safe character splitting, and smooth character opacity reveal.
 */
export default function TypewriterText({
  text,
  lines,
  speed = 80,
  delay = 0,
  triggerOnView = true,
  className = "",
  lineClassName = "relative block",
  as: Component = "span",
}: TypewriterTextProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(!triggerOnView);

  useEffect(() => {
    if (!triggerOnView) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "30px" }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [triggerOnView]);

  const effectiveLines = lines ?? (text !== undefined ? [text] : []);
  const lineCharArrays = effectiveLines.map((line) => getCharacters(line));
  const totalChars = lineCharArrays.reduce((acc, chars) => acc + chars.length, 0);

  const revealedCount = useTypewriter(totalChars, speed, delay, inView);

  // When lines array is explicitly passed, render each line wrapped in a div
  if (lines && lines.length > 0) {
    let cumulativeOffset = 0;
    return (
      <Component ref={elementRef as any} className={className}>
        {lines.map((line, lineIdx) => {
          const chars = lineCharArrays[lineIdx];
          const lineStartOffset = cumulativeOffset;
          cumulativeOffset += chars.length;

          return (
            <div key={`${line}-${lineIdx}`} className={lineClassName}>
              {chars.map((char, charIdx) => {
                const globalIdx = lineStartOffset + charIdx;
                const isVisible = globalIdx < revealedCount;
                if (char === " ") {
                  return (
                    <span
                      key={charIdx}
                      className={`inline whitespace-pre transition-opacity duration-100 ${
                        isVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {" "}
                    </span>
                  );
                }
                return (
                  <span
                    key={charIdx}
                    className={`transition-opacity duration-100 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          );
        })}
      </Component>
    );
  }

  // Single text string mode (direct inline characters)
  const singleChars = text !== undefined ? getCharacters(text) : [];
  return (
    <Component ref={elementRef as any} className={className}>
      {singleChars.map((char, idx) => {
        const isVisible = idx < revealedCount;
        if (char === " ") {
          return (
            <span
              key={idx}
              className={`inline whitespace-pre transition-opacity duration-100 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {" "}
            </span>
          );
        }
        return (
          <span
            key={idx}
            className={`transition-opacity duration-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {char}
          </span>
        );
      })}
    </Component>
  );
}
