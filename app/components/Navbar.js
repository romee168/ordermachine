'use client';

import Link from 'next/link';
import { useState } from 'react';
import { theme } from '../styles/theme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className={theme.spacing.container}>
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
                OrderMachine
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/features" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/demo" className={`${theme.buttons.primary} w-full sm:w-auto`}>
              Get Free Trial Device
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/features" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-primary transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-primary transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-primary transition-colors">
            Contact
          </Link>
          <div className="px-4 py-2">
            <Link href="/demo" className={`${theme.buttons.primary} block text-center`}>
              Get Free Trial Device
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 