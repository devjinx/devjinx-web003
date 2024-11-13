"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/favicon.ico';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center sm:justify-between">
          
          {/* Mobile Hamburger Menu */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            </button>
          </div>

          {/* Centered Logo (visible on all screen sizes) */}
          <div className="flex items-center justify-center">
            <Image src={logo} alt="DEVJINX Logo" width={32} height={32} className="h-8 w-auto" />
          </div>

          {/* Navbar Links for Desktop */}
          <div className="hidden sm:flex sm:ml-auto space-x-4">
            <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
            <Link href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Experience</Link>
            <Link href="/archievement" className="text-white px-3 py-2 rounded-md text-sm font-medium">Achievement</Link>
            <Link href="/blog" className="text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link href="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            <Link href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Experience</Link>
            <Link href="/archievement" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Achievement</Link>
            <Link href="/blog" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Blog</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;