import React from "react";

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {subtitle && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${
            light
              ? "bg-white/10 text-yellowLight border border-white/10"
              : "bg-primary/10 text-primary"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${
          light ? "text-yellowLight" : "text-heading"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-16 h-1 bg-gold my-3 rounded-full ${
          isCenter ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            light ? "text-slate-200" : "text-bodyText"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
