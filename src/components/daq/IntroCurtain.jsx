import React, { useState, useEffect } from "react";

/**
 * P13: Intro Curtain (DAQ Pattern Adapted)
 * sessionStorage-gated fullscreen entrance animation
 * SVG outline traces in 1.4s -> wordmark fade-in -> curtain lifts into header
 */
export default function IntroCurtain() {
  const [visible, setVisible] = useState(false);
  const [animStage, setAnimStage] = useState("init"); // init -> trace -> wordmark -> lift -> done

  useEffect(() => {
    // Check if user already saw the curtain in this session or prefers reduced motion
    const hasSeen = sessionStorage.getItem("lq-intro");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (hasSeen || prefersReducedMotion) {
      return;
    }

    setVisible(true);

    // Sequence the animation stages
    const t1 = setTimeout(() => setAnimStage("trace"), 80);
    const t2 = setTimeout(() => setAnimStage("wordmark"), 1200);
    const t3 = setTimeout(() => setAnimStage("lift"), 1900);
    const t4 = setTimeout(() => {
      setAnimStage("done");
      setVisible(false);
      sessionStorage.setItem("lq-intro", "true");
    }, 2650);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem("lq-intro", "true");
    setVisible(false);
  };

  if (!visible || animStage === "done") return null;

  return (
    <aside
      aria-label="Introductory animation"
      className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        animStage === "lift"
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* Background blueprint grid */}
      <div className="absolute inset-0 cad-grid opacity-30 pointer-events-none" />

      {/* Skip action */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors z-10 px-3 py-1.5 rounded-full border border-white/10"
      >
        Skip [ESC]
      </button>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* SVG Outline Trace Logo */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-6">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_0_25px_rgba(247,247,247,0.25)]"
          >
            {/* Outer Hexagon / Shield frame */}
            <polygon
              points="50,6 92,28 92,72 50,94 8,72 8,28"
              fill="none"
              stroke="#F7F7F7"
              strokeWidth="2"
              strokeDasharray="300"
              strokeDashoffset={animStage !== "init" ? "0" : "300"}
              style={{
                transition: "stroke-dashoffset 1.4s cubic-bezier(0.19, 1, 0.22, 1)",
              }}
            />

            {/* Inner "L" path */}
            <path
              d="M32 28 L32 72 L58 72"
              fill="none"
              stroke="#F7F7F7"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="120"
              strokeDashoffset={animStage !== "init" ? "0" : "120"}
              style={{
                transition: "stroke-dashoffset 1.3s cubic-bezier(0.19, 1, 0.22, 1) 0.2s",
              }}
            />

            {/* Inner "Q" circle & tail */}
            <circle
              cx="64"
              cy="50"
              r="14"
              fill="none"
              stroke="rgba(247,247,247,0.85)"
              strokeWidth="3"
              strokeDasharray="95"
              strokeDashoffset={animStage !== "init" ? "0" : "95"}
              style={{
                transition: "stroke-dashoffset 1.2s cubic-bezier(0.19, 1, 0.22, 1) 0.35s",
              }}
            />
            <line
              x1="62"
              y1="56"
              x2="74"
              y2="68"
              stroke="#F7F7F7"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="20"
              strokeDashoffset={animStage !== "init" ? "0" : "20"}
              style={{
                transition: "stroke-dashoffset 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0.8s",
              }}
            />
          </svg>
        </div>

        {/* Wordmark */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            animStage === "wordmark" || animStage === "lift"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-white/70 font-semibold mb-1">
            LEANQUALITY SOLUTIONS
          </p>
          <p className="font-heading text-lg sm:text-xl font-bold text-white tracking-wide">
            Premier IT Services & Consulting
          </p>
          <div className="w-12 h-0.5 bg-white/20 mx-auto mt-3 rounded-full" />
        </div>
      </div>
    </aside>
  );
}
