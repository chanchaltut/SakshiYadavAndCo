import React from 'react';
import { Link } from 'react-router-dom';
import { HERO, BRAND, whatsappLink } from '../utils/constants';
import { LogoMark } from './Logo';

const proofPoints = [
  { icon: 'ri-shield-star-line', text: 'ICAI Member Firm' },
  { icon: 'ri-user-star-line', text: 'Partner-led Engagements' },
  { icon: 'ri-lock-2-line', text: 'Strictly Confidential' },
  { icon: 'ri-global-line', text: 'Noida · Pan-India' },
];

// Illustrative checklist shown in the hero visual — the kind of work handled, not client data
const deskItems = [
  { icon: 'ri-file-list-3-line', title: 'GST Returns', sub: 'GSTR-1 · GSTR-3B · GSTR-9' },
  { icon: 'ri-file-chart-line', title: 'Income Tax Return', sub: 'Computation reviewed by a CA' },
  { icon: 'ri-government-line', title: 'ROC Annual Filing', sub: 'AOC-4 · MGT-7' },
  { icon: 'ri-percent-line', title: 'TDS Returns', sub: '24Q · 26Q · Form 16' },
];

const HeroVisual = () => (
  <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
    <div className="glass-dark relative rounded-[28px] p-6 animate-float-slow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark className="h-10 w-10" tile />
          <div>
            <p className="font-display text-[15px] font-bold text-white">Compliance Desk</p>
            <p className="text-[11px] text-white/55">Handled end-to-end</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[11px] font-semibold text-white/85">
          <span className="h-1.5 w-1.5 rounded-full bg-white" /> Active
        </span>
      </div>

      <ul className="mt-6 space-y-2.5">
        {deskItems.map((d) => (
          <li key={d.title} className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.04] px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
              <i className={`${d.icon} text-lg`} />
            </span>
            <span className="flex-1">
              <span className="block text-[13.5px] font-semibold text-white">{d.title}</span>
              <span className="block text-[11.5px] text-white/50">{d.sub}</span>
            </span>
            <i className="ri-checkbox-circle-fill text-xl text-white/70" />
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 p-4">
        <div className="flex items-center justify-between text-white">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/80">Due-date tracking</span>
          <i className="ri-calendar-check-line text-lg" />
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-4/5 rounded-full bg-white" />
        </div>
        <p className="mt-2 text-[11.5px] text-white/80">Reminders before every statutory deadline</p>
      </div>
    </div>

    {/* Floating chips */}
    <div className="absolute -right-4 -top-16 hidden items-center gap-2.5 rounded-2xl bg-white px-4 py-3 animate-float xl:flex">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-500"><i className="ri-shield-check-line text-lg" /></span>
      <span>
        <span className="block text-[12.5px] font-bold text-navy-800">CA Sign-off</span>
        <span className="block text-[11px] text-muted">On every filing</span>
      </span>
    </div>
    <div className="absolute -bottom-6 -right-8 hidden items-center gap-2.5 rounded-2xl bg-white px-4 py-3 animate-float [animation-delay:-3s] xl:flex">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy-700"><i className="ri-whatsapp-line text-lg" /></span>
      <span>
        <span className="block text-[12.5px] font-bold text-navy-800">Direct access</span>
        <span className="block text-[11px] text-muted">Talk to the partner</span>
      </span>
    </div>
  </div>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-night text-white" aria-label="Introduction">
    {/* Atmosphere */}
    <div className="absolute inset-0 opacity-[0.06] mix-blend-luminosity" aria-hidden="true">
      <img src={HERO.image} alt="" width="1200" height="800" fetchpriority="high" className="h-full w-full object-cover" />
    </div>
    <div className="absolute inset-0 grid-bg-dark" aria-hidden="true" />
    <div className="pointer-events-none absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-500/25 blur-3xl animate-blob" aria-hidden="true" />
    <div className="pointer-events-none absolute right-0 top-10 h-[22rem] w-[22rem] rounded-full bg-[#5B3BFF]/10 blur-3xl animate-blob [animation-delay:-8s]" aria-hidden="true" />

    <div className="container-x relative grid items-center gap-16 pb-36 pt-40 sm:pb-40 sm:pt-44 lg:grid-cols-12 lg:pb-44 lg:pt-48">
      <div className="text-center lg:col-span-7 lg:text-left">
        {/* The page's h1 names the firm (what people search for); the tagline below is display copy */}
        <h1 className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-2 text-[11px] font-semibold text-white/90 backdrop-blur xs:text-xs sm:px-4 sm:text-[13px] animate-fade-up">
          <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500"><i className="ri-award-line text-[11px]" aria-hidden="true" /></span>
          {BRAND.name} · {HERO.eyebrow}
        </h1>

        <p className="mx-auto mt-7 max-w-3xl font-display text-[2.6rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-white xs:text-5xl sm:text-6xl lg:mx-0 lg:text-[4.1rem] animate-fade-up delay-1">
          {HERO.heading}{' '}
          <span className="text-shine">{HERO.headingAccent}</span>
        </p>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0 animate-fade-up delay-2">
          {HERO.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start animate-fade-up delay-3">
          <a
            href={whatsappLink(`Hello, I would like to schedule a consultation with ${BRAND.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-shimmer w-full sm:w-auto !px-8 !py-4"
          >
            <i className="ri-whatsapp-line text-lg" aria-hidden="true" />
            Book a Consultation
          </a>
          <Link to="/#services" className="btn-outline-light w-full sm:w-auto !px-8 !py-4">
            Explore Services
            <i className="ri-arrow-right-line text-base" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start animate-fade-up delay-4">
          {proofPoints.map((p) => (
            <li key={p.text} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-[12px] font-semibold text-white/85 backdrop-blur sm:px-4 sm:text-[13px]">
              <i className={`${p.icon} text-base text-brand-300`} aria-hidden="true" />
              {p.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:col-span-5 lg:block animate-fade-up delay-2">
        <HeroVisual />
      </div>
    </div>

    {/* Soft fade into the page below */}
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#040817]/40" aria-hidden="true" />
  </section>
);

export default Hero;
