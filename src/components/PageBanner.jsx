import React from "react";

export default function PageBanner({ badge, title, subtitle, children }) {
  return (
    <section className="relative bg-gradient-to-br from-brand-earth-900 to-brand-earth-600 text-white py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFC91B_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-yellowLight text-xs font-semibold uppercase tracking-widest mb-4 border border-white/10 backdrop-blur-sm">
            {badge}
          </span>
        )}
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-yellowLight">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-200 leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
