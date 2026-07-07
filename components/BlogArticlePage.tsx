import Link from 'next/link';
import { ZENRYU_DATA } from '@/lib/data';
import type { BlogPost } from '@/lib/blog';
import { UtilBar } from './UtilBar';
import { Header } from './Header';
import { CtaBand } from './CtaBand';
import { Footer } from './Footer';

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${y}年${Number(m)}月${Number(d)}日`;
}

export default function BlogArticlePage({ post }: { post: BlogPost }) {
  const data = ZENRYU_DATA;

  return (
    <>
      <UtilBar />
      <Header current="blog" />

      <article>
        <section className="page-hero page-hero--parking">
          <div className="page-hero__bg-mark">{post.mark}</div>
          <div className="page-hero__inner">
            <div className="page-hero__breadcrumb">
              <Link href="/">ホーム</Link>
              <span className="sep">/</span>
              <Link href="/blog">ブログ</Link>
              <span className="sep">/</span>
              <span className="current">{post.h1}</span>
            </div>
            <div className="page-hero__layout">
              <div>
                <div className="eyebrow">{post.category}</div>
                <h1 className="page-hero__title blog-article__title">{post.h1}</h1>
                <div className="blog-article__meta">
                  <span>公開日 {formatDate(post.date)}</span>
                  {post.updated && <span>更新日 {formatDate(post.updated)}</span>}
                  <span>約{post.readMinutes}分で読めます</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-article-section">
          <div className="section section--narrow">
            <div className="blog-article__body">
              {post.sections.map((sec, i) => (
                <div className="blog-article__block" key={i}>
                  {sec.heading && <h2 className="blog-article__h2">{sec.heading}</h2>}
                  {sec.paragraphs?.map((p, j) => (
                    <p key={j} className="blog-article__p" dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                  {sec.list && (
                    <ul className="blog-article__list">
                      {sec.list.map((li, k) => (
                        <li key={k}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {post.faqs && post.faqs.length > 0 && (
              <div className="blog-article__faq">
                <div className="eyebrow">FAQ · よくあるご質問</div>
                <div style={{ height: 20 }}></div>
                <dl className="blog-faq">
                  {post.faqs.map((f, i) => (
                    <div className="blog-faq__item" key={i}>
                      <dt>Q. {f.q}</dt>
                      <dd>A. {f.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="blog-article__back">
              <Link href="/blog" className="btn btn--outline btn--sm">
                <span className="btn__arrow">←</span> ブログ一覧へ戻る
              </Link>
            </div>
          </div>
        </section>

        {/* パーキングページへの誘導 */}
        <section className="crosslink">
          <div className="section">
            <div className="eyebrow">SERVICE · サービス詳細</div>
            <Link href="/parking" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="crosslink__card">
                <div className="crosslink__char">停</div>
                <div>
                  <h3 className="crosslink__title">那覇空港パーキングの詳細はこちら</h3>
                  <p className="crosslink__desc">
                    1日¥1,000・空港まで送迎付き。お預かり中に手洗い洗車・コーティングまで施工できる、ゼンリュウの那覇空港パーキングの詳細をご案内しています。
                  </p>
                </div>
                <span className="btn btn--gold btn--sm">パーキングを見る <span className="btn__arrow">→</span></span>
              </div>
            </Link>
          </div>
        </section>
      </article>

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
