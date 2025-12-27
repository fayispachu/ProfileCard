import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fayis K | Full Stack Developer",
  description:
    "Fayis K – Full Stack Developer, Crypto Trader, and Content Creator from Kozhikode, India.",
  keywords: [
    "Fayis K",
    "Full Stack Developer",
    "Web Developer",
    "Crypto Trader",
    "MERN Developer",
  ],
  authors: [{ name: "Fayis K" }],
  openGraph: {
    title: "Fayis K | Full Stack Developer",
    description:
      "Personal profile of Fayis K – Full Stack Developer & Crypto Trader.",
    type: "website",
    url: "https://your-domain.vercel.app",
  },

  // ✅ GOOGLE VERIFICATION (THIS IS THE RIGHT PLACE)
  verification: {
    google: "-ZKbB1cwla0jQAlFgqBc3otb4pWn09XViLJppCKtj9U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
// a
