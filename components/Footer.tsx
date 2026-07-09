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
              <div className="brand__mark brand__mark--img">
                <img src="/assets/S__45817862.jpg" width={44} height={44} loading="lazy" decoding="async" alt="全琉空港パーキング" />
              </div>
              <div>
                <div className="brand__name">ゼンリュウレンタカー</div>
                <div className="brand__sub">PARKING &amp; DETAILING</div>
              </div>
            </div>
            <p>
              {c.address}<br/>
              営業 {c.hours}
            </p>
          </div>
          <div className="footer__col">
            <h4>Service</h4>
            <ul>
              <li><Link href="/parking">全琉空港パーキング</Link></li>
              <li><Link href="/detailing">カーディテイリング</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>About</h4>
            <ul>
              <li><Link href="/#company">会社概要</Link></li>
              <li><Link href="/#access">アクセス</Link></li>
              <li><Link href="/#faq">よくあるご質問</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__bot">
          <span>© 2026 ZENRYU Parking &amp; Detailing</span>
          <span>利用規約 · プライバシーポリシー · 特定商取引法に基づく表記</span>
        </div>
      </div>
    </footer>
  );
}
