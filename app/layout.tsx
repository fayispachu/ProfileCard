// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fayis K | Next.js & MERN Full Stack Developer",
  description:
    "Official website of Fayis K (bcziamfayiz). Full Stack Developer specializing in Next.js, MERN stack, scalable backend systems, real-time applications, and performance-focused web development.",
  keywords: [
    "Fayis K",
    "fayis k",
    "developer fayis",
    "bcziamfayiz",
    "Next.js Developer",
    "MERN Stack Developer",
    "Full Stack Web Developer",
    "Best mernstack developer in kozhikode",
  ],
  authors: [{ name: "Fayis K" }],

  openGraph: {
    title: "Fayis K | Next.js & MERN Full Stack Developer",
    description:
      "Official personal website of Fayis K (bcziamfayiz), Full Stack Developer focused on Next.js and MERN stack.",
    url: "https://bcziamfayiz.vercel.app",
    siteName: "Fayis K",
    type: "website",
    images: [
      {
        url: "https://bcziamfayiz.vercel.app/images/profile.png",
        width: 1200,
        height: 1200,
        alt: "Fayis K Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fayis K | Next.js & MERN Full Stack Developer",
    description:
      "Official website of Fayis K (bcziamfayiz) — Full Stack Developer specialized in Next.js & MERN.",
    images: [
      "https://bcziamfayiz.vercel.app/images/profile.png",
    ],
  },

  verification: {
    google: "-ZKbB1cwla0jQAlFgqBc3otb4pWn09XViLJppCKtj9U",
  },

  icons: {
    icon: "/images/profile.png",
    shortcut: "/images/profile.png",
    apple: "/images/profile.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fayis K",
              alternateName: "bcziamfayiz",
              url: "https://bcziamfayiz.vercel.app/",
              jobTitle: "Next.js Full Stack Engineer",
              image: "https://bcziamfayiz.vercel.app/images/profile.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kozhikode",
                addressCountry: "India",
              },
              sameAs: [
                "https://github.com/fayispachu",
                "https://fayis-k-developer.onrender.com",
              ],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
