import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="BizConsult home">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-sm font-serif text-base font-semibold ${
          light ? "bg-white text-primary" : "bg-primary text-primary-foreground"
        }`}
      >
        B
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-lg font-semibold tracking-tight ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          BizConsult
        </span>
        <span
          className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] ${
            light ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          Industrial Relations
        </span>
      </span>
    </Link>
  );
}
