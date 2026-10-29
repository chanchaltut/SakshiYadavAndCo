import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { BRAND } from '../utils/constants';

// ICAI disclaimer — Chartered Accountants may not advertise or solicit work,
// so visitors confirm they are seeking information of their own accord.
const STORAGE_KEY = 'syc_disclaimer_v1';

const hasAgreed = () => {
  try { return localStorage.getItem(STORAGE_KEY) === '1'; } catch { return false; }
};

const DisclaimerModal = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const agreeRef = useRef(null);

  useEffect(() => {
    if (hasAgreed()) return undefined;
    const t = setTimeout(() => {
      setShow(true);
      requestAnimationFrame(() => setVisible(true));
    }, 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) return undefined;
    document.body.style.overflow = 'hidden';
    agreeRef.current?.focus();
    return () => { document.body.style.overflow = ''; };
  }, [show]);

  const agree = () => {
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch { /* storage unavailable — show again next visit */ }
    setVisible(false);
    setTimeout(() => setShow(false), 300);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-end justify-center p-0 transition-opacity duration-300 sm:items-center sm:p-6 ${visible ? 'opacity-100' : 'opacity-0'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-body"
    >
      <div className="absolute inset-0 bg-navy-950/75 backdrop-blur-sm" aria-hidden="true" />

      <div
        className={`relative flex max-h-[88vh] w-full max-w-xl flex-col overflow-hidden rounded-t-[26px] bg-paper shadow-lift transition-transform duration-300 sm:rounded-[26px] ${
          visible ? 'translate-y-0' : 'translate-y-6'
        }`}
      >
        <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600" aria-hidden="true" />
        <div className="border-b border-line px-6 py-5 sm:px-8">
          <Logo compact />
        </div>

        <div id="disclaimer-body" className="thin-scroll overflow-y-auto px-6 py-6 sm:px-8">
          <h2 id="disclaimer-title" className="font-display text-2xl font-extrabold text-navy-800 sm:text-3xl">Disclaimer</h2>
          <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-navy-600">
            <p>
              As per the guidelines of the Institute of Chartered Accountants of India (ICAI), Chartered Accountants are not permitted to solicit work or advertise. By clicking <strong className="text-navy-800">“I Agree”</strong> below, you acknowledge that:
            </p>
            <ul className="list-disc space-y-2 pl-5 marker:text-brand-500">
              <li>there has been no advertisement, personal communication, solicitation, invitation or inducement of any sort from {BRAND.name} or any of its members to solicit work through this website;</li>
              <li>you wish to obtain information about {BRAND.name} for your own information and use;</li>
              <li>the information is provided only on your specific request, and any information obtained or material downloaded from this website is entirely at your volition;</li>
              <li>use of this website does not create a client relationship with the firm, and the content is not professional advice.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-line bg-ivory px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-[12px] text-muted">You can review this anytime under Terms &amp; Disclaimer.</p>
          <button ref={agreeRef} type="button" onClick={agree} className="btn-primary sm:!px-8">
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
