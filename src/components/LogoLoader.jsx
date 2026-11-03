import React, { useEffect, useState } from 'react';
import { BRAND } from '../utils/constants';

// Large lock-up used by the loader — rendered twice: a faded grey base and the full-colour reveal on top
const LoaderLockup = ({ ghost = false }) => (
  <img
    src="/logo-full.webp"
    alt=""
    width="440"
    height="70"
    className={`block h-12 w-auto sm:h-[70px] ${ghost ? 'opacity-[0.12] grayscale' : ''}`}
  />
);

/**
 * Full-screen intro loader: the firm's logo reveals left-to-right (clip-path),
 * the tagline fades in and a slim red progress bar fills, then the overlay fades out.
 * Shown once per session (gated in App.jsx).
 */
const LogoLoader = ({ onDone }) => {
  const [phase, setPhase] = useState('start'); // 'start' | 'filling' | 'fading'

  useEffect(() => {
    // Next frame: start the transitions from their initial state
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setPhase('filling')));
    const fadeTimer = setTimeout(() => setPhase('fading'), 2200);
    const doneTimer = setTimeout(onDone, 2700);
    return () => { cancelAnimationFrame(raf); clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, [onDone]);

  const filled = phase !== 'start';

  return (
    <div
      className={`fixed inset-0 z-[300] flex flex-col items-center justify-center gap-6 bg-white px-6 transition-opacity duration-500 ${
        phase === 'fading' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-label={`Loading ${BRAND.name}`}
    >
      {/* Logo reveal */}
      <div className="relative inline-block">
        <LoaderLockup ghost />
        <div
          className="absolute inset-0"
          style={{
            clipPath: filled ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
            transition: 'clip-path 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.15s',
          }}
        >
          <LoaderLockup />
        </div>
      </div>

      {/* Tagline */}
      <p
        className="text-[13px] font-medium tracking-[0.04em] text-muted"
        style={{
          opacity: filled ? 1 : 0,
          transform: filled ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.5s ease 1.2s, transform 0.5s ease 1.2s',
        }}
      >
        Clarity in tax. Confidence in compliance.
      </p>

      {/* Progress bar */}
      <div className="absolute bottom-12 h-0.5 w-40 overflow-hidden rounded-full bg-brand-100" aria-hidden="true">
        <div
          className="h-full rounded-full bg-brand-500"
          style={{
            width: filled ? '100%' : '0%',
            transition: 'width 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
          }}
        />
      </div>
    </div>
  );
};

export default LogoLoader;
