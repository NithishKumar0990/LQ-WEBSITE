import React, { useEffect, useState, useRef } from "react";

/**
 * P01: Liquid Ink Text Reveal (DAQ Pattern Adapted)
 * Dual-layer heading: bottom wireframe outline + top solid fill with liquid reveal
 */
export default function InkReveal({
  text,
  children,
  as: Tag = "h1",
  className = "",
  style = {},
}) {
  const content = text || children;
  const containerRef = useRef(null);
  const [inkProgress, setInkProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) {
      setInkProgress(100);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Smooth fluid reveal
          let start = null;
          const duration = 1200; // ms
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const progress = Math.min(100, (elapsed / duration) * 100);
            setInkProgress(progress);
            if (progress < 100) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={containerRef}
      className={`relative inline-block font-heading select-none ${className}`}
      style={style}
    >
      {/* Layer 1: Bottom wireframe stroke */}
      <span
        aria-hidden="true"
        className="block select-none"
        style={{
          WebkitTextStroke: "1px rgba(247, 247, 247, 0.35)",
          color: "transparent",
        }}
      >
        {content}
      </span>

      {/* Layer 2: Top solid liquid fill */}
      <span
        className="absolute inset-0 block select-none pointer-events-none transition-none"
        style={{
          color: "#F7F7F7",
          clipPath: prefersReducedMotion
            ? "none"
            : `inset(0 ${100 - inkProgress}% 0 0)`,
          WebkitClipPath: prefersReducedMotion
            ? "none"
            : `inset(0 ${100 - inkProgress}% 0 0)`,
          transition: "clip-path 0.08s linear",
        }}
      >
        {content}
      </span>
    </Tag>
  );
}
