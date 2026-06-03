import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/solutions", label: "Solutions" },
  { to: "/knowledge-share", label: "Knowledge Share" },
  { to: "/contact", label: "Contact Us" },
] as const;

const legalLinks = [
  { to: "/legal/privacy", label: "Privacy Policy" },
  { to: "/legal/popia", label: "POPIA Compliance Notice" },
  { to: "/legal/disclaimer", label: "Labour Law Disclaimer" },
  { to: "/legal/terms", label: "Terms of Use" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              BizConsult provides Industrial Relations Management services that
              protect employers, ensure compliance, and build stable, productive
              workplaces across South Africa.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
              Member · AHI Employers' Organisation
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/80 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Legal
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {legalLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/80 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <span>+27 (0) 00 000 0000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <a href="mailto:info@bizconsult.co.za" className="hover:text-white">
                  info@bizconsult.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <span>Office Park, Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 BizConsult. All rights reserved. · Reg No: 2010/037617/23</p>
          <p>Industrial Relations Management for Employers</p>
        </div>
      </div>
    </footer>
  );
}
