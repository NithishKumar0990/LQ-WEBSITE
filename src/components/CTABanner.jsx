import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTABanner({
  title = "Ready to build with Leanquality Solutions?",
  description = "Reach out today to discuss your technical architecture, timeline, and delivery goals with our engineering experts in Pune.",
  buttonText = "Start Your Conversation",
  buttonLink = "/contact",
}) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-mono-950 border border-white/10 rounded-2xl p-8 sm:p-12 text-white text-center shadow-xl relative overflow-hidden cad-grid">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 text-white">
              {title}
            </h3>
            <p className="text-sm text-white/75 leading-relaxed mb-6">
              {description}
            </p>
            <Link
              to={buttonLink}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-[0.2em] hover:-translate-y-0.5 hover:shadow-whiteGlow transition-all"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
