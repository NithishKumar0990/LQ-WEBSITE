// ═══════════════════════════════════════
// PAGE: Career (/career) — Career Opportunities
// SECTIONS: Banner, Culture Highlights, Job Openings, General Application Notice
// ═══════════════════════════════════════

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import JobModal from "../components/job/JobModal";
import { jobsData } from "../data/jobs";
import { COMPANY_EMAIL } from "../config";
import ChapterAnchor from "../components/daq/ChapterAnchor";
import ReadingRows from "../components/daq/ReadingRows";
import TechPill from "../components/daq/TechPill";
import {
  Users,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  MapPin,
  Clock,
  Award,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  const jobRowItems = jobsData.map((job, idx) => ({
    id: job.id,
    index: String(idx + 1).padStart(2, "0"),
    title: job.title,
    subtitle: `${job.department} • ${job.type} • ${job.location} • Exp: ${job.experience}`,
    tags: [job.department, job.experience],
    details: (
      <div className="space-y-6 pt-2">
        <div>
          <h4 className="font-mono text-xs font-bold uppercase tracking-widest mb-2 text-mono-600">
            Job Description
          </h4>
          <p className="text-sm text-mono-600 leading-relaxed">
            {job.description}
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs font-bold uppercase tracking-widest mb-3 text-mono-600">
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {job.responsibilities.map((resp, rIdx) => (
              <li
                key={rIdx}
                className="flex items-start gap-2.5 text-xs text-mono-600 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-mono-900 shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs font-bold uppercase tracking-widest mb-3 text-mono-600">
            Requirements
          </h4>
          <ul className="space-y-2">
            {job.requirements.map((req, reqIdx) => (
              <li
                key={reqIdx}
                className="flex items-start gap-2.5 text-xs text-mono-600 leading-relaxed"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-mono-900 shrink-0 mt-1.5" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-mono-600/80 italic border-l-2 border-mono-300 pl-3">
          {job.closingText}
        </p>
      </div>
    ),
    action: (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleApplyClick(job);
        }}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-mono-800 transition-all"
      >
        <span>Apply For Position</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    ),
  }));

  return (
    <>
      <SEO
        title="Career - Leanqualities Solutions"
        description="Join our dedicated software engineering and IT consulting team in Pune. Explore open positions for Full Stack Developer and AWS Solutions Architect at Leanquality Solutions India Pvt. Ltd."
      />

      <main className="min-h-screen bg-mono-50">
        {/* ---------- SECTION: Banner ---------- */}
        <PageBanner
          badge="Work With Us"
          title="Become a part of our dedicated team."
          subtitle="Welcome to Lean Quality Solutions, where our work culture prioritizes and maintains a harmonious balance between professional and personal life."
        />

        {/* ---------- SECTION: Culture Highlights ---------- */}
        <section className="py-16 bg-white border-b border-mono-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ChapterAnchor chapter="01" title="Culture & Values" light={false} className="mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-mono-50 border border-mono-200">
                <div className="w-12 h-12 rounded-xl bg-mono-100 flex items-center justify-center text-mono-900 shrink-0 border border-mono-200">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-black text-sm">
                    Collaborative Culture
                  </h4>
                  <p className="text-xs text-mono-600 mt-0.5">
                    Work alongside passionate peers and domain experts
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-mono-50 border border-mono-200">
                <div className="w-12 h-12 rounded-xl bg-mono-100 flex items-center justify-center text-mono-900 shrink-0 border border-mono-200">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-black text-sm">
                    Continuous Learning
                  </h4>
                  <p className="text-xs text-mono-600 mt-0.5">
                    Regular upskilling in AI, Cloud, and modern stacks
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-mono-50 border border-mono-200">
                <div className="w-12 h-12 rounded-xl bg-mono-100 flex items-center justify-center text-mono-900 shrink-0 border border-mono-200">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-black text-sm">
                    Work-Life Balance
                  </h4>
                  <p className="text-xs text-mono-600 mt-0.5">
                    Respectful schedules that foster well-being
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-mono-50 border border-mono-200">
                <div className="w-12 h-12 rounded-xl bg-mono-100 flex items-center justify-center text-mono-900 shrink-0 border border-mono-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-black text-sm">
                    Equal Opportunity
                  </h4>
                  <p className="text-xs text-mono-600 mt-0.5">
                    Merit-driven career trajectories and recognition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Job Openings (P06) ---------- */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ChapterAnchor chapter="02" title="Current Openings" light={false} className="mb-8" />
            <div className="max-w-2xl mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-black">
                Explore Available Engineering Positions
              </h2>
              <div className="w-12 h-0.5 bg-mono-300 my-3 rounded-full" />
              <p className="text-sm text-mono-600">
                Discover opportunities to innovate, architect scalable software, and engineer next-generation digital experiences. Click any role to review requirements and apply.
              </p>
            </div>

            {/* P06 Expandable Reading Rows for Jobs */}
            <div className="bg-white rounded-2xl border border-mono-200 shadow-sm p-4 sm:p-8">
              <ReadingRows items={jobRowItems} expandable={true} />
            </div>

            {/* ---------- SECTION: General Application Notice ---------- */}
            <div className="mt-16 bg-mono-950 text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden cad-grid border border-white/10">
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 font-mono text-[10px] uppercase tracking-[0.25em] mb-4">
                  Talent Network
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 text-white">
                  Don&apos;t see your specific role?
                </h3>
                <p className="text-sm text-white/75 mb-8 leading-relaxed">
                  We are constantly growing our engineering, AI, DevOps, and marketing teams. Send your resume directly to our talent acquisition team and we will keep you in mind for future roles.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-[0.2em] font-bold hover:shadow-whiteGlow transition-all"
                  >
                    Email Resume: {COMPANY_EMAIL}
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Job Application Modal */}
      <JobModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        job={selectedJob}
      />
    </>
  );
}
