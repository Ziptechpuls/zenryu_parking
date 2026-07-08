import type { Metadata } from 'next';
import DetailingPage from '@/components/DetailingPage';
import { DETAILING_FAQS } from '@/lib/data';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
  title: '豊見城市 カーディテイリング｜車磨き・車内清掃・コーティング | ゼンリュウ',
  description:
    '豊見城市のカーディテイリング専門店ゼンリュウ。手洗い洗車¥5,000から車磨き(ポリッシング)・ガラスコーティング・車内清掃まで自社施工。豊見城市・那覇市・沖縄本島南部で愛車を磨きたい方へ。輸入車・EV車にも対応。',
  keywords: [
    '豊見城市 カーディテイリング',
    '豊見城 車磨き',
    '豊見城市 車内清掃',
    '豊見城 洗車',
    '豊見城 ガラスコーティング',
    '沖縄 カーディテイリング',
    '那覇 車磨き',
    '沖縄 車内清掃',
  ],
  alternates: { canonical: '/detailing' },
  openGraph: {
    title: '豊見城市 カーディテイリング｜車磨き・車内清掃・コーティング | ゼンリュウ',
    description: '豊見城市のカーディテイリング。手洗い洗車・車磨き・ガラスコーティング・車内清掃まで自社施工。',
    type: 'website',
    locale: 'ja_JP',
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '豊見城市 カーディテイリング',
  serviceType: 'カーディテイリング・車磨き・車内清掃・ガラスコーティング',
  areaServed: [
    { '@type': 'City', name: '豊見城市' },
    { '@type': 'City', name: '那覇市' },
    { '@type': 'AdministrativeArea', name: '沖縄県' },
  ],
  provider: {
    '@type': 'LocalBusiness',
    name: 'ゼンリュウレンタカー',
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
    { '@type': 'Offer', name: 'クイック (洗車)', price: '5000', priceCurrency: 'JPY' },
    { '@type': 'Offer', name: 'スタンダード (車磨き・撥水)', price: '15000', priceCurrency: 'JPY' },
    { '@type': 'Offer', name: 'プレミアム (本格研磨・ガラスコーティング)', price: '50000', priceCurrency: 'JPY' },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: DETAILING_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <DetailingPage />
    </>
  );
}
