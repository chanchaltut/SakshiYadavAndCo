import React from 'react';
import { HIGHLIGHTS } from '../utils/constants';

// Credential strip that overlaps the bottom edge of the dark hero / page header
const HighlightsBar = () => (
  <section aria-label="Firm at a glance" className="relative z-10 -mt-14 sm:-mt-16">
    <div className="container-x">
      <ul className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-paper shadow-lift lg:grid-cols-4">
        {HIGHLIGHTS.map((item, i) => (
          <li
            key={item.label}
            className={`flex items-start gap-4 p-5 sm:p-7 ${i % 2 === 1 ? 'border-l border-line' : ''} ${
              i > 1 ? 'border-t border-line lg:border-t-0' : ''
            } ${i === 2 ? 'lg:border-l' : ''}`}
          >
            <i className={`${item.icon} mt-1 hidden text-2xl text-gold-500 sm:block`} aria-hidden="true" />
            <div>
              <p className="font-serif text-2xl font-semibold leading-none text-ink-800 sm:text-[2rem]">{item.value}</p>
              <p className="mt-2 text-xs leading-snug text-muted sm:text-[13px]">{item.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HighlightsBar;
