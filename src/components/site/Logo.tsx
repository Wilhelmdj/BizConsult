import { Link } from "@tanstack/react-router";

export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center" aria-label="BizConsult home">
      <img
        src="/BizConsultLogo.png"
        alt="BizConsult"
        className={`${compact ? "h-12 max-w-[150px]" : light ? "h-20 max-w-[220px]" : "h-20 max-w-[200px]"} w-auto object-contain`}
      />
      <span className="sr-only">BizConsult Industrial Relations</span>
    </Link>
  );
}
