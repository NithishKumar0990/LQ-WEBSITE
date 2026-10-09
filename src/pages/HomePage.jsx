// ═══════════════════════════════════════
// PAGE: Home (/) — Homepage (Rebuilt to DAQ Architecture Exact)
// SECTIONS:
// 1. Full-Height Hero Stage (h-[100svh], CAD grid + liquid ink reveal H1)
// 2. Scrollytelling Manifesto Stage (h-[250vh], word-by-word reveal + values reading rows)
// 3. The Foundation Stepper (DAQ "Neural Core" 6-stage rail stepper)
// 4. Focus Areas Capability Tiles (01-05 Bento style)
// 5. Services Bento Grid (10 tiles with mono tech pills)
// 6. Platforms Strip (AWS, Salesforce, AutomationEdge)
// 7. Technology We Used (06 / STACK mono clusters)
// 8. Tabular Counters Strip (500+, 200+, 1.2M+ in mono-950)
// ═══════════════════════════════════════

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import SEO from "../components/SEO";
import ChapterAnchor from "../components/daq/ChapterAnchor";
import CapabilityTile from "../components/daq/CapabilityTile";
import TechPill from "../components/daq/TechPill";
import CounterStrip from "../components/daq/CounterStrip";
import StepperRail from "../components/daq/StepperRail";
import FocusAreasBento from "../components/daq/FocusAreasBento";
import IntroCurtain from "../components/daq/IntroCurtain";
import HeroFluidBackground from "../components/HeroFluidBackground";
import EchoText from "../components/EchoText";
import {
  ArrowRight,
  ChevronDown,
  Cpu,
  Radio,
  Brain,
  Layers,
  Database,
  Cloud,
  CheckCircle2,
  Lock,
  Globe,
  Smartphone,
  Server,
  Workflow,
  Headphones,
  Building,
  ShoppingCart,
} from "lucide-react";

const MotionLink = motion.create(Link);

// ═══════════════════════════════════════
// MOTION SYSTEM TOKENS & VARIANTS (SECTION 01)
// ═══════════════════════════════════════
const MOTION_EASING = [0.22, 1, 0.36, 1];

const MOTION_SPRINGS = {
  button: { type: "spring", stiffness: 350, damping: 25 },
  card: { type: "spring", stiffness: 300, damping: 26 },
};

const sectionEntranceVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const hairlineBorderVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.85,
      ease: MOTION_EASING,
    },
  },
};

const metaTextVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: MOTION_EASING,
    },
  },
};

const columnStaggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const headlineContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const headlineLineVariants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.85,
      ease: MOTION_EASING,
    },
  },
};

const fadeRiseVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: MOTION_EASING,
    },
  },
};

const ctaEntranceVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: MOTION_EASING,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 24,
    },
  },
};

const metricMaskVariants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: MOTION_EASING,
    },
  },
};

