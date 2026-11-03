import React from 'react';
import { WHY_CHOOSE_US, BRAND } from '../utils/constants';
import SectionHeading from './SectionHeading';
import useReveal from '../hooks/useReveal';

const WhyUs = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="section relative overflow-hidden bg-night" aria-label={`Why clients choose ${BRAND.name}`}>
      <div className="absolute inset-0 grid-bg-dark" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-500/25 blur-3xl animate-blob" aria-hidden="true" />

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

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {WHY_CHOOSE_US.map((item, i) => (
            <li
              key={item.title}
              className="reveal group glass-dark relative overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-400/40 sm:p-8"
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white">
                <i className={`${item.icon} text-2xl`} aria-hidden="true" />
              </span>
              <h3 className="relative mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
              <p className="relative mt-3 text-[14px] leading-relaxed text-white/65">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
