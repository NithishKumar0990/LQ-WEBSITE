import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import {
  COMPANY_PHONE,
  COMPANY_PHONE_TEL,
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
  GOOGLE_MAPS_EMBED_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
} from "../config";

/**
 * SECTION 9 — CINEMATIC FOOTER (global Footer.jsx upgrade, DAQ exact)
 * - min-h-screen, flex col justify-between, border-t hairline, bg #000 with faint blueprint grid
 * - Top climax block: giant Slab headline "Elevate Your Initiatives with Pune Top Information Technology Firm"
 *   + huge interactive arrow link -> /contact with hover slide animation
 * - 4 columns: About LQSIPL, Quick Links, Services, Office Address + map embed (grayscale hover color)
 * - Bottom bar: Copyright + mono coordinate line "18.5639° N, 73.7746° E — Baner, Pune" + Social links
 */
export default function Footer() {
  return (
    <footer className="relative min-h-screen flex flex-col justify-between bg-black text-white pt-20 sm:pt-28 pb-10 border-t border-white/10 overflow-hidden cad-grid">
      {/* Blueprint grid backing */}
      <div className="absolute inset-0 cad-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-between flex-1">
        {/* Top Climax Section (DAQ Exact) */}
        <div className="pb-16 sm:pb-24 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 font-mono text-[10px] uppercase tracking-[0.25em] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                INITIATE ENGAGEMENT
              </div>
              <h2 className="text-footer-headline font-serif text-white">
                Elevate Your Initiatives with Pune Top Information Technology Firm
              </h2>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 font-mono text-base sm:text-xl font-bold text-white hover:text-mono-300 uppercase tracking-widest transition-colors py-2"
              >
                <span>Discuss Your Project</span>
                <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/30 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg group-hover:shadow-whiteGlow">
                  <ArrowUpRight className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>

              {/* Geographic Coordinates Telemetry */}
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 select-none">
                18.5639° N, 73.7746° E — Baner, Pune
              </span>
            </div>
          </div>
        </div>

        {/* 4-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/10">
          {/* Col 1: About LQSIPL */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black font-bold text-xl shadow-md font-mono">
                LQ
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-white tracking-tight">
                  Leanqualities Solutions
                </span>
                <span className="font-mono text-[9px] text-white/60 uppercase tracking-widest font-semibold">
                  India Pvt. Ltd (LQSIPL)
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/72 leading-relaxed">
              Our IT solution company proudly stands out as the best service provider in industry.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white/70 shrink-0" />
                <a href={`tel:${COMPANY_PHONE_TEL}`} className="hover:text-white transition-colors">
                  {COMPANY_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white/70 shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-mono font-semibold text-xs text-white/80 uppercase tracking-[0.25em] mb-5 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 font-mono">
              <li>
                <Link to="/about" className="hover:text-white transition-colors block">
                  01 // About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-colors block">
                  02 // Events & Gallery
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-white transition-colors block">
                  03 // Career
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors block">
                  04 // Blog & Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors block">
                  05 // Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-mono font-semibold text-xs text-white/80 uppercase tracking-[0.25em] mb-5 border-b border-white/10 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 font-mono">
              <li>
                <Link to="/services/web-development" className="hover:text-white transition-colors block">
                  01 // Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="hover:text-white transition-colors block">
                  02 // Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-application-development" className="hover:text-white transition-colors block">
                  03 // Cloud Applications
                </Link>
              </li>
              <li>
                <Link to="/services/devops" className="hover:text-white transition-colors block">
                  04 // DevOps Services
                </Link>
              </li>
              <li>
                <Link to="/digital-marketing" className="hover:text-white transition-colors block">
                  05 // Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-xs font-mono text-white/90 hover:underline pt-1 block">
                  View All 10 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach Us & Map */}
          <div>
            <h4 className="font-mono font-semibold text-xs text-white/80 uppercase tracking-[0.25em] mb-5 border-b border-white/10 pb-2">
              Office Address
            </h4>
            <div className="flex items-start gap-2 text-xs text-white/72 mb-4 leading-relaxed font-mono">
              <MapPin className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
              <p>{COMPANY_ADDRESS}</p>
            </div>
            <div className="w-full h-36 rounded-xl overflow-hidden border border-white/15 shadow-inner">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lean Quality Solutions Office Location"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar (DAQ Exact) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-white/60 gap-4">
          <p>© Leanquality Solutions India Pvt.Ltd | All Rights Reserved</p>

          <span className="hidden md:inline font-mono text-[11px] text-white/50 uppercase tracking-[0.25em]">
            18.5639° N, 73.7746° E — Baner, Pune
          </span>

          <div className="flex items-center space-x-6 text-xs uppercase tracking-wider">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
