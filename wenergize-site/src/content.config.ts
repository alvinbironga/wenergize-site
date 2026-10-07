import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts are plain Markdown files:
//   src/content/posts/en/<slug>.md   English version
//   src/content/posts/zh/<slug>.md   Chinese version (optional, use the same file name)
// Files whose name starts with an underscore (like _template.md) are ignored.
const posts = defineCollection({
  loader: glob({ pattern: ['{en,zh}/*.md', '!**/_*'], base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // one or two sentences, shown in the list and in search results
    date: z.coerce.date(), // write as 2026-10-14
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false), // true = saved but not published
  }),
});

export const collections = { posts };
