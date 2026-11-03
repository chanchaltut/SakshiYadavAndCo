import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM, BRAND, whatsappLink } from '../utils/constants';
import useReveal from '../hooks/useReveal';

const founder = TEAM[0];

// Shows the founder's portrait when TEAM[0].image is set, otherwise an engraved monogram panel
const Portrait = () =>
  founder.image ? (
    <img
      src={founder.image}
      alt={`${founder.name}, ${founder.role} of ${BRAND.name}`}
      loading="lazy"
      className="aspect-[4/5] w-full object-cover object-top"
    />
  ) : (
    <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center overflow-hidden bg-ivory">
      <div className="absolute inset-6 rounded-[18px] border border-line" aria-hidden="true" />
      <img src="/sy-mark.webp" alt="" width="256" height="256" loading="lazy" className="relative h-40 w-40 object-contain sm:h-52 sm:w-52" />
      <span className="relative mt-6 h-px w-16 bg-brand-200" aria-hidden="true" />
      <span className="relative mt-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-600">Chartered Accountant</span>
    </div>
  );

const TeamSection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="section bg-white" aria-labelledby="founder-heading">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="reveal mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="overflow-hidden rounded-[26px] border border-line">
            <Portrait />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow reveal">Leadership</p>
          <h2 id="founder-heading" className="h-section mt-5 reveal">
            {founder.name}
          </h2>
          <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.2em] text-brand-500 reveal">
            {founder.role} · {founder.qualification}
          </p>

          <p className="mt-7 text-[15px] leading-[1.85] text-navy-600 sm:text-base reveal">{founder.description}</p>

          <div className="mt-8 reveal">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted">Areas of focus</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {founder.expertise.map((e) => (
                <li key={e} className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-[13px] font-semibold text-brand-500">{e}</li>
              ))}
            </ul>
          </div>

          <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 reveal">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted">Professional body</dt>
              <dd className="mt-2 text-[15px] font-semibold text-navy-800">The Institute of Chartered Accountants of India</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
                {founder.membershipNo ? 'Membership No.' : 'Practice'}
              </dt>
              <dd className="mt-2 text-[15px] font-semibold text-navy-800">
                {founder.membershipNo || `${BRAND.address.line2}, ${BRAND.city}`}
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row reveal">
            <a
              href={whatsappLink(`Hello, I would like to schedule a meeting with ${founder.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Meeting
              <i className="ri-arrow-right-line" aria-hidden="true" />
            </a>
            {founder.linkedin ? (
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <i className="ri-linkedin-fill" aria-hidden="true" /> LinkedIn Profile
              </a>
            ) : (
              <Link to="/contact" className="btn-outline">Contact the Firm</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
