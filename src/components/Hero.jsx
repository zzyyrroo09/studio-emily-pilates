import { Sparkles, Camera, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/Video-pilates.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark / Coastal Overlay */}
      <div className="absolute inset-0 bg-driftwood-950/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-driftwood-900/30 to-ocean-950/90" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-32 pb-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md bg-white/10 text-sand-50 text-sm font-medium mb-8 animate-fade-in border border-white/20">
          <Sparkles size={14} className="text-gold-400" />
          Mat &amp; Reformer Pilates in San Juan, La Union
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6 animate-slide-up">
          Move with{' '}
          <span className="text-sand-100 italic">intention</span>,<br />
          live with <span className="text-gold-400 italic">strength</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-ocean-50 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Find your flow between the mat, the reformer, and the coast. Thoughtful
          Pilates sessions for stronger movement, softer shoulders, and a little
          more room to breathe.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold rounded-3xl shadow-lg shadow-ocean-900/50 transition-all hover:-translate-y-0.5"
          >
            Book a Session
          </a>
          <a
            href="https://instagram.com/studioemily_pilates"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white font-semibold rounded-3xl border border-white/30 transition-all hover:-translate-y-0.5"
          >
            <Camera size={18} />
            Follow on Instagram
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 animate-bounce pb-8">
          <a href="#about" className="inline-flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>

      {/* Wave Divider to About Section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 text-sand-50">
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,208C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
