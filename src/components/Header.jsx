import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import {
  COMPANY_PHONE,
  COMPANY_PHONE_TEL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
} from "../config";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDmOpen, setMobileDmOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDmOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dmSubmenu = [
    { name: "Digital Strategy", href: "/digital-marketing/digital-strategy" },
    { name: "Digital Transformation", href: "/digital-marketing/digital-transformation" },
    { name: "E-commerce Development", href: "/services/e-commerce-development" },
    { name: "Media Analytics", href: "/digital-marketing/media-analytics" },
    { name: "Content Marketing", href: "/digital-marketing/content-marketing" },
  ];

  const servicesSubmenu = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Cloud Application Development", href: "/services/cloud-application-development" },
    { name: "DevOps", href: "/services/devops" },
    { name: "AI / ML Development", href: "/services/ai-ml-development" },
    { name: "Application Support", href: "/services/application-support" },
    { name: "Enterprise Software Development", href: "/services/enterprise-software-development" },
    { name: "IoT (Internet of Things)", href: "/services/iot" },
    { name: "Blockchain Development", href: "/services/blockchain-development" },
    { name: "E-commerce Development", href: "/services/e-commerce-development" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top bar (dark navy) */}
      <div className="bg-navy text-white text-xs sm:text-sm py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_PHONE_TEL}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{COMPANY_PHONE}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1"
            >
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <nav
        aria-label="Main Navigation"
        className={`bg-white transition-all duration-300 ${
          isScrolled ? "shadow-md py-3" : "py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              LQ
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg sm:text-xl text-primary tracking-tight">
                Leanqualities Solutions
              </span>
              <span className="text-[10px] text-bodyText uppercase tracking-wider font-semibold">
                India Pvt. Ltd (LQSIPL)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-8 ${
                  isActive ? "text-heading font-bold underline decoration-gold decoration-2 underline-offset-8" : "text-heading"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-8 ${
                  isActive ? "text-heading font-bold underline decoration-gold decoration-2 underline-offset-8" : "text-heading"
                }`
              }
            >
              About
            </NavLink>

            {/* Digital Marketing Dropdown */}
            <div className="relative group">
              <NavLink
                to="/digital-marketing"
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-8 group-hover:text-primary ${
                    isActive ? "text-heading font-bold underline decoration-gold decoration-2 underline-offset-8" : "text-heading"
                  }`
                }
              >
                <span>Digital Marketing</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-mutedText group-hover:text-primary" />
              </NavLink>

              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-cardBorder py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="px-4 py-2 border-b border-cardBorder mb-1">
                  <Link
                    to="/digital-marketing"
                    className="text-xs font-bold text-primary uppercase tracking-wider hover:underline hover:decoration-gold"
                  >
                    All Marketing Services →
                  </Link>
                </div>
                {dmSubmenu.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-2 text-xs font-medium text-heading hover:bg-warmSurface hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-8 group-hover:text-primary ${
                    isActive ? "text-heading font-bold underline decoration-gold decoration-2 underline-offset-8" : "text-heading"
                  }`
                }
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-mutedText group-hover:text-primary" />
              </NavLink>

              <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-cardBorder py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="px-4 py-2 border-b border-cardBorder mb-1">
                  <Link
                    to="/services"
                    className="text-xs font-bold text-primary uppercase tracking-wider hover:underline hover:decoration-gold"
                  >
                    All Technology Services →
                  </Link>
                </div>
                {servicesSubmenu.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-2 text-xs font-medium text-heading hover:bg-warmSurface hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-8 ${
                  isActive ? "text-heading font-bold underline decoration-gold decoration-2 underline-offset-8" : "text-heading"
                }`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/career"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-8 ${
                  isActive ? "text-heading font-bold underline decoration-gold decoration-2 underline-offset-8" : "text-heading"
                }`
              }
            >
              Career
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-8 ${
                  isActive ? "text-heading font-bold underline decoration-gold decoration-2 underline-offset-8" : "text-heading"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-navy hover:text-gold transition-colors duration-200 shadow-md shadow-primary/20"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-heading hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[105px] z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-full max-w-sm ml-auto h-full bg-white shadow-2xl overflow-y-auto p-6 space-y-4">
            <nav className="flex flex-col space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive ? "bg-primary text-white" : "text-heading hover:bg-slate-50"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive ? "bg-primary text-white" : "text-heading hover:bg-slate-50"
                  }`
                }
              >
                About
              </NavLink>

              {/* Mobile Digital Marketing Expandable */}
              <div>
                <button
                  onClick={() => setMobileDmOpen(!mobileDmOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-heading hover:bg-slate-50"
                >
                  <span>Digital Marketing</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileDmOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDmOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-lg mt-1">
                    <Link
                      to="/digital-marketing"
                      className="block px-3 py-2 text-xs font-semibold text-primary"
                    >
                      Overview Page →
                    </Link>
                    {dmSubmenu.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block px-3 py-2 text-xs text-bodyText hover:text-primary"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Services Expandable */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-heading hover:bg-slate-50"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-lg mt-1">
                    <Link
                      to="/services"
                      className="block px-3 py-2 text-xs font-semibold text-primary"
                    >
                      Overview Page →
                    </Link>
                    {servicesSubmenu.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block px-3 py-2 text-xs text-bodyText hover:text-primary"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive ? "bg-primary text-white" : "text-heading hover:bg-slate-50"
                  }`
                }
              >
                Events
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive ? "bg-primary text-white" : "text-heading hover:bg-slate-50"
                  }`
                }
              >
                Blog
              </NavLink>

              <NavLink
                to="/career"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive ? "bg-primary text-white" : "text-heading hover:bg-slate-50"
                  }`
                }
              >
                Career
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive ? "bg-primary text-white" : "text-heading hover:bg-slate-50"
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            <div className="pt-4 border-t border-slate-100">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
