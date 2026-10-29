import React from 'react';
import { PROCESS_STEPS } from '../utils/constants';
import SectionHeading from './SectionHeading';
import useReveal from '../hooks/useReveal';

const ProcessSection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="section bg-ivory" aria-labelledby="process-heading">
      <div className="container-x">
        <SectionHeading
          id="process-heading"
          eyebrow="How We Work"
          title="A clear process,"
          accent="from first call to final filing."
          align="center"
          className="reveal"
        />

        <div className="relative mt-16">
          <span className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent md:block" aria-hidden="true" />
          <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.step} className="reveal relative flex gap-5 md:block md:text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-white shadow-brand ring-8 ring-ivory md:mx-auto">
                  <i className={`${step.icon} text-[22px]`} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-500 md:mt-6">Step {step.step}</p>
                  <h3 className="mt-1.5 font-display text-xl font-bold text-navy-800">{step.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted md:mx-auto md:max-w-[240px]">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
