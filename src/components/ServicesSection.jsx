import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { PARENT_SERVICES, SITE_FLAGS, whatsappLink, serviceEnquiry } from '../utils/constants';
import SectionHeading from './SectionHeading';
import useReveal from '../hooks/useReveal';

// One Remix icon per practice area
const CATEGORY_ICONS = {
  'gst':           'ri-file-list-3-line',
  'itr':           'ri-file-chart-line',
  'tds':           'ri-percent-line',
  'legal':         'ri-scales-3-line',
  'pf-esic':       'ri-shield-user-line',
  'trademark':     'ri-registered-line',
  'incorporation': 'ri-building-4-line',
  'mca':           'ri-government-line',
  'import-export': 'ri-ship-line',
  'accounting':    'ri-book-2-line',
  'msme':          'ri-store-3-line',
  'fssai':         'ri-restaurant-line',
};

const iconFor = (id) => CATEGORY_ICONS[id] || 'ri-briefcase-4-line';

const TOTAL_SERVICES = PARENT_SERVICES.reduce((n, p) => n + p.subcategories.length, 0);

// Flat index of every practice area + sub-service for search
const SEARCH_INDEX = PARENT_SERVICES.flatMap((parent) => [
  { name: parent.title, parent, isParent: true },
  ...parent.subcategories.map((sub) => ({ name: sub.name, parent })),
]);

