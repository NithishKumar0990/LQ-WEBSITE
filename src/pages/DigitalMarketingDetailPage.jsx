// ═══════════════════════════════════════
// PAGE: DigitalMarketingDetail (/digital-marketing/:slug) — DM Subpage (Phase 1 DAQ Adapted)
// SECTIONS: Hero (P01+P07), Strategic Overview (P03), Key Deliverables (P03), Core Features (P03), Sidebar, CTA Banner
// ═══════════════════════════════════════

import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import CTABanner from "../components/CTABanner";
import InkReveal from "../components/daq/InkReveal";
import ChapterAnchor from "../components/daq/ChapterAnchor";
import { digitalMarketingSubpages } from "../data/digitalMarketing";
import { CheckCircle2, ArrowRight, Shield, Layers, ArrowLeft } from "lucide-react";

export default function DigitalMarketingDetailPage() {
  const { slug } = useParams();
  const subpage = digitalMarketingSubpages.find((p) => p.slug === slug);

  if (!subpage) {
    return <Navigate to="/digital-marketing" replace />;
  }

  // Related subpages (exclude current)
  const otherSubpages = digitalMarketingSubpages.filter(
    (p) => p.slug !== subpage.slug
  );

  return (
    <>
      <SEO
        title={subpage.metaTitle}
        description={subpage.metaDesc}
      />

      <main className="min-h-screen bg-mono-50">
        {/* ---------- SECTION: Hero (P01 + P07) ---------- */}
        <section className="relative bg-black text-white py-20 lg:py-24 overflow-hidden cad-grid">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to="/digital-marketing"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-mono-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Digital Marketing</span>
            </Link>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-mono text-[11px] uppercase tracking-[0.25em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Marketing Practice
              </div>
              <InkReveal
                text={subpage.heroTitle}
                as="h1"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              />
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                {subpage.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Main Content Body ---------- */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-8 space-y-12">
                {/* ---------- SECTION: Strategic Overview (P03) ---------- */}
                <div className="bg-white rounded-2xl p-8 sm:p-10 border border-mono-200 shadow-sm">
                  <ChapterAnchor chapter="01" title="Strategic Overview" dark={false} className="mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-black mb-4">
                    Strategic Overview
                  </h2>
                  <div className="w-12 h-0.5 bg-mono-300 rounded-full mb-6" />
                  <p className="text-sm sm:text-base text-mono-600 leading-relaxed">
                    {subpage.overview}
                  </p>
                </div>

                {/* ---------- SECTION: Key Deliverables (P03) ---------- */}
                <div className="bg-white rounded-2xl p-8 sm:p-10 border border-mono-200 shadow-sm">
                  <ChapterAnchor chapter="02" title="Key Deliverables" dark={false} className="mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-black mb-4">
                    Key Deliverables & Methodologies
                  </h2>
                  <div className="w-12 h-0.5 bg-mono-300 rounded-full mb-6" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {subpage.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-mono-50 border border-mono-200"
                      >
                        <span className="font-mono text-xs text-black font-semibold shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-black leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ---------- SECTION: Core Capabilities (P03) ---------- */}
                <div>
                  <ChapterAnchor chapter="03" title="Core Capabilities" dark={false} className="mb-6" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {subpage.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-2xl border border-mono-200 shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-mono-100 text-black flex items-center justify-center mb-4 border border-mono-200">
                          <Shield className="w-5 h-5" />
                        </div>
                        <h3 className="font-heading font-bold text-base text-black mb-2">
                          {feat.title}
                        </h3>
                        <p className="text-xs text-mono-600 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ---------- SECTION: Sidebar ---------- */}
              <div className="lg:col-span-4 space-y-8">
                {/* CTA Card */}
                <div className="bg-mono-950 text-white rounded-2xl p-8 border border-white/10 shadow-xl cad-grid relative overflow-hidden">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white rounded-full font-mono text-[10px] uppercase tracking-[0.2em] mb-4 border border-white/10">
                    Consultation
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-white">
                    Unlock Measurable Growth
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-6">
                    Connect with our digital consultants in Pune to evaluate your current customer acquisition channels and build an actionable growth roadmap.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-[0.2em] font-bold hover:shadow-whiteGlow transition-all"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Other Marketing Practices Nav */}
                <div className="bg-white rounded-2xl p-6 border border-mono-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-mono-200">
                    <Layers className="w-4 h-4 text-black" />
                    <h4 className="font-mono text-xs font-bold text-black uppercase tracking-[0.2em]">
                      Related Practices
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {otherSubpages.map((other, oIdx) => (
                      <Link
                        key={other.slug}
                        to={`/digital-marketing/${other.slug}`}
                        className="block p-3 rounded-xl hover:bg-mono-50 transition-colors group border border-transparent hover:border-mono-200"
                      >
                        <p className="text-xs font-semibold text-black group-hover:text-black transition-colors flex items-center justify-between">
                          <span>{other.title}</span>
                          <span className="font-mono text-[10px] text-mono-400">0{oIdx + 1}</span>
                        </p>
                        <p className="text-[11px] text-mono-600 line-clamp-1 mt-0.5">
                          {other.shortDesc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: CTA Banner ---------- */}
        <CTABanner
          title="Ready to accelerate your acquisition pipeline?"
          description="Schedule a comprehensive digital growth assessment with our performance consulting team in Pune."
          buttonText="Schedule Growth Audit"
          buttonLink="/contact"
        />
      </main>
    </>
  );
}
