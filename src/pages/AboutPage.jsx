// ═══════════════════════════════════════
// PAGE: About (/about) — About Us
// SECTIONS: Banner, Intro, Vision & Solutions, Quality Policy & Objectives, Corporate Values
// ═══════════════════════════════════════

import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import PageBanner from "../components/PageBanner";
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
} from "lucide-react";

export default function AboutPage() {
  const qualityPolicies = [
    "Commitment to total customer satisfaction through technical excellence and disciplined project execution.",
    "Continuous enhancement of our engineering capabilities, software development processes, and delivery velocity.",
    "Strict adherence to international software standards, data protection protocols, and OWASP security guidelines.",
    "Fostering a culture of innovation, ongoing training, and meritocracy across our technical teams.",
  ];

  const qualityObjectives = [
    "Deliver 100% of projects on time and within agreed budget parameters without compromising architectural integrity.",
    "Achieve and maintain a client satisfaction index exceeding 95% across all development and consulting engagements.",
    "Maintain zero critical vulnerabilities in all production releases through rigorous automated testing and security audits.",
    "Ensure continuous 24/7 SLA compliance for application maintenance and infrastructure support contracts.",
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

      <main className="min-h-screen bg-lightBg">
        {/* ---------- SECTION: Banner ---------- */}
        <PageBanner
          badge="Who We Are"
          title="About Leanquality Solutions"
          subtitle="Pioneering cutting-edge IT consulting, bespoke software engineering, and digital growth from Pune, India."
        />

        {/* ---------- SECTION: Intro (Best Software Company In Pune) ---------- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Our Background
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-heading leading-tight">
                  Best Software Company In Pune
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full" />
                <p className="text-sm sm:text-base text-bodyText leading-relaxed">
                  Leanquality Solutions India Pvt. Ltd (LQSIPL) stands as a prominent software development and technology consulting firm in Pune, Maharashtra. Built upon principles of engineering precision, agile responsiveness, and deep domain expertise, we help businesses navigate the complexities of digital evolution.
                </p>
                <p className="text-sm sm:text-base text-bodyText leading-relaxed">
                  Our comprehensive capabilities span custom web applications, cross-platform mobile app development, scalable cloud architectures, DevOps automation, Artificial Intelligence, and Robotic Process Automation. We serve emerging startups as well as established global enterprises, providing the technology infrastructure necessary to compete and win.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 space-y-4">
                  <h3 className="font-heading font-bold text-xl text-heading">
                    Quick Facts
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-bodyText">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <strong>Headquarters:</strong> Baner, Pune, Maharashtra
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <strong>Legal Entity:</strong> Leanquality Solutions India Pvt. Ltd
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <strong>Core Specialization:</strong> Cloud, AI/ML, Full-Stack & RPA
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <strong>Delivery Framework:</strong> Agile, DevOps, CI/CD Automated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Vision & Solutions ---------- */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card with Cleaned Copy */}
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-heading mb-4">
                    Our Vision
                  </h3>
                  <p className="text-sm sm:text-base text-bodyText leading-relaxed">
                    At Lean Quality Solutions, our vision is to build a lasting technology enterprise by consistently delivering high-quality, reliable, and innovative digital solutions. We strive to be the preferred technology partner for enterprises worldwide, enabling them to achieve digital transformation and sustained growth.
                  </p>
                </div>
              </div>

              {/* Revolutionizing Software Solutions */}
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-heading mb-4">
                    Revolutionizing Software Solutions
                  </h3>
                  <p className="text-sm sm:text-base text-bodyText leading-relaxed">
                    We believe in breaking down traditional software silos through rapid iteration, automation-first development, and clean architecture. By uniting modern microservices, automated CI/CD pipelines, and proactive quality engineering, we empower enterprises to deploy updates faster and operate with complete resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Quality Policy & Objectives ---------- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Quality Policy */}
              <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-heading">
                    Quality Policy
                  </h3>
                </div>
                <ul className="space-y-4">
                  {qualityPolicies.map((policy, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-bodyText leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{policy}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quality Objectives */}
              <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold text-navy flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-heading">
                    Quality Objectives
                  </h3>
                </div>
                <ul className="space-y-4">
                  {qualityObjectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-bodyText leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Corporate Values ---------- */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Guiding Ideals"
              title="Corporate Values"
              description="Ten fundamental pillars that define our professional code of conduct, relationships, and engineering standards."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {corporateValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-heading mb-2">
                        {val.title}
                      </h3>
                      <p className="text-xs text-bodyText leading-relaxed">
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
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-navy hover:text-gold transition-colors shadow-md"
              >
                <span>Partner With Leanquality Solutions</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
