import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP, JetBrains_Mono } from 'next/font/google';
import { OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/seo';
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
  title: {
    default: 'ゼンリュウ | 那覇空港 パーキング × カーディテイリング',
    template: '%s',
  },
  description:
    'ゼンリュウは那覇空港の空港パーキングとカーディテイリングの専門店。ご旅行・ご出張で車を預けているあいだに、職人が洗車・磨き・コーティングを施工します。',
  applicationName: 'ゼンリュウ 那覇空港パーキング',
  formatDetection: { telephone: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ゼンリュウ | 那覇空港 パーキング × カーディテイリング',
    description: '預けているあいだに、磨かれる。那覇空港の空港パーキングとカーディテイリング。',
    images: [OG_IMAGE.url],
  },
};

export const viewport: Viewport = {
  themeColor: '#fbf9f4',
  width: 'device-width',
  initialScale: 1,
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
