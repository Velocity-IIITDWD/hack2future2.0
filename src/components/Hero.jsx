import React from 'react';
import { PrimaryButton, SecondaryButton } from './ui/Button.jsx';
import { SponsorItem, SponsorHeader } from './ui/Card.jsx';

const TransmissionBadge = () => (
  <div className="inline-flex items-center gap-[10px] bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.3)] p-[10px_20px] font-['Share_Tech_Mono'] text-[12px] text-[#00f0ff] mb-[40px] w-fit animate-[pulse-border_2s_infinite] before:content-[''] before:w-[8px] before:h-[8px] before:bg-[#00f0ff] before:rounded-full before:animate-[blink_1s_infinite]">
    INCOMING TRANSMISSION
  </div>
);

const HeroTitle = () => (
  <h1 className="font-['Orbitron'] font-black leading-[1] mb-[30px]">
    <div className="flex items-baseline">
      <span className="text-[80px] md:text-[120px] tracking-[10px]">HACK</span>
      <span className="text-[#00f0ff] ml-[20px] [text-shadow:0_0_30px_rgba(0,240,255,0.3)]">2</span>
    </div>
    <div className="text-[80px] md:text-[120px] tracking-[10px] text-[#00f0ff] [text-shadow:0_0_40px_rgba(0,240,255,0.3)]">FUTURE</div>
    <div className="text-[70px] md:text-[100px] tracking-[5px] text-white">2.0</div>
  </h1>
);

const Hero = () => (
  <section className="min-h-[calc(100vh-80px)] flex relative p-5 md:p-[60px] overflow-hidden">
    <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,240,255,0.15)_0%,transparent_70%)] rounded-full right-[-100px] top-1/2 -translate-y-1/2 blur-[80px] z-0"></div>
    
    <div className="flex-1 flex flex-col justify-center z-10 max-w-[700px]">
      <TransmissionBadge />
      <HeroTitle />
      <div>
        <p className="text-[20px] md:text-[24px] font-[300] tracking-[3px] mb-[10px] text-[rgba(255,255,255,0.9)]">Hack the present. Shape the Future.</p>
        <p className="font-['Share_Tech_Mono'] text-[12px] text-[#00f0ff] tracking-[2px] mb-[50px]">COORDINATES: HUBBALLI-DHARWAD // SECTOR 580009</p>
      </div>
      <div className="flex flex-col md:flex-row gap-0">
        <PrimaryButton href="#register">INITIALIZE REGISTRATION</PrimaryButton>
        <SecondaryButton href="#protocols">ACCESS PROTOCOLS</SecondaryButton>
      </div>
    </div>
    
    <div className="absolute right-[100px] top-1/2 -translate-y-1/2 w-[320px] hidden lg:block z-10">
      <div className="bg-[rgba(13,19,24,0.9)] border border-[rgba(0,240,255,0.3)] backdrop-blur-[10px]">
        <SponsorHeader />
        <div className="p-[20px]">
          <SponsorItem icon="⬡" title="RESEARCH PARK" subtitle="IIIT DHARWAD" />
          <SponsorItem icon="⬢" title="CySecK" subtitle="K-TECH COE" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
