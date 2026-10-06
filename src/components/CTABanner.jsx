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
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 sm:p-12 text-white text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 text-yellowLight">
              {title}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed mb-6">
              {description}
            </p>
            <Link
              to={buttonLink}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-navy font-semibold text-sm hover:bg-yellowLight transition-colors shadow-lg"
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
