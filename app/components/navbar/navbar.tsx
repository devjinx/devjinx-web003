import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/favicon.ico';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between sm:justify-between md:justify-between">
          {/* Mobile Hamburger Menu */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
            </button>
          </div>

          {/* Desktop Logo (visible only on larger screens) */}
            <div className="flex shrink-0 items-center sm:flex sm:justify-start sm:ml-0 sm:block hidden">
              <Image src={logo} alt="DEVJINX Logo" width={32} height={32} className="h-8 w-auto" />
            </div>


          {/* Mobile Logo */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden justify-center w-full">
            <Image src={logo} alt="DEVJINX Logo" width={32} height={32} className="h-8 w-auto" />
          </div>
          
          {/* Navbar links */}
          <div className="hidden sm:flex sm:ml-auto space-x-4">
            <Link href="/" className="rounded-md px-3 py-2 text-base font-medium hover:text-gray-300 text-white">Home</Link>
            <Link href="#" className="rounded-md px-3 py-2 text-base font-medium hover:text-gray-300 text-white">About</Link>
            <Link href="#" className="rounded-md px-3 py-2 text-base font-medium hover:text-gray-300 text-white">Projects</Link>
            <Link href="#" className="rounded-md px-3 py-2 text-base font-medium hover:text-gray-300 text-white">Experience</Link>
            <Link href="/archievement" className="block rounded-md px-3 py-2 text-base font-medium hover:text-gray-300 text-white">Archievement</Link>
            <Link href="/blog" className="block rounded-md px-3 py-2 text-base font-medium hover:text-gray-300 text-white">Blog</Link>
          </div>

          {/* Notifications button */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="/" className="block rounded-md hover:bg-gray-900 bg-gray-700 px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Home</Link>
          <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-900 text-gray-300 bg-gray-700 hover:text-white">About</Link>
          <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-900 text-gray-300 bg-gray-700 hover:text-white">Projects</Link>
          <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-900 text-gray-300 bg-gray-700 hover:text-white">Experience</Link>
          <Link href="/archievement" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-900 text-gray-300 bg-gray-700 hover:text-white">Archievement</Link>
          <Link href="/blog" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-900 text-gray-300 bg-gray-700 hover:text-white"> Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
