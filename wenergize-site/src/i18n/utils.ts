import { en } from './en';
import { zh } from './zh';
import type { Copy } from './en';

export type Lang = 'en' | 'zh';

// Keep a few proper nouns from splitting across lines in Chinese (e.g. 肯尼|亚).
// A word joiner is invisible and tells the browser not to break between the characters.
const WJ = '⁠';
const glue = (s: string) =>
  ['肯尼亚', '斯瓦希里语', '澎龙锂电'].reduce((acc, w) => acc.split(w).join(w.split('').join(WJ)), s);
const deepGlue = (v: any, key = ''): any => {
  if (key === 'meta') return v; // page titles and descriptions stay clean for search results
  if (typeof v === 'string') return glue(v);
  if (Array.isArray(v)) return v.map((x) => deepGlue(x));
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deepGlue(x, k)]));
  return v; // functions and numbers pass through
};
const zhGlued = deepGlue(zh) as Copy;
// footer.legal is a function; wrap it too
zhGlued.footer.legal = (name: string, no: string) => glue(zh.footer.legal(name, no));

export const copyFor = (lang: Lang): Copy => (lang === 'zh' ? zhGlued : en);
export const otherLang = (lang: Lang): Lang => (lang === 'zh' ? 'en' : 'zh');

// path is the page path without the language prefix, e.g. '' or 'services/'
export const localePath = (lang: Lang, path = '') => `/${lang}/${path}`;

export const pages = {
  home: '',
  services: 'services/',
  about: 'about/',
  insights: 'insights/',
  contact: 'contact/',
  privacy: 'privacy/',
} as const;
