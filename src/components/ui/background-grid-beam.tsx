import React from "react";
import { cn } from "@/lib/utils";

type GridBeamProps = {
  children: React.ReactNode;
  className?: string;
};

const beams = [
  { top: "8%", left: "4%", delay: 0, duration: 14, opacity: 0.78, rotate: -8, scale: 1 },
  { top: "18%", left: "62%", delay: 2.5, duration: 16, opacity: 0.7, rotate: 11, scale: 0.92 },
  { top: "34%", left: "18%", delay: 4, duration: 18, opacity: 0.62, rotate: 6, scale: 0.84 },
  { top: "42%", left: "74%", delay: 1.25, duration: 15, opacity: 0.76, rotate: -13, scale: 0.96 },
  { top: "58%", left: "30%", delay: 5, duration: 17, opacity: 0.68, rotate: 9, scale: 0.88 },
  { top: "66%", left: "84%", delay: 3.25, duration: 19, opacity: 0.58, rotate: -7, scale: 0.8 },
  { top: "79%", left: "10%", delay: 6, duration: 20, opacity: 0.64, rotate: 14, scale: 0.9 },
  { top: "86%", left: "56%", delay: 1.75, duration: 18, opacity: 0.72, rotate: -10, scale: 0.86 },
] as const;

export function GridBeam({ children, className }: GridBeamProps) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-[#03040a]", className)}>
      <div className="absolute inset-0 opacity-85 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.09),transparent_28%),radial-gradient(circle_at_76%_28%,rgba(51,71,254,0.24),transparent_30%),radial-gradient(circle_at_52%_78%,rgba(255,255,255,0.06),transparent_25%)] opacity-90" />
      <div className="absolute inset-0 overflow-hidden">
        {beams.map((beam) => (
          <GridBeamMark
            key={`${beam.top}-${beam.left}`}
            top={beam.top}
            left={beam.left}
            delay={beam.delay}
            duration={beam.duration}
            opacity={beam.opacity}
            rotate={beam.rotate}
            scale={beam.scale}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-transparent to-black/70" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

type GridBeamMarkProps = {
  top: string;
  left: string;
  delay: number;
  duration: number;
  opacity: number;
  rotate: number;
  scale: number;
};

function GridBeamMark({ top, left, delay, duration, opacity, rotate, scale }: GridBeamMarkProps) {
  const gradientId = React.useId();
  const style: React.CSSProperties & Record<string, string | number> = {
    top,
    left,
    opacity,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    ["--beam-rotate"]: `${rotate}deg`,
    ["--beam-scale"]: String(scale),
    ["--beam-shift-x"]: `${rotate > 0 ? 12 : -12}px`,
    ["--beam-shift-y"]: `${rotate > 0 ? -10 : 10}px`,
  };
  return (
    <div
      className="beam-mark absolute pointer-events-none"
      style={style}
    >
      <svg width="168" height="72" viewBox="0 0 168 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_18px_rgba(255,255,255,0.18)]">
        <path
          d="M35 .5h34M0 .5h35m31 35h35m-1 0h35m-1 35h35M66.5 36V0m65 72V36"
          stroke={`url(#${gradientId})`}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop stopColor="#18CCFC" stopOpacity="0" />
            <stop stopColor="#F8FAFC" />
            <stop offset="0.36" stopColor="#3347fe" />
            <stop offset="0.72" stopColor="#7c8cff" />
            <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
