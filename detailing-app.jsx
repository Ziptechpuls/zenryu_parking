/* DETAILING page — SEO target: 沖縄 カーディテイリング */
const { useState: useStateDt } = React;

function DetailingApp() {
  const data = window.ZENRYU_DATA;
  const [openFaq, setOpenFaq] = useStateDt(0);

  const detailFaqs = [
    { q: 'ディテイリングだけの依頼は可能ですか?', a: 'はい、パーキングをご利用にならない場合でも、コース単独でのご依頼を承ります。料金は松竹梅と同じ¥5,000 / ¥15,000 / ¥50,000〜でございます。お電話・LINEにてご相談ください。' },
    { q: 'コーティングはどのくらい持続しますか?', a: '耐久性は使用環境・保管状況により異なります。施工後の定期メンテナンスや追加施工も承りますので、お車の状態に合わせてご提案いたします。' },
    { q: '輸入車・EV車でも施工可能ですか?', a: '欧州車・米国車・国産車・EV車に対応いたします。塗装の柔らかい欧州車も、車種特性を踏まえて丁寧に仕上げます。事前にお気軽にご相談ください。' },
    { q: '預ける前に車内を片付ける必要は?', a: 'クリーニング対象は内装パネル・シート・カーペット類です。お預かりした個人の荷物・書類はそのままケースに整理して保管いたしますが、貴重品はお持ち帰りいただくことを推奨しております。' },
    { q: 'パーキング付きとの違いは?', a: 'ディテイリング単独依頼でも、松竹梅のカーケアコースでも、施工内容自体は同じです。ご旅行・ご出張をご予定の際は、その期間を活用してカーケアコースをご選択いただくのが効率的です (パーキング ¥1,000/日)。' },
    { q: '料金以外に追加費用はかかりますか?', a: '原則として、追加費用は発生いたしません。ただし、シミ・タバコ臭・ペット臭などが特に酷い場合は、事前にご相談のうえで追加料金をご案内する場合がございます。' },
  ];

  return (
    <>
      <UtilBar />
      <Header current="detailing" />

      {/* Page hero */}
      <section className="page-hero">
        <div className="page-hero__bg-mark">磨</div>
        <div className="page-hero__inner">
          <div className="page-hero__breadcrumb">
            <a href="index.html">ホーム</a>
            <span className="sep">/</span>
            <span className="current">カーディテイリング</span>
          </div>
          <div className="page-hero__layout">
            <div>
              <div className="eyebrow">CAR DETAILING · カーディテイリング</div>
              <h1 className="page-hero__title">
                沖縄の塩害・紫外線から、<br/>
                <em>愛車を守る。</em>磨き上げる。<br/>
                ディテイリング ¥5,000〜。
              </h1>
              <p className="page-hero__lede">
                那覇でカーディテイリングをお探しの方へ。手洗い洗車から本格的なガラスコーティングまで、ご用途に合わせた3つのコース (松竹梅) でご提供いたします。沖縄特有の塩害・紫外線にさらされた一台一台と向き合い、本来の艶を引き出します。
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

      {/* Detailing menu */}
      <section className="dt-menu" id="menu">
        <div className="section">
          <div className="eyebrow">MENU · ディテイリングメニュー</div>
          <h2 className="section-title">三つのコース。<br/>ご用途で<em>お選びください。</em></h2>
          <p className="section-lede">
            「日常のメンテナンス」「徹底クリーニング」「新車の輝きを取り戻す」—
            お車の状態とご要望に合わせて、最適なコースをお選びいただけます。
          </p>
          <div className="dt-menu__grid">
            {data.detailingMenu.map(m => (
              <div key={m.key} className={`dt-menu__card ${m.featured?'dt-menu__card--featured':''} ${m.premium?'dt-menu__card--premium':''}`}>
                {m.featured && <div className="plan-card__ribbon">人気No.1</div>}
                {m.premium && <div className="plan-card__ribbon plan-card__ribbon--premium">Premium</div>}
                <div className="dt-menu__card__tier">{m.tier} · 松竹梅「{m.ref}」</div>
                <h3 className="dt-menu__card__name">{m.name}</h3>
                <div className="dt-menu__card__row">
                  <span className="dt-menu__card__duration">所要 · {m.duration}</span>
                  <span className="dt-menu__card__price">
                    <span className="dt-menu__card__price__yen">¥</span>
                    {m.price.toLocaleString()}
                    <span className="dt-menu__card__price__unit">{m.priceNote}</span>
                  </span>
                </div>
                <a className={`btn ${m.featured || m.premium ? 'btn--gold' : 'btn--ghost'} plan-card__cta`} href="#inquiry">
                  このコースで問い合わせる <span className="btn__arrow">→</span>
                </a>
              </div>
            ))}
          </div>
          <p className="plans__note" style={{marginTop:24, lineHeight:1.8}}>
            ※ ディテイリング単独依頼の料金です。那覇空港のパーキングと併せてご利用の場合は、同価格でパーキング(¥1,000/日)を別途加算いたします。SUV・大型車・輸入車は別途お見積もり。
          </p>
          <p className="plans__note">※ 料金は普通車基準・税込。SUV・大型車は +20%、輸入車は +30% にて承ります。</p>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="section">
          <div className="eyebrow">PROCESS · 6つの工程</div>
          <h2 className="section-title">職人の手で、<br/><em>一台に向き合う。</em></h2>
          <p className="section-lede">
            プレミア・ディテイリングは下地処理から仕上げまで合計12時間以上を要する工程です。
            一台ごとに最適な手順を組み立て、最高の状態に仕上げます。
          </p>
          <div className="process__list">
            {data.detailingProcess.map(p => (
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
          <h2 className="section-title">磨く前と、<br/>磨いた<em>あとと。</em></h2>
          <p className="section-lede">
            施工後の艶・透明感をご覧ください。実車のお写真は、ご納車前にお客様にお送りいたします。
          </p>
          <div className="beforeafter__grid">
            {[
              { car: 'Lexus LX600', tier: 'PREMIUM', months: '所有3年 / 屋外駐車' },
              { car: 'Porsche 911 (992)', tier: 'PREMIUM', months: '所有1年 / 海沿い保管' },
              { car: 'Mercedes-Benz S500', tier: 'STANDARD', months: '所有5年 / 法人車両' },
              { car: 'Toyota Alphard', tier: 'STANDARD', months: '所有2年 / ファミリー使用' },
            ].map((w, i) => (
              <div className="beforeafter__pair" key={i}>
                <div className="beforeafter__half beforeafter__half--before">
                  <div className="beforeafter__half__bg"></div>
                  <span className="beforeafter__half__label">BEFORE</span>
                  <span className="beforeafter__half__hint">[ 実写差替 ]</span>
                </div>
                <div className="beforeafter__half beforeafter__half--after">
                  <div className="beforeafter__half__bg"></div>
                  <span className="beforeafter__half__label">AFTER</span>
                  <span className="beforeafter__half__hint">[ 実写差替 ]</span>
                </div>
                <div className="beforeafter__caption">
                  <strong>{w.car}</strong>
                  <span>{w.tier} · {w.months}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan — 実在情報が揃ったら復活 */}
      {data.artisan && (
      <section className="artisan">
        <div className="section">
          <div className="eyebrow">ARTISAN · 職人紹介</div>
          <h2 className="section-title">磨くのは、<br/>塗装ではなく、<em>車の品格。</em></h2>
          <div style={{height:32}}></div>
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
          <a href="parking.html" style={{textDecoration:'none', color:'inherit'}}>
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
          </a>
        </div>
      </section>

      {/* Detailing FAQ */}
      <section className="faq" id="faq">
        <div className="section section--narrow">
          <div className="eyebrow">FAQ · ディテイリング Q&amp;A</div>
          <h2 className="section-title">ディテイリングについて。</h2>
          <div style={{height: 32}}></div>
          <div className="faq__list">
            {detailFaqs.map((f, i) => (
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

      <CtaBand
        title="愛車を、<em>本来の姿へ。</em>"
        sub="ディテイリング単独のご依頼も承ります。お電話・メールフォーム・LINEにてお気軽にご相談ください。"
        primaryLabel="お問い合わせフォームへ"
        primaryHref="#inquiry"
      />
      <InquirySection
        defaultSubject="detailing"
        eyebrow="INQUIRY · お問い合わせ"
        title="ディテイリングのご相談は<br/>こちらから。"
        lede="お車の状態・ご予算・ご希望の仕上がりなど、どのようなご相談でも職人が丁寧にヒアリングいたします。"
      />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DetailingApp />);
