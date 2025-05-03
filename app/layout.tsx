import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { Footer } from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dennis Sadiki - Fullstack Webentwickler Portfolio",
  description:
    "Entdecken Sie das Portfolio von Dennis Sadiki, einem erfahrenen Fullstack-Webentwickler mit Fokus auf moderne Technologien wie React, Next.js und Tailwind CSS.",
  keywords:
    "Dennis Sadiki, Fullstack Webentwickler, React, Next.js, Tailwind CSS, Webentwicklung, Portfolio, Projekte, Softwareentwicklung, Deutschland",
  authors: [{ name: "Dennis Sadiki" }],
  openGraph: {
    title: "Dennis Sadiki - Fullstack Webentwickler Portfolio",
    description:
      "Erfahren Sie mehr über die Projekte und Fähigkeiten von Dennis Sadiki, einem Experten für moderne Webentwicklung.",
    url: "https://www.dennissadiki.de/",
    siteName: "Dennis Sadiki Portfolio",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Dennis Sadiki Portfolio Logo",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennis Sadiki - Fullstack Webentwickler Portfolio",
    description:
      "Einblicke in die Arbeit und Projekte von Dennis Sadiki, einem erfahrenen Webentwickler.",
    creator: "@DennisSadiki",
    images: ["/android-chrome-512x512.png"],
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
      </head>
      <body className='antialiased bg-gradient-to-br from-black via-gray-900 to-black bg-fixed bg-no-repeat bg-cover flex flex-col min-h-screen '>
        <Header />
        <main className='flex-1 flex flex-col'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
