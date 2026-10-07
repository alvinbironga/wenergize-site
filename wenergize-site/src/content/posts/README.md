# Adding a blog post

A post is one Markdown file. Nothing else needs editing.

1. Copy `en/_template.md` and rename it with a short lowercase name using hyphens, for example `spec-sheet-checklist.md`. The name becomes the web address: `/en/insights/spec-sheet-checklist/`.
2. Fill in `title`, `description` and `date` at the top, then write the article below the second `---` line.
3. Save it in `src/content/posts/en/`.
4. For a Chinese version, save a file with the **same name** in `src/content/posts/zh/`. The two are then linked, and the language switcher on the post jumps to the other version. A post with no Chinese twin still appears on the Chinese Insights page, tagged as English.

Set `draft: true` to keep a post saved without publishing it.

Pictures go in `public/images/blog/` and are used in a post as `![description](/images/blog/name.jpg)`. Keep them under about 200 KB.

Files starting with an underscore are ignored by the site.
