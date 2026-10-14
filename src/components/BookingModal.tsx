import React, { useState, useEffect } from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { X, Send, CheckCircle2, MessageSquare, Phone, AlertCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialService = 'General Free Trial Session',
  onClose
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService);
  const [timePreference, setTimePreference] = useState('Morning (6:00 AM – 9:00 AM)');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
    if (isOpen) {
      setSubmitted(false);
      setError('');
    }
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `Hello World Gym Fitness Point, I would like to book:
• Service/Plan: ${service}
• Name: ${name}
• Phone: ${phone}
• Preferred Time: ${timePreference}

Please let me know when I can visit the PUDA Complex gym!`
    );
    window.open(`https://wa.me/91${GYM_DETAILS.phone}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-neutral-950 border border-neutral-800 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                Booking Confirmed!
              </h3>
              <p className="text-sm text-neutral-300">
                Thanks, <span className="text-amber-400 font-semibold">{name}</span>. We look forward to seeing you at World Gym Fitness Point (SCO 26 PUDA Complex, Near Alaska Chowk).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 space-y-2 mt-4">
              <div className="font-semibold text-neutral-200">Instant WhatsApp Confirmation</div>
              <p className="text-neutral-400">
                Forward this reservation directly to our trainer’s WhatsApp for fastest response:
              </p>
              <button
                onClick={handleWhatsAppForward}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-semibold text-neutral-400 hover:text-white underline pt-3"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="border-b border-neutral-800 pb-4 mb-5">
              <div className="text-xs font-mono uppercase text-amber-500 font-bold mb-1">
                World Gym Fitness Point · Jalandhar
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                Claim Free Session / Consultation
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Zero obligation · Includes body composition and mobility assessment
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-950/40 border border-red-800/60 flex items-center gap-2.5 text-xs text-red-300">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold text-neutral-400 mb-1.5">
                  Selected Session / Focus
                </label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2 text-sm text-amber-400 font-medium focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-400 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jasleen Kaur"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-400 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 8699XXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-400 mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  value={timePreference}
                  onChange={(e) => setTimePreference(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-amber-500"
                >
                  <option value="Early Morning (5:30 AM – 7:30 AM)">Early Morning (5:30 AM – 7:30 AM)</option>
                  <option value="Morning (7:30 AM – 10:00 AM)">Morning (7:30 AM – 10:00 AM)</option>
                  <option value="Afternoon (11:00 AM – 3:00 PM)">Afternoon (11:00 AM – 3:00 PM)</option>
                  <option value="Evening (5:00 PM – 7:30 PM)">Evening (5:00 PM – 7:30 PM)</option>
                  <option value="Late Evening (7:30 PM – 10:00 PM)">Late Evening (7:30 PM – 10:00 PM)</option>
                </select>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 active:scale-98 transition-all rounded-md flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Free Trial Pass</span>
                </button>

                <div className="flex items-center justify-center gap-3 pt-2 text-xs text-neutral-400">
                  <span>Questions?</span>
                  <a
                    href={`tel:${GYM_DETAILS.phone}`}
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    Call {GYM_DETAILS.phone}
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
