'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ZENRYU_DATA, DETAILING_FAQS } from '@/lib/data';
import { UtilBar } from './UtilBar';
import { Header } from './Header';
import { CtaBand } from './CtaBand';
import { Footer } from './Footer';
import { InquirySection } from './InquirySection';

export default function DetailingPage() {
  const data = ZENRYU_DATA;
  const [openFaq, setOpenFaq] = useState(0);

  const detailFaqs = DETAILING_FAQS;

  return (
    <>
      <UtilBar />
      <Header current="detailing" />

      {/* Page hero */}
      <section className="page-hero page-hero--detailing">
        <div className="page-hero__bg-mark">磨</div>
        <div className="page-hero__inner">
          <div className="page-hero__breadcrumb">
            <Link href="/">ホーム</Link>
            <span className="sep">/</span>
            <span className="current">カーディテイリング</span>
          </div>
          <div className="page-hero__layout">
            <div>
              <div className="eyebrow">CAR DETAILING · カーディテイリング</div>
              <h1 className="page-hero__title page-hero__title--nowrap">
                豊見城の<em>カーディテイリング</em><br/>
                洗車・車磨き・車内清掃<br/>
                ¥5,000〜
              </h1>
              <p className="page-hero__lede">
                豊見城市でカーディテイリング・車磨きをお探しの方へ。手洗い洗車から本格的な車磨き・ガラスコーティング、さらに車内清掃まで、ご用途に合わせた3つのコース (松竹梅) でご提供いたします。沖縄特有の塩害・紫外線にさらされた一台一台と向き合い、外も内も本来の美しさを引き出します。
              </p>
            </div>
            <dl className="page-hero__meta">
              <div className="page-hero__meta__row"><dt>クイック</dt><dd>¥5,000 一式</dd></div>
              <div className="page-hero__meta__row"><dt>スタンダード</dt><dd>¥15,000 一式</dd></div>
              <div className="page-hero__meta__row"><dt>プレミアム</dt><dd>¥50,000〜</dd></div>
              <div className="page-hero__meta__row"><dt>所要</dt><dd>半日 〜 3〜4日</dd></div>
              <div className="page-hero__meta__row"><dt>対応</dt><dd>輸入車・EV車</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* Detailing menu — 松竹梅プラン (機能リスト付き) */}
      <section className="plans" id="menu">
        <div className="section">
          <div className="plans__header">
            <div>
              <div className="eyebrow">MENU · 松竹梅コース</div>
              <h2 className="section-title">豊見城のカーディテイリング<br/>三つの<em>コース</em></h2>
            </div>
          </div>

          <div className="plans__grid">
            {data.plans.map((p) => (
              <div
                key={p.key}
                className={`plan-card ${p.featured ? 'plan-card--featured' : ''} ${p.premium ? 'plan-card--premium' : ''}`}
              >
                {p.featured && <div className="plan-card__ribbon">人気No.1</div>}
                {p.premium && <div className="plan-card__ribbon plan-card__ribbon--premium">Premium</div>}
                <div className="plan-card__head">
                  <div className="plan-card__char-wrap">
                    <div className="plan-card__char">{p.char}</div>
                    <div className="plan-card__romaji">{p.romaji}</div>
                  </div>
                  <div className="plan-card__head-body">
                    <h3 className="plan-card__name">{p.name}</h3>
                    <p className="plan-card__tagline">{p.tagline}</p>
                  </div>
                </div>
                <div className="plan-card__price">
                  <span className="plan-card__price__yen">¥</span>
                  <span className="plan-card__price__total">{p.price.toLocaleString()}</span>
                  <span className="plan-card__price__suffix">{p.priceNote}</span>
                </div>
                <div className="plan-card__duration">所要 {p.duration}</div>
                <ul className="plan-card__features">
                  {p.features.map((f, i) => (
                    <li key={i} className={f.ok ? '' : 'is-off'}>
                      {f.ok
                        ? <span className="plan-card__check">✓</span>
                        : <span className="plan-card__cross">—</span>}
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <a className={`btn ${p.featured || p.premium ? 'btn--gold' : 'btn--ghost'} plan-card__cta`} href="#inquiry">
                  このコースで問い合わせる <span className="btn__arrow">→</span>
                </a>
              </div>
            ))}
          </div>
          <p className="plans__note">※ 料金は普通車基準・税込。SUV・大型車は +20%、輸入車は +30% にて承ります。那覇空港のパーキングと併せてご利用の場合は、別途パーキング ¥1,000/日を加算いたします。</p>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="section">
          <div className="eyebrow">PROCESS · 7つの工程</div>
          <h2 className="section-title">一台一台、<em>丁寧に向き合う</em></h2>
          <p className="section-lede">
            プレミア・ディテイリングは下地処理から仕上げまで合計12時間以上を要する工程です。
            一台ごとに最適な手順を組み立て、最高の状態に仕上げます。
          </p>
          <div className="process__list">
            {data.detailingProcess.map((p) => (
              <div className="process__step" key={p.num}>
                <div className="process__step__num">{p.num}</div>
                <h3 className="process__step__title">{p.title}</h3>
                <p className="process__step__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="beforeafter">
        <div className="section">
          <div className="eyebrow">WORKS · 施工事例</div>
          <h2 className="section-title">磨く前と、磨いた<em>後と</em></h2>
          <p className="section-lede">
            施工後の艶・透明感をご覧ください。手洗い洗車・磨き・コーティングによるビフォーアフターの一部をご紹介します。
          </p>
          <div className="beforeafter__image">
            <img src="/assets/works.png" alt="カーディテイリング施工事例 ビフォーアフター：スズキ ソリオ、ホンダ N-BOX、BMW 7シリーズ、ホンダ シビックの磨き・コーティング前後比較" />
          </div>
        </div>
      </section>

      {/* Artisan — 実在情報が揃ったら復活 */}
      {data.artisan && (
        <section className="artisan">
          <div className="section">
            <div className="eyebrow">ARTISAN · 職人紹介</div>
            <h2 className="section-title">磨くのは、<br/>塗装ではなく、<em>車の品格。</em></h2>
            <div style={{ height: 32 }}></div>
            <div className="artisan__layout">
              <div className="artisan__photo">
                <div className="artisan__photo__label">[ PHOTO · チーフ・ディテイラー ]</div>
              </div>
              <div>
                <p className="artisan__quote">{data.artisan.quote}</p>
                <div className="artisan__name">{data.artisan.name}</div>
                <div className="artisan__role">{data.artisan.role}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cross-link to parking */}
      <section className="crosslink">
        <div className="section">
          <div className="eyebrow">PACKAGE · 空港駐車との組合せ</div>
          <Link href="/parking" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="crosslink__card">
              <div className="crosslink__char">駐</div>
              <div>
                <h3 className="crosslink__title">ご出張・ご旅行のあいだにディテイリング</h3>
                <p className="crosslink__desc">
                  那覇空港駐車「松プラン」なら、お預かり期間中にプレミア・ディテイリングまで完了。
                  3日以上のご旅行の機会に、効率良く愛車をリフレッシュできます。
                </p>
              </div>
              <span className="btn btn--gold btn--sm">駐車プランを見る <span className="btn__arrow">→</span></span>
            </div>
          </Link>
        </div>
      </section>

      {/* Detailing FAQ */}
      <section className="faq" id="faq">
        <div className="section section--narrow">
          <div className="eyebrow">FAQ · ディテイリング Q&amp;A</div>
          <h2 className="section-title">ディテイリングについて</h2>
          <div style={{ height: 32 }}></div>
          <div className="faq__list">
            {detailFaqs.map((f, i) => (
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
        title="愛車を、<em>本来の姿へ</em>"
        sub="ディテイリング単独のご依頼も承ります。お電話・公式Instagramにてお気軽にご相談ください。"
        primaryLabel="Instagramへ"
        primaryHref={data.company.instagram}
        primaryExternal
        bgImage="/assets/cta-detailing.png"
      />
      <InquirySection
        defaultSubject="detailing"
        eyebrow="INQUIRY · お問い合わせ"
        title="ディテイリングの<br/>ご相談はこちらから"
        lede="お車の状態・ご予算・ご希望の仕上がりなど、どのようなご相談でも職人が丁寧にヒアリングいたします。"
      />
      <Footer />
    </>
  );
}
