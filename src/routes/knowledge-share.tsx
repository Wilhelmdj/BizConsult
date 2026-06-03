import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Calendar } from "lucide-react";

export const Route = createFileRoute("/knowledge-share")({
  head: () => ({
    meta: [
      { title: "Knowledge Share — BizConsult Insights & Resources" },
      { name: "description", content: "Articles, insights, and resources on South African Industrial Relations, labour law, and HR best practice for employers." },
      { property: "og:title", content: "Knowledge Share — BizConsult Insights" },
      { property: "og:description", content: "Insights on Industrial Relations for South African employers." },
      { property: "og:url", content: "/knowledge-share" },
    ],
    links: [{ rel: "canonical", href: "/knowledge-share" }],
  }),
  component: KnowledgePage,
});

const categories = ["All", "Discipline", "CCMA", "Compliance", "Retrenchment", "Strategy"] as const;

interface Article {
  title: string;
  excerpt: string;
  category: (typeof categories)[number];
  date: string;
  read: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    title: "Procedural Fairness in Disciplinary Enquiries — A Practical Guide",
    excerpt: "What employers must get right before, during, and after a disciplinary hearing to ensure outcomes survive scrutiny at the CCMA.",
    category: "Discipline",
    date: "May 2026",
    read: "8 min read",
    featured: true,
  },
  {
    title: "Preparing for a Section 189 Retrenchment Process",
    excerpt: "A checklist for employers contemplating operational requirements dismissals, with the steps that matter most.",
    category: "Retrenchment",
    date: "Apr 2026",
    read: "10 min read",
  },
  {
    title: "Surviving a CCMA Arbitration — Lessons from the Frontline",
    excerpt: "Practical insights on case preparation, witness handling, and the most common mistakes employers make.",
    category: "CCMA",
    date: "Apr 2026",
    read: "7 min read",
  },
  {
    title: "Labour Compliance Audit: What to Expect",
    excerpt: "How a structured audit reveals risk before it becomes a dispute, and what a remediation plan looks like.",
    category: "Compliance",
    date: "Mar 2026",
    read: "6 min read",
  },
  {
    title: "Building a Preventative IR Strategy",
    excerpt: "Why the best employers invest in prevention — and the components every IR strategy should contain.",
    category: "Strategy",
    date: "Mar 2026",
    read: "9 min read",
  },
  {
    title: "Managing Poor Performance Without Triggering an Unfair Dismissal Claim",
    excerpt: "A defensible incapacity process protects both the business and the employee. Here's how to run one.",
    category: "Discipline",
    date: "Feb 2026",
    read: "8 min read",
  },
  {
    title: "Picketing Rules and Strike Readiness",
    excerpt: "What employers must have in place before a protected strike — and the levers available during one.",
    category: "Strategy",
    date: "Feb 2026",
    read: "7 min read",
  },
];

function KnowledgePage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCat = cat === "All" || a.category === cat;
      const matchesQ = q.trim() === "" || a.title.toLowerCase().includes(q.toLowerCase()) || a.excerpt.toLowerCase().includes(q.toLowerCase());
      return matchesCat && matchesQ;
    });
  }, [q, cat]);

  const featured = filtered.find((a) => a.featured) ?? filtered[0];
  const rest = filtered.filter((a) => a !== featured);

  return (
    <>
      <PageHero
        eyebrow="Knowledge Share"
        title="Insights, guides, and resources for employers."
        description="Practical commentary from our consultants on the issues shaping South African Industrial Relations."
      />

      <section className="border-b border-border bg-surface py-8">
        <div className="container-page flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles…"
              className="h-11 rounded-sm border-border bg-background pl-10"
              aria-label="Search articles"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-sm border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                  cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          {featured && (
            <article className="group grid gap-10 rounded-sm border border-border bg-card p-8 shadow-card lg:grid-cols-[1.2fr_1fr] lg:p-12">
              <div>
                <div className="eyebrow mb-5"><span className="rule-accent" /> Featured Article</div>
                <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">{featured.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-8 flex items-center gap-5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  <span>{featured.category}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                  <span>{featured.read}</span>
                </div>
                <a className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-destructive" href="#">
                  Read article <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="relative hidden overflow-hidden rounded-sm bg-primary lg:block">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                <div className="relative flex h-full items-end p-10 text-primary-foreground">
                  <p className="font-serif text-2xl leading-tight">From the desk of our senior consultants.</p>
                </div>
              </div>
            </article>
          )}

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <article key={a.title} className="group flex flex-col rounded-sm border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  <span className="font-semibold text-destructive">{a.category}</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="mt-5 font-serif text-xl leading-snug text-foreground">{a.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                <a className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary group-hover:text-destructive" href="#">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-sm text-muted-foreground">No articles match your search.</p>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
