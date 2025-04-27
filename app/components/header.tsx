"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='p-2 w-full z-50'>
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
        <div className='flex flex-col mt-2 space-y-2 md:hidden bg-black/5 backdrop-blur-md p-4 rounded-md shadow-md'>
          <Link
            href='/'
            onClick={() => setMenuOpen(false)}
            className='transition-colors text-gray-300 hover:text-gray-50'
          >
            Startseite
          </Link>
          <Link
            href='/profil'
            onClick={() => setMenuOpen(false)}
            className='transition-colors text-gray-300 hover:text-gray-50'
          >
            Über mich
          </Link>
          <Link
            href='/leistungen'
            onClick={() => setMenuOpen(false)}
            className='transition-colors text-gray-300 hover:text-gray-50'
          >
            Leistungen
          </Link>
          <Link
            href='/projekte'
            onClick={() => setMenuOpen(false)}
            className='transition-colors text-gray-300 hover:text-gray-50'
          >
            Projekte
          </Link>
          <Link
            href='/kontakt'
            onClick={() => setMenuOpen(false)}
            className='transition-colors text-gray-300 hover:text-gray-50'
          >
            Kontakt
          </Link>
        </div>
      )}
    </header>
  );
}
