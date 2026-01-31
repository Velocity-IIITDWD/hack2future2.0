import React from 'react';

const PrimaryButton = ({ href, children }) => (
  <a 
    href={href}
    className="p-[18px_40px] font-['Orbitron'] text-[13px] font-semibold tracking-[2px] no-underline transition-all relative flex items-center gap-[10px] bg-transparent border border-[#00f0ff] text-[#00f0ff] hover:bg-[rgba(0,240,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(0,240,255,0.3),transparent)] before:opacity-0 hover:before:opacity-100"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
    {children}
  </a>
);

const SecondaryButton = ({ href, children }) => (
  <a 
    href={href}
    className="p-[18px_40px] font-['Orbitron'] text-[13px] font-semibold tracking-[2px] no-underline transition-all relative flex items-center gap-[10px] bg-transparent border border-[rgba(255,255,255,0.2)] border-l-0 text-[rgba(255,255,255,0.5)] hover:border-[rgba(255,255,255,0.4)] hover:text-white md:border-l"
  >
    {children}
  </a>
);

export { PrimaryButton, SecondaryButton };
