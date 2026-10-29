import React from 'react';
import { WHY_CHOOSE_US, BRAND } from '../utils/constants';
import SectionHeading from './SectionHeading';
import useReveal from '../hooks/useReveal';

const WhyUs = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="section relative overflow-hidden bg-ivory" aria-label={`Why clients choose ${BRAND.name}`}>
      <div className="absolute inset-0 dot-bg opacity-70" aria-hidden="true" />

      <div className="container-x relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Why Sakshi Yadav & Co."
            title="The rigour of a CA firm,"
            accent="the attention of a partner."
            lede="Clients stay with us because the work is careful, the communication is direct, and nothing is left to the last day."
            className="reveal lg:sticky lg:top-40"
          />
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {WHY_CHOOSE_US.map((item, i) => (
            <li key={item.title} className="reveal group card card-hover p-7 sm:p-8" style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                <i className={`${item.icon} text-2xl`} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-800">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
