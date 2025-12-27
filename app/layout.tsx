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
  title: "Fayis K (bcziamfayiz) | Full Stack Developer in Kozhikode",
  description:
    "Fayis K, also known as bcziamfayiz, is a Full Stack Developer from Kozhikode, India. Specialized in MERN stack, scalable backend systems, and modern web applications.",
  keywords: [
    "Fayis K",
    "bcziamfayiz",
    "Fayis K Developer",
    "Full Stack Developer Kozhikode",
    "MERN Developer Kozhikode",
    "Web Developer Kozhikode",
    "Fayis K Full Stack Developer",
  ],
  authors: [{ name: "Fayis K" }],
  openGraph: {
    title: "Fayis K | Full Stack Developer",
    description:
      "Official personal website of Fayis K (bcziamfayiz), Full Stack Developer from Kozhikode, India.",
    url: "https://your-domain.vercel.app",
    siteName: "Fayis K",
    type: "website",
  },
  verification: {
    google: "-ZKbB1cwla0jQAlFgqBc3otb4pWn09XViLJppCKtj9U",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD Schema (CRITICAL for Google) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fayis K",
              alternateName: "bcziamfayiz",
              url: "https://your-domain.vercel.app",
              jobTitle: "Full Stack Developer",
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
      </body>
    </html>
  );
}
