// ═══════════════════════════════════════
// PAGE: DigitalMarketing (/digital-marketing) — Digital Marketing Overview (Phase 1 DAQ Adapted)
// SECTIONS: Hero (P01+P07), Why Us (P03), Stats (P05), Our Approach (P03), Features (P03), Related Technology (P04)
// ═══════════════════════════════════════

import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import InkReveal from "../components/daq/InkReveal";
import ChapterAnchor from "../components/daq/ChapterAnchor";
import CounterStrip from "../components/daq/CounterStrip";
import TechPill from "../components/daq/TechPill";
import {
  TrendingUp,
  Target,
  BarChart3,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Compass,
  Sliders,
  PieChart,
  MessageSquare,
  Award,
  Globe,
  Users,
  Mail,
  Share2,
  Search,
  DollarSign,
  Cpu,
} from "lucide-react";

export default function DigitalMarketingPage() {
  const approachSteps = [
    {
      num: "01",
      title: "Refocusing on Business Goals",
      desc: "We begin by auditing your current market position, unit economics, and target buyer profiles to anchor all marketing actions in concrete business revenue.",
    },
    {
      num: "02",
      title: "Objectives in Marketing",
      desc: "Establishing unambiguous, measurable acquisition milestones across organic traffic, paid search, social engagement, and qualified lead volume.",
    },
    {
      num: "03",
      title: "Key Performance Indicators (KPIs)",
      desc: "Configuring transparent analytics tracking, multi-touch attribution, CAC benchmarks, and pipeline conversion metrics to evaluate spend efficiency.",
    },
    {
      num: "04",
      title: "Promotional Strategy",
      desc: "Executing targeted omnichannel promotional campaigns blending search marketing, content engines, social distribution, and automated nurture sequences.",
    },
  ];

  const features = [
    {
      title: "Expertise",
      desc: "Seasoned digital marketing strategists, technical SEO analysts, and performance ad managers delivering proven growth.",
      icon: Award,
    },
    {
      title: "Holistic Approach",
      desc: "Uniting brand narrative, technical search optimization, conversion rate optimization, and retention workflows into a unified funnel.",
      icon: Compass,
    },
    {
      title: "Customized Solutions",
      desc: "Bespoke marketing playbooks tailored specifically to your industry vertical, competitive landscape, and customer journeys.",
      icon: Sliders,
    },
    {
      title: "Data-Driven Strategies",
      desc: "Every campaign hypothesis is grounded in telemetry data, user heatmaps, conversion tracking, and statistical testing.",
      icon: PieChart,
    },
    {
      title: "Transparent Communication",
      desc: "Real-time performance dashboards, weekly progress reporting, and clear attribution of every marketing rupee spent.",
      icon: MessageSquare,
    },
    {
      title: "Results-Oriented",
      desc: "Relentless focus on qualified pipeline generation, lower customer acquisition cost, and sustainable return on investment.",
      icon: Target,
    },
  ];

  const relatedTech = [
    {
      title: "Content Management Systems (CMS)",
      desc: "WordPress, Webflow, Headless Strapi, and custom React frontends for rapid content deployment.",
      tools: ["WordPress", "Webflow", "Strapi", "React"],
      icon: Globe,
    },
    {
      title: "Customer Relationship Management (CRM)",
      desc: "Salesforce, HubSpot, Zoho CRM integrations to capture and route inbound inquiries instantly.",
      tools: ["Salesforce", "HubSpot", "Zoho CRM"],
      icon: Users,
    },
    {
      title: "Email Marketing Tools",
      desc: "Mailchimp, Klaviyo, SendGrid, and ActiveCampaign for personalized behavioral email sequences.",
      tools: ["Mailchimp", "Klaviyo", "SendGrid", "ActiveCampaign"],
      icon: Mail,
    },
    {
      title: "Social Media Platforms",
      desc: "LinkedIn Campaign Manager, Meta Ads Manager, YouTube, and X for targeted demographic reach.",
      tools: ["LinkedIn", "Meta Ads", "YouTube", "X"],
      icon: Share2,
    },
    {
      title: "SEO Tools",
      desc: "Ahrefs, SEMrush, Screaming Frog, and Google Search Console for technical audits and keyword capture.",
      tools: ["Ahrefs", "SEMrush", "Screaming Frog", "GSC"],
      icon: Search,
    },
    {
      title: "PPC Platforms",
      desc: "Google Ads, Microsoft Advertising, LinkedIn Ads, and remarketing networks for high-intent search capture.",
      tools: ["Google Ads", "Microsoft Ads", "LinkedIn Ads"],
      icon: DollarSign,
    },
    {
      title: "Analytics Tools",
      desc: "Google Analytics 4 (GA4), Mixpanel, Hotjar, and custom telemetry data warehouses.",
      tools: ["GA4", "Mixpanel", "Hotjar", "BigQuery"],
      icon: BarChart3,
    },
    {
      title: "Marketing Automation",
      desc: "Zapier, Make, AutomationEdge, and HubSpot workflows connecting leads directly to sales teams.",
      tools: ["Zapier", "Make", "AutomationEdge", "HubSpot"],
      icon: Cpu,
    },
  ];

  const subpages = [
    {
      slug: "digital-strategy",
      title: "Digital Strategy",
      desc: "Data-backed roadmaps aligning technology initiatives with market positioning.",
    },
    {
      slug: "digital-transformation",
      title: "Digital Transformation",
      desc: "Modernizing legacy workflows and enterprise culture with cloud and automation.",
    },
    {
      slug: "media-analytics",
      title: "Media Analytics",
      desc: "Unifying cross-channel marketing data into real-time attribution dashboards.",
    },
    {
      slug: "content-marketing",
      title: "Content Marketing",
      desc: "Authoritative, search-optimized content engines that educate buyers.",
    },
  ];

  return (
    <>
      <SEO
        title="Digital Marketing - Leanqualities Solutions"
        description="Comprehensive digital marketing, SEO, PPC, and growth consulting in Pune by Leanquality Solutions India Pvt. Ltd. Measurable customer acquisition."
      />

      <main className="min-h-screen bg-mono-50">
        {/* ---------- SECTION: Hero (P01 + P07) ---------- */}
        <section className="relative bg-mono-950 text-white py-20 lg:py-28 overflow-hidden cad-grid">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/12 text-white/70 font-mono text-[11px] uppercase tracking-[0.25em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Growth & Acquisition
            </div>
            <InkReveal
              text="Digital Marketing Solutions"
              as="h1"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5"
            />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/75 leading-relaxed mb-8">
              Accelerate your digital footprint, capture high-intent buyers, and build predictable customer acquisition pipelines with data-driven marketing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-[0.2em] font-bold hover:shadow-whiteGlow hover:-translate-y-0.5 transition-all"
              >
                <span>Request Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Why Us (P03) ---------- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ChapterAnchor chapter="01" title="Strategic Advantage" light={false} className="mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                  Why Partner With Our Marketing Practice?
                </h2>
                <div className="w-12 h-0.5 bg-mono-300 rounded-full" />
                <p className="text-sm sm:text-base text-mono-600 leading-relaxed">
                  In today&apos;s crowded digital landscape, generic ad campaigns waste valuable capital. At Leanquality Solutions, we blend software engineering discipline with performance marketing acumen to engineer repeatable growth loops.
                </p>
                <p className="text-sm sm:text-base text-mono-600 leading-relaxed">
                  We don&apos;t just chase vanity impressions; we optimize for customer lifetime value (LTV), lower customer acquisition cost (CAC), and concrete revenue attribution across organic search, paid channels, and inbound marketing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-black">
                    <CheckCircle2 className="w-4 h-4 text-mono-900 shrink-0" />
                    <span>Technical SEO & Core Web Vitals</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-black">
                    <CheckCircle2 className="w-4 h-4 text-mono-900 shrink-0" />
                    <span>Multi-Touch Attribution Tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-black">
                    <CheckCircle2 className="w-4 h-4 text-mono-900 shrink-0" />
                    <span>High-Intent Google Ads & LinkedIn PPC</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-black">
                    <CheckCircle2 className="w-4 h-4 text-mono-900 shrink-0" />
                    <span>Conversion Rate Optimization (CRO)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-mono-950 p-8 rounded-2xl text-white shadow-xl space-y-6 cad-grid border border-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-xl text-white">
                      Specialized Practices
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                      4 Practices
                    </span>
                  </div>
                  <div className="space-y-4">
                    {subpages.map((sub, sIdx) => (
                      <Link
                        key={sub.slug}
                        to={`/digital-marketing/${sub.slug}`}
                        className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 group"
                      >
                        <h4 className="font-heading font-bold text-sm text-white flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <span className="font-mono text-xs text-white/60">0{sIdx + 1}</span>
                            <span>{sub.title}</span>
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                        </h4>
                        <p className="text-xs text-white/70 mt-1 pl-6">
                          {sub.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Stats Row (P05) ---------- */}
        <CounterStrip
          bg="bg-mono-950"
          stats={[
            { value: "500", suffix: "+", label: "Projects Delivered" },
            { value: "200", suffix: "+", label: "Happy Clients" },
            { value: "1.2", suffix: "M+", label: "Targeted Leads Generated" },
          ]}
        />

        {/* ---------- SECTION: Our Approach (P03) ---------- */}
        <section className="py-20 bg-mono-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ChapterAnchor chapter="02" title="Our Methodological Approach" light={false} className="mb-6" />
            <div className="mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-black">
                A Disciplined Four-Phase Framework
              </h2>
              <p className="text-sm text-mono-600 mt-2 max-w-2xl">
                A disciplined four-phase growth framework that ensures marketing investments deliver predictable, compounding returns.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {approachSteps.map((step) => (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl p-8 border border-mono-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-mono-900"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-mono-600 font-semibold block mb-4">
                      PHASE {step.num}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-black mb-3 group-hover:text-mono-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-mono-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Features (P03) ---------- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ChapterAnchor chapter="03" title="Core Marketing Features" light={false} className="mb-6" />
            <div className="mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-black">
                Key Strategic Capabilities
              </h2>
              <p className="text-sm text-mono-600 mt-2 max-w-2xl">
                The foundational capabilities that distinguish our digital marketing consulting from traditional agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-8 rounded-2xl border border-mono-200 bg-white shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-mono-100 text-mono-900 flex items-center justify-center mb-5 border border-mono-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-black mb-3">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-mono-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Related Technology (P03 + P04) ---------- */}
        <section className="py-20 bg-mono-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ChapterAnchor chapter="04" title="Related Marketing Technologies" light={false} className="mb-6" />
            <div className="mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-black">
                MarTech Architecture
              </h2>
              <p className="text-sm text-mono-600 mt-2 max-w-2xl">
                Modern platforms, analytical engines, and automation tools leveraged across our client campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTech.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.title}
                    className="bg-white p-6 rounded-2xl border border-mono-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-mono-100 text-mono-900 flex items-center justify-center mb-4 border border-mono-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-sm text-black mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-xs text-mono-600 leading-relaxed mb-4">
                        {tech.desc}
                      </p>
                    </div>
                    {tech.tools && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-mono-200">
                        {tech.tools.map((t) => (
                          <TechPill key={t} dark={false}>
                            {t}
                          </TechPill>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
