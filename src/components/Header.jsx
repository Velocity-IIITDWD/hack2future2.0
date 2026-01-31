import React from 'react';
import { NavLink } from './ui/NavLink.jsx';

const Header = () => (
  <header className="flex justify-between items-center p-5 md:p-[20px_60px] relative z-[100] border-b border-[rgba(0,240,255,0.1)]">
    <div className="flex items-center gap-[15px]">
      <div className="border border-[#00f0ff] p-[8px_12px] font-['Share_Tech_Mono'] text-xs leading-[1.3] text-[#00f0ff]">
        HACK<br />FUTURE
      </div>
      <div className="font-['Share_Tech_Mono'] text-[11px]">
        <div className="text-[rgba(255,255,255,0.5)] text-xs">SYSTEM STATUS</div>
        <div className="text-[#00f0ff] font-semibold">ONLINE // V2.0</div>
      </div>
    </div>
    <nav className="flex gap-[40px] hidden md:flex">
      {[['#about', 'ABOUT'], ['#intel', 'INTEL'], ['#allies', 'ALLIES'], ['#comms', 'COMMS']].map(([href, text]) => (
        <NavLink key={href} href={href}>{text}</NavLink>
      ))}
    </nav>
    <div className="text-right font-['Share_Tech_Mono']">
      <div className="text-[9px] text-[rgba(255,255,255,0.5)] tracking-[1px]">AFFILIATION</div>
      <div className="flex items-center gap-[8px] text-[14px]">
        <span className="w-[20px] h-[20px] border border-[#00f0ff] rounded-full flex items-center justify-center text-[10px]">⬡</span>
        IIIT DHARWAD
      </div>
    </div>
  </header>
);

export default Header;
