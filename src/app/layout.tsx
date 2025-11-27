import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/global/SmoothScroll";
import NoiseOverlay from "@/components/global/NoiseOverlay";
import CustomCursor from "@/components/global/CustomCursor";
import FrameNav from "@/components/global/FrameNav";
import Footer from "@/components/global/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Socon | Spatial Design Studio",
  description: "Innovative architectural and spatial design solutions crafting immersive environments.",
  keywords: ["architecture", "design", "interior", "spatial", "studio", "socon"],
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
