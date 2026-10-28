import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getRouteMeta, headTags } from '../seo/routes';

// Renders the full head tag set for a route from the shared SEO registry.
// The build step pre-renders the identical tags (with data-rh) into static HTML,
// and Helmet replaces them on mount — so crawlers that don't run JS see the same thing.
const Seo = ({ path }) => {
  const meta = getRouteMeta(path);

  return (
    <Helmet>
      <title>{meta.title}</title>
      {headTags(meta).map(({ tag, attrs }) =>
        React.createElement(tag, { key: `${tag}-${attrs.name || attrs.property || attrs.rel}-${attrs.hrefLang || ''}`, ...attrs })
      )}
      {meta.jsonLd.map((schema, i) => (
        <script key={`ld-${i}`} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
};

export default Seo;
