import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

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

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75"
          : "border-transparent bg-background"
      }`}
    >
      <div className="hidden border-b border-border/60 bg-surface md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium tracking-wide">Trusted Industrial Relations partner to employers since 2008</span>
          <a href="tel:+27000000000" className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Phone className="h-3.5 w-3.5" /> +27 (0) 00 000 0000
          </a>
        </div>
      </div>
      <div className="container-page flex h-18 items-center justify-between py-4">
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
        <div className="hidden lg:block">
          <Button asChild variant="destructive" size="lg" className="rounded-sm font-semibold tracking-wide">
            <Link to="/contact">Request a FREE Consultation</Link>
          </Button>
        </div>
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
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-surface hover:text-primary"
                activeProps={{ className: "text-primary bg-surface" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="destructive" size="lg" className="mt-3 rounded-sm">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Request a FREE Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
