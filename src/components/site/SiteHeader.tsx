import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/solutions", label: "Solutions" },
  { to: "/knowledge-share", label: "Knowledge Share" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75"
          : "border-transparent bg-background"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between py-4">
        <Logo />
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-background/35 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="mx-4 mt-20 rounded-2xl border border-border/80 bg-background/95 p-2 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 py-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Navigate
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-surface hover:text-primary"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-col gap-1 py-2">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-primary"
                  activeProps={{ className: "text-primary bg-surface" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
