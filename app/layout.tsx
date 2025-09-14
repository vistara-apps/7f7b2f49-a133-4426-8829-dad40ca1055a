import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CampusNotes Connect',
  description: 'Share, Search, and Succeed: Your Campus Notes Hub',
  keywords: ['campus', 'notes', 'students', 'university', 'base', 'web3'],
  openGraph: {
    title: 'CampusNotes Connect',
    description: 'Share, Search, and Succeed: Your Campus Notes Hub',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
