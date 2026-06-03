import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/disclaimer")({
  head: () => ({
    meta: [
      { title: "Labour Law Disclaimer — BizConsult" },
      { name: "description", content: "Disclaimer relating to information on labour law published by BizConsult." },
      { property: "og:url", content: "/legal/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/legal/disclaimer" }],
  }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Labour Law Disclaimer">
      <p>The information published on this website is provided for general information purposes only and does not constitute legal advice. South African labour law is fact-specific and frequently evolves.</p>
      <p>Readers should not act, or refrain from acting, on the basis of any content included on this website without seeking the appropriate professional advice on the particular facts and circumstances of their matter.</p>
      <p>BizConsult disclaims any and all liability with respect to actions taken or not taken based on the contents of this website.</p>
    </LegalLayout>
  ),
});
