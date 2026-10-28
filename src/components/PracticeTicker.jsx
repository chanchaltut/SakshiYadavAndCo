import React from 'react';
import { MARQUEE_ITEMS } from '../utils/constants';

// Slow, decorative band of practice areas (content duplicated for a seamless loop)
const PracticeTicker = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-y border-line bg-paper py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 font-serif text-2xl italic text-ink-700 sm:text-[1.7rem]">
            {item}
            <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default PracticeTicker;
