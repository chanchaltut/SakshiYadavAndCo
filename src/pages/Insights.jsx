import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';
import { articles, ARTICLE_CATEGORIES } from '../data/articles';
import useReveal from '../hooks/useReveal';

const ArticleCard = ({ article, featured = false }) => (
  <Link
    to={`/blog/${article.slug}`}
    className={`group flex h-full overflow-hidden rounded-[22px] border border-line bg-paper shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift ${
      featured ? 'flex-col lg:flex-row' : 'flex-col'
    }`}
  >
    <div className={`overflow-hidden ${featured ? 'lg:w-1/2' : ''}`}>
      <img
        src={article.image}
        alt=""
        loading="lazy"
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${featured ? 'aspect-[16/10] lg:h-full' : 'aspect-[16/10]'}`}
      />
    </div>
    <div className={`flex flex-1 flex-col p-6 sm:p-7 ${featured ? 'lg:p-10' : ''}`}>
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted">
        <span className="font-bold uppercase tracking-[0.18em] text-gold-700">{article.category}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={article.isoDate}>{article.date}</time>
        <span aria-hidden="true">·</span>
        <span>{article.readTime}</span>
      </p>
      <h2 className={`mt-4 font-serif font-semibold leading-tight text-ink-800 transition-colors group-hover:text-gold-700 ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
        {article.title}
      </h2>
      <p className="mt-3 line-clamp-3 text-[14.5px] leading-relaxed text-muted">{article.excerpt}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ink-800">
        Read article <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </div>
  </Link>
);

const Insights = () => {
  const [category, setCategory] = useState('All');
  const ref = useReveal([category]);
  const list = category === 'All' ? articles : articles.filter((a) => a.category === category);
  const [featured, ...rest] = list;

  return (
    <>
      <Seo path="/blog" />
      <PageHeader
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Insights' }]}
        eyebrow="Insights"
        title="Tax and compliance,"
        accent="explained plainly."
        lede="Practical guides on income tax, GST, TDS and business registration — prepared by the Chartered Accountants at Sakshi Yadav & Co."
      />

      <section ref={ref} className="relative z-10 -mt-12 pb-20 sm:pb-24">
        <div className="container-x">
          <div className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="Filter by topic">
            {ARTICLE_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={`flex-shrink-0 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all ${
                  category === c ? 'bg-gold-500 text-ink-900 shadow-gold' : 'border border-line bg-paper text-ink-700 hover:border-gold-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {featured && (
            <div className="mt-10 reveal">
              <ArticleCard article={featured} featured />
            </div>
          )}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <div key={a.slug} className="reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <ArticleCard article={a} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
};

export default Insights;
