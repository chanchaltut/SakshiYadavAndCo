import React, { useState } from 'react';
import { FAQS, BRAND, whatsappLink } from '../utils/constants';
import useReveal from '../hooks/useReveal';

// FAQPage structured data for these questions is emitted by <Seo> via the route registry
const FAQSection = ({ faqs = FAQS, title = 'Questions clients', accent = 'often ask.', className = 'bg-ivory' }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useReveal([faqs]);

  return (
    <section id="faq" ref={ref} className={`section ${className}`} aria-labelledby="faq-heading">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-40">
            <p className="eyebrow reveal">FAQ</p>
            <h2 id="faq-heading" className="h-section mt-5 reveal">
              {title} <span className="text-brand-500">{accent}</span>
            </h2>
            <div className="mt-8 rounded-2xl border border-line bg-paper p-6 shadow-soft reveal">
              <p className="font-display text-xl font-bold text-navy-800">Have a specific question?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">Speak with the firm directly — we usually respond the same working day.</p>
              <div className="mt-5 flex flex-col gap-2.5">
                <a href={whatsappLink(`Hello, I have a question for ${BRAND.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-primary !min-h-[44px] !py-3">
                  <i className="ri-whatsapp-line text-base" aria-hidden="true" /> Ask on WhatsApp
                </a>
                <a href={`mailto:${BRAND.email}`} className="text-center text-sm font-semibold text-brand-500 link-underline">{BRAND.email}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-line border-y border-line">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              return (
                <li key={faq.q} className="reveal">
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                    >
                      <span className={`font-display text-xl font-bold leading-snug transition-colors sm:text-[1.2rem] ${open ? 'text-brand-500' : 'text-navy-800'}`}>
                        {faq.q}
                      </span>
                      <span className={`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${open ? 'rotate-45 border-brand-500 bg-brand-500 text-white' : 'border-line text-brand-500'}`}>
                        <i className="ri-add-line text-lg" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-button-${i}`} className="accordion-panel" data-open={open}>
                    <div>
                      <p className="max-w-3xl pb-7 pr-12 text-[15px] leading-[1.8] text-navy-600">{faq.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
