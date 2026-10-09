// ═══════════════════════════════════════
// PAGE: Contact (/contact) — Architectural Contact Experience
// CLONED PATTERN: The Nest (thenest.pl/contact) Forensics (Reference-Website-3.md)
// THEME: Architectural Monochrome (COLOR-SYSTEM.md) + LQSIPL Corporate Content
// ═══════════════════════════════════════

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  WEB3FORMS_ACCESS_KEY,
  COMPANY_PHONE,
  COMPANY_PHONE_TEL,
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
  COMPANY_HOURS_WEEKDAY,
  COMPANY_HOURS_WEEKEND,
  LINKEDIN_URL,
  INSTAGRAM_URL,
  WHATSAPP_LINK,
  GOOGLE_MAPS_EMBED_URL,
} from "../config";
import { Home, ChevronRight, Check } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "cloud-web",
    message: "",
    honeypot: "",
    consent: false,
  });

  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const serviceOptions = [
    {
      id: "cloud-web",
      label: "Cloud & Web Apps",
      guidance: "Full-stack web architectures, distributed systems, and scalable cloud deployments.",
    },
    {
      id: "enterprise",
      label: "Enterprise Software",
      guidance: "Custom ERP platforms, dedicated maintenance SLAs, and legacy code modernization.",
    },
    {
      id: "ai-ml-rpa",
      label: "AI, ML & RPA",
      guidance: "Intelligent process automation, predictive machine learning models, and data pipelines.",
    },
    {
      id: "other",
      label: "Something else",
      guidance: "Strategic technology selection, architectural consulting, or tailored partnerships.",
    },
  ];

  const selectedGuidance =
    serviceOptions.find((opt) => opt.id === formData.service)?.guidance ||
    serviceOptions[0].guidance;

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to communication processing.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceSelect = (serviceId) => {
    setFormData((prev) => ({ ...prev, service: serviceId }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    // Anti-Spam Honeypot check: silently fake success if bot populated invisible field
    if (formData.honeypot) {
      console.warn("Spam honeypot triggered.");
      setIsSuccessOpen(true);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    const payload = new FormData();
    payload.append("access_key", WEB3FORMS_ACCESS_KEY);
    payload.append("from_name", "LQSIPL Contact Dispatch");
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone || "Not provided");
    payload.append("service_interest", formData.service);
    payload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccessOpen(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "cloud-web",
          message: "",
          honeypot: "",
          consent: false,
        });
      } else {
        setSubmitError(
          data.message ||
            `Unable to transmit your message right now. You can email us directly at ${COMPANY_EMAIL}.`
        );
      }
    } catch {
      setSubmitError(
        `Network communication error. Please try again or email us directly at ${COMPANY_EMAIL}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Leanquality Solutions India Pvt. Ltd"
        description="Direct contact channels for Leanquality Solutions (LQSIPL) in Baner, Pune. Reach our engineering and technology consulting team first-hand."
      />

      <main className="min-h-screen bg-mono-50 relative selection:bg-black selection:text-white pt-24 sm:pt-28 lg:pt-32">
        {/* ═══════════════════════════════════════
            SECTION 3.1: BREADCRUMBS BAR
            Ref: thenest.pl/contact Breadcrumb bar
        ═══════════════════════════════════════ */}
        <nav
          aria-label="Breadcrumb"
          className="pt-8 sm:pt-10 pb-4 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"
        >
          <ol className="flex items-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm font-sans">
            <li>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-mono-500 hover:text-black transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-mono-300" />
            </li>
            <li>
              <span className="text-black font-medium" aria-current="page">
                Contact
              </span>
            </li>
          </ol>
        </nav>

        {/* ═══════════════════════════════════════
            SECTION 3.2: HERO HEADER BLOCK WITH ARCHITECTURAL GRID
            Ref: thenest.pl/contact Hero Display H1 + Lead Paragraph
        ═══════════════════════════════════════ */}
        <section className="relative overflow-clip pb-12 sm:pb-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Subtle architectural 12-column x 240px grid backdrop */}
          <div
            className="rd-grid-backdrop absolute inset-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-4 sm:pt-6">
            {/* Left Column (Cols 1-6): Category Badge + Display H1 */}
            <div className="lg:col-span-6">
              <span className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-mono-500 block">
                Contact
              </span>
              <h1 className="mt-4 sm:mt-6 text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.02] tracking-[-0.02em] text-black select-none font-heading font-bold">
                <span className="block overflow-hidden pb-[0.08em]">
                  <span className="inline-block">Write, call</span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span className="inline-block italic font-serif font-normal text-mono-600">
                    or drop by.
                  </span>
                </span>
              </h1>
            </div>

            {/* Right Column (Cols 8-12): Human Lead Paragraph */}
            <div className="lg:col-span-5 lg:col-start-8 pt-1 sm:pt-4">
              <p className="text-base sm:text-lg leading-relaxed text-mono-600 font-sans max-w-xl">
                There is no call centre and no ticket queue behind this form.
                Your message goes directly to our core engineering and leadership
                team in Baner, Pune and answers first-hand.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SECTION 3.3 & 3.4: TWO-COLUMN MAIN WORKBENCH
            Column 1: "At a glance" Quick Facts & Architectural Map
            Column 2: "Your message" Architecture Contact Form
        ═══════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24 sm:pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* ──────────────────────────────────
                COLUMN 1: AT A GLANCE (Cols 1-5)
            ────────────────────────────────── */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-mono-500 mb-4">
                  At a glance
                </p>

                {/* Definition List with Hairline Borders */}
                <dl className="border-t border-mono-200">
                  {/* Phone */}
                  <div className="border-b border-mono-200 py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <dt className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-mono-400">
                      Phone
                    </dt>
                    <dd className="text-[0.95rem] leading-snug text-black">
                      <a
                        href={`tel:${COMPANY_PHONE_TEL}`}
                        className="rd-underline font-mono font-medium hover:text-black transition-colors inline-block"
                      >
                        {COMPANY_PHONE}
                      </a>
                    </dd>
                  </div>

                  {/* E-mail */}
                  <div className="border-b border-mono-200 py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <dt className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-mono-400">
                      E-mail
                    </dt>
                    <dd className="text-[0.95rem] leading-snug text-black">
                      <a
                        href={`mailto:${COMPANY_EMAIL}`}
                        className="rd-underline font-mono font-medium hover:text-black transition-colors inline-block"
                      >
                        {COMPANY_EMAIL}
                      </a>
                    </dd>
                  </div>

                  {/* Reception Hours */}
                  <div className="border-b border-mono-200 py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <dt className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-mono-400">
                      Reception
                    </dt>
                    <dd className="text-[0.95rem] leading-snug text-mono-800 text-left sm:text-right font-sans">
                      <div>Mon–Fri, 09:00–20:00 IST</div>
                      <div className="text-xs text-mono-500 font-mono">
                        Sat–Sun, 10:00–19:00 IST
                      </div>
                    </dd>
                  </div>

                  {/* Address */}
                  <div className="border-b border-mono-200 py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <dt className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-mono-400 shrink-0">
                      Address
                    </dt>
                    <dd className="text-[0.95rem] leading-snug text-mono-800 text-left sm:text-right max-w-xs font-sans">
                      1st Floor, Office 101, Trident Business Center, Baner, Pune 411045
                    </dd>
                  </div>

                  {/* Getting here */}
                  <div className="border-b border-mono-200 py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <dt className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-mono-400 shrink-0">
                      Getting here
                    </dt>
                    <dd className="text-[0.92rem] leading-snug text-mono-700 text-left sm:text-right max-w-xs font-sans">
                      Opposite Audi Showroom, Pune-Bangalore Highway — 5 mins from Mumbai-Pune Expressway exit
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Concentric Double Border Map Framing (PhotoPlate Pattern) */}
              <div className="relative my-8">
                {/* Outer Ring 1: Offset -12px to -16px */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-3 lg:-inset-4 border border-mono-200"
                />
                {/* Outer Ring 2: Offset -7px to -9px */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-[7px] lg:-inset-[9px] border border-mono-200"
                />
                {/* Inner Media Frame */}
                <div className="relative overflow-hidden rounded-2xl border border-mono-300 h-72 md:h-80 bg-mono-100">
                  <iframe
                    src={GOOGLE_MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Leanquality Solutions Baner Pune Location"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Map Annotation Sub-Bar */}
              <div className="border-t border-mono-200 pt-3 mt-4 flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mono-500">
                  Baner, Pune on the map
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-black font-semibold">
                  LQSIPL HQ
                </span>
              </div>

              {/* Social Channels Sub-Bar */}
              <div className="border-t border-mono-200 pt-5 mt-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mono-400 block">
                    CHANNELS
                  </span>
                  <span className="text-xs text-mono-600 font-sans">
                    Official Networks
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 border border-mono-200 text-black hover:border-black hover:bg-black hover:text-white transition-all font-mono text-xs uppercase tracking-wider rounded"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 border border-mono-200 text-black hover:border-black hover:bg-black hover:text-white transition-all font-mono text-xs uppercase tracking-wider rounded"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 border border-mono-200 text-black hover:border-black hover:bg-black hover:text-white transition-all font-mono text-xs uppercase tracking-wider rounded"
                    aria-label="WhatsApp"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* ──────────────────────────────────
                COLUMN 2: YOUR MESSAGE (Cols 7-12)
            ────────────────────────────────── */}
            <div className="lg:col-span-6 lg:col-start-7">
              {/* Section Heading */}
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-black tracking-tight">
                  Your message
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-mono-600 font-sans">
                  Fill in the form — on working days we reply the same day.
                </p>
              </div>

              {/* Architectural Contact Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
                {/* Anti-Spam Honeypot Field (Invisible to human users) */}
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Name Field (Floating Label) */}
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={200}
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`peer w-full border bg-white px-5 py-4 transition-colors duration-300 focus:outline-none placeholder-transparent font-sans text-base text-black ${
                      errors.name
                        ? "border-red-500"
                        : "border-mono-200 hover:border-mono-400 focus:border-black focus:ring-1 focus:ring-black"
                    }`}
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                      formData.name || focusedField === "name"
                        ? "-top-2 bg-white px-2 font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-black"
                        : "top-4 text-base text-mono-400 font-sans"
                    }`}
                  >
                    Name <span className="text-black font-bold">*</span>
                  </label>
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-2 text-sm text-red-600 flex items-center gap-1.5"
                      role="alert"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* E-mail Field (Floating Label) */}
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`peer w-full border bg-white px-5 py-4 transition-colors duration-300 focus:outline-none placeholder-transparent font-sans text-base text-black ${
                      errors.email
                        ? "border-red-500"
                        : "border-mono-200 hover:border-mono-400 focus:border-black focus:ring-1 focus:ring-black"
                    }`}
                    placeholder="E-mail"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                      formData.email || focusedField === "email"
                        ? "-top-2 bg-white px-2 font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-black"
                        : "top-4 text-base text-mono-400 font-sans"
                    }`}
                  >
                    E-mail <span className="text-black font-bold">*</span>
                  </label>
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-2 text-sm text-red-600 flex items-center gap-1.5"
                      role="alert"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field (Optional, Floating Label) */}
                <div className="relative group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    maxLength={40}
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="peer w-full border bg-white px-5 py-4 transition-colors duration-300 focus:outline-none placeholder-transparent border-mono-200 hover:border-mono-400 focus:border-black focus:ring-1 focus:ring-black font-sans text-base text-black"
                    placeholder="Phone"
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                      formData.phone || focusedField === "phone"
                        ? "-top-2 bg-white px-2 font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-black"
                        : "top-4 text-base text-mono-400 font-sans"
                    }`}
                  >
                    Phone{" "}
                    <span className="text-mono-400 font-normal lowercase">
                      (optional)
                    </span>
                  </label>
                </div>

                {/* Service Selection Radio Pills */}
                <fieldset className="space-y-3 pt-1">
                  <legend className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-mono-500">
                    What is your enquiry about?
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((opt) => {
                      const isActive = formData.service === opt.id;
                      return (
                        <label
                          key={opt.id}
                          className={`cursor-pointer border px-4 py-2.5 text-sm transition-colors duration-200 select-none ${
                            isActive
                              ? "border-black bg-black text-white"
                              : "border-mono-200 bg-white text-mono-700 hover:border-mono-400"
                          }`}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={opt.id}
                            checked={isActive}
                            onChange={() => handleServiceSelect(opt.id)}
                            className="sr-only"
                          />
                          {opt.label}
                        </label>
                      );
                    })}
                  </div>

                  {/* Contextual guidance note with architectural tick mark */}
                  <p className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-mono-500 pt-1 font-sans">
                    <span
                      className="mt-[0.6em] h-px w-3 shrink-0 bg-mono-400"
                      aria-hidden="true"
                    />
                    <span>{selectedGuidance}</span>
                  </p>
                </fieldset>

                {/* Message Textarea (Floating Label) */}
                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={5000}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`peer w-full resize-y border bg-white px-5 py-4 transition-colors duration-300 focus:outline-none placeholder-transparent font-sans text-base text-black ${
                      errors.message
                        ? "border-red-500"
                        : "border-mono-200 hover:border-mono-400 focus:border-black focus:ring-1 focus:ring-black"
                    }`}
                    placeholder="Message"
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                      formData.message || focusedField === "message"
                        ? "-top-2 bg-white px-2 font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-black"
                        : "top-4 text-base text-mono-400 font-sans"
                    }`}
                  >
                    Message <span className="text-black font-bold">*</span>
                  </label>
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-2 text-sm text-red-600 flex items-center gap-1.5"
                      role="alert"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* GDPR Data Controller Disclosure Card */}
                <div className="space-y-2 border border-mono-200 bg-white/70 p-5 text-xs sm:text-sm text-mono-600 font-sans">
                  <p>
                    <strong className="text-black">The data controller</strong>{" "}
                    is Leanquality Solutions India Pvt. Ltd (LQSIPL), based at
                    Trident Business Center, Baner, Pune.
                  </p>
                  <p>
                    Your contact information is processed exclusively to address
                    your inquiry and maintain direct communication.
                  </p>
                  <p>
                    You retain full rights to access, rectify, erase, or object
                    to the processing of your information.
                  </p>
                </div>

                {/* Consent Agreement Checkbox */}
                <div>
                  <div
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        consent: !prev.consent,
                      }))
                    }
                    className={`flex cursor-pointer items-start gap-3 border p-4 transition-colors bg-white select-none ${
                      errors.consent
                        ? "border-red-500"
                        : "border-mono-200 hover:border-black"
                    }`}
                  >
                    <div
                      className={`h-5 w-5 shrink-0 flex items-center justify-center border transition-colors duration-200 ${
                        formData.consent
                          ? "border-black bg-black text-white"
                          : "border-mono-300 bg-white"
                      }`}
                    >
                      {formData.consent && (
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm text-mono-600 leading-snug font-sans">
                      I consent to Leanquality Solutions processing my contact
                      details to respond to this message.{" "}
                      <span className="text-black font-bold">*</span>
                    </span>
                  </div>
                  {errors.consent && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5" role="alert">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* Submit Error Banner (if API fails) */}
                {submitError && (
                  <div className="p-4 border border-red-300 bg-red-50 text-red-800 text-sm">
                    {submitError}
                  </div>
                )}

                {/* Signature Kinetic Action CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex min-h-12 items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center border border-black text-lg text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white"
                    >
                      {isSubmitting ? (
                        <svg
                          className="h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                      ) : (
                        "→"
                      )}
                    </span>
                    <span className="text-sm font-medium tracking-[0.14em] text-black uppercase font-sans">
                      {isSubmitting ? "Sending message..." : "Send message"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            SUBMISSION SUCCESS DIALOG MODAL
            Ref: thenest.pl/contact Success Dialog
        ═══════════════════════════════════════ */}
        {isSuccessOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
          >
            <div className="relative w-full max-w-lg bg-white border border-mono-200 p-8 md:p-10 shadow-2xl space-y-4">
              <h2
                id="success-modal-title"
                className="font-heading text-3xl font-bold text-black tracking-tight"
              >
                Thank you!
              </h2>
              <p className="text-base text-mono-600 leading-relaxed font-sans">
                Your message has been delivered directly to our engineering and
                consulting team in Baner, Pune. On working days we reply the
                same day.
              </p>
              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsSuccessOpen(false)}
                  className="group inline-flex items-center gap-3 px-6 py-2.5 bg-black text-white text-xs font-mono uppercase tracking-[0.14em] hover:bg-mono-800 transition-colors"
                >
                  <span>Close</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
