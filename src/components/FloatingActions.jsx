import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { BRAND, whatsappLink } from '../utils/constants';

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="no-print fixed bottom-5 right-4 z-70 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7 pb-safe">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-navy-700 shadow-soft transition-all duration-300 hover:border-brand-500 hover:bg-brand-500 hover:text-white ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <i className="ri-arrow-up-line text-lg" aria-hidden="true" />
      </button>

      <a
        href={`tel:${BRAND.phoneE164}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-brand pulse-red transition-transform hover:-translate-y-0.5 sm:hidden"
        aria-label={`Call ${BRAND.phone}`}
      >
        <i className="ri-phone-fill text-xl" aria-hidden="true" />
      </a>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 items-center gap-2.5 rounded-full bg-whatsapp pl-3.5 pr-3.5 text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.7)] transition-all duration-500 hover:-translate-y-0.5 sm:h-14 sm:pl-4 sm:pr-5"
        aria-label="Chat with the firm on WhatsApp"
      >
        <FaWhatsapp className="text-[22px] sm:text-[24px]" aria-hidden="true" />
        <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingActions;
