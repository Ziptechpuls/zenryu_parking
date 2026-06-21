import { ZENRYU_DATA } from '@/lib/data';

export function UtilBar() {
  const c = ZENRYU_DATA.company;
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
