import React, { useState, useEffect, useRef } from "react";

export default function Counter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
}) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic formula
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOutProgress * end;
            setCount(currentVal);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    const el = counterRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [end, duration]);

  const displayValue =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString();

  return (
    <span ref={counterRef} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
