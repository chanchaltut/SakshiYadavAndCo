// ═══════════════════════════════════════════════════════════
//  Sakshi Yadav & Co. — Central Data Store
//  All content, services, FAQs and team details live here.
//  This file is also read at build time (scripts/prerender.js)
//  to generate per-page SEO HTML, sitemap.xml and llms-full.txt,
//  so keep it plain JavaScript (no JSX / browser-only APIs).
// ═══════════════════════════════════════════════════════════

// ─── BRAND CONFIG ───────────────────────────────────────────
export const BRAND = {
  name: 'Sakshi Yadav & Co.',
  shortName: 'SYC',
  legalName: 'Sakshi Yadav & Co., Chartered Accountants',
  descriptor: 'Chartered Accountants',
  tagline: 'Clarity in Tax. Confidence in Compliance.',
  subTagline: 'Chartered Accountants in Noida — Tax, Audit, GST & Corporate Compliance',
  description:
    'Sakshi Yadav & Co. is a Chartered Accountancy firm in Sector 18, Noida, led by CA Sakshi Yadav (ICAI member). The firm advises individuals, startups and growing businesses on income tax, GST, TDS, audit and assurance, company incorporation, ROC compliance and financial reporting — in person in Noida and online across India.',
  phone: '+91 87962 15611',
  phoneE164: '+918796215611',
  whatsapp: '918796215611',
  email: 'contact@sakshiyadavandco.in',
  address: {
    line1: 'SF-57, Ansal Fortune',
    line2: 'Sector 18',
    city: 'Noida',
    district: 'Gautam Buddh Nagar',
    state: 'Uttar Pradesh',
    stateCode: 'UP',
    pincode: '201301',
    country: 'India',
    countryCode: 'IN',
  },
  addressText: 'SF-57, Ansal Fortune, Sector 18, Noida, Uttar Pradesh 201301',
  // Approximate pin for Sector 18 Noida — refine from Google Business Profile once claimed
  geo: { lat: 28.5696, lng: 77.3236 },
  mapsQuery: 'SF-57 Ansal Fortune Sector 18 Noida 201301',
  hours: 'Mon – Sat, 10:00 AM – 7:00 PM',
  hoursSpec: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '10:00', closes: '19:00' },
  city: 'Noida',
  region: 'Delhi NCR',
  website: 'https://sakshiyadavandco.in',
  domain: 'sakshiyadavandco.in',
  social: {
    // Add profile URLs as they go live — empty values are hidden site-wide
    linkedin:  '',
    instagram: '',
    facebook:  '',
    x:         '',
  },
}

// ─── SITE FLAGS ─────────────────────────────────────────────
// ICAI's Code of Ethics restricts Chartered Accountants from advertising
// fees or soliciting work. Pricing stays hidden unless the firm decides otherwise.
export const SITE_FLAGS = {
  showPricing: false,
}

