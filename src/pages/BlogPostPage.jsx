// ═══════════════════════════════════════
// PAGE: BlogPost (/blog/:slug) — Blog Article Page
// SECTIONS: Top Breadcrumb & Hero, Coming Soon Notice, Topic Overview, Connect CTA, Related Articles
// ═══════════════════════════════════════

import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import { blogPostsData } from "../data/blogPosts";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Sparkles,
  Send,
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

      <main className="min-h-screen bg-lightBg">
        {/* ---------- SECTION: Top Breadcrumb & Hero ---------- */}
        <section className="bg-gradient-to-br from-navy via-[#4D3017] to-primary text-white py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F4C542_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gold hover:text-white transition-colors mb-6 uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all articles</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-yellowLight border border-white/10">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                {post.date}
              </span>
              <span className="text-xs text-slate-300">•</span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-yellowLight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* ---------- SECTION: Article Body & Notice ---------- */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-md">
              {/* ---------- SECTION: Coming Soon Notice ---------- */}
              <div className="border-b border-slate-100 pb-8 mb-8">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-amber-900 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-200/60 flex items-center justify-center shrink-0 text-amber-800">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-amber-950">
                      Full article coming soon
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-900 mt-1 leading-relaxed">
                      Our engineering editorial team is actively completing the full case study and code samples for &ldquo;{post.title}&rdquo;. Check back soon or contact us directly if you have specific technical questions about this domain.
                    </p>
                  </div>
                </div>
              </div>

              {/* ---------- SECTION: Topic Overview ---------- */}
              <div className="space-y-6">
                <h2 className="font-heading text-xl font-bold text-heading">
                  About this Topic
                </h2>
                <p className="text-sm text-bodyText leading-relaxed">
                  At Leanquality Solutions India Pvt. Ltd (LQSIPL), our technology consulting and software engineering practices continually analyze enterprise trends in cloud infrastructure, artificial intelligence, robotics process automation, and full-stack software systems.
                </p>
                <p className="text-sm text-bodyText leading-relaxed">
                  This publication explores practical methodologies for modern enterprises seeking to achieve digital agility, cost efficiency, and resilient architecture.
                </p>

                <div className="p-6 rounded-xl bg-slate-50 border border-slate-100 mt-6">
                  <h3 className="font-heading text-sm font-bold text-heading uppercase tracking-wider mb-3">
                    Key Focus Areas Addressed
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-bodyText">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Architectural best practices and operational considerations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Industry benchmarks and real-world implementation roadmaps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Cost optimization, scalability, and security governance</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ---------- SECTION: Connect CTA ---------- */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-heading text-sm font-bold text-heading">
                    Have questions about this topic?
                  </p>
                  <p className="text-xs text-bodyText">
                    Speak directly with our senior technology consultants in Pune.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-navy hover:text-gold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Contact Engineering</span>
                </Link>
              </div>
            </div>

            {/* ---------- SECTION: Related Articles ---------- */}
            {relatedPosts.length > 0 && (
              <div className="mt-14">
                <h3 className="font-heading text-xl font-bold text-heading mb-6">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/blog/${related.slug}`}
                      className="group bg-white p-6 rounded-xl border border-slate-200/80 hover:shadow-lg transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                          {related.category}
                        </span>
                        <h4 className="font-heading font-bold text-sm text-heading group-hover:text-primary transition-colors mt-2 line-clamp-2">
                          {related.title}
                        </h4>
                      </div>
                      <span className="text-xs text-primary font-semibold mt-4 group-hover:translate-x-1 transition-transform inline-block">
                        Read more →
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
