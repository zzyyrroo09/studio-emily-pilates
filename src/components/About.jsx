import { Award, Heart, Users, Droplets } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: 'Certified Instructor',
    desc: 'Internationally certified in Reformer & Mat Pilates with hundreds of teaching hours.',
  },
  {
    icon: Droplets,
    title: 'Coastal Flow',
    desc: 'Move with the rhythm of the ocean. Find balance between the mat and the sea.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    desc: 'Every session is tailored to your body, abilities, and fitness goals.',
  },
  {
    icon: Users,
    title: 'All Levels Welcome',
    desc: 'From total beginners to advanced movers — everyone belongs here.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-sand-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-widest mb-3">
            Your Instructor
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ocean-900">
            Guided by passion,{' '}
            <span className="italic text-ocean-600">driven by results</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo placeholder with Video */}
          <div className="relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source
                  src="/video-tita.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-ocean-900/10 transition-colors group-hover:bg-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 backdrop-blur-md bg-white/85 rounded-3xl shadow-xl px-6 py-4 border border-white/50">
              <p className="text-ocean-900 font-serif font-bold text-lg">500+ sessions</p>
              <p className="text-ocean-600 text-sm">delivered with care</p>
            </div>
          </div>

          {/* Bio content */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ocean-900 mb-4">
              Hi, I'm Emily
            </h3>
            <p className="text-ocean-700 leading-relaxed mb-4">
              As a certified Pilates instructor in San Juan, La Union, I believe
              mindful movement belongs in a balanced coastal life. Studio Emily
              Pilates is a welcoming space to reconnect with your body, build
              strength, and find a steadier rhythm between sessions and sea days.
            </p>
            <p className="text-ocean-700 leading-relaxed mb-10">
              I teach both Reformer Pilates and Mat Pilates, with private,
              partner, and small-group sessions tailored to your pace. Follow my
              days by the sea at{' '}
              <a
                href="https://instagram.com/emilybythe_sea"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ocean-600 underline underline-offset-4 hover:text-gold-500 transition-colors"
              >
                @emilybythe_sea
              </a>
              .
            </p>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-5 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-2xl bg-ocean-50 flex items-center justify-center text-ocean-600 mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-serif font-semibold text-ocean-900 text-lg mb-1">
                    {title}
                  </h4>
                  <p className="text-ocean-600 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
