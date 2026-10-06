// ═══════════════════════════════════════
// PAGE: Blog (/blog) — Technology & Innovation Blog
// SECTIONS: Banner, All Articles Grid, Consultation Banner
// ═══════════════════════════════════════

import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import CTABanner from "../components/CTABanner";
import { blogPostsData } from "../data/blogPosts";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog - Leanqualities Solutions"
        description="Explore technology insights, cloud computing architectures, AI/ML advancements, RPA automation, and IT consulting perspectives from the experts at Leanquality Solutions India Pvt. Ltd."
      />

      <main className="min-h-screen bg-lightBg">
        {/* ---------- SECTION: Banner ---------- */}
        <PageBanner
          badge="Insights & Perspectives"
          title="Technology & Innovation Blog"
          subtitle="Thought leadership, architectural deep dives, and practical engineering guides from our consulting team in Pune."
        />

        {/* ---------- SECTION: All Articles Grid ---------- */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Latest Publications
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-heading mt-1">
                  All Articles ({blogPostsData.length})
                </h2>
              </div>
              <p className="text-xs text-bodyText max-w-sm">
                In-depth articles covering cloud managed services, AI development, robotics process automation, and data science.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPostsData.map((post, idx) => (
                <article
                  key={post.slug}
                  className={`bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                    idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="p-6 sm:p-8">
                    {/* Metadata Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-bodyText">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-heading font-bold text-heading group-hover:text-primary transition-colors leading-snug mb-3 ${
                        idx === 0 ? "text-xl sm:text-2xl" : "text-lg"
                      }`}
                    >
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-bodyText leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer link */}
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-navy group-hover:translate-x-1 transition-all"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* ---------- SECTION: Consultation Banner ---------- */}
            <CTABanner
              title="Need enterprise IT consulting or development?"
              description="Our technology specialists partner with growing companies and global organizations to modernize software architectures and streamline operations."
              buttonText="Schedule an Engineering Consultation"
              buttonLink="/contact"
            />
          </div>
        </section>
      </main>
    </>
  );
}
