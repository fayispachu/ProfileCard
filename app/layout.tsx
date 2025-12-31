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
  title: "Fayis K | Full Stack Developer",
  description:
    "Fayis K, also known as bcziamfayiz, is a Full Stack Developer from Kozhikode, India. Specialized in MERN stack, scalable backend systems, and modern web applications.",
  keywords: [
    "Fayis K",
    "fayis k developer",
    "fayis k",
    "bcziamfayiz",
     "Best mernstack developer in kozhikode",
    "The best mernstack developer in calicut",
    "Full Stack Developer Kozhikode",
    "MERN Developer Kozhikode",
    "Web Developer Kozhikode",
  ],
  authors: [{ name: "Fayis K" }],
  openGraph: {
    title: "Fayis K | Full Stack Developer",
    description: "Official personal website of Fayis K (bcziamfayiz), Full Stack Developer from Kozhikode, India.",
    url: "https://bcziamfayiz.vercel.app",
    siteName: "Fayis K",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dtcjm5qss/image/upload/v1767123632/fayis_wrm6r5.png",
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fayis K | Full Stack Developer",
    description: "Official personal website of Fayis K (bcziamfayiz)",
    images: ["https://res.cloudinary.com/dtcjm5qss/image/upload/v1767123632/fayis_wrm6r5.png"], 
  },
  verification: {
    google: "-ZKbB1cwla0jQAlFgqBc3otb4pWn09XViLJppCKtj9U",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/fayis.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/fayis.png",
      },
    ],
    shortcut: "/images/fayis.png",
    apple: "/images/fayis.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
              jobTitle: "Full Stack Developer",
              image: "https://res.cloudinary.com/dtcjm5qss/image/upload/v1767123632/fayis_wrm6r5.png",
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
      
