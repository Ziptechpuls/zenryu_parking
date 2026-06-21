export function TrustStrip() {
  const items = [
    { glyph: '二', title: '2事業展開', label: 'パーキング＋ディテイリング' },
    { glyph: '松', title: '松竹梅プラン', label: '仕上がりで選べる3プラン' },
    { glyph: '磨', title: '自社施工', label: 'コーティングを自社で仕上げ' },
    { glyph: '送', title: '空港送迎', label: '那覇空港への送迎に対応' },
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
