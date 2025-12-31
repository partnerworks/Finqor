
import React from 'react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content Area */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Executive Heritage
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-8 leading-[1.05] tracking-tight">
              Built by Practitioners <br />
              <span className="text-black">for</span> Practitioners
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                The FinQor founding team brings over <span className="text-accent font-bold underline decoration-accent/30 underline-offset-4">100 years of combined experience</span> in FX electronic trading and fintech entrepreneurship.
              </p>
              
              <p className="text-slate-500 leading-relaxed">
                We are former Managing Directors, Quant Traders, and eFX Architects from Tier-1 global institutions. We don't build generic software; we engineer surgical solutions for the structural inefficiencies we navigated daily on the trade floor.
              </p>
              
              <div className="grid grid-cols-1 gap-4 pt-8">
                {[
                  { title: "Deep Domain Expertise", desc: "Ex-Bankers from JP Morgan, Citi, and Deutsche Bank." },
                  { title: "Global Footprint", desc: "Decades of operation across MENA, Africa, and UK corridors." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-standard hover:border-accent/20">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
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
          
          {/* Visual Presentation Area - High Fidelity Editorial Layout */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="relative">
              {/* Main "Hero" Image of the Section */}
              <div className="relative z-20 transform -rotate-1 hover:rotate-0 transition-all duration-700">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-200 aspect-[4/3] relative group">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                    alt="FinQor Executive Team Strategy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute bottom-8 left-8 z-20">
                    <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-xl">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary">Q4 Global Summit</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Support Image */}
              <div className="absolute -bottom-12 -right-6 md:-right-12 z-30 w-1/2 hidden md:block transform rotate-3 hover:rotate-0 transition-all duration-700">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200 aspect-square group">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" 
                    alt="Institutional Trading Floor Context"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Decorative Accent Element */}
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent opacity-5 rounded-full blur-[100px] -z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-dashed border-slate-200 rounded-[4rem] -z-10 scale-110 rotate-6"></div>
              
              {/* Floating Stat Card */}
              <div className="absolute top-12 -right-8 z-40 bg-primary p-6 rounded-3xl shadow-2xl border border-slate-700 hidden lg:block animate-bounce-slow">
                <div className="text-center">
                  <div className="text-3xl font-black text-accent">100+</div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Years Depth</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

// Add a custom animation for the stat card
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 4s ease-in-out infinite;
  }
`;
document.head.appendChild(style);
