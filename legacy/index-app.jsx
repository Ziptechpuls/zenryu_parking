/* INDEX page — Brand hub, 2 businesses (空港パーキング + カーディテイリング)
   コンセプト: 駐車しているあいだに、洗車・磨き・コーティングを施工する */
const { useState: useStateIdx } = React;

function IndexApp() {
  const data = window.ZENRYU_DATA;
  const c = data.company;
  const [openFaq, setOpenFaq] = useStateIdx(0);

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
              預けるあいだに、<em>磨かれる。</em>
            </h1>
            <p className="hero__lede">
              ゼンリュウの2つの事業は、<strong>空港パーキング</strong>と<strong>カーディテイリング</strong>。
              ご旅行・ご出張で車を停めているそのあいだに、職人が洗車・磨き・コーティングを施工します。
            </p>
            <div className="hero__actions">
              <a className="btn btn--gold btn--lg" href="parking.html">パーキングを見る</a>
              <a className="btn btn--ghost btn--lg" href="detailing.html">ディテイリングを見る</a>
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

          <div className="hero__visual">
            <div className="hero__photo">
              <div className="hero__photo__placeholder">
                <div className="hero__photo__label">[ HERO IMAGERY ]</div>
                <div className="hero__photo__desc">那覇空港・施工中の高級セダン (実写差し替え予定)</div>
              </div>
            </div>
            <div className="hero__card hero__card--trust">
              <div className="hero__card__title">2つの事業</div>
              <div className="hero__card__row"><span>パーキング</span><strong>¥1,000/日</strong></div>
              <div className="hero__card__row"><span>ディテイリング</span><strong>松竹梅</strong></div>
            </div>
            <div className="hero__card hero__card--booking">
              <div className="hero__card__title">ケア最短</div>
              <div className="hero__card__big">¥5,000<span style={{fontSize:14, marginLeft:4, color:'var(--ink-mute)'}}>一式〜</span></div>
              <div className="hero__card__small">梅コース・手洗い洗車と送迎付き<br/><span style={{color:'var(--gold)'}}>+ パーキング ¥1,000/日</span></div>
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
            駐車している時間を、<em>車の価値が上がる時間へ。</em>
          </h2>
          <div className="concept__flow">
            <div className="concept__flow__node">
              <div className="concept__flow__char">出</div>
              <div className="concept__flow__label">DEPART</div>
              <div className="concept__flow__text">ご旅行・ご出張へ。愛車を空港でお預けください。</div>
            </div>
            <div className="concept__flow__arrow">→</div>
            <div className="concept__flow__node">
              <div className="concept__flow__char">磨</div>
              <div className="concept__flow__label">CARE</div>
              <div className="concept__flow__text">駐車しているあいだに、職人が洗車・磨き・コーティングを施工。</div>
            </div>
            <div className="concept__flow__arrow">→</div>
            <div className="concept__flow__node">
              <div className="concept__flow__char">帰</div>
              <div className="concept__flow__label">RETURN</div>
              <div className="concept__flow__text">ご帰着便に合わせて、整えられたお車でお出迎え。</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — 2 businesses */}
      <section className="triad" id="services">
        <div className="section">
          <div className="eyebrow">SERVICES · 2つの事業</div>
          <h2 className="section-title">ゼンリュウの、2つの本業。</h2>
          <p className="section-lede">
            「空港パーキング」と「カーディテイリング」。お預かりした駐車時間がそのまま施工時間になる——2つの事業が組み合わさることで、停めるだけで愛車が磨き上がります。
          </p>
        </div>
        <div className="triad__grid triad__grid--two">
          <a className="triad-tile" href="parking.html">
            <div className="triad-tile__char">駐</div>
            <div className="triad-tile__num">SERVICE · 01</div>
            <h3 className="triad-tile__name">空港パーキング</h3>
            <div className="triad-tile__en">AIRPORT PARKING</div>
            <p className="triad-tile__desc">
              那覇空港のすぐそばで愛車をお預かり。ご旅行・ご出張のあいだ、1日¥1,000で安心してお停めいただけます。空港まで送迎付き。
            </p>
            <div className="triad-tile__price">¥1,000<small>/ 1日</small></div>
            <span className="triad-tile__cta">パーキングを見る <span className="triad-tile__arrow">→</span></span>
          </a>
          <a className="triad-tile" href="detailing.html">
            <div className="triad-tile__char">磨</div>
            <div className="triad-tile__num">SERVICE · 02</div>
            <h3 className="triad-tile__name">カーディテイリング</h3>
            <div className="triad-tile__en">CAR DETAILING</div>
            <p className="triad-tile__desc">
              預かっている時間で、職人が手洗い洗車・磨き・本格コーティングまで施工。松竹梅の3プランからお選びいただけます。
            </p>
            <div className="triad-tile__price">¥5,000 〜 ¥50,000<small>松竹梅プラン</small></div>
            <span className="triad-tile__cta">ディテイリングを見る <span className="triad-tile__arrow">→</span></span>
          </a>
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
                <div className="voice-card__quote">"</div>
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
          <h2 className="section-title">アクセス・店舗情報。</h2>
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
                <dd><strong style={{color:'var(--gold)', fontSize:20}}>{c.phone}</strong>営業時間内にスタッフが対応</dd>
                <dt>送迎</dt>
                <dd><strong>那覇空港 国内線・国際線対応</strong>パーキングご利用のお客様</dd>
                <dt>Instagram</dt>
                <dd>
                  <a href={c.instagram} target="_blank" rel="noopener" style={{color:'var(--gold)'}}>@zenryu_rentacar</a>
                </dd>
              </dl>
            </div>
            <div className="access__map">
              <iframe
                className="access__map__frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5438430711615!2d127.6711731!3d26.1789815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5692e2827861b%3A0x670572e99889e18!2z44K844Oz44Oq44Ol44Km44Os44Oz44K_44Kr44O8!5e0!3m2!1sja!2sjp!4v1782042663955!5m2!1sja!2sjp"
                title="ゼンリュウ 所在地マップ"
                allowFullScreen=""
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
          <h2 className="section-title">私たちについて。</h2>
          <div style={{height:32}}></div>
          <div className="company__layout">
            <div className="company__visual">
              <div className="company__seal">
                <div className="company__seal__char">全</div>
              </div>
              <div className="company__motto">
                「全力で。丁寧に。お預かりした一台を、家族のように。」
              </div>
            </div>
            <div>
              <table className="company__table">
                <tbody>
                  <tr><th>商号</th><td><strong>ゼンリュウ</strong></td></tr>
                  <tr><th>所在地</th><td>{c.address}</td></tr>
                  <tr><th>電話</th><td>{c.phone}</td></tr>
                  <tr><th>営業時間</th><td>{c.hours}</td></tr>
                  <tr><th>事業内容</th><td>① 空港パーキング事業<br/>② カーディテイリング事業</td></tr>
                  <tr><th>Instagram</th><td><a href={c.instagram} target="_blank" rel="noopener" style={{color:'var(--gold)'}}>@zenryu_rentacar</a></td></tr>
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
          <h2 className="section-title">ご利用の前に。</h2>
          <div style={{height: 32}}></div>
          <div className="faq__list">
            {data.faqs.map((f, i) => (
              <div key={i} className={`faq__item ${openFaq===i?'is-open':''}`}>
                <button className="faq__q" onClick={()=>setOpenFaq(openFaq===i?-1:i)}>
                  <span className="faq__num">Q.{String(i+1).padStart(2,'0')}</span>
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
        title="ご予約・ご相談は、お電話 / メールにて。"
        lede="パーキング・カーディテイリング、いずれのお問い合わせも下記より承ります。営業時間内にスタッフがご対応いたします。"
      />

      <CtaBand
        title="愛車のことは、<em>ゼンリュウ</em>へ。"
        sub="ご予約・ご相談はお電話、メールフォーム、LINEにて承ります。"
        primaryLabel="パーキングを予約する"
        primaryHref="parking.html"
      />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<IndexApp />);
