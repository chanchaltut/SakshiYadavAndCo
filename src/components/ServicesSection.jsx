import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PARENT_SERVICES, BRAND, SITE_FLAGS, whatsappLink } from '../utils/constants';
import SectionHeading from './SectionHeading';
import useReveal from '../hooks/useReveal';

// One Remix icon per practice area
const CATEGORY_ICONS = {
  'gst':           'ri-file-list-3-line',
  'itr':           'ri-file-chart-line',
  'tds':           'ri-percent-line',
  'legal':         'ri-scales-3-line',
  'pf-esic':       'ri-shield-user-line',
  'trademark':     'ri-copyright-line',
  'incorporation': 'ri-building-4-line',
  'mca':           'ri-government-line',
  'import-export': 'ri-ship-line',
  'accounting':    'ri-book-2-line',
  'msme':          'ri-store-3-line',
  'fssai':         'ri-restaurant-line',
};

const enquiry = (name) => `Hello, I would like to enquire about "${name}" with ${BRAND.name}.`;

// Flat index of every practice area + sub-service for search
const SEARCH_INDEX = PARENT_SERVICES.flatMap((parent) => [
  { name: parent.title, parent, isParent: true },
  ...parent.subcategories.map((sub) => ({ name: sub.name, price: sub.price, parent })),
]);

const ServiceCard = ({ service, index }) => {
  const [open, setOpen] = useState(false);
  const panelId = `scope-${service.id}`;

  return (
    <article
      className={`group flex flex-col rounded-2xl border bg-paper p-6 transition-all duration-500 sm:p-7 ${
        open ? 'border-gold-400 shadow-lift' : 'border-line shadow-soft hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift'
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-200 bg-gold-50 text-gold-700 transition-colors duration-500 group-hover:bg-ink-800 group-hover:text-gold-300">
          <i className={`${CATEGORY_ICONS[service.id] || 'ri-briefcase-4-line'} text-[22px]`} aria-hidden="true" />
        </span>
        <span className="font-serif text-lg italic text-ink-300">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <h3 className="mt-6 font-serif text-[1.65rem] font-semibold leading-tight text-ink-800">{service.title}</h3>
      <p className="mt-3 text-[14px] leading-relaxed text-muted">{service.shortDesc}</p>
      {SITE_FLAGS.showPricing && (
        <p className="mt-3 text-xs font-bold text-gold-700">Starting from {service.startingPrice}</p>
      )}

      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between border-t border-line pt-5">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink-800 hover:text-gold-700 transition-colors"
          >
            {open ? 'Hide scope' : `View scope · ${service.subcategories.length}`}
            <i className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          {service.page ? (
            <Link to={service.page} className="inline-flex items-center gap-1 text-[13px] font-semibold text-gold-700 hover:text-ink-800 transition-colors" aria-label={`${service.title} — details`}>
              Details <i className="ri-arrow-right-up-line" aria-hidden="true" />
            </Link>
          ) : (
            <a href={whatsappLink(service.whatsappMsg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[13px] font-semibold text-gold-700 hover:text-ink-800 transition-colors">
              Enquire <i className="ri-arrow-right-up-line" aria-hidden="true" />
            </a>
          )}
        </div>

        <div id={panelId} className="accordion-panel" data-open={open}>
          <div>
            <ul className="thin-scroll mt-4 max-h-72 space-y-1 overflow-y-auto pr-1">
              {service.subcategories.map((sub) => (
                <li key={sub.name}>
                  <a
                    href={whatsappLink(enquiry(sub.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] text-ink-700 transition-colors hover:bg-ivory hover:text-ink-900"
                  >
                    <span className="h-1 w-1 flex-shrink-0 rotate-45 bg-gold-500" aria-hidden="true" />
                    <span className="flex-1 leading-snug">{sub.name}</span>
                    {SITE_FLAGS.showPricing && <span className="text-[11px] font-semibold text-gold-700 whitespace-nowrap">{sub.price.replace('Starting from ', '')}</span>}
                    <i className="ri-whatsapp-line text-base text-ink-300" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

const ServicesSection = () => {
  const [query, setQuery] = useState('');
  const ref = useReveal();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_INDEX.filter((item) =>
      item.name.toLowerCase().includes(q) || item.parent.title.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [query]);

  return (
    <section id="services" ref={ref} className="section bg-paper" aria-labelledby="services-heading">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-heading"
            eyebrow="Practice Areas"
            title="Comprehensive advisory,"
            accent="one accountable firm."
            lede="Twelve practice areas and more than a hundred individual services — from a single return to a company’s complete statutory calendar."
            className="reveal"
          />

          {/* Search */}
          <div className="relative w-full lg:max-w-sm reveal">
            <label htmlFor="service-search" className="sr-only">Search services</label>
            <i className="ri-search-line pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-lg text-muted" aria-hidden="true" />
            <input
              id="service-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search — e.g. GSTR-9, 15CB, LLP"
              autoComplete="off"
              className="w-full rounded-full border border-line bg-ivory py-4 pl-12 pr-5 text-sm text-ink-800 outline-none transition placeholder:text-muted focus:border-gold-500 focus:bg-paper focus:ring-4 focus:ring-gold-100"
            />
            {query.trim() && (
              <div className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-line bg-paper shadow-lift">
                {results.length ? (
                  <ul className="thin-scroll max-h-80 overflow-y-auto p-2">
                    {results.map((r) => (
                      <li key={`${r.parent.id}-${r.name}`}>
                        <a
                          href={whatsappLink(enquiry(r.name))}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 hover:bg-ivory"
                        >
                          <span>
                            <span className="block text-sm font-semibold text-ink-800">{r.name}</span>
                            {!r.isParent && <span className="block text-xs text-muted">{r.parent.title}</span>}
                          </span>
                          <i className="ri-whatsapp-line text-lg text-gold-600" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-sm text-muted">No match for “{query}”.</p>
                    <a href={whatsappLink(`Hello, I am looking for help with "${query}". Can ${BRAND.name} assist?`)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold-700">
                      Ask the firm directly <i className="ri-arrow-right-line" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-14 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PARENT_SERVICES.map((service, i) => (
            <div key={service.id} className="reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted reveal">
          Fees are quoted after we understand the scope of each assignment. Government fees, where applicable, are charged at actuals.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
