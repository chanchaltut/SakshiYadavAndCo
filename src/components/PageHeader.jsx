import React from 'react';
import { Link } from 'react-router-dom';

// Dark header band shared by inner pages; sits under the transparent navbar
const PageHeader = ({ eyebrow, title, accent, lede, crumbs = [], children }) => (
  <section className="relative overflow-hidden bg-ink-900 text-white">
    <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
    <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold-500/15 blur-[130px]" aria-hidden="true" />

    <div className="container-x relative pb-28 pt-40 sm:pb-32 sm:pt-44 lg:pt-48">
      {crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-8 animate-fade-up">
          <ol className="flex flex-wrap items-center gap-2 text-[12.5px] text-ink-300">
            {crumbs.map((c, i) => (
              <li key={c.name} className="flex items-center gap-2">
                {i > 0 && <i className="ri-arrow-right-s-line text-gold-500" aria-hidden="true" />}
                {c.href ? (
                  <Link to={c.href} className="hover:text-white transition-colors">{c.name}</Link>
                ) : (
                  <span aria-current="page" className="text-gold-200">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      {eyebrow && <p className="eyebrow eyebrow-light animate-fade-up">{eyebrow}</p>}
      <h1 className="mt-6 max-w-4xl font-serif text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.01em] sm:text-6xl lg:text-7xl animate-fade-up delay-1">
        {title}
        {accent && <> <em className="font-medium text-gold-300">{accent}</em></>}
      </h1>
      {lede && <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg animate-fade-up delay-2">{lede}</p>}
      {children && <div className="animate-fade-up delay-3">{children}</div>}
    </div>
  </section>
);

export default PageHeader;
