import { Heart, MapPin, Camera } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sage-900 text-sage-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center">
                <span className="text-white font-serif text-sm font-semibold">E</span>
              </div>
              <span className="font-serif text-lg font-semibold text-white">
                Studio Emily Pilates
              </span>
            </div>
            <p className="text-sm leading-relaxed text-sage-400">
              Mat and Reformer Pilates for a stronger, more mindful coastal life
              in San Juan, La Union.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Book a Session', href: '#booking' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-sage-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>San Juan, La Union, Philippines</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Camera size={14} className="mt-0.5 flex-shrink-0" />
                <a
                  href="https://instagram.com/studioemily_pilates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @studioemily_pilates
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Camera size={14} className="mt-0.5 flex-shrink-0" />
                <a
                  href="https://instagram.com/emilybythe_sea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Emily: @emilybythe_sea
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-sage-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sage-500">
            © {year} Studio Emily Pilates. All rights reserved.
          </p>
          <div className="links flex items-center gap-4 text-xs text-sage-400">
            <a
              href="https://github.com/zzyyrroo09/studio-emily-pilates"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Source code
            </a>
            <span className="text-sage-600">•</span>
            <a
              href="https://studioemilypilates.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Live demo
            </a>
          </div>
          <p className="flex items-center gap-1 text-xs text-sage-500">
            Made with <Heart size={12} className="text-warm-400" fill="currentColor" /> in San Juan, La Union
          </p>
        </div>
      </div>
    </footer>
  );
}
