import type { Metadata } from 'next';
import ParkingPage from '@/components/ParkingPage';

export const metadata: Metadata = {
  title: '那覇空港 カーケア・パーキング | 松竹梅プラン | ゼンリュウ',
  description:
    '那覇空港で愛車をお預かりし、ご旅行・ご出張のあいだにカーケアを施工。パーキング¥1,000/日、カーケアコース ¥5,000・¥15,000・¥50,000〜 (松竹梅)。送迎付き。',
  keywords: ['那覇空港 駐車', '那覇空港 カーケア', '沖縄 洗車', '沖縄 コーティング', '那覇空港 パーキング'],
  alternates: { canonical: '/parking' },
  openGraph: {
    title: '那覇空港 カーケア・パーキング | 松竹梅プラン | ゼンリュウ',
    description: '那覇空港でお車をお預かりし、滞在中にカーケア・コーティングを施工。',
    type: 'website',
    locale: 'ja_JP',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'カーケア・空港パーキング',
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
    { '@type': 'Offer', name: '梅1クイック', price: '5000', priceCurrency: 'JPY' },
    { '@type': 'Offer', name: '竹スタンダード', price: '15000', priceCurrency: 'JPY' },
    { '@type': 'Offer', name: '松プレミアム', price: '50000', priceCurrency: 'JPY' },
    { '@type': 'Offer', name: 'パーキング (1日)', price: '1000', priceCurrency: 'JPY', priceSpecification: { '@type': 'UnitPriceSpecification', unitCode: 'DAY' } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ParkingPage />
    </>
  );
}
