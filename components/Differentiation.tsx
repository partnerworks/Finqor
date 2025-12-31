
import React from 'react';

const DiffCard = ({ feature, legacy, finqor, icon }: any) => (
  <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm relative group overflow-hidden transition-all duration-300 hover:shadow-lg">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-slate-50 text-slate-400 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
        {icon}
      </div>
      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Comparison</span>
    </div>
    <h3 className="text-lg font-bold text-primary mb-6">{feature}</h3>
    
    <div className="space-y-6">
      <div className="relative pl-6 border-l-2 border-slate-100">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Legacy Standard</div>
        <p className="text-sm font-medium text-slate-400">{legacy}</p>
      </div>
      <div className="relative pl-6 border-l-2 border-accent">
        <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">FinQor Edge</div>
        <p className="text-base font-bold text-primary">{finqor}</p>
      </div>
    </div>
  </div>
);

export const Differentiation: React.FC = () => {
  const diffs = [
    { 
      feature: "Deployment Velocity", 
      legacy: "9-18 Months custom builds", 
      finqor: "< 60 Days Implementation",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    },
    { 
      feature: "Architecture", 
      legacy: "Monolithic, On-Premise siloed servers", 
      finqor: "Cloud-Native Containerized Microservices",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
    },
    { 
      feature: "Pricing Latency", 
      legacy: "100ms - 500ms typical refresh", 
      finqor: "< 10ms Sub-millisecond Ready",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    },
    { 
      feature: "Operating Continuity", 
      legacy: "Limited by standard market hours", 
      finqor: "24/7/365 Non-stop Distribution",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18"></path></svg>
    }
  ];

  return (
    <section id="differentiation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Market Advantage</div>
          <h2 className="text-4xl font-extrabold text-primary mb-6">Why Institutional Leaders Choose FinQor</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Bypassing legacy bottlenecks with agile, high-throughput middleware built for modern finance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diffs.map((diff, i) => (
            <DiffCard key={i} {...diff} />
          ))}
        </div>
      </div>
    </section>
  );
};
