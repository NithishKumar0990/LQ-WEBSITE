import React, { useRef, useState, useEffect } from "react";
import ChapterAnchor from "./ChapterAnchor";

/**
 * Section 2: Scrollytelling Manifesto Stage (DAQ Architecture Exact)
 * Container h-[250vh], sticky 100svh inner stage.
 * Giant word-by-word liquid-ink reveal:
 * "Integrity. Accountability. Respect. Innovation. Quality. Transparency."
 * Final state: Chapter "01 / OUR VALUES" + 6 hairline reading rows.
 */
export default function ManifestoStage() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      if (scrollableHeight <= 0) return;
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / scrollableHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const manifestoWords = [
    "Integrity.",
    "Accountability.",
    "Respect.",
    "Innovation.",
    "Quality.",
    "Transparency.",
  ];

  const valuesData = [
    {
      num: "01",
      title: "Integrity",
      desc: "Upholding honesty, ethics, and moral principles in all actions and decisions",
    },
    {
      num: "02",
      title: "Accountability",
      desc: "Taking responsibility for one's actions and commitments, and being answerable for outcomes",
    },
    {
      num: "03",
      title: "Respect",
      desc: "Treating others with dignity, empathy, and consideration, regardless of differences",
    },
    {
      num: "04",
      title: "Innovation",
      desc: "Encouraging creativity and continuous improvement to drive progress",
    },
    {
      num: "05",
      title: "Quality",
      desc: "Pursuit of excellence in products, services, and processes",
    },
    {
      num: "06",
      title: "Transparency",
      desc: "Openness and clarity in communication and decision-making processes",
    },
  ];

  // When scrollProgress > 0.60, crossfade to final reading rows state
  const isFinalPhase = prefersReducedMotion || scrollProgress > 0.60;
  const finalPhaseOpacity = prefersReducedMotion
    ? 1
    : Math.max(0, Math.min(1, (scrollProgress - 0.58) / 0.18));
  const wordsPhaseOpacity = prefersReducedMotion
    ? 0
    : Math.max(0, Math.min(1, 1 - (scrollProgress - 0.55) / 0.15));

  return (
    <section
      ref={containerRef}
      id="manifesto-stage"
      className="relative h-[250vh] bg-black text-white cad-grid"
      aria-label="Values Manifesto"
    >
      {/* Sticky 100svh viewport stage */}
      <div className="sticky top-0 h-[100svh] w-full flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-12">
        {/* Subtle radial glow in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

        {/* Phase A: Giant word-by-word Liquid Ink Reveal */}
        <div
          className="max-w-6xl mx-auto w-full transition-opacity duration-300"
          style={{
            opacity: isFinalPhase ? wordsPhaseOpacity : 1,
            pointerEvents: isFinalPhase ? "none" : "auto",
            display: finalPhaseOpacity === 1 ? "none" : "block",
          }}
        >
          <div className="mb-4 sm:mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/70 font-semibold">
              01 / GUIDING PRINCIPLES
            </span>
          </div>

          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-4">
            {manifestoWords.map((word, idx) => {
              // Stagger each word across progress [0, 0.55]
              const wordStart = (idx / manifestoWords.length) * 0.50;
              const wordEnd = wordStart + 0.14;
              const wordFill = prefersReducedMotion
                ? 100
                : Math.max(
                    0,
                    Math.min(100, ((scrollProgress - wordStart) / (wordEnd - wordStart)) * 100)
                  );

              return (
                <span
                  key={idx}
                  className="relative inline-block font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight select-none"
                >
                  {/* Wireframe stroke layer (20% opacity) */}
                  <span
                    aria-hidden="true"
                    className="block"
                    style={{
                      WebkitTextStroke: "1px rgba(247, 247, 247, 0.22)",
                      color: "transparent",
                    }}
                  >
                    {word}
                  </span>

                  {/* Solid liquid fill layer masked by scroll */}
                  <span
                    className="absolute inset-0 block pointer-events-none"
                    style={{
                      color: "#F7F7F7",
                      clipPath: `inset(0 ${100 - wordFill}% 0 0)`,
                      WebkitClipPath: `inset(0 ${100 - wordFill}% 0 0)`,
                      textShadow: wordFill > 60 ? "0 0 30px rgba(247, 247, 247, 0.25)" : "none",
                    }}
                  >
                    {word}
                  </span>
                </span>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-2 text-white/40 font-mono text-[10px] uppercase tracking-[0.25em]">
            <span>Scroll to explore foundation</span>
            <span className="inline-block animate-bounce">↓</span>
          </div>
        </div>

        {/* Phase B: Final State — Chapter 01 + Hairline Reading Rows */}
        <div
          className="max-w-6xl mx-auto w-full transition-all duration-500"
          style={{
            opacity: finalPhaseOpacity,
            transform: prefersReducedMotion ? "none" : `translateY(${(1 - finalPhaseOpacity) * 20}px)`,
            display: finalPhaseOpacity === 0 ? "none" : "block",
          }}
        >
          <ChapterAnchor
            chapter="01"
            title="OUR VALUES — Revealing the IT Company In Pune's Fundamental Values and Guiding Principles"
            light={true}
            className="mb-6 sm:mb-8"
          />

          <div className="divide-y divide-white/10 border-y border-white/10 bg-white/[0.01] rounded-2xl backdrop-blur-sm overflow-hidden">
            {valuesData.map((val) => (
              <div
                key={val.num}
                className="group py-3.5 sm:py-4 px-4 sm:px-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 transition-all duration-200 hover:bg-white/[0.03] hover:-translate-y-0.5 cursor-default"
              >
                <div className="flex items-baseline gap-4 sm:gap-6 flex-1 min-w-0">
                  <span className="font-mono text-xs text-white/60 uppercase tracking-[0.2em] shrink-0">
                    {val.num}
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-mono-300 transition-colors shrink-0 sm:w-44">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/72 group-hover:text-white transition-colors leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
