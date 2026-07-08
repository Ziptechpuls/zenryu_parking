import type { Metadata } from 'next';
import ParkingPage from '@/components/ParkingPage';
import { ZENRYU_DATA } from '@/lib/data';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
  title: '那覇空港パーキング ¥1,000/日｜送迎・カーケア付き駐車場 | ゼンリュウ',
  description:
    '那覇空港パーキングならゼンリュウ。1日¥1,000で空港すぐそばに愛車をお預かり、空港まで送迎付き。ご旅行・ご出張中の駐車場をお探しの方へ。お預かり中に手洗い洗車・コーティングを施工するカーケアコース (松竹梅 ¥5,000〜) もご利用いただけます。',
  keywords: [
    '那覇空港パーキング',
    '那覇空港 駐車場',
    '那覇空港 駐車場 預ける',
    '那覇空港 駐車場 安い',
    '那覇空港 駐車場 送迎',
    '沖縄 空港 駐車場',
    '那覇空港 パーキング',
    '空港パーキング 沖縄',
  ],
  alternates: { canonical: '/parking' },
  openGraph: {
    title: '那覇空港パーキング ¥1,000/日｜送迎・カーケア付き | ゼンリュウ',
    description: '那覇空港すぐそば、1日¥1,000・送迎付きの空港パーキング。お預かり中にカーケア・コーティングも施工。',
    type: 'website',
    locale: 'ja_JP',
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '那覇空港パーキング',
  serviceType: '空港パーキング・カーケア',
  areaServed: { '@type': 'Airport', name: '那覇空港', iataCode: 'OKA' },
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
    { '@type': 'Offer', name: '梅1クイック', price: '5000', priceCurrency: 'JPY' },
    { '@type': 'Offer', name: '竹スタンダード', price: '15000', priceCurrency: 'JPY' },
    { '@type': 'Offer', name: '松プレミアム', price: '50000', priceCurrency: 'JPY' },
    { '@type': 'Offer', name: 'パーキング (1日)', price: '1000', priceCurrency: 'JPY', priceSpecification: { '@type': 'UnitPriceSpecification', unitCode: 'DAY' } },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ZENRYU_DATA.faqs.map((f) => ({
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
      <ParkingPage />
    </>
  );
}
