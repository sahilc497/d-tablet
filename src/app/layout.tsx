import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const geist = GeistSans;

export const metadata: Metadata = {
  title: "Premium Digital Tablet",
  description: "Write Naturally. Think Digitally.",
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geist.variable} ${playfair.variable} font-sans bg-[#0A0A0A] text-[#FAFAFA]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
