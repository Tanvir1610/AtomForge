import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CustomCursor from '@/components/ui/custom-cursor';
import CursorTrail from '@/components/ui/cursor-trail';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AtomForge - Revolutionizing Decentralized Finance',
  description: 'Experience the future of DeFi with our cutting-edge protocol that combines lightning-fast transactions with unparalleled security.',
  keywords: 'DeFi, blockchain, cryptocurrency, decentralized finance, yield farming, staking',
  authors: [{ name: 'AtomForge Team' }],
  openGraph: {
    title: 'AtomForge - Revolutionizing Decentralized Finance',
    description: 'Experience the future of DeFi with our cutting-edge protocol that combines lightning-fast transactions with unparalleled security.',
    url: 'https://atomforge.finance',
    siteName: 'AtomForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AtomForge - Revolutionizing Decentralized Finance',
    description: 'Experience the future of DeFi with our cutting-edge protocol that combines lightning-fast transactions with unparalleled security.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <CustomCursor />
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}