import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/aboutimage.jpg";
import { Compass, Target, Eye, ShieldCheck, Users2, Scale, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BizConsult — Employer-Focused IR Consultancy" },
      { name: "description", content: "BizConsult has advised South African employers on Industrial Relations since 2008. Learn about our mission, vision, values, and approach." },
      { property: "og:title", content: "About BizConsult — Employer-Focused IR Consultancy" },
      { property: "og:description", content: "Employer-focused Industrial Relations consultancy serving South African businesses since 2008." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="2323223 BizConsult"
        title="Trusted Industrial Relations counsel for South African employers."
        description="Since 2008 we have helped business owners, directors, and HR leaders navigate the most complex labour matters with judgement, rigour, and discretion."
      />

      <section className="py-24 md:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="relative">
            <div className="overflow-hidden rounded-sm shadow-elevated">
              <img src={aboutImg} alt="Senior BizConsult consultant" loading="lazy" className="aspect-[3/4] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden max-w-[16rem] rounded-sm bg-primary p-6 text-primary-foreground shadow-elevated lg:block">
              <p className="font-serif text-3xl">2008</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">Year established</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/60">Verified update</p>
            </div>
          </div>
          <div>
            <div className="eyebrow mb-5"><span className="rule-accent" /> Company Overview</div>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              An employer-side practice with the depth of a specialist firm.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              BizConsult is a specialist Industrial Relations consultancy
              dedicated exclusively to serving employers. We combine deep
              technical expertise in South African labour law with the
              commercial pragmatism business leaders need to act decisively.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our consultants have represented employers in hundreds of
              disciplinary enquiries, conciliations, arbitrations, retrenchments
              and collective bargaining processes — always with one objective:
              protecting the employer's interest while maintaining a fair and
              compliant workplace.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
              {[
                { k: "15+", v: "Years of practice" },
                { k: "12", v: "Service lines" },
                { k: "100%", v: "Employer-focused" },
              ].map((s) => (
                <div key={s.k} className="bg-card px-5 py-6">
                  <p className="font-serif text-3xl text-foreground">{s.k}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", body: "To safeguard South African employers from labour risk through expert, principled, and decisive Industrial Relations support." },
              { icon: Eye, title: "Our Vision", body: "To be the most trusted Industrial Relations partner to employers in South Africa — known for judgement, integrity, and outcomes." },
              { icon: Compass, title: "Our Approach", body: "Preventative where possible, decisive when necessary. Every matter is led by a senior consultant from intake to outcome." },
            ].map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-sm border border-border bg-card p-8 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-6 font-serif text-xl text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow mb-5 justify-center"><span className="rule-accent" /> Core Values</div>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
              Principles that guide every engagement
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Integrity", body: "Honest counsel. Even when it is difficult." },
              { icon: Scale, title: "Fairness", body: "Lawful, defensible processes — always." },
              { icon: Users2, title: "Partnership", body: "We work alongside your leadership team." },
              { icon: Target, title: "Outcomes", body: "We measure ourselves by the result." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-sm border border-border bg-card p-7">
                <Icon className="h-6 w-6 text-destructive" />
                <h3 className="mt-5 font-serif text-lg text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild variant="default" size="lg" className="rounded-sm">
              <Link to="/solutions">Explore our solutions <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
