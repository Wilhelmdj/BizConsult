import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BizConsult" },
      { name: "description", content: "How BizConsult collects, uses, and protects personal information." },
      { property: "og:url", content: "/legal/privacy" },
    ],
    links: [{ rel: "canonical", href: "/legal/privacy" }],
  }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Privacy Policy">
      <p>BizConsult respects your privacy. This policy explains how we collect, use, store, and safeguard personal information you provide through our website and consulting engagements.</p>
      <h2 className="font-serif text-2xl text-foreground">Information we collect</h2>
      <p>We may collect contact details, company information, and any details you choose to share when requesting a consultation or engaging our services.</p>
      <h2 className="font-serif text-2xl text-foreground">How we use information</h2>
      <p>Information is used solely to respond to enquiries, deliver consulting services, and meet our legal and regulatory obligations.</p>
      <h2 className="font-serif text-2xl text-foreground">Your rights</h2>
      <p>You may request access to, correction of, or deletion of your personal information at any time by contacting admin@bizconsult.co.za.</p>
    </LegalLayout>
  ),
});
