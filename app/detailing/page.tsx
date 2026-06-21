import type { Metadata } from 'next';
import DetailingPage from '@/components/DetailingPage';

export const metadata: Metadata = {
  title: '沖縄 カーディテイリング | 那覇 コーティング | ゼンリュウ',
  description:
    '沖縄でカーディテイリングをお探しの方へ。ゼンリュウは手洗い洗車¥5,000からガラスコーティングまで自社施工。那覇空港のパーキングと併せてもディテイリング単独でもご依頼可能。',
  keywords: ['沖縄 カーディテイリング', '那覇 ディテイリング', '沖縄 ガラスコーティング', '那覇 洗車', '沖縄 鉄粉除去'],
  alternates: { canonical: '/detailing' },
  openGraph: {
    title: '沖縄 カーディテイリング | 那覇 コーティング | ゼンリュウ',
    description: '自社施工のディテイリング。手洗い洗車からガラスコーティングまで。',
    type: 'website',
    locale: 'ja_JP',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'カーディテイリング',
  provider: {
    '@type': 'LocalBusiness',
    name: 'ゼンリュウ',
    telephone: '+81-98-995-9805',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '我那覇 152番地8',
      addressLocality: '豊見城市',
      addressRegion: '沖縄県',
      postalCode: '901-0231',
      addressCountry: 'JP',
    },
  },
  offers: [
    { '@type': 'Offer', name: 'クイック', price: '5000', priceCurrency: 'JPY' },
    { '@type': 'Offer', name: 'スタンダード', price: '15000', priceCurrency: 'JPY' },
    { '@type': 'Offer', name: 'プレミアム', price: '50000', priceCurrency: 'JPY' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DetailingPage />
    </>
  );
}