export const whatsappLink = (message = `Hello, I would like to consult ${BRAND.name}.`) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.mapsQuery)}`

// ─── CREDENTIAL STRIP (verifiable facts only — no inflated counters) ──
export const HIGHLIGHTS = [
  { value: 'ICAI', label: 'Member Firm of Chartered Accountants', icon: 'ri-shield-star-line' },
  { value: '12', label: 'Practice Areas Under One Roof', icon: 'ri-stack-line' },
  { value: 'Noida', label: 'Sector 18 Office · Delhi NCR', icon: 'ri-map-pin-2-line' },
  { value: 'Pan-India', label: 'Secure Online Engagements', icon: 'ri-global-line' },
]

// ─── NAV ITEMS ───────────────────────────────────────────────
export const NAV_ITEMS = [
  { name: 'Home',     href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'About',    href: '/about' },
  { name: 'Insights', href: '/blog' },
  { name: 'Contact',  href: '/contact' },
]

// ─── SERVICES (10 detail pages under /services/:slug) ─────────────────
export const SERVICES = [
  {
    "id": 1,
    "slug": "income-tax",
    "title": "Income Tax Return Filing & Tax Planning",
    "shortTitle": "Income Tax & Planning",
    "icon": "fa-file-invoice-dollar",
    "iconEmoji": "💰",
    "category": "Tax Filing",
    "isPopular": true,
    "badge": "Most Popular",
    "shortDesc": "ITR filing for individuals, businesses & professionals with maximum tax savings.",
    "overview": "File your income tax return accurately and on time with Sakshi Yadav & Co. We handle ITR-1 through ITR-7, reconcile your AIS/26AS, maximise deductions under 80C, 80D, HRA, and provide expert tax planning strategies.",
    "services": [
      "ITR Filing for Salaried & Business",
      "Old Pending ITR Filing",
      "Capital Gains & Crypto Tax",
      "NRI Return Filing",
      "Income Tax Notice, Assessment & Proceeding",
      "Tax Planning on Refund & Tax Saving",
      "AIS/26AS Reconciliation",
      "Advance Tax Computation"
    ],
    "startingPrice": "₹499",
    "timeline": "1-3 working days",
    "whatsappMsg": "Hello, I need Income Tax Filing assistance from Sakshi Yadav & Co.",
    "image": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 2,
    "slug": "gst-services",
    "title": "GST Registration & GST Return Filing",
    "shortTitle": "GST Services",
    "icon": "fa-receipt",
    "iconEmoji": "🧾",
    "category": "Tax Filing",
    "isPopular": true,
    "badge": "Most Popular",
    "shortDesc": "Complete GST compliance — registration to annual returns, notices & audit.",
    "overview": "Sakshi Yadav & Co. provides end-to-end GST services. From obtaining your GSTIN to filing monthly, quarterly, and annual returns, we handle everything efficiently ensuring you claim maximum ITC and stay penalty-free.",
    "services": [
      "New GST Registration",
      "GSTR-1 & GSTR-3B Filing",
      "GSTR-9 Annual Return",
      "GST Reconciliation (GSTR-2A/2B)",
      "GST Audit",
      "LUT Application",
      "GST Notice Reply"
    ],
    "startingPrice": "₹999",
    "timeline": "3-7 working days",
    "whatsappMsg": "Hello, I need GST Services from Sakshi Yadav & Co.",
    "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 3,
    "slug": "tax-audit",
    "title": "Tax Audit & Statutory Audit",
    "shortTitle": "Tax Audit",
    "icon": "fa-file-signature",
    "iconEmoji": "📝",
    "category": "Compliance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Comprehensive Tax & Statutory Audit services for businesses and corporations.",
    "overview": "Ensure full regulatory compliance with our audit services. Sakshi Yadav & Co. conducts Tax Audits u/s 44AB and Statutory Audits to verify your financial statements are accurate and comply with the latest tax laws.",
    "services": [
      "Tax Audit u/s 44AB",
      "Statutory Audit of Companies",
      "NGO, Trust & Society Audit",
      "ADT-1 — Auditor Appointment",
      "Form 3CA/3CB & 3CD",
      "Internal Audit",
      "Audit Report Preparation"
    ],
    "startingPrice": "Consult for Pricing",
    "timeline": "Case-specific",
    "whatsappMsg": "Hello, I need Tax Audit services from Sakshi Yadav & Co.",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 4,
    "slug": "tds-compliance",
    "title": "TDS Return & Compliance",
    "shortTitle": "TDS Compliance",
    "icon": "fa-percent",
    "iconEmoji": "📊",
    "category": "Tax Filing",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Quarterly TDS/TCS return filing, deduction computation & Form 16 issuance.",
    "overview": "We manage your complete TDS compliance. Sakshi Yadav & Co. handles TDS computation, quarterly return filing (24Q, 26Q, 27EQ), default resolution, and issues Form 16/16A to employees and vendors.",
    "services": [
      "TDS Computation & Challan",
      "24Q, 26Q, 27EQ Filing",
      "Form 16/16A Generation",
      "TAN Registration",
      "TDS Notice Resolution"
    ],
    "startingPrice": "₹1,499",
    "timeline": "2-5 working days",
    "whatsappMsg": "Hello, I need TDS compliance services from Sakshi Yadav & Co.",
    "image": "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 5,
    "slug": "business-registration",
    "title": "Business Registration & Setup",
    "shortTitle": "Business Setup",
    "icon": "fa-building",
    "iconEmoji": "🏢",
    "category": "Business",
    "isPopular": true,
    "badge": "High Demand",
    "shortDesc": "One-stop business setup — Proprietorship to Private Limited, FSSAI, IEC & NGO registrations.",
    "overview": "Start your business the right way with Sakshi Yadav & Co. We help you choose the right structure and handle all registrations — from simple Proprietorships to Private Limited Companies, FSSAI food licenses, IEC for export-import, and NGO/Trust/Society formation.",
    "services": [
      "Proprietorship Registration",
      "Partnership Firm Registration",
      "Private Limited Company (Pvt Ltd)",
      "One Person Company (OPC)",
      "FSSAI Food License",
      "IEC — Import Export Code",
      "NGO / Trust / Society Registration",
      "MSME / Udyam Registration"
    ],
    "startingPrice": "₹4,999",
    "timeline": "7-15 working days",
    "whatsappMsg": "Hello, I want to register a business with Sakshi Yadav & Co.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 6,
    "slug": "roc-compliance",
    "title": "ROC / Corporate Compliance",
    "shortTitle": "ROC Compliance",
    "icon": "fa-landmark",
    "iconEmoji": "🏛️",
    "category": "Compliance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Annual filings, board resolutions, minutes & all MCA/ROC compliance for companies.",
    "overview": "Keep your company fully compliant with MCA regulations. Sakshi Yadav & Co. handles all your ROC filings, annual returns (AOC-4, MGT-7), board meeting minutes, and statutory registers to keep you penalty-free.",
    "services": [
      "Annual Return (MGT-7)",
      "Financial Statements (AOC-4)",
      "Board Meeting Minutes & Resolutions",
      "Director Appointment / Resignation",
      "Share Transfer & Allotment",
      "Charge Creation / Satisfaction",
      "Statutory Register Maintenance"
    ],
    "startingPrice": "₹3,999",
    "timeline": "5-10 working days",
    "whatsappMsg": "Hello, I need ROC/Corporate compliance from Sakshi Yadav & Co.",
    "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 7,
    "slug": "project-reports",
    "title": "Project Reports & CMA Data",
    "shortTitle": "Project Reports",
    "icon": "fa-chart-bar",
    "iconEmoji": "📈",
    "category": "Finance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Bank loan project reports, CMA data & feasibility studies for all business types.",
    "overview": "Sakshi Yadav & Co. prepares professional project reports and CMA (Credit Monitoring Arrangement) data for bank loans, Mudra, SIDBI, and PMEGP. Our reports meet bank standards and are designed to maximise loan approval chances.",
    "services": [
      "Project Report for Bank Loans",
      "CMA Data Preparation",
      "Mudra Loan Report",
      "SIDBI / PMEGP Reports",
      "Feasibility Studies",
      "Business Plan Preparation"
    ],
    "startingPrice": "₹2,999",
    "timeline": "3-5 working days",
    "whatsappMsg": "Hello, I need a Project Report / CMA Data from Sakshi Yadav & Co.",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 8,
    "slug": "ca-certificates",
    "title": "CA Certificates & Attestations",
    "shortTitle": "Certificates",
    "icon": "fa-certificate",
    "iconEmoji": "🏅",
    "category": "Certificates",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Turnover, net worth, export and other certificates issued and signed by a practising Chartered Accountant.",
    "overview": "Sakshi Yadav & Co. issues all types of professional certificates required for bank loans, tenders, visa applications, and government schemes — signed by a practising Chartered Accountant (ICAI member).",
    "services": [
      "Turnover / Revenue Certificate",
      "Net Worth Certificate",
      "Export / Import Turnover Certificate",
      "Solvency Certificate",
      "Capital / Fund Utilisation Certificate",
      "15CA / 15CB Certificate",
      "Form 15G / 15H"
    ],
    "startingPrice": "₹1,499",
    "timeline": "1-2 working days",
    "whatsappMsg": "Hello, I need a CA Certificate from Sakshi Yadav & Co.",
    "image": "https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 9,
    "slug": "loan-documentation",
    "title": "Loan Documentation & Bank Liaison",
    "shortTitle": "Loan Documentation",
    "icon": "fa-hand-holding-usd",
    "iconEmoji": "🏦",
    "category": "Finance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Complete loan file preparation — home, business, MSME & personal loan documentation.",
    "overview": "Sakshi Yadav & Co. assists with complete loan documentation — from ITR preparation to balance sheet compilation, bank statement analysis, and project report preparation — to help you secure the loan you need.",
    "services": [
      "Home Loan Documentation",
      "Business Loan File Preparation",
      "MSME / Mudra Loan Documentation",
      "Personal Loan ITR Support",
      "Balance Sheet & P&L for Loans",
      "Bank Statement Analysis & Certification"
    ],
    "startingPrice": "₹1,999",
    "timeline": "2-4 working days",
    "whatsappMsg": "Hello, I need Loan Documentation assistance from Sakshi Yadav & Co.",
    "image": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 10,
    "slug": "fno-capital-gain",
    "title": "F&O / Capital Gain Tax",
    "shortTitle": "F&O & Capital Gain",
    "icon": "fa-chart-line",
    "iconEmoji": "📉",
    "category": "Tax Filing",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Specialised ITR filing for F&O traders, equity investors & capital gain computation.",
    "overview": "Sakshi Yadav & Co. handles complex ITR filings for F&O traders and investors — computing turnover, setting off losses, claiming expenses, and ensuring full tax compliance for stock market participants.",
    "services": [
      "F&O Turnover Computation",
      "ITR-3 Filing for F&O Traders",
      "Long-Term & Short-Term Capital Gains",
      "Crypto / Virtual Digital Asset Tax",
      "Loss Set-Off & Carry Forward",
      "P&L from Broker Reports"
    ],
    "startingPrice": "₹2,499",
    "timeline": "2-4 working days",
    "whatsappMsg": "Hello, I need F&O / Capital Gain Tax filing from Sakshi Yadav & Co.",
    "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80&auto=format&fit=crop"
  }
]

// ─── PARENT SERVICE CATEGORIES (12 parent cards + subcategories & pricing) ──
// Used in the main Services page with expandable subcategory accordions.
// Prices shown as "Starting from ₹XXX" — final quote depends on scope / complexity.
// Govt fees (if any) are charged at actuals, separately.
export const PARENT_SERVICES = [
  {
    id: 'gst',
    page: '/services/gst-services',
    title: 'GST Services',
    shortTitle: 'GST',
    emoji: '🧾',
    icon: 'ri-receipt-line',
    startingPrice: '₹499',
    badge: 'Most Popular',
    isPopular: true,
    category: 'GST',
    shortDesc: 'Complete GST compliance — new registration, return filing, amendments & notices handled by experts.',
    whatsappMsg: 'Hello, I need GST services from Sakshi Yadav & Co. Please guide me.',
    subcategories: [
      { name: 'New GST Registration', price: 'Starting from ₹499', popular: true },
      { name: 'GSTR-1 Monthly / Quarterly Filing', price: 'Starting from ₹499/month' },
      { name: 'GSTR-3B Return Filing', price: 'Starting from ₹499/month' },
      { name: 'GSTR-9 Annual Return', price: 'Starting from ₹1,999' },
      { name: 'GSTR-9C Reconciliation Statement', price: 'Starting from ₹3,499' },
      { name: 'GST Cancellation / Surrender', price: 'Starting from ₹999' },
      { name: 'GST Amendment (Core / Non-Core)', price: 'Starting from ₹699' },
      { name: 'LUT Application (Export)', price: 'Starting from ₹999' },
      { name: 'GST Notice / Demand Reply', price: 'Starting from ₹1,999' },
      { name: 'GST Refund Application', price: 'Starting from ₹2,499' },
    ]
  },
  {
    id: 'itr',
    page: '/services/income-tax',
    title: 'Income Tax Return (ITR)',
    shortTitle: 'ITR',
    emoji: '💰',
    icon: 'ri-file-chart-line',
    startingPrice: '₹499',
    badge: 'High Demand',
    isPopular: true,
    category: 'ITR',
    shortDesc: 'Accurate ITR filing for salaried, business, professionals & NRIs with maximum deductions.',
    whatsappMsg: 'Hello, I need ITR filing services from Sakshi Yadav & Co.',
    subcategories: [
      { name: 'ITR-1 — Salaried / Pension', price: 'Starting from ₹499', popular: true },
      { name: 'ITR-2 — Capital Gains / HUF / NRI', price: 'Starting from ₹999' },
      { name: 'ITR-3 — Business / Profession / F&O', price: 'Starting from ₹1,499' },
      { name: 'ITR-4 (Presumptive) — Freelancers & Small Business', price: 'Starting from ₹799' },
      { name: 'Updated Return (ITR-U) — Old Pending Years', price: 'Starting from ₹1,499' },
      { name: 'NRI Income Tax Return Filing', price: 'Starting from ₹2,499' },
      { name: 'Income Tax Notice Reply & Assessment', price: 'Starting from ₹2,999' },
      { name: 'Tax Computation & Planning', price: 'Starting from ₹999' },
      { name: 'Advance Tax Computation', price: 'Starting from ₹799' },
      { name: 'AIS / 26AS Reconciliation', price: 'Starting from ₹699' },
    ]
  },
  {
    id: 'tds',
    page: '/services/tds-compliance',
    title: 'TDS Services',
    shortTitle: 'TDS',
    emoji: '📊',
    icon: 'ri-percent-line',
    startingPrice: '₹999',
    badge: null,
    isPopular: false,
    category: 'TDS',
    shortDesc: 'Quarterly TDS / TCS return filing, Form 16 generation & TDS notice resolution.',
    whatsappMsg: 'Hello, I need TDS return filing services from Sakshi Yadav & Co.',
    subcategories: [
      { name: 'TAN Registration (New)', price: 'Starting from ₹999' },
      { name: '24Q — Salary TDS Return', price: 'Starting from ₹999/quarter', popular: true },
      { name: '26Q — Non-Salary TDS Return', price: 'Starting from ₹999/quarter' },
      { name: '27EQ — TCS Return', price: 'Starting from ₹999/quarter' },
      { name: 'Form 16 / 16A Generation & Issuance', price: 'Starting from ₹499' },
      { name: 'TDS Default / Short Deduction Rectification', price: 'Starting from ₹1,499' },
      { name: 'TDS Refund Claim (Form 26B)', price: 'Starting from ₹999' },
      { name: 'Lower TDS Deduction Certificate (Sec 197)', price: 'Starting from ₹1,999' },
      { name: '15CA / 15CB for Foreign Remittances', price: 'Starting from ₹1,999' },
      { name: 'TDS Notice & Demand Reply', price: 'Starting from ₹2,499' },
    ]
  },
  {
    id: 'legal',
    title: 'Legal Services',
    shortTitle: 'Legal',
    emoji: '⚖️',
    icon: 'ri-scales-3-line',
    startingPrice: '₹4,999',
    badge: 'Expert Panel',
    isPopular: false,
    category: 'Legal',
    shortDesc: 'Litigation support, appeal filing, demand notice replies & tax dispute resolution.',
    whatsappMsg: 'Hello, I need legal / litigation assistance from Sakshi Yadav & Co.',
    subcategories: [
      { name: 'Income Tax Litigation & Representation', price: 'Starting from ₹4,999', popular: true },
      { name: 'GST Appeal Filing', price: 'Starting from ₹4,999' },
      { name: 'CIT(A) Appeal Preparation', price: 'Starting from ₹5,999' },
      { name: 'ITAT (Tribunal) Appeal', price: 'Starting from ₹9,999' },
      { name: 'Demand Notice Reply (Income Tax)', price: 'Starting from ₹4,999' },
      { name: 'Demand Notice Reply (GST)', price: 'Starting from ₹4,999' },
      { name: 'Scrutiny Assessment Response', price: 'Starting from ₹6,999' },
      { name: 'Writ Petition / High Court Matter', price: 'On Consultation' },
      { name: 'Compounding Application', price: 'Starting from ₹4,999' },
      { name: 'Stay Application — Tax Recovery', price: 'Starting from ₹4,999' },
    ]
  },
  {
    id: 'pf-esic',
    title: 'PF & ESIC',
    shortTitle: 'PF / ESIC',
    emoji: '🛡️',
    icon: 'ri-shield-user-line',
    startingPrice: '₹1,999',
    badge: null,
    isPopular: false,
    category: 'PF / ESIC',
    shortDesc: 'PF & ESIC registration, monthly challan, returns & employee compliance management.',
    whatsappMsg: 'Hello, I need PF / ESIC registration or compliance services from Sakshi Yadav & Co.',
    subcategories: [
      { name: 'PF (EPFO) Registration', price: 'Starting from ₹1,999', popular: true },
      { name: 'ESIC Registration', price: 'Starting from ₹1,999' },
      { name: 'Monthly PF Challan Filing', price: 'Starting from ₹999/month' },
      { name: 'Monthly ESIC Challan Filing', price: 'Starting from ₹999/month' },
      { name: 'PF Annual Return (Form 3A / 6A)', price: 'Starting from ₹1,999' },
      { name: 'PF Withdrawal / Transfer Assistance', price: 'Starting from ₹999' },
      { name: 'UAN Activation & KYC Update', price: 'Starting from ₹499' },
      { name: 'PF / ESIC Inspection Support', price: 'Starting from ₹2,499' },
      { name: 'PF Arrears Computation & Payment', price: 'Starting from ₹1,999' },
      { name: 'ESIC IP Number & Card Assistance', price: 'Starting from ₹499' },
    ]
  },
  {
    id: 'trademark',
    title: 'Trade Mark',
    shortTitle: 'Trade Mark',
    emoji: '™️',
    icon: 'ri-service-line',
    startingPrice: '₹999',
    badge: 'Govt Fees Extra',
    isPopular: false,
    category: 'Trade Mark',
    shortDesc: 'Trademark registration, objection reply, copyright & design protection — protect your brand.',
    whatsappMsg: 'Hello, I need trademark registration services from Sakshi Yadav & Co.',
    subcategories: [
      { name: 'Trademark Registration (1 Class)', price: 'Starting from ₹999 + Govt Fee', popular: true },
      { name: 'Trademark Search & Availability Report', price: 'Starting from ₹499' },
      { name: 'Trademark Objection Reply', price: 'Starting from ₹2,999' },
      { name: 'Trademark Renewal', price: 'Starting from ₹999 + Govt Fee' },
      { name: 'Trademark Assignment / Transfer', price: 'Starting from ₹2,499' },
      { name: 'Copyright Registration', price: 'Starting from ₹1,999 + Govt Fee' },
      { name: 'Design Registration', price: 'Starting from ₹1,999 + Govt Fee' },
      { name: 'Geographical Indication (GI Tag)', price: 'On Consultation' },
      { name: 'Logo / Brand Protection Advisory', price: 'Starting from ₹999' },
    ]
  },
  {
    id: 'incorporation',
    page: '/services/business-registration',
    title: 'Incorporation & Registration',
    shortTitle: 'Incorporation',
    emoji: '🏢',
    icon: 'ri-building-4-line',
    startingPrice: '₹999',
    badge: 'High Demand',
    isPopular: true,
    category: 'Incorporation',
    shortDesc: 'Company, LLP, OPC, Section 8, Partnership & Proprietorship — complete incorporation support.',
    whatsappMsg: 'Hello, I want to incorporate a company or register a business with Sakshi Yadav & Co.',
    subcategories: [
      { name: 'Private Limited Company (Pvt Ltd)', price: 'Starting from ₹999 + Govt Fee', popular: true },
      { name: 'Limited Liability Partnership (LLP)', price: 'Starting from ₹999 + Govt Fee' },
      { name: 'One Person Company (OPC)', price: 'Starting from ₹999 + Govt Fee' },
      { name: 'Section 8 Company (NGO)', price: 'Starting from ₹4,999 + Govt Fee' },
      { name: 'Partnership Firm Registration', price: 'Starting from ₹999' },
      { name: 'Sole Proprietorship Registration', price: 'Starting from ₹999' },
      { name: 'Producer Company Registration', price: 'Starting from ₹7,999 + Govt Fee' },
      { name: 'Nidhi Company Registration', price: 'Starting from ₹9,999 + Govt Fee' },
      { name: 'DSC (Digital Signature Certificate)', price: 'Starting from ₹999' },
      { name: 'DIN (Director Identification Number)', price: 'Starting from ₹499' },
    ]
  },
  {
    id: 'mca',
    page: '/services/roc-compliance',
    title: 'MCA / ROC Compliance',
    shortTitle: 'MCA',
    emoji: '🏛️',
    icon: 'ri-government-line',
    startingPrice: '₹499',
    badge: null,
    isPopular: false,
    category: 'MCA',
    shortDesc: 'Annual filings, board minutes, director changes & all MCA / ROC compliance for companies & LLPs.',
    whatsappMsg: 'Hello, I need MCA / ROC compliance services from Sakshi Yadav & Co.',
    subcategories: [
      { name: 'AOC-4 — Annual Financial Statement Filing', price: 'Starting from ₹499', popular: true },
      { name: 'MGT-7 / MGT-7A — Annual Return Filing', price: 'Starting from ₹499' },
      { name: 'LLP Form 8 — Statement of Accounts', price: 'Starting from ₹499' },
      { name: 'LLP Form 11 — Annual Return', price: 'Starting from ₹499' },
      { name: 'Director Appointment / Resignation (DIR-12)', price: 'Starting from ₹999' },
      { name: 'Change of Registered Office (INC-22)', price: 'Starting from ₹1,499' },
      { name: 'Share Allotment / Transfer (PAS-3 / SH-4)', price: 'Starting from ₹1,499' },
      { name: 'Increase in Authorised Capital (SH-7)', price: 'Starting from ₹1,499' },
      { name: 'Board Meeting Minutes & Resolutions', price: 'Starting from ₹999' },
      { name: 'Company Name Change (INC-24)', price: 'Starting from ₹2,499' },
    ]
  },
  {
    id: 'import-export',
    page: '/services/business-registration',
    title: 'Import Export (IEC)',
    shortTitle: 'Import / Export',
    emoji: '🌏',
    icon: 'ri-ship-line',
    startingPrice: '₹1,999',
    badge: null,
    isPopular: false,
    category: 'Import / Export',
    shortDesc: 'IEC registration, DGFT services, export documentation & foreign trade compliance.',
    whatsappMsg: 'Hello, I need Import Export / IEC services from Sakshi Yadav & Co.',
    subcategories: [
      { name: 'IEC Registration (Import Export Code)', price: 'Starting from ₹1,999 + Govt Fee', popular: true },
      { name: 'IEC Modification / Update', price: 'Starting from ₹999' },
      { name: 'IEC Surrender / Cancellation', price: 'Starting from ₹999' },
      { name: 'RCMC Registration (Export Council)', price: 'Starting from ₹1,999' },
      { name: 'EPCG Licence Application', price: 'On Consultation' },
      { name: 'Advance Authorisation (DFIA)', price: 'On Consultation' },
      { name: 'RODTEP / MEIS Benefit Claims', price: 'Starting from ₹2,499' },
      { name: 'GST LUT for Exporters', price: 'Starting from ₹999' },
      { name: '15CA / 15CB for Import Payments', price: 'Starting from ₹1,999' },
      { name: 'Export Invoice & Shipping Bill Guidance', price: 'Starting from ₹999' },
    ]
  },
  {
    id: 'accounting',
    title: 'Accounting & Bookkeeping',
    shortTitle: 'Accounting',
    emoji: '📒',
    icon: 'ri-book-2-line',
    startingPrice: '₹1,999',
    badge: null,
    isPopular: false,
    category: 'Accounting',
    shortDesc: 'Monthly bookkeeping, P&L, balance sheet preparation & payroll management for businesses.',
    whatsappMsg: 'Hello, I need Accounting & Bookkeeping services from Sakshi Yadav & Co.',
    subcategories: [
      { name: 'Monthly Bookkeeping (Tally / Zoho)', price: 'Starting from ₹1,999/month', popular: true },
      { name: 'Profit & Loss Statement', price: 'Starting from ₹1,999' },
      { name: 'Balance Sheet Preparation', price: 'Starting from ₹1,999' },
      { name: 'Payroll Processing & Salary Slips', price: 'Starting from ₹1,999/month' },
      { name: 'Bank Reconciliation Statement (BRS)', price: 'Starting from ₹1,999' },
      { name: 'Accounts Receivable / Payable Management', price: 'Starting from ₹1,999/month' },
      { name: 'Stock / Inventory Accounting', price: 'Starting from ₹1,999/month' },
      { name: 'Fixed Asset Register Maintenance', price: 'Starting from ₹1,999' },
      { name: 'Annual Accounts Finalization', price: 'Starting from ₹2,999' },
      { name: 'MIS Reports & Cash Flow Statements', price: 'Starting from ₹1,999' },
    ]
  },
  {
    id: 'msme',
    page: '/services/business-registration',
    title: 'MSME / Udyam Registration',
    shortTitle: 'MSME',
    emoji: '🏭',
    icon: 'ri-store-3-line',
    startingPrice: '₹999',
    badge: null,
    isPopular: false,
    category: 'MSME',
    shortDesc: 'MSME / Udyam registration, update & government scheme assistance for small businesses.',
    whatsappMsg: 'Hello, I need MSME / Udyam registration from Sakshi Yadav & Co.',
    subcategories: [
      { name: 'New Udyam Registration', price: 'Starting from ₹999', popular: true },
      { name: 'Udyam Update / Amendment', price: 'Starting from ₹499' },
      { name: 'Udyam Certificate Download', price: 'Starting from ₹299' },
      { name: 'UAM to Udyam Migration', price: 'Starting from ₹499' },
      { name: 'NSIC Registration for Tenders', price: 'Starting from ₹2,999' },
      { name: 'GeM Portal Registration (Govt Marketplace)', price: 'Starting from ₹1,999' },
      { name: 'CGTMSE Credit Guarantee Assistance', price: 'Starting from ₹1,999' },
      { name: 'Mudra Loan Application Support', price: 'Starting from ₹1,999' },
      { name: 'PMEGP Loan Application', price: 'Starting from ₹2,499' },
      { name: 'MSME Samadhaan (Delayed Payment Claim)', price: 'Starting from ₹999' },
    ]
  },
  {
    id: 'fssai',
    page: '/services/business-registration',
    title: 'FSSAI Food Licensing',
    shortTitle: 'FSSAI',
    emoji: '🍽️',
    icon: 'ri-restaurant-line',
    startingPrice: '₹999',
    badge: 'Govt Fees Extra',
    isPopular: false,
    category: 'FSSAI',
    shortDesc: 'FSSAI basic, state & central food licence registration, renewal & modifications.',
    whatsappMsg: 'Hello, I need FSSAI food licence registration from Sakshi Yadav & Co.',
    subcategories: [
      { name: 'FSSAI Basic Registration (Petty Operator)', price: 'Starting from ₹999 + Govt Fee', popular: true },
      { name: 'FSSAI State Licence', price: 'Starting from ₹1,999 + Govt Fee' },
      { name: 'FSSAI Central Licence', price: 'Starting from ₹2,999 + Govt Fee' },
      { name: 'FSSAI Licence Renewal', price: 'Starting from ₹999 + Govt Fee' },
      { name: 'FSSAI Modification / Amendment', price: 'Starting from ₹999 + Govt Fee' },
      { name: 'FSSAI Annual Return (Form D1)', price: 'Starting from ₹999' },
      { name: 'FSSAI Petitioner / Appeal Filing', price: 'Starting from ₹1,999' },
      { name: 'Food Safety Compliance Advisory', price: 'Starting from ₹1,499' },
      { name: 'Product Approval & Labelling Guidance', price: 'Starting from ₹1,999' },
    ]
  },
]

// ─── WHY CHOOSE US ────────────────────────────────────────────
export const WHY_CHOOSE_US = [
  { icon: 'ri-shield-star-line', title: 'Chartered Accountant-Led', desc: 'Every engagement is reviewed and signed off by CA Sakshi Yadav, a member of the Institute of Chartered Accountants of India.' },
  { icon: 'ri-scales-3-line', title: 'Independent & Ethical', desc: 'Advice governed by the ICAI Code of Ethics — objective, confidential and in your long-term interest.' },
  { icon: 'ri-time-line', title: 'Deadline Discipline', desc: 'A statutory calendar for every client, so returns, audits and filings are completed well before due dates.' },
  { icon: 'ri-lock-2-line', title: 'Strict Confidentiality', desc: 'Your financial records are handled under professional secrecy obligations, with controlled document access.' },
  { icon: 'ri-map-pin-2-line', title: 'Noida Office, Pan-India Reach', desc: 'Meet us at Sector 18, Noida — or work with us securely online from anywhere in India.' },
  { icon: 'ri-chat-check-line', title: 'Direct Partner Access', desc: 'Speak with the person who actually handles your file — no call centres, no hand-offs.' },
]

// ─── PROCESS STEPS ───────────────────────────────────────────
export const PROCESS_STEPS = [
  { step: '01', icon: 'ri-chat-3-line', title: 'Discuss Your Requirement', desc: 'Call, WhatsApp or write to us. We understand the facts and the deadline involved.' },
  { step: '02', icon: 'ri-file-list-3-line', title: 'Document Checklist', desc: 'You receive a precise checklist and share documents securely, online or at our office.' },
  { step: '03', icon: 'ri-search-eye-line', title: 'Review & Execution', desc: 'We prepare, review and file — with a Chartered Accountant’s sign-off on every output.' },
  { step: '04', icon: 'ri-verified-badge-line', title: 'Delivery & Follow-through', desc: 'You receive acknowledgments and certificates, with reminders for every future due date.' },
]

// ─── HERO ───────────────────────────────────────────────────
export const HERO = {
  eyebrow: 'Chartered Accountants · Sector 18, Noida',
  heading: 'Clarity in tax.',
  headingAccent: 'Confidence in compliance.',
  description:
    'Sakshi Yadav & Co. advises individuals, founders and businesses on income tax, GST, audit and corporate compliance — with the rigour of a Chartered Accountant and the responsiveness of a partner you can reach directly.',
  image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80&auto=format&fit=crop',
}

// ─── PRACTICE TICKER ─────────────────────────────────────────
export const MARQUEE_ITEMS = [
  'Income Tax', 'GST Advisory', 'Tax Audit', 'Statutory Audit', 'TDS Compliance',
  'Company Incorporation', 'ROC Compliance', 'Project Reports & CMA', 'CA Certificates',
  'Accounting & Bookkeeping', 'Trademark', 'MSME / Udyam', 'FEMA & 15CA/CB', 'Tax Litigation',
]

// ─── ABOUT SECTION ────────────────────────────────────────────
export const ABOUT = {
  title: 'About Sakshi Yadav & Co.',
  subtitle: 'A Chartered Accountancy practice built on precision, ethics and accessibility',
  paragraphs: [
    'Sakshi Yadav & Co. is a Chartered Accountancy firm based in Sector 18, Noida. Founded by CA Sakshi Yadav, a member of the Institute of Chartered Accountants of India (ICAI), the firm serves salaried professionals, entrepreneurs, startups, private companies, LLPs, NGOs and NRIs.',
    'Our practice spans direct and indirect taxation, audit and assurance, company law compliance and business advisory. Every assignment is handled with the professional standards the ICAI expects — careful documentation, independent judgment and complete confidentiality.',
  ],
  highlights: [
    'Led by a practising Chartered Accountant (ICAI member)',
    'Office at Ansal Fortune, Sector 18, Noida',
    'In-person and secure online engagements across India',
    'Direct access to the partner handling your work',
    'Proactive compliance calendar for every client',
    'GST-compliant invoicing for every engagement',
  ],
  clientCategories: [
    'Salaried Professionals', 'Freelancers & Consultants', 'Traders & Retailers',
    'Manufacturers', 'Importers & Exporters', 'Doctors & Professionals',
    'Startups & Founders', 'Private Limited Companies', 'LLPs & Partnerships',
    'NGOs, Trusts & Societies', 'NRIs', 'Real Estate & Builders',
  ],
  image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80&auto=format&fit=crop',
}

// ─── SERVICE CATEGORIES (contact form dropdown) ──────────────
export const SERVICE_CATEGORIES = PARENT_SERVICES.map((s) => s.title)

// ─── FAQS (home page + FAQPage schema) ─────────────────────────
export const FAQS = [
  {
    id: 1,
    q: 'Who is Sakshi Yadav & Co.?',
    a: 'Sakshi Yadav & Co. is a firm of Chartered Accountants located at SF-57, Ansal Fortune, Sector 18, Noida (Uttar Pradesh 201301). The firm is led by CA Sakshi Yadav, a member of the Institute of Chartered Accountants of India (ICAI), and provides income tax, GST, TDS, audit, company incorporation, ROC compliance and advisory services.'
  },
  {
    id: 2,
    q: 'Where is Sakshi Yadav & Co. located and what are the office hours?',
    a: 'Our office is at SF-57, Ansal Fortune, Sector 18, Noida, Uttar Pradesh 201301 — close to the Noida Sector 18 metro station. We are open Monday to Saturday, 10:00 AM to 7:00 PM. Clients outside Noida and Delhi NCR can work with us entirely online.'
  },
  {
    id: 3,
    q: 'How can I contact Sakshi Yadav & Co.?',
    a: 'Call or WhatsApp +91 87962 15611, or email contact@sakshiyadavandco.in. You can also use the enquiry form on the Contact page, and we will respond within one working day.'
  },
  {
    id: 4,
    q: 'Do you work with clients outside Noida?',
    a: 'Yes. While our office is in Sector 18, Noida, we serve clients across Delhi NCR and the rest of India. Documents are shared securely online, filings are made on the government portals, and meetings can be held over video call.'
  },
  {
    id: 5,
    q: 'What documents are required for ITR filing?',
    a: 'Typically: PAN, Aadhaar, Form 16 (for salaried individuals), Form 26AS and the Annual Information Statement (AIS), bank statements and interest certificates, investment and insurance proofs if you opt for the old regime, home-loan interest certificate, and capital-gains statements from your broker or mutual fund. Business owners also need their books of account, profit & loss account and balance sheet.'
  },
  {
    id: 6,
    q: 'Is GST registration mandatory for my business?',
    a: 'GST registration is generally mandatory when aggregate annual turnover exceeds ₹40 lakh for suppliers of goods or ₹20 lakh for suppliers of services (₹20 lakh and ₹10 lakh respectively in special category states). Inter-state suppliers of goods, e-commerce sellers and certain other categories must register regardless of turnover. We can assess your position before you apply.'
  },
  {
    id: 7,
    q: 'How long does it take to incorporate a private limited company?',
    a: 'With documents in order, a private limited company is usually incorporated within 7–15 working days through the MCA SPICe+ form, which covers name reservation, DIN, PAN, TAN and the Certificate of Incorporation. Digital Signature Certificates for directors are obtained first.'
  },
  {
    id: 8,
    q: 'Why does the website not list fees?',
    a: 'As members of the ICAI, we follow its Code of Ethics, which restricts Chartered Accountants from advertising fees or soliciting work. Fees depend on the scope and complexity of each assignment, and we share a written fee proposal once we understand your requirement.'
  },
]

// ─── SERVICE-PAGE FAQS (answer-engine optimised, keyed by slug) ──
export const SERVICE_FAQS = {
  'income-tax': [
    { q: 'Who must file an income tax return in India?', a: 'You must file if your gross total income exceeds the basic exemption limit — ₹4 lakh under the new regime for FY 2025-26, or ₹2.5 lakh under the old regime (higher for senior citizens). Filing is also required if you hold foreign assets, deposited over ₹1 crore in current accounts, spent over ₹2 lakh on foreign travel, or want to carry forward losses.' },
    { q: 'What is the due date for filing ITR?', a: 'For individuals not liable to audit, the usual due date is 31 July following the financial year (it is sometimes extended by CBDT). Taxpayers requiring a tax audit file by 31 October. A belated or revised return can be filed until 31 December.' },
    { q: 'Which ITR form should I file?', a: 'ITR-1 suits resident individuals with salary, one house property and interest income up to ₹50 lakh. ITR-2 covers capital gains or foreign income without business income. ITR-3 is for business or professional income, including F&O trading. ITR-4 is for presumptive income under sections 44AD, 44ADA or 44AE.' },
  ],
  'gst-services': [
    { q: 'How long does GST registration take?', a: 'A GSTIN is usually granted within 3–7 working days of filing a complete application on the GST portal, subject to Aadhaar authentication and any physical verification ordered by the department.' },
    { q: 'What is the penalty for filing GSTR-3B late?', a: 'A late fee of ₹50 per day (₹25 CGST + ₹25 SGST) applies, capped between ₹2,000 and ₹10,000 per return depending on turnover; for nil returns it is ₹20 per day, capped at ₹500. Interest at 18% per annum is charged on unpaid tax.' },
    { q: 'Can I claim input tax credit on all purchases?', a: 'Only on goods and services used in the course of business, supported by a valid tax invoice, reflected in your GSTR-2B, and where the supplier has paid the tax. Blocked credits under section 17(5) — such as most motor vehicles and food and beverages — are not available.' },
  ],
  'tax-audit': [
    { q: 'When is a tax audit under section 44AB required?', a: 'A tax audit is required when business turnover exceeds ₹1 crore (₹10 crore if cash receipts and payments are each within 5% of the total), when professional receipts exceed ₹50 lakh, or when presumptive-taxation cases declare lower profits than prescribed.' },
    { q: 'What is the due date for the tax audit report?', a: 'The tax audit report in Form 3CA/3CB with Form 3CD is ordinarily due by 30 September following the end of the financial year, one month before the return due date of 31 October.' },
    { q: 'Who can conduct a tax audit?', a: 'Only a practising Chartered Accountant holding a Certificate of Practice from the ICAI can conduct a tax audit and sign the audit report.' },
  ],
  'tds-compliance': [
    { q: 'What are the due dates for TDS returns?', a: 'Quarterly TDS returns are due on 31 July, 31 October and 31 January for the first three quarters, and 31 May for the fourth quarter. TDS deducted must be deposited by the 7th of the following month (30 April for March).' },
    { q: 'What is the TDS rate on professional fees?', a: 'Under section 194J, TDS is 10% on fees for professional services and 2% on fees for technical services, where payments to a person exceed ₹50,000 in a financial year (threshold applicable from 1 April 2025).' },
    { q: 'What happens if a TDS return is filed late?', a: 'A fee of ₹200 per day applies under section 234E until the return is filed, capped at the TDS amount. A penalty of ₹10,000 to ₹1 lakh may also apply under section 271H for delays beyond one year or incorrect filings.' },
  ],
  'business-registration': [
    { q: 'Which business structure is right for me?', a: 'A proprietorship is simplest for a single owner; an LLP offers limited liability with lighter compliance; a private limited company suits businesses planning to raise capital or scale. We advise based on liability, tax, funding plans and compliance cost.' },
    { q: 'What documents are needed to register a company?', a: 'PAN and Aadhaar of all directors and shareholders, address proof, passport-size photographs, proof of the registered office (rent agreement or ownership document with a recent utility bill) and a no-objection certificate from the property owner.' },
    { q: 'Is Udyam (MSME) registration free?', a: 'Yes. Udyam registration on the government portal carries no fee. It needs only Aadhaar and PAN, and gives access to priority-sector lending, delayed-payment protection and government scheme benefits.' },
  ],
  'roc-compliance': [
    { q: 'What annual filings does a private limited company make with the ROC?', a: 'Every company files its financial statements in Form AOC-4 within 30 days of the AGM and its annual return in Form MGT-7 or MGT-7A within 60 days of the AGM, along with DIR-3 KYC for directors and ADT-1 for auditor appointment.' },
    { q: 'What is the penalty for late ROC filings?', a: 'An additional fee of ₹100 per day of delay applies to each late form, without an upper cap, and prolonged non-filing can lead to the company being struck off and directors disqualified.' },
    { q: 'What are the annual filings for an LLP?', a: 'An LLP files Form 11 (annual return) by 30 May and Form 8 (statement of accounts and solvency) by 30 October each year.' },
  ],
  'project-reports': [
    { q: 'What is included in a project report for a bank loan?', a: 'A project report covers the business profile, cost of the project and means of finance, projected profitability, cash flows and balance sheets, break-even analysis, debt-service coverage ratio and repayment schedule — prepared to the lending bank’s format.' },
    { q: 'What is CMA data?', a: 'Credit Monitoring Arrangement data is a set of financial statements and projections — usually covering past, current and projected years — that banks use to assess working-capital limits and term loans.' },
    { q: 'Do you prepare reports for Mudra and PMEGP loans?', a: 'Yes. We prepare project reports for Mudra, PMEGP, CGTMSE-backed loans and SIDBI schemes, aligned with the scheme’s eligibility criteria.' },
  ],
  'ca-certificates': [
    { q: 'Which certificates can a Chartered Accountant issue?', a: 'Common certificates include net worth, turnover, solvency, fund-utilisation, Form 15CB for foreign remittances, and certificates required for visas, tenders, bank loans and regulatory filings.' },
    { q: 'Is a CA certificate UDIN-verified?', a: 'Yes. Every certificate we sign carries a Unique Document Identification Number (UDIN) generated on the ICAI portal, which any third party can verify online.' },
    { q: 'How quickly can a net worth certificate be issued?', a: 'Once supporting documents such as asset valuations, bank statements and ITRs are received, a net worth certificate is usually issued within 1–2 working days.' },
  ],
  'loan-documentation': [
    { q: 'What financial documents do banks ask for in a business loan?', a: 'Typically the last two or three years’ ITRs with computation, audited or CA-certified financial statements, GST returns, bank statements for 6–12 months, a project report or CMA data, and KYC of the business and promoters.' },
    { q: 'Can a CA certify my balance sheet for a loan?', a: 'Yes. We prepare and certify financial statements and provisional figures for loan applications, with UDIN for bank verification.' },
    { q: 'Do you help with home loan income documentation?', a: 'Yes. For salaried and self-employed applicants, we prepare income computations, ITRs and supporting statements that lenders require.' },
  ],
  'fno-capital-gain': [
    { q: 'Is F&O trading income treated as business income?', a: 'Yes. Profit or loss from futures and options is non-speculative business income, reported in ITR-3. Turnover is computed as the aggregate of absolute profits and losses, which decides whether a tax audit is required.' },
    { q: 'How are capital gains on listed shares taxed?', a: 'For transfers on or after 23 July 2024, short-term gains on listed equity are taxed at 20% and long-term gains (held over 12 months) at 12.5% on gains exceeding ₹1.25 lakh in a year.' },
    { q: 'Can I carry forward F&O losses?', a: 'Yes. Non-speculative business losses can be carried forward for eight years and set off against business income, provided the return is filed by the due date.' },
  ],
}

// ─── TEAM ──────────────────────────────────────────────────
export const TEAM = [
  {
    name: 'CA Sakshi Yadav',
    shortName: 'Sakshi Yadav',
    role: 'Founder & Principal',
    qualification: 'Chartered Accountant · Member, ICAI',
    description:
      'Sakshi Yadav is a Chartered Accountant and a member of the Institute of Chartered Accountants of India. She founded Sakshi Yadav & Co. to offer businesses and individuals in Noida and across India the kind of attentive, partner-led advice usually reserved for large firms. Her practice covers direct and indirect taxation, audit and assurance, corporate compliance and business advisory.',
    expertise: ['Direct Tax', 'GST', 'Audit & Assurance', 'Corporate Compliance', 'Business Advisory'],
    // Add her ICAI membership number, LinkedIn URL and portrait when available — empty values are hidden
    membershipNo: '',
    linkedin: '',
    image: '',
  },
];
