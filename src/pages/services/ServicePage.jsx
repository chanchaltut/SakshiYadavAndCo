import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../../components/Seo';
import PageHeader from '../../components/PageHeader';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import NotFound from '../NotFound';
import { SERVICES, SERVICE_FAQS, BRAND, SITE_FLAGS, whatsappLink } from '../../utils/constants';
import useReveal from '../../hooks/useReveal';

const ServicePage = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const ref = useReveal([slug]);

  if (!service) return <NotFound />;

  const faqs = SERVICE_FAQS[service.slug] || [];
  const related = SERVICES.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3);
  const facts = [
    { label: 'Practice area', value: service.category },
    { label: 'Typical timeline', value: service.timeline },
    { label: 'Engagement', value: 'In person (Noida) or online' },
    ...(SITE_FLAGS.showPricing ? [{ label: 'Starting from', value: service.startingPrice }] : []),
  ];

  return (
    <>
      <Seo path={`/services/${service.slug}`} />
      <PageHeader
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/#services' }, { name: service.shortTitle }]}
        eyebrow={`${service.category} · Chartered Accountants, Noida`}
        title={service.title}
        lede={service.overview}
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappLink(service.whatsappMsg)} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <i className="ri-whatsapp-line text-lg" aria-hidden="true" /> Discuss Your Requirement
          </a>
          <a href={`tel:${BRAND.phoneE164}`} className="btn-outline">
            <i className="ri-phone-line text-lg" aria-hidden="true" /> {BRAND.phone}
          </a>
        </div>
      </PageHeader>

      <section ref={ref} className="relative z-10 -mt-14 pb-20 sm:-mt-16 sm:pb-24">
        <div className="container-x">
          <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-paper shadow-lift lg:grid-cols-3">
            {facts.slice(0, 3).map((f, i) => (
              <div key={f.label} className={`p-5 sm:p-7 ${i > 0 ? 'border-l border-line' : ''} ${i === 2 ? 'col-span-2 border-l-0 border-t lg:col-span-1 lg:border-l lg:border-t-0' : ''}`}>
                <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">{f.label}</dt>
                <dd className="mt-2 font-display text-xl font-bold text-navy-800 sm:text-2xl">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-20 grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow reveal">Scope of work</p>
              <h2 className="h-section mt-5 reveal">What this engagement <span className="text-brand-500">covers.</span></h2>
              <p className="lede mt-5 reveal">
                Each assignment is prepared by our team and reviewed by a Chartered Accountant before anything is filed or issued.
              </p>
              {SITE_FLAGS.showPricing && (
                <p className="mt-6 text-sm font-semibold text-brand-500 reveal">Professional fees start from {service.startingPrice}. Government fees at actuals.</p>
              )}
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {service.services.map((item, i) => (
                <li key={item} className="reveal flex items-start gap-4 rounded-2xl border border-line bg-paper p-5 shadow-soft" style={{ transitionDelay: `${(i % 2) * 70}ms` }}>
                  <span className="font-display text-lg text-brand-500">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[15px] font-medium leading-snug text-navy-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {related.length > 0 && (
            <div className="mt-20 reveal">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted">Related services</p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/services/${r.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift">
                      <span className="font-display text-xl font-bold text-navy-800">{r.title}</span>
                      <span className="mt-2 text-sm text-muted">{r.shortDesc}</span>
                      <span className="mt-auto pt-4 text-sm font-semibold text-brand-500">Learn more <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {faqs.length > 0 && (
        <FAQSection faqs={faqs} title={service.shortTitle} accent="— common questions." />
      )}
      <CTABanner />
    </>
  );
};

export default ServicePage;
