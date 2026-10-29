import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT, BRAND } from '../utils/constants';
import useReveal from '../hooks/useReveal';

const AboutSection = ({ showLink = true }) => {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} className="section bg-white" aria-labelledby="about-heading">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Image composition */}
        <div className="reveal relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-[26px] shadow-lift">
            <img
              src={ABOUT.image}
              alt="Chartered Accountant reviewing and signing financial documents"
              width="1000"
              height="1200"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden max-w-[260px] rounded-2xl red-gradient p-6 text-white shadow-brand sm:block lg:-right-10">
            <i className="ri-double-quotes-l text-3xl text-white/70" aria-hidden="true" />
            <p className="mt-2 font-display text-lg font-semibold leading-snug">
              Precise work, honest advice and deadlines that are never an afterthought.
            </p>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/75">Our standard</p>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7 lg:pl-6">
          <p className="eyebrow reveal">About the Firm</p>
          <h2 id="about-heading" className="h-section mt-5 reveal">
            A Chartered Accountancy practice built on <span className="text-brand-500">precision and trust.</span>
          </h2>

          <div className="mt-7 space-y-4 reveal">
            {ABOUT.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-[15px] leading-[1.8] text-navy-600 sm:text-base">{p}</p>
            ))}
          </div>

          <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2 reveal">
            {ABOUT.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14.5px] text-navy-700">
                <i className="ri-check-line mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs text-white" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 reveal">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted">Who we advise</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ABOUT.clientCategories.map((c) => (
                <li key={c} className="rounded-full border border-brand-500/20 bg-brand-50 px-3.5 py-1.5 text-[12.5px] font-medium text-navy-700">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {showLink && (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row reveal">
              <Link to="/about" className="btn-primary">
                About {BRAND.name}
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn-outline">Visit Our Office</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
