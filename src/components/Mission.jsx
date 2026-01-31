import React from 'react';
import { MissionCard } from './ui/Card.jsx';

const SectionHeader = () => (
  <div className="flex items-center gap-[30px] mb-[60px]">
    <h2 className="font-['Orbitron'] text-[32px] md:text-[48px] font-bold tracking-[5px]">
      MISSION <span className="text-[#00f0ff] font-normal">BRIEF</span>
    </h2>
    <div className="flex-1 h-[2px] bg-gradient-to-r from-[#00f0ff] to-transparent"></div>
  </div>
);

const MetricItem = ({ value, label }) => (
  <div>
    <div className="font-['Orbitron'] text-[36px] font-black text-white mb-[5px]">{value}</div>
    <div className="font-['Share_Tech_Mono'] text-[10px] text-[rgba(255,255,255,0.5)] tracking-[2px]">{label}</div>
  </div>
);

const MetricsCard = () => (
  <div className="bg-[#0d1318] border border-[rgba(0,240,255,0.3)] p-[40px] relative before:content-[''] before:absolute before:top-[-1px] before:left-[20px] before:right-[20px] before:h-[2px] before:bg-[#00f0ff]">
    <div className="flex justify-between items-start mb-[30px]">
      <div className="w-[50px] h-[50px] border border-[rgba(0,240,255,0.3)] flex items-center justify-center text-[#00f0ff] text-[24px]">√</div>
      <div className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[2px]">ID: STATS</div>
    </div>
    <h3 className="font-['Orbitron'] text-[22px] font-semibold mb-[20px] tracking-[2px]">OPERATIONAL METRICS</h3>
    <div className="grid md:grid-cols-2 gap-[30px] mt-[30px]">
      <MetricItem value="2000+" label="EST. REACH" />
      <MetricItem value="1000+" label="REGISTRATIONS" />
      <MetricItem value="36H" label="DURATION" />
      <MetricItem value="30" label="SQUADS" />
    </div>
  </div>
);

const Mission = () => (
  <section id="about" className="p-[60px_24px] md:p-[100px_60px] relative">
    <SectionHeader title="MISSION BRIEF" />
    
    <div className="grid md:grid-cols-2 gap-[40px]">
      <MissionCard 
        icon="◎" 
        id="PARTICIPANTS" 
        title="DIVERSITY PROFILE"
        content="Scanning sector... Detected students from multiple academic years. Freshers to Final Years. disciplines: CS, Business, Design, CyberSec."
      />
      <MetricsCard />
    </div>
  </section>
);

export default Mission;
