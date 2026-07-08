import type { Metadata } from 'next';
import BlogIndexPage from '@/components/BlogIndexPage';
import { BLOG_POSTS } from '@/lib/blog';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'ブログ｜那覇空港パーキング・カーケアのお役立ちコラム | ゼンリュウ',
  description:
    '那覇空港パーキングの使い方やメリット、洗車・コーティングのお役立ち情報を発信するゼンリュウのブログ。ご旅行・ご出張で車を預けたい方、愛車をきれいにしたい方へ。',
  keywords: [
    '那覇空港パーキング ブログ',
    '空港パーキング メリット',
    '那覇空港 駐車場',
    'カーケア コラム',
    '沖縄 洗車 コーティング',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'ブログ｜那覇空港パーキング・カーケアのお役立ちコラム | ゼンリュウ',
    description: '那覇空港パーキングの使い方やメリット、洗車・コーティングのお役立ち情報を発信しています。',
    type: 'website',
    locale: 'ja_JP',
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'ゼンリュウ ブログ',
  description:
    '那覇空港パーキングの使い方やメリット、洗車・コーティングのお役立ち情報',
  url: 'https://zenryu-p.jp/blog',
  blogPost: BLOG_POSTS.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.h1,
    description: p.description,
    url: `https://zenryu-p.jp/blog/${p.slug}`,
    datePublished: p.date,
    dateModified: p.updated ?? p.date,
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogIndexPage />
    </>
  );
}
