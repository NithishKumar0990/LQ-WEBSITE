import React from "react";

/**
 * P04: Monospace Tech Stack Pill (DAQ Pattern Adapted)
 * Engineering metadata pill with hairline boundary and monospace typography
 */
export default function TechPill({
  children,
  label,
  dark = false,
  className = "",
}) {
  const content = label || children;

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] transition-all duration-200 ${
        dark
          ? "bg-white/5 border border-white/12 text-white/85 hover:border-white/30 hover:bg-white/10 hover:text-white"
          : "bg-mono-100 border border-mono-200 text-mono-700 hover:border-mono-400 hover:bg-mono-200 hover:text-black"
      } ${className}`}
    >
      {content}
    </span>
  );
}
