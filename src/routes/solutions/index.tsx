import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { solutions } from "@/data/solutions";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Our Solutions — BizConsult Industrial Relations" },
      { name: "description", content: "Twelve integrated Industrial Relations service lines for employers — from disciplinary management and CCMA representation to payroll and collective bargaining." },
      { property: "og:title", content: "Our Solutions — BizConsult Industrial Relations" },
      { property: "og:description", content: "End-to-end Industrial Relations services for South African employers." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsIndex,
});

function SolutionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="End-to-end Industrial Relations services for employers."
        description="Twelve integrated practice areas — delivered by senior consultants — to manage every facet of your Industrial Relations risk."
      />
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ slug, title, short, icon: Icon }) => (
              <Link
                key={slug}
                to="/solutions/$slug"
                params={{ slug }}
                className="group flex flex-col bg-card p-8 transition-colors hover:bg-surface"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-colors group-hover:bg-destructive">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-serif text-lg text-foreground">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{short}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary group-hover:text-destructive">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
