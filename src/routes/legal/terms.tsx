import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — BizConsult" },
      { name: "description", content: "Terms governing the use of the BizConsult website." },
      { property: "og:url", content: "/legal/terms" },
    ],
    links: [{ rel: "canonical", href: "/legal/terms" }],
  }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Terms of Use">
      <p>By accessing this website, you agree to be bound by these Terms of Use. The website and its content are owned by BizConsult and provided for informational purposes only.</p>
      <h2 className="font-serif text-2xl text-foreground">Intellectual property</h2>
      <p>All trademarks, content, and materials on this website are the property of BizConsult or its licensors and may not be reproduced without consent.</p>
      <h2 className="font-serif text-2xl text-foreground">Use of the website</h2>
      <p>You may not use the website in any manner that could damage, disable, overburden, or impair it, or interfere with any other party's use of the website.</p>
    </LegalLayout>
  ),
});
