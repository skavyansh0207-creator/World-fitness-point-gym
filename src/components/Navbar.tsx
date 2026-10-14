import React, { useState } from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { Phone, Menu, X, Dumbbell } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Rehab' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'pricing', label: 'Memberships' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6 h-18">
          
          {/* Zone 1: Brand title, single line */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <Dumbbell className="w-4 h-4" />
            </div>
            <span className="font-display font-black text-lg sm:text-xl uppercase tracking-wider text-white whitespace-nowrap">
              World Gym <span className="text-amber-500">Fitness Point</span>
            </span>
          </button>

          {/* Zone 2: 5 clean nav links */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-1 transition-colors whitespace-nowrap focus:outline-none ${
                  currentPage === link.id
                    ? 'text-amber-400 border-b-2 border-amber-500 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-mono tabular-nums">{GYM_DETAILS.phone}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors"
            >
              Book Trial
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-2.5 py-1.5 text-[11px] font-bold uppercase text-neutral-950 bg-amber-500 rounded"
            >
              Trial Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-400 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider rounded ${
                currentPage === link.id
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                  : 'text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-neutral-800">
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-neutral-200 bg-neutral-900 rounded border border-neutral-800"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              Call {GYM_DETAILS.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
