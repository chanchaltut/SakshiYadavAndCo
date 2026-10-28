import React, { useEffect, useState } from 'react';
import { LogoMark } from './Logo';
import { BRAND } from '../utils/constants';

// Brief brand reveal on the first visit of a session
const LogoLoader = ({ onDone }) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), 1300);
    const t2 = setTimeout(onDone, 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[300] flex flex-col items-center justify-center bg-ink-900 transition-opacity duration-500 ${
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-label={`Loading ${BRAND.name}`}
    >
      <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
      <div className="relative flex flex-col items-center animate-fade-up">
        <LogoMark className="h-16 w-16" />
        <p className="mt-6 font-serif text-3xl font-semibold text-white">
          Sakshi Yadav <span className="text-gold-300">&amp;</span> Co.
        </p>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.34em] text-gold-300">Chartered Accountants</p>
        <span className="mt-8 block h-px w-40 overflow-hidden bg-white/10">
          <span className="block h-full w-full origin-left animate-[loaderBar_1.2s_cubic-bezier(.4,0,.2,1)_forwards] bg-gold-400" />
        </span>
      </div>
    </div>
  );
};

export default LogoLoader;
