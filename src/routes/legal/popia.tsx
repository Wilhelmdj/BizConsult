import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/popia")({
  head: () => ({
    meta: [
      { title: "POPIA Compliance Notice — BizConsult" },
      { name: "description", content: "BizConsult's compliance with the Protection of Personal Information Act (POPIA)." },
      { property: "og:url", content: "/legal/popia" },
    ],
    links: [{ rel: "canonical", href: "/legal/popia" }],
  }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="POPIA Compliance Notice">
      <p>BizConsult is committed to processing personal information in accordance with the Protection of Personal Information Act, 4 of 2013 ("POPIA").</p>
      <h2 className="font-serif text-2xl text-foreground">Lawful processing</h2>
      <p>We process personal information only for the purposes for which it was collected, in a lawful, reasonable, and transparent manner.</p>
      <h2 className="font-serif text-2xl text-foreground">Information Officer</h2>
      <p>Queries relating to POPIA may be directed to our Information Officer at admin@bizconsult.co.za.</p>
      <h2 className="font-serif text-2xl text-foreground">Data subject rights</h2>
      <p>You may request access, correction, or deletion of your personal information, and may lodge complaints with the Information Regulator of South Africa.</p>
    </LegalLayout>
  ),
});
