'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-thrtiary-purple shadow-md sticky top-0 z-50 font-pixelify">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-lg font-bold text-black whitespace-nowrap">
          Welcome to Bess's playground
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div className="hidden md:flex flex-1 justify-end">
          <div className="flex gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg transition-colors ${
                  pathname === item.href
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-thrtiary-purple">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg transition-colors ${
                pathname === item.href
                  ? 'text-purple-600'
                  : 'text-gray-700 hover:text-black'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}