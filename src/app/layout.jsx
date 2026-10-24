import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Preloader from '@/components/Preloader';
import BootstrapClient from '@/components/BootstrapClient';
import GoogleTranslate from '@/components/GoogleTranslate';
import TxcoChatbot from '@/components/chatbot/TxcoChatbot';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';

export const metadata = {
  title: 'TXCO - Advanced Gaskets & Sealing Technology',
  description: 'Next.js App for TXCO Sealing Products',
  icons: {
    icon: [
      { url: '/favicon-txco.png', type: 'image/png' },
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon-txco.png',
    apple: '/favicon-txco.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-txco.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon-txco.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon-txco.png" />
        <link rel="preload" href="/images/hero-section-video-bg.avif" as="image" type="image/avif" />
        <link rel="preload" href="/images/hero-section-video.mp4" as="video" type="video/mp4" />
      </head>
      <body suppressHydrationWarning>
        <GoogleTranslate />
        <Preloader />
        <BootstrapClient />
        {children}
        <FloatingWhatsApp />
        <TxcoChatbot />
      </body>
    </html>
  );
}

