'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ZENRYU_DATA } from '@/lib/data';

export function Header({ current }: { current?: string }) {
  const c = ZENRYU_DATA.company;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const link = (key: string, href: string, label: string) => (
    <Link href={href} className={current === key ? 'is-current' : ''}>{label}</Link>
  );

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <Link className="brand" href="/">
            <img className="brand__logo" src="/assets/zenryu-logo.png" alt="ゼンリュウ パーキング × カーディテイリング" />
          </Link>
          <nav className="nav__links">
            {link('home', '/', 'ホーム')}
            {link('parking', '/parking', 'パーキング')}
            {link('detailing', '/detailing', 'ディテイリング')}
            <Link href="/#access">アクセス</Link>
            <Link href="/#company">会社概要</Link>
          </nav>
          <div className="nav__cta">
            <a className="btn btn--outline btn--sm" href={`tel:${c.phone.replace(/-/g, '')}`}>お電話</a>
            <a className="btn btn--gold btn--sm" href={c.instagram} target="_blank" rel="noopener">Instagramへ <span className="btn__arrow">→</span></a>
          </div>
          <button
            className={`nav__menu-btn ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
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
        <Link href="/" onClick={close}>ホーム</Link>
        <Link href="/parking" onClick={close}>パーキング</Link>
        <Link href="/detailing" onClick={close}>ディテイリング</Link>
        <Link href="/#company" onClick={close}>会社概要</Link>
        <Link href="/#access" onClick={close}>アクセス</Link>
        <div className="nav__drawer__cta">
          <a className="btn btn--gold btn--lg" href={c.instagram} target="_blank" rel="noopener" onClick={close}>
            Instagramへ <span className="btn__arrow">→</span>
          </a>
        </div>
        <div className="nav__drawer__contact">
          <small>TEL · お電話</small>
          <a href={`tel:${c.phone.replace(/-/g, '')}`} style={{ color: 'var(--gold)' }}>{c.phone}</a>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-mute)', marginTop: 8, letterSpacing: '0.16em' }}>営業 {c.hours}</div>
        </div>
      </aside>
    </>
  );
}
