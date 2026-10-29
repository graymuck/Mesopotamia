# Search engine setup

Every public page supports English (original URL), Arabic (`?lang=ar`) and Russian (`?lang=ru`). The query controls server-rendered content, metadata and HTML direction. Language links and internal navigation preserve that choice; no cookie or browser language is required by crawlers.

- Canonical links omit tracking parameters and the redundant English language parameter.
- Reciprocal hreflang links include en, ar, ru and x-default.
- /sitemap.xml contains the 21 localized page URLs and language alternatives.
- /robots.txt allows crawling and advertises the sitemap.
- Titles, descriptions, Open Graph and Twitter metadata are translated. A local 1200 × 630 social image is included.
- JSON-LD describes the website and each page. Event rich-result markup is intentionally omitted because the festival year is unconfirmed.

## After deployment

The request's origin is used automatically. Once the preferred domain is chosen, set SITE_URL to its HTTPS origin (see .env.example) to keep canonical links stable across preview domains. Set the same value in the hosting environment, not only locally. Use HTTPS and redirect alternate hostnames to the preferred domain through the host's settings.

Verify ownership in Google Search Console and submit /sitemap.xml. Check the live domain with URL Inspection and PageSpeed Insights. Local tests cannot establish Google indexing, rankings or real-user Core Web Vitals. No ranking or rich-result appearance is guaranteed.

Run npm test and npx tsc --noEmit before deployment. The application needs its TanStack Start server runtime for its SSR pages and generated indexing endpoints; a static-only host must not be used without a separate prerendering setup.
