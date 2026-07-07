'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ZENRYU_DATA } from '@/lib/data';
import { UtilBar } from './UtilBar';
import { Header } from './Header';
import { TrustStrip } from './TrustStrip';
import { CtaBand } from './CtaBand';
import { Footer } from './Footer';
import { InquirySection } from './InquirySection';

export default function ParkingPage() {
  const data = ZENRYU_DATA;
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <UtilBar />
      <Header current="parking" />

      <section className="page-hero page-hero--parking">
        <div className="page-hero__bg-mark">磨</div>
        <div className="page-hero__inner">
          <div className="page-hero__breadcrumb">
            <Link href="/">ホーム</Link>
            <span className="sep">/</span>
            <span className="current">カーケア・パーキング</span>
          </div>
          <div className="page-hero__layout">
            <div>
              <div className="eyebrow">CAR CARE &amp; PARKING</div>
              <h1 className="page-hero__title page-hero__title--nowrap">
                那覇空港<em>パーキング</em><br/>預ける間に磨かれる
              </h1>
              <p className="page-hero__lede">
                那覇空港パーキングをお探しの方へ。ご旅行・ご出張のあいだ、那覇空港のすぐそばで愛車をお預かりします。駐車料金は1日¥1,000、空港まで送迎付き。お預かり中に手洗い洗車・コーティングまで施工するカーケアコース (松竹梅) もご利用いただけます。
              </p>
            </div>
            <dl className="page-hero__meta">
              <div className="page-hero__meta__row"><dt>パーキング</dt><dd>¥1,000 / 日</dd></div>
              <div className="page-hero__meta__row"><dt>梅</dt><dd>¥5,000 一式</dd></div>
              <div className="page-hero__meta__row"><dt>竹</dt><dd>¥15,000 一式</dd></div>
              <div className="page-hero__meta__row"><dt>松</dt><dd>¥50,000〜</dd></div>
              <div className="page-hero__meta__row"><dt>送迎</dt><dd>コース込み</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Concept band */}
      <section className="concept" style={{ padding: '100px 40px' }}>
        <div className="concept__inner">
          <div className="eyebrow">CONCEPT · 私たちの発想</div>
          <h2 className="concept__title">
            駐車している時間を、<br/><em>車の価値が上がる時間へ</em>
          </h2>
          <div className="concept__image">
            <img src="/assets/concept.webp" width={1674} height={940} alt="出（ご旅行・ご出張へ）→ 磨（駐車中に洗車・磨き・コーティングを施工）→ 帰（整えられたお車でお出迎え）" />
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="services">
        <div className="section">
          <div className="eyebrow">WHY · 選ばれる理由</div>
          <h2 className="section-title heading-1line-sp">那覇空港パーキングで<br className="br-sp" /><em>選ばれる4つの理由</em></h2>
          <p className="section-lede">
            ご旅行中・ご出張中の不安をすべて取り除く、ゼンリュウの那覇空港パーキング。駐車場の予約から空港送迎、お預かり中のカーケアまで一貫して承ります。
          </p>
          <div className="services__grid">
            <div className="service-tile">
              <div className="service-tile__num">01</div>
              <div className="service-tile__icon">近</div>
              <h3 className="service-tile__title">那覇空港から車ですぐの好立地</h3>
              <p className="service-tile__desc">
                那覇空港のすぐ近く。空港との往復が短時間で済むため、お車のお預かりからご出発、ご帰着後の送迎までスムーズに行えます。
              </p>
              <ul className="service-tile__list">
                <li>那覇空港まで送迎付き</li>
                <li>国内線・国際線ターミナル対応</li>
                <li>出発前後の移動が短時間</li>
              </ul>
            </div>
            <div className="service-tile">
              <div className="service-tile__num">02</div>
              <div className="service-tile__icon">道</div>
              <h3 className="service-tile__title">名嘉地ICを降りてすぐ</h3>
              <p className="service-tile__desc">
                那覇空港自動車道「名嘉地インターチェンジ」を降りてすぐ。お車の持ち込み・引き渡しがスムーズで、遠方からのご利用も道に迷わず安心です。
              </p>
              <ul className="service-tile__list">
                <li>名嘉地ICからすぐの好アクセス</li>
                <li>引き渡し〜送迎までスムーズ</li>
                <li>遠方・南部エリアからも便利</li>
              </ul>
            </div>
            <div className="service-tile">
              <div className="service-tile__num">03</div>
              <div className="service-tile__icon">磨</div>
              <h3 className="service-tile__title">預けている間に、車を磨くサービス</h3>
              <p className="service-tile__desc">
                駐車しているあいだに、職人が手洗い洗車・磨き・コーティング・車内清掃を施工。停めている時間が、そのまま愛車が美しくなる時間になります。
              </p>
              <ul className="service-tile__list">
                <li>手洗い洗車〜本格コーティング</li>
                <li>車内清掃にも対応</li>
                <li>松竹梅の3プランから選べる</li>
              </ul>
            </div>
            <div className="service-tile">
              <div className="service-tile__num">04</div>
              <div className="service-tile__icon">便</div>
              <h3 className="service-tile__title">電話・Instagramですぐ連絡</h3>
              <p className="service-tile__desc">
                ご予約・空き状況の確認、便変更・延長などは、お電話または公式Instagramのダイレクトメッセージですぐにご相談いただけます。
              </p>
              <ul className="service-tile__list">
                <li>営業時間内にすぐ受付</li>
                <li>領収書・経費精算もご相談OK</li>
                <li>法人ご契約も承ります</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="how">
        <div className="section">
          <div className="eyebrow">FLOW · ご利用の流れ</div>
          <h2 className="section-title">ご予約からお引き渡しまで</h2>
          <p className="section-lede">
            お預かり時のご対面確認から、ご帰着便に合わせたお引き渡しまで、スタッフが一貫して担当いたします。
          </p>
        </div>
        <div className="section" style={{ paddingTop: 0 }}>
          <div className="how__grid">
            {data.steps.map((s) => (
              <div className="how__step" key={s.num}>
                <div className="how__step__num">STEP · {s.num}</div>
                <div className="how__step__icon">{s.glyph}</div>
                <h3 className="how__step__title">{s.title}</h3>
                <p className="how__step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquirySection
        defaultSubject="parking"
        eyebrow="INQUIRY · ご予約・お問い合わせ"
        title="ご予約・ご相談は、<br/>お電話 / Instagram にて"
        lede="お電話、または公式Instagramのダイレクトメッセージにて承ります。空き状況もお気軽にお問い合わせください。"
      />

      {/* Cross-link to detailing */}
      <section className="crosslink">
        <div className="section">
          <div className="eyebrow">DETAIL · 技術詳細</div>
          <Link href="/detailing" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="crosslink__card">
              <div className="crosslink__char">磨</div>
              <div>
                <h3 className="crosslink__title">カーディテイリングの詳細はこちら</h3>
                <p className="crosslink__desc">
                  松プランの本格研磨・ガラスコーティング、竹プランの水垢落とし・撥水コートなど、施工技術と工程の詳細をディテイリング専用ページにてご案内しております。
                </p>
              </div>
              <span className="btn btn--gold btn--sm">技術詳細を見る <span className="btn__arrow">→</span></span>
            </div>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="section section--narrow">
          <div className="eyebrow">FAQ · よくあるご質問</div>
          <h2 className="section-title">カーケア・パーキングについて</h2>
          <div className="section-gap"></div>
          <div className="faq__list">
            {data.faqs.map((f, i) => (
              <div key={i} className={`faq__item ${openFaq === i ? 'is-open' : ''}`}>
                <button className="faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span className="faq__num">Q.{String(i + 1).padStart(2, '0')}</span>
                  <span>{f.q}</span>
                  <span className="faq__icon">＋</span>
                </button>
                <div className="faq__a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="愛車のことは、<br class='br-sp'/><em>ゼンリュウ</em>へ"
        sub="ご予約・ご相談はお電話、または公式Instagramのダイレクトメッセージにて承ります。初めてのお客様も、スタッフが丁寧にご案内いたします。"
        primaryLabel="Instagramへ"
        primaryHref={data.company.instagram}
        primaryExternal
        bgImage="/assets/cta-parking.webp"
      />
      <Footer />
    </>
  );
}
