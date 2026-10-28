// ═══════════════════════════════════════════════════════════
//  SEO registry — single source for every indexable URL.
//  Used by <Seo> at runtime and by plugins/seo.js at build time
//  (static per-route HTML, sitemap.xml, llms-full.txt).
//  Plain JS only: this module is imported by Node during the build.
// ═══════════════════════════════════════════════════════════
import { BRAND, SERVICES, SERVICE_FAQS, FAQS, TEAM, PARENT_SERVICES } from '../utils/constants.js'
import { articles } from '../data/articles.js'

export const SITE_URL = BRAND.website
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`
export const OG_IMAGE_ALT = `${BRAND.name} — Chartered Accountants, Sector 18, Noida`
export const TWITTER_IMAGE = `${SITE_URL}/twitter-card.jpg`

export const absolute = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`)

const ORG_ID = `${SITE_URL}/#organization`
const PERSON_ID = `${SITE_URL}/#founder`
const WEBSITE_ID = `${SITE_URL}/#website`

const founder = TEAM[0]
const sameAs = Object.values(BRAND.social).filter(Boolean)

// ─── Sitewide graph (injected once into every page's <head>) ──
export const siteGraph = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['AccountingService', 'ProfessionalService'],
      '@id': ORG_ID,
      name: BRAND.name,
      legalName: BRAND.legalName,
      alternateName: ['Sakshi Yadav and Co', 'Sakshi Yadav & Co Chartered Accountants', 'SYC Chartered Accountants'],
      description: BRAND.description,
      slogan: BRAND.tagline,
      url: `${SITE_URL}/`,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
      image: OG_IMAGE,
      telephone: BRAND.phoneE164,
      email: BRAND.email,
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Bank Transfer, UPI, Cheque',
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${BRAND.address.line1}, ${BRAND.address.line2}`,
        addressLocality: BRAND.address.city,
        addressRegion: BRAND.address.state,
        postalCode: BRAND.address.pincode,
        addressCountry: BRAND.address.countryCode,
      },
      geo: { '@type': 'GeoCoordinates', latitude: BRAND.geo.lat, longitude: BRAND.geo.lng },
      hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.mapsQuery)}`,
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: BRAND.hoursSpec.days,
        opens: BRAND.hoursSpec.opens,
        closes: BRAND.hoursSpec.closes,
      }],
      areaServed: [
        { '@type': 'City', name: 'Noida' },
        { '@type': 'City', name: 'Greater Noida' },
        { '@type': 'City', name: 'Ghaziabad' },
        { '@type': 'City', name: 'New Delhi' },
        { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
        { '@type': 'Country', name: 'India' },
      ],
      contactPoint: [{
        '@type': 'ContactPoint',
        telephone: BRAND.phoneE164,
        email: BRAND.email,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      }],
      founder: { '@id': PERSON_ID },
      employee: { '@id': PERSON_ID },
      knowsAbout: [
        'Income Tax Return Filing', 'Tax Planning', 'GST Registration', 'GST Returns', 'GST Advisory',
        'TDS Compliance', 'Tax Audit', 'Statutory Audit', 'Internal Audit', 'Company Incorporation',
        'LLP Registration', 'ROC Compliance', 'Accounting and Bookkeeping', 'Project Reports', 'CMA Data',
        'CA Certification', 'Form 15CA 15CB', 'Capital Gains Tax', 'F&O Taxation', 'Trademark Registration',
        'MSME Udyam Registration', 'FSSAI Registration', 'Import Export Code', 'PF and ESIC Compliance',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Chartered Accountancy Services',
        itemListElement: PARENT_SERVICES.map((s) => ({
          '@type': 'OfferCatalog',
          name: s.title,
          itemListElement: s.subcategories.map((sub) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: sub.name },
          })),
        })),
      },
      ...(sameAs.length ? { sameAs } : {}),
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: founder.name.replace(/^CA\s+/, ''),
      honorificPrefix: 'CA',
      jobTitle: 'Chartered Accountant',
      description: founder.description,
      worksFor: { '@id': ORG_ID },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Membership',
        name: 'Chartered Accountant',
        recognizedBy: { '@type': 'Organization', name: 'The Institute of Chartered Accountants of India', url: 'https://www.icai.org' },
      },
      memberOf: { '@type': 'Organization', name: 'The Institute of Chartered Accountants of India', url: 'https://www.icai.org' },
      knowsAbout: founder.expertise,
      ...(founder.linkedin ? { sameAs: [founder.linkedin] } : {}),
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: BRAND.name,
      alternateName: 'Sakshi Yadav and Co',
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-IN',
    },
  ],
})

