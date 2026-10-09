import React, { useEffect, useRef } from "react";

/**
 * HeroFluidBackground — Interactive 60fps Organic Fluid Wave Canvas
 * Faithfully reproduces the live-up.co.jp fluid wave gradient canvas:
 * - Pure alabaster / off-white base with gentle organic undulating wave ribbons
 * - Multi-layered harmonic bezier curves with soft translucent mist gradients
 * - Mouse parallax & inertia damping (0.04 lerp factor)
 * - Auto-pauses on visibility change / off-screen for peak 60fps efficiency
 */
export default function HeroFluidBackground({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Dimensions
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Mouse tracking with inertia damping
    const mouse = {
      x: width * 0.5,
      y: height * 0.4,
      targetX: width * 0.5,
      targetY: height * 0.4,
      vx: 0,
      vy: 0,
    };

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    handleResize();

    // IntersectionObserver to pause when hero is scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let time = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth inertia lerp
      const lerpSpeed = prefersReducedMotion ? 0.01 : 0.038;
      mouse.x += (mouse.targetX - mouse.x) * lerpSpeed;
      mouse.y += (mouse.targetY - mouse.y) * lerpSpeed;

      // Base background: pristine luminous alabaster (#F7F7F7)
      ctx.fillStyle = "#F7F7F7";
      ctx.fillRect(0, 0, width, height);

      // Subtle radial ambient light that follows mouse with high damping
      const ambientGrad = ctx.createRadialGradient(
        mouse.x * 0.6 + width * 0.2,
        mouse.y * 0.5 + height * 0.2,
        width * 0.05,
        mouse.x * 0.6 + width * 0.2,
        mouse.y * 0.5 + height * 0.2,
        width * 0.8
      );
      ambientGrad.addColorStop(0, "rgba(247, 247, 247, 0.95)");
      ambientGrad.addColorStop(0.5, "rgba(238, 238, 238, 0.6)");
      ambientGrad.addColorStop(1, "rgba(238, 238, 238, 0.2)");
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        time += 0.007;
      }

      const normMouseX = (mouse.x / width - 0.5) * 2; // -1 to 1
      const normMouseY = (mouse.y / height - 0.5) * 2; // -1 to 1

      // ── WAVE RIBBON 1: Primary organic undulating curve (top-left to mid-right) ──
      ctx.save();
      ctx.beginPath();
      // Start top-left
      const w1YStart = height * 0.12 + Math.sin(time * 0.7) * 25 + normMouseY * 30;
      ctx.moveTo(-50, -50);
      ctx.lineTo(width + 50, -50);
      ctx.lineTo(
        width + 50,
        height * 0.35 + Math.cos(time * 0.6) * 40 - normMouseY * 25
      );

      // Curved bottom edge of ribbon 1
      const cp1X = width * 0.65 + normMouseX * 50;
      const cp1Y = height * 0.68 + Math.sin(time * 0.8) * 35 + normMouseY * 40;
      const cp2X = width * 0.25 - normMouseX * 40;
      const cp2Y = height * 0.18 + Math.cos(time * 0.75) * 30;

      ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, -50, w1YStart);
      ctx.closePath();

      const grad1 = ctx.createLinearGradient(0, 0, width, height * 0.7);
      grad1.addColorStop(0, "rgba(238, 238, 238, 0.78)");
      grad1.addColorStop(0.35, "rgba(238, 238, 238, 0.45)");
      grad1.addColorStop(0.7, "rgba(247, 247, 247, 0.2)");
      grad1.addColorStop(1, "rgba(247, 247, 247, 0)");
      ctx.fillStyle = grad1;
      ctx.fill();
      ctx.restore();

      // ── WAVE RIBBON 2: Diagonal sweeping translucent wave ──
      ctx.save();
      ctx.beginPath();
      const w2YStart = height * 0.38 + Math.sin(time * 0.65 + 1.2) * 35 + normMouseY * 20;
      ctx.moveTo(-50, w2YStart);

      const cp3X = width * 0.3 + Math.sin(time * 0.5) * 40;
      const cp3Y = height * 0.72 + Math.cos(time * 0.7) * 30 + normMouseY * 35;
      const cp4X = width * 0.72 + Math.cos(time * 0.55) * 45;
      const cp4Y = height * 0.32 + Math.sin(time * 0.8) * 25 - normMouseY * 25;
      const w2YEnd = height * 0.55 + Math.cos(time * 0.6 + 0.8) * 30;

      ctx.bezierCurveTo(cp3X, cp3Y, cp4X, cp4Y, width + 50, w2YEnd);
      ctx.lineTo(width + 50, height + 50);
      ctx.lineTo(-50, height + 50);
      ctx.closePath();

      const grad2 = ctx.createLinearGradient(0, height * 0.3, width, height);
      grad2.addColorStop(0, "rgba(238, 238, 238, 0.7)");
      grad2.addColorStop(0.4, "rgba(238, 238, 238, 0.4)");
      grad2.addColorStop(0.85, "rgba(247, 247, 247, 0.15)");
      grad2.addColorStop(1, "rgba(247, 247, 247, 0)");
      ctx.fillStyle = grad2;
      ctx.fill();

      // Soft hairline crest highlight
      ctx.strokeStyle = "rgba(146, 154, 171, 0.25)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-50, w2YStart);
      ctx.bezierCurveTo(cp3X, cp3Y, cp4X, cp4Y, width + 50, w2YEnd);
      ctx.stroke();
      ctx.restore();

      // ── WAVE RIBBON 3: Soft ambient aura behind display typography ──
      ctx.save();
      ctx.beginPath();
      const cp5X = width * 0.45 + normMouseX * 35;
      const cp5Y = height * 0.82 + Math.sin(time * 0.5) * 25;
      const cp6X = width * 0.85;
      const cp6Y = height * 0.65 + Math.cos(time * 0.65) * 30;

      ctx.moveTo(-50, height * 0.7);
      ctx.bezierCurveTo(cp5X, cp5Y, cp6X, cp6Y, width + 50, height * 0.82);
      ctx.lineTo(width + 50, height + 50);
      ctx.lineTo(-50, height + 50);
      ctx.closePath();

      const grad3 = ctx.createLinearGradient(0, height * 0.6, width * 0.8, height);
      grad3.addColorStop(0, "rgba(238, 238, 238, 0.6)");
      grad3.addColorStop(0.5, "rgba(247, 247, 247, 0.3)");
      grad3.addColorStop(1, "rgba(247, 247, 247, 0)");
      ctx.fillStyle = grad3;
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      style={{
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
      }}
    />
  );
}
