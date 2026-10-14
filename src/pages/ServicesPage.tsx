import React from 'react';
import { SERVICES_LIST, ServiceSummary } from '../data/gymData';
import {
  ShieldCheck,
  Apple,
  GraduationCap,
  Zap,
  Swords,
  HeartPulse,
  Dumbbell,
  Activity,
  Check,
  ArrowRight
} from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Apple':
        return <Apple className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Swords':
        return <Swords className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-10 py-8 sm:py-12">
      {/* Page Header */}
      <div className="max-w-2xl space-y-2">
        <div className="text-xs uppercase tracking-wider text-amber-500 font-bold">
          Training Disciplines
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
          Services &amp; Specializations
        </h1>
        <p className="text-neutral-400 text-sm">
          Certified fitness conditioning, group classes, and targeted joint rehabilitation in Jalandhar.
        </p>
      </div>

      {/* Grid of 8 concise service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES_LIST.map((srv: ServiceSummary) => (
          <div
            key={srv.id}
            className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 flex flex-col justify-between transition-colors space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                  {getIcon(srv.iconName)}
                </div>
                <span className="text-[11px] font-mono uppercase text-amber-400/90 font-medium">
                  {srv.category}
                </span>
              </div>

              <h2 className="font-display text-lg font-bold uppercase text-white leading-snug">
                {srv.title}
              </h2>

              <p className="text-xs text-neutral-300 leading-relaxed">
                {srv.shortDesc}
              </p>

              <div className="space-y-1.5 pt-1">
                {srv.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-400">
                    <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectService(srv.title)}
              className="w-full pt-3 border-t border-neutral-800 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center justify-between transition-colors"
            >
              <span>Book Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Shoulder & Joint Rehab Note */}
      <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-base sm:text-lg font-bold uppercase text-white">
            Have a nagging shoulder or knee issue?
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Our certified coaches conduct a free 10-minute mobility evaluation before recommending any exercises.
          </p>
        </div>
        <button
          onClick={() => onSelectService('Joint Mobility Assessment')}
          className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-md shrink-0 transition-colors"
        >
          Request Evaluation
        </button>
      </div>
    </div>
  );
};
