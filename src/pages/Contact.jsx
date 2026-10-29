import React, { useState } from 'react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { BRAND, SERVICE_CATEGORIES, whatsappLink, mapsLink } from '../utils/constants';

const EMPTY = { name: '', email: '', phone: '', service: '', message: '' };

const inputClass =
  'w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-navy-800 outline-none transition placeholder:text-navy-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-100';

const Field = ({ label, id, children }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-navy-600">{label}</label>
    {children}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${BRAND.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          service: form.service || 'General enquiry',
          _subject: `Website enquiry from ${form.name} — ${BRAND.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && (!data || String(data.success) === 'true')) {
        setStatus('success');
        setForm(EMPTY);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const channels = [
    { icon: 'ri-phone-line', label: 'Call', value: BRAND.phone, href: `tel:${BRAND.phoneE164}` },
    { icon: 'ri-whatsapp-line', label: 'WhatsApp', value: BRAND.phone, href: whatsappLink(), external: true },
    { icon: 'ri-mail-line', label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: 'ri-time-line', label: 'Office hours', value: BRAND.hours },
  ];

  return (
    <>
      <Seo path="/contact" />
      <PageHeader
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Contact' }]}
        eyebrow="Contact"
        title="Speak with"
        accent="the firm."
        lede="Visit us at Ansal Fortune, Sector 18, Noida, or reach us by phone, WhatsApp or email. Consultations are by appointment."
      />

      <section className="relative z-10 -mt-14 pb-20 sm:-mt-16 sm:pb-24">
        <div className="container-x grid gap-6 lg:grid-cols-12">
          {/* Office card */}
          <aside className="red-gradient relative overflow-hidden rounded-[26px] p-7 text-white shadow-brand sm:p-9 lg:col-span-5">
            <div className="absolute inset-0 dot-bg-light" aria-hidden="true" />
            <div className="relative">
            <p className="eyebrow eyebrow-light">Our office</p>
            <address className="mt-6 not-italic">
              <p className="font-display text-[1.9rem] font-bold leading-tight">{BRAND.legalName}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-white/85">
                {BRAND.address.line1}, {BRAND.address.line2},<br />
                {BRAND.address.city}, {BRAND.address.state} {BRAND.address.pincode}
              </p>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
                Get directions <i className="ri-arrow-right-up-line" aria-hidden="true" />
              </a>
            </address>

            <ul className="mt-8 divide-y divide-white/15 border-t border-white/15">
              {channels.map((c) => (
                <li key={c.label} className="flex items-center gap-4 py-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-brand-500">
                    <i className={c.icon} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="block break-all text-[15px] font-semibold text-white hover:underline">
                        {c.value}
                      </a>
                    ) : (
                      <span className="block text-[15px] font-semibold text-white">{c.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            </div>
          </aside>

          {/* Form */}
          <div className="rounded-[26px] border border-line bg-paper p-7 shadow-lift sm:p-10 lg:col-span-7">
            <h2 className="font-display text-3xl font-bold text-navy-800 sm:text-4xl">Send an enquiry</h2>
            <p className="mt-2 text-sm text-muted">We respond within one working day. Please do not share sensitive financial documents through this form.</p>

            {status === 'success' && (
              <div className="mt-6 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900" role="status">
                <i className="ri-checkbox-circle-fill text-xl text-emerald-600" aria-hidden="true" />
                <p><strong>Thank you.</strong> Your enquiry has reached {BRAND.name}. We will be in touch shortly.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900" role="alert">
                <i className="ri-error-warning-fill text-xl text-amber-600" aria-hidden="true" />
                <p>
                  We could not send your message just now. Please{' '}
                  <a className="font-semibold underline" href={whatsappLink(`Hello ${BRAND.name}, I would like to enquire about: ${form.service || form.message || 'a consultation'}`)} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>{' '}
                  or call {BRAND.phone}.
                </p>
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full name *" id="name">
                <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={onChange} className={inputClass} placeholder="Your name" />
              </Field>
              <Field label="Phone *" id="phone">
                <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" value={form.phone} onChange={onChange} className={inputClass} placeholder="+91" />
              </Field>
              <Field label="Email *" id="email">
                <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={onChange} className={inputClass} placeholder="you@company.com" />
              </Field>
              <Field label="Practice area" id="service">
                <select id="service" name="service" value={form.service} onChange={onChange} className={inputClass}>
                  <option value="">Select an area</option>
                  {SERVICE_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="How can we help? *" id="message">
                  <textarea id="message" name="message" required rows="5" value={form.message} onChange={onChange} className={`${inputClass} resize-none`} placeholder="Briefly describe your requirement and any deadline" />
                </Field>
              </div>
              <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[12px] text-muted">By submitting, you agree to our <a href="/privacy-policy" className="underline underline-offset-2 hover:text-navy-800">Privacy Policy</a>.</p>
                <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-60">
                  {status === 'submitting' ? (
                    <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" /> Sending…</>
                  ) : (
                    <>Send Enquiry <i className="ri-send-plane-line" aria-hidden="true" /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="container-x mt-6">
          <div className="overflow-hidden rounded-[26px] border border-line shadow-soft">
            <iframe
              title={`Map — ${BRAND.name}, ${BRAND.addressText}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapsQuery)}&output=embed`}
              className="h-[380px] w-full grayscale-[35%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
