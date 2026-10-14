import React from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface MobileQuickActionsProps {
  onOpenBooking: () => void;
}

export const MobileQuickActions: React.FC<MobileQuickActionsProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2">
      <div className="grid grid-cols-3 gap-2 h-10 max-h-[44px]">
        {/* Direct Call */}
        <a
          href={`tel:${GYM_DETAILS.phone}`}
          className="flex items-center justify-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-md text-xs font-semibold text-neutral-200 active:bg-neutral-800"
        >
          <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="truncate">Call</span>
        </a>

        {/* Direct WhatsApp */}
        <a
          href={GYM_DETAILS.whatsappUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-center gap-1.5 bg-emerald-950/60 border border-emerald-800/60 rounded-md text-xs font-semibold text-emerald-400 active:bg-emerald-900"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Free Pass Modal Trigger */}
        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 bg-amber-500 rounded-md text-xs font-bold uppercase tracking-wider text-neutral-950 active:bg-amber-400"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Free Pass</span>
        </button>
      </div>
    </aside>
  );
};
