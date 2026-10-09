// ═══════════════════════════════════════
// PAGE: BlogPost (/blog/:slug) — Blog Article Page (Phase 1 DAQ Adapted)
// SECTIONS: Top Breadcrumb & Hero (P01+P07), Coming Soon Notice, Topic Overview (P03), Connect CTA, Related Articles
// ═══════════════════════════════════════

import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import InkReveal from "../components/daq/InkReveal";
import ChapterAnchor from "../components/daq/ChapterAnchor";
import TechPill from "../components/daq/TechPill";
import { blogPostsData } from "../data/blogPosts";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Sparkles,
  Send,
  ArrowRight,
} from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPostsData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <SEO
        title={`${post.title} - Leanqualities Solutions`}
        description={post.excerpt}
      />

      <main className="min-h-screen bg-mono-50">
        {/* ---------- SECTION: Top Breadcrumb & Hero (P01 + P07) ---------- */}
        <section className="bg-mono-950 text-white py-16 lg:py-24 relative overflow-hidden cad-grid">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all articles</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <TechPill dark={true}>{post.category}</TechPill>
              <span className="font-mono text-xs text-white/70 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-white/70" />
                {post.date}
              </span>
              <span className="text-white/30">•</span>
              <span className="font-mono text-xs text-white/70 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-white/70" />
                {post.readTime}
              </span>
            </div>

            <InkReveal
              text={post.title}
              as="h1"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6"
            />

            <p className="text-hero-lede font-serif text-white/75">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* ---------- SECTION: Article Body & Notice ---------- */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 sm:p-12 border border-mono-200 shadow-sm">
              {/* ---------- SECTION: Coming Soon Notice ---------- */}
              <div className="border-b border-mono-100 pb-8 mb-8">
                <div className="bg-mono-50 border border-mono-200 rounded-xl p-6 text-mono-900 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-mono-200 flex items-center justify-center shrink-0 text-mono-900">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-black">
                      Full article coming soon
                    </h3>
                    <p className="text-xs sm:text-sm text-mono-600 mt-1 leading-relaxed">
                      Our engineering editorial team is actively completing the full case study and code samples for &ldquo;{post.title}&rdquo;. Check back soon or contact us directly if you have specific technical questions about this domain.
                    </p>
                  </div>
                </div>
              </div>

              {/* ---------- SECTION: Topic Overview (P03) ---------- */}
              <div className="space-y-6">
                <ChapterAnchor chapter="01" title="Topic Overview" light={false} className="mb-2" />
                <h2 className="font-heading text-xl font-bold text-black">
                  About this Topic
                </h2>
                <div className="w-12 h-0.5 bg-mono-300 rounded-full mb-4" />
                <p className="text-article-body font-serif text-mono-600">
                  At Leanquality Solutions India Pvt. Ltd (LQSIPL), our technology consulting and software engineering practices continually analyze enterprise trends in cloud infrastructure, artificial intelligence, robotics process automation, and full-stack software systems.
                </p>
                <p className="text-article-body font-serif text-mono-600">
                  This publication explores practical methodologies for modern enterprises seeking to achieve digital agility, cost efficiency, and resilient architecture.
                </p>

                <div className="p-6 rounded-xl bg-mono-50 border border-mono-200 mt-6">
                  <h3 className="font-mono text-xs font-bold text-mono-600 uppercase tracking-[0.2em] mb-4">
                    Key Focus Areas Addressed
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-mono-600">
                    <li className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-mono-900 shrink-0" />
                      <span>Architectural best practices and operational considerations</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-mono-900 shrink-0" />
                      <span>Industry benchmarks and real-world implementation roadmaps</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-mono-900 shrink-0" />
                      <span>Cost optimization, scalability, and security governance</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ---------- SECTION: Connect CTA ---------- */}
              <div className="mt-12 pt-8 border-t border-mono-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-heading text-sm font-bold text-black">
                    Have questions about this topic?
                  </p>
                  <p className="text-xs text-mono-600">
                    Speak directly with our senior technology consultants in Pune.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-mono-800 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Contact Engineering</span>
                </Link>
              </div>
            </div>

            {/* ---------- SECTION: Related Articles ---------- */}
            {relatedPosts.length > 0 && (
              <div className="mt-14">
                <ChapterAnchor chapter="02" title="Related Reading" light={false} className="mb-4" />
                <h3 className="font-heading text-xl font-bold text-black mb-6">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/blog/${related.slug}`}
                      className="group bg-white p-6 rounded-2xl border border-mono-200 hover:border-mono-900 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <TechPill dark={false}>{related.category}</TechPill>
                        <h4 className="font-heading font-bold text-sm text-black group-hover:text-mono-700 transition-colors mt-3 line-clamp-2">
                          {related.title}
                        </h4>
                      </div>
                      <span className="font-mono text-xs text-black font-semibold mt-4 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        <span>Read more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
