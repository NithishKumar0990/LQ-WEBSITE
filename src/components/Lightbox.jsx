import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (currentIndex === null || !items || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-mono-200">
        <div className="relative aspect-[16/9] w-full bg-black">
          <img
            src={currentItem.src}
            alt={currentItem.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-6 bg-white">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-mono-100 text-black border border-mono-200">
              {currentItem.category}
            </span>
            <span className="text-xs text-mono-600 flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-black" />
              {currentItem.date}
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold text-black">
            {currentItem.title}
          </h3>
          <p className="text-sm text-mono-600 mt-2 leading-relaxed">
            {currentItem.description}
          </p>
          <div className="mt-4 pt-4 border-t border-mono-200 flex items-center justify-between text-xs text-mono-400 font-mono">
            <span>
              Image {currentIndex + 1} of {items.length}
            </span>
            <span>Use Left/Right arrows or buttons to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
