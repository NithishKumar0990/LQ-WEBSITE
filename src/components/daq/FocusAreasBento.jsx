// File: src/components/daq/FocusAreasBento.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import { Cpu, Radio, Brain, Layers, Database, ArrowUpRight } from "lucide-react";
import ChapterAnchor from "./ChapterAnchor";
import TechPill from "./TechPill";

const CARD_IMAGES = [null, null, null, null, null];

// ── CIRCULAR ROTATION SETTINGS ───────────────────────────────
// Grid slots: [0]=HERO(2x2), [1]=top-mid, [2]=top-right, [3]=bottom-mid, [4]=bottom-right
// Card at slot CYCLE[i] moves to slot CYCLE[i+1] → circular flow:
// HERO → bottom-mid → bottom-right → top-right → top-mid → back to HERO
const CYCLE = [0, 3, 4, 2, 1];

// Auto-rotate: 2000 = every 2s while section is in view | null = only on scroll-into-view
const AUTO_ROTATE_MS = 2000;

// ONE spring shared by ALL cards → ellam same neram move aagum (no one-by-one)
const LIQUID_SPRING = { type: "spring", stiffness: 260, damping: 28, mass: 0.9 };

const INITIAL_FOCUS_AREAS = [
  {
    index: "01",
    title: "IOT",
    desc: "Connect devices, gather real-time telemetry, and automate workflows with smart edge computing.",
    icon: Cpu,
    tags: ["Sensors", "Telemetry", "MQTT"],
    href: "/services/iot",
  },
  {
    index: "02",
    title: "5G",
    desc: "Ultra-low latency architectures and high-throughput networking for modern telecom infrastructure.",
    icon: Radio,
    tags: ["Telecom", "Edge", "Low Latency"],
    href: "/services/cloud-application-development",
  },
  {
    index: "03",
    title: "AI/ML",
    desc: "Transform enterprise data with predictive algorithms, machine learning models, and NLP systems.",
    icon: Brain,
    tags: ["Machine Learning", "Neural Nets", "NLP"],
    href: "/services/ai-ml-development",
  },
  {
    index: "04",
    title: "BLOCKCHAIN",
    desc: "Decentralized applications, cryptographic smart contracts, and tamper-proof ledger architectures.",
    icon: Layers,
    tags: ["Smart Contracts", "DApps", "Security"],
    href: "/services/blockchain-development",
  },
  {
    index: "05",
    title: "DATA-SCIENCE",
    desc: "Advanced statistical modeling, pattern discovery, and predictive intelligence dashboards.",
    icon: Database,
    tags: ["Analytics", "Big Data", "Predictive"],
    href: "/services/enterprise-software-development",
  },
];

