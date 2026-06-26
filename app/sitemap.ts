import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://zenryu-p.jp';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/parking', priority: 0.8 },
    { path: '/detailing', priority: 0.8 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
