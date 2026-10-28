// ═══════════════════════════════════════════════════════════
//  Vite SEO plugin
//  • dev + build: injects head tags for "/" and the sitewide JSON-LD graph into index.html
//  • build: writes a static HTML file per route (own title, meta, canonical, OG,
//    JSON-LD and readable body content) so crawlers and link previews that do not
//    run JavaScript see real content; plus 404.html, sitemap.xml, llms.txt, llms-full.txt
//  Everything is derived from src/seo/routes.js + src/utils/constants.js.
// ═══════════════════════════════════════════════════════════
import fs from 'node:fs'
import path from 'node:path'
import { ROUTES, getRouteMeta, headTags, siteGraph, absolute, SITE_URL } from '../src/seo/routes.js'
import { BRAND, SERVICES, SERVICE_FAQS, PARENT_SERVICES, FAQS, ABOUT, TEAM, WHY_CHOOSE_US, NAV_ITEMS } from '../src/utils/constants.js'
import { articles } from '../src/data/articles.js'

const HEAD_START = '<!--seo:head:start-->'
const HEAD_END = '<!--seo:head:end-->'
const BODY_MARK = '<!--seo:body-->'

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const jsonLd = (obj, managed) =>
  `<script type="application/ld+json"${managed ? ' data-rh="true"' : ''}>${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`

function renderHead(meta) {
  const tags = headTags(meta).map(({ tag, attrs }) => {
    const a = Object.entries(attrs)
      .map(([k, v]) => `${k === 'hrefLang' ? 'hreflang' : k}="${esc(v)}"`)
      .join(' ')
    return `<${tag} data-rh="true" ${a}>`
  })
  return [
    HEAD_START,
    `<title>${esc(meta.title)}</title>`,
    ...tags,
    ...meta.jsonLd.map((s) => jsonLd(s, true)),
    HEAD_END,
  ].join('\n    ')
}

// ─── Static body content (replaced by React on mount) ─────────
const md = (text) => esc(text).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

const articleHtml = (content) => content.flatMap((block) => block.split('\n')).filter((l) => l.trim()).map((line) =>
  /^\*\*[^*]+\*\*:?$/.test(line.trim())
    ? `<h2>${esc(line.replace(/\*\*/g, '').replace(/:$/, ''))}</h2>`
    : `<p>${md(line)}</p>`
).join('\n')

const faqHtml = (faqs) => faqs.length
  ? `<section><h2>Frequently asked questions</h2>${faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}</section>`
  : ''

const shell = (inner) => `<div class="prerender">
<header><p><a href="/">${esc(BRAND.name)}</a> — ${esc(BRAND.descriptor)}</p><nav>${NAV_ITEMS.map((n) => `<a href="${n.href}">${esc(n.name)}</a>`).join(' · ')}</nav></header>
<main>${inner}</main>
<footer><p><strong>${esc(BRAND.legalName)}</strong><br>${esc(BRAND.addressText)}<br>Phone / WhatsApp: <a href="tel:${BRAND.phoneE164}">${esc(BRAND.phone)}</a> · Email: <a href="mailto:${BRAND.email}">${esc(BRAND.email)}</a><br>${esc(BRAND.hours)}</p></footer>
</div>`

function renderBody(route) {
  if (route === '/') {
    return shell(`<h1>${esc(BRAND.name)} — Chartered Accountants in Noida</h1>
<p>${esc(BRAND.description)}</p>
<h2>Practice areas</h2><ul>${PARENT_SERVICES.map((s) => `<li>${s.page ? `<a href="${s.page}">${esc(s.title)}</a>` : esc(s.title)} — ${esc(s.shortDesc)}</li>`).join('')}</ul>
<h2>${esc(TEAM[0].name)}</h2><p>${esc(TEAM[0].description)}</p>
${faqHtml(FAQS)}`)
  }
  if (route === '/about') {
    return shell(`<h1>${esc(ABOUT.title)}</h1>${ABOUT.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}
<ul>${ABOUT.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
<h2>${esc(TEAM[0].name)} — ${esc(TEAM[0].role)}</h2><p>${esc(TEAM[0].description)}</p>
<h2>Why clients choose us</h2><ul>${WHY_CHOOSE_US.map((w) => `<li><strong>${esc(w.title)}</strong> — ${esc(w.desc)}</li>`).join('')}</ul>`)
  }
  if (route === '/contact') {
    return shell(`<h1>Contact ${esc(BRAND.name)}</h1>
<p>Office: ${esc(BRAND.addressText)}. Hours: ${esc(BRAND.hours)}.</p>
<p>Call or WhatsApp <a href="tel:${BRAND.phoneE164}">${esc(BRAND.phone)}</a>, or email <a href="mailto:${BRAND.email}">${esc(BRAND.email)}</a>.</p>`)
  }
  if (route === '/blog') {
    return shell(`<h1>Tax, GST &amp; Compliance Insights</h1><ul>${articles.map((a) => `<li><a href="/blog/${a.slug}">${esc(a.title)}</a> — ${esc(a.excerpt)}</li>`).join('')}</ul>`)
  }
  if (route.startsWith('/blog/')) {
    const a = articles.find((x) => `/blog/${x.slug}` === route)
    return shell(`<article><h1>${esc(a.title)}</h1><p>${esc(a.category)} · <time datetime="${a.isoDate}">${esc(a.date)}</time> · ${esc(BRAND.name)}</p><p>${esc(a.excerpt)}</p>${articleHtml(a.content)}</article>`)
  }
  if (route.startsWith('/services/')) {
    const s = SERVICES.find((x) => `/services/${x.slug}` === route)
    return shell(`<h1>${esc(s.title)}</h1><p>${esc(s.overview)}</p>
<h2>Scope of work</h2><ul>${s.services.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
<p>Typical timeline: ${esc(s.timeline)}. Available in person at our Noida office or online across India.</p>
${faqHtml(SERVICE_FAQS[s.slug] || [])}`)
  }
  const meta = getRouteMeta(route)
  return shell(`<h1>${esc(meta.title)}</h1><p>${esc(meta.description)}</p>`)
}

