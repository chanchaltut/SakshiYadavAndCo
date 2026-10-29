import React from 'react';
import { HIGHLIGHTS } from '../utils/constants';

// Credential strip that overlaps the bottom edge of the hero / page header
const HighlightsBar = () => (
  <section aria-label="Firm at a glance" className="relative z-10 -mt-14 sm:-mt-16">
    <div className="container-x">
      <ul className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line border-t-[3px] border-t-brand-500 bg-white shadow-lift lg:grid-cols-4">
        {HIGHLIGHTS.map((item, i) => (
          <li
            key={item.label}
            className={`flex items-start gap-4 p-5 sm:p-7 ${i % 2 === 1 ? 'border-l border-line' : ''} ${
              i > 1 ? 'border-t border-line lg:border-t-0' : ''
            } ${i === 2 ? 'lg:border-l' : ''}`}
          >
            <span className="hidden h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500 sm:flex">
              <i className={`${item.icon} text-[22px]`} aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-2xl font-extrabold leading-none tracking-[-0.02em] text-brand-500 sm:text-[1.9rem]">{item.value}</p>
              <p className="mt-2 text-xs leading-snug text-muted sm:text-[13px]">{item.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HighlightsBar;
