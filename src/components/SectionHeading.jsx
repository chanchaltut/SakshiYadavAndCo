import React from 'react';

const SectionHeading = ({ id, eyebrow, title, accent, lede, align = 'left', tone = 'dark', className = '' }) => {
  const center = align === 'center';
  const light = tone === 'light';
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {eyebrow && <p className={`eyebrow ${light ? 'eyebrow-light' : ''} ${center ? 'justify-center' : ''}`}>{eyebrow}</p>}
      <h2 id={id} className={`h-section mt-5 ${light ? '!text-white' : ''}`}>
        {title}
        {accent && <> <em className={`font-medium ${light ? 'text-gold-300' : 'text-gold-600'}`}>{accent}</em></>}
      </h2>
      {lede && <p className={`lede mt-5 ${light ? '!text-ink-200' : ''}`}>{lede}</p>}
    </div>
  );
};

export default SectionHeading;
