import type { ReactNode } from "react";
import { PageHero } from "@/components/site/PageHero";

export function LegalLayout({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <section className="py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <div className="prose-page space-y-6 text-base leading-relaxed text-muted-foreground">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
