'use client';

import { useState } from 'react';
import { ZENRYU_DATA } from '@/lib/data';

interface InquiryFormProps {
  defaultSubject?: string;
  defaultPlan?: string;
}

function InquiryForm({ defaultSubject, defaultPlan }: InquiryFormProps) {
  const [subject, setSubject] = useState(defaultSubject || 'parking');
  const [plan, setPlan] = useState(defaultPlan || 'take');
  const [form, setForm] = useState({
    name: '', kana: '', phone: '', email: '',
    carMake: '', carModel: '',
    dateIn: '', dateOut: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectLabel = subject === 'parking' ? '空港駐車のお問い合わせ'
      : subject === 'detailing' ? 'カーディテイリングのお問い合わせ'
      : 'お問い合わせ';
    const planLabel = subject === 'parking'
      ? (({ ume: '梅プラン', take: '竹プラン', matsu: '松プラン' } as Record<string, string>)[plan] || '未選択')
      : '';
    const body = [
      `お名前: ${form.name} (${form.kana})`,
      `電話: ${form.phone}`,
      `メール: ${form.email}`,
      subject === 'parking' ? `ご希望プラン: ${planLabel}` : '',
      subject === 'parking' ? `預け入れ日: ${form.dateIn}` : '',
      subject === 'parking' ? `お引き渡し日: ${form.dateOut}` : '',
      `お車: ${form.carMake} ${form.carModel}`,
      '',
      `ご要望:`,
      form.notes,
    ].filter(Boolean).join('\n');

    // Use mailto: to hand off to user's mail client
    const mailto = `mailto:info@zenryurentacar.com?subject=${encodeURIComponent('【' + subjectLabel + '】' + form.name + ' 様')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <div className={`inquiry__form ${submitted ? 'is-submitted' : ''}`}>
      <form className="inquiry__form__inner" onSubmit={handleSubmit}>
        <h3>お問い合わせフォーム</h3>
        <p className="inquiry__form__sub">
          下記フォームよりお送りいただくか、お電話・メールでも承ります。<br/>
          営業時間内にスタッフから折り返しご連絡いたします。
        </p>

        <div className="field" style={{ marginBottom: 20 }}>
          <label className="field__label">お問い合わせ種別 <span style={{ color: 'var(--gold)' }}>*</span></label>
          <div className="inquiry__radio-row">
            <div className={`inquiry__radio ${subject === 'parking' ? 'is-active' : ''}`} onClick={() => setSubject('parking')}>空港駐車</div>
            <div className={`inquiry__radio ${subject === 'detailing' ? 'is-active' : ''}`} onClick={() => setSubject('detailing')}>ディテイリング</div>
            <div className={`inquiry__radio ${subject === 'other' ? 'is-active' : ''}`} onClick={() => setSubject('other')}>その他</div>
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label className="field__label">お名前 <span style={{ color: 'var(--gold)' }}>*</span></label>
            <input className="field__input" required placeholder="比嘉 太郎" value={form.name} onChange={(e) => update('name', e.target.value)} />
          </div>
          <div className="field">
            <label className="field__label">フリガナ</label>
            <input className="field__input" placeholder="ヒガ タロウ" value={form.kana} onChange={(e) => update('kana', e.target.value)} />
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label className="field__label">電話番号 <span style={{ color: 'var(--gold)' }}>*</span></label>
            <input className="field__input" type="tel" required placeholder="090-0000-0000" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
          </div>
          <div className="field">
            <label className="field__label">メール <span style={{ color: 'var(--gold)' }}>*</span></label>
            <input className="field__input" type="email" required placeholder="you@example.com" value={form.email} onChange={(e) => update('email', e.target.value)} />
          </div>
        </div>

        {subject === 'parking' && (
          <>
            <div className="field-row">
              <div className="field">
                <label className="field__label">預け入れ日 (ご希望)</label>
                <input className="field__input" type="date" value={form.dateIn} onChange={(e) => update('dateIn', e.target.value)} />
              </div>
              <div className="field">
                <label className="field__label">お引き渡し日 (ご希望)</label>
                <input className="field__input" type="date" value={form.dateOut} onChange={(e) => update('dateOut', e.target.value)} />
              </div>
            </div>
            <div className="field-row">
              <div className="field field--full">
                <label className="field__label">ご希望プラン</label>
                <select className="field__input" value={plan} onChange={(e) => setPlan(e.target.value)}>
                  <option value="ume">梅・クイック — ¥5,000 一式 (洗車 + ワックス + 送迎)</option>
                  <option value="take">竹・スタンダード — ¥15,000 一式 (梅 + 水垢落とし + 撥水コート)</option>
                  <option value="matsu">松・プレミアム — ¥50,000〜 (竹 + 本格研磨 + ガラスコーティング ※3〜4日)</option>
                </select>
                <p style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 8, lineHeight: 1.6, fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}>
                  ※ パーキング (¥1,000/日) は別途加算となります
                </p>
              </div>
            </div>
          </>
        )}

        <div className="field-row">
          <div className="field">
            <label className="field__label">お車メーカー</label>
            <input className="field__input" placeholder="トヨタ" value={form.carMake} onChange={(e) => update('carMake', e.target.value)} />
          </div>
          <div className="field">
            <label className="field__label">車種</label>
            <input className="field__input" placeholder="アルファード" value={form.carModel} onChange={(e) => update('carModel', e.target.value)} />
          </div>
        </div>

        <div className="field-row">
          <div className="field field--full">
            <label className="field__label">ご要望・ご相談内容</label>
            <textarea className="field__input" rows={4} placeholder="ご質問やご要望がございましたらお書きください。" value={form.notes} onChange={(e) => update('notes', e.target.value)}></textarea>
          </div>
        </div>

        <div className="inquiry__form__submit">
          <p className="inquiry__form__note">
            ※ 送信ボタンにて、ご利用のメールソフトが起動いたします。
          </p>
          <button type="submit" className="btn btn--gold btn--lg">送信する <span className="btn__arrow">→</span></button>
        </div>
      </form>

      <div className="inquiry__success">
        <div className="inquiry__success__icon">✓</div>
        <h3 className="inquiry__success__title">お問い合わせありがとうございます</h3>
        <p className="inquiry__success__desc">
          メールソフトが起動しました。<br/>
          内容をご確認のうえ、送信ボタンをお押しください。<br/><br/>
          営業時間内にスタッフから折り返しご連絡いたします。
        </p>
      </div>
    </div>
  );
}

function InquirySide() {
  const c = ZENRYU_DATA.company;
  const usePhone = c.phone;
  const useEmail = 'info@zenryurentacar.com';
  return (
    <div className="inquiry__side">
      <h3>お電話・LINE でも<br/>お気軽にどうぞ。</h3>
      <div className="inquiry__channel">
        <div className="inquiry__channel__label">TEL · お電話</div>
        <div className="inquiry__channel__value"><a href={`tel:${usePhone.replace(/-/g, '')}`}>{usePhone}</a></div>
        <div className="inquiry__channel__hours">営業 {c.hours}</div>
        <p className="inquiry__channel__desc">スタッフが直接お受けいたします。お急ぎの場合はこちらが確実です。</p>
      </div>
      <div className="inquiry__channel">
        <div className="inquiry__channel__label">MAIL · メール</div>
        <div className="inquiry__channel__value" style={{ fontSize: 18, wordBreak: 'break-all' }}><a href={`mailto:${useEmail}`}>{useEmail}</a></div>
        <div className="inquiry__channel__hours">返信は営業時間内に</div>
        <p className="inquiry__channel__desc">フォームをご利用にならない場合、直接メールでも承ります。</p>
      </div>
      <div className="inquiry__channel">
        <div className="inquiry__channel__label">INSTAGRAM · 公式アカウント</div>
        <div className="inquiry__channel__value" style={{ fontSize: 18 }}><a href={c.instagram} target="_blank" rel="noopener">@zenryu_rentacar</a></div>
        <div className="inquiry__channel__hours">DMも受付中</div>
        <p className="inquiry__channel__desc">車両・施工事例の最新情報を発信しております。</p>
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

export function InquirySection({ id, defaultSubject, defaultPlan, eyebrow, title, lede }: InquirySectionProps) {
  return (
    <section className="inquiry" id={id || 'inquiry'}>
      <div className="section">
        <div className="eyebrow">{eyebrow || 'INQUIRY · お問い合わせ'}</div>
        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title || 'ご予約・ご相談は、<br/>お電話 / メールにて。' }}></h2>
        <p className="section-lede">
          {lede || 'お電話・メールフォーム・LINE、ご都合の良い方法でお気軽にご連絡くださいませ。コンシェルジュが丁寧にご案内いたします。'}
        </p>
        <div className="inquiry__shell">
          <InquiryForm defaultSubject={defaultSubject} defaultPlan={defaultPlan} />
          <InquirySide />
        </div>
      </div>
    </section>
  );
}
