import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/utils';

export type Post = CollectionEntry<'posts'> & { lang: Lang; slug: string };

// All published posts, newest first. Drafts show only on the local dev server.
export async function allPosts(): Promise<Post[]> {
  const entries = await getCollection('posts', (e) => import.meta.env.DEV || !e.data.draft);
  return entries
    .map((e) => {
      const [lang, ...rest] = e.id.split('/');
      return { ...e, lang: lang as Lang, slug: rest.join('/') };
    })
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const postsIn = (posts: Post[], lang: Lang) => posts.filter((p) => p.lang === lang);

// Is there a version of this post in the other language?
export const hasTwin = (posts: Post[], p: Post) => posts.some((q) => q.slug === p.slug && q.lang !== p.lang);

// What the Chinese Insights page shows: Chinese posts, plus English posts that have no Chinese version yet.
export const listFor = (posts: Post[], lang: Lang) =>
  lang === 'en' ? postsIn(posts, 'en') : posts.filter((p) => p.lang === 'zh' || !hasTwin(posts, p));

export function readingMinutes(body: string | undefined, lang: Lang) {
  const text = body ?? '';
  const units = lang === 'zh' ? (text.match(/[一-鿿]/g) || []).length / 450 : text.split(/\s+/).filter(Boolean).length / 220;
  return Math.max(1, Math.round(units));
}

export const formatDate = (d: Date, lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);
