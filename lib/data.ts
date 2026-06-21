/* Real data — restructured pricing
   = カーケアコース (松竹梅 = 固定料金) + パーキング ¥1,000/日 (別途) */

export interface Company {
  address: string;
  phone: string;
  hours: string;
  instagram: string;
  rentalUrl: string;
  reserveUrl: string;
}

export interface PlanFeature {
  ok: boolean;
  text: string;
}

export interface Plan {
  key: string;
  char: string;
  romaji: string;
  name: string;
  tagline: string;
  price: number;
  priceNote: string;
  duration: string;
  featured: boolean;
  premium: boolean;
  features: PlanFeature[];
}

export interface PriceExample {
  case: string;
  days: number;
  plan: string;
  label: string;
}

export interface RentalCar {
  name: string;
  category: string;
  smoking: string;
  capacity: string;
  equipment: string;
  regular: number;
  peak: number;
}

export interface Rental {
  intro: string;
  cars: RentalCar[];
  options: { name: string; price: string }[];
}

export interface UsedCars {
  status: string;
  points: { title: string; desc: string }[];
}

export interface Step {
  num: string;
  glyph: string;
  title: string;
  desc: string;
}

export interface DetailingMenuItem {
  key: string;
  ref: string;
  tier: string;
  name: string;
  duration: string;
  price: number;
  priceNote: string;
  featured?: boolean;
  premium?: boolean;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface Artisan {
  quote: string;
  name: string;
  role: string;
}

export interface Testimonial {
  title: string;
  body: string;
  attr: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface ContactChannel {
  icon: string;
  title: string;
  desc: string;
  value: string;
  hours: string;
}

export interface ZenryuData {
  company: Company;
  plans: Plan[];
  parking: { pricePerDay: number; note: string };
  priceExamples: PriceExample[];
  rental: Rental;
  usedCars: UsedCars;
  steps: Step[];
  detailingMenu: DetailingMenuItem[];
  detailingProcess: ProcessStep[];
  artisan: Artisan | null;
  testimonials: Testimonial[];
  faqs: Faq[];
  contact: ContactChannel[];
}

export const ZENRYU_DATA: ZenryuData = {
  /* 実会社情報 (from zenryurentacar.com) */
  company: {
    address: '〒901-0231 沖縄県豊見城市我那覇 152番地8',
    phone: '098-995-9805',
    hours: '9:00 〜 21:00',
    instagram: 'https://www.instagram.com/zenryu_rentacar/',
    rentalUrl: 'https://www.zenryurentacar.com/',
    reserveUrl: 'https://www.rentacar-samurai.jp/zenryu-rentacar',
  },

  /* カーケアコース 松竹梅 — 固定料金 (パーキングは別途加算) */
  plans: [
    {
      key: 'ume',
      char: '梅',
      romaji: 'UME',
      name: 'クイック',
      tagline: 'お試しにご利用いただきやすい、基本のカーケアコース。',
      price: 5000,
      priceNote: '一式',
      duration: '半日 (約3時間)',
      featured: false,
      premium: false,
      features: [
        { ok: true, text: '手洗い洗車 (中性シャンプー)' },
        { ok: true, text: 'タイヤワックス施工' },
        { ok: true, text: '那覇空港送迎付き' },
        { ok: false, text: 'ガラス・ボディーの水垢落とし' },
        { ok: false, text: '高機能撥水コート' },
        { ok: false, text: '本格研磨・ガラスコーティング' },
      ],
    },
    {
      key: 'take',
      char: '竹',
      romaji: 'TAKE',
      name: 'スタンダード',
      tagline: '雨ジミ・水垢を一掃し、撥水コートで艶を取り戻すコース。',
      price: 15000,
      priceNote: '一式',
      duration: '1日',
      featured: true,
      premium: false,
      features: [
        { ok: true, text: '手洗い洗車 + タイヤワックス' },
        { ok: true, text: '那覇空港送迎付き' },
        { ok: true, text: 'ガラスの水垢落とし' },
        { ok: true, text: 'ボディーの水垢落とし' },
        { ok: true, text: '高機能撥水コート' },
        { ok: false, text: '本格研磨・ガラスコーティング' },
      ],
    },
    {
      key: 'matsu',
      char: '松',
      romaji: 'MATSU',
      name: 'プレミアム',
      tagline: '本格研磨とガラスコーティング。仕上がりまで丁寧に。',
      price: 50000,
      priceNote: '〜',
      duration: '3〜4日間',
      featured: false,
      premium: true,
      features: [
        { ok: true, text: '手洗い洗車 + タイヤワックス' },
        { ok: true, text: '那覇空港送迎付き' },
        { ok: true, text: 'ガラス・ボディーの水垢落とし' },
        { ok: true, text: '本格研磨 (下地ポリッシング)' },
        { ok: true, text: 'ガラスコーティング施工' },
        { ok: true, text: '高機能撥水コート' },
      ],
    },
  ],

  /* パーキング料金 — 別途加算 */
  parking: {
    pricePerDay: 1000,
    note: 'カーケアコースと併せてご利用いただけます。コース内容に関わらず一律料金。',
  },

  /* 料金例 — 合計イメージ */
  priceExamples: [
    { case: '日帰り出張', days: 1, plan: 'ume', label: '出張前に手洗い洗車' },
    { case: '3泊4日の旅行', days: 4, plan: 'take', label: '帰宅時に水垢落とし + 撥水コート完了' },
    { case: 'GW・年末年始', days: 7, plan: 'matsu', label: '長期休暇中に本格コーティング' },
  ],

  /* レンタカー (実車両ラインナップ from zenryurentacar.com) */
  rental: {
    intro: '沖縄のコンパクトカーレンタル専門店。全車両に自社施工のコーティングを施し、清潔な状態でお渡しいたします。',
    cars: [
      { name: 'トヨタ タンク / トール / ルーミー', category: 'コンパクトカー', smoking: '禁煙車', capacity: '5名', equipment: 'AT車・カーナビ・バックモニター・ETC・Bluetooth', regular: 7700, peak: 10000 },
      { name: 'スズキ ソリオ', category: 'コンパクトカー', smoking: '禁煙車', capacity: '5名', equipment: 'カーナビ・ETC・バックモニター・Bluetooth', regular: 8800, peak: 10000 },
      { name: 'トヨタ アクア', category: 'エコカー', smoking: '禁煙車', capacity: '5名', equipment: 'カーナビ・ETC・Bluetooth', regular: 7700, peak: 10000 },
      { name: 'トヨタ タンク', category: 'コンパクトカー', smoking: '電子タバコOK', capacity: '5名', equipment: 'ナビ・ETC・バックモニター・Bluetooth・充電器', regular: 7700, peak: 10000 },
      { name: 'スズキ ソリオ', category: 'コンパクトカー', smoking: '電子タバコOK', capacity: '5名', equipment: 'カーナビ・ETC・バックモニター・Bluetooth', regular: 7700, peak: 10000 },
      { name: 'ホンダ フリード ハイブリッド', category: 'ワゴン', smoking: '禁煙車', capacity: '7名', equipment: 'カーナビ・バックモニター・ETC・ドライブレコーダー', regular: 8800, peak: 10000 },
      { name: '三菱 デリカ D:5', category: 'ミニバン', smoking: '禁煙車', capacity: '7名', equipment: 'ALPINEディスプレイオーディオ', regular: 11000, peak: 18000 },
    ],
    options: [
      { name: 'NOC補償', price: '1,100円 / 日' },
      { name: 'チャイルドシート', price: '550円 / 回' },
      { name: 'ジュニアシート', price: '550円 / 回' },
    ],
  },

  /* 認定中古車 — 事業準備中 */
  usedCars: {
    status: '準備中',
    points: [
      { title: '自社管理車両', desc: 'レンタカーとして自社で運用し、整備履歴・走行状況を把握した車両のみを販売予定です。' },
      { title: '自社技術でリフレッシュ', desc: 'ご納車前に職人がディテイリング。内外装ともに整えた状態でお渡しする予定です。' },
      { title: '「ゼンリュウ認定」', desc: '独自の品質基準をクリアした車両のみを「認定中古車」としてご案内する予定です。' },
    ],
  },

  /* ご利用の流れ */
  steps: [
    { num: '01', glyph: '一', title: '事前予約', desc: 'お電話・メール・LINEにてご予約。ご出発予定日とコースをお伝えください。' },
    { num: '02', glyph: '二', title: 'お預かり', desc: '那覇空港にて、スタッフがお車をお受け取りいたします。' },
    { num: '03', glyph: '三', title: 'カーケア施工', desc: 'ご旅行・ご出張のあいだ、ご選択のコースで丁寧に施工いたします。' },
    { num: '04', glyph: '四', title: 'お引き渡し', desc: 'ご帰着便に合わせて、整えられたお車でお出迎えいたします。' },
  ],

  /* ディテイリング単独メニュー = カーケアコースと同一内容・同一料金 */
  detailingMenu: [
    { key: 'light', ref: '梅', tier: 'LIGHT', name: 'クイック', duration: '半日 (約3時間)', price: 5000, priceNote: '一式' },
    { key: 'standard', ref: '竹', tier: 'STANDARD', name: 'スタンダード', duration: '1日', price: 15000, priceNote: '一式', featured: true },
    { key: 'premium', ref: '松', tier: 'PREMIUM', name: 'プレミアム', duration: '3〜4日間', price: 50000, priceNote: '〜', premium: true },
  ],

  /* 施工工程 */
  detailingProcess: [
    { num: '01', title: '入庫・打合せ', desc: 'お車の状態を共に確認し、施工内容と仕上がりイメージをご共有いたします。' },
    { num: '02', title: '手洗い・水垢落とし', desc: '中性シャンプーで2層洗いの後、ガラス・ボディーの水垢を専用ケミカルで除去します。' },
    { num: '03', title: '下地研磨', desc: '微細な傷を丁寧にポリッシング、塗装本来の艶を引き出します。(松のみ)' },
    { num: '04', title: 'ガラスコーティング', desc: '硬化型ガラスコーティング剤を塗布し、ブースで完全硬化させます。(松のみ)' },
    { num: '05', title: '撥水・仕上げ', desc: '高機能撥水コートとタイヤワックスで、視界と足元まで整えます。' },
    { num: '06', title: '最終検品・引渡', desc: '隅々まで点検後、ご納車前に施工後のお写真をお送りいたします。' },
  ],

  /* 職人プロフィール — 実在の情報が揃うまで非表示 */
  artisan: null,

  /* お客様の声 — 実在の声が集まるまで非表示 */
  testimonials: [],

  /* よくあるご質問 */
  faqs: [
    { q: 'パーキング料金はいくらですか?', a: 'パーキングは1日¥1,000でご利用いただけます。カーケアコース (松竹梅) と併せてご予約いただくと、ご旅行期間中にコースの仕上げをご提供いたします。例: 3泊4日で竹コースをご利用 = ¥1,000×4日 + ¥15,000。' },
    { q: 'キャンセル料はかかりますか?', a: 'ご利用日の3日前まで無料でキャンセル可能です。前日・当日のキャンセルにつきましては所定の料金を申し受けますので、お早めにご連絡ください。' },
    { q: '空港までの送迎は無料ですか?', a: 'カーケアコースをご利用のお客様の送迎はコース料金に含まれております。那覇空港 国内線・国際線両ターミナルに対応しております。' },
    { q: '松コースに3〜4日かかる理由は?', a: 'プレミアムコースは下地研磨・ガラスコーティング・完全硬化までをひと工程ずつ丁寧に行うため、合計3〜4日間のお預かりをお願いしております。' },
    { q: 'ディテイリングだけの依頼は可能ですか?', a: 'はい、パーキングをご利用にならない場合でも、コースのみのご依頼を承ります。料金は松竹梅と同じ¥5,000 / ¥15,000 / ¥50,000〜でございます。' },
    { q: '輸入車・EV車も対応していますか?', a: '一般乗用車・SUV・輸入車・EV車に対応いたします。塗装の柔らかい欧州車も車種特性を踏まえて丁寧に仕上げます。事前にご相談ください。' },
  ],

  /* お問い合わせ手段 */
  contact: [
    { icon: '電', title: 'お電話', desc: '営業時間内のスタッフ対応', value: '098-995-9805', hours: '9:00 〜 21:00' },
    { icon: '信', title: 'LINE', desc: '友だち追加でお問い合わせ', value: '@zenryu', hours: '営業時間内に返信' },
    { icon: '法', title: '法人窓口', desc: '月額契約・経費精算のご相談', value: 'お問い合わせフォームより', hours: '平日 9:00 〜 18:00' },
  ],
};
