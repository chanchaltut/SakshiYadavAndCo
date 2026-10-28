import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { BRAND, NAV_ITEMS, whatsappLink, mapsLink } from '../utils/constants';

// Fixed header: slim utility bar + main navigation.
// Transparent over the dark page heroes, solid ivory once scrolled.
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/' && location.hash !== '#services';
    if (href === '/#services') return location.pathname === '/' && location.hash === '#services';
    return location.pathname.startsWith(href);
  };

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-80">
      {/* ─── Utility bar ─── */}
      <div
        className={`bg-ink-950 text-ink-200 overflow-hidden transition-[max-height] duration-500 ${
          scrolled ? 'max-h-0' : 'max-h-9'
        }`}
      >
        <div className="container-x flex h-9 items-center justify-between gap-4 text-[11.5px] tracking-wide">
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 hover:text-gold-200 transition-colors">
            <i className="ri-map-pin-2-line text-gold-400" aria-hidden="true" />
            {BRAND.addressText}
          </a>
          <span className="flex md:hidden items-center gap-2">
            <i className="ri-shield-star-line text-gold-400" aria-hidden="true" />
            ICAI Member Firm · Noida
          </span>
          <div className="flex items-center gap-5">
            <span className="hidden lg:flex items-center gap-2">
              <i className="ri-time-line text-gold-400" aria-hidden="true" />
              {BRAND.hours}
            </span>
            <a href={`mailto:${BRAND.email}`} className="hidden sm:flex items-center gap-2 hover:text-gold-200 transition-colors">
              <i className="ri-mail-line text-gold-400" aria-hidden="true" />
              {BRAND.email}
            </a>
            <a href={`tel:${BRAND.phoneE164}`} className="flex items-center gap-2 font-semibold text-white hover:text-gold-200 transition-colors">
              <i className="ri-phone-line text-gold-400" aria-hidden="true" />
              {BRAND.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ─── Main nav ─── */}
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-500 ${
          solid
            ? 'bg-paper/95 backdrop-blur-md shadow-[0_1px_0_rgba(13,31,58,0.06),0_12px_32px_-24px_rgba(13,31,58,0.35)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <Link to="/" aria-label={`${BRAND.name} — Home`} className="relative z-10">
            <Logo tone={solid ? 'dark' : 'light'} />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`relative py-2 text-[13.5px] font-semibold tracking-wide transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold-500 after:transition-transform after:duration-300 ${
                      isActive(item.href) ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                    } ${solid ? 'text-ink-800 hover:text-gold-700' : 'text-white/90 hover:text-white'}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(`Hello, I would like to schedule a consultation with ${BRAND.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${solid ? 'btn-primary' : 'btn-gold'} !py-2.5 !min-h-[44px]`}
            >
              Book a Consultation
            </a>
          </div>

          <button
            type="button"
            className={`lg:hidden relative z-10 flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
              solid ? 'border-line text-ink-800' : 'border-white/25 text-white'
            }`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <i className={`${open ? 'ri-close-line' : 'ri-menu-4-line'} text-xl`} aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* ─── Mobile menu ─── */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 bottom-0 bg-paper transition-all duration-500 ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3'
        }`}
        style={{ top: scrolled ? 72 : 108 }}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-6">
          <ul className="divide-y divide-line border-y border-line">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`flex items-center justify-between py-4 font-serif text-[28px] font-semibold ${
                    isActive(item.href) ? 'text-gold-700' : 'text-ink-800'
                  }`}
                >
                  {item.name}
                  <i className="ri-arrow-right-up-line text-lg text-gold-500" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              <i className="ri-whatsapp-line text-lg" aria-hidden="true" /> WhatsApp the Firm
            </a>
            <a href={`tel:${BRAND.phoneE164}`} className="btn-outline w-full">
              <i className="ri-phone-line text-lg" aria-hidden="true" /> Call {BRAND.phone}
            </a>
          </div>

          <div className="mt-auto pt-10 text-sm text-muted space-y-1.5">
            <p className="font-semibold text-ink-800">{BRAND.legalName}</p>
            <p>{BRAND.addressText}</p>
            <p>{BRAND.hours}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