export default function FocusAreasBento() {
  const [items, setItems] = useState(INITIAL_FOCUS_AREAS);
  const [activeId, setActiveId] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const firstEntryDone = useRef(false);
  const activeIdRef = useRef(null);
  activeIdRef.current = activeId;

  const activeItem = items.find((item) => item.index === activeId);

  // ── CIRCULAR ROTATION ENGINE ────────────────────────────────
  // Ovvoru card-um CYCLE path-la adutha slot-ku move aagum.
  // layoutId animation-ala card smooth-a adjacent slot-ku slide aagum → circle effect.
  const rotate = () => {
    setItems((prev) => {
      const arr = new Array(prev.length);
      CYCLE.forEach((slot, i) => {
        arr[CYCLE[(i + 1) % CYCLE.length]] = prev[slot];
      });
      return arr;
    });
  };

  // Trigger 1: section view-ku vanthudhum bothu (every entry)
  useEffect(() => {
    if (shouldReduceMotion) return;

    if (isInView) {
      if (activeIdRef.current) return; // modal open-a irundha skip
      const isFirst = !firstEntryDone.current;
      firstEntryDone.current = true;
      const t = setTimeout(rotate, isFirst ? 1100 : 450);
      return () => clearTimeout(t);
    }
  }, [isInView, shouldReduceMotion]);

  // Trigger 2 (optional): AUTO_ROTATE_MS set panna, view-la irukum bothu auto-loop
  useEffect(() => {
    if (!AUTO_ROTATE_MS || shouldReduceMotion || !isInView || activeId) return;
    const id = setInterval(rotate, AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [isInView, activeId, shouldReduceMotion]);

  // ── Modal: Escape ───────────────────────────────────────────
  useEffect(() => {
    if (!activeId) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeId]);

  // ── Modal: scroll lock + lenis ──────────────────────────────
  useEffect(() => {
    if (activeId) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      if (window.lenis && typeof window.lenis.stop === "function") {
        window.lenis.stop();
      }
      return () => {
        document.body.style.overflow = originalOverflow;
        if (window.lenis && typeof window.lenis.start === "function") {
          window.lenis.start();
        }
      };
    }
  }, [activeId]);

  const modalTransition = shouldReduceMotion ? { duration: 0 } : LIQUID_SPRING;

  // Entrance (one time): wrapper fade+rise — content-la NO variants (blank bug impossible)
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const contentChoreographyVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: shouldReduceMotion ? 0 : 0.2, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const contentChoreographySecondaryVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: shouldReduceMotion ? 0 : 0.28, duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="focus-areas"
      className="pt-2 sm:pt-4 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-12 bg-[#FAFAFA] text-[#0A0A0A] border-t border-black/10 select-none"
      aria-label="Focus Areas"
    >
      <div className="max-w-6xl mx-auto">
        <ChapterAnchor chapter="03" title="FOCUS AREAS" light={false} className="mb-6" />

        <div className="mb-8">
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight">
            Our Focus In
          </h2>
          <div className="w-12 h-0.5 bg-black/20 mt-3 rounded-full" />
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr"
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            const originalIndex = parseInt(item.index, 10) - 1;
            const img = CARD_IMAGES[originalIndex];
            const isHero = idx === 0;
            const isExpanded = activeId === item.index;

            return (
              <motion.div
                key={item.index}
                variants={gridItemVariants}
                className={
                  isHero
                    ? "col-span-2 md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-[48svh]"
                    : "col-span-1 md:col-span-1 md:row-span-1 min-h-[190px] md:min-h-[23svh]"
                }
              >
                {!isExpanded ? (
                  <motion.div
                    layoutId={`focus-card-${item.index}`}
                    transition={modalTransition}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : { scale: 0.98, transition: { duration: 0.25, ease: "easeOut" } }
                    }
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95, transition: { duration: 0.15 } }}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveId(item.index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveId(item.index);
                      }
                    }}
                    className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-3xl bg-white border border-black/10 hover:border-black/35 hover:shadow-xl transition-[border-color,box-shadow] duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black h-full w-full text-left overflow-hidden"
                  >
                    {/* PLAIN content — no motion variants → content eppovum visible */}
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-black/60">
                            {item.index}
                          </span>
                          <div
                            className={`rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors ${
                              isHero ? "w-12 h-12" : "w-10 h-10"
                            }`}
                          >
                            {img ? (
                              <img
                                src={img}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-2xl"
                              />
                            ) : (
                              <Icon className={isHero ? "w-6 h-6" : "w-5 h-5"} />
                            )}
                          </div>
                        </div>

                        <h3
                          className={`font-heading font-bold text-[#0A0A0A] tracking-tight group-hover:text-black/80 transition-colors ${
                            isHero ? "text-2xl sm:text-4xl mb-3" : "text-lg sm:text-xl mb-2"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`text-black/70 leading-relaxed font-sans ${
                            isHero
                              ? "text-sm sm:text-base line-clamp-3 mb-6"
                              : "text-xs sm:text-sm line-clamp-2 mb-4"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.slice(0, isHero ? 3 : 2).map((tag) => (
                            <TechPill key={tag} dark={false}>
                              {tag}
                            </TechPill>
                          ))}
                        </div>

                        <span className="font-mono text-[11px] uppercase tracking-wider text-black/40 group-hover:text-black transition-colors shrink-0">
                          Expand ↗
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full w-full rounded-3xl opacity-0 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Expanded Modal View */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {activeId && activeItem && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                  onClick={() => setActiveId(null)}
                  className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                  aria-hidden="true"
                />

                <motion.div
                  layoutId={`focus-card-${activeItem.index}`}
                  transition={modalTransition}
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-10 w-full max-w-2xl bg-white text-[#0A0A0A] rounded-3xl p-6 sm:p-10 shadow-2xl border border-black/15 overflow-hidden flex flex-col justify-between max-h-[90vh] overflow-y-auto"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={`dialog-title-${activeItem.index}`}
                >
                  <motion.button
                    variants={contentChoreographyVariants}
                    initial="hidden"
                    animate="visible"
                    type="button"
                    onClick={() => setActiveId(null)}
                    aria-label="Close dialog"
                    className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 flex items-center justify-center text-black text-xl font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black z-20"
                  >
                    ×
                  </motion.button>

                  <div>
                    <motion.div
                      variants={contentChoreographyVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center gap-4 mb-6"
                    >
                      <span className="font-mono text-sm font-semibold uppercase tracking-[0.25em] text-black/60">
                        {activeItem.index} / 0{items.length}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-black">
                        {CARD_IMAGES[parseInt(activeItem.index, 10) - 1] ? (
                          <img
                            src={CARD_IMAGES[parseInt(activeItem.index, 10) - 1]}
                            alt={activeItem.title}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        ) : (
                          <activeItem.icon className="w-6 h-6" />
                        )}
                      </div>
                    </motion.div>

                    <h3
                      id={`dialog-title-${activeItem.index}`}
                      className="font-heading text-3xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight mb-4"
                    >
                      {activeItem.title}
                    </h3>

                    <motion.p
                      variants={contentChoreographyVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-base sm:text-lg text-black/75 leading-relaxed font-sans mb-8"
                    >
                      {activeItem.desc}
                    </motion.p>
                  </div>

                  <motion.div
                    variants={contentChoreographySecondaryVariants}
                    initial="hidden"
                    animate="visible"
                    className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4"
                  >
                    <div className="flex flex-wrap gap-2">
                      {activeItem.tags.map((tag) => (
                        <TechPill key={tag} dark={false}>
                          {tag}
                        </TechPill>
                      ))}
                    </div>

                    <Link
                      to={activeItem.href}
                      onClick={() => setActiveId(null)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-mono font-medium uppercase tracking-wider hover:bg-black/85 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                    >
                      <span>Explore Service</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}