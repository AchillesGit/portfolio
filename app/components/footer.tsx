import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className='text-gray-300 mb-6 mt-18'>
      <p className='text-sm mb-4 md:mb-0 text-center'>
        &copy; {new Date().getFullYear()} Dennis Sadiki. Alle Rechte
        vorbehalten.
      </p>
      <div className='flex gap-3 justify-center mt-2'>
        <Link
          href='https://github.com/AchillesGit'
          aria-label='GitHub'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-white transition-colors'
        >
          <FaGithub size={24} />
        </Link>
        <Link
          href='https://www.linkedin.com/in/dennis-florim-sadiki-753b65280'
          aria-label='LinkedIn'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-white transition-colors'
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          href='/kontakt'
          aria-label='Kontakt'
          className='hover:text-white transition-colors'
        >
          <FaEnvelope size={24} />
        </Link>
      </div>
    </footer>
  );
};
