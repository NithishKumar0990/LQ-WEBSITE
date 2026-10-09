import React from "react";
import ChapterAnchor from "./daq/ChapterAnchor";

export default function SectionHeading({
  chapter,
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {chapter ? (
        <ChapterAnchor
          chapter={chapter}
          title={subtitle}
          light={light}
          align={align}
        />
      ) : subtitle ? (
        <div className={`inline-flex items-center gap-3 mb-3 ${isCenter ? "justify-center w-full" : ""}`}>
          <span
            className={`font-mono text-[11px] font-semibold uppercase tracking-[0.25em] ${
              light ? "text-white/70" : "text-mono-600"
            }`}
          >
            {subtitle}
          </span>
          <div className={`h-px ${light ? "bg-white/15 w-12" : "bg-mono-200 w-12"}`} />
        </div>
      ) : null}

      <h2
        className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>

      {/* Underline bar */}
      <div
        className={`w-12 h-0.5 ${light ? "bg-white/20" : "bg-mono-300"} my-3 rounded-full ${
          isCenter ? "mx-auto" : ""
        }`}
      />

      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            light ? "text-white/72" : "text-mono-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
