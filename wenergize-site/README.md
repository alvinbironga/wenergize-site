# Wenergize website

Bilingual (English / 简体中文) static site built with [Astro](https://astro.build). Stage 1: structure and design.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where things live

| What | Where |
| --- | --- |
| Contact details, registration number, photo, QR code | `src/config/site.ts` |
| English copy | `src/i18n/en.ts` |
| Chinese copy | `src/i18n/zh.ts` |
| Page layouts (shared by both languages) | `src/templates/` |
| Colours, spacing, type | `src/styles/global.css` (tokens at the top) |
| Logo, photo, WeChat QR | `public/images/` |

Every page exists twice, at `/en/...` and `/zh/...`. The route files in `src/pages/` are one-liners that
load a shared template with the right language, so a layout change happens once for both languages.

## Deploy (GitHub + Netlify)

1. Push this folder to a GitHub repository.
2. In Netlify: Add new site > Import from Git > pick the repo. `netlify.toml` already holds the build settings.
3. When you buy the domain, add it in Netlify and set an environment variable `SITE_URL` to
   `https://yourdomain.com` so canonical links and hreflang point at it. Redeploy.

## Notes

- The enquiry form uses Netlify Forms. After the first deploy, open Site configuration > Forms to
  switch on email notifications.
- No third-party scripts, no Google fonts: the site loads everything from its own domain, which matters in China.
- Planned next: blog (Supabase), SEO extras (sitemap, structured data), analytics.
