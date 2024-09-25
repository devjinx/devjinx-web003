import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-opacity-90 w-48 h-full z-50 flex flex-col items-start px-5 py-5">
      <ul className="flex flex-col space-y-5 text-white font-medium">
        <li>
          <Link href="#about" aria-label="About section" className="hover:text-[#5dfdcb] transition duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="#experience" aria-label="Experience section" className="hover:text-[#5dfdcb] transition duration-300">
            Experience
          </Link>
        </li>
        <li>
          <Link href="#project" aria-label="Project section" className="hover:text-[#5dfdcb] transition duration-300">
            Project
          </Link>
        </li>
        <li>
          <Link href="/archivement" aria-label="Achievements page" className="hover:text-[#5dfdcb] transition duration-300">
            Achievement
          </Link>
        </li>
        <li>
          <Link href="/blog" aria-label="Blog page" className="hover:text-[#5dfdcb] transition duration-300">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;