/* INDEX page — Brand hub, 3 businesses
   Uses real rental data from zenryurentacar.com, no fabricated numbers */
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
              沖縄モビリティ・トータルサービス
            </div>
            <h1 className="hero__title">
              預けるあいだに、<em>磨かれる。</em>
            </h1>
            <p className="hero__lede">
              那覇空港でお車をお預かりし、ご旅行・ご出張のあいだにカーケアを施工。
              レンタカー・認定中古車販売も含めた、沖縄のモビリティを一拠点でご提供いたします。
            </p>
            <div className="hero__actions">
              <a className="btn btn--gold btn--lg" href="parking.html">カーケアプラン</a>
              <a className="btn btn--ghost btn--lg" href="#triad">3つの事業を見る</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat__num">松竹梅</div>
                <div className="hero__stat__label">3プラン展開</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat__num">3事業</div>
                <div className="hero__stat__label">統合モデル</div>
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
              <div className="hero__card__title">3つの事業</div>
              <div className="hero__card__row"><span>カーケア</span><strong>松竹梅</strong></div>
              <div className="hero__card__row"><span>レンタカー</span><strong>7車種</strong></div>
              <div className="hero__card__row"><span>中古車</span><strong>認定販売</strong></div>
            </div>
            <div className="hero__card hero__card--booking">
              <div className="hero__card__title">カーケア最短</div>
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
              <div className="concept__flow__text">ご滞在中に職人がカーケア・コーティングを施工します。</div>
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

      {/* Triad — 3 businesses */}
      <section className="triad" id="triad">
        <div className="section">
          <div className="eyebrow">SERVICES · 3つの事業</div>
          <h2 className="section-title">沖縄モビリティ、3つの本業。</h2>
          <p className="section-lede">
            「カーケア・パーキング」「レンタカー」「認定中古車販売」。それぞれの事業が連動し、お客様のあらゆるモビリティ・ニーズにお応えします。
          </p>
        </div>
        <div className="triad__grid">
          <a className="triad-tile" href="parking.html">
            <div className="triad-tile__char">磨</div>
            <div className="triad-tile__num">SERVICE · 01</div>
            <h3 className="triad-tile__name">カーケア・<br/>パーキング</h3>
            <div className="triad-tile__en">CAR CARE &amp; PARKING</div>
            <p className="triad-tile__desc">
              ご旅行中の愛車をお預かりし、その時間で磨き上げます。洗車・撥水コート・本格コーティングまで、松竹梅プランでご用意。
            </p>
            <div className="triad-tile__price">¥5,000 〜 ¥50,000<small>+ パーキング¥1,000/日</small></div>
            <span className="triad-tile__cta">プランを見る <span className="triad-tile__arrow">→</span></span>
          </a>
          <a className="triad-tile" href="#rental">
            <div className="triad-tile__char">借</div>
            <div className="triad-tile__num">SERVICE · 02</div>
            <h3 className="triad-tile__name">レンタカー</h3>
            <div className="triad-tile__en">CAR RENTAL</div>
            <p className="triad-tile__desc">
              沖縄のコンパクトカー専門レンタカー。コンパクトカー・エコカー・ワゴン・ミニバンを取り揃え、すべてに自社施工のコーティング。
            </p>
            <div className="triad-tile__price">¥7,700<small>〜 / 1日</small></div>
            <span className="triad-tile__cta">車種・料金を見る <span className="triad-tile__arrow">→</span></span>
          </a>
          <a className="triad-tile" href="#used">
            <div className="triad-tile__char">認</div>
            <div className="triad-tile__num">SERVICE · 03</div>
            <h3 className="triad-tile__name">認定中古車</h3>
            <div className="triad-tile__en">CERTIFIED USED CARS · 準備中</div>
            <p className="triad-tile__desc">
              自社レンタカーとして整備履歴を把握した車両のみを、職人がリフレッシュして販売予定。「ゼンリュウ認定」の品質で、今後サービス開始を予定しております。
            </p>
            <div className="triad-tile__price" style={{opacity:0.6, fontSize:14}}>2026年頃サービス開始予定</div>
            <span className="triad-tile__cta">詳細を見る <span className="triad-tile__arrow">→</span></span>
          </a>
        </div>
      </section>

      {/* Rental — real lineup */}
      <section className="subbiz" id="rental">
        <div className="section">
          <div className="eyebrow">RENTAL · レンタカー</div>
          <h2 className="section-title">沖縄のコンパクトカー、<br/>レンタル専門店。</h2>
          <p className="section-lede">
            {data.rental.intro}
          </p>
          <div className="rental-list">
            {data.rental.cars.map((car, i) => (
              <div className="rental-car" key={i}>
                <div className="rental-car__head">
                  <div className="rental-car__cat">
                    {car.category}
                    <span className="rental-car__cat__chip">{car.smoking}</span>
                  </div>
                  <h3 className="rental-car__name">{car.name}</h3>
                </div>
                <dl className="rental-car__spec">
                  <dt>乗車</dt><dd>{car.capacity}</dd>
                  <dt>装備</dt><dd>{car.equipment}</dd>
                </dl>
                <div className="rental-car__prices">
                  <div>
                    <div className="rental-car__prices__label">通常料金 (当日)</div>
                    <div className="rental-car__prices__val">¥{car.regular.toLocaleString()}<small>〜</small></div>
                  </div>
                  <div>
                    <div className="rental-car__prices__label">ハイシーズン (当日)</div>
                    <div className="rental-car__prices__val">¥{car.peak.toLocaleString()}<small>〜</small></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="rental-list__note">
            ※ 表示は当日料金の最低額。1泊2日以降の料金、補償・オプション (NOC補償 ¥1,100/日、チャイルドシート ¥550/回 ほか) の詳細は予約サイトにてご確認ください。
          </p>
          <div className="rental-cta">
            <a className="btn btn--gold btn--lg" href={c.reserveUrl} target="_blank" rel="noopener">
              レンタカー予約サイトへ <span className="btn__arrow">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href={c.rentalUrl} target="_blank" rel="noopener">
              料金詳細ページ
            </a>
          </div>
        </div>
      </section>

      {/* Certified used cars — 準備中 */}
      <section className="subbiz" id="used" style={{borderTop:'1px solid var(--line)'}}>
        <div className="section">
          <div className="eyebrow">CERTIFIED USED · 認定中古車 (準備中)</div>
          <h2 className="section-title">自社管理車両を、<br/>リフレッシュして販売させていただく予定です。</h2>
          <p className="section-lede">
            レンタカーとして自社で運用した車両を職人がディテイリングし、整えた状態でお渡しする「認定中古車」事業を予定しております。サービス開始時はあらためてご案内いたします。
          </p>
          <div className="subbiz__grid" style={{gridTemplateColumns:'repeat(3, 1fr)'}}>
            {data.usedCars.points.map((p, i) => (
              <div className="subbiz__card" key={i}>
                <div className="subbiz__card__bg-char">{['一','二','三'][i]}</div>
                <div className="subbiz__card__head">
                  <div className="subbiz__card__num">POINT · {String(i+1).padStart(2,'0')}</div>
                  <h3 className="subbiz__card__title">{p.title}</h3>
                </div>
                <p style={{fontSize:13, color:'var(--ink-soft)', lineHeight:1.95, position:'relative'}}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:36, textAlign:'center'}}>
            <div style={{display:'inline-block', padding:'10px 18px', border:'1px solid var(--gold)', color:'var(--gold)', fontFamily:'var(--mono)', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:24}}>
              サービス開始予定
            </div>
            <br/>
            <a className="btn btn--ghost btn--lg" href="#inquiry">事前帰外をお問い合わせ <span className="btn__arrow">→</span></a>
          </div>
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
            ゼンリュウのレンタカー営業所は沖縄県豊見城市にございます。カーケア・パーキングのお預かりは那覇空港にて承ります。
          </p>
          <div className="access__grid">
            <div className="access__info">
              <dl>
                <dt>所在地</dt>
                <dd>
                  <strong>レンタカー営業所</strong>
                  {c.address}
                </dd>
                <dt>営業時間</dt>
                <dd><strong>{c.hours}</strong>定休日はお問い合わせください</dd>
                <dt>電話</dt>
                <dd><strong style={{color:'var(--gold)', fontSize:20}}>{c.phone}</strong>営業時間内にスタッフが対応</dd>
                <dt>送迎</dt>
                <dd><strong>那覇空港 国内線・国際線対応</strong>カーケアプランご利用のお客様</dd>
                <dt>WEB</dt>
                <dd>
                  <a href={c.rentalUrl} target="_blank" rel="noopener" style={{color:'var(--gold)'}}>{c.rentalUrl}</a>
                </dd>
              </dl>
            </div>
            <div className="access__map">
              <div className="access__map__placeholder"></div>
              <div className="access__map__roads">
                <div className="access__map__road access__map__road--h" style={{top:'30%'}}></div>
                <div className="access__map__road access__map__road--h" style={{top:'58%'}}></div>
                <div className="access__map__road access__map__road--v" style={{left:'24%'}}></div>
                <div className="access__map__road access__map__road--v" style={{left:'55%'}}></div>
                <div className="access__map__road access__map__road--diag"></div>
              </div>
              <div className="access__map__route"></div>
              <div className="access__map__pin">
                <div className="access__map__pin__dot"></div>
                <div className="access__map__pin__label">ゼンリュウ 営業所</div>
              </div>
              <div className="access__map__pin access__map__pin--airport">
                <div className="access__map__pin__dot"></div>
                <div className="access__map__pin__label">那覇空港</div>
              </div>
              <div className="access__map__compass">N</div>
              <div className="access__map__label">[ MAP · 実装時に Google Maps 埋め込み ]</div>
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
                  <tr><th>商号</th><td><strong>ゼンリュウ</strong>(ゼンリュウレンタカー)</td></tr>
                  <tr><th>所在地</th><td>{c.address}</td></tr>
                  <tr><th>電話</th><td>{c.phone}</td></tr>
                  <tr><th>営業時間</th><td>{c.hours}</td></tr>
                  <tr><th>事業内容</th><td>① カーケア・空港パーキング事業<br/>② レンタカー事業<br/>③ 認定中古車販売 (準備中)</td></tr>
                  <tr><th>WEB</th><td><a href={c.rentalUrl} target="_blank" rel="noopener" style={{color:'var(--gold)'}}>{c.rentalUrl}</a></td></tr>
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
        lede="カーケア・レンタカー・認定中古車、いずれのお問い合わせも下記より承ります。営業時間内にスタッフがご対応いたします。"
      />

      <CtaBand
        title="愛車のことは、<em>ゼンリュウ</em>へ。"
        sub="ご予約・ご相談はお電話、メールフォーム、LINEにて承ります。"
        primaryLabel="カーケアプランを見る"
        primaryHref="parking.html"
      />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<IndexApp />);
