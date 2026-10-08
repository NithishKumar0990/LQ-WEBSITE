// ═══════════════════════════════════════
// PAGE: DigitalMarketing (/digital-marketing) — Digital Marketing Overview
// SECTIONS: Hero, Why Us, Stats, Our Approach, Features, Related Technology
// ═══════════════════════════════════════

import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Counter from "../components/Counter";
import SectionHeading from "../components/SectionHeading";
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
      icon: Globe,
    },
    {
      title: "Customer Relationship Management (CRM)",
      desc: "Salesforce, HubSpot, Zoho CRM integrations to capture and route inbound inquiries instantly.",
      icon: Users,
    },
    {
      title: "Email Marketing Tools",
      desc: "Mailchimp, Klaviyo, SendGrid, and ActiveCampaign for personalized behavioral email sequences.",
      icon: Mail,
    },
    {
      title: "Social Media Platforms",
      desc: "LinkedIn Campaign Manager, Meta Ads Manager, YouTube, and X for targeted demographic reach.",
      icon: Share2,
    },
    {
      title: "SEO Tools",
      desc: "Ahrefs, SEMrush, Screaming Frog, and Google Search Console for technical audits and keyword capture.",
      icon: Search,
    },
    {
      title: "PPC Platforms",
      desc: "Google Ads, Microsoft Advertising, LinkedIn Ads, and remarketing networks for high-intent search capture.",
      icon: DollarSign,
    },
    {
      title: "Analytics Tools",
      desc: "Google Analytics 4 (GA4), Mixpanel, Hotjar, and custom telemetry data warehouses.",
      icon: BarChart3,
    },
    {
      title: "Marketing Automation",
      desc: "Zapier, Make, AutomationEdge, and HubSpot workflows connecting leads directly to sales teams.",
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

      <main className="min-h-screen bg-lightBg">
        {/* ---------- SECTION: Hero ---------- */}
        <section className="relative bg-gradient-to-br from-brand-earth-900 to-brand-earth-600 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFC91B_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-yellowLight text-xs font-semibold uppercase tracking-widest mb-4 border border-white/10">
              Growth & Acquisition
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-yellowLight">
              Digital Marketing Solutions
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
              Accelerate your digital footprint, capture high-intent buyers, and build predictable customer acquisition pipelines with data-driven marketing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-navy font-semibold text-sm hover:bg-yellowLight transition-colors shadow-lg"
              >
                <span>Request Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Why Us ---------- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Strategic Advantage
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-heading leading-tight">
                  Why Partner With Our Marketing Practice?
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full" />
                <p className="text-sm sm:text-base text-bodyText leading-relaxed">
                  In today&apos;s crowded digital landscape, generic ad campaigns waste valuable capital. At Leanquality Solutions, we blend software engineering discipline with performance marketing acumen to engineer repeatable growth loops.
                </p>
                <p className="text-sm sm:text-base text-bodyText leading-relaxed">
                  We don&apos;t just chase vanity impressions; we optimize for customer lifetime value (LTV), lower customer acquisition cost (CAC), and concrete revenue attribution across organic search, paid channels, and inbound marketing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-heading">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Technical SEO & Core Web Vitals</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-heading">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Multi-Touch Attribution Tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-heading">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>High-Intent Google Ads & LinkedIn PPC</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-heading">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Conversion Rate Optimization (CRO)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-navy to-primary p-8 rounded-2xl text-white shadow-xl space-y-6">
                  <h3 className="font-heading font-bold text-xl text-yellowLight">
                    Specialized Practices
                  </h3>
                  <div className="space-y-4">
                    {subpages.map((sub) => (
                      <Link
                        key={sub.slug}
                        to={`/digital-marketing/${sub.slug}`}
                        className="block p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                      >
                        <h4 className="font-heading font-bold text-sm text-white flex items-center justify-between">
                          <span>{sub.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-gold" />
                        </h4>
                        <p className="text-xs text-slate-300 mt-1">
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

        {/* ---------- SECTION: Stats Row ---------- */}
        <section className="py-16 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-gold mb-2">
                  <Counter end={500} suffix="+" duration={2000} />
                </div>
                <p className="text-sm font-semibold text-white">Projects Delivered</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-gold mb-2">
                  <Counter end={200} suffix="+" duration={2000} />
                </div>
                <p className="text-sm font-semibold text-white">Happy Clients</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-gold mb-2">
                  <Counter end={1.2} suffix="M+" decimals={1} duration={2000} />
                </div>
                <p className="text-sm font-semibold text-white">Targeted Leads Generated</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Our Approach ---------- */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Framework"
              title="Our Methodological Approach"
              description="A disciplined four-phase growth framework that ensures marketing investments deliver predictable, compounding returns."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {approachSteps.map((step) => (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-cardHover transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-heading text-4xl font-extrabold text-primary/20 block mb-4">
                      {step.num}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-heading mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-bodyText leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Features ---------- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Key Pillars"
              title="Core Marketing Features"
              description="The foundational capabilities that distinguish our digital marketing consulting from traditional agencies."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-8 rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-heading mb-3">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-bodyText leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Related Technology ---------- */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="MarTech Stack"
              title="Related Marketing Technologies"
              description="Modern platforms, analytical engines, and automation tools leveraged across our client campaigns."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTech.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.title}
                    className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-sm text-heading mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-xs text-bodyText leading-relaxed">
                        {tech.desc}
                      </p>
                    </div>
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
