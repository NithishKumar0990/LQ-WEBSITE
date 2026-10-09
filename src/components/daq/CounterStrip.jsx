import React, { useEffect, useState, useRef } from "react";

/**
 * P05: Tabular-Nums Counter Strip (DAQ Pattern Adapted)
 * Engineering metrics strip with tabular numbers, hairline dividers, and CAD grid backing
 */
export default function CounterStrip({
  stats = [],
  bg = "bg-mono-950",
  dark = true,
  cadGrid = true,
  className = "",
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${bg} ${dark ? "text-white" : "text-[#0A0A0A]"} py-16 sm:py-20 overflow-hidden ${
        cadGrid ? "cad-grid" : ""
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x ${
          dark ? "divide-white/10" : "divide-black/10"
        }`}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx > 0 ? "pt-6 sm:pt-0 sm:pl-8 lg:pl-10" : "pr-4"
              }`}
            >
              <div className={`flex items-baseline gap-1 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
                dark ? "text-white" : "text-[#0A0A0A]"
              } select-none`}>
                {stat.prefix && <span className="text-xl sm:text-2xl">{stat.prefix}</span>}
                <span style={{ fontVariantNumeric: "tabular-nums lining-nums" }}>
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className={`${dark ? "text-white/85" : "text-black/75"} text-2xl sm:text-3xl ml-0.5`}>
                    {stat.suffix}
                  </span>
                )}
              </div>

              <h4 className={`mt-2 font-heading text-base sm:text-lg font-bold ${
                dark ? "text-white" : "text-[#0A0A0A]"
              } tracking-wide`}>
                {stat.label}
              </h4>

              {stat.description && (
                <p className={`mt-1 text-xs sm:text-sm ${
                  dark ? "text-white/70" : "text-black/60"
                } max-w-xs leading-relaxed`}>
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
