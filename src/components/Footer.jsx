import { Heart, MapPin, Camera } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ocean-950 text-ocean-300 relative overflow-hidden">
      {/* Decorative Wave BG */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-ocean-800/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center">
                <span className="text-ocean-950 font-serif text-lg font-bold">E</span>
              </div>
              <span className="font-serif text-xl font-semibold text-white tracking-wide">
                Studio Emily
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ocean-400">
              Mat and Reformer Pilates for a stronger, more mindful coastal life
              in San Juan, La Union.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-6 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Book a Session', href: '#booking' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-ocean-400 hover:text-gold-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-6 tracking-wide uppercase">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold-400" />
                <span>San Juan, La Union, Philippines</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Camera size={16} className="mt-0.5 flex-shrink-0 text-gold-400" />
                <a
                  href="https://instagram.com/studioemily_pilates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @studioemily_pilates
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-gold-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:09560333082"
                    className="hover:text-white transition-colors"
                  >
                    09560333082
                  </a>
                  <div className="flex gap-3 text-ocean-400 text-xs mt-1">
                    <a href="https://wa.me/639560333082" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                    <span>•</span>
                    <a href="viber://chat?number=%2B639560333082" className="hover:text-white transition-colors">Viber</a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-gold-400"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                <div className="flex flex-col">
                  <span>GCash Accepted</span>
                  <span className="text-ocean-400 text-xs">09560333082</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ocean-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ocean-500">
            © {year} Studio Emily Pilates. All rights reserved.
          </p>
          <div className="links flex items-center gap-4 text-xs text-ocean-400">
            <a
              href="https://github.com/zzyyrroo09/studio-emily-pilates"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Source code
            </a>
            <span className="text-ocean-700">•</span>
            <a
              href="https://studioemilypilates.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Live demo
            </a>
          </div>
          <p className="flex items-center gap-1.5 text-xs text-ocean-500">
            Made with <Heart size={12} className="text-gold-400" fill="currentColor" /> in San Juan, La Union
          </p>
        </div>
      </div>
    </footer>
  );
}
