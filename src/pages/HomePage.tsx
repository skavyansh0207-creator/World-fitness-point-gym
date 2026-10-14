import React from 'react';
import { GYM_DETAILS, TOP_REVIEWS } from '../data/gymData';
import { Star, Phone, MessageSquare, ArrowRight, ShieldCheck, Flame, Zap, Apple } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-neutral-900/70 border border-neutral-800 p-6 sm:p-10 lg:p-12">
        <div className="max-w-3xl space-y-5">
          {/* Unboxed Metadata Line */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-400">
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-mono tabular-nums">{GYM_DETAILS.rating} / 5.0</span>
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="font-mono tabular-nums">{GYM_DETAILS.reviewsCount} Google Reviews</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Near Alaska Chowk, Jalandhar</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none [text-wrap:balance]">
            World Gym <span className="text-amber-500">Fitness Point</span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
            Jalandhar's top-rated fitness center combining heavy strength conditioning, 
            HIIT &amp; Kickboxing with certified therapeutic rehabilitation for shoulder &amp; joint pain.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking('Free Trial Session')}
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-md flex items-center gap-2 transition-all shadow-md shadow-amber-500/20"
            >
              <span>Book Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="px-4 py-3 text-xs font-semibold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 rounded-md flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Call {GYM_DETAILS.phone}</span>
            </a>

            <a
              href={GYM_DETAILS.whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="px-4 py-3 text-xs font-medium text-emerald-400 hover:bg-emerald-950/40 rounded-md flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-10 pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <div className="font-display text-2xl font-bold font-mono text-white tabular-nums">4.7★</div>
            <div className="text-neutral-400 mt-0.5">238+ Google Reviews</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold font-mono text-white tabular-nums">5:30 AM</div>
            <div className="text-neutral-400 mt-0.5">Early Morning Batches</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold font-mono text-white tabular-nums">SCO 26</div>
            <div className="text-neutral-400 mt-0.5">PUDA Complex, Ladowali Rd</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold font-mono text-white tabular-nums">100%</div>
            <div className="text-neutral-400 mt-0.5">Certified Coaching</div>
          </div>
        </div>
      </section>

      {/* Core Specialties Preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-500 font-bold">What We Offer</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
              Popular Training Programs
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            <span>All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => onNavigate('services')}
            className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/50 cursor-pointer transition-all space-y-2.5"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold uppercase text-white">Shoulder &amp; Joint Rehab</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Targeted exercises to relieve rotator cuff strain, impingement, and hip stiffness.
            </p>
          </div>

          <div
            onClick={() => onNavigate('services')}
            className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/50 cursor-pointer transition-all space-y-2.5"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold uppercase text-white">HIIT &amp; Aerobics</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              High-energy 45-min interval classes built for fast calorie burn and stamina.
            </p>
          </div>

          <div
            onClick={() => onNavigate('services')}
            className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/50 cursor-pointer transition-all space-y-2.5"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold uppercase text-white">Kickboxing Drills</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Striking, heavy bag drills, core work, and self-defense for all fitness levels.
            </p>
          </div>

          <div
            onClick={() => onNavigate('services')}
            className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/50 cursor-pointer transition-all space-y-2.5"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Apple className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold uppercase text-white">Diet &amp; Teen Nutrition</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Healthy meal plans for Punjabi homes plus safe adolescent athletic nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Google Reviews Snippet */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-500 font-bold">Google Reviews</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
              Member Experiences (4.7★)
            </h2>
          </div>
          <a
            href={GYM_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs text-neutral-400 hover:text-white underline"
          >
            View all 238 on Google
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TOP_REVIEWS.map((rev, i) => (
            <div key={i} className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-3">
              <div className="flex text-amber-400">
                {[...Array(rev.stars)].map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed italic">
                "{rev.text}"
              </p>
              <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px]">
                <span className="font-bold text-white">{rev.name}</span>
                <span className="text-amber-400 font-medium">{rev.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Location & Direct Call Banner */}
      <section className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-display text-lg font-bold uppercase text-white">
            Visit World Gym Today
          </div>
          <div className="text-xs text-neutral-400 mt-0.5">
            SCO 26, PUDA Complex, Ladowali Rd, Near Alaska Chowk, Jalandhar
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${GYM_DETAILS.phone}`}
            className="px-4 py-2 text-xs font-semibold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 rounded-md flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>{GYM_DETAILS.phone}</span>
          </a>
          <button
            onClick={() => onOpenBooking('Free Trial')}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-md"
          >
            Claim Free Pass
          </button>
        </div>
      </section>
    </div>
  );
};
