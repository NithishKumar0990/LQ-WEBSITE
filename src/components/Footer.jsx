import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  COMPANY_PHONE,
  COMPANY_PHONE_TEL,
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
  GOOGLE_MAPS_EMBED_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
} from "../config";

export default function Footer() {
  return (
    <footer className="bg-navy text-warmSurface pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: About LQSIPL */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-light to-gold flex items-center justify-center text-white font-bold text-xl shadow-md">
                LQ
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-white tracking-tight">
                  Leanqualities Solutions
                </span>
                <span className="text-[10px] text-warmSurface/80 uppercase tracking-wider font-semibold">
                  India Pvt. Ltd (LQSIPL)
                </span>
              </div>
            </Link>

            <p className="text-sm text-warmSurface/90 leading-relaxed">
              Our IT solution company proudly stands out as the best service provider in industry.
            </p>

            <div className="pt-2 space-y-2 text-xs text-warmSurface">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href={`tel:${COMPANY_PHONE_TEL}`} className="hover:text-gold transition-colors">
                  {COMPANY_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-gold transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-yellowLight mb-5 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-warmSurface">
              <li>
                <Link to="/about" className="hover:text-gold transition-colors block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-gold transition-colors block">
                  Events & Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold transition-colors block">
                  Blog Insights
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-gold transition-colors block">
                  Career Openings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors block">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-yellowLight mb-5 border-b border-white/10 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-warmSurface">
              <li>
                <Link to="/services/web-development" className="hover:text-gold transition-colors block">
                  Web Application
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="hover:text-gold transition-colors block">
                  Mobile Application
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-application-development" className="hover:text-gold transition-colors block">
                  Cloud Application
                </Link>
              </li>
              <li>
                <Link to="/services/devops" className="hover:text-gold transition-colors block">
                  DevOps
                </Link>
              </li>
              <li>
                <Link to="/services/blockchain-development" className="hover:text-gold transition-colors block">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link to="/services/iot" className="hover:text-gold transition-colors block">
                  IoT
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Office Address & Google Map */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-yellowLight mb-5 border-b border-white/10 pb-2">
              Office Address
            </h4>
            <div className="flex items-start gap-2 text-xs text-warmSurface mb-4 leading-relaxed">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <p>{COMPANY_ADDRESS}</p>
            </div>
            <div className="w-full h-36 rounded-lg overflow-hidden border border-white/20 shadow-inner">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lean Quality Solutions Office Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-warmSurface/80 gap-4">
          <p>© Leanquality Solutions India Pvt.Ltd | All Rights Reserved</p>
          <div className="flex items-center space-x-6 text-sm">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
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
