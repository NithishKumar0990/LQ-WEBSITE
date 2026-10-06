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

  return (
    <>
      <SEO
        title="Career - Leanqualities Solutions"
        description="Join our dedicated software engineering and IT consulting team in Pune. Explore open positions for Full Stack Developer and AWS Solutions Architect at Leanquality Solutions India Pvt. Ltd."
      />

      <main className="min-h-screen bg-lightBg">
        {/* ---------- SECTION: Banner ---------- */}
        <PageBanner
          badge="Work With Us"
          title="Become a part of our dedicated team."
          subtitle="Welcome to Lean Quality Solutions, where our work culture prioritizes and maintains a harmonious balance between professional and personal life."
        />

        {/* ---------- SECTION: Culture Highlights ---------- */}
        <section className="py-12 bg-white border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-heading text-sm">
                    Collaborative Culture
                  </h4>
                  <p className="text-xs text-bodyText">
                    Work alongside passionate peers and domain experts
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-heading text-sm">
                    Continuous Learning
                  </h4>
                  <p className="text-xs text-bodyText">
                    Regular upskilling in AI, Cloud, and modern stacks
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-heading text-sm">
                    Work-Life Balance
                  </h4>
                  <p className="text-xs text-bodyText">
                    Respectful schedules that foster well-being
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-heading text-sm">
                    Equal Opportunity
                  </h4>
                  <p className="text-xs text-bodyText">
                    Merit-driven career trajectories and recognition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Job Openings ---------- */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-heading">
                Current Openings
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto my-3 rounded-full" />
              <p className="text-sm text-bodyText">
                Discover opportunities to innovate, architect scalable software, and engineer next-generation digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobsData.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Job Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-wider">
                        {job.department}
                      </span>
                      <span className="text-xs font-medium px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200/60 rounded-full flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-heading mb-4">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-bodyText mb-6 pb-6 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-primary" />
                        <span>Exp: {job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span>Immediate / 30 Days</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h4 className="font-heading text-sm font-bold text-heading uppercase tracking-wide mb-2">
                        Job Description
                      </h4>
                      <p className="text-sm text-bodyText leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="font-heading text-sm font-bold text-heading uppercase tracking-wide mb-3">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-bodyText leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h4 className="font-heading text-sm font-bold text-heading uppercase tracking-wide mb-3">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-bodyText leading-relaxed"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-xs text-bodyText/80 italic mb-8 border-l-2 border-primary/30 pl-3">
                      {job.closingText}
                    </p>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-medium hover:bg-navy hover:text-gold transition-colors duration-200 shadow-md shadow-primary/20"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            {/* ---------- SECTION: General Application Notice ---------- */}
            <div className="mt-16 bg-navy text-white rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 text-yellowLight">
                  Don&apos;t see your specific role?
                </h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  We are constantly growing our engineering, AI, DevOps, and marketing teams. Send your resume directly to our talent acquisition team and we will keep you in mind for future roles.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-navy font-semibold text-sm hover:bg-yellowLight transition-colors"
                  >
                    Email Resume: {COMPANY_EMAIL}
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
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
