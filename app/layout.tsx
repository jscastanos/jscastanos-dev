import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AppLayout from './components/AppLayout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jec Castanos',
  description: 'Hi, I’m Jec Castanos. I’m a software engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
