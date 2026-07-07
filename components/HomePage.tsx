'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ZENRYU_DATA } from '@/lib/data';
import { UtilBar } from './UtilBar';
import { Header } from './Header';
import { TrustStrip } from './TrustStrip';
import { CtaBand } from './CtaBand';
import { Footer } from './Footer';
import { InquirySection } from './InquirySection';

export default function HomePage() {
  const data = ZENRYU_DATA;
  const c = data.company;
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const els = document.querySelectorAll('.triad-tile__char');
    if (els.length === 0 || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-revealed');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <UtilBar />
      <Header current="home" />

      {/* Hero */}
      <section className="hero">
        <div className="hero__bg-mark">全</div>
        <div className="hero__inner">
          <div className="hero__copy">
            <div className="hero__kicker">
              <span className="hero__kicker__dot"></span>
              那覇空港 パーキング × カーディテイリング
            </div>
            <h1 className="hero__title">
              預ける間に、<br/><em>磨かれる</em>
            </h1>
            <p className="hero__lede">
              <strong className="hero__marker">出張や観光などで那覇空港をご利用されるお客様のお車をお預かりしております。</strong>
              受け取りからお引渡しまで一貫して行いますので、安心してご利用いただけます。
              那覇空港近辺で駐車場をお探しの方は、ぜひゼンリュウまでご連絡ください。
            </p>
            <div className="hero__actions">
              <Link className="btn btn--gold btn--lg" href="/parking">那覇空港パーキングを見る</Link>
              <Link className="btn btn--gold btn--lg" href="/detailing">カーディテイリングを見る</Link>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat__num">2事業</div>
                <div className="hero__stat__label">パーキング＋ケア</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat__num">松竹梅</div>
                <div className="hero__stat__label">ケア3プラン</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat__num">自社施工</div>
                <div className="hero__stat__label">コーティング</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Concept */}
      <section className="concept">
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

      {/* Services — 2 businesses */}
      <section className="triad" id="services">
        <div className="section">
          <div className="eyebrow">SERVICES · 2つの事業</div>
          <h2 className="section-title heading-1line-sp">ゼンリュウの2つの柱</h2>
          <p className="section-lede">
            「空港パーキング」と「カーディテイリング」。お預かりした駐車時間がそのまま施工時間になる——2つの事業が組み合わさることで、停めるだけで愛車が磨き上がります。
          </p>
        </div>
        <div className="triad__grid triad__grid--two">
          <Link className="triad-tile triad-tile--parking" href="/parking">
            <div className="triad-tile__char">駐</div>
            <div className="triad-tile__num">SERVICE · 01</div>
            <h3 className="triad-tile__name">空港パーキング</h3>
            <div className="triad-tile__en">AIRPORT PARKING</div>
            <p className="triad-tile__desc">
              那覇空港のすぐそばで愛車をお預かり。ご旅行・ご出張のあいだ、1日¥1,000で安心してお停めいただけます。空港まで送迎付き。
            </p>
            <div className="triad-tile__price">¥1,000<small>/ 1日</small></div>
            <span className="triad-tile__cta">空港パーキングを見る <span className="triad-tile__arrow">→</span></span>
          </Link>
          <Link className="triad-tile triad-tile--detailing" href="/detailing">
            <div className="triad-tile__char">磨</div>
            <div className="triad-tile__num">SERVICE · 02</div>
            <h3 className="triad-tile__name">カーディテイリング</h3>
            <div className="triad-tile__en">CAR DETAILING</div>
            <p className="triad-tile__desc">
              預かっている時間で、職人が手洗い洗車・磨き・本格コーティングから車内清掃まで施工。松竹梅の3プランからお選びいただけます。
            </p>
            <div className="triad-tile__price">¥5,000 〜 ¥50,000<small>松竹梅プラン</small></div>
            <span className="triad-tile__cta">カーディテイリングを見る <span className="triad-tile__arrow">→</span></span>
          </Link>
        </div>
      </section>

      {/* Testimonials — 実在のお声が集まったら復活 */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section className="voice" id="voice">
          <div className="section">
            <div className="eyebrow">VOICE · お客様の声</div>
            <h2 className="section-title">何度もお選びいただく、その理由。</h2>
            <p className="section-lede">
              ご利用後にお寄せいただいたお声から、一部をご紹介いたします。
            </p>
            <div className="voice__grid">
              {data.testimonials.map((v, i) => (
                <div className="voice-card" key={i}>
                  <div className="voice-card__quote">&quot;</div>
                  <div className="voice-card__stars">★★★★★</div>
                  <h3 className="voice-card__title">{v.title}</h3>
                  <p className="voice-card__body">{v.body}</p>
                  <div className="voice-card__meta">
                    <span className="voice-card__attr">{v.attr}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Access */}
      <section className="access" id="access">
        <div className="section">
          <div className="eyebrow">ACCESS · アクセス</div>
          <h2 className="section-title">アクセス・店舗情報</h2>
          <p className="section-lede">
            ゼンリュウの営業所は沖縄県豊見城市にございます。パーキングのお預かり・お引き渡しは那覇空港にて承ります。
          </p>
          <div className="access__grid">
            <div className="access__info">
              <dl>
                <dt>所在地</dt>
                <dd>
                  <strong>本社・営業所</strong>
                  {c.address}
                </dd>
                <dt>営業時間</dt>
                <dd><strong>{c.hours}</strong>定休日はお問い合わせください</dd>
                <dt>電話</dt>
                <dd><strong style={{ color: 'var(--gold)', fontSize: 20 }}>{c.phone}</strong>営業時間内にスタッフが対応</dd>
                <dt>送迎</dt>
                <dd><strong>那覇空港 国内線・国際線対応</strong>パーキングご利用のお客様</dd>
                <dt>Instagram</dt>
                <dd>
                  <a href={c.instagram} target="_blank" rel="noopener" style={{ color: 'var(--gold)' }}>@zenryu_p</a>
                </dd>
              </dl>
            </div>
            <div className="access__map">
              <iframe
                className="access__map__frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5438430711615!2d127.6711731!3d26.1789815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5692e2827861b%3A0x670572e99889e18!2z44K844Oz44Oq44Ol44Km44Os44Oz44K_44Kr44O8!5e0!3m2!1sja!2sjp!4v1782042663955!5m2!1sja!2sjp"
                title="ゼンリュウ 所在地マップ"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="company" id="company">
        <div className="section">
          <div className="eyebrow">COMPANY · 会社概要</div>
          <h2 className="section-title">私たちについて</h2>
          <div style={{ height: 32 }}></div>
          <div className="company__layout">
            <div className="company__visual">
              <div className="company__motto">
                「全力で。丁寧に。お預かりした一台を、家族のように。」
              </div>
            </div>
            <div>
              <table className="company__table">
                <tbody>
                  <tr><th>商号</th><td><strong>ゼンリュウレンタカー</strong></td></tr>
                  <tr><th>所在地</th><td>{c.address}</td></tr>
                  <tr><th>電話</th><td>{c.phone}</td></tr>
                  <tr><th>営業時間</th><td>{c.hours}</td></tr>
                  <tr><th>事業内容</th><td>① 空港パーキング事業<br/>② カーディテイリング事業</td></tr>
                  <tr><th>Instagram</th><td><a href={c.instagram} target="_blank" rel="noopener" style={{ color: 'var(--gold)' }}>@zenryu_p</a></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="section section--narrow">
          <div className="eyebrow">FAQ · よくあるご質問</div>
          <h2 className="section-title">ご利用の前に</h2>
          <div style={{ height: 32 }}></div>
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

      <InquirySection
        defaultSubject="parking"
        eyebrow="INQUIRY · お問い合わせ"
        title="ご予約・ご相談は、<br/>お電話 / Instagram にて"
        lede="パーキング・カーディテイリング、いずれのお問い合わせも下記より承ります。営業時間内にスタッフがご対応いたします。"
      />

      <CtaBand
        title="愛車のことは、<br class='br-sp'/><em>ゼンリュウ</em>へ"
        sub="ご予約・ご相談はお電話、または公式Instagramのダイレクトメッセージにて承ります。"
        primaryLabel="Instagramへ"
        primaryHref={c.instagram}
        primaryExternal
        bgImage="/assets/cta-parking.webp"
      />
      <Footer />
    </>
  );
}
