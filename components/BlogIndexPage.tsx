import Link from 'next/link';
import { ZENRYU_DATA } from '@/lib/data';
import { BLOG_POSTS } from '@/lib/blog';
import { UtilBar } from './UtilBar';
import { Header } from './Header';
import { CtaBand } from './CtaBand';
import { Footer } from './Footer';

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${y}.${m}.${d}`;
}

export default function BlogIndexPage() {
  const data = ZENRYU_DATA;

  return (
    <>
      <UtilBar />
      <Header current="blog" />

      <section className="page-hero page-hero--parking">
        <div className="page-hero__bg-mark">読</div>
        <div className="page-hero__inner">
          <div className="page-hero__breadcrumb">
            <Link href="/">ホーム</Link>
            <span className="sep">/</span>
            <span className="current">ブログ</span>
          </div>
          <div className="page-hero__layout">
            <div>
              <div className="eyebrow">BLOG · お役立ちコラム</div>
              <h1 className="page-hero__title page-hero__title--nowrap">
                全琉空港パーキングと<br /><em>カーケアのコラム</em>
              </h1>
              <p className="page-hero__lede">
                全琉空港パーキングの使い方やメリット、洗車・コーティングのお役立ち情報を発信しています。ご旅行・ご出張の前に、ぜひご覧ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-list-section">
        <div className="section">
          <div className="eyebrow">ARTICLES · 記事一覧</div>
          <h2 className="section-title">最新の<em>コラム</em></h2>
          <p className="section-lede">
            全琉空港パーキングの使い方やメリット、洗車・コーティングのお役立ち情報を随時更新しています。
          </p>
          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card__mark">{post.mark}</div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span className="blog-card__cat">{post.category}</span>
                    <span className="blog-card__date">{formatDate(post.date)}</span>
                  </div>
                  <h2 className="blog-card__title">{post.h1}</h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <span className="blog-card__more">続きを読む <span className="btn__arrow">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="愛車のことは、<br class='br-sp'/><em>ゼンリュウ</em>へ"
        sub="ご予約・ご相談はお電話、または公式Instagramのダイレクトメッセージにて承ります。初めてのお客様も、スタッフが丁寧にご案内いたします。"
        primaryLabel="Instagramへ"
        primaryHref={data.company.instagram}
        primaryExternal
        bgImage="/assets/cta-parking.webp"
      />
      <Footer />
    </>
  );
}
