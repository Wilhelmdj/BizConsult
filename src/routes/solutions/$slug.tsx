import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { Button } from "@/components/ui/button";
import { getSolution, solutions } from "@/data/solutions";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = getSolution(params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.solution;
    if (!s) return {};
    return {
      meta: [
        { title: `${s.title} — BizConsult` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} — BizConsult` },
        { property: "og:description", content: s.short },
        { property: "og:url", content: `/solutions/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/solutions/${s.slug}` }],
    };
  },
  component: SolutionDetail,
});

function SolutionDetail() {
  const { solution } = Route.useLoaderData();
  const Icon = solution.icon;
  const related = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Solution" title={solution.title} description={solution.short} />

      <section className="py-24 md:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <div className="eyebrow mb-5"><span className="rule-accent" /> Overview</div>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              How we support employers
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{solution.overview}</p>

            <div className="mt-14">
              <div className="eyebrow mb-5"><span className="rule-accent" /> Benefits</div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {solution.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-sm border border-border bg-card p-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                    <span className="text-sm text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <div className="eyebrow mb-5"><span className="rule-accent" /> Our Process</div>
              <ol className="space-y-5">
                {solution.process.map((p, i) => (
                  <li key={p.step} className="flex gap-5 rounded-sm border border-border bg-card p-6">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary font-serif text-base text-primary-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-foreground">{p.step}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-sm border border-border bg-surface p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-serif text-xl text-foreground">Speak to a senior consultant</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Book a free, confidential consultation to discuss your matter
                and how we can support your business.
              </p>
              <Button asChild variant="destructive" size="lg" className="mt-6 w-full rounded-sm">
                <Link to="/contact">Request a FREE Consultation</Link>
              </Button>
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Related Solutions</p>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to="/solutions/$slug"
                        params={{ slug: r.slug }}
                        className="group flex items-center justify-between gap-2 text-sm font-medium text-foreground hover:text-primary"
                      >
                        <span>{r.title}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
