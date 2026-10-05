import { Check, Star } from 'lucide-react';
import { cn } from '../lib/utils';

const packages = [
  {
    name: 'Private Reformer Pilates',
    type: '1-on-1 session',
    price: '₱1,500',
    perSession: 'per session',
    description: 'A fully personalized session tailored to your body, goals, and pace.',
    features: [
      'Customized program design',
      'Individual Reformer instruction',
      'Posture & alignment assessment',
      'Progress tracking',
      '55-minute session',
    ],
    popular: true,
  },
  {
    name: 'Private Mat Pilates',
    type: '1-on-1 session',
    price: '₱1,500',
    perSession: 'per session',
    description: 'Build strength and mobility through focused, equipment-free movement.',
    features: [
      'Customized program design',
      'Mat-based Pilates practice',
      'Posture & alignment assessment',
      'Progress tracking',
      '55-minute session',
    ],
    popular: false,
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
    <section id="services" className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sage-500 font-medium text-sm uppercase tracking-widest mb-3">
            Services &amp; Pricing
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-sage-900 mb-4">
            Find the session that{' '}
            <span className="italic text-sage-600">fits you</span>
          </h2>
          <p className="text-sage-500 max-w-xl mx-auto">
            Choose focused Reformer or Mat Pilates, bring a partner, or move
            together in a small group by the coast.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                'relative flex flex-col rounded-3xl border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
                pkg.popular
                  ? 'bg-sage-800 text-white border-sage-700 shadow-lg shadow-sage-800/20'
                  : 'bg-white border-sage-100 hover:border-sage-200'
              )}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-warm-400 text-white text-xs font-semibold shadow-sm">
                    <Star size={12} fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <p
                  className={cn(
                    'text-xs font-medium uppercase tracking-wider mb-2',
                    pkg.popular ? 'text-sage-300' : 'text-sage-400'
                  )}
                >
                  {pkg.type}
                </p>
                <h3
                  className={cn(
                    'font-serif text-xl font-semibold mb-1',
                    pkg.popular ? 'text-white' : 'text-sage-900'
                  )}
                >
                  {pkg.name}
                </h3>
                <p
                  className={cn(
                    'text-sm leading-relaxed',
                    pkg.popular ? 'text-sage-300' : 'text-sage-500'
                  )}
                >
                  {pkg.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={cn(
                    'text-4xl font-bold',
                    pkg.popular ? 'text-white' : 'text-sage-900'
                  )}
                >
                  {pkg.price}
                </span>
                <span
                  className={cn(
                    'text-sm ml-1',
                    pkg.popular ? 'text-sage-300' : 'text-sage-400'
                  )}
                >
                  {pkg.perSession}
                </span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={cn(
                        'flex-shrink-0 mt-0.5',
                        pkg.popular ? 'text-sage-300' : 'text-sage-500'
                      )}
                    />
                    <span
                      className={cn(
                        'text-sm',
                        pkg.popular ? 'text-sage-200' : 'text-sage-600'
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
                  'block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all',
                  pkg.popular
                    ? 'bg-white text-sage-800 hover:bg-sage-50'
                    : 'bg-sage-600 text-white hover:bg-sage-700'
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
