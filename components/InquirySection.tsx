'use client';

import { ZENRYU_DATA } from '@/lib/data';

function InquiryChannels() {
  const c = ZENRYU_DATA.company;
  const usePhone = c.phone;
  return (
    <div className="inquiry__channels">
      <div className="inquiry__channel">
        <div className="inquiry__channel__label">TEL · お電話</div>
        <div className="inquiry__channel__value"><a href={`tel:${usePhone.replace(/-/g, '')}`}>{usePhone}</a></div>
        <div className="inquiry__channel__hours">営業 {c.hours}</div>
        <p className="inquiry__channel__desc">スタッフが直接お受けいたします。ご予約・空き状況のご確認はこちらが確実です。</p>
      </div>
      <div className="inquiry__channel">
        <div className="inquiry__channel__label">INSTAGRAM · 公式アカウント</div>
        <div className="inquiry__channel__value" style={{ fontSize: 20 }}><a href={c.instagram} target="_blank" rel="noopener">@zenryurentacar</a></div>
        <div className="inquiry__channel__hours">DM受付中</div>
        <p className="inquiry__channel__desc">施工事例の最新情報を発信中。DMからもお気軽にお問い合わせください。</p>
      </div>
    </div>
  );
}

interface InquirySectionProps {
  id?: string;
  defaultSubject?: string;
  defaultPlan?: string;
  eyebrow?: string;
  title?: string;
  lede?: string;
}

export function InquirySection({ id, eyebrow, title, lede }: InquirySectionProps) {
  return (
    <section className="inquiry" id={id || 'inquiry'}>
      <div className="section section--narrow">
        <div className="eyebrow">{eyebrow || 'INQUIRY · お問い合わせ'}</div>
        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title || 'ご予約・ご相談は、<br/>お電話 / Instagram にて' }}></h2>
        <p className="section-lede">
          {lede || 'お電話、または公式Instagramのダイレクトメッセージにて承ります。営業時間内にスタッフが丁寧にご対応いたします。'}
        </p>
        <InquiryChannels />
      </div>
    </section>
  );
}
