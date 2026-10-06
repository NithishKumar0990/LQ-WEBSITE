// ═══════════════════════════════════════
// PAGE: NotFound (*) — 404 Page Not Found
// SECTIONS: 404 Error Message & Navigation Actions
// ═══════════════════════════════════════

import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Leanqualities Solutions"
        description="The page you are looking for does not exist on Leanqualities Solutions."
      />

      <main className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-lightBg">
        {/* ---------- SECTION: 404 Card ---------- */}
        <div className="max-w-md w-full text-center bg-white p-8 sm:p-12 rounded-2xl border border-slate-200/80 shadow-lg">
          <span className="font-heading text-6xl sm:text-7xl font-extrabold text-primary block mb-2">
            404
          </span>
          <div className="w-12 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <h1 className="font-heading text-2xl font-bold text-heading mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-bodyText mb-8 leading-relaxed">
            The page you requested could not be found. It may have been moved, renamed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-navy hover:text-gold transition-colors shadow-md"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-heading text-sm font-medium hover:bg-slate-50 transition-colors"
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