// ─── Machine-readable files ──────────────────────────────────
function sitemap(today) {
  const urls = ROUTES.map((r) => {
    const m = getRouteMeta(r)
    return `  <url>\n    <loc>${absolute(r)}</loc>\n    <lastmod>${m.lastmod || today}</lastmod>\n    <changefreq>${m.changefreq || 'monthly'}</changefreq>\n    <priority>${m.priority || '0.5'}</priority>\n  </url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

function llmsTxt() {
  return `# ${BRAND.name}

> ${BRAND.description}

## Key facts
- Firm: ${BRAND.legalName}
- Founder & Principal: ${TEAM[0].name} — ${TEAM[0].qualification}
- Office: ${BRAND.addressText}, India
- Phone / WhatsApp: ${BRAND.phone}
- Email: ${BRAND.email}
- Hours: ${BRAND.hours}
- Service area: Noida, Greater Noida, Ghaziabad, Delhi NCR in person; all of India online
- Website: ${SITE_URL}/
- Fees: quoted per assignment in writing (ICAI guidelines restrict advertising of fees)

## Services
${SERVICES.map((s) => `- [${s.title}](${absolute(`/services/${s.slug}`)}): ${s.shortDesc}`).join('\n')}

## Pages
- [Home](${SITE_URL}/): Overview of the firm and all practice areas
- [About](${absolute('/about')}): The firm and CA Sakshi Yadav
- [Contact](${absolute('/contact')}): Address, phone, email, hours and enquiry form
- [Insights](${absolute('/blog')}): Guides on income tax, GST, TDS and business registration

## Articles
${articles.map((a) => `- [${a.title}](${absolute(`/blog/${a.slug}`)}): ${a.excerpt}`).join('\n')}

## Optional
- [Full text for language models](${absolute('/llms-full.txt')})
`
}

function llmsFullTxt() {
  const plain = (s) => s.replace(/\*\*/g, '')
  return `# ${BRAND.name} — full reference

${BRAND.description}

Office: ${BRAND.addressText}, India | Phone / WhatsApp: ${BRAND.phone} | Email: ${BRAND.email} | Hours: ${BRAND.hours}

## About the firm
${ABOUT.paragraphs.join('\n\n')}

## ${TEAM[0].name}
${TEAM[0].description}

## Practice areas and services
${PARENT_SERVICES.map((p) => `### ${p.title}\n${p.shortDesc}\n${p.subcategories.map((s) => `- ${s.name}`).join('\n')}`).join('\n\n')}

## Service details
${SERVICES.map((s) => `### ${s.title}\nURL: ${absolute(`/services/${s.slug}`)}\n${s.overview}\nIncludes: ${s.services.join('; ')}.\nTypical timeline: ${s.timeline}.\n${(SERVICE_FAQS[s.slug] || []).map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n')}`).join('\n\n')}

## Frequently asked questions
${FAQS.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}

## Articles
${articles.map((a) => `### ${a.title}\nURL: ${absolute(`/blog/${a.slug}`)} | ${a.category} | Published ${a.isoDate}\n\n${a.content.map(plain).join('\n\n')}`).join('\n\n---\n\n')}

---
General information only; not professional advice. Published by ${BRAND.legalName}.
`
}

export default function seoPlugin() {
  let outDir = 'dist'

  return {
    name: 'syc-seo',

    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },

    transformIndexHtml(html) {
      return html
        .replace('<!--seo:head-->', renderHead(getRouteMeta('/')))
        .replace('<!--seo:graph-->', jsonLd(siteGraph(), false))
    },

    closeBundle() {
      const templatePath = path.join(outDir, 'index.html')
      if (!fs.existsSync(templatePath)) return
      const template = fs.readFileSync(templatePath, 'utf8')
      const headRe = new RegExp(`${HEAD_START}[\\s\\S]*?${HEAD_END}`)

      const write = (route, file) => {
        const html = template
          .replace(headRe, renderHead(getRouteMeta(route)))
          .replace(BODY_MARK, renderBody(route))
        const target = path.join(outDir, file)
        fs.mkdirSync(path.dirname(target), { recursive: true })
        fs.writeFileSync(target, html)
      }

      // Flat .html files are served at clean URLs by vercel.json ("cleanUrls": true)
      ROUTES.forEach((route) => write(route, route === '/' ? 'index.html' : `${route.slice(1)}.html`))
      write('/404', '404.html')

      const today = new Date().toISOString().slice(0, 10)
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap(today))
      fs.writeFileSync(path.join(outDir, 'llms.txt'), llmsTxt())
      fs.writeFileSync(path.join(outDir, 'llms-full.txt'), llmsFullTxt())

      console.log(`\n  syc-seo: pre-rendered ${ROUTES.length + 1} pages, sitemap.xml (${ROUTES.length} URLs), llms.txt, llms-full.txt`)
    },
  }
}
