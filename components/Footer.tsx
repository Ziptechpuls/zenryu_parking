import Link from 'next/link';
import { ZENRYU_DATA } from '@/lib/data';

export function Footer() {
  const c = ZENRYU_DATA.company;
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
              <li><Link href="/parking">空港パーキング</Link></li>
              <li><Link href="/detailing">カーディテイリング</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>About</h4>
            <ul>
              <li><Link href="/#company">会社概要</Link></li>
              <li><Link href="/#access">アクセス</Link></li>
              <li><Link href="/#faq">よくあるご質問</Link></li>
              <li><Link href="/#voice">お客様の声</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>{c.phone}</li>
              <li>営業 {c.hours}</li>
              <li><a href={c.instagram} target="_blank" rel="noopener">Instagram</a></li>
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
