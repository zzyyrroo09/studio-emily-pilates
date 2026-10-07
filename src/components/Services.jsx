import { Check, Star } from 'lucide-react';
import { cn } from '../lib/utils';

const packages = [
  {
    name: 'Private Pilates Session',
    type: 'Reformer or Mat',
    price: '₱1,600',
    perSession: 'per session',
    description: 'A fully personalized 1-on-1 session tailored to your body, goals, and pace.',
    features: [
      'Choose Reformer or Mat Pilates',
      'Customized program design',
      'Posture & alignment assessment',
      'Progress tracking',
      '55-minute session',
    ],
    popular: true,
  },
  {
    name: 'Duet Pilates Session',
    type: 'Reformer or Mat',
    price: '₱1,200',
    perSession: 'per person',
    description: 'Share your Pilates journey with a partner, friend, or family member.',
    features: [
      'Semi-private instruction',
      'Choose Reformer or Mat Pilates',
      'Partner accountability',
      'Fun & motivating',
      '55-minute session',
    ],
    popular: false,
  },
  {
    name: 'Small Group Mat Pilates',
    type: 'Up to 6 participants',
    price: '₱800',
    perSession: 'per person',
    description: 'An energizing group experience focused on core, flexibility, and mindful flow.',
    features: [
      'Max 6 participants',
      'Mat-based exercises',
      'Community atmosphere',
      'All levels welcome',
      '60-minute session',
    ],
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 relative bg-driftwood-50 overflow-hidden">
      {/* Decorative Beach Vibes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ocean-200/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-widest mb-3">
            Services &amp; Pricing
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ocean-900 mb-6">
            Find the session that{' '}
            <span className="italic text-ocean-600">fits you</span>
          </h2>
          <p className="text-ocean-700 max-w-xl mx-auto text-lg">
            Choose focused Reformer or Mat Pilates, bring a partner, or move
            together in a small group by the coast.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                'relative flex flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2',
                pkg.popular
                  ? 'bg-ocean-900 text-white shadow-2xl shadow-ocean-900/30'
                  : 'bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white shadow-xl shadow-driftwood-900/5'
              )}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-400 text-ocean-950 text-xs font-bold tracking-wide shadow-lg shadow-gold-500/20">
                    <Star size={14} fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <p
                  className={cn(
                    'text-xs font-semibold uppercase tracking-widest mb-3',
                    pkg.popular ? 'text-gold-400' : 'text-ocean-500'
                  )}
                >
                  {pkg.type}
                </p>
                <h3
                  className={cn(
                    'font-serif text-2xl font-semibold mb-2',
                    pkg.popular ? 'text-white' : 'text-ocean-900'
                  )}
                >
                  {pkg.name}
                </h3>
                <p
                  className={cn(
                    'text-sm leading-relaxed',
                    pkg.popular ? 'text-ocean-100/80' : 'text-ocean-600'
                  )}
                >
                  {pkg.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 flex items-baseline gap-1.5">
                <span
                  className={cn(
                    'text-4xl font-bold tracking-tight',
                    pkg.popular ? 'text-white' : 'text-ocean-900'
                  )}
                >
                  {pkg.price}
                </span>
                <span
                  className={cn(
                    'text-sm font-medium',
                    pkg.popular ? 'text-ocean-200' : 'text-ocean-500'
                  )}
                >
                  {pkg.perSession}
                </span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-4 mb-8">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={cn(
                        'flex-shrink-0 mt-0.5',
                        pkg.popular ? 'text-gold-400' : 'text-ocean-500'
                      )}
                    />
                    <span
                      className={cn(
                        'text-sm leading-relaxed',
                        pkg.popular ? 'text-ocean-50' : 'text-ocean-700'
                      )}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#booking"
                className={cn(
                  'block w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300',
                  pkg.popular
                    ? 'bg-gold-400 text-ocean-950 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20'
                    : 'bg-ocean-100 text-ocean-900 hover:bg-ocean-800 hover:text-white'
                )}
              >
                Book This Session
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
