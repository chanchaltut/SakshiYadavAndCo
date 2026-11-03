import React from 'react';
import { BRAND } from '../utils/constants';

// Brand artwork lives in /public (generated from SakshiYadavAndCoLogo.webp / SakshiYadavAndCoFavicon.webp):
//   sy-mark.webp          — SY monogram, transparent background
//   logo-full.webp        — full lock-up for light backgrounds
//   logo-full-light.webp  — full lock-up with white wordmark for dark backgrounds
const LOCKUP_RATIO = 3172 / 505;

/**
 * SY monogram. `tile` places it on a white rounded square (same treatment as the favicon),
 * which keeps the red mark legible on dark or busy backgrounds.
 */
export const LogoMark = ({ className = 'h-10 w-10', tile = false, title }) => {
  const img = (
    <img
      src="/sy-mark.webp"
      alt={title || ''}
      aria-hidden={title ? undefined : true}
      width="256"
      height="256"
      decoding="async"
      className={tile ? 'h-[78%] w-[78%] object-contain' : `${className} object-contain`}
    />
  );
  if (!tile) return img;
  return (
    <span className={`${className} inline-flex flex-shrink-0 items-center justify-center rounded-[22%] border border-line bg-white`}>
      {img}
    </span>
  );
};

/**
 * Full lock-up.
 * @param {'dark'|'light'} tone  dark = for light backgrounds, light = white wordmark for dark backgrounds
 */
const Logo = ({ tone = 'dark', compact = false, className = '' }) => {
  const height = compact ? 36 : 48;
  return (
    <img
      src={tone === 'light' ? '/logo-full-light.webp' : '/logo-full.webp'}
      alt={`${BRAND.name} — Chartered Accountants`}
      width={Math.round(height * LOCKUP_RATIO)}
      height={height}
      decoding="async"
      className={`block w-auto ${compact ? 'h-9' : 'h-10 sm:h-12'} ${className}`}
    />
  );
};

export default Logo;
