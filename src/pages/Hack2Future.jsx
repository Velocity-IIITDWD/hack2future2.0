import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import MissionBrief from '../components/Mission';
import ContactSection from '../components/ContactSection';

const Footer = () => (
  <footer className="p-[30px_24px] md:p-[30px_60px] border-t border-[rgba(0,240,255,0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[1px]">
      © 2026 HACK2FUTURE // IIIT DHARWAD // ALL SYSTEMS OPERATIONAL
    </div>
    <div className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[1px]">
      SECTOR 580009 // INDIA
    </div>
  </footer>
);

const Hack2Future = () => {
  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 bg-repeat pointer-events-none z-[1000] bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1)_0px,rgba(0,0,0,0.1)_1px,transparent_1px,transparent_2px)] opacity-30"></div>
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] z-[-1]"></div>
      
      {/* Main Content */}
      <Header />
      <Hero />
      <Ticker />
      <MissionBrief />
      <ContactSection />
      <Footer />

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        
        @keyframes pulse-border {
          0%, 100% { box-shadow: 0 0 5px rgba(0,240,255,0.3); }
          50% { box-shadow: 0 0 20px rgba(0,240,255,0.3); }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-\\[blink_1s_infinite\\] { animation: blink 1s infinite; }
        .animate-\\[pulse-border_2s_infinite\\] { animation: pulse-border 2s infinite; }
        .animate-\\[scroll_20s_linear_infinite\\] { animation: scroll 20s linear infinite; }
      `}</style>
    </>
  );
};

export default Hack2Future;
