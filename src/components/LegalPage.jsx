import React from 'react';
import Seo from './Seo';
import PageHeader from './PageHeader';
import { BRAND } from '../utils/constants';

// Shared layout for Privacy Policy and Terms — sections: [{ title, body: [string | string[]] }]
const LegalPage = ({ path, title, accent, updated, intro, sections }) => (
  <>
    <Seo path={path} />
    <PageHeader crumbs={[{ name: 'Home', href: '/' }, { name: `${title} ${accent || ''}`.trim() }]} eyebrow={`Last updated · ${updated}`} title={title} accent={accent} lede={intro} />
    <section className="pb-24 pt-16 sm:pt-20">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
          <ol className="sticky top-32 space-y-2.5 border-l border-line pl-5 text-[13px]">
            {sections.map((s, i) => (
              <li key={s.title}><a href={`#s${i + 1}`} className="text-muted hover:text-brand-500 transition-colors">{i + 1}. {s.title}</a></li>
            ))}
          </ol>
        </nav>
        <div className="prose-firm lg:col-span-8 lg:col-start-5">
          {sections.map((s, i) => (
            <section key={s.title} id={`s${i + 1}`} className="scroll-mt-32">
              <h2>{i + 1}. {s.title}</h2>
              {s.body.map((b, j) => (Array.isArray(b)
                ? <ul key={j}>{b.map((li) => <li key={li}>{li}</li>)}</ul>
                : <p key={j}>{b}</p>))}
            </section>
          ))}
          <div className="mt-12 rounded-2xl border border-line border-l-4 border-l-brand-500 bg-ivory p-7">
            <p className="font-display text-2xl font-bold text-navy-800">{BRAND.legalName}</p>
            <p className="mt-2 text-[15px] text-muted">{BRAND.addressText}</p>
            <p className="mt-1 text-[15px] text-muted">
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> · <a href={`tel:${BRAND.phoneE164}`}>{BRAND.phone}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default LegalPage;
