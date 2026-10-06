// ═══════════════════════════════════════
// PAGE: Contact (/contact) — Contact Us
// SECTIONS: Banner, Contact Info Cards, Contact Form, Google Maps Embed
// ═══════════════════════════════════════

import React, { useState } from "react";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
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
  GOOGLE_MAPS_EMBED_URL,
} from "../config";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [statusMessage, setStatusMessage] = useState("");

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

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required.";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    const payload = new FormData();
    payload.append("access_key", WEB3FORMS_ACCESS_KEY);
    payload.append("from_name", "LQSIPL Contact Inquiry");
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("subject", formData.subject);
    payload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage(
          "Thank you for reaching out! Your message has been transmitted successfully. Our technical consulting team will respond promptly."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(
          data.message ||
            `Unable to transmit your message. Please try again or email us directly at ${COMPANY_EMAIL}.`
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        `Network connection error. Please try again or email us directly at ${COMPANY_EMAIL}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact - Leanqualities Solutions"
        description="Get in touch with Leanquality Solutions India Pvt. Ltd. (LQSIPL) in Pune, India. Visit our office in Baner, call +91 9168331155, or email datta@leanqualities.com."
      />

      <main className="min-h-screen bg-lightBg">
        {/* ---------- SECTION: Banner ---------- */}
        <PageBanner
          badge="Let's Connect"
          title="We'd Love To Hear From You!"
          subtitle="Reach out to our Pune headquarters for project inquiries, technical partnerships, or consulting assistance."
        />

        {/* ---------- SECTION: Contact Content & Form ---------- */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* ---------- SECTION: Contact Info Cards ---------- */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-heading">
                    Get in touch
                  </h2>
                  <div className="w-12 h-1 bg-gold my-3 rounded-full" />
                  <p className="text-sm text-bodyText leading-relaxed">
                    Our engineering and consulting teams are here to help scale your digital ecosystem. Connect directly or drop by our Baner office.
                  </p>
                </div>

                {/* Office Address Card */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-heading">
                      Office Address
                    </h3>
                    <p className="text-xs text-bodyText leading-relaxed mt-1">
                      {COMPANY_ADDRESS}
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-heading">
                      Phone Number
                    </h3>
                    <p className="text-xs text-bodyText mt-1">Direct call or WhatsApp:</p>
                    <a
                      href={`tel:${COMPANY_PHONE_TEL}`}
                      className="text-sm font-semibold text-primary hover:text-navy transition-colors mt-0.5 inline-block"
                    >
                      {COMPANY_PHONE}
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-heading">
                      Email Address
                    </h3>
                    <p className="text-xs text-bodyText mt-1">General & project inquiries:</p>
                    <a
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="text-sm font-semibold text-primary hover:text-navy transition-colors mt-0.5 inline-block"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-heading">
                      Working Hours
                    </h3>
                    <div className="text-xs text-bodyText space-y-1 mt-1">
                      <p>{COMPANY_HOURS_WEEKDAY}</p>
                      <p>{COMPANY_HOURS_WEEKEND}</p>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="bg-navy text-white rounded-2xl p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-yellowLight">Follow Our Channels</h4>
                    <p className="text-xs text-slate-300">Stay updated on events and updates</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-navy text-white flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </a>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-navy text-white flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* ---------- SECTION: Contact Form ---------- */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/80 shadow-lg">
                  <div className="mb-6">
                    <h3 className="font-heading text-2xl font-bold text-heading">
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-bodyText mt-1">
                      Have an inquiry, project proposal, or question? Leave your details below and our technical consulting team will respond promptly.
                    </p>
                  </div>

                  {status === "success" && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-sm animate-fadeIn">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
                      <div>
                        <p className="font-semibold">Message Delivered!</p>
                        <p className="text-xs mt-1 text-emerald-700">{statusMessage}</p>
                      </div>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-sm animate-fadeIn">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
                      <div>
                        <p className="font-semibold">Submission Notice</p>
                        <p className="text-xs mt-1 text-rose-700">{statusMessage}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-heading mb-1.5">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-heading placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 ${
                            errors.name
                              ? "border-rose-400 focus:ring-rose-200"
                              : "border-slate-300 focus:ring-primary/20 focus:border-primary"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-heading mb-1.5">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@company.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-heading placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 ${
                            errors.email
                              ? "border-rose-400 focus:ring-rose-200"
                              : "border-slate-300 focus:ring-primary/20 focus:border-primary"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-heading mb-1.5">
                        Subject <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project inquiry, consulting, or general question"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-heading placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 ${
                          errors.subject
                            ? "border-rose-400 focus:ring-rose-200"
                            : "border-slate-300 focus:ring-primary/20 focus:border-primary"
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-heading mb-1.5">
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements, technology needs, or objectives..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-heading placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 ${
                          errors.message
                            ? "border-rose-400 focus:ring-rose-200"
                            : "border-slate-300 focus:ring-primary/20 focus:border-primary"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-500 mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-medium hover:bg-navy hover:text-gold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-primary/25"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Google Maps Embed ---------- */}
        <section className="w-full bg-white border-t border-slate-200">
          <div className="w-full h-[450px] relative">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Leanquality Solutions Baner Pune Location"
              className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </section>
      </main>
    </>
  );
}
