import React, { forwardRef } from "react";

const COLOR_SCHEMES = {
  charcoal: {
    core: "via-[#393E46]/90",
    glow1: "via-[#929AAB]",
    glow2: "via-[#929AAB]/60",
    glow3: "via-[#393E46]/30",
  },
  slate: {
    core: "via-[#393E46]/80",
    glow1: "via-[#929AAB]/80",
    glow2: "via-[#EEEEEE]",
    glow3: "via-[#929AAB]/25",
  },
  mono: {
    core: "via-[#393E46]/85",
    glow1: "via-[#929AAB]/70",
    glow2: "via-[#929AAB]/40",
    glow3: "via-[#393E46]/20",
  },
};

const GlowLine = forwardRef(function GlowLine(
  {
    orientation = "horizontal",
    color = "charcoal",
    position = "relative",
    className = "",
    style = {},
    ...props
  },
  ref
) {
  const scheme = COLOR_SCHEMES[color] || COLOR_SCHEMES.charcoal;
  const isHorizontal = orientation === "horizontal";

  if (isHorizontal) {
    return (
      <div
        ref={ref}
        style={style}
        className={`${position} w-full h-px pointer-events-none select-none ${className}`}
        {...props}
      >
        {/* Soft Ambient Halo */}
        <div
          className={`absolute inset-x-0 -top-1.5 h-3 bg-gradient-to-r from-transparent ${scheme.glow3} to-transparent blur-md opacity-60 pointer-events-none`}
        />
        {/* Mid Glow Layer */}
        <div
          className={`absolute inset-x-0 -top-0.5 h-1.5 bg-gradient-to-r from-transparent ${scheme.glow2} to-transparent blur-sm opacity-70 pointer-events-none`}
        />
        {/* Crisp Inner Spread */}
        <div
          className={`absolute inset-x-0 -top-[0.5px] h-1 bg-gradient-to-r from-transparent ${scheme.glow1} to-transparent blur-[1px] opacity-80 pointer-events-none`}
        />
        {/* Core Ink Line */}
        <div
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${scheme.core} to-transparent pointer-events-none`}
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={style}
      className={`${position} h-full w-px pointer-events-none select-none ${className}`}
      {...props}
    >
      <div
        className={`absolute inset-y-0 -left-1.5 w-3 bg-gradient-to-b from-transparent ${scheme.glow3} to-transparent blur-md opacity-60 pointer-events-none`}
      />
      <div
        className={`absolute inset-y-0 -left-0.5 w-1.5 bg-gradient-to-b from-transparent ${scheme.glow2} to-transparent blur-sm opacity-70 pointer-events-none`}
      />
      <div
        className={`absolute inset-y-0 -left-[0.5px] w-1 bg-gradient-to-b from-transparent ${scheme.glow1} to-transparent blur-[1px] opacity-80 pointer-events-none`}
      />
      <div
        className={`absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent ${scheme.core} to-transparent pointer-events-none`}
      />
    </div>
  );
});

export default GlowLine;
