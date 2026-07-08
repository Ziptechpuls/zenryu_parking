import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticlePage from '@/components/BlogArticlePage';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog';
import { OG_IMAGE } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      locale: 'ja_JP',
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [OG_IMAGE],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.h1,
    description: post.description,
    url: `https://zenryu-p.jp/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: 'ja',
    author: { '@type': 'Organization', name: 'ゼンリュウレンタカー' },
    publisher: {
      '@type': 'Organization',
      name: 'ゼンリュウレンタカー',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zenryu-p.jp/assets/S__45817862.jpg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://zenryu-p.jp/blog/${post.slug}`,
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://zenryu-p.jp/' },
      { '@type': 'ListItem', position: 2, name: 'ブログ', item: 'https://zenryu-p.jp/blog' },
      { '@type': 'ListItem', position: 3, name: post.h1, item: `https://zenryu-p.jp/blog/${post.slug}` },
    ],
  };

  const faqLd = post.faqs && post.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}
      <BlogArticlePage post={post} />
    </>
  );
}
