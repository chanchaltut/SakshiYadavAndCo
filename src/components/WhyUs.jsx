import React from 'react';
import { WHY_CHOOSE_US, BRAND } from '../utils/constants';
import SectionHeading from './SectionHeading';
import useReveal from '../hooks/useReveal';

const WhyUs = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="section relative overflow-hidden bg-ink-800 text-white" aria-label={`Why clients choose ${BRAND.name}`}>
      <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
      <div className="absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-gold-500/10 blur-[120px]" aria-hidden="true" />

      <div className="container-x relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Why Sakshi Yadav & Co."
            title="The rigour of a CA firm,"
            accent="the attention of a partner."
            lede="Clients stay with us because the work is careful, the communication is direct, and nothing is left to the last day."
            tone="light"
            className="reveal lg:sticky lg:top-40"
          />
        </div>

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-8">
          {WHY_CHOOSE_US.map((item, i) => (
            <li key={item.title} className="reveal bg-ink-800 p-7 transition-colors duration-500 hover:bg-ink-700 sm:p-8" style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
              <i className={`${item.icon} text-[28px] text-gold-400`} aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-200">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
