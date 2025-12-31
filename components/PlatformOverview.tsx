
import React from 'react';

export const PlatformOverview: React.FC = () => {
  return (
    <section id="platform" className="py-24 bg-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.05),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Architecture</div>
          <h2 className="text-4xl font-extrabold text-white mb-6">Workflow Aggregation Middleware</h2>
          <p className="text-lg text-slate-300 font-medium">
            Bridging the gap between fragmented pricing and disconnected legacy systems. 
            Our layer provides the glue for modern institutional trading.
          </p>
        </div>

        <div className="relative">
          {/* Main Flow Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
            {[
              { 
                step: "01", 
                title: "Channels", 
                desc: "Retail, Corporate & LOB systems requesting real-time quotes.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              },
              { 
                step: "02", 
                title: "1FX Engine", 
                desc: "Middleware aggregating liquidity and risk in sub-10ms cycles.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
                highlight: true 
              },
              { 
                step: "03", 
                title: "Liquidity", 
                desc: "Direct connection to pricing engines and global LP networks.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              },
              { 
                step: "04", 
                title: "Execution", 
                desc: "Automated hedging and bi-directional STP orchestration.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border transition-all duration-300 ${item.highlight ? 'bg-accent border-accent text-white shadow-2xl shadow-accent/20 lg:scale-105' : 'bg-slate-900 border-slate-800 text-white'}`}>
                <div className="flex justify-between items-start mb-10">
                  <div className={`p-3 rounded-xl ${item.highlight ? 'bg-white/20' : 'bg-slate-800 text-slate-400'}`}>
                    {item.icon}
                  </div>
                  <span className={`text-xs font-mono font-bold ${item.highlight ? 'text-white/50' : 'text-slate-600'}`}>{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${item.highlight ? 'text-white/80' : 'text-slate-400 font-medium'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Horizontal Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -z-0 -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};
