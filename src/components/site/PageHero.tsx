import type { ReactNode } from "react";
import { StarsBackground } from "@/components/ui/stars-background";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black text-primary-foreground">
      <StarsBackground
        starDensity={0.00018}
        minTwinkleSpeed={0.6}
        maxTwinkleSpeed={1.4}
        className="z-0"
      />
      <div className="container-page relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="eyebrow-light mb-5">
              <span className="rule-accent" />
              {eyebrow}
            </div>
          )}
          <h1 className="text-balance font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              {description}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}
