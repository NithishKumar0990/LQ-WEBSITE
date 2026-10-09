import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TechPill from "./TechPill";

/**
 * P08: Architectural Capability Tile (DAQ Pattern Adapted)
 * Engineering capability tile with monospace indexing, tag strip, and hover micro-elevations
 */
export default function CapabilityTile({
  index = "01",
  title = "",
  description = "",
  tags = [],
  href = "/services",
  icon: Icon = null,
  dark = true,
  className = "",
}) {
  return (
    <Link
      to={href}
      className={`group relative flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 rounded-none ${
        dark
          ? "bg-mono-950/60 border border-white/10 hover:border-white/35 hover:bg-white/[0.03]"
          : "bg-white border border-mono-200 hover:border-mono-900 hover:shadow-cardHover"
      } ${className}`}
    >
      <div>
        {/* Top Header: Index & Optional Icon */}
        <div className="flex items-center justify-between mb-5">
          <span
            className={`font-mono text-xs font-semibold uppercase tracking-[0.25em] ${
              dark ? "text-white/70" : "text-mono-900"
            }`}
          >
            {index}
          </span>
          {Icon && (
            <div
              className={`p-2.5 rounded-lg transition-transform duration-300 group-hover:scale-105 ${
                dark
                  ? "bg-white/5 text-white border border-white/10"
                  : "bg-mono-100 text-mono-900 border border-mono-200"
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
          )}
        </div>

        {/* Title */}
        <h3
          className={`font-heading text-xl sm:text-2xl font-bold tracking-tight mb-3 transition-colors ${
            dark
              ? "text-white group-hover:text-mono-300"
              : "text-black group-hover:text-mono-700"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-6 line-clamp-3 ${
            dark ? "text-white/72" : "text-mono-600"
          }`}
        >
          {description}
        </p>
      </div>

      <div>
        {/* Tech Tag Strip */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.slice(0, 3).map((tag, tIdx) => (
              <TechPill key={tIdx} dark={dark}>
                {tag}
              </TechPill>
            ))}
          </div>
        )}

        {/* Bottom Action: "Explore →" */}
        <div
          className={`flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest transition-colors ${
            dark
              ? "text-white group-hover:text-mono-300"
              : "text-black group-hover:text-mono-700"
          }`}
        >
          <span>Explore</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>
    </Link>
  );
}
