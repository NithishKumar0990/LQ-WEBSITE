import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ChapterAnchor from "./ChapterAnchor";

/**
 * Section 3: The Foundation Stepper — Option 3: Natural Spaced Scroll
 * Header: Pins dynamically at top: navbarHeight right below the fixed navbar
 * Left: Vertically scrolling 6 options with individual breathing room (min-h-[55vh]),
 *       scroll-linked exit zoom-out [1, 0.85] and fade [1, 0]
 * Right: Sticky image card beside the scrolling options
 */

const STAGE_IMAGES = [null, null, null, null, null, null];
// paste image URLs here — index 0 = stage 01, etc.

export function ScrollStageItem({ stage, index, onInView }) {
  const itemRef = useRef(null);

  // Trigger from actual reading position (centered ~50%) as it moves up towards top (20%)
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["center 50%", "end 20%"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.82], { clamp: true });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88], { clamp: true });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0], { clamp: true });

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onInView(index);
        }
      },
      {
        rootMargin: "-25% 0px -25% 0px",
        threshold: 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index, onInView]);

  return (
    <motion.div
      ref={itemRef}
      style={{ scale, scaleX, opacity }}
      className="origin-left will-change-transform flex flex-col justify-center min-h-[55vh] py-8 sm:py-12 pr-6 lg:pr-12"
    >
      <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] mb-3 tracking-tight">
        {stage.title}
      </h3>

      <p className="text-sm sm:text-base lg:text-lg text-black/70 leading-relaxed max-w-lg">
        {stage.desc}
      </p>
    </motion.div>
  );
}

export default function StepperRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(80);
  const [headerHeight, setHeaderHeight] = useState(130);
  const headerRef = useRef(null);

  const handleInView = useCallback((idx) => {
    setActiveIndex(idx);
  }, []);

  // Measure dynamic navbar and pinned header heights
  useEffect(() => {
    const nav = document.querySelector("header");
    const measure = () => {
      if (nav) setNavbarHeight(nav.offsetHeight);
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };

    measure();

    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => measure());
      if (nav) ro.observe(nav);
      if (headerRef.current) ro.observe(headerRef.current);
    }

    window.addEventListener("resize", measure);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const stages = [
    {
      num: "01",
      title: "Expertise and Experience",
      desc: "If you are seeking expertise and experience, than we boast a team of seasoned professionals with years of experience in the IT and software development field. As a result our experts have successfully tackled diverse challenges, ensuring that your project is in capable hands.",
    },
    {
      num: "02",
      title: "Tailored Solutions",
      desc: "Tailored Solutions neither understands the problem nor provides effective solutions. We understand that one size does not fit all.During we take the time to understand your unique needs and goals, .in detail creating customized software solutions that align perfectly with your business objectives.",
    },
    {
      num: "03",
      title: "Cutting-Edge Technology",
      desc: "Cutting-edge technology not only enhances communication but also revolutionizes industries.Our commitment to staying ahead of the technology curve means you'll always benefit from the latest advancements in software development. We leverage cutting-edge tools and methodologies to deliver solutions that are not just functional but also future-proof",
    },
    {
      num: "04",
      title: "Quality Assurance",
      desc: "Quality is non-negotiable for us.even if rigorous testing and quality assurance procedures are embedded in every phase of our software development process, for that reason ensuring that the final product is robust, reliable, and secure.",
    },
    {
      num: "05",
      title: "Timely Delivery",
      desc: "Timely delivery both enhances customer satisfaction and boosts business reputation.We understand the importance of time in the business world. We work diligently to meet deadlines without compromising on quality, ensuring that your project is delivered on time and within budget.",
    },
    {
      num: "06",
      title: "Transparent Communication",
      desc: "Transparent communication no sooner begins than misunderstandings start to dissolve.We are a it company in pune believe in open and transparent communication. You will have direct access to our team throughout the project, as well as keeping you informed and involved every step of the way.",
    },
  ];

  return (
    <section
      id="why-we-lead"
      className="relative bg-[#FAFAFA] text-[#0A0A0A] border-t border-black/10 select-none"
      aria-label="Why We Lead"
    >
      {/* PINNED HEADER: Locks right below navbar when top separation line touches navbar bottom */}
      <div
        ref={headerRef}
        className="sticky z-20 bg-[#FAFAFA]"
        style={{ top: `${navbarHeight}px` }}
      >
        <div className="pt-4 sm:pt-6 pb-3 sm:pb-4 px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto w-full">
            <ChapterAnchor chapter="02" title="WHY WE LEAD" light={false} className="mb-1.5" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0A0A0A] leading-tight mb-2 tracking-tight font-heading">
              Improving Digital Solutions at Pune's Leading IT Firm
            </h2>
            <p className="max-w-3xl text-xs sm:text-sm text-black/70 leading-relaxed">
              We are continuously exploring the frontiers of technology, accordingly staying ahead of industry trends, and harnessing the latest tools and methodologies. being that this forward-thinking approach allows us to offer cutting-edge solutions that drive efficiency, enhance security, and boost productivity.
            </p>
          </div>
        </div>
      </div>

      {/* NATURAL VERTICAL SCROLL SPLIT LAYOUT */}
      <div className="relative flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 items-start">
        {/* Left: Vertically Scrolling Text with ScrollStageItem (Generous Breathing Room) */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {stages.map((s, i) => (
            <ScrollStageItem
              key={s.num || i}
              stage={s}
              index={i}
              onInView={handleInView}
            />
          ))}
        </div>

        {/* Right: Sticky Image Container (Locks alongside scrolling options below pinned header) */}
        <div
          className="hidden lg:flex w-1/2 sticky self-start items-center justify-center p-2 sm:p-4 z-10"
          style={{ top: `${navbarHeight + headerHeight + 12}px` }}
        >
          <div className="relative w-full max-w-md aspect-[4/3] max-h-[46vh] rounded-3xl overflow-hidden border border-black/10 bg-white shadow-xl shadow-black/5">
            {stages.map((s, i) => {
              const img = STAGE_IMAGES[i];
              const isActive = i === activeIndex;
              return (
                <div
                  key={s.num}
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    isActive
                      ? "opacity-100 translate-y-0 scale-100"
                      : i < activeIndex
                      ? "opacity-0 -translate-y-8 scale-95 pointer-events-none"
                      : "opacity-0 translate-y-8 scale-95 pointer-events-none"
                  }`}
                >
                  {img ? (
                    <img
                      src={img}
                      alt={s.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    /* Fallback panel */
                    <div className="w-full h-full relative bg-gradient-to-br from-black/[0.04] via-black/[0.015] to-transparent bg-white">
                      <span className="absolute -bottom-6 -right-2 font-heading font-bold text-[7rem] sm:text-[10rem] leading-none text-black/[0.05] select-none">
                        {s.num}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
                          {s.title}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Top-left chip */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full border border-black/15 bg-white/70 backdrop-blur-md shadow-xs">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-[#0A0A0A] font-medium">
                      {s.num} / 0{stages.length}
                    </span>
                  </div>
                  {/* Bottom subtle gradient fade */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/[0.08] to-transparent pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
