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
        <div className='flex flex-col absolute end-4 top-10 items-end space-y-2 md:hidden fade-in bg-black/9 backdrop-blur-md rounded-md shadow-xl w-full h-full'>
          <Link
            href='/'
            onClick={() => setMenuOpen(false)}
            className='text-white'
          >
            Startseite
          </Link>
          <Link
            href='/profil'
            onClick={() => setMenuOpen(false)}
            className='text-white'
          >
            Über mich
          </Link>
          <Link
            href='/leistungen'
            onClick={() => setMenuOpen(false)}
            className='text-white'
          >
            Leistungen
          </Link>
          <Link
            href='/projekte'
            onClick={() => setMenuOpen(false)}
            className='text-white'
          >
            Projekte
          </Link>
          <Link
            href='/kontakt'
            onClick={() => setMenuOpen(false)}
            className='text-white'
          >
            Kontakt
          </Link>
        </div>
      )}
    </header>
  );
}
