import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center" aria-label="BizConsult home">
      <img
        src="/BizConsultLogo.png"
        alt="BizConsult"
        className={`h-20 w-auto object-contain ${light ? "max-w-[220px]" : "max-w-[200px]"}`}
      />
      <span className="sr-only">BizConsult Industrial Relations</span>
    </Link>
  );
}
