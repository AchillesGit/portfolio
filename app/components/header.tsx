"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`md:relative sticky top-0 md:bg-transparent p-2 w-full z-50 ${
        menuOpen ? "" : "bg-black/9 backdrop-blur-md"
      }`}
    >
      <nav className='flex justify-end items-center'>
        <div className='hidden md:flex gap-4'>
          <Link
            href='/'
            className='transition-colors text-gray-300 hover:text-gray-50'
          >
            Startseite
          </Link>
          <Link
            href='/profil'
            className='transition-colors text-gray-300 hover:text-gray-50'
          >
            Über mich
          </Link>
          <Link
            href='/leistungen'
            className='transition-colors text-gray-300 hover:text-gray-50'
          >
            Leistungen
          </Link>
          <Link
            href='/projekte'
            className='transition-colors text-gray-300 hover:text-gray-50'
          >
            Projekte
          </Link>
          <Link
            href='/kontakt'
            className='transition-colors text-gray-300 hover:text-gray-50'
          >
            Kontakt
          </Link>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='md:hidden text-2xl text-gray-300 hover:text-gray-50 transition-colors cursor-pointer'
          aria-label='Menü öffnen oder schließen'
        >
          <FiMenu />
        </button>
      </nav>
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className='fixed inset-0 flex flex-col space-y-2 md:hidden fade-in w-full h-screen bg-black/50 backdrop-blur-md justify-center items-center'
        >
          <Link href='/' className='text-white text-lg'>
            Startseite
          </Link>
          <Link href='/profil' className='text-white text-lg'>
            Über mich
          </Link>
          <Link href='/leistungen' className='text-white text-lg'>
            Leistungen
          </Link>
          <Link href='/projekte' className='text-white text-lg'>
            Projekte
          </Link>
          <Link href='/kontakt' className='text-white text-lg'>
            Kontakt
          </Link>
        </div>
      )}
    </header>
  );
}
