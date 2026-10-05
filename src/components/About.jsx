import { Award, Heart, Users } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: 'Certified Instructor',
    desc: 'Internationally certified in Reformer & Mat Pilates with hundreds of teaching hours.',
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
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sage-500 font-medium text-sm uppercase tracking-widest mb-3">
            Your Instructor
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-sage-900">
            Guided by passion,{' '}
            <span className="italic text-sage-600">driven by results</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sage-100 to-warm-100 flex items-center justify-center overflow-hidden shadow-lg">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-sage-200 flex items-center justify-center mb-4">
                  <span className="text-5xl">🧘‍♀️</span>
                </div>
                <p className="text-sage-500 text-sm">Instructor photo</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-white rounded-2xl shadow-xl px-5 py-3 border border-sage-100">
              <p className="text-sage-800 font-semibold text-sm">500+ sessions</p>
              <p className="text-sage-500 text-xs">delivered with care</p>
            </div>
          </div>

          {/* Bio content */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-sage-900 mb-4">
              Hi, I'm Emily
            </h3>
            <p className="text-sage-600 leading-relaxed mb-4">
              As a certified Pilates instructor in San Juan, La Union, I believe
              mindful movement belongs in a balanced coastal life. Studio Emily
              Pilates is a welcoming space to reconnect with your body, build
              strength, and find a steadier rhythm between sessions and sea days.
            </p>
            <p className="text-sage-600 leading-relaxed mb-8">
              I teach both Reformer Pilates and Mat Pilates, with private,
              partner, and small-group sessions tailored to your pace. Follow my
              days by the sea at{' '}
              <a
                href="https://instagram.com/emilybythe_sea"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sage-700 underline underline-offset-4 hover:text-sage-900"
              >
                @emilybythe_sea
              </a>
              .
            </p>

            {/* Highlight cards */}
            <div className="space-y-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-sage-50/60 hover:bg-sage-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-600">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800 text-sm">
                      {title}
                    </h4>
                    <p className="text-sage-500 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
