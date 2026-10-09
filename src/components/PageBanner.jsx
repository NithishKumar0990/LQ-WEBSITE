import React from "react";
import InkReveal from "./daq/InkReveal";

/**
 * DAQ-Adapted Page Banner:
 * P07 CAD Blueprint grid backing + P01 Liquid Ink reveal on title + Monospace pill badge
 */
export default function PageBanner({ badge, title, subtitle, children }) {
  return (
    <section className="relative bg-mono-950 text-white py-20 lg:py-24 overflow-hidden cad-grid">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(rgba(247,247,247,0.2)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-white/70 font-mono text-xs font-semibold uppercase tracking-[0.25em] mb-4 border border-white/20 backdrop-blur-sm select-none">
            {badge}
          </span>
        )}
        <div className="mb-4">
          <InkReveal
            as="h1"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            {title}
          </InkReveal>
        </div>
        {subtitle && (
          <p className="max-w-3xl mx-auto text-hero-lede font-serif text-white/75">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
