/* PARKING page — カーケア・パーキング (松竹梅) */
const { useState: useStatePark } = React;

function ParkingApp() {
  const data = window.ZENRYU_DATA;
  const [openFaq, setOpenFaq] = useStatePark(0);
  const [selectedPlan, setSelectedPlan] = useStatePark('take');

  const pickPlanAndInquire = (key) => {
    setSelectedPlan(key);
    setTimeout(() => smoothScrollTo('inquiry'), 50);
  };

  return (
    <>
      <UtilBar />
      <Header current="parking" />

      <section className="page-hero">
        <div className="page-hero__bg-mark">磨</div>
        <div className="page-hero__inner">
          <div className="page-hero__breadcrumb">
            <a href="index.html">ホーム</a>
            <span className="sep">/</span>
            <span className="current">カーケア・パーキング</span>
          </div>
          <div className="page-hero__layout">
            <div>
              <div className="eyebrow">CAR CARE &amp; PARKING</div>
              <h1 className="page-hero__title">
                預けるあいだに、<em>磨かれる。</em>
              </h1>
              <p className="page-hero__lede">
                那覇空港で愛車をお預かりし、ご旅行・ご出張のあいだに手洗い洗車・コーティングまで施工いたします。パーキングは1日¥1,000、カーケアコースは松竹梅よりご選択いただけます。
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
      <section className="concept" style={{padding:'100px 40px'}}>
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

      {/* Why */}
      <section className="services">
        <div className="section">
          <div className="eyebrow">WHY · 選ばれる理由</div>
          <h2 className="section-title">那覇空港のカーケアで、選ばれる4つの理由。</h2>
          <p className="section-lede">
            ご旅行中・ご出張中の不安をすべて取り除く、ゼンリュウのカーケア・パーキング。
          </p>
          <div className="services__grid">
            <div className="service-tile">
              <div className="service-tile__num">01</div>
              <div className="service-tile__icon">空</div>
              <h3 className="service-tile__title">那覇空港まで送迎付き</h3>
              <p className="service-tile__desc">
                ご出発便・ご帰着便に合わせて、那覇空港のターミナルまで送迎いたします。カーケアプランをご利用のお客様はプラン料金に含まれております。
              </p>
              <ul className="service-tile__list">
                <li>国内線・国際線ターミナル対応</li>
                <li>大型荷物・ベビーカー対応</li>
                <li>営業時間内に運行</li>
              </ul>
            </div>
            <div className="service-tile">
              <div className="service-tile__num">02</div>
              <div className="service-tile__icon">磨</div>
              <h3 className="service-tile__title">預けた時間で職人が施工</h3>
              <p className="service-tile__desc">
                ご旅行・ご出張のあいだに、職人が手洗い洗車・水垢落とし・コーティングを丁寧に施工いたします。ご帰着時には、整えられたお車でお出迎えします。
              </p>
              <ul className="service-tile__list">
                <li>輸入車・EV車にも対応</li>
                <li>松プランは3〜4日間で本格仕上げ</li>
                <li>仕上がり写真をご納車前にお送り</li>
              </ul>
            </div>
            <div className="service-tile">
              <div className="service-tile__num">03</div>
              <div className="service-tile__icon">点</div>
              <h3 className="service-tile__title">お預かり時の点検記録</h3>
              <p className="service-tile__desc">
                お預かり時にスタッフがお客様立ち会いのもと、外装・車内の状態を記録します。ご返却時のトラブルを防ぎ、安心してお車をお預けいただけます。
              </p>
              <ul className="service-tile__list">
                <li>外装の状態を写真記録</li>
                <li>燃料・走行距離も記録</li>
                <li>貴重品はお持ち帰り推奨</li>
              </ul>
            </div>
            <div className="service-tile">
              <div className="service-tile__num">04</div>
              <div className="service-tile__icon">便</div>
              <h3 className="service-tile__title">LINEで便利に連絡</h3>
              <p className="service-tile__desc">
                ご予約後の便変更・延長など、お電話・LINEでご相談を承ります。営業時間内にスタッフが丁寧にご対応いたします。
              </p>
              <ul className="service-tile__list">
                <li>営業時間内に受付</li>
                <li>領収書・経費精算もご相談OK</li>
                <li>法人ご契約も承ります</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="plans" id="plans">
        <div className="section">
          <div className="plans__header">
            <div>
              <div className="eyebrow">PRICING · 松竹梅プラン</div>
              <h2 className="section-title">3つのプランから、仕上がりをお選びください。</h2>
            </div>
          </div>

          <div className="plans__grid">
            {data.plans.map(p => (
              <div key={p.key}
                   className={`plan-card ${p.featured ? 'plan-card--featured':''} ${p.premium ? 'plan-card--premium':''} ${selectedPlan===p.key?'is-selected':''}`}
                   onClick={()=>setSelectedPlan(p.key)}>
                {p.featured && <div className="plan-card__ribbon">人気No.1</div>}
                {p.premium && <div className="plan-card__ribbon plan-card__ribbon--premium">Premium</div>}
                <div className="plan-card__char">{p.char}</div>
                <div className="plan-card__romaji">{p.romaji}</div>
                <h3 className="plan-card__name">{p.name}</h3>
                <p className="plan-card__tagline">{p.tagline}</p>
                <div className="plan-card__price">
                  <span className="plan-card__price__yen">¥</span>
                  <span className="plan-card__price__total">{p.price.toLocaleString()}</span>
                  <span className="plan-card__price__suffix">{p.priceNote}</span>
                </div>
                <div className="plan-card__duration">所要 {p.duration}<span style={{color:'var(--ink-mute)', marginLeft:8}}>+ パーキング ¥1,000/日</span></div>
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
                <button className={`btn ${p.featured || p.premium ? 'btn--gold' : 'btn--ghost'} plan-card__cta`} onClick={(e)=>{e.stopPropagation(); pickPlanAndInquire(p.key);}}>
                  このプランで問い合わせる <span className="btn__arrow">→</span>
                </button>
              </div>
            ))}
          </div>
          <p className="plans__note">※ パーキング料金 (¥1,000/日) は別途加算となります。例: 3泊4日で竹コースご利用 = ¥1,000×4日 + ¥15,000 = ¥19,000。SUV・大型車・輸入車は別途お見積もり。</p>
        </div>
      </section>

      {/* Flow */}
      <section className="how">
        <div className="section">
          <div className="eyebrow">FLOW · ご利用の流れ</div>
          <h2 className="section-title">ご予約からお引き渡しまで。</h2>
          <p className="section-lede">
            お預かり時のご対面確認から、ご帰着便に合わせたお引き渡しまで、スタッフが一貫して担当いたします。
          </p>
        </div>
        <div className="section" style={{paddingTop:0}}>
          <div className="how__grid">
            {data.steps.map(s => (
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
        defaultPlan={selectedPlan}
        eyebrow="INQUIRY · ご予約・お問い合わせ"
        title="ご予約・ご相談は、お電話 / メールにて。"
        lede="下記フォームよりご連絡いただくか、お電話・LINEにても承ります。空き状況もお気軽にお問い合わせください。"
      />

      {/* Cross-link to detailing */}
      <section className="crosslink">
        <div className="section">
          <div className="eyebrow">DETAIL · 技術詳細</div>
          <a href="detailing.html" style={{textDecoration:'none', color:'inherit'}}>
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
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="section section--narrow">
          <div className="eyebrow">FAQ · よくあるご質問</div>
          <h2 className="section-title">カーケア・パーキングについて。</h2>
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

      <CtaBand
        title="愛車のことは、<em>ゼンリュウ</em>へ。"
        sub="ご予約・ご相談はお電話、メールフォーム、LINEにて承ります。初めてのお客様も、スタッフが丁寧にご案内いたします。"
        primaryLabel="お問い合わせフォームへ"
        primaryHref="#inquiry"
      />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ParkingApp />);
