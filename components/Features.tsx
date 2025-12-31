
import React from 'react';

const FeatureCard = ({ title, description, items, icon }: any) => (
  <div className="group p-8 bg-slate-950 border border-slate-800 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-500 relative overflow-hidden text-left">
    <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity text-white">
      {icon}
    </div>
    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-slate-400 mb-6 text-sm leading-relaxed font-medium">{description}</p>
    <ul className="space-y-3">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-center text-sm font-bold text-slate-300">
          <div className="w-1 h-1 bg-accent rounded-full mr-3"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <div className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Functional DNA</div>
            <h2 className="text-4xl font-extrabold text-white mb-6">Core Functional Capabilities</h2>
            <p className="text-slate-300 text-lg font-medium">Our platform components are modular, allowing institutions to transform specific segments of their workflow or overhaul the entire chain.</p>
          </div>
          <div className="bg-slate-950 text-white p-6 rounded-2xl shadow-xl border border-slate-800">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-accent"></div>
                <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-blue-400"></div>
                <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-600"></div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-tighter">Technology Stack</span>
                <span className="text-xs font-bold">Containerized Microservices</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            title="Dynamic Pricing" 
            description="Infinite pricing sets segmented by client size, currency, and channel."
            items={["Liquidity aggregation", "Sub-10ms refresh", "Custom spreads"]}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>}
          />
          <FeatureCard 
            title="Risk Nexus" 
            description="Bridging front-office pricing with automated back-office hedging."
            items={["Automated hedging", "Counterparty risk", "Profit locking"]}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>}
          />
          <FeatureCard 
            title="STP Orchestrator" 
            description="Bi-directional API integrations with core global banking networks."
            items={["Temenos/Murex Ready", "SWIFT GPI flows", "Instant settlement"]}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>}
          />
          <FeatureCard 
            title="Automation Scale" 
            description="Engineered for high-volume environments with minimal overhead."
            items={["700M+ Quarterly", "99.99% Uptime", "Self-healing Nodes"]}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>}
          />
        </div>
      </div>
    </section>
  );
};
