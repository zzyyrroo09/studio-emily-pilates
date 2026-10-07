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
        'fixed top-4 left-4 right-4 z-50 transition-all duration-300 max-w-6xl mx-auto rounded-3xl',
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/40'
          : 'bg-white/10 backdrop-blur-sm border border-white/20'
      )}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105",
              scrolled ? "bg-ocean-600 text-white" : "bg-white text-ocean-900"
            )}>
              <span className="font-serif text-lg font-semibold">E</span>
            </div>
            <span className={cn(
              "font-serif text-lg font-semibold tracking-tight transition-colors",
              scrolled ? "text-ocean-900" : "text-white"
            )}>
              Studio Emily
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all hover:after:w-full",
                  scrolled 
                    ? "text-ocean-700 hover:text-ocean-900 after:bg-ocean-500" 
                    : "text-sand-100 hover:text-white after:bg-gold-400"
                )}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onAdminClick}
              className={cn(
                "text-xs font-medium transition-colors",
                scrolled ? "text-ocean-400 hover:text-ocean-600" : "text-white/60 hover:text-white"
              )}
            >
              Instructor Login
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-ocean-700 hover:bg-ocean-50" : "text-white hover:bg-white/20"
            )}
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
          'md:hidden overflow-hidden transition-all duration-300 absolute top-full left-0 right-0 mt-2 rounded-3xl bg-white/95 backdrop-blur-md shadow-xl border border-ocean-100',
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-transparent'
        )}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 px-4 rounded-2xl text-ocean-800 font-medium hover:bg-ocean-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { onAdminClick(); setOpen(false); }}
            className="block w-full text-left py-3 px-4 rounded-2xl text-ocean-500 text-sm hover:bg-ocean-50 transition-colors"
          >
            Instructor Login
          </button>
        </div>
      </div>
    </nav>
  );
}
