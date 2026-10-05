import { Sparkles, Camera, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-sage-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-warm-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-8 animate-fade-in">
          <Sparkles size={14} />
          Mat &amp; Reformer Pilates in San Juan, La Union
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-sage-900 leading-tight mb-6 animate-slide-up">
          Move with{' '}
          <span className="text-sage-600 italic">intention</span>,<br />
          live with <span className="text-warm-600 italic">strength</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-sage-600 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Find your flow between the mat, the reformer, and the coast. Thoughtful
          Pilates sessions for stronger movement, softer shoulders, and a little
          more room to breathe.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sage-600 hover:bg-sage-700 text-white font-semibold rounded-2xl shadow-lg shadow-sage-600/20 transition-all hover:shadow-xl hover:shadow-sage-600/30 hover:-translate-y-0.5"
          >
            Book a Session
          </a>
          <a
            href="https://instagram.com/studioemily_pilates"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-sage-50 text-sage-700 font-semibold rounded-2xl border border-sage-200 transition-all hover:-translate-y-0.5"
          >
            <Camera size={18} />
            Follow on Instagram
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 animate-bounce">
          <a href="#about" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/60 text-sage-400 hover:text-sage-600 transition-colors">
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
