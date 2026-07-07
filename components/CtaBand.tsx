import { ZENRYU_DATA } from '@/lib/data';

interface CtaBandProps {
  title: string;
  sub: string;
  primaryLabel: string;
  primaryHref: string;
  primaryExternal?: boolean;
  bgImage?: string;
}

export function CtaBand({ title, sub, primaryLabel, primaryHref, primaryExternal, bgImage }: CtaBandProps) {
  const c = ZENRYU_DATA.company;
  const bgStyle = bgImage
    ? {
        backgroundColor: '#e7e0d0',
        backgroundImage: `linear-gradient(rgba(236, 230, 216, 0.86), rgba(221, 212, 192, 0.9)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : undefined;
  return (
    <section className="cta-band" style={bgStyle}>
      <div className="cta-band__bg">空</div>
      <div className="cta-band__inner">
        <div>
          <h2 className="cta-band__title" dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p className="cta-band__sub" dangerouslySetInnerHTML={{ __html: sub }}></p>
        </div>
        <div style={{ display: 'flex', gap: 14, flexDirection: 'column' }}>
          <a className="btn btn--gold btn--lg" href={`tel:${c.phone.replace(/-/g, '')}`} style={{ justifyContent: 'center' }}>電話する <span className="btn__arrow">→</span></a>
          <a
            className="btn btn--gold btn--lg"
            href={primaryHref}
            style={{ justifyContent: 'center' }}
            {...(primaryExternal ? { target: '_blank', rel: 'noopener' } : {})}
          >
            {primaryLabel} <span className="btn__arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
