import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { solutions } from "@/data/solutions";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/about",
          "/solutions",
          "/knowledge-share",
          "/contact",
          "/legal/privacy",
          "/legal/popia",
          "/legal/disclaimer",
          "/legal/terms",
        ];
        const entries = [
          ...staticPaths.map((p) => ({ path: p })),
          ...solutions.map((s) => ({ path: `/solutions/${s.slug}` })),
        ];
        const urls = entries.map(
          (e) => `  <url><loc>${BASE_URL}${e.path}</loc></url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
