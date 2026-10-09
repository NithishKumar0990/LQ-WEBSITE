// ═══════════════════════════════════════
// PAGE: Blog (/blog) — Technology & Innovation Blog (Phase 1 DAQ Adapted)
// SECTIONS: Banner, All Articles Reading Rows (P06), Consultation Banner
// ═══════════════════════════════════════

import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import CTABanner from "../components/CTABanner";
import ChapterAnchor from "../components/daq/ChapterAnchor";
import ReadingRows from "../components/daq/ReadingRows";
import { blogPostsData } from "../data/blogPosts";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const blogRowItems = blogPostsData.map((post, idx) => ({
    id: post.slug,
    index: String(idx + 1).padStart(2, "0"),
    title: post.title,
    subtitle: `${post.date} • ${post.readTime} • ${post.category}`,
    tags: [post.category, post.readTime],
    description: post.excerpt,
    action: (
      <Link
        to={`/blog/${post.slug}`}
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-bold text-black hover:text-mono-700 transition-colors pt-2"
      >
        <span>Read Full Article</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    ),
  }));

  return (
    <>
      <SEO
        title="Blog - Leanqualities Solutions"
        description="Explore technology insights, cloud computing architectures, AI/ML advancements, RPA automation, and IT consulting perspectives from the experts at Leanquality Solutions India Pvt. Ltd."
      />

      <main className="min-h-screen bg-mono-50">
        {/* ---------- SECTION: Banner ---------- */}
        <PageBanner
          badge="Insights & Perspectives"
          title="Technology & Innovation Blog"
          subtitle="Thought leadership, architectural deep dives, and practical engineering guides from our consulting team in Pune."
        />

        {/* ---------- SECTION: All Articles (P06 Reading Rows) ---------- */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ChapterAnchor chapter="01" title="Latest Publications" light={false} className="mb-8" />
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-black">
                  All Articles ({blogPostsData.length})
                </h2>
                <div className="w-12 h-0.5 bg-mono-300 mt-2 rounded-full" />
              </div>
              <p className="text-xs text-mono-600 max-w-sm">
                In-depth articles covering cloud managed services, AI development, robotics process automation, and data science. Click any row to expand excerpt.
              </p>
            </div>

            {/* P06 Expandable Reading Rows */}
            <div className="bg-white rounded-2xl border border-mono-200 shadow-sm p-4 sm:p-8 mb-16">
              <ReadingRows items={blogRowItems} expandable={true} />
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
