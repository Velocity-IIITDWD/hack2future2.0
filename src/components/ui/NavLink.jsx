import React from 'react';

const NavLink = ({ href, children }) => (
  <a 
    href={href}
    className="text-[rgba(255,255,255,0.5)] no-underline font-['Share_Tech_Mono'] text-[13px] tracking-[2px] transition-all relative hover:text-[#00f0ff]
     before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[4px] before:h-[4px] before:border before:border-[rgba(255,255,255,0.5)] before:left-[-12px] before:border-r-0 
     after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[4px] after:border after:border-[rgba(255,255,255,0.5)] after:right-[-12px] after:border-l-0 
     hover:before:border-[#00f0ff] hover:after:border-[#00f0ff]"
  >
    {children}
  </a>
);

export { NavLink };
