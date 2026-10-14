import React, { useState } from 'react';
import { BATCH_SCHEDULE, GYM_DETAILS } from '../data/gymData';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

interface SchedulePageProps {
  onBookSession: (session: string) => void;
}

export const SchedulePage: React.FC<SchedulePageProps> = ({ onBookSession }) => {
  const [filter, setFilter] = useState<'All' | 'Morning' | 'Evening'>('All');

  const filteredBatches = BATCH_SCHEDULE.filter((b) => {
    if (filter === 'All') return true;
    if (filter === 'Morning') return b.tag.includes('Morning') || b.tag.includes('Continuous');
    if (filter === 'Evening') return b.tag.includes('Evening') || b.tag.includes('Continuous');
    return true;
  });

  return (
    <div className="space-y-10 py-8 sm:py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="max-w-xl space-y-2">
          <div className="text-xs uppercase tracking-wider text-amber-500 font-bold flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Daily Timetable</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Class &amp; Batch Schedule
          </h1>
          <p className="text-neutral-400 text-sm">
            {GYM_DETAILS.timings.weekdays} · {GYM_DETAILS.timings.sunday}
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg self-start sm:self-auto">
          {(['All', 'Morning', 'Evening'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all ${
                filter === tab ? 'bg-amber-500 text-neutral-950' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Table */}
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden">
        <div className="divide-y divide-neutral-800/80">
          {filteredBatches.map((batch, idx) => (
            <div
              key={idx}
              className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-900/90 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <div className="font-display text-base sm:text-lg font-bold uppercase text-white">
                    {batch.name}
                  </div>
                  <div className="text-xs font-mono text-neutral-400">
                    {batch.time} · <span className="text-amber-400/90">{batch.tag}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onBookSession(`${batch.name} (${batch.time})`)}
                className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-md self-start sm:self-auto flex items-center gap-1.5 transition-colors"
              >
                <span>Reserve</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Footnote */}
      <div className="text-xs text-neutral-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span>Open Gym floor is accessible during all operating hours (5:30 AM – 10:00 PM).</span>
        <span className="text-amber-400">Lockers and shower rooms provided.</span>
      </div>
    </div>
  );
};
