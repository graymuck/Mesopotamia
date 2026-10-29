import { createFileRoute } from "@tanstack/react-router";
import { indexingResponse } from "@/lib/seo-indexing";
export const Route = createFileRoute("/robots.txt")({
  server: { handlers: {
    GET: ({ request }) => indexingResponse(request, process.env["SITE_URL"])!,
    HEAD: ({ request }) => indexingResponse(request, process.env["SITE_URL"])!,
  } },
});
