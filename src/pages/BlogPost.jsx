import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import ArticleBody from '../components/ArticleBody';
import CTABanner from '../components/CTABanner';
import NotFound from './NotFound';
import { articles } from '../data/articles';
import { BRAND, whatsappLink } from '../utils/constants';

const BlogPost = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <NotFound />;

  const more = articles.filter((a) => a.slug !== slug && a.category === article.category).concat(
    articles.filter((a) => a.slug !== slug && a.category !== article.category)
  ).slice(0, 3);

  return (
    <>
      <Seo path={`/blog/${article.slug}`} />
      <PageHeader
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Insights', href: '/blog' }, { name: article.category }]}
        eyebrow={article.category}
        title={article.title}
      >
        <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-muted">
          <span>By {BRAND.name}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={article.isoDate}>{article.date}</time>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </p>
      </PageHeader>

      <article className="relative z-10 -mt-14 pb-20 sm:-mt-16">
        <div className="container-x">
          <img
            src={article.image.replace('w=800', 'w=1600')}
            alt=""
            className="mx-auto aspect-[21/9] w-full max-w-5xl rounded-[26px] object-cover shadow-lift"
          />
          <div className="mx-auto mt-14 max-w-[720px]">
            <p className="font-display text-2xl leading-snug text-navy-700 sm:text-[1.7rem]">{article.excerpt}</p>
            <div className="brand-rule my-10" aria-hidden="true" />
            <ArticleBody content={article.content} />

            <aside className="mt-14 rounded-2xl border border-line bg-paper p-7 shadow-soft">
              <p className="font-display text-2xl font-bold text-navy-800">Need advice on your specific situation?</p>
              <p className="mt-2 text-[14.5px] text-muted">
                This article is general information, not professional advice. Speak with {BRAND.name} before acting on it.
              </p>
              <a href={whatsappLink(`Hello, I read "${article.title}" and would like advice.`)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">
                <i className="ri-whatsapp-line text-base" aria-hidden="true" /> Speak with the firm
              </a>
            </aside>
          </div>

          <div className="mx-auto mt-20 max-w-5xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted">Continue reading</p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-3">
              {more.map((a) => (
                <li key={a.slug}>
                  <Link to={`/blog/${a.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-500">{a.category}</span>
                    <span className="mt-3 font-display text-xl font-bold leading-snug text-navy-800 group-hover:text-brand-500">{a.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
      <CTABanner />
    </>
  );
};

export default BlogPost;
