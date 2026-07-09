import type { Metadata } from 'next';
import PricingPage from '@/components/PricingPage';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
  title: '全琉空港パーキング 料金表｜1日¥1,000〜・月額¥20,000 | ゼンリュウ',
  description:
    '全琉空港パーキングの料金表。1日¥1,000、2〜20日もわかりやすい日数別料金、21日以上は月額¥20,000。リピーター様は洗車・コーティングの割引特典あり。送迎付き。',
  keywords: [
    '全琉空港パーキング 料金',
    '那覇空港 駐車場 料金',
    '那覇空港 駐車場 月額',
    '那覇空港 駐車場 長期',
    '空港パーキング 料金表',
  ],
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: '全琉空港パーキング 料金表｜1日¥1,000〜・月額¥20,000 | ゼンリュウ',
    description: '日数別のわかりやすい空港パーキング料金。21日以上は月額¥20,000、リピーター特典あり。',
    type: 'website',
    locale: 'ja_JP',
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <PricingPage />;
}
