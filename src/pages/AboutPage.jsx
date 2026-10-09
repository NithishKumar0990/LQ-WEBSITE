// ═══════════════════════════════════════
// PAGE: About (/about) — About Us (Phase 1 DAQ Adapted)
// SECTIONS: Banner, Background (P03), Vision & Solutions,
//           Quality Policy & Objectives (P06), Corporate Values
// ═══════════════════════════════════════

import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import PageBanner from "../components/PageBanner";
import ChapterAnchor from "../components/daq/ChapterAnchor";
import ReadingRows from "../components/daq/ReadingRows";
import {
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Heart,
  Globe,
  Sparkles,
  TrendingUp,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const qualityRows = [
    {
      index: "01",
      title: "Customer Satisfaction",
      subtitle: "Quality Policy — Pillar 1",
      description: "Commitment to total customer satisfaction through technical excellence and disciplined project execution.",
    },
    {
      index: "02",
      title: "Capability Enhancement",
      subtitle: "Quality Policy — Pillar 2",
      description: "Continuous enhancement of our engineering capabilities, software development processes, and delivery velocity.",
    },
    {
      index: "03",
      title: "Standards & Compliance",
      subtitle: "Quality Policy — Pillar 3",
      description: "Strict adherence to international software standards, data protection protocols, and OWASP security guidelines.",
    },
    {
      index: "04",
      title: "Meritocracy & Innovation",
      subtitle: "Quality Policy — Pillar 4",
      description: "Fostering a culture of innovation, ongoing training, and meritocracy across our technical teams.",
    },
    {
      index: "05",
      title: "100% On-Time Delivery",
      subtitle: "Quality Objective — Benchmark 1",
      description: "Deliver 100% of projects on time and within agreed budget parameters without compromising architectural integrity.",
    },
    {
      index: "06",
      title: "95%+ Client Satisfaction Index",
      subtitle: "Quality Objective — Benchmark 2",
      description: "Achieve and maintain a client satisfaction index exceeding 95% across all development and consulting engagements.",
    },
    {
      index: "07",
      title: "Zero Critical Vulnerabilities",
      subtitle: "Quality Objective — Benchmark 3",
      description: "Maintain zero critical vulnerabilities in all production releases through rigorous automated testing and security audits.",
    },
    {
      index: "08",
      title: "24/7 SLA Compliance",
      subtitle: "Quality Objective — Benchmark 4",
      description: "Ensure continuous 24/7 SLA compliance for application maintenance and infrastructure support contracts.",
    },
  ];

  const corporateValues = [
    {
      title: "Integrity",
      desc: "Upholding uncompromising ethical standards, truthfulness, and corporate transparency in all professional relationships.",
      icon: ShieldCheck,
    },
    {
      title: "Customer-Centric",
      desc: "Placing client objectives at the center of every architectural, functional, and engineering decision.",
      icon: Users,
    },
    {
      title: "Innovation",
      desc: "Pursuing state-of-the-art technologies, inventive thinking, and creative problem-solving across all challenges.",
      icon: Sparkles,
    },
    {
      title: "Quality",
      desc: "Meticulous attention to detail, robust code hygiene, and strict adherence to top-tier software design principles.",
      icon: CheckCircle2,
    },
    {
      title: "Teamwork",
      desc: "Promoting inclusive collaboration, shared accountability, and mutual respect among engineers and project partners.",
      icon: Heart,
    },
    {
      title: "Respect",
      desc: "Treating clients, partners, and team members with dignity, fairness, empathy, and constructive openness.",
      icon: UserCheck,
    },
    {
      title: "Responsibility",
      desc: "Honoring our commercial and technical commitments with disciplined follow-through and ownership.",
      icon: Target,
    },
    {
      title: "Sustainability",
      desc: "Building energy-efficient cloud architectures, durable software codebases, and long-term organizational viability.",
      icon: Globe,
    },
    {
      title: "Excellence",
      desc: "Striving for continuous improvement and benchmark-setting performance across development and delivery.",
      icon: TrendingUp,
    },
    {
      title: "Inclusivity",
      desc: "Welcoming diverse backgrounds, skill sets, and viewpoints to cultivate a vibrant, high-performing corporate culture.",
      icon: Users,
    },
  ];

  return (
    <>
      <SEO
        title="About Us - Leanqualities Solutions"
        description="Learn about Leanquality Solutions India Pvt. Ltd (LQSIPL) - Pune's premier IT software engineering firm. Discover our vision, quality policy, and core corporate values."
      />

      <main className="min-h-screen bg-mono-50">
        {/* ---------- SECTION: Banner (P01 + P07) ---------- */}
        <PageBanner
          badge="Who We Are"
          title="About Leanquality Solutions"
          subtitle="Pioneering cutting-edge IT consulting, bespoke software engineering, and digital growth from Pune, India."
        />

        {/* ---------- SECTION: Intro (P03 Chapter 01) ---------- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <ChapterAnchor chapter="01" title="Background" />

                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                  Best Software Company In Pune
                </h2>
                <div className="w-12 h-0.5 bg-mono-300 rounded-full" />
                <p className="text-sm sm:text-base text-mono-600 leading-relaxed">
                  Leanquality Solutions India Pvt. Ltd (LQSIPL) stands as a prominent software development and technology consulting firm in Pune, Maharashtra. Built upon principles of engineering precision, agile responsiveness, and deep domain expertise, we help businesses navigate the complexities of digital evolution.
                </p>
                <p className="text-sm sm:text-base text-mono-600 leading-relaxed">
                  Our comprehensive capabilities span custom web applications, cross-platform mobile app development, scalable cloud architectures, DevOps automation, Artificial Intelligence, and Robotic Process Automation. We serve emerging startups as well as established global enterprises, providing the technology infrastructure necessary to compete and win.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-mono-50 p-8 rounded-none border border-mono-200 space-y-4">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-mono-600 block">
                    Institutional Record
                  </span>
                  <h3 className="font-heading font-bold text-xl text-black">
                    Quick Facts
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-mono-600 pt-2">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-mono-900" />
                      <strong>Headquarters:</strong> Baner, Pune, Maharashtra
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-mono-900" />
                      <strong>Legal Entity:</strong> Leanquality Solutions India Pvt. Ltd
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-mono-900" />
                      <strong>Core Specialization:</strong> Cloud, AI/ML, Full-Stack & RPA
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-mono-900" />
                      <strong>Delivery Framework:</strong> Agile, DevOps, CI/CD Automated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Vision & Solutions (P03 Chapter 02) ---------- */}
        <section className="py-20 bg-mono-50 border-t border-mono-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <ChapterAnchor chapter="02" title="Strategic Vision" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="bg-white p-8 sm:p-10 rounded-none border border-mono-200 shadow-sm flex flex-col justify-between hover:border-mono-900 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-mono-100 text-mono-900 flex items-center justify-center mb-6 border border-mono-200">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-black mb-4">
                    Our Vision
                  </h3>
                  <p className="text-sm sm:text-base text-mono-600 leading-relaxed">
                    At Lean Quality Solutions, our vision is to build a lasting technology enterprise by consistently delivering high-quality, reliable, and innovative digital solutions. We strive to be the preferred technology partner for enterprises worldwide, enabling them to achieve digital transformation and sustained growth.
                  </p>
                </div>
              </div>

              {/* Revolutionizing Software Solutions */}
              <div className="bg-white p-8 sm:p-10 rounded-none border border-mono-200 shadow-sm flex flex-col justify-between hover:border-mono-900 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-mono-100 text-mono-900 flex items-center justify-center mb-6 border border-mono-200">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-black mb-4">
                    Revolutionizing Software Solutions
                  </h3>
                  <p className="text-sm sm:text-base text-mono-600 leading-relaxed">
                    We believe in breaking down traditional software silos through rapid iteration, automation-first development, and clean architecture. By uniting modern microservices, automated CI/CD pipelines, and proactive quality engineering, we empower enterprises to deploy updates faster and operate with complete resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Quality Policy & Objectives (P06 Reading Rows) ---------- */}
        <section className="py-20 bg-white border-t border-mono-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              chapter="03"
              subtitle="Governance & SLAs"
              title="Quality Policy & Objectives"
              description="Rigorous engineering principles, performance SLAs, and security benchmarks that govern all deliveries."
            />

            <div className="mt-8">
              <ReadingRows items={qualityRows} dark={false} expandable={true} />
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Corporate Values (P03 Chapter 04) ---------- */}
        <section className="py-20 bg-mono-50 border-t border-mono-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              chapter="04"
              subtitle="Guiding Ideals"
              title="Corporate Values"
              description="Ten fundamental pillars that define our professional code of conduct, relationships, and engineering standards."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {corporateValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="bg-white p-6 rounded-none border border-mono-200 shadow-sm hover:border-mono-900 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-mono-100 text-mono-900 flex items-center justify-center mb-4 border border-mono-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-black mb-2">
                        {val.title}
                      </h3>
                      <p className="text-xs text-mono-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-[0.2em] bg-black text-white hover:bg-mono-800 shadow-lg transition-all"
              >
                <span>Partner With Leanquality Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
