import { ZENRYU_DATA } from '@/lib/data';

interface CtaBandProps {
  title: string;
  sub: string;
  primaryLabel: string;
  primaryHref: string;
}

export function CtaBand({ title, sub, primaryLabel, primaryHref }: CtaBandProps) {
  const c = ZENRYU_DATA.company;
  return (
    <section className="cta-band">
      <div className="cta-band__bg">空</div>
      <div className="cta-band__inner">
        <div>
          <h2 className="cta-band__title" dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p className="cta-band__sub" dangerouslySetInnerHTML={{ __html: sub }}></p>
        </div>
        <div style={{ display: 'flex', gap: 14, flexDirection: 'column' }}>
          <a className="btn btn--gold btn--lg" href={primaryHref}>{primaryLabel} <span className="btn__arrow">→</span></a>
          <a className="btn btn--ghost btn--lg" href={`tel:${c.phone.replace(/-/g, '')}`} style={{ justifyContent: 'center' }}>{c.phone}</a>
        </div>
      </div>
    </section>
  );
}
