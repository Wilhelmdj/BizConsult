import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BizConsult — Request a Free Consultation" },
      { name: "description", content: "Speak to a senior Industrial Relations consultant. Confidential, no-obligation consultation for South African employers." },
      { property: "og:title", content: "Contact BizConsult — Request a Free Consultation" },
      { property: "og:description", content: "Confidential consultation for South African employers." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company name is required").max(150),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Phone number required").max(30),
  message: z.string().trim().min(10, "Tell us a little about your matter").max(2000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Thank you — a consultant will be in touch shortly.");
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Speak to a senior IR consultant."
        description="Confidential. No obligation. Tell us about your matter and we will respond within one business day."
      />

      <section className="py-24 md:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <div className="eyebrow mb-5"><span className="rule-accent" /> Request a Consultation</div>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Tell us about your matter
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              All enquiries are handled by a senior consultant in strict confidence.
            </p>

            <form onSubmit={onSubmit} className="mt-10 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Company Name" name="company" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone Number" name="phone" type="tel" required />
              </div>
              <div>
                <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Message
                </Label>
                <Textarea id="message" name="message" rows={6} required className="mt-2 rounded-sm border-border" placeholder="Briefly describe the matter you'd like to discuss…" />
              </div>
              <Button type="submit" disabled={submitting} variant="destructive" size="lg" className="mt-2 rounded-sm">
                {submitting ? "Sending…" : "Request a FREE Consultation"}
              </Button>
              <p className="text-xs text-muted-foreground">
                By submitting, you consent to BizConsult contacting you about your enquiry, in line with our POPIA notice.
              </p>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="rounded-sm border border-border bg-surface p-8">
              <h3 className="font-serif text-xl text-foreground">Business information</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <ContactRow icon={Phone} label="Phone" value="+27 (0) 00 000 0000" />
                <ContactRow icon={Mail} label="Email" value="info@bizconsult.co.za" href="mailto:info@bizconsult.co.za" />
                <ContactRow icon={MapPin} label="Office" value="Office Park, Johannesburg, South Africa" />
                <ContactRow icon={Clock} label="Hours" value="Mon – Fri · 08:00 – 17:00 (SAST)" />
              </ul>
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Why employers choose us</p>
                <ul className="mt-4 space-y-3 text-sm text-foreground">
                  {["Senior consultant on every matter", "Response within one business day", "AHI Employers' Organisation member"].map((p) => (
                    <li key={p} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="overflow-hidden rounded-sm border border-border bg-primary text-primary-foreground">
              <div className="aspect-[4/3] w-full" aria-label="Office location map">
                <iframe
                  title="BizConsult office location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=27.95%2C-26.20%2C28.10%2C-26.10&layer=mapnik"
                  className="h-full w-full border-0 grayscale"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/60">Our location</p>
                <p className="mt-2 font-serif text-lg">Johannesburg · Gauteng</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </Label>
      <Input id={name} name={name} type={type} required={required} className="mt-2 h-11 rounded-sm border-border" />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground"><Icon className="h-4 w-4" /></span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="block hover:text-primary">{content}</a> : content}</li>;
}