// ─── Schema builders ─────────────────────────────────────────
export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absolute(item.path),
  })),
})

const webPage = (type, path, title, description) => ({
  '@context': 'https://schema.org',
  '@type': type,
  '@id': `${absolute(path)}#webpage`,
  url: absolute(path),
  name: title,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  inLanguage: 'en-IN',
})

// ─── Route definitions ───────────────────────────────────────
const KEYWORDS_BASE = 'Chartered Accountant in Noida, CA firm Noida, CA in Sector 18 Noida, Sakshi Yadav & Co, CA Sakshi Yadav, Chartered Accountants Delhi NCR'

const staticRoutes = {
  '/': {
    title: `${BRAND.name} | Chartered Accountants in Noida — Tax, GST & Audit`,
    description: `${BRAND.name} is a Chartered Accountancy firm in Sector 18, Noida led by CA Sakshi Yadav (ICAI). Income tax, GST, TDS, audit, company incorporation and ROC compliance — in Noida and online across India.`,
    keywords: `${KEYWORDS_BASE}, income tax return filing Noida, GST registration Noida, tax audit Noida, company registration Noida, ROC compliance, TDS return filing`,
    changefreq: 'weekly',
    priority: '1.0',
    jsonLd: () => [webPage('WebPage', '/', staticRoutes['/'].title, staticRoutes['/'].description), faqSchema(FAQS)],
  },
  '/about': {
    title: `About ${BRAND.name} | CA Sakshi Yadav — Chartered Accountant, Noida`,
    description: `Meet CA Sakshi Yadav, founder of ${BRAND.name}, a Chartered Accountancy practice at Ansal Fortune, Sector 18, Noida offering partner-led tax, audit and compliance advice.`,
    keywords: `${KEYWORDS_BASE}, about Sakshi Yadav & Co, CA Sakshi Yadav Noida`,
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }],
    jsonLd: () => [webPage('AboutPage', '/about', staticRoutes['/about'].title, staticRoutes['/about'].description)],
  },
  '/contact': {
    title: `Contact ${BRAND.name} | Chartered Accountants, Sector 18 Noida`,
    description: `Visit ${BRAND.name} at ${BRAND.addressText}. Call or WhatsApp ${BRAND.phone} or email ${BRAND.email}. Open ${BRAND.hours}.`,
    keywords: `${KEYWORDS_BASE}, CA office Sector 18 Noida, Ansal Fortune Noida, CA near me Noida`,
    changefreq: 'yearly',
    priority: '0.8',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }],
    jsonLd: () => [webPage('ContactPage', '/contact', staticRoutes['/contact'].title, staticRoutes['/contact'].description)],
  },
  '/blog': {
    title: `Tax, GST & Compliance Insights | ${BRAND.name}`,
    description: 'Plain-English guides on income tax, GST, TDS and business registration in India — prepared by the Chartered Accountants at Sakshi Yadav & Co., Noida.',
    keywords: 'income tax guide India, GST guide, TDS rates, old vs new tax regime, ITR filing guide, business structure India',
    changefreq: 'weekly',
    priority: '0.7',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Insights', path: '/blog' }],
    jsonLd: () => [{
      ...webPage('CollectionPage', '/blog', staticRoutes['/blog'].title, staticRoutes['/blog'].description),
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: articles.map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: absolute(`/blog/${a.slug}`), name: a.title })),
      },
    }],
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${BRAND.name}`,
    description: `How ${BRAND.name} collects, uses and protects personal data, in line with the Digital Personal Data Protection Act, 2023.`,
    changefreq: 'yearly',
    priority: '0.3',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }],
  },
  '/terms-conditions': {
    title: `Terms of Use & Disclaimer | ${BRAND.name}`,
    description: `Terms governing the use of the ${BRAND.name} website, including the ICAI disclaimer on information provided.`,
    changefreq: 'yearly',
    priority: '0.3',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Terms', path: '/terms-conditions' }],
  },
}

const serviceRoute = (service) => {
  const path = `/services/${service.slug}`
  const faqs = SERVICE_FAQS[service.slug] || []
  const description = `${service.shortDesc} ${BRAND.name}, Chartered Accountants in Sector 18, Noida — serving Delhi NCR and clients across India.`
  return {
    title: `${service.title} in Noida | ${BRAND.name}`,
    description,
    keywords: `${service.title} Noida, ${service.shortTitle} Chartered Accountant, ${service.services.slice(0, 4).join(', ')}, ${KEYWORDS_BASE}`,
    changefreq: 'monthly',
    priority: '0.9',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Services', path: '/#services' }, { name: service.title, path }],
    jsonLd: () => [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${absolute(path)}#service`,
        name: service.title,
        serviceType: service.shortTitle,
        description: service.overview,
        url: absolute(path),
        provider: { '@id': ORG_ID },
        areaServed: [{ '@type': 'City', name: 'Noida' }, { '@type': 'AdministrativeArea', name: 'Delhi NCR' }, { '@type': 'Country', name: 'India' }],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: service.title,
          itemListElement: service.services.map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
        },
      },
      ...(faqs.length ? [faqSchema(faqs)] : []),
    ],
  }
}

