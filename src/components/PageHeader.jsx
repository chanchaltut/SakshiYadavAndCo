import React from 'react';
import { Link } from 'react-router-dom';

// Light header band shared by inner pages; sits under the fixed navbar
const PageHeader = ({ eyebrow, title, accent, lede, crumbs = [], children }) => (
  <section className="relative overflow-hidden border-b border-line bg-ivory">
    <div className="absolute inset-0 dot-bg" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-br from-ivory via-ivory/80 to-transparent" aria-hidden="true" />
    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[56px] border-brand-500/[0.05]" aria-hidden="true" />

    <div className="container-x relative pb-28 pt-40 sm:pb-32 sm:pt-44 lg:pt-48">
      {crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-8 animate-fade-up">
          <ol className="flex flex-wrap items-center gap-2 text-[12.5px] font-medium text-muted">
            {crumbs.map((c, i) => (
              <li key={c.name} className="flex items-center gap-2">
                {i > 0 && <i className="ri-arrow-right-s-line text-brand-500" aria-hidden="true" />}
                {c.href ? (
                  <Link to={c.href} className="hover:text-brand-500 transition-colors">{c.name}</Link>
                ) : (
                  <span aria-current="page" className="text-brand-500">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      {eyebrow && <p className="eyebrow animate-fade-up">{eyebrow}</p>}
      <h1 className="mt-6 max-w-4xl font-display text-[2.3rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-navy-800 sm:text-5xl lg:text-[3.4rem] animate-fade-up delay-1">
        {title}
        {accent && <> <span className="text-brand-500">{accent}</span></>}
      </h1>
      {lede && <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg animate-fade-up delay-2">{lede}</p>}
      {children && <div className="animate-fade-up delay-3">{children}</div>}
    </div>
  </section>
);

export default PageHeader;
