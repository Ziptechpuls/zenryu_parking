import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'ゼンリュウ | 那覇空港 パーキング × カーディテイリング',
  description:
    'ゼンリュウは那覇空港の空港パーキングとカーディテイリングの専門店。ご旅行・ご出張で車を預けているあいだに、職人が洗車・磨き・コーティングを施工します。',
  keywords: ['ゼンリュウ', '那覇空港 パーキング', '沖縄 ディテイリング', '那覇空港 洗車', '沖縄 コーティング'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ゼンリュウ | 那覇空港 パーキング × カーディテイリング',
    description: '預けているあいだに、磨かれる。那覇空港の空港パーキングとカーディテイリング。',
    type: 'website',
    locale: 'ja_JP',
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ゼンリュウ 那覇空港パーキング × カーディテイリング',
  '@id': 'https://zenryu-p.jp/#business',
  url: 'https://zenryu-p.jp/',
  image: 'https://zenryu-p.jp/assets/hero-bg.webp',
  logo: 'https://zenryu-p.jp/assets/S__45817862.jpg',
  telephone: '+81-98-995-9805',
  priceRange: '¥1,000〜',
  currenciesAccepted: 'JPY',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '我那覇 152番地8',
    addressLocality: '豊見城市',
    addressRegion: '沖縄県',
    postalCode: '901-0231',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.1789815,
    longitude: 127.6711731,
  },
  areaServed: [
    { '@type': 'Airport', name: '那覇空港', iataCode: 'OKA' },
    { '@type': 'City', name: '豊見城市' },
    { '@type': 'City', name: '那覇市' },
    { '@type': 'AdministrativeArea', name: '沖縄県' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '21:00',
  },
  sameAs: ['https://www.instagram.com/zenryu_p'],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomePage />
    </>
  );
}
