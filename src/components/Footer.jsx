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
  <footer className="relative overflow-hidden border-t border-line bg-ivory text-muted" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">Footer</h2>
    <div className="h-1 w-full bg-brand-500" aria-hidden="true" />

    <div className="container-x relative">
      <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
        {/* Firm */}
        <div className="lg:col-span-4">
          <Link to="/" aria-label={`${BRAND.name} — Home`} className="inline-block">
            <Logo />
          </Link>
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-muted">
            A Chartered Accountancy firm in Sector 18, Noida, advising individuals and businesses on taxation, audit and corporate compliance across India.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-500">
            <i className="ri-shield-star-line" aria-hidden="true" /> Member Firm · ICAI
          </p>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-2.5">
              {socials.map(([key, url]) => (
                <li key={key}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={key} className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy-700 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-500 hover:text-white">
                    <i className={SOCIAL_ICONS[key]} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Services */}
        <nav className="lg:col-span-3" aria-label="Services">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-navy-800 font-display">Services</p>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-[14px] text-muted transition-colors hover:text-brand-500 link-underline">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Firm links */}
        <nav className="lg:col-span-2" aria-label="The firm">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-navy-800 font-display">The Firm</p>
          <ul className="mt-5 space-y-3">
            {firmLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-[14px] text-muted transition-colors hover:text-brand-500 link-underline">{l.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Office */}
        <div className="lg:col-span-3">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-navy-800 font-display">Office</p>
          <address className="mt-5 space-y-4 not-italic text-[14px]">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-muted hover:text-brand-500 transition-colors">
              <i className="ri-map-pin-2-line mt-0.5 text-brand-500" aria-hidden="true" />
              <span>
                {BRAND.address.line1},<br />
                {BRAND.address.line2}, {BRAND.address.city},<br />
                {BRAND.address.state} {BRAND.address.pincode}
              </span>
            </a>
            <a href={`tel:${BRAND.phoneE164}`} className="flex gap-3 text-muted hover:text-brand-500 transition-colors">
              <i className="ri-phone-line mt-0.5 text-brand-500" aria-hidden="true" /> {BRAND.phone}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-muted hover:text-brand-500 transition-colors">
              <i className="ri-whatsapp-line mt-0.5 text-brand-500" aria-hidden="true" /> WhatsApp {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`} className="flex gap-3 break-all text-muted hover:text-brand-500 transition-colors">
              <i className="ri-mail-line mt-0.5 text-brand-500" aria-hidden="true" /> {BRAND.email}
            </a>
            <p className="flex gap-3 text-muted">
              <i className="ri-time-line mt-0.5 text-brand-500" aria-hidden="true" /> {BRAND.hours}
            </p>
          </address>
        </div>
      </div>

      {/* ICAI note */}
      <div className="border-t border-line py-6">
        <p className="text-[12px] leading-relaxed text-navy-400">
          This website is for general information only and does not constitute professional advice, advertisement or solicitation, in accordance with the guidelines of the Institute of Chartered Accountants of India. Please consult the firm before acting on any information published here.
        </p>
      </div>

      <div className="flex flex-col gap-3 border-t border-line py-6 text-[12.5px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.</p>
        <p>
          Developed by{' '}
          <a href="https://codehyphen.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy-700 hover:text-brand-500 transition-colors">Code Hyphen</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
