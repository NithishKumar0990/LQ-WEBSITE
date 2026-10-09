// ═══════════════════════════════════════
// PAGE: NotFound (*) — 404 Page Not Found (Phase 1 DAQ Adapted)
// SECTIONS: 404 Dark Error Canvas (P01 + P07) & Actions
// ═══════════════════════════════════════

import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import InkReveal from "../components/daq/InkReveal";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Leanqualities Solutions"
        description="The page you are looking for does not exist on Leanqualities Solutions."
      />

      <main className="min-h-[85vh] flex items-center justify-center py-20 px-4 bg-black text-white cad-grid relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        {/* ---------- SECTION: 404 Card ---------- */}
        <div className="max-w-lg w-full text-center relative z-10 p-8 sm:p-12 rounded-3xl bg-mono-950/80 border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-mono text-[11px] uppercase tracking-[0.25em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            Error 404
          </div>

          <InkReveal
            text="404"
            as="div"
            className="font-heading text-7xl sm:text-9xl font-bold tracking-tight mb-2 text-white"
          />

          <div className="w-12 h-0.5 bg-white/20 mx-auto mb-6 rounded-full" />

          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
            Page Not Found
          </h1>

          <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm mx-auto">
            The page you requested could not be found. It may have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-[0.2em] font-bold hover:shadow-whiteGlow transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/10 text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
