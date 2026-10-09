// ═══════════════════════════════════════
// PAGE: Events (/events) — Life at LQSIPL & Photo Gallery
// SECTIONS: Banner, Intro Narrative, Photo Gallery Grid, Lightbox Modal, Join Us Banner
// ═══════════════════════════════════════

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import Lightbox from "../components/Lightbox";
import ChapterAnchor from "../components/daq/ChapterAnchor";
import {
  Camera,
  Sparkles,
  Calendar,
  ZoomIn,
} from "lucide-react";

export default function EventsPage() {
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Annual Awards & Excellence Ceremony",
      category: "Recognition",
      date: "January 2024",
      description:
        "Honoring outstanding engineering leadership, client delivery excellence, and team dedication at the LQSIPL Annual Gala.",
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Technology Innovation Hackathon",
      category: "Engineering",
      date: "November 2023",
      description:
        "Teams competing to build AI-driven business accelerators and automated DevOps workflows during our 48-hour innovation sprint.",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Diwali & Cultural Celebrations",
      category: "Festival",
      date: "November 2023",
      description:
        "Lighting lamps, traditional attire, and joyous festive camaraderie at our Pune headquarters.",
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Employee Milestone & Anniversaries",
      category: "Culture",
      date: "October 2023",
      description:
        "Acknowledging multi-year tenures, loyalty, and pivotal project milestones with personalized tokens of appreciation.",
      src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Cloud & AI Architecture Workshop",
      category: "Upskilling",
      date: "September 2023",
      description:
        "Hands-on architectural training session covering AWS enterprise multi-cloud setups and generative ML models.",
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Annual Team Retreat & Outdoor Day",
      category: "Team Building",
      date: "August 2023",
      description:
        "Building trust, camaraderie, and team bonding through outdoor challenges and relaxed conversations.",
      src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Enterprise Client Success Milestone",
      category: "Milestones",
      date: "June 2023",
      description:
        "Celebrating the successful global go-live of an enterprise ERP modernization program with client leaders.",
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Company Foundation Day",
      category: "Tradition",
      date: "April 2023",
      description:
        "Commemorating another year of sustained technological growth, client satisfaction, and corporate excellence.",
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      title: "Women in Tech Leadership Summit",
      category: "Inclusivity",
      date: "March 2023",
      description:
        "Highlighting trailblazing women in technology who shape software engineering and enterprise consulting at LQSIPL.",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      title: "Quarterly Town Hall & Product Demo",
      category: "Town Hall",
      date: "February 2023",
      description:
        "Open forum leadership address, transparent company financial reviews, and live demonstrations of new internal tools.",
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const openLightbox = (index) => {
    setActiveItemIndex(index);
  };

  const closeLightbox = () => {
    setActiveItemIndex(null);
  };

  const prevItem = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) =>
      prev > 0 ? prev - 1 : galleryItems.length - 1
    );
  };

  const nextItem = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) =>
      prev < galleryItems.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <>
      <SEO
        title="Events - Leanqualities Solutions"
        description="Celebrating milestones, achievements, and corporate joy at Leanquality Solutions India Pvt. Ltd. Browse photo moments from our team gatherings and ceremonies in Pune."
      />

      <main className="min-h-screen bg-mono-50">
        {/* ---------- SECTION: Banner ---------- */}
        <PageBanner
          badge="Life at LQSIPL"
          title="Capturing Corporate Joy One Moment at a Time"
          subtitle="Celebrating the achievements and happy events of our employees is a cherished tradition at our company."
        />

        {/* ---------- SECTION: Intro Narrative ---------- */}
        <section className="py-16 bg-white border-b border-mono-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ChapterAnchor chapter="01" title="Company Narrative" dark={false} className="mb-6 justify-center" />
            <div className="w-12 h-12 rounded-xl bg-mono-100 text-black flex items-center justify-center mx-auto mb-6 border border-mono-200">
              <Camera className="w-6 h-6" />
            </div>
            <p className="text-sm sm:text-base text-mono-600 leading-relaxed mb-4">
              Celebrating the achievements and happy events of our employees is a cherished tradition at our company. We take immense pride in acknowledging the remarkable milestones and accomplishments of our team members. Whether it&apos;s a work anniversary, a personal achievement, or a professional success, we believe in the power of recognition.
            </p>
            <p className="text-sm sm:text-base text-mono-600 leading-relaxed">
              These moments not only highlight the dedication and hard work of our employees but also foster a sense of belonging and camaraderie within our organization. We firmly believe that our people are our most valuable asset, and their joyous occasions are a cause for celebration that brings our entire company closer together.
            </p>
          </div>
        </section>

        {/* ---------- SECTION: Photo Gallery Grid ---------- */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ChapterAnchor chapter="02" title="Photo Archive" dark={false} className="mb-8" />
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-black">
                  Moments & Milestones
                </h2>
                <div className="w-16 h-0.5 bg-mono-300 mt-2 rounded-full" />
              </div>
              <p className="text-xs text-mono-500 max-w-sm font-mono uppercase tracking-wider">
                Click photo for full-screen preview with narrative captions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => {
                const monoIndex = String(item.id).padStart(3, "0");
                return (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className="group relative bg-white rounded-2xl overflow-hidden border border-mono-200 shadow-sm hover:shadow-md hover:border-mono-400 transition-all duration-300 cursor-pointer flex flex-col"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-mono-100">
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="p-3 rounded-full bg-white/90 text-black shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <ZoomIn className="w-5 h-5" />
                        </span>
                      </div>
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/80 text-white backdrop-blur-sm border border-white/10">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* DAQ mono caption line: "001 — Title" */}
                        <div className="flex items-center justify-between text-[11px] font-mono text-mono-500 mb-2">
                          <span className="text-black font-semibold">{monoIndex} — {item.category}</span>
                          <span>{item.date}</span>
                        </div>
                        <h3 className="font-heading font-bold text-black text-sm line-clamp-1 group-hover:text-mono-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-mono-600 line-clamp-2 mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ---------- SECTION: Join Us Banner ---------- */}
            <div className="mt-16 bg-mono-950 text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden cad-grid border border-white/10">
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-4 text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 text-white">
                  Be a part of our next milestone!
                </h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed">
                  Join our supportive engineering and marketing culture in Pune. We are always welcoming passionate individuals who believe in quality and excellence.
                </p>
                <Link
                  to="/career"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-[0.2em] font-bold hover:shadow-whiteGlow transition-all"
                >
                  Explore Open Careers
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Lightbox Modal ---------- */}
        <Lightbox
          items={galleryItems}
          currentIndex={activeItemIndex}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      </main>
    </>
  );
}
