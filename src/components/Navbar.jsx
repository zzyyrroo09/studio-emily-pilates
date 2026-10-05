import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Book Now', href: '#booking' },
];

export default function Navbar({ onAdminClick }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-sage-500 flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-serif text-lg font-semibold">E</span>
            </div>
            <span className="font-serif text-xl font-semibold text-sage-800 tracking-tight">
              Studio Emily Pilates
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-sage-700 hover:text-sage-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sage-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onAdminClick}
              className="text-xs font-medium text-sage-400 hover:text-sage-600 transition-colors"
            >
              Instructor Login
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-sage-700 hover:bg-sage-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-cream-50/98 backdrop-blur-md',
          open ? 'max-h-80 border-b border-sage-100' : 'max-h-0'
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 px-3 rounded-xl text-sage-700 font-medium hover:bg-sage-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { onAdminClick(); setOpen(false); }}
            className="block w-full text-left py-2.5 px-3 rounded-xl text-sage-400 text-sm hover:bg-sage-50 transition-colors"
          >
            Instructor Login
          </button>
        </div>
      </div>
    </nav>
  );
}
