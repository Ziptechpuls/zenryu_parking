import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blog';

export const dynamic = 'force-static';

const BASE_URL = 'https://zenryu-p.jp';

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`, lastModified: buildDate, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/parking`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/pricing`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/detailing`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
