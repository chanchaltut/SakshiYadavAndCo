import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { BRAND, SERVICES, mapsLink, whatsappLink } from '../utils/constants';

const firmLinks = [
  { name: 'About the Firm',     href: '/about' },
  { name: 'Practice Areas',     href: '/#services' },
  { name: 'Insights',           href: '/blog' },
  { name: 'Contact',            href: '/contact' },
  { name: 'Privacy Policy',     href: '/privacy-policy' },
  { name: 'Terms & Disclaimer', href: '/terms-conditions' },
];

const SOCIAL_ICONS = {
  linkedin:  'ri-linkedin-fill',
  instagram: 'ri-instagram-line',
  facebook:  'ri-facebook-fill',
  x:         'ri-twitter-x-line',
};

const socials = Object.entries(BRAND.social).filter(([, url]) => url);

const Footer = () => (
  <footer className="relative overflow-hidden bg-ink-900 text-ink-200" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">Footer</h2>
    <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />

    <div className="container-x relative">
      <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
        {/* Firm */}
        <div className="lg:col-span-4">
          <Link to="/" aria-label={`${BRAND.name} — Home`} className="inline-block">
            <Logo tone="light" />
          </Link>
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-ink-300">
            A Chartered Accountancy firm in Sector 18, Noida, advising individuals and businesses on taxation, audit and corporate compliance across India.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-300">
            <i className="ri-shield-star-line" aria-hidden="true" /> Member Firm · ICAI
          </p>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-2.5">
              {socials.map(([key, url]) => (
                <li key={key}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={key} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-200 transition-colors hover:border-gold-400 hover:text-gold-300">
                    <i className={SOCIAL_ICONS[key]} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Services */}
        <nav className="lg:col-span-3" aria-label="Services">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">Services</p>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-[14px] text-ink-200 transition-colors hover:text-white link-underline">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Firm links */}
        <nav className="lg:col-span-2" aria-label="The firm">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">The Firm</p>
          <ul className="mt-5 space-y-3">
            {firmLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-[14px] text-ink-200 transition-colors hover:text-white link-underline">{l.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Office */}
        <div className="lg:col-span-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">Office</p>
          <address className="mt-5 space-y-4 not-italic text-[14px]">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-ink-200 hover:text-white transition-colors">
              <i className="ri-map-pin-2-line mt-0.5 text-gold-400" aria-hidden="true" />
              <span>
                {BRAND.address.line1},<br />
                {BRAND.address.line2}, {BRAND.address.city},<br />
                {BRAND.address.state} {BRAND.address.pincode}
              </span>
            </a>
            <a href={`tel:${BRAND.phoneE164}`} className="flex gap-3 text-ink-200 hover:text-white transition-colors">
              <i className="ri-phone-line mt-0.5 text-gold-400" aria-hidden="true" /> {BRAND.phone}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-ink-200 hover:text-white transition-colors">
              <i className="ri-whatsapp-line mt-0.5 text-gold-400" aria-hidden="true" /> WhatsApp {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`} className="flex gap-3 break-all text-ink-200 hover:text-white transition-colors">
              <i className="ri-mail-line mt-0.5 text-gold-400" aria-hidden="true" /> {BRAND.email}
            </a>
            <p className="flex gap-3 text-ink-300">
              <i className="ri-time-line mt-0.5 text-gold-400" aria-hidden="true" /> {BRAND.hours}
            </p>
          </address>
        </div>
      </div>

      {/* ICAI note */}
      <div className="border-t border-white/10 py-6">
        <p className="text-[12px] leading-relaxed text-ink-400">
          This website is for general information only and does not constitute professional advice, advertisement or solicitation, in accordance with the guidelines of the Institute of Chartered Accountants of India. Please consult the firm before acting on any information published here.
        </p>
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[12.5px] text-ink-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.</p>
        <p>
          Developed by{' '}
          <a href="https://codehyphen.in" target="_blank" rel="noopener noreferrer" className="text-ink-300 hover:text-gold-300 transition-colors">Code Hyphen</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
