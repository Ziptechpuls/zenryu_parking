import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_JP({
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: false,
  variable: '--font-sans-jp',
});

const notoSerif = Noto_Serif_JP({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: false,
  variable: '--font-serif-jp',
});

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono-jb',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zenryu-p.jp'),
  title: 'ゼンリュウ | 那覇空港 パーキング × カーディテイリング',
  description:
    'ゼンリュウは那覇空港の空港パーキングとカーディテイリングの専門店。ご旅行・ご出張で車を預けているあいだに、職人が洗車・磨き・コーティングを施工します。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} ${jetBrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