const articleRoute = (article) => {
  const path = `/blog/${article.slug}`
  return {
    // Long headlines drop the brand suffix so search results don't truncate the topic
    title: article.title.length > 62 ? article.title : `${article.title} | ${BRAND.name}`,
    description: article.excerpt,
    keywords: `${article.category}, ${article.title}`,
    image: article.image,
    ogType: 'article',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: article.updated || article.isoDate,
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Insights', path: '/blog' }, { name: article.title, path }],
    jsonLd: () => [{
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${absolute(path)}#article`,
      headline: article.title,
      description: article.excerpt,
      image: [article.image],
      datePublished: article.isoDate,
      dateModified: article.updated || article.isoDate,
      articleSection: article.category,
      inLanguage: 'en-IN',
      mainEntityOfPage: absolute(path),
      author: { '@id': ORG_ID, '@type': 'Organization', name: BRAND.name, url: `${SITE_URL}/` },
      publisher: { '@id': ORG_ID },
    }],
  }
}

const notFound = {
  title: `Page Not Found | ${BRAND.name}`,
  description: 'The page you are looking for does not exist.',
  noindex: true,
}

// path → resolved meta
const registry = new Map()
Object.entries(staticRoutes).forEach(([path, def]) => registry.set(path, def))
SERVICES.forEach((s) => registry.set(`/services/${s.slug}`, serviceRoute(s)))
articles.forEach((a) => registry.set(`/blog/${a.slug}`, articleRoute(a)))

export const ROUTES = [...registry.keys()]

export function getRouteMeta(path) {
  const def = registry.get(path) || notFound
  const jsonLd = [
    ...(def.jsonLd ? def.jsonLd() : []),
    ...(def.breadcrumb ? [breadcrumbSchema(def.breadcrumb)] : []),
  ]
  return {
    path,
    title: def.title,
    description: def.description,
    keywords: def.keywords,
    canonical: def.noindex ? null : absolute(path),
    image: def.image || OG_IMAGE,
    imageAlt: def.image ? def.title : OG_IMAGE_ALT,
    twitterImage: def.image || TWITTER_IMAGE,
    ogType: def.ogType || 'website',
    noindex: !!def.noindex,
    changefreq: def.changefreq,
    priority: def.priority,
    lastmod: def.lastmod,
    jsonLd,
  }
}

// Ordered list of head tags — rendered by <Seo> (React) and serialised by the build plugin
export function headTags(meta) {
  const robots = meta.noindex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  const tags = [
    { tag: 'meta', attrs: { name: 'description', content: meta.description } },
    meta.keywords && { tag: 'meta', attrs: { name: 'keywords', content: meta.keywords } },
    { tag: 'meta', attrs: { name: 'robots', content: robots } },
    meta.canonical && { tag: 'link', attrs: { rel: 'canonical', href: meta.canonical } },
    meta.canonical && { tag: 'link', attrs: { rel: 'alternate', hrefLang: 'en-IN', href: meta.canonical } },
    meta.canonical && { tag: 'link', attrs: { rel: 'alternate', hrefLang: 'x-default', href: meta.canonical } },
    { tag: 'meta', attrs: { property: 'og:type', content: meta.ogType } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: BRAND.name } },
    { tag: 'meta', attrs: { property: 'og:locale', content: 'en_IN' } },
    { tag: 'meta', attrs: { property: 'og:title', content: meta.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: meta.description } },
    meta.canonical && { tag: 'meta', attrs: { property: 'og:url', content: meta.canonical } },
    { tag: 'meta', attrs: { property: 'og:image', content: meta.image } },
    { tag: 'meta', attrs: { property: 'og:image:secure_url', content: meta.image } },
    meta.image === OG_IMAGE && { tag: 'meta', attrs: { property: 'og:image:type', content: 'image/jpeg' } },
    meta.image === OG_IMAGE && { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    meta.image === OG_IMAGE && { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
    { tag: 'meta', attrs: { property: 'og:image:alt', content: meta.imageAlt } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: meta.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: meta.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: meta.twitterImage } },
    { tag: 'meta', attrs: { name: 'twitter:image:alt', content: meta.imageAlt } },
  ]
  return tags.filter(Boolean)
}
