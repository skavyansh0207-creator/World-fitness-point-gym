import React, { useState } from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { MapPin, Phone, MessageSquare, Clock, Navigation, CheckCircle2, Send, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Free Trial & Joint Assessment');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setError('Please provide a valid 10-digit phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `Hello World Gym Fitness Point!
I want to schedule a visit:
• Name: ${name}
• Phone: ${phone}
• Focus: ${interest}

Please confirm timing for SCO 26 PUDA Complex.`
    );
    window.open(`https://wa.me/91${GYM_DETAILS.phone}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-10 py-8 sm:py-12">
      {/* Header */}
      <div className="max-w-2xl space-y-2">
        <div className="text-xs uppercase tracking-wider text-amber-500 font-bold">
          Get In Touch
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
          Contact &amp; Location
        </h1>
        <p className="text-neutral-400 text-sm">
          SCO 26 PUDA Complex, Near Alaska Chowk, Jalandhar. Free parking available.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Info Column */}
        <div className="lg:col-span-6 space-y-5">
          {/* Address Box */}
          <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="font-display text-lg font-bold uppercase text-white">
                  World Gym Fitness Point
                </div>
                <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {GYM_DETAILS.address}
                </div>
                <div className="text-xs text-amber-400 font-medium pt-1">
                  Landmark: {GYM_DETAILS.landmark}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex flex-wrap gap-2.5">
              <a
                href={GYM_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-md flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Maps Directions</span>
              </a>

              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="px-3.5 py-2 text-xs font-semibold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 rounded-md flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>{GYM_DETAILS.phone}</span>
              </a>

              <a
                href={GYM_DETAILS.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="px-3.5 py-2 text-xs font-semibold text-emerald-400 hover:bg-emerald-950/40 rounded-md flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Timings Box */}
          <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-white font-display text-base font-bold uppercase">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Operating Hours</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between py-1 border-b border-neutral-800/80">
                <span className="text-neutral-400">Monday – Saturday:</span>
                <span className="text-white font-mono font-medium">5:30 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-400">Sunday:</span>
                <span className="text-white font-mono font-medium">7:00 AM – 1:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Inquiry Form */}
        <div className="lg:col-span-6 p-6 sm:p-7 rounded-xl bg-neutral-900/60 border border-neutral-800">
          <div className="border-b border-neutral-800 pb-3 mb-5">
            <h2 className="font-display text-xl font-bold uppercase text-white">
              Send a Quick Inquiry
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              We respond promptly during gym hours.
            </p>
          </div>

          {submitted ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="font-display text-xl font-bold uppercase text-white">
                Message Received!
              </div>
              <p className="text-xs text-neutral-300">
                Thank you, {name}. Our trainer will call you at {phone}.
              </p>
              <div className="pt-3">
                <button
                  onClick={handleWhatsAppForward}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {error && (
                <div className="p-2.5 rounded bg-red-950/50 border border-red-800/60 text-xs text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-400 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-400 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-400 mb-1">
                  Service / Goal
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2 text-sm text-neutral-100 focus:outline-none focus:border-amber-500"
                >
                  <option value="Free Trial & Joint Assessment">Free Trial &amp; Joint Assessment</option>
                  <option value="Shoulder Pain & Joint Rehab">Shoulder Pain &amp; Joint Rehab</option>
                  <option value="Diet and Nutrition Counselling">Diet &amp; Nutrition Counselling</option>
                  <option value="Teen Nutrition & Youth Fitness">Teen Nutrition &amp; Youth Fitness</option>
                  <option value="HIIT & Aerobics">HIIT &amp; Aerobics Classes</option>
                  <option value="Kickboxing">Kickboxing Conditioning</option>
                  <option value="General Strength Gym Membership">General Strength Gym Membership</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-md flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
