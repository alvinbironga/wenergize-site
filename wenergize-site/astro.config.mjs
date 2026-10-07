import { defineConfig } from 'astro/config';

// Set SITE_URL in Netlify (Site settings > Environment variables) once you have a domain.
// Until then the Netlify address is used. It feeds canonical links, hreflang and the sitemap later.
const site = process.env.SITE_URL || 'https://wenergize.netlify.app';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
});
