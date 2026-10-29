import React from 'react';
import { Link } from 'react-router-dom';
import { HERO, BRAND, whatsappLink } from '../utils/constants';

const proofPoints = [
  { icon: 'ri-shield-star-line', text: 'ICAI Member Firm' },
  { icon: 'ri-user-star-line', text: 'Partner-led Engagements' },
  { icon: 'ri-lock-2-line', text: 'Strictly Confidential' },
  { icon: 'ri-global-line', text: 'Noida · Pan-India' },
];

const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-ivory dot-bg" aria-label="Introduction">
    {/* Atmosphere */}
    <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
      <img src={HERO.image} alt="" width="1200" height="800" fetchpriority="high" className="h-full w-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-ivory via-ivory/80 to-transparent" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent" aria-hidden="true" />
    <div className="absolute -left-40 top-24 h-96 w-96 rounded-full border-[64px] border-brand-500/[0.04]" aria-hidden="true" />
    <div className="absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full border-[72px] border-brand-500/[0.05]" aria-hidden="true" />

    <div className="container-x relative pb-36 pt-40 text-center sm:pb-40 sm:pt-44 lg:pb-44 lg:pt-52">
      <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-500/10 px-4 py-2 text-xs font-semibold text-brand-500 sm:text-[13px] animate-fade-up">
        <i className="ri-award-line text-base" aria-hidden="true" />
        {HERO.eyebrow}
      </p>

      <h1 className="mx-auto mt-7 max-w-5xl font-display text-[2.6rem] font-extrabold leading-[1.1] tracking-[-0.025em] text-navy-800 xs:text-5xl sm:text-6xl lg:text-[4.25rem] animate-fade-up delay-1">
        {HERO.heading}{' '}
        <span className="text-brand-500">{HERO.headingAccent}</span>
      </h1>

      <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg animate-fade-up delay-2">
        {HERO.description}
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 animate-fade-up delay-3">
        <a
          href={whatsappLink(`Hello, I would like to schedule a consultation with ${BRAND.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-shimmer w-full sm:w-auto !px-8 !py-4"
        >
          <i className="ri-whatsapp-line text-lg" aria-hidden="true" />
          Book a Consultation
        </a>
        <Link to="/#services" className="btn-outline w-full sm:w-auto !px-8 !py-4">
          Explore Practice Areas
          <i className="ri-arrow-right-line text-base" aria-hidden="true" />
        </Link>
      </div>

      <ul className="mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 animate-fade-up delay-4">
        {proofPoints.map((p) => (
          <li key={p.text} className="flex items-center gap-2 rounded-full border border-brand-100 bg-white/90 px-3.5 py-2 text-[12px] font-semibold text-navy-800 shadow-soft sm:px-4 sm:text-[13px]">
            <i className={`${p.icon} text-base text-brand-500`} aria-hidden="true" />
            {p.text}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
