import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { Footer } from "./components/footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dennis Sadiki",
  url: "https://www.dennissadiki.de",
  image:
    "https://www.dennissadiki.de/_next/image?url=%2FDennis-Sadiki.png&w=384&q=75",
  jobTitle: "Web Developer (React/Next.js)",
  sameAs: [
    "https://github.com/AchillesGit",
    "https://www.linkedin.com/in/dennis-florim-sadiki-753b65280",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://www.dennissadiki.de",
  name: "Mein Portfolio",
  description:
    "Persönliches Portfolio von Dennis Sadiki, spezialisiert auf Web Development.",
  author: {
    "@type": "Person",
    name: "Dennis Sadiki",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dennissadiki.de"), // Basis-URL :contentReference[oaicite:5]{index=5}
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/",
    },
  },
  title: "Dennis Sadiki – Fullstack Webentwickler",
  description:
    "Hallo, ich bin Dennis Sadiki. Als leidenschaftlicher Fullstack-Webentwickler setze ich auf moderne Technologien wie React, Next.js und Tailwind CSS, um kreative und performante Weblösungen zu realisieren. Schau dir in meinem Portfolio meine Projekte und Erfahrungen an!",
  keywords:
    "Dennis Sadiki, Fullstack Webentwickler, React, Next.js, Tailwind CSS, Webentwicklung, Portfolio, Projekte, Softwareentwicklung, Deutschland, Berlin",
  authors: [{ name: "Dennis Sadiki" }],
  openGraph: {
    title: "Mein Portfolio als Fullstack Webentwickler – Dennis Sadiki",
    description:
      "Ich bin Dennis Sadiki und teile hier meine spannendsten Projekte und Fähigkeiten in moderner Webentwicklung mit React, Next.js und Tailwind CSS.",
    url: "https://www.dennissadiki.de",
    siteName: "Dennis Sadiki Portfolio",
    images: [
      {
        url: "/Dennis-Sadiki.png",
        width: 512,
        height: 512,
        alt: "Porträt von Dennis Sadiki",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mein Fullstack Webentwickler Portfolio – Dennis Sadiki",
    description:
      "Entdecke, wie ich als Fullstack-Entwickler mit React, Next.js und Tailwind CSS innovative Webprojekte umsetze.",
    creator: "@DennisSadiki",
    images: ["/Dennis-Sadiki.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='de' className={geistSans.className}>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <meta
          name='google-site-verification'
          content='w-sj4g4BXwcZpGl3cZKr2Mk5YqY84uVCdyyn6s_3_Vo'
        />
        <meta
          name='google-site-verification'
          content='qbJJzEmNK_PCqjzW9v-6Afd-xAE_4Aqrs3hB1KD9OMI'
        />
        <Script
          id='person-jsonld'
          type='application/ld+json'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <Script
          id='website-jsonld'
          type='application/ld+json'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className='antialiased bg-gradient-to-br from-black via-gray-900 to-black bg-fixed bg-no-repeat bg-cover flex flex-col min-h-screen '>
        <Header />
        <main className='flex-1 flex flex-col'>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />s
      </body>
    </html>
  );
}
