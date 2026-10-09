// ═══════════════════════════════════════
// PAGE: Services (/services) — Services Overview (Phase 1 DAQ Adapted)
// SECTIONS: Banner (P01+P07), Services Grid (P08 Tiles × 10), Consultation Banner
// ═══════════════════════════════════════

import React from "react";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import PageBanner from "../components/PageBanner";
import CTABanner from "../components/CTABanner";
import CapabilityTile from "../components/daq/CapabilityTile";
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

      <main className="min-h-screen bg-mono-50">
        {/* ---------- SECTION: Banner (P01 + P07) ---------- */}
        <PageBanner
          badge="Enterprise Solutions"
          title="Our Core Services"
          subtitle="We empower modern enterprises with comprehensive software engineering, cloud architecture, and intelligent automation solutions."
        />

        {/* ---------- SECTION: Services Grid (P08 Capability Tiles) ---------- */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              chapter="01"
              subtitle="Full-Stack Capabilities"
              title="Tailored Technology For Modern Business"
              description="From initial architectural design to high-throughput cloud deployment and ongoing support, we deliver robust solutions across every stage of the technology lifecycle."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((svc, idx) => {
                const Icon = iconMap[svc.slug] || Code;
                const indexStr = String(idx + 1).padStart(2, "0");
                const tags = svc.technologies ? svc.technologies.slice(0, 3) : ["Enterprise", "Cloud", "Agile"];

                return (
                  <CapabilityTile
                    key={svc.slug}
                    index={indexStr}
                    title={svc.title}
                    description={svc.shortDesc}
                    tags={tags}
                    href={`/services/${svc.slug}`}
                    icon={Icon}
                    dark={false}
                  />
                );
              })}
            </div>

            {/* ---------- SECTION: Consultation Banner ---------- */}
            <CTABanner
              title="Ready to Transform Your Digital Infrastructure?"
              description="Connect with our software architects in Baner, Pune to discuss your upcoming project requirements, technical specifications, and timeline."
              primaryBtnText="Schedule a Consultation"
              primaryBtnLink="/contact"
              secondaryBtnText="Explore Client Success"
              secondaryBtnLink="/about"
            />
          </div>
        </section>
      </main>
    </>
  );
}
