import React, { useState } from "react";
import { WEB3FORMS_ACCESS_KEY, COMPANY_EMAIL } from "../../config";
import { X, Upload, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function JobModal({ isOpen, onClose, job }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [fileError, setFileError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  if (!isOpen || !job) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError("");
    if (!file) {
      setSelectedFile(null);
      return;
    }

    // Validate size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setFileError("Resume file size must be less than 5MB.");
      setSelectedFile(null);
      e.target.value = "";
      return;
    }

    // Validate type (.pdf, .doc, .docx)
    const validExtensions = [".pdf", ".doc", ".docx"];
    const fileExt = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    if (!validExtensions.includes(fileExt)) {
      setFileError("Please upload a .pdf, .doc, or .docx document.");
      setSelectedFile(null);
      e.target.value = "";
      return;
    }

    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fileError) return;

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "LQSIPL Careers Portal");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
        setSelectedFile(null);
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
            `Unable to submit application. Please email us directly at ${COMPANY_EMAIL}.`
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        `Network transmission error. Please check your connection or email ${COMPANY_EMAIL}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-heading hover:bg-slate-100 transition-colors"
          aria-label="Close application modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="text-xs font-semibold px-2.5 py-0.5 bg-primary/10 text-primary rounded-full uppercase tracking-wider">
            Job Application
          </span>
          <h3 className="font-heading text-2xl font-bold text-heading mt-2">
            Apply for {job.title}
          </h3>
          <p className="text-xs text-bodyText mt-1">
            Fill in the details below. Our technical recruitment team will review your qualifications promptly.
          </p>
        </div>

        {/* Status Alerts */}
        {status === "success" && (
          <div className="mb-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600" />
              <div>
                <p className="font-semibold">Application Submitted Successfully!</p>
                <p className="text-xs mt-1 text-emerald-700 leading-relaxed">
                  Thank you for applying. We have received your application for{" "}
                  <strong>{job.title}</strong> and our HR team will contact you soon.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-medium hover:bg-emerald-700 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600" />
            <div>
              <p className="font-semibold">Submission Notice</p>
              <p className="text-xs mt-1 text-rose-700">{errorMessage}</p>
            </div>
          </div>
        )}

        {status !== "success" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Hidden Position Input */}
            <input type="hidden" name="position" value={job.title} />
            <input
              type="hidden"
              name="subject"
              value={`New Job Application: ${job.title}`}
            />

            <div>
              <label className="block text-xs font-semibold text-heading mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-heading placeholder:text-slate-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-heading mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-heading placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-heading mb-1.5">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-heading placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-heading mb-1.5">
                Position
              </label>
              <input
                type="text"
                disabled
                value={job.title}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-heading mb-1.5">
                Cover Letter
              </label>
              <textarea
                name="coverletter"
                rows={3}
                placeholder="Briefly describe why you're a good fit for this position..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-heading placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-heading mb-1.5">
                Resume Upload (.pdf, .doc, .docx - max 5MB)
              </label>
              <div className="relative border-2 border-dashed border-slate-300 hover:border-primary rounded-xl p-4 text-center cursor-pointer transition-colors bg-slate-50 hover:bg-primary/5">
                <input
                  type="file"
                  name="attachment"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
                  <Upload className="w-5 h-5 text-primary" />
                  <span className="text-xs font-medium text-heading">
                    {selectedFile ? selectedFile.name : "Click or drag resume file here"}
                  </span>
                  <span className="text-[11px] text-bodyText">
                    Max size: 5MB
                  </span>
                </div>
              </div>
              {fileError && (
                <p className="text-xs text-rose-500 mt-1.5">{fileError}</p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || !!fileError}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-medium hover:bg-navy hover:text-gold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-primary/20"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
