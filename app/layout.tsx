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
  title: "Dennis Sadiki",
  description: "",
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
        {/* flex-1 sorgt dafür, dass main den Platz füllt */}
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
