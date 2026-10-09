import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

/**
 * A. GLOBAL NAVBAR — DAQ EXACT (all pages)
 * - Fixed centered floating bar, max-w-[1240px]
 * - Unscrolled: h-24, transparent bg, no border, no radius
 * - Scrolled (>40px): h-16 frosted dark glass pill (bg-black/75 backdrop-blur-xl, border 1px rgba(255,255,255,0.10), rounded-full, px-6, shadow-2xl, 0.7s cubic-bezier(0.19,1,0.22,1))
 * - Left: SVG outline-trace logo + wordmark "Leanqualities Solutions"
 * - Dropdowns: dark frosted panels (bg-black/90 backdrop-blur, hairline border) with mono uppercase items + small mono index numbers
 * - Right: CTA pill "Get in Touch" -> /contact (white pill, black text, hover lift 1px + soft white glow shadow)
 * - Mobile: full-screen black overlay (z-[120]) with large staggered slide-in links
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDmOpen, setMobileDmOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [logoTraced, setLogoTraced] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile drawer on route change
    setMobileMenuOpen(false);
    setMobileDmOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Trigger logo trace on mount
    const timer = setTimeout(() => setLogoTraced(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const dmSubmenu = [
    { num: "01", name: "Digital Strategy", href: "/digital-marketing/digital-strategy" },
    { num: "02", name: "Digital Transformation", href: "/digital-marketing/digital-transformation" },
    { num: "03", name: "E-commerce Development", href: "/services/e-commerce-development" },
    { num: "04", name: "Media Analytics", href: "/digital-marketing/media-analytics" },
    { num: "05", name: "Content Marketing", href: "/digital-marketing/content-marketing" },
  ];

  const servicesSubmenu = [
    { num: "01", name: "Web Development", href: "/services/web-development" },
    { num: "02", name: "Mobile App Development", href: "/services/mobile-app-development" },
    { num: "03", name: "Cloud Application Development", href: "/services/cloud-application-development" },
    { num: "04", name: "DevOps", href: "/services/devops" },
    { num: "05", name: "AI / ML Development", href: "/services/ai-ml-development" },
    { num: "06", name: "Application Support", href: "/services/application-support" },
    { num: "07", name: "Enterprise Software Development", href: "/services/enterprise-software-development" },
    { num: "08", name: "IoT (Internet of Things)", href: "/services/iot" },
    { num: "09", name: "Blockchain Development", href: "/services/blockchain-development" },
    { num: "10", name: "E-commerce Development", href: "/services/e-commerce-development" },
  ];

  const isDmActive = location.pathname.startsWith("/digital-marketing");
  const isServicesActive = location.pathname.startsWith("/services");

  const navLinkClass = ({ isActive }) =>
    `relative font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 py-1 flex items-center gap-1.5 ${
      isActive
        ? "text-[#393E46] font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-[#393E46]"
        : "text-[#929AAB] hover:text-[#393E46]"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ease bg-[#F7F7F7] ${
        isScrolled
          ? "border-b border-[#393E46]/20 shadow-[0_2px_10px_rgba(57,62,70,0.06)]"
          : "border-b border-[#393E46]/12"
      }`}
    >
      <nav
        aria-label="Global Navigation"
        className={`w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 sm:px-10 transition-all duration-300 ease ${
          isScrolled ? "h-16 sm:h-20" : "h-20 sm:h-24"
        }`}
      >
        {/* Left: Logo with SVG outline trace + Wordmark */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Outer hexagon */}
              <polygon
                points="50,6 92,28 92,72 50,94 8,72 8,28"
                fill="none"
                stroke="#393E46"
                strokeWidth="4"
                strokeDasharray="300"
                strokeDashoffset={logoTraced ? "0" : "300"}
                style={{
                  transition: "stroke-dashoffset 1.4s cubic-bezier(0.19, 1, 0.22, 1)",
                }}
              />
              {/* Inner L */}
              <path
                d="M32 28 L32 72 L58 72"
                fill="none"
                stroke="#393E46"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="120"
                strokeDashoffset={logoTraced ? "0" : "120"}
                style={{
                  transition: "stroke-dashoffset 1.3s cubic-bezier(0.19, 1, 0.22, 1) 0.2s",
                }}
              />
              {/* Inner Q */}
              <circle
                cx="64"
                cy="50"
                r="14"
                fill="none"
                stroke="rgba(57,62,70,0.85)"
                strokeWidth="4"
                strokeDasharray="95"
                strokeDashoffset={logoTraced ? "0" : "95"}
                style={{
                  transition: "stroke-dashoffset 1.2s cubic-bezier(0.19, 1, 0.22, 1) 0.35s",
                }}
              />
              <line
                x1="62"
                y1="56"
                x2="74"
                y2="68"
                stroke="#393E46"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="20"
                strokeDashoffset={logoTraced ? "0" : "20"}
                style={{
                  transition: "stroke-dashoffset 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0.8s",
                }}
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm sm:text-base tracking-tight transition-colors text-[#393E46] group-hover:text-[#393E46]/80">
              Leanqualities Solutions
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] -mt-0.5 text-[#929AAB]">
              Pune • India
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-7">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          {/* Digital Marketing Dropdown */}
          <div className="relative group">
            <NavLink
              to="/digital-marketing"
              className={({ isActive }) =>
                `relative font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 py-1 flex items-center gap-1.5 ${
                  isActive || isDmActive
                    ? "text-[#393E46] font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-[#393E46]"
                    : "text-[#929AAB] hover:text-[#393E46]"
                }`
              }
            >
              <span>Digital Marketing</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${
                  isDmActive ? "text-[#393E46]" : "text-[#929AAB] group-hover:text-[#393E46]"
                }`}
              />
            </NavLink>

            {/* Dropdown Panel */}
            <div className="absolute top-full left-0 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
              <div className="w-64 rounded-none shadow-2xl p-2.5 divide-y bg-[#F7F7F7] border border-[#393E46]/15 divide-[#EEEEEE]">
                {dmSubmenu.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.href}
                    className="flex items-center justify-between px-3 py-2 rounded-none transition-all group/item text-[#393E46] hover:bg-[#EEEEEE]"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-wider">
                      {sub.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#929AAB] group-hover/item:text-[#393E46]">
                      {sub.num}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 py-1 flex items-center gap-1.5 ${
                  isActive || isServicesActive
                    ? "text-[#393E46] font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-[#393E46]"
                    : "text-[#929AAB] hover:text-[#393E46]"
                }`
              }
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${
                  isServicesActive ? "text-[#393E46]" : "text-[#929AAB] group-hover:text-[#393E46]"
                }`}
              />
            </NavLink>

            {/* Dropdown Panel */}
            <div className="absolute top-full -left-12 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
              <div className="w-80 rounded-none shadow-2xl p-2.5 divide-y bg-[#F7F7F7] border border-[#393E46]/15 divide-[#EEEEEE]">
                {servicesSubmenu.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.href}
                    className="flex items-center justify-between px-3 py-1.5 rounded-none transition-all group/item text-[#393E46] hover:bg-[#EEEEEE]"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-wider">
                      {sub.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#929AAB] group-hover/item:text-[#393E46]">
                      {sub.num}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>

          <NavLink to="/career" className={navLinkClass}>
            Career
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Right: CTA Pill & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-none font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all bg-[#393E46] text-[#F7F7F7] hover:bg-[#393E46]/90 shadow-sm"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
            className="lg:hidden p-2 rounded-none border border-[#393E46]/15 bg-[#EEEEEE] text-[#393E46] hover:bg-[#EEEEEE]/80 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay (z-[120]) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="lg:hidden fixed inset-0 z-[120] bg-[#F7F7F7] text-[#393E46] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Top bar inside mobile menu */}
          <div className="flex items-center justify-between pb-6 border-b border-[#393E46]/12">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="font-heading font-bold text-lg text-[#393E46]">
                Leanqualities Solutions
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Mobile Menu"
              className="p-2 rounded-none border border-[#393E46]/15 text-[#393E46] hover:text-[#929AAB] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with Large Slab Type */}
          <div className="py-8 space-y-6">
            <div>
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-heading text-2xl sm:text-3xl font-bold transition-colors block ${
                  location.pathname === "/"
                    ? "text-[#393E46]"
                    : "text-[#929AAB] hover:text-[#393E46]"
                }`}
              >
                Home
              </Link>
            </div>

            <div>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-heading text-2xl sm:text-3xl font-bold transition-colors block ${
                  location.pathname === "/about"
                    ? "text-[#393E46]"
                    : "text-[#929AAB] hover:text-[#393E46]"
                }`}
              >
                About
              </Link>
            </div>

            {/* Mobile DM Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileDmOpen(!mobileDmOpen)}
                className={`w-full flex items-center justify-between font-heading text-2xl sm:text-3xl font-bold transition-colors ${
                  isDmActive
                    ? "text-[#393E46]"
                    : "text-[#929AAB] hover:text-[#393E46]"
                }`}
              >
                <span>Digital Marketing</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileDmOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileDmOpen && (
                <div className="pl-4 pt-3 space-y-2 border-l border-[#393E46]/15 mt-3">
                  {dmSubmenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-mono text-xs uppercase tracking-wider text-[#929AAB] hover:text-[#393E46] py-1"
                    >
                      {sub.num} — {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between font-heading text-2xl sm:text-3xl font-bold transition-colors ${
                  isServicesActive
                    ? "text-[#393E46]"
                    : "text-[#929AAB] hover:text-[#393E46]"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 pt-3 space-y-2 border-l border-[#393E46]/15 mt-3">
                  {servicesSubmenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-mono text-xs uppercase tracking-wider text-[#929AAB] hover:text-[#393E46] py-1"
                    >
                      {sub.num} — {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-heading text-2xl sm:text-3xl font-bold transition-colors block ${
                  location.pathname === "/blog"
                    ? "text-[#393E46]"
                    : "text-[#929AAB] hover:text-[#393E46]"
                }`}
              >
                Blog
              </Link>
            </div>

            <div>
              <Link
                to="/career"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-heading text-2xl sm:text-3xl font-bold transition-colors block ${
                  location.pathname === "/career"
                    ? "text-[#393E46]"
                    : "text-[#929AAB] hover:text-[#393E46]"
                }`}
              >
                Career
              </Link>
            </div>

            <div>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-heading text-2xl sm:text-3xl font-bold transition-colors block ${
                  location.pathname === "/contact"
                    ? "text-[#393E46]"
                    : "text-[#929AAB] hover:text-[#393E46]"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Bottom Action Pill */}
          <div className="pt-6 border-t border-[#393E46]/12">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-none bg-[#393E46] text-[#F7F7F7] font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#393E46]/90 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
