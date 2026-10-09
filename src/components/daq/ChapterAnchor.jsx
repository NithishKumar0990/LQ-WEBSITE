import React from "react";

/**
 * P03: Monospace Chapter Anchor (DAQ Pattern Adapted)
 * Signature architectural chapter badge: `01 / SECTION TITLE` + hairline rule
 */
export default function ChapterAnchor({
  chapter = "01",
  title = "",
  light = false,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`inline-flex items-center gap-3.5 mb-4 ${
        isCenter ? "justify-center w-full" : ""
      } ${className}`}
    >
      <span
        className={`font-mono text-[11px] font-medium uppercase tracking-[0.28em] select-none ${
          light
            ? "text-white/70"
            : "text-mono-600"
        }`}
      >
        <span className="opacity-90">{chapter}</span>
        {title && (
          <>
            <span className="mx-1.5 opacity-40">/</span>
            <span className="opacity-80">{title}</span>
          </>
        )}
      </span>
      <div
        className={`h-px transition-all ${
          light ? "bg-white/15 w-16 sm:w-24" : "bg-mono-200 w-16 sm:w-24"
        }`}
      />
    </div>
  );
}
