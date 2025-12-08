import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import SmoothScroll from '@/components/global/SmoothScroll';
import NoiseOverlay from '@/components/global/NoiseOverlay';
import CustomCursor from '@/components/global/CustomCursor';
import FrameNav from '@/components/global/FrameNav';
import Footer from '@/components/global/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Socon | Spatial Design Studio',
  description:
    'Innovative architectural and spatial design solutions crafting immersive environments.',
  keywords: [
    'architecture',
    'design',
    'interior',
    'spatial',
    'studio',
    'socon',
  ],
  metadataBase: new URL('https://socon.studio'), // Replace with actual domain
  openGraph: {
    title: 'Socon | Spatial Design Studio',
    description:
      'Innovative architectural and spatial design solutions crafting immersive environments.',
    url: 'https://socon.studio',
    siteName: 'Socon',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // We should ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: 'Socon Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Socon | Spatial Design Studio',
    description:
      'Innovative architectural and spatial design solutions crafting immersive environments.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <SmoothScroll>
          <NoiseOverlay />
          <CustomCursor />
          <FrameNav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
