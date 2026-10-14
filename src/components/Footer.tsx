import React from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { Dumbbell, Phone, MapPin, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs py-10 pb-20 sm:pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="flex items-center gap-2 text-white font-display font-black text-lg uppercase tracking-wider">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                <Dumbbell className="w-3.5 h-3.5" />
              </div>
              <span>World Gym <span className="text-amber-500">Fitness Point</span></span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Strength training, HIIT, kickboxing, and specialized therapeutic joint rehabilitation in Jalandhar.
            </p>
            <div className="text-[11px] text-amber-400/90 font-mono">
              Rated 4.7★ across 238 Google reviews
            </div>
          </div>

          {/* 5 Page Navigation Links */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Pages
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Services &amp; Rehab
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('schedule');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Batch Schedule
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('pricing');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Memberships
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Direct Contact
            </div>
            <div className="space-y-1.5 text-xs">
              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="flex items-center gap-1.5 text-neutral-300 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="font-mono">{GYM_DETAILS.phone}</span>
              </a>
              <a
                href={GYM_DETAILS.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 text-neutral-300 hover:text-white"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>WhatsApp Desk</span>
              </a>
              <div className="flex items-start gap-1.5 text-neutral-400 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{GYM_DETAILS.shortAddress}</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400">
          <div>© {new Date().getFullYear()} World Gym Fitness Point · Jalandhar</div>
          <div>SCO 26 PUDA Complex, Near Alaska Chowk</div>
        </div>

      </div>
    </footer>
  );
};
