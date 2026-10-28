import React from 'react';

// Monogram mark — the same artwork is used for favicons and the social banner (scripts/brand-assets.html)
export const LogoMark = ({ className = 'h-10 w-10', title }) => (
  <svg viewBox="0 0 64 64" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
    <rect width="64" height="64" rx="14" fill="#0D1F3A" />
    <rect x="4.5" y="4.5" width="55" height="55" rx="10.5" fill="none" stroke="#B08D57" strokeOpacity="0.75" strokeWidth="1.2" />
    <text
      x="32"
      y="42.5"
      textAnchor="middle"
      fontFamily="'Cormorant Garamond', Georgia, serif"
      fontWeight="600"
      fontSize="29"
      letterSpacing="0.5"
      fill="#D9BC85"
    >
      SY
    </text>
    <path d="M24 49h16" stroke="#B08D57" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/**
 * @param {'dark'|'light'} tone  dark = ink text for light backgrounds, light = white text for dark backgrounds
 */
const Logo = ({ tone = 'dark', compact = false, className = '' }) => {
  const light = tone === 'light';
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={compact ? 'h-9 w-9' : 'h-10 w-10 sm:h-11 sm:w-11'} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif font-semibold tracking-[-0.01em] whitespace-nowrap transition-colors duration-300 ${
            compact ? 'text-[19px]' : 'text-[20px] sm:text-[23px]'
          } ${light ? 'text-white' : 'text-ink-800'}`}
        >
          Sakshi Yadav <span className={light ? 'text-gold-300' : 'text-gold-600'}>&amp;</span> Co.
        </span>
        <span
          className={`mt-1 text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-[0.3em] whitespace-nowrap transition-colors duration-300 ${
            light ? 'text-gold-300' : 'text-gold-700'
          }`}
        >
          Chartered Accountants
        </span>
      </span>
    </span>
  );
};

export default Logo;
