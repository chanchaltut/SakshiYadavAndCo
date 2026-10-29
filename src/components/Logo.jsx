import React from 'react';

// Monogram mark — the same artwork is used for favicons and the social banner (scripts/brand-assets/*.html)
export const LogoMark = ({ className = 'h-10 w-10', title }) => (
  <svg viewBox="0 0 64 64" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
    <rect width="64" height="64" rx="14" fill="#C01530" />
    <rect x="4.5" y="4.5" width="55" height="55" rx="10.5" fill="none" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1.2" />
    <text
      x="32"
      y="41.5"
      textAnchor="middle"
      fontFamily="'Plus Jakarta Sans', Inter, Arial, sans-serif"
      fontWeight="800"
      fontSize="25"
      letterSpacing="-0.5"
      fill="#FFFFFF"
    >
      SY
    </text>
    <path d="M24 49h16" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

/**
 * @param {'dark'|'light'} tone  dark = navy text for light backgrounds, light = white text for red/dark backgrounds
 */
const Logo = ({ tone = 'dark', compact = false, className = '' }) => {
  const light = tone === 'light';
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={compact ? 'h-9 w-9' : 'h-10 w-10 sm:h-11 sm:w-11'} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-[-0.025em] whitespace-nowrap transition-colors duration-300 ${
            compact ? 'text-[17px]' : 'text-[18px] sm:text-[20px]'
          } ${light ? 'text-white' : 'text-navy-800'}`}
        >
          Sakshi Yadav <span className={light ? 'text-white/80' : 'text-brand-500'}>&amp;</span> Co.
        </span>
        <span
          className={`mt-1.5 text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-[0.28em] whitespace-nowrap transition-colors duration-300 ${
            light ? 'text-white/80' : 'text-brand-500'
          }`}
        >
          Chartered Accountants
        </span>
      </span>
    </span>
  );
};

export default Logo;
