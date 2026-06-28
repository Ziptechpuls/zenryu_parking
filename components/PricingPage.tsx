'use client';

import Link from 'next/link';
import { ZENRYU_DATA } from '@/lib/data';
import { UtilBar } from './UtilBar';
import { Header } from './Header';
import { CtaBand } from './CtaBand';
import { Footer } from './Footer';

const PARKING_RATES = [
  { days: '1日', price: '1,000円', note: '割引適応外' },
  { days: '2日〜5日', price: '2,000円〜5,000円', note: 'リピーター様特典あり！洗車・コーティングを割引いたします。' },
  { days: '6日〜10日', price: '6,000円〜10,000円', note: 'リピーター様特典あり！洗車・コーティングを割引いたします。' },
  { days: '11日〜20日', price: '11,000円〜20,000円', note: 'リピーター様特典あり！洗車・コーティングを割引いたします。' },
  { days: '21日以上', price: '月額 20,000円', note: '割引適応外' },
];

export default function PricingPage() {
  const data = ZENRYU_DATA;
  return (
    <>
      <UtilBar />
      <Header current="pricing" />

      <section className="page-hero page-hero--parking">
        <div className="page-hero__bg-mark">¥</div>
        <div className="page-hero__inner">
          <div className="page-hero__breadcrumb">
            <Link href="/">ホーム</Link>
            <span className="sep">/</span>
            <span className="current">料金表</span>
          </div>
          <div className="eyebrow">PRICING · 料金表</div>
          <h1 className="page-hero__title heading-1line-sp">空港パーキング<em>料金表</em></h1>
          <p className="page-hero__lede">
            安心・安全の那覇空港パーキング。ご利用日数に応じたわかりやすい料金です。21日以上は月額20,000円で、長期のお預かりもお得にご利用いただけます。
          </p>
        </div>
      </section>

      <section className="section section--narrow">
        <div className="eyebrow">AIRPORT PARKING · 空港パーキング料金</div>
        <h2 className="section-title heading-1line-sp">空港パーキング料金表</h2>
        <div style={{ height: 28 }}></div>
        <div className="price-table-hint" aria-hidden="true">← 横にスクロールできます →</div>
        <div className="price-table-wrap">
          <table className="price-table">
            <thead>
              <tr>
                <th>ご利用日数</th>
                <th>料金（税込）</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>
              {PARKING_RATES.map((r, i) => (
                <tr key={i}>
                  <td className="price-table__days">{r.days}</td>
                  <td className="price-table__price">{r.price}</td>
                  <td className="price-table__note">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="plans__note" style={{ marginTop: 24, lineHeight: 1.9 }}>
          ※ ハイシーズン時（年末年始・ゴールデンウィーク・お盆など）は料金が変動する場合がございます。詳細はお問い合わせください。<br />
          ※ ご予約・お問い合わせはお気軽にご連絡ください。
        </p>
      </section>

      <CtaBand
        title="ご予約・お問い合わせは、<em>お気軽に</em>"
        sub="料金・空き状況のご確認、ご予約は、お電話または公式Instagramのダイレクトメッセージにて承ります。"
        primaryLabel="Instagramへ"
        primaryHref={data.company.instagram}
        primaryExternal
        bgImage="/assets/cta-parking.png"
      />
      <Footer />
    </>
  );
}
