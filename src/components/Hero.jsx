import React from 'react';
import { Link } from 'react-router-dom';
import { HERO, BRAND, whatsappLink, mapsLink } from '../utils/constants';

const proofPoints = [
  { icon: 'ri-shield-star-line', text: 'ICAI Member Firm' },
  { icon: 'ri-user-star-line', text: 'Partner-led Engagements' },
  { icon: 'ri-global-line', text: 'Noida · Pan-India' },
];

const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-ink-900 text-white" aria-label="Introduction">
    {/* Atmosphere */}
    <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
    <div className="absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full bg-gold-500/15 blur-[140px]" aria-hidden="true" />
    <div className="absolute bottom-[-30%] left-[-15%] h-[520px] w-[520px] rounded-full bg-ink-500/30 blur-[140px]" aria-hidden="true" />

    <div className="container-x relative grid items-center gap-14 pb-28 pt-40 sm:pt-44 lg:grid-cols-12 lg:gap-10 lg:pb-36 lg:pt-48">
      {/* Copy */}
      <div className="lg:col-span-7">
        <p className="eyebrow eyebrow-light animate-fade-up">{HERO.eyebrow}</p>

        <h1 className="mt-7 font-serif text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.015em] xs:text-6xl sm:text-7xl lg:text-[5.4rem] animate-fade-up delay-1">
          {HERO.heading}
          <span className="block italic font-medium text-gold-300">{HERO.headingAccent}</span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg animate-fade-up delay-2">
          {HERO.description}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-fade-up delay-3">
          <a
            href={whatsappLink(`Hello, I would like to schedule a consultation with ${BRAND.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Book a Consultation
            <i className="ri-arrow-right-line text-base" aria-hidden="true" />
          </a>
          <Link to="/#services" className="btn-outline-light">
            Explore Practice Areas
          </Link>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8 animate-fade-up delay-4">
          {proofPoints.map((p) => (
            <li key={p.text} className="flex items-center gap-2.5 text-[13px] font-medium text-ink-100">
              <i className={`${p.icon} text-lg text-gold-400`} aria-hidden="true" />
              {p.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual */}
      <div className="relative lg:col-span-5 animate-fade-up delay-2">
        <div className="absolute -inset-3 translate-x-5 translate-y-5 rounded-[30px] border border-gold-500/40" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-[26px] shadow-lift">
          <img
            src={HERO.image}
            alt="Conference room at a modern chartered accountancy office"
            width="1200"
            height="1400"
            fetchpriority="high"
            className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" aria-hidden="true" />

          <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-ink-950/60 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-gold-100 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            {BRAND.hours}
          </span>

          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-colors hover:bg-white/15 sm:inset-x-6 sm:bottom-6"
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gold-500 text-ink-900">
              <i className="ri-map-pin-2-fill text-xl" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-gold-200">Visit the firm</span>
              <span className="block truncate text-sm font-semibold text-white">{BRAND.address.line1}, {BRAND.address.line2}, Noida</span>
            </span>
            <i className="ri-arrow-right-up-line ml-auto text-lg text-gold-200 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
