import React from 'react';

const SponsorHeader = () => (
  <div className="flex justify-between items-center p-[15px_20px] border-b border-[rgba(0,240,255,0.3)] font-['Share_Tech_Mono'] text-[12px] text-[#00f0ff] tracking-[1px]">
    <span>SPONSOR_MODULE.EXE</span>
    <div className="flex gap-[6px]">
      <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f56]"></span>
      <span className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]"></span>
      <span className="w-[10px] h-[10px] rounded-full bg-[#27ca40]"></span>
    </div>
  </div>
);

const SponsorItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-[15px] p-[15px] border border-[rgba(255,255,255,0.1)] mb-[10px] transition-all hover:border-[rgba(0,240,255,0.3)] hover:bg-[rgba(0,240,255,0.05)]">
    <div className="w-[40px] h-[40px] border border-[rgba(0,240,255,0.3)] flex items-center justify-center text-[#00f0ff] text-[18px]">{icon}</div>
    <div>
      <h4 className="font-['Orbitron'] text-[14px] font-semibold mb-[4px]">{title}</h4>
      <span className="font-['Share_Tech_Mono'] text-[10px] text-[rgba(255,255,255,0.5)] tracking-[1px]">{subtitle}</span>
    </div>
  </div>
);

const MissionCard = ({ icon, id, title, content }) => (
  <div className="bg-[#0d1318] border border-[rgba(0,240,255,0.3)] p-[40px] relative before:content-[''] before:absolute before:top-[-1px] before:left-[20px] before:right-[20px] before:h-[2px] before:bg-[#00f0ff]">
    <div className="flex justify-between items-start mb-[30px]">
      <div className="w-[50px] h-[50px] border border-[rgba(0,240,255,0.3)] flex items-center justify-center text-[#00f0ff] text-[24px]">{icon}</div>
      <div className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[2px]">ID: {id}</div>
    </div>
    <h3 className="font-['Orbitron'] text-[22px] font-semibold mb-[20px] tracking-[2px]">{title}</h3>
    <p className="text-[15px] leading-[1.7] text-[rgba(255,255,255,0.5)]">{content}</p>
  </div>
);

const ContactCard = ({ role, name, id, smallName }) => (
  <div className="bg-[#0d1318] border-l-[2px] border-[#00f0ff] p-[25px_30px]">
    <div className="font-['Share_Tech_Mono'] text-[11px] text-[#00f0ff] tracking-[2px] mb-[10px]">{role}</div>
    <div className={`font-['Orbitron'] ${smallName ? 'text-[18px]' : 'text-[28px]'} font-semibold mb-[8px]`}>{name}</div>
    {id && <div className="font-['Share_Tech_Mono'] text-[13px] text-[rgba(255,255,255,0.5)] tracking-[1px]">COMM-ID: {id}</div>}
  </div>
);

export { SponsorHeader, SponsorItem, MissionCard, ContactCard };
