import React from 'react';
import { Link } from 'react-router-dom';

// Dark header band shared by inner pages; sits under the fixed navbar
const PageHeader = ({ eyebrow, title, accent, lede, crumbs = [], children }) => (
  <section className="relative overflow-hidden bg-night text-white">
    <div className="absolute inset-0 grid-bg-dark" aria-hidden="true" />
    <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl animate-blob" aria-hidden="true" />
    <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl animate-blob [animation-delay:-7s]" aria-hidden="true" />

    <div className="container-x relative pb-28 pt-40 sm:pb-32 sm:pt-44 lg:pt-48">
      {crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-8 animate-fade-up">
          <ol className="flex flex-wrap items-center gap-2 text-[12.5px] font-medium text-white/60">
            {crumbs.map((c, i) => (
              <li key={c.name} className="flex items-center gap-2">
                {i > 0 && <i className="ri-arrow-right-s-line text-brand-300" aria-hidden="true" />}
                {c.href ? (
                  <Link to={c.href} className="hover:text-white transition-colors">{c.name}</Link>
                ) : (
                  <span aria-current="page" className="text-brand-300">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      {eyebrow && <p className="eyebrow eyebrow-light animate-fade-up">{eyebrow}</p>}
      <h1 className="mt-6 max-w-4xl font-display text-[2.3rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-white sm:text-5xl lg:text-[3.4rem] animate-fade-up delay-1">
        {title}
        {accent && <> <span className="text-shine">{accent}</span></>}
      </h1>
      {lede && <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg animate-fade-up delay-2">{lede}</p>}
      {children && <div className="page-header-actions animate-fade-up delay-3">{children}</div>}
    </div>
  </section>
);

export default PageHeader;
