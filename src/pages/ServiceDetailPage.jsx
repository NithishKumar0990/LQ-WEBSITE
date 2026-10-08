// ═══════════════════════════════════════
// PAGE: ServiceDetail (/services/:slug) — Service Detail Page
// SECTIONS: Hero, Overview, What We Deliver, Core Strengths, Sidebar, CTA Banner
// ═══════════════════════════════════════

import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import CTABanner from "../components/CTABanner";
import { servicesData } from "../data/services";
import {
  CheckCircle2,
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

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDesc}
      />

      <main className="min-h-screen bg-lightBg">
        {/* ---------- SECTION: Hero ---------- */}
        <section className="relative bg-gradient-to-br from-brand-earth-900 to-brand-earth-600 text-white py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFC91B_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gold hover:text-white transition-colors mb-6 uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all services</span>
            </Link>

            <div className="max-w-3xl">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-yellowLight text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                Core Practice
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-yellowLight">
                {service.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
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
                {/* ---------- SECTION: Overview ---------- */}
                <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
                  <h2 className="font-heading text-2xl font-bold text-heading mb-4">
                    Overview
                  </h2>
                  <div className="w-12 h-1 bg-gold rounded-full mb-6" />
                  <p className="text-sm sm:text-base text-bodyText leading-relaxed">
                    {service.overview}
                  </p>
                </div>

                {/* ---------- SECTION: What We Deliver ---------- */}
                <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
                  <h2 className="font-heading text-2xl font-bold text-heading mb-4">
                    What We Deliver
                  </h2>
                  <div className="w-12 h-1 bg-gold rounded-full mb-6" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-heading leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ---------- SECTION: Core Strengths ---------- */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Shield className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-heading mb-2">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-bodyText leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ---------- SECTION: Sidebar ---------- */}
              <div className="lg:col-span-4 space-y-8">
                {/* CTA Card */}
                <div className="bg-navy text-white rounded-2xl p-8 border border-navy/80 shadow-xl">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-gold/20 text-yellowLight rounded-full uppercase tracking-wider inline-block mb-4">
                    Get Started
                  </span>
                  <h3 className="font-heading text-xl font-bold mb-3 text-yellowLight">
                    Accelerate Your Project
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Looking to implement or scale your {service.title} initiatives? Connect with our senior consultants for a technical review and cost estimate.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-navy font-semibold text-sm hover:bg-yellowLight transition-colors"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Other Services Nav */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                    <Layers className="w-4 h-4 text-primary" />
                    <h4 className="font-heading font-bold text-sm text-heading uppercase tracking-wider">
                      Related Capabilities
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {otherServices.map((other) => (
                      <Link
                        key={other.slug}
                        to={`/services/${other.slug}`}
                        className="block p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <p className="text-xs font-semibold text-heading group-hover:text-primary transition-colors">
                          {other.title}
                        </p>
                        <p className="text-[11px] text-bodyText line-clamp-1 mt-0.5">
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
