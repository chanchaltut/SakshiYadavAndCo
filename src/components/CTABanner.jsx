import React from 'react';
import { BRAND, whatsappLink } from '../utils/constants';

const CTABanner = () => (
  <section className="bg-white pb-20 sm:pb-24" aria-label="Contact the firm">
    <div className="container-x">
      <div className="red-gradient relative overflow-hidden rounded-[28px] px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="absolute inset-0 dot-bg-light" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/[0.06]" aria-hidden="true" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border-[48px] border-white/[0.05]" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow eyebrow-light justify-center">Consultations by appointment</p>
          <h2 className="mt-6 font-display text-[2rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-white sm:text-5xl">
            Let’s put your tax and compliance on firm footing.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85">
            Share your requirement and we will tell you exactly what is needed, by when, and what it involves — before any work begins.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappLink(`Hello, I would like to schedule a consultation with ${BRAND.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-light">
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
