import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/site/CtaSection";
import { solutions } from "@/data/solutions";
import heroImg from "@/assets/hero-boardroom.jpg";
import {
  ArrowRight,
  ShieldCheck,
  Briefcase,
  Calculator,
  CheckCircle2,
  Award,
  Users2,
  Zap,
  ShieldHalf,
  Clock,
  BadgeCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BizConsult — Industrial Relations Management for Employers" },
      {
        name: "description",
        content:
          "Protect your business with expert Industrial Relations support. BizConsult helps South African employers manage disputes, compliance, and labour risk since 2008.",
      },
      { property: "og:title", content: "BizConsult — Industrial Relations Management for Employers" },
      {
        property: "og:description",
        content:
          "Protect your business with expert Industrial Relations support — disciplinary, CCMA, retrenchment, and compliance.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <WhyUs />
      <ServicesOverview />
      <Credibility />
      <CtaSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="container-page relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="relative z-10 animate-fade-up">
          <div className="eyebrow-light mb-6">
            <span className="rule-accent" />
            Industrial Relations · Since 2008
          </div>
          <h1 className="text-balance font-serif text-4xl leading-[1.02] tracking-tight text-white md:text-6xl lg:text-[4.25rem]">
            Industrial Relations Management for Employers
          </h1>
          <p className="mt-6 font-serif text-xl italic text-white/85 md:text-2xl">
            Let Us Be Your Trusted Partner
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            Protect your business, maintain compliance, and build a productive
            workplace with expert Industrial Relations support tailored to
            South African employers.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild variant="destructive" size="lg" className="h-12 rounded-sm px-6 text-sm font-semibold">
              <Link to="/contact">
                Request a FREE Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-sm border-white/25 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white hover:text-primary"
            >
              <Link to="/solutions">Explore Our Solutions</Link>
            </Button>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              { k: "15+", v: "Years advising employers" },
              { k: "100%", v: "Employer-focused" },
              { k: "AHI", v: "Accredited member" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-serif text-3xl text-white">{s.k}</dt>
                <dd className="mt-1 text-xs leading-snug text-white/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative animate-fade-up">
          <div className="absolute -inset-4 hidden rounded-sm border border-white/10 lg:block" />
          <div className="relative overflow-hidden rounded-sm shadow-elevated">
            <img
              src={heroImg}
              alt="Senior consultants advising employers in a corporate boardroom"
              width={1600}
              height={1200}
              className="aspect-[4/3] h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[16rem] rounded-sm bg-white p-5 text-foreground shadow-elevated lg:block">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-destructive/10 text-destructive">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="font-serif text-sm font-semibold leading-tight">Employer-Focused</p>
                <p className="text-xs text-muted-foreground">Strategic IR representation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const cards = [
    {
      icon: Briefcase,
      title: "Optimize Your HR Today",
      lede: "Focus on growing your business while we manage your people.",
      body: "Outsource your HR and IR functions to experienced professionals so leadership can focus on strategy and growth.",
    },
    {
      icon: ShieldCheck,
      title: "Get Expert IR Support",
      lede: "Minimize risk. Maintain stability. Ensure compliance.",
      body: "We guide you through complex labour matters to reduce disputes and maintain workplace harmony.",
    },
    {
      icon: Calculator,
      title: "Streamline Your Payroll",
      lede: "Save time. Reduce risk. Ensure accuracy.",
      body: "We manage your payroll process so you never worry about errors, penalties, or delays.",
    },
  ];
  return (
    <section className="relative -mt-14 md:-mt-20">
      <div className="container-page">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, lede, body }) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-sm border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-serif text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm font-medium text-primary">{lede}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <span className="mt-6 h-px w-full bg-border" />
              <Link
                to="/solutions"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary hover:text-destructive"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Award, title: "Trusted Experts Since 2008", body: "Over 15 years of dedicated employer-side Industrial Relations experience." },
    { icon: Users2, title: "Employer-Focused Representation", body: "Every engagement is built around protecting the employer's interest." },
    { icon: Zap, title: "Effective, Efficient & Affordable", body: "Senior expertise without the cost of a traditional law firm." },
    { icon: ShieldHalf, title: "Preventative IR Strategy", body: "We help you prevent disputes before they reach the CCMA." },
    { icon: Clock, title: "Fast Responsive Support", body: "Rapid response when incidents demand immediate action." },
    { icon: BadgeCheck, title: "AHI Employers' Organisation", body: "Accredited member of the AHI Employers' Organisation." },
  ];
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <div className="eyebrow mb-5"><span className="rule-accent" /> Why Choose Us</div>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
              Considered counsel. Decisive action when it matters.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Employers across South Africa rely on BizConsult to navigate the
              full spectrum of Industrial Relations — from preventative strategy
              and labour audits, through to representation at the CCMA and
              Labour Court.
            </p>
            <Button asChild variant="default" size="lg" className="mt-8 rounded-sm">
              <Link to="/about">About BizConsult <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {items.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4 bg-card p-7">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-base text-foreground">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5"><span className="rule-accent" /> Our Solutions</div>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
              A complete Industrial Relations practice for employers
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Twelve integrated service lines — from disciplinary management to
            payroll — delivered by senior practitioners.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ slug, title, short, icon: Icon }) => (
            <Link
              key={slug}
              to="/solutions/$slug"
              params={{ slug }}
              className="group flex flex-col bg-card p-7 transition-colors hover:bg-surface"
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
  );
}

function Credibility() {
  const points = [
    "Serving South African employers since 2008",
    "Deep industry expertise across sectors",
    "Employer-focused support and representation",
    "Practical, commercial labour relations solutions",
  ];
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="eyebrow mb-5"><span className="rule-accent" /> Trust & Credibility</div>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
              A practice built on experience, judgement, and outcomes.
            </h2>
            <ul className="mt-10 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-base text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <figure className="rounded-sm border border-border bg-card p-8 shadow-card">
              <div className="text-destructive">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-7-2-7-7V7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-7-2-7-7V7z"/></svg>
              </div>
              <blockquote className="mt-4 font-serif text-xl leading-snug text-foreground">
                Client testimonial space — reserved for verified client feedback once collected and approved for publication.
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                <p className="font-semibold text-foreground">Verified Client</p>
                <p className="text-muted-foreground">Position · Company</p>
              </figcaption>
            </figure>
            <div className="rounded-sm border border-dashed border-border bg-background p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Trusted by employers across South Africa</p>
              <div className="mt-5 grid grid-cols-3 gap-4 md:grid-cols-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex h-10 items-center justify-center rounded-sm bg-surface text-[10px] uppercase tracking-widest text-muted-foreground/60">
                    Client {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
