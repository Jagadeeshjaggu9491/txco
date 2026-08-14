import './globals.css';
import Preloader from '@/components/Preloader';

export const metadata = {
  title: 'TXCO - Advanced Gaskets & Sealing Technology',
  description: 'Next.js App for TXCO Sealing Products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}

