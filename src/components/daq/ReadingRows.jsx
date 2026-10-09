import React, { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import TechPill from "./TechPill";

/**
 * P06: Expandable Reading Rows (DAQ Pattern Adapted)
 * Hairline-divided editorial list rows with monospace indexing and smooth disclosure
 */
export default function ReadingRows({
  items = [],
  expandable = true,
  dark = false,
  className = "",
}) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleRow = (idx) => {
    if (!expandable) return;
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div
      className={`divide-y transition-colors ${
        dark ? "divide-white/10" : "divide-mono-200"
      } ${className}`}
    >
      {items.map((item, idx) => {
        const isExpanded = expandedIndex === idx;
        const itemNumber = item.index || String(idx + 1).padStart(2, "0");

        return (
          <div
            key={item.id || idx}
            onClick={() => toggleRow(idx)}
            className={`group py-5 sm:py-6 px-3 sm:px-4 transition-all duration-300 ${
              expandable ? "cursor-pointer" : ""
            } ${
              dark
                ? "hover:bg-white/[0.02]"
                : "hover:bg-mono-50"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-6">
              {/* Index & Title */}
              <div className="flex items-baseline gap-4 sm:gap-6 flex-1 min-w-0">
                <span
                  className={`font-mono text-xs uppercase tracking-[0.2em] shrink-0 ${
                    dark ? "text-white/60" : "text-mono-600"
                  }`}
                >
                  {itemNumber}
                </span>

                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-heading text-lg sm:text-xl font-bold transition-colors ${
                      dark
                        ? "text-white group-hover:text-mono-300"
                        : "text-black group-hover:text-mono-700"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p
                      className={`text-xs sm:text-sm mt-0.5 font-mono tracking-wide ${
                        dark ? "text-white/50" : "text-mono-500"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Tags & Action icon */}
              <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                {item.tags && item.tags.length > 0 && (
                  <div className="hidden md:flex items-center gap-1.5">
                    {item.tags.slice(0, 3).map((tag, tIdx) => (
                      <TechPill key={tIdx} dark={dark}>
                        {tag}
                      </TechPill>
                    ))}
                  </div>
                )}

                {expandable && (
                  <button
                    type="button"
                    aria-label="Toggle details"
                    className={`p-1.5 rounded-full border transition-transform duration-300 ${
                      dark
                        ? "border-white/15 text-white/70 group-hover:border-white group-hover:text-white"
                        : "border-mono-200 text-mono-500 group-hover:border-mono-900 group-hover:text-black"
                    } ${isExpanded ? "rotate-180" : ""}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Expandable Body */}
            {(isExpanded || !expandable) && (item.description || item.details) && (
              <div
                className={`pt-4 pl-8 sm:pl-12 transition-all duration-300 text-sm sm:text-base leading-relaxed ${
                  dark ? "text-white/75" : "text-mono-600"
                }`}
              >
                {item.description && <p>{item.description}</p>}

                {item.details && (
                  <div className="mt-3 text-sm">{item.details}</div>
                )}

                {item.action && (
                  <div className="mt-4 pt-2">
                    {item.action}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
