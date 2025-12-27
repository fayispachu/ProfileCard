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
  title: "Fayis K | Full Stack Developer in Kozhikode",
  description:
    "Fayis K is a Full Stack Developer from Kozhikode, India. Specialized in MERN stack, modern web applications, and scalable backend systems.",
  keywords: [
    "Fayis K",
    "Fayis K Developer",
    "Fayis K Full Stack Developer",
    "Full Stack Developer Kozhikode",
    "MERN Developer Kozhikode",
    "Web Developer Kozhikode",
  ],
  authors: [{ name: "Fayis K" }],
  openGraph: {
    title: "Fayis K | Full Stack Developer",
    description:
      "Official personal website of Fayis K – Full Stack Developer from Kozhikode, India.",
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
        {/* JSON-LD Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fayis K",
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
