
import React from 'react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Text Content Area */}
          <div className="w-full">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Founding Leadership
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-8 leading-[1.05] tracking-tight">
              Built by Practitioners <br />
              <span className="text-black">for Practitioners</span>
            </h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                The FinQor founding team brings over <span className="text-accent font-bold underline decoration-accent/30 underline-offset-4">100 years of combined experience</span> in FX electronic trading and fintech entrepreneurship.
              </p>
              
              <p className="text-slate-500 leading-relaxed">
                We are former Managing Directors, Quant Traders, and eFX Architects from Tier-1 global institutions. We don't build generic software; we engineer surgical solutions for the structural inefficiencies we navigated daily on the trade floor.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 text-left">
                {[
                  { title: "Institutional DNA", desc: "Expertise from J.P. Morgan, Citi, and Deutsche Bank." },
                  { title: "Global Market Reach", desc: "Active operations across MENA and international FX hubs." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary">{item.title}</h4>
                      <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
