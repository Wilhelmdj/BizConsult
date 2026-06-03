import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaImg from "@/assets/cta-building.jpg";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src={ctaImg}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>
      <div className="container-page relative py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="eyebrow-light mb-5">
              <span className="rule-accent" /> Get In Touch
            </div>
            <h2 className="text-balance font-serif text-3xl leading-tight text-white md:text-5xl">
              Need Professional Industrial Relations Support?
            </h2>
            <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">
              Protect your business, maintain compliance, and maintain workplace
              stability with BizConsult. Speak to a senior IR consultant today.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Button asChild variant="destructive" size="lg" className="h-12 rounded-sm px-6 text-sm font-semibold">
              <Link to="/contact">
                Request a FREE Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-xs uppercase tracking-[0.18em] text-white/55">
              No obligation · Confidential
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
