// ═══════════════════════════════════════
// PAGE: Home (/) — Homepage
// SECTIONS: Hero, About-preview, Focus Areas, Features,
//           Why Different, Technology, Values, Counters
// ═══════════════════════════════════════

import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Counter from "../components/Counter";
import SectionHeading from "../components/SectionHeading";
import {
  ArrowRight,
  Cpu,
  Radio,
  Brain,
  Layers,
  Database,
  Award,
  Sliders,
  Sparkles,
  ShieldCheck,
  Clock,
  MessageCircle,
  Cloud,
  CheckCircle2,
  Lock,
  Heart,
  Lightbulb,
  Check,
  Search,
} from "lucide-react";

export default function HomePage() {
  const focusAreas = [
    {
      title: "IoT",
      desc: "Connect devices, gather real-time telemetry, and automate workflows with smart edge computing.",
      icon: Cpu,
    },
    {
      title: "5G",
      desc: "Ultra-low latency architectures and high-throughput networking for modern telecom infrastructure.",
      icon: Radio,
    },
    {
      title: "AI / ML",
      desc: "Transform enterprise data with predictive algorithms, machine learning models, and NLP systems.",
      icon: Brain,
    },
    {
      title: "Blockchain",
      desc: "Decentralized applications, cryptographic smart contracts, and tamper-proof ledger architectures.",
      icon: Layers,
    },
    {
      title: "Data Science",
      desc: "Advanced statistical modeling, pattern discovery, and predictive intelligence dashboards.",
      icon: Database,
    },
  ];

  const features = [
    {
      title: "Expertise and Experience",
      desc: "Our seasoned engineers and architects bring deep domain mastery across enterprise technologies to every client engagement.",
      icon: Award,
    },
    {
      title: "Tailored Solutions",
      desc: "We engineer purpose-built digital architectures customized to your organization's exact workflows and business KPIs.",
      icon: Sliders,
    },
    {
      title: "Cutting-Edge Technology",
      desc: "We leverage modern cloud frameworks, artificial intelligence, and automated pipelines to build future-ready platforms.",
      icon: Sparkles,
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous testing methodologies, continuous code audits, and security compliance guarantee rock-solid software stability.",
      icon: ShieldCheck,
    },
    {
      title: "Timely Delivery",
      desc: "Agile sprints, transparent milestone reporting, and disciplined project management ensure on-time delivery without compromise.",
      icon: Clock,
    },
    {
      title: "Transparent Communication",
      desc: "Daily collaboration, direct engineering access, and milestone tracking ensure complete clarity from kickoff to launch.",
      icon: MessageCircle,
    },
  ];

  const differentiators = [
    {
      title: "AWS Cloud Leadership",
      partner: "Amazon Web Services",
      desc: "Certified AWS architecture practices specializing in serverless setups, container orchestration, and Well-Architected Framework compliance.",
      highlights: [
        "Cloud Migration & Modernization",
        "Cost Governance & FinOps",
        "High Availability Multi-AZ Design",
      ],
    },
    {
      title: "Salesforce Ecosystem",
      partner: "Salesforce CRM",
      desc: "Custom CRM deployments, Lightning development, and third-party integrations that empower sales and customer service teams.",
      highlights: [
        "Sales Cloud & Service Cloud",
        "Custom Lightning Web Components",
        "Automated Lead Workflows",
      ],
    },
    {
      title: "AutomationEdge Robotics",
      partner: "AutomationEdge RPA",
      desc: "Enterprise robotic process automation driving hyper-efficiency, human-error elimination, and accelerated throughput.",
      highlights: [
        "AI-Powered Process Automation",
        "IT Service Desk Automation",
        "Legacy UI Bots & Data Sync",
      ],
    },
  ];

  const techStacks = [
    {
      category: "RPA (Robotic Process Automation)",
      tools: ["AutomationEdge", "UiPath", "Blue Prism", "Custom Python Bots"],
    },
    {
      category: "Cloud Platforms",
      tools: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)"],
    },
    {
      category: "Machine Learning & AI",
      tools: ["TensorFlow", "PyTorch", "OpenAI APIs", "Scikit-Learn", "Hugging Face"],
    },
    {
      category: "Programming Languages",
      tools: ["JavaScript / TypeScript", "Python", "Java", "Go", "C# / .NET", "PHP"],
    },
    {
      category: "Databases & Storage",
      tools: ["PostgreSQL", "MySQL", "MongoDB", "Amazon DynamoDB", "Redis"],
    },
    {
      category: "DevOps & CI/CD Tools",
      tools: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Prometheus"],
    },
  ];

  const coreValues = [
    {
      title: "Integrity",
      desc: "Upholding uncompromising ethical standards, honesty, and corporate accountability in every client engagement.",
      icon: Lock,
    },
    {
      title: "Accountability",
      desc: "Taking complete ownership of our code, delivery schedules, and client satisfaction from inception through deployment.",
      icon: ShieldCheck,
    },
    {
      title: "Respect",
      desc: "Valuing diverse perspectives, fostering inclusive teamwork, and honoring our commitments to clients and colleagues.",
      icon: Heart,
    },
    {
      title: "Innovation",
      desc: "Relentlessly exploring emerging technologies and inventive problem-solving methodologies to create value.",
      icon: Lightbulb,
    },
    {
      title: "Quality",
      desc: "Pursuing engineering perfection, meticulous code standards, and robust architecture in every software build.",
      icon: Check,
    },
    {
      title: "Transparency",
      desc: "Maintaining open communication, clear sprint reporting, and straightforward commercial terms without surprises.",
      icon: Search,
    },
  ];

  return (
    <>
      <SEO
        title="Leanquality Solutions - Enhancing Digital Solutions in Pune's Premier IT Company"
        description="Leanquality Solutions India Pvt. Ltd (LQSIPL) is Pune's leading IT solutions firm providing Web, Mobile, Cloud, AI/ML, and Digital Marketing services."
      />

      <main className="min-h-screen">
        {/* ---------- SECTION: Hero ---------- */}
        <section className="relative bg-gradient-to-br from-brand-earth-900 to-brand-earth-600 text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFC91B_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellowLight text-xs font-semibold uppercase tracking-wider mb-6 border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                Premier IT Services & Consulting in Pune
              </span>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-yellowLight">
                Enhancing Digital Solutions in Pune&apos;s Premier IT Company
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                Lean Quality Solutions is committed to providing top-notch digital solutions that cater to the evolving needs of modern businesses. Partner with our seasoned engineering and consulting teams to architect resilient software, automate operations, and scale your digital presence.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-navy font-semibold text-sm hover:bg-yellowLight transition-all duration-200 shadow-lg shadow-gold/20"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all duration-200 border border-white/20"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: About-preview (Improving Digital Solutions) ---------- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Engineering Excellence
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-heading leading-tight">
                  Improving Digital Solutions at Pune&apos;s Leading IT Firm
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full" />
                <p className="text-sm sm:text-base text-bodyText leading-relaxed">
                  At Leanquality Solutions India Pvt. Ltd (LQSIPL), we combine technical depth with agile delivery frameworks to build bespoke digital applications. Headquartered in Baner, Pune, our multidisciplinary teams of software architects, developers, and consultants transform complex enterprise bottlenecks into elegant, automated digital experiences.
                </p>
                <p className="text-sm sm:text-base text-bodyText leading-relaxed">
                  From cloud-native migrations and full-stack software development to RPA process automation and AI integration, we help businesses build lasting technological advantages.
                </p>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-navy transition-colors group"
                  >
                    <span>Read about our philosophy and journey</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl bg-gradient-to-tr from-primary/10 via-slate-50 to-gold/10 p-8 border border-slate-200/80 shadow-card">
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Cloud className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-heading">
                          Cloud Architecture
                        </h4>
                        <p className="text-xs text-bodyText mt-0.5">
                          Scalable, fault-tolerant infrastructure on AWS, Azure, and GCP.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Brain className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-heading">
                          Intelligent Automation
                        </h4>
                        <p className="text-xs text-bodyText mt-0.5">
                          Streamlined robotic workflows and predictive AI algorithms.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-heading">
                          Enterprise Security
                        </h4>
                        <p className="text-xs text-bodyText mt-0.5">
                          OWASP-compliant data governance and encrypted architectures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Focus Areas ---------- */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Technological Frontiers"
              title="Our Focus In"
              description="Harnessing next-generation technologies to deliver sustainable competitive leverage for growing and enterprise organizations."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-heading mb-2">
                        {area.title}
                      </h3>
                      <p className="text-xs text-bodyText leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Features (Elevate Initiatives) ---------- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Why Choose Us"
              title="Elevate Your Initiatives With Proven Capability"
              description="Our delivery model centers on technical mastery, tailored architectures, and complete operational transparency."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-8 rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-heading mb-3">
                        {feat.title}
                      </h3>
                      <p className="text-sm text-bodyText leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Why Different ---------- */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Strategic Partnerships"
              title="Why We Are Different"
              description="Specialized competencies across major enterprise software ecosystems provide our clients with proven, battle-tested solutions."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map((diff) => (
                <div
                  key={diff.title}
                  className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow"
                >
                  <div>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-wider inline-block mb-4">
                      {diff.partner}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-heading mb-3">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-bodyText leading-relaxed mb-6">
                      {diff.desc}
                    </p>
                    <ul className="space-y-2.5">
                      {diff.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-bodyText">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Technology ---------- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Technical Arsenal"
              title="Technology We Used"
              description="A curated toolkit of robust languages, frameworks, databases, and DevOps instruments."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStacks.map((stack) => (
                <div
                  key={stack.category}
                  className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80"
                >
                  <h3 className="font-heading font-bold text-base text-heading mb-4 pb-2 border-b border-slate-200">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-heading shadow-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Values ---------- */}
        <section className="py-20 bg-lightBg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Our Principles"
              title="Core Corporate Values"
              description="The foundational ethics and cultural tenets that guide every engineering and business decision we make."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-heading mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-bodyText leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- SECTION: Counters ---------- */}
        <section className="py-20 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFC91B_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-yellowLight">
                Proven Track Record
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-yellowLight">
                Delivering Measurable Impact
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto my-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gold mb-2">
                  <Counter end={500} suffix="+" duration={2000} />
                </div>
                <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
                  Projects Completed
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Across web, mobile, cloud & RPA
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gold mb-2">
                  <Counter end={200} suffix="+" duration={2000} />
                </div>
                <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
                  Happy Faces
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Satisfied clients & enterprise partners
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gold mb-2">
                  <Counter end={1.2} suffix="M+" decimals={1} duration={2000} />
                </div>
                <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
                  Leads Generated
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Through data-driven digital strategies
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
