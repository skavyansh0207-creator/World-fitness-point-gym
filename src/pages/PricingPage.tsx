import React from 'react';
import { PRICING_TIERS } from '../data/gymData';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PricingPageProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onSelectPlan }) => {
  return (
    <div className="space-y-10 py-8 sm:py-12">
      {/* Header */}
      <div className="max-w-2xl space-y-2">
        <div className="text-xs uppercase tracking-wider text-amber-500 font-bold">
          Transparent Rates
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
          Membership Plans
        </h1>
        <p className="text-neutral-400 text-sm">
          No admission charges or hidden maintenance fees. All passes include full gym floor and locker access.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`p-6 rounded-xl border flex flex-col justify-between transition-all space-y-5 ${
              tier.popular
                ? 'bg-neutral-900 border-amber-500 shadow-lg shadow-amber-500/10'
                : 'bg-neutral-900/60 border-neutral-800'
            }`}
          >
            <div>
              {tier.popular && (
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>Most Popular</span>
                </div>
              )}

              <h2 className="font-display text-xl font-bold uppercase text-white">
                {tier.name}
              </h2>
              <div className="text-xs text-neutral-400 mt-0.5">
                {tier.subtitle}
              </div>

              {/* Price */}
              <div className="mt-4 pb-4 border-b border-neutral-800">
                <span className="font-display text-3xl sm:text-4xl font-bold font-mono text-white tabular-nums">
                  {tier.price}
                </span>
              </div>

              {/* Perks list */}
              <div className="mt-4 space-y-2">
                {tier.perks.map((p, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectPlan(`${tier.name} (${tier.price})`)}
              className={`w-full py-2.5 text-xs font-bold uppercase tracking-wider rounded-md flex items-center justify-center gap-1.5 transition-colors ${
                tier.popular
                  ? 'bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
              }`}
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Clinical rehab personal coaching callout */}
      <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 text-center text-xs text-neutral-400">
        Need personalized 1-on-1 joint rehabilitation or teen nutrition coaching?{' '}
        <button
          onClick={() => onSelectPlan('Custom 1-on-1 Rehab / Nutrition Coaching')}
          className="text-amber-400 hover:underline font-semibold"
        >
          Inquire with our head coach
        </button>
      </div>
    </div>
  );
};