export default function HomePage() {
  const whoWeAreRef = useRef(null);
  const heroContainerRef = useRef(null);
  const word1Ref = useRef(null);
  const word2Ref = useRef(null);
  const word3Ref = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const motionReduced = useReducedMotion();
  const shouldReduceMotion = Boolean(motionReduced || reducedMotion);

  const { scrollYProgress: whoWeAreScrollProgress } = useScroll({
    target: whoWeAreRef,
    offset: ["start end", "end start"],
  });

  const parallaxLeft = useTransform(
    whoWeAreScrollProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-16, 16]
  );
  const parallaxRight = useTransform(
    whoWeAreScrollProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [16, -16]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Sticky Scroll Driver: Sequential word reveal (0-100% of pinned scroll)
  useEffect(() => {
    if (reducedMotion) {
      [word1Ref, word2Ref, word3Ref].forEach((ref) => {
        if (ref.current) {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "none";
          if (ref.current.parentElement) ref.current.parentElement.style.overflow = "visible";
        }
      });
      return;
    }

    let ticking = false;
    const clamp = (val, min = 0, max = 1) => Math.min(max, Math.max(min, val));

    const updateHeroScroll = () => {
      if (!heroContainerRef.current) return;
      const container = heroContainerRef.current;
      const rect = container.getBoundingClientRect();
      const totalScroll = container.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentScroll = -rect.top;
      const progress = clamp(currentScroll / totalScroll, 0, 1);

      // Strictly non-overlapping sequential segments with settled landings
      const mapSegment = (val, start, end) => {
        if (val <= start) return 0;
        if (val >= end) return 1;
        const linear = (val - start) / (end - start);
        return linear * (2 - linear);
      };

      // Sequential word reveal (strictly one by one)
      // Word 1 (QUALITY): 0% -> 32%
      const pWord1 = mapSegment(progress, 0.00, 0.32);
      // Word 2 (EXACTLY): 34% -> 65% (strictly 0 until 34%, reaches 1.0 at 65%)
      const pWord2 = mapSegment(progress, 0.34, 0.65);
      // Word 3 (MEASURABLE): 67% -> 98% (strictly 0 until 67%, reaches 1.0 at 98%)
      const pWord3 = mapSegment(progress, 0.67, 0.98);

      const y1 = (1 - pWord1) * 36;
      const y2 = (1 - pWord2) * 36;
      const y3 = (1 - pWord3) * 36;

      if (word1Ref.current) {
        word1Ref.current.style.opacity = pWord1;
        word1Ref.current.style.transform = `translate3d(0, ${y1.toFixed(2)}px, 0)`;
        if (word1Ref.current.parentElement) {
          word1Ref.current.parentElement.style.overflow = pWord1 >= 0.98 ? "visible" : "hidden";
        }
      }
      if (word2Ref.current) {
        word2Ref.current.style.opacity = pWord2;
        word2Ref.current.style.transform = `translate3d(0, ${y2.toFixed(2)}px, 0)`;
        if (word2Ref.current.parentElement) {
          word2Ref.current.parentElement.style.overflow = pWord2 >= 0.98 ? "visible" : "hidden";
        }
      }
      if (word3Ref.current) {
        word3Ref.current.style.opacity = pWord3;
        word3Ref.current.style.transform = `translate3d(0, ${y3.toFixed(2)}px, 0)`;
        if (word3Ref.current.parentElement) {
          word3Ref.current.parentElement.style.overflow = pWord3 >= 0.98 ? "visible" : "hidden";
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateHeroScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    let unsubLenis = null;
    const attachLenis = (l) => {
      if (l && typeof l.on === "function") {
        unsubLenis = l.on("scroll", onScroll);
      }
    };

    if (window.lenis) {
      attachLenis(window.lenis);
    }
    const onLenisReady = (e) => {
      attachLenis(e.detail || window.lenis);
    };

    window.addEventListener("lenis:ready", onLenisReady);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateHeroScroll();

    return () => {
      if (typeof unsubLenis === "function") {
        unsubLenis();
      } else if (window.lenis && typeof window.lenis.off === "function") {
        window.lenis.off("scroll", onScroll);
      }
      window.removeEventListener("lenis:ready", onLenisReady);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion]);



  // Section 5: Services Bento (10 tiles)
  const servicesList = [
    {
      num: "01",
      title: "Web Development",
      slug: "web-development",
      desc: "Crafting visually stunning, responsive, and high-performance web experiences using cutting-edge modern technologies.",
      pills: ["React", "JavaScript", "Python"],
      icon: Globe,
    },
    {
      num: "02",
      title: "Mobile App Development",
      slug: "mobile-app-development",
      desc: "Building seamless native and cross-platform mobile apps for iOS and Android that captivate users and drive engagement.",
      pills: ["Java", "JavaScript", "Cloud"],
      icon: Smartphone,
    },
    {
      num: "03",
      title: "Cloud Application Development",
      slug: "cloud-application-development",
      desc: "Architecting resilient, elastic, and secure cloud-native software on AWS, Azure, and Google Cloud Platform.",
      pills: ["AWS", "Azure", "GCP", "Kubernetes"],
      icon: Cloud,
    },
    {
      num: "04",
      title: "DevOps",
      slug: "devops",
      desc: "Streamlining deployment workflows, infrastructure as code, and continuous delivery pipelines for agile teams.",
      pills: ["Jenkins", "Docker", "Kubernetes"],
      icon: Workflow,
    },
    {
      num: "05",
      title: "AI / ML Development",
      slug: "ai-ml-development",
      desc: "Leveraging deep learning, natural language processing, and automated predictive models to empower decision-making.",
      pills: ["TensorFlow", "PyTorch", "scikit-learn"],
      icon: Brain,
    },
    {
      num: "06",
      title: "Application Support",
      slug: "application-support",
      desc: "Delivering round-the-clock enterprise monitoring, incident resolution, performance tuning, and software maintenance.",
      pills: ["AWS", "Docker", "Monitoring"],
      icon: Headphones,
    },
    {
      num: "07",
      title: "Enterprise Software Development",
      slug: "enterprise-software-development",
      desc: "Engineering robust, scalable enterprise software systems tailored to complex organizational processes.",
      pills: ["Java", "Python", "PostgreSQL"],
      icon: Building,
    },
    {
      num: "08",
      title: "IoT (Internet of Things)",
      slug: "iot",
      desc: "Connecting smart devices, edge hardware, and sensor streams into unified analytics platforms.",
      pills: ["Python", "MQTT", "AWS"],
      icon: Cpu,
    },
    {
      num: "09",
      title: "Blockchain Development",
      slug: "blockchain-development",
      desc: "Developing decentralized ledgers, tamper-proof smart contracts, and cryptographic asset platforms.",
      pills: ["JavaScript", "Security", "Crypto"],
      icon: Lock,
    },
    {
      num: "10",
      title: "E-commerce Development",
      slug: "e-commerce-development",
      desc: "Building scalable online stores with high-converting checkouts, payment gateways, and inventory automation.",
      pills: ["React", "MongoDB", "PostgreSQL"],
      icon: ShoppingCart,
    },
  ];

  // Section 6: Platforms / Partners (3 tiles)
  const platformsData = [
    {
      num: "01",
      title: "AWS",
      desc: "Continuous improvement, staying up-to-date with AWS advancements, and understanding your clients' unique needs as can be seen will be essential in maintaining this claim.",
      badge: "Cloud Infrastructure",
    },
    {
      num: "02",
      title: "Salesforce",
      desc: "With a dedicated team of experienced professionals and a deep understanding of Salesforce's capabilities, As an IT company based in Pune, we are dedicated to delivering customized solutions that align with your specific business requirements. Furthermore, we offer both.",
      badge: "Enterprise CRM",
    },
    {
      num: "03",
      title: "AutomationEdge",
      desc: "We excel in delivering the finest automation services, leveraging the latest technologies and industry best practices to streamline your processes after that enhance operational efficiency.",
      badge: "Process Automation",
    },
  ];

  // Section 7: Technology Stack Groups (6 groups)
  const techGroups = [
    {
      title: "Robotic Process Automation (RPA) Tools",
      pills: ["Python", "Java", "JavaScript"],
    },
    {
      title: "Cloud Platforms",
      pills: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)"],
    },
    {
      title: "Machine Learning and AI",
      pills: ["TensorFlow", "PyTorch", "scikit-learn"],
    },
    {
      title: "Programming Languages",
      pills: ["Python", "Java", "JavaScript"],
    },
    {
      title: "Databases",
      pills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "DevOps Tools",
      pills: ["Jenkins", "Docker", "Kubernetes"],
    },
  ];

  const scrollToManifesto = () => {
    const el = document.getElementById("who-we-are") || document.getElementById("manifesto-stage");
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: 0, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <SEO
        title="Best IT Company in Pune | Trusted IT Services Provider - Leanqualities Solutions"
        description="Discover the leading IT company in Pune, offering cutting-edge solutions and expert services. Elevate your business with our tech expertise."
      />

      {/* Intro Curtain (first load only, gated by sessionStorage) */}
      <IntroCurtain />

      <main className="min-h-screen">
        {/* ═══════════════════════════════════════
            SECTION 1: HERO STAGE (PINNED STICKY WITH SCROLL-DRIVEN REVEAL + PARALLAX EXIT)
        ═══════════════════════════════════════ */}
        {/* ═══════════════════════════════════════
            SECTION 1: HERO STAGE (NORMAL SCROLL)
        ═══════════════════════════════════════ */}
        <div ref={heroContainerRef} className="relative h-[240svh]">
          <section
            className="sticky top-0 h-[100svh] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 px-6 sm:px-10 lg:px-16 bg-[#F7F7F7] text-[#393E46] overflow-hidden select-none"
            aria-label="Hero Stage"
          >
            {/* Background Layer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <HeroFluidBackground />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full flex-1 flex flex-col justify-between">
              {/* Editorial Copy: Stacked Left */}
              <div className="relative z-10 max-w-[1440px] w-full mx-auto pt-0 sm:pt-2 lg:pt-4 mb-auto">
                <div className="max-w-xl space-y-4 sm:space-y-6">
                  {/* Block 1: Positioning title */}
                  <div className="space-y-1">
                    <div className="overflow-hidden">
                      <p
                        style={{ color: "#393E46" }}
                        className="font-sans font-medium text-[17px] sm:text-[20px] lg:text-[22px] leading-[1.38] tracking-[-0.015em]"
                      >
                        Pioneering IT Services,
                      </p>
                    </div>
                    <div className="overflow-hidden">
                      <p
                        style={{ color: "#393E46" }}
                        className="font-sans font-medium text-[17px] sm:text-[20px] lg:text-[22px] leading-[1.38] tracking-[-0.015em]"
                      >
                        Strategic Technology Selection
                      </p>
                    </div>
                    <div className="pt-1.5 sm:pt-2">
                      <span
                        style={{ color: "#929AAB" }}
                        className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#393E46]/70 animate-pulse" />
                        EST. 2015 &middot; PUNE, INDIA
                      </span>
                    </div>
                  </div>

                  {/* Block 2: 3-line statement block */}
                  <div className="space-y-1 font-sans font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.7] tracking-[-0.01em]">
                    <div className="overflow-hidden">
                      <p style={{ color: "#393E46" }}>
                        Empowering clients to achieve unparalleled quality.
                      </p>
                    </div>
                    <div className="overflow-hidden">
                      <p style={{ color: "#393E46" }}>
                        Streamlining enterprise operations with precision.
                      </p>
                    </div>
                    <div className="overflow-hidden">
                      <p style={{ color: "#393E46" }}>
                        Partners in progress across the digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Area: Headline, Controls & Straight Line */}
              <div className="relative z-10 max-w-[1440px] w-full mx-auto -mt-3 sm:-mt-6 lg:-mt-10">
                {/* Words */}
                <div>
                  <h1
                    style={{
                      color: "#393E46",
                      fontFamily: '"Poiret One", sans-serif',
                      fontWeight: 400,
                    }}
                    className="tracking-[0.01em] text-[clamp(1.85rem,6.4vw,6.2rem)] select-none"
                  >
                    {/* Step 1: QUALITY (Top-Left) */}
                    <div className="leading-[0.88] overflow-hidden">
                      <span
                        ref={word1Ref}
                        className="inline-block"
                        style={{ opacity: 0, transform: "translate3d(0, 36px, 0)" }}
                      >
                        <EchoText
                          text="QUALITY"
                          mode="pointer"
                          echoes={8}
                          lag={0.22}
                          offset={22}
                          direction="up"
                          fade={0.7}
                          blur={2.5}
                          cursorRadius={280}
                          ease="ease-out"
                          color="#393E46"
                          tint="#929AAB"
                        />
                      </span>
                    </div>

                    {/* Step 2: EXACTLY (Middle, shifted right, stepping down with slight overlap) */}
                    <div className="leading-[0.88] -mt-1 sm:-mt-2 lg:-mt-3.5 pl-[14vw] sm:pl-[18vw] md:pl-[21vw] lg:pl-[24vw] xl:pl-[26vw] overflow-hidden">
                      <span
                        ref={word2Ref}
                        className="inline-block"
                        style={{ opacity: 0, transform: "translate3d(0, 36px, 0)" }}
                      >
                        <EchoText
                          text="EXACTLY"
                          mode="pointer"
                          echoes={8}
                          lag={0.22}
                          offset={22}
                          direction="up"
                          fade={0.7}
                          blur={2.5}
                          cursorRadius={280}
                          ease="ease-out"
                          color="#393E46"
                          tint="#929AAB"
                        />
                      </span>
                    </div>

                    {/* Step 3: MEASURABLE (Bottom-Right, shifted further right, lowest position) */}
                    <div className="leading-[0.88] -mt-1 sm:-mt-2 lg:-mt-3.5 pl-[28vw] sm:pl-[36vw] md:pl-[42vw] lg:pl-[47vw] xl:pl-[50vw] overflow-hidden">
                      <span
                        ref={word3Ref}
                        className="inline-block"
                        style={{ opacity: 0, transform: "translate3d(0, 36px, 0)" }}
                      >
                        <EchoText
                          text="MEASURABLE"
                          mode="pointer"
                          echoes={8}
                          lag={0.22}
                          offset={22}
                          direction="up"
                          fade={0.7}
                          blur={2.5}
                          cursorRadius={280}
                          ease="ease-out"
                          color="#393E46"
                          tint="#929AAB"
                        />
                      </span>
                    </div>
                  </h1>
                </div>

                {/* Buttons positioned vertically ABOVE the line (higher z-index) */}
                <div className="relative z-20 pt-4 sm:pt-6 pb-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#393E46] text-[#F7F7F7] font-mono text-[11px] uppercase tracking-[0.16em] hover:bg-black hover:shadow-md transition-all"
                    >
                      <span>Our Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/20 text-[#393E46] font-mono text-[11px] uppercase tracking-[0.14em] hover:border-black transition-colors"
                    >
                      <span>Contact Us</span>
                    </Link>
                  </div>

                  <button
                    type="button"
                    onClick={scrollToManifesto}
                    aria-label="Scroll to values manifesto"
                    className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-[#929AAB] hover:text-[#393E46] transition-colors cursor-pointer"
                  >
                    <span>Scroll Down</span>
                    <ChevronDown className="w-3.5 h-3.5 animate-bounce group-hover:text-[#393E46]" />
                  </button>
                </div>

                {/* Straight line sits BELOW buttons, near bottom of hero */}
                <div className="relative z-10 w-full pt-2 pb-1">
                  <svg
                    viewBox="0 0 1440 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-[3px] overflow-visible pointer-events-none block"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M 0 2 L 1440 2"
                      fill="none"
                      stroke="#111111"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      initial={reducedMotion ? false : { pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        filter: "drop-shadow(0 0 6px rgba(17, 17, 17, 0.35))",
                      }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ═══════════════════════════════════════
            SECTION 1: BRAND POSITIONING & STRATEGIC OVERVIEW (01 / WHO WE ARE)
            Blueprint: Replaces legacy "Improving Digital Solutions at Pune's Leading IT Firm"
        ═══════════════════════════════════════ */}
        <motion.section
          ref={whoWeAreRef}
          id="who-we-are"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionEntranceVariants}
          className="relative pt-8 sm:pt-12 pb-24 sm:pb-32 px-6 sm:px-10 lg:px-16 bg-[#F7F7F7] text-[#393E46] border-t border-[#EEEEEE] select-none overflow-hidden"
          aria-label="Brand Positioning and Strategic Overview"
        >
          <div className="max-w-[1440px] mx-auto">
            {/* Top Metadata Strip: Chapter Anchor + Operating Badge + Drawing Hairline */}
            <div className="relative flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 sm:mb-16">
              <motion.div variants={shouldReduceMotion ? undefined : metaTextVariants}>
                <ChapterAnchor chapter="01" title="WHO WE ARE" className="mb-0" />
              </motion.div>
              <motion.span
                variants={shouldReduceMotion ? undefined : metaTextVariants}
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-[#929AAB]"
              >
                <span className="relative flex items-center justify-center w-2 h-2">
                  <motion.span
                    className="absolute inset-0 rounded-full bg-[#393E46]"
                    animate={
                      shouldReduceMotion
                        ? { scale: 1, opacity: 0.4 }
                        : { scale: [1, 2.2], opacity: [0.5, 0] }
                    }
                    transition={
                      shouldReduceMotion
                        ? {}
                        : { duration: 1.8, repeat: Infinity, ease: "easeOut" }
                    }
                  />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-[#393E46]/80" />
                </span>
                EST. 2015 &middot; PUNE, INDIA
              </motion.span>

              {/* Drawing Hairline Bottom Border */}
              <motion.div
                variants={shouldReduceMotion ? undefined : hairlineBorderVariants}
                className="absolute bottom-0 left-0 right-0 h-px bg-[#EEEEEE] origin-left pointer-events-none"
              />
            </div>

            {/* Asymmetric 12-Column Editorial Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column (5 Cols): Display headline, sub-headline, CTA, metric badge */}
              <motion.div
                style={shouldReduceMotion ? undefined : { y: parallaxLeft }}
                className="lg:col-span-5"
              >
                <motion.div
                  variants={shouldReduceMotion ? undefined : columnStaggerVariants}
                  className="space-y-6"
                >
                  <div>
                    <motion.h2
                      variants={shouldReduceMotion ? undefined : headlineContainerVariants}
                      style={{
                        fontFamily: '"Poiret One", sans-serif',
                        fontWeight: 400,
                      }}
                      className="text-4xl sm:text-5xl lg:text-6xl text-[#393E46] leading-[1.04] tracking-tight uppercase"
                    >
                      <span className="block overflow-hidden">
                        <motion.span
                          variants={shouldReduceMotion ? undefined : headlineLineVariants}
                          className="inline-block"
                        >
                          Engineering Resilience.
                        </motion.span>
                      </span>
                      <span className="block overflow-hidden">
                        <motion.span
                          variants={shouldReduceMotion ? undefined : headlineLineVariants}
                          className="inline-block"
                        >
                          Eliminating
                        </motion.span>
                      </span>
                      <span className="block overflow-hidden">
                        <motion.span
                          variants={shouldReduceMotion ? undefined : headlineLineVariants}
                          className="inline-block"
                        >
                          Inefficiency.
                        </motion.span>
                      </span>
                    </motion.h2>
                    <motion.p
                      variants={shouldReduceMotion ? undefined : fadeRiseVariants}
                      className="font-sans text-sm sm:text-base text-[#393E46]/80 font-normal leading-relaxed mt-4"
                    >
                      Judicious technology selection tailored for enterprise scalability.
                    </motion.p>
                  </div>

                  <motion.div
                    variants={shouldReduceMotion ? undefined : ctaEntranceVariants}
                    className="pt-2"
                  >
                    <MotionLink
                      to="/about"
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                      transition={MOTION_SPRINGS.button}
                      className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#393E46] text-[#F7F7F7] font-mono text-xs uppercase tracking-[0.16em] hover:bg-[#393E46]/90 transition-colors shadow-sm"
                    >
                      <span>Our Story & Vision</span>
                      <motion.span
                        className="inline-flex items-center transition-transform duration-200 group-hover:translate-x-1"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.span>
                    </MotionLink>
                  </motion.div>

                  {/* Architectural Metric Badge */}
                  <motion.div
                    variants={shouldReduceMotion ? undefined : cardItemVariants}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { y: -5, boxShadow: "0 14px 28px -8px rgba(57, 62, 70, 0.09)" }
                    }
                    transition={MOTION_SPRINGS.card}
                    className="group pt-4"
                  >
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#EEEEEE]/40 border border-[#EEEEEE] transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#929AAB] group-hover:text-[#393E46] transition-colors duration-300">
                          Operating Inception
                        </span>
                        <div className="overflow-hidden">
                          <motion.span
                            variants={shouldReduceMotion ? undefined : metricMaskVariants}
                            className="inline-block font-mono text-xs text-[#393E46] font-bold"
                          >
                            2015
                          </motion.span>
                        </div>
                      </div>
                      <p className="font-sans text-xs text-[#393E46]/80 leading-relaxed">
                        <span className="inline-block overflow-hidden align-bottom">
                          <motion.span
                            variants={shouldReduceMotion ? undefined : metricMaskVariants}
                            className="inline-block font-semibold text-[#393E46]"
                          >
                            9+
                          </motion.span>
                        </span>{" "}
                        Years of enterprise IT consulting, software engineering, and strategic delivery.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Column (7 Cols): Editorial narrative & CAD architecture matrix box */}
              <motion.div
                style={shouldReduceMotion ? undefined : { y: parallaxRight }}
                className="lg:col-span-7"
              >
                <motion.div
                  variants={shouldReduceMotion ? undefined : columnStaggerVariants}
                  className="space-y-6"
                >
                  <motion.p
                    variants={shouldReduceMotion ? undefined : fadeRiseVariants}
                    className="font-sans text-base sm:text-lg text-[#393E46] font-normal leading-[1.75]"
                  >
                    Leanquality Solutions (India) Pvt. Ltd (LQSIPL) collaborates closely with enterprises, engineering software solutions that streamline operations with precision, minimize overhead, and conquer complex technical challenges. We stand at the forefront of digital engineering, delivering cutting-edge software platforms while eliminating operational inefficiencies.
                  </motion.p>

                  <motion.p
                    variants={shouldReduceMotion ? undefined : fadeRiseVariants}
                    className="font-sans text-sm sm:text-base text-[#393E46]/80 leading-[1.8]"
                  >
                    Since our inception in 2015 as an independent entity in Pune, we have evolved into a pioneering force in enterprise IT and strategic consulting. Our engineering practice spans cloud computing, distributed web architectures, enterprise automation, and mission-critical support — serving as long-term partners in progress.
                  </motion.p>

                  {/* CAD Architecture Specification Box */}
                  <motion.div
                    variants={shouldReduceMotion ? undefined : cardItemVariants}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { y: -5, boxShadow: "0 14px 28px -8px rgba(57, 62, 70, 0.09)" }
                    }
                    transition={MOTION_SPRINGS.card}
                    className="group pt-2"
                  >
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#EEEEEE]/40 border border-[#EEEEEE] shadow-sm transition-colors">
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EEEEEE]">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#393E46]" />
                          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#393E46] font-medium">
                            Architecture Matrix
                          </span>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#929AAB] group-hover:text-[#393E46] transition-colors duration-300">
                          Enterprise Tier
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                        <div className="space-y-1">
                          <span className="text-[10px] text-[#929AAB] group-hover:text-[#393E46] uppercase tracking-[0.18em] transition-colors duration-300">
                            Domain
                          </span>
                          <p className="text-[#393E46] font-medium">Cloud & Web</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] text-[#929AAB] group-hover:text-[#393E46] uppercase tracking-[0.18em] transition-colors duration-300">
                            Compliance
                          </span>
                          <p className="text-[#393E46] font-medium">Zero-Defect QA</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] text-[#929AAB] group-hover:text-[#393E46] uppercase tracking-[0.18em] transition-colors duration-300">
                            SLA Model
                          </span>
                          <p className="text-[#393E46] font-medium">24/7 Dedicated</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>


        {/* ═══════════════════════════════════════
            SECTION 3: THE FOUNDATION STEPPER (h-[220svh])
            DAQ Neural Core equivalent: sticky stage, vertical left rail fills origin-top
        ═══════════════════════════════════════ */}
        <StepperRail />

        {/* ═══════════════════════════════════════
            SECTION 4: FOCUS TILES (H2 "Our Focus In")
            Chapter 03 / FOCUS AREAS: 5 Bento capability tiles with zoom expansion
        ═══════════════════════════════════════ */}
        <FocusAreasBento />

        {/* ═══════════════════════════════════════
            SECTION 5: SERVICES BENTO GRID (10 tiles)
            Chapter 04 / SERVICES + H2 "leanquality Solutions Services"
        ═══════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#FAFAFA] text-[#0A0A0A] border-t border-black/10 select-none">
          <div className="max-w-6xl mx-auto">
            <ChapterAnchor chapter="04" title="SERVICES" light={false} className="mb-6" />

            <div className="mb-14 max-w-3xl">
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight">
                leanquality Solutions Services
              </h2>
              <div className="w-12 h-0.5 bg-black/20 my-4 rounded-full" />
              <p className="text-sm sm:text-base text-black/70 leading-relaxed font-sans">
                Our IT solution company proudly stands out as the best service provider in the industry. we are it company in pune after that we have meticulously cultivated this reputation through unwavering dedication to excellence, a commitment to innovation, and a relentless focus on our clients&apos; success.
              </p>
            </div>

            {/* 10 Capability Bento Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((srv) => {
                const Icon = srv.icon;
                return (
                  <Link
                    key={srv.slug}
                    to={`/services/${srv.slug}`}
                    className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-black/10 hover:border-black/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div>
                      {/* Top Row: Index + Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-xs text-black/60 uppercase tracking-[0.25em]">
                          {srv.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0A0A0A] group-hover:text-black/80 transition-colors mb-3">
                        {srv.title}
                      </h3>

                      {/* Exact one-line desc */}
                      <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-6 font-sans">
                        {srv.desc}
                      </p>
                    </div>

                    {/* Bottom: Tech Pills + Link arrow */}
                    <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {srv.pills.map((pill) => (
                          <TechPill key={pill} dark={false}>
                            {pill}
                          </TechPill>
                        ))}
                      </div>

                      <span className="font-mono text-xs text-[#0A0A0A] flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                        <span>Explore</span>
                        <span>→</span>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SECTION 6: PARTNERS STRIP (Why We Are Different)
            Chapter 05 / PLATFORMS: AWS, Salesforce, AutomationEdge
        ═══════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#FAFAFA] text-[#0A0A0A] border-t border-black/10 select-none">
          <div className="max-w-6xl mx-auto">
            <ChapterAnchor chapter="05" title="PLATFORMS" light={false} className="mb-6" />

            <div className="mb-14">
              <h3 className="font-heading text-3xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight">
                Why We Are Different
              </h3>
              <div className="w-12 h-0.5 bg-black/20 mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platformsData.map((plat) => (
                <div
                  key={plat.title}
                  className="p-8 rounded-3xl bg-white border border-black/10 hover:border-black/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-black/60">
                        {plat.num}
                      </span>
                      <TechPill dark={false}>{plat.badge}</TechPill>
                    </div>

                    <h4 className="font-heading text-2xl font-bold text-[#0A0A0A] mb-4">
                      {plat.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-sans">
                      {plat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/10">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/60">
                      Enterprise Tier Partner
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SECTION 7: TECHNOLOGY WE USED
            Chapter 06 / STACK: 6 groups with exact group labels
        ═══════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#FAFAFA] text-[#0A0A0A] border-t border-black/10 select-none">
          <div className="max-w-6xl mx-auto">
            <ChapterAnchor chapter="06" title="STACK" light={false} className="mb-6" />

            <div className="mb-14">
              <h3 className="font-heading text-3xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight">
                Technology We Used
              </h3>
              <div className="w-12 h-0.5 bg-black/20 mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techGroups.map((grp) => (
                <div
                  key={grp.title}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 hover:border-black/30 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <h4 className="font-heading font-bold text-base text-[#0A0A0A] mb-4">
                    {grp.title}
                  </h4>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {grp.pills.map((pill) => (
                      <TechPill key={pill} dark={false}>
                        {pill}
                      </TechPill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SECTION 8: COUNTERS STRIP (DAQ tabular style)
            Full-width monochrome light strip, hairline borders, tabular-nums
        ═══════════════════════════════════════ */}
        <CounterStrip
          bg="bg-[#FAFAFA]"
          dark={false}
          cadGrid={false}
          className="border-t border-black/10 select-none"
          stats={[
            { value: "500", suffix: "+", label: "Projects" },
            { value: "200", suffix: "+", label: "Happy Faces" },
            { value: "1.2", suffix: "M+", label: "Leads" },
          ]}
        />
      </main>
    </>
  );
}
