import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis = null;
    let rfId = null;

    const initLenis = () => {
      if (mediaQuery.matches) {
        if (lenis) {
          lenis.destroy();
          lenis = null;
          window.lenis = null;
        }
        return;
      }

      if (lenis) return;

      lenis = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 1,
        syncTouch: false,
        touchMultiplier: 1.5,
        autoResize: true,
        anchors: true,
        respectReducedMotion: true,
      });

      window.lenis = lenis;
      window.dispatchEvent(new CustomEvent("lenis:ready", { detail: lenis }));

      function raf(time) {
        if (lenis) {
          lenis.raf(time);
        }
        rfId = requestAnimationFrame(raf);
      }
      rfId = requestAnimationFrame(raf);
    };

    initLenis();

    const handleMotionChange = () => {
      if (rfId) cancelAnimationFrame(rfId);
      initLenis();
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    // Smooth-scroll internal anchor links through Lenis
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      try {
        const target = document.querySelector(href);
        if (target && lenis) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: 0, duration: 1.2 });
        }
      } catch (err) {
        // Ignore invalid selectors
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      if (rfId) cancelAnimationFrame(rfId);
      mediaQuery.removeEventListener("change", handleMotionChange);
      document.removeEventListener("click", handleAnchorClick);
      if (lenis) {
        lenis.destroy();
        lenis = null;
        window.lenis = null;
      }
    };
  }, []);

  return null;
}
