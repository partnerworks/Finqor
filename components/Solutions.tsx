
import React from 'react';

const SolutionCard = ({ title, subtitle, bullets, ctaText, icon, colorClass, delay }: any) => (
  <div className="flex flex-col h-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5">
    <div className={`h-1.5 w-full ${colorClass}`}></div>
    <div className="p-10 flex flex-col h-full">
      <div className="mb-8 flex flex-col">
        <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${colorClass.replace('bg-', 'bg-opacity-10 text-')}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-3xl font-extrabold text-primary mb-1">{title}</h3>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">{subtitle}</p>
        </div>
      </div>
      
      <div className="flex-grow">
        <ul className="space-y-5 mb-10">
          {bullets.map((bullet: string, i: number) => (
            <li key={i} className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-600 font-medium text-[15px]">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href="#contact" className="group flex items-center justify-center w-full py-4 rounded-xl border-2 border-slate-100 font-bold text-slate-700 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
        {ctaText}
        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
    </div>
  </div>
);

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4">The Stack</div>
          <h2 className="text-4xl font-extrabold text-primary mb-6">Core Enterprise Components</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Scalable components engineered for the throughput and complexity of tier-1 institutional banking.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <SolutionCard 
            title="1FXPD" 
            subtitle="Price Distribution Engine"
            colorClass="bg-accent"
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>}
            bullets={[
              "Dynamic aggregation of tier-1 liquidity sources",
              "Sub-10ms distribution to all LOB channels",
              "Robust REST APIs for legacy & digital systems",
              "Smart caching for 24/7 quote availability",
              "Client-specific segmentation and laddering"
            ]}
            ctaText="Request Technical Spec"
          />
          
          <SolutionCard 
            title="1FXRM" 
            subtitle="Risk Management Orchestrator"
            colorClass="bg-primary"
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>}
            bullets={[
              "Automated real-time risk aggregation",
              "Seamless API hedge execution via 360T",
              "Configurable automated margin management",
              "Deep liquidity provider routing logic",
              "Instant reconciliation & audit-ready reporting"
            ]}
            ctaText="Schedule Demo"
          />
        </div>
      </div>
    </section>
  );
};