// The one, consistent call-to-action shown beside every service
const EnquireButton = ({ service, category, compact = false }) => (
  <a
    href={whatsappLink(serviceEnquiry(service, category))}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Enquire about ${service} on WhatsApp`}
    className={`inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-line bg-ivory font-bold text-navy-800 transition-colors duration-300 hover:border-navy-300 hover:bg-white ${
      compact ? 'px-3 py-1.5 text-[12px]' : 'px-4 py-2 text-[12.5px]'
    }`}
  >
    <FaWhatsapp className="text-[15px]" aria-hidden="true" />
    Enquire
  </a>
);

// Header + full list of services for one practice area
const CategoryPanel = ({ service }) => (
  <div className="overflow-hidden rounded-3xl border border-line bg-white">
    <div className="relative overflow-hidden bg-navy-900 px-6 py-7 text-white sm:px-8">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/40 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg-dark opacity-60" aria-hidden="true" />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-500 text-white">
            <i className={`${iconFor(service.id)} text-[22px]`} aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-xl font-bold leading-tight tracking-[-0.015em] sm:text-2xl">{service.title}</h3>
            <p className="mt-1.5 max-w-lg text-[13.5px] leading-relaxed text-white/70">{service.shortDesc}</p>
          </div>
        </div>
        {service.page && (
          <Link
            to={service.page}
            className="inline-flex flex-shrink-0 items-center gap-1.5 self-start rounded-full border border-white/25 px-4 py-2 text-[12.5px] font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-navy-900 sm:self-center"
          >
            Read the guide <i className="ri-arrow-right-up-line" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>

    <ul className="divide-y divide-line">
      {service.subcategories.map((sub) => (
        <li key={sub.name} className="group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-brand-50/60 sm:px-8">
          <i className="ri-checkbox-circle-fill text-lg text-brand-500/80" aria-hidden="true" />
          <span className="flex-1 text-[14.5px] font-medium leading-snug text-navy-800">
            {sub.name}
            {sub.popular && (
              <span className="ml-2 inline-block rounded-full bg-brand-50 px-2 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wider text-brand-500">Popular</span>
            )}
            {SITE_FLAGS.showPricing && <span className="mt-0.5 block text-xs font-semibold text-brand-500">{sub.price}</span>}
          </span>
          <EnquireButton service={sub.name} category={service.title} />
        </li>
      ))}
    </ul>

    <div className="flex flex-col items-start justify-between gap-3 border-t border-line bg-ivory px-5 py-4 sm:flex-row sm:items-center sm:px-8">
      <p className="text-[13px] text-muted">Don’t see your exact requirement?</p>
      <a
        href={whatsappLink(serviceEnquiry(`${service.title} — other requirement`))}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-500 hover:text-navy-800"
      >
        Ask about {service.shortTitle || service.title} <i className="ri-arrow-right-line" aria-hidden="true" />
      </a>
    </div>
  </div>
);

const ServicesSection = () => {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(PARENT_SERVICES[0].id);
  const [mobileOpen, setMobileOpen] = useState(null);
  const panelRef = useRef(null);
  const ref = useReveal();

  const current = PARENT_SERVICES.find((s) => s.id === active) || PARENT_SERVICES[0];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_INDEX.filter((item) =>
      item.name.toLowerCase().includes(q) || item.parent.title.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [query]);

  // Search: selecting a whole category opens it
  const openCategory = (id) => {
    setQuery('');
    setActive(id);
    setMobileOpen(id);
    requestAnimationFrame(() => {
      const target = window.innerWidth >= 1024 ? panelRef.current : document.getElementById(`m-cat-${id}`);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <section id="services" ref={ref} className="section relative overflow-hidden bg-mesh-light" aria-labelledby="services-heading">
      <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-brand-500/[0.10] blur-3xl animate-blob" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-navy-500/[0.12] blur-3xl animate-blob [animation-delay:-6s]" aria-hidden="true" />
      <div className="absolute inset-0 dot-bg opacity-60" aria-hidden="true" />

      <div className="container-x relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-heading"
            eyebrow="Our Services"
            title="Every service,"
            accent="one accountable firm."
            lede={`${PARENT_SERVICES.length} practice areas and ${TOTAL_SERVICES} individual services — from a single return to a company’s complete statutory calendar.`}
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
              className="w-full rounded-full border border-line bg-white py-4 pl-12 pr-5 text-sm text-navy-800 outline-none transition placeholder:text-muted focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
            />
            {query.trim() && (
              <div className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-line bg-paper">
                {results.length ? (
                  <ul className="thin-scroll max-h-80 overflow-y-auto p-2">
                    {results.map((r) => (
                      <li key={`${r.parent.id}-${r.name}`} className="flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 hover:bg-ivory">
                        {r.isParent ? (
                          <>
                            <button type="button" onClick={() => openCategory(r.parent.id)} className="flex-1 text-left">
                              <span className="block text-sm font-semibold text-navy-800">{r.name}</span>
                              <span className="block text-xs text-muted">Category · {r.parent.subcategories.length} services</span>
                            </button>
                            <button type="button" onClick={() => openCategory(r.parent.id)} className="text-[12px] font-bold text-brand-500">
                              View all <i className="ri-arrow-right-line" aria-hidden="true" />
                            </button>
                          </>
                        ) : (
                          <>
                            <span className="flex-1">
                              <span className="block text-sm font-semibold text-navy-800">{r.name}</span>
                              <span className="block text-xs text-muted">{r.parent.title}</span>
                            </span>
                            <EnquireButton service={r.name} category={r.parent.title} compact />
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-sm text-muted">No match for “{query}”.</p>
                    <a href={whatsappLink(serviceEnquiry(query))} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
                      Ask the firm directly <i className="ri-arrow-right-line" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* How it works — removes any guesswork */}
        <ol className="mt-10 grid gap-3 sm:grid-cols-3 reveal">
          {[
            { icon: 'ri-folder-open-line', text: 'Pick a category' },
            { icon: 'ri-list-check-3', text: 'See every service inside it' },
            { icon: 'ri-whatsapp-line', text: 'Tap “Enquire” — WhatsApp opens with that service pre-filled' },
          ].map((s, i) => (
            <li key={s.text} className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 px-4 py-3 backdrop-blur">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 font-display text-[13px] font-bold text-white">{i + 1}</span>
              <span className="text-[13.5px] font-medium leading-snug text-navy-700">{s.text}</span>
            </li>
          ))}
        </ol>

        {/* ─── Desktop: categories on the left, services on the right ─── */}
        <div className="mt-10 hidden gap-8 lg:grid lg:grid-cols-12 reveal">
          <div className="lg:col-span-4">
            <ul role="tablist" aria-label="Service categories" aria-orientation="vertical" className="sticky top-32 space-y-1.5 rounded-3xl border border-white/80 bg-white/70 p-2.5 backdrop-blur">
              {PARENT_SERVICES.map((s) => {
                const on = s.id === current.id;
                return (
                  <li key={s.id} role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id={`tab-${s.id}`}
                      aria-selected={on}
                      aria-controls="services-panel"
                      onClick={() => setActive(s.id)}
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                        on ? 'bg-brand-500 text-white' : 'text-navy-700 hover:bg-white hover:text-brand-500'
                      }`}
                    >
                      <i className={`${iconFor(s.id)} text-lg ${on ? 'text-white' : 'text-brand-500'}`} aria-hidden="true" />
                      <span className="flex-1 text-[14px] font-semibold">{s.title}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${on ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-500'}`}>
                        {s.subcategories.length}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div ref={panelRef} id="services-panel" role="tabpanel" aria-labelledby={`tab-${current.id}`} className="scroll-mt-32 lg:col-span-8">
            <div key={current.id} className="animate-fade-up">
              <CategoryPanel service={current} />
            </div>
          </div>
        </div>

        {/* ─── Mobile / tablet: each category expands to show its services ─── */}
        <ul className="mt-8 space-y-3 lg:hidden">
          {PARENT_SERVICES.map((s) => {
            const open = mobileOpen === s.id;
            return (
              <li key={s.id} id={`m-cat-${s.id}`} className="scroll-mt-28">
                <button
                  type="button"
                  onClick={() => setMobileOpen(open ? null : s.id)}
                  aria-expanded={open}
                  aria-controls={`m-panel-${s.id}`}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                    open ? 'border-brand-500 bg-brand-500 text-white' : 'border-white/80 bg-white/80 text-navy-800 backdrop-blur'
                  }`}
                >
                  <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${open ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-500'}`}>
                    <i className={`${iconFor(s.id)} text-xl`} aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-[16px] font-bold leading-tight">{s.title}</span>
                    <span className={`mt-0.5 block text-[12px] ${open ? 'text-white/80' : 'text-muted'}`}>
                      {open ? 'Tap “Enquire” next to the service you need' : `${s.subcategories.length} services · tap to view all`}
                    </span>
                  </span>
                  <i className={`ri-arrow-down-s-line text-2xl transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <div id={`m-panel-${s.id}`} className="accordion-panel" data-open={open}>
                  <div>
                    <div className="pt-3">
                      <CategoryPanel service={s} />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 text-center text-sm text-muted reveal">
          Fees are quoted after we understand the scope of each assignment. Government fees, where applicable, are charged at actuals.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
