// ═══════════════════════════════════════
// PAGE: Services (/services) — Services Overview
// SECTIONS: Banner, Intro & Services Grid, Consultation Banner
// ═══════════════════════════════════════

import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import PageBanner from "../components/PageBanner";
import CTABanner from "../components/CTABanner";
import { servicesData } from "../data/services";
import {
  Code,
  Smartphone,
  Cloud,
  Terminal,
  Brain,
  Headphones,
  Building2,
  Cpu,
  Layers,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  "web-development": Code,
  "mobile-app-development": Smartphone,
  "cloud-application-development": Cloud,
  devops: Terminal,
  "ai-ml-development": Brain,
  "application-support": Headphones,
  "enterprise-software-development": Building2,
  iot: Cpu,
  "blockchain-development": Layers,
  "e-commerce-development": ShoppingBag,
};

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services - Leanqualities Solutions"
        description="Explore enterprise software engineering, cloud architectures, AI/ML development, DevOps, and mobile app solutions by Leanquality Solutions Pune."
      />

      <main className="min-h-screen bg-lightBg">
        {/* ---------- SECTION: Banner ---------- */}
        <PageBanner
          badge="Enterprise Solutions"
          title="Our Core Services"
          subtitle="We empower modern enterprises with comprehensive software engineering, cloud architecture, and intelligent automation solutions."
        />

        {/* ---------- SECTION: Services Grid ---------- */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Full-Stack Capabilities"
              title="Tailored Technology For Modern Business"
              description="From initial architectural design to high-throughput cloud deployment and ongoing support, we deliver robust solutions across every stage of the technology lifecycle."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((svc) => {
                const Icon = iconMap[svc.slug] || Code;
                return (
                  <div
                    key={svc.slug}
                    className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors mb-6">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-heading mb-3 group-hover:text-primary transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-bodyText leading-relaxed mb-6">
                        {svc.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <Link
                        to={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-navy transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ---------- SECTION: Consultation Banner ---------- */}
            <CTABanner
              title="Need a custom solution tailored to your enterprise?"
              description="Speak with our principal software architects in Pune to design a custom engineering roadmap for your business."
              buttonText="Schedule a Consultation"
              buttonLink="/contact"
            />
          </div>
        </section>
      </main>
    </>
  );
}
