/* Shared chrome — uses real company info */

function UtilBar() {
  const c = window.ZENRYU_DATA.company;
  return (
    <div className="util-bar">
      <div className="util-bar__inner">
        <div className="util-bar__left">
          <span><span className="util-bar__dot"></span>沖縄モビリティ・トータルサービス</span>
          <span>営業 {c.hours}</span>
        </div>
        <div className="util-bar__right">
          <span>お問い合わせ</span>
          <span className="util-bar__phone">{c.phone}</span>
        </div>
      </div>
    </div>
  );
}

function Header({ current }) {
  const link = (key, href, label) => (
    <a href={href} className={current === key ? 'is-current' : ''}>{label}</a>
  );
  const c = window.ZENRYU_DATA.company;
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <a className="brand" href="index.html">
            <div className="brand__mark">全</div>
            <div>
              <div className="brand__name">ゼンリュウ</div>
              <div className="brand__sub">OKINAWA MOBILITY</div>
            </div>
          </a>
          <nav className="nav__links">
            {link('home', 'index.html', 'ホーム')}
            {link('parking', 'parking.html', 'カーケア・パーキング')}
            {link('detailing', 'detailing.html', 'ディテイリング')}
            <a href="index.html#rental">レンタカー</a>
            <a href="index.html#company">会社概要</a>
          </nav>
          <div className="nav__cta">
            <a className="btn btn--outline btn--sm" href={`tel:${c.phone.replace(/-/g,'')}`}>お電話</a>
            <a className="btn btn--gold btn--sm" href={current === 'detailing' ? 'detailing.html#inquiry' : 'parking.html#inquiry'}>お問い合わせ <span className="btn__arrow">→</span></a>
          </div>
          <button
            className={`nav__menu-btn ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="メニューを開く"
          >
            <span className="nav__menu-btn__line"></span>
            <span className="nav__menu-btn__line"></span>
            <span className="nav__menu-btn__line"></span>
          </button>
        </div>
      </header>
      <div className={`nav__drawer__overlay ${menuOpen ? 'is-open' : ''}`} onClick={close}></div>
      <aside className={`nav__drawer ${menuOpen ? 'is-open' : ''}`}>
        <a href="index.html" onClick={close}>ホーム</a>
        <a href="parking.html" onClick={close}>カーケア・パーキング</a>
        <a href="detailing.html" onClick={close}>ディテイリング</a>
        <a href="index.html#rental" onClick={close}>レンタカー</a>
        <a href="index.html#used" onClick={close}>認定中古車</a>
        <a href="index.html#company" onClick={close}>会社概要</a>
        <a href="index.html#access" onClick={close}>アクセス</a>
        <div className="nav__drawer__cta">
          <a className="btn btn--gold btn--lg" href={current === 'detailing' ? 'detailing.html#inquiry' : 'parking.html#inquiry'} onClick={close}>
            お問い合わせ <span className="btn__arrow">→</span>
          </a>
        </div>
        <div className="nav__drawer__contact">
          <small>TEL · お電話</small>
          <a href={`tel:${c.phone.replace(/-/g,'')}`} style={{color:'var(--gold)'}}>{c.phone}</a>
          <div style={{fontFamily:'var(--mono)', fontSize:10, color:'var(--ink-mute)', marginTop:8, letterSpacing:'0.16em'}}>営業 {c.hours}</div>
        </div>
      </aside>
    </>
  );
}

function TrustStrip() {
  const items = [
    { glyph: '三', title: '3事業展開',   label: 'カーケア・レンタカー・中古車' },
    { glyph: '松', title: '松竹梅プラン', label: '仕上がりで選べる3プラン' },
    { glyph: '磨', title: '自社施工',     label: 'コーティングを自社で仕上げ' },
    { glyph: '送', title: '空港送迎',     label: '那覇空港への送迎に対応' },
  ];
  return (
    <section className="trust-strip">
      <div className="trust-strip__inner">
        {items.map((it, i) => (
          <div className="trust-strip__item" key={i}>
            <div className="trust-strip__icon">{it.glyph}</div>
            <div>
              <div className="trust-strip__title">{it.title}</div>
              <div className="trust-strip__label">{it.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaBand({ title, sub, primaryLabel, primaryHref }) {
  const c = window.ZENRYU_DATA.company;
  return (
    <section className="cta-band">
      <div className="cta-band__bg">空</div>
      <div className="cta-band__inner">
        <div>
          <h2 className="cta-band__title" dangerouslySetInnerHTML={{__html: title}}></h2>
          <p className="cta-band__sub" dangerouslySetInnerHTML={{__html: sub}}></p>
        </div>
        <div style={{display:'flex', gap:14, flexDirection:'column'}}>
          <a className="btn btn--gold btn--lg" href={primaryHref}>{primaryLabel} <span className="btn__arrow">→</span></a>
          <a className="btn btn--ghost btn--lg" href={`tel:${c.phone.replace(/-/g,'')}`} style={{justifyContent:'center'}}>{c.phone}</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const c = window.ZENRYU_DATA.company;
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="brand">
              <div className="brand__mark">全</div>
              <div>
                <div className="brand__name">ゼンリュウ</div>
                <div className="brand__sub">OKINAWA MOBILITY</div>
              </div>
            </div>
            <p>
              ゼンリュウ<br/>
              {c.address}<br/>
              営業 {c.hours}
            </p>
          </div>
          <div className="footer__col">
            <h4>Service</h4>
            <ul>
              <li><a href="parking.html">カーケア・パーキング</a></li>
              <li><a href="detailing.html">カーディテイリング</a></li>
              <li><a href="index.html#rental">レンタカー</a></li>
              <li><a href="index.html#used">認定中古車</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>About</h4>
            <ul>
              <li><a href="index.html#company">会社概要</a></li>
              <li><a href="index.html#access">アクセス</a></li>
              <li><a href="index.html#faq">よくあるご質問</a></li>
              <li><a href="index.html#voice">お客様の声</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>{c.phone}</li>
              <li>営業 {c.hours}</li>
              <li><a href={c.instagram}>Instagram</a></li>
              <li><a href={c.rentalUrl}>レンタカー予約</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bot">
          <span>© 2026 ZENRYU Okinawa Mobility</span>
          <span>利用規約 · プライバシーポリシー · 特定商取引法に基づく表記</span>
        </div>
      </div>
    </footer>
  );
}

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

Object.assign(window, { UtilBar, Header, Footer, TrustStrip, CtaBand, smoothScrollTo });
