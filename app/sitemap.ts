import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blog';

export const dynamic = 'force-static';

const BASE_URL = 'https://zenryu-p.jp';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/parking', priority: 0.8 },
    { path: '/pricing', priority: 0.8 },
    { path: '/detailing', priority: 0.8 },
    { path: '/blog', priority: 0.7 },
    ...BLOG_POSTS.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6 })),
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
