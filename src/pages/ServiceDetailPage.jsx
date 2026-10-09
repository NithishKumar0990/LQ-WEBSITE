// ═══════════════════════════════════════
// PAGE: ServiceDetail (/services/:slug) — Service Detail Page (Phase 1 DAQ Adapted)
// SECTIONS: Hero (P01+P07), Overview (P03), What We Deliver (P06),
//           Technologies (P04), Sidebar, CTA Banner
// ═══════════════════════════════════════

import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import CTABanner from "../components/CTABanner";
import InkReveal from "../components/daq/InkReveal";
import ChapterAnchor from "../components/daq/ChapterAnchor";
import ReadingRows from "../components/daq/ReadingRows";
import TechPill from "../components/daq/TechPill";
import { servicesData } from "../data/services";
import {
  ArrowRight,
  Shield,
  Layers,
  ArrowLeft,
} from "lucide-react";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services (exclude current)
  const otherServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  // Format deliverables as ReadingRows items
  const deliverableRows = (service.deliverables || []).map((item, idx) => ({
    index: String(idx + 1).padStart(2, "0"),
    title: item,
    subtitle: `Deliverable Benchmark — ${service.title}`,
  }));

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDesc}
      />

      <main className="min-h-screen bg-mono-50">
        {/* ---------- SECTION: Hero (P01 + P07) ---------- */}
        <section className="relative bg-black text-white py-20 lg:py-24 overflow-hidden cad-grid">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(rgba(247,247,247,0.15)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-mono-400 hover:text-white transition-colors mb-6 uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all services</span>
            </Link>

            <div className="max-w-3xl">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/5 text-white font-mono text-xs font-semibold uppercase tracking-[0.25em] mb-4 border border-white/10">
                Core Practice
              </span>
              <div className="mb-4">
                <InkReveal
                  as="h1"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
                >
                  {service.heroTitle}
                </InkReveal>
              </div>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                {service.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Overview & Deliverables Body ---------- */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Overview + Deliverables */}
              <div className="lg:col-span-8 space-y-12">
                {/* ---------- Chapter 01: Overview ---------- */}
                <div className="bg-white rounded-none p-8 sm:p-10 border border-mono-200 shadow-sm">
                  <ChapterAnchor chapter="01" title="Overview" />
                  <h2 className="font-heading text-2xl font-bold text-black mb-4">
                    Architectural Overview
                  </h2>
                  <div className="w-12 h-0.5 bg-mono-300 rounded-full mb-6" />
                  <p className="text-sm sm:text-base text-mono-600 leading-relaxed">
                    {service.overview}
                  </p>

                  {/* P04 Tech Pills if service has technologies */}
                  {service.technologies && service.technologies.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-mono-200">
                      <span className="font-mono text-xs uppercase tracking-wider text-black font-medium block mb-3">
                        Technologies & Frameworks
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, tIdx) => (
                          <TechPill key={tIdx} dark={false}>
                            {tech}
                          </TechPill>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* ---------- Chapter 02: What We Deliver (P06 Reading Rows) ---------- */}
                <div className="bg-white rounded-none p-8 sm:p-10 border border-mono-200 shadow-sm">
                  <ChapterAnchor chapter="02" title="Delivery Scope" />
                  <h2 className="font-heading text-2xl font-bold text-black mb-4">
                    What We Deliver
                  </h2>
                  <div className="w-12 h-0.5 bg-mono-300 rounded-full mb-6" />
                  <div className="mt-6">
                    <ReadingRows items={deliverableRows} dark={false} expandable={false} />
                  </div>
                </div>

                {/* ---------- Chapter 03: Core Strengths ---------- */}
                <div className="space-y-6">
                  <ChapterAnchor chapter="03" title="Core Strengths" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {service.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-none border border-mono-200 shadow-sm hover:border-black transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-mono-100 text-black flex items-center justify-center mb-4 border border-mono-200">
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
                <div className="bg-mono-950 text-white rounded-none p-8 border border-white/10 shadow-xl cad-grid">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-white/10 text-white rounded-full uppercase tracking-widest inline-block mb-4 border border-white/10">
                    Get Started
                  </span>
                  <h3 className="font-heading text-xl font-bold mb-3 text-white">
                    Accelerate Your Project
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-6">
                    Looking to implement or scale your {service.title} initiatives? Connect with our senior consultants for a technical review and cost estimate.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-white text-black hover:shadow-whiteGlow transition-all shadow-md"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Other Services Nav */}
                <div className="bg-white rounded-none p-6 border border-mono-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-mono-200">
                    <Layers className="w-4 h-4 text-black" />
                    <h4 className="font-mono font-bold text-xs text-black uppercase tracking-wider">
                      Related Capabilities
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {otherServices.map((other) => (
                      <Link
                        key={other.slug}
                        to={`/services/${other.slug}`}
                        className="block p-3 rounded-none hover:bg-mono-50 transition-colors group"
                      >
                        <p className="text-xs font-semibold text-black group-hover:text-black transition-colors">
                          {other.title}
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
          title="Ready to build with Leanquality Solutions?"
          description="Reach out today to discuss your technical architecture, timeline, and delivery goals with our engineering experts in Pune."
          buttonText="Start Your Conversation"
          buttonLink="/contact"
        />
      </main>
    </>
  );
}
