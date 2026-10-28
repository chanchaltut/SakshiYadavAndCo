import React from 'react';
import { BRAND, whatsappLink } from '../utils/constants';

const CTABanner = () => (
  <section className="bg-ivory pb-20 sm:pb-24" aria-label="Contact the firm">
    <div className="container-x">
      <div className="relative overflow-hidden rounded-[28px] bg-ink-800 px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
        <div className="absolute left-1/2 top-0 h-72 w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/25 blur-[110px]" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow eyebrow-light justify-center">Consultations by appointment</p>
          <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Let’s put your tax and compliance <em className="font-medium text-gold-300">on firm footing.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-200">
            Share your requirement and we will tell you exactly what is needed, by when, and what it involves — before any work begins.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappLink(`Hello, I would like to schedule a consultation with ${BRAND.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <i className="ri-whatsapp-line text-lg" aria-hidden="true" />
              WhatsApp the Firm
            </a>
            <a href={`tel:${BRAND.phoneE164}`} className="btn-outline-light">
              <i className="ri-phone-line text-lg" aria-hidden="true" />
              {BRAND.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
