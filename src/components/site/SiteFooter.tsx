import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SocialTooltip, type SocialItem } from "@/components/ui/social-media";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

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

const socialLinks: SocialItem[] = [
  {
    href: "https://www.facebook.com/people/BizConsult/100069665048222/?rdid=IzYEwL8oSr6thZ1N&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CG4RUmNcp%2F",
    ariaLabel: "Facebook",
    tooltip: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.instagram.com/BizConsult_solutions",
    ariaLabel: "Instagram",
    tooltip: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/company/bizconsultsa/?viewAsMember=true",
    ariaLabel: "LinkedIn",
    tooltip: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://wa.me/27562505000",
    ariaLabel: "WhatsApp",
    tooltip: "WhatsApp",
    icon: MessageCircle,
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <SocialTooltip
              items={socialLinks}
              className="mt-5 justify-start"
            />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/70">
              BizConsult provides Industrial Relations Management services that
              protect employers, ensure compliance, and build stable, productive
              workplaces across South Africa.
            </p>
            <img
              src="/AHI.png"
              alt="AHI Employers' Organisation member"
              className="mt-6 h-16 w-auto max-w-full object-contain"
            />
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
                <a href="tel:+27562505000" className="hover:text-white">056 250 5000</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <a href="mailto:admin@bizconsult.co.za" className="hover:text-white">
                  admin@bizconsult.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=64%20Orange%20St%2C%20Central%2C%20Kroonstad%2C%209499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  64 Orange St, Central, Kroonstad, 9499
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 BizConsult. All rights reserved. · Reg No: 2010/037617/23</p>
          <p>Industrial Relations Management for Employers</p>
        </div>
      </div>
    </footer>
  );
}
