
import React from 'react';

const Metric = ({ label, value, subtext }: any) => (
  <div className="text-center p-6 border-r border-slate-100 last:border-0 md:border-r md:last:border-0 lg:border-r">
    <div className="text-3xl md:text-4xl font-extrabold text-accent mb-2">{value}</div>
    <div className="text-sm font-bold text-primary uppercase tracking-wide mb-1">{label}</div>
    <div className="text-xs text-slate-400">{subtext}</div>
  </div>
);

export const Proof: React.FC = () => {
  return (
    <section id="proof" className="py-20 bg-primary text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Proven Institutional Scale</h2>
          <p className="text-slate-400">Trusted by tier-1 banks in MENA and Africa region.</p>
          <p className="mt-2 text-xs italic text-slate-500">All figures as reported by FinQor internal performance metrics.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 divide-slate-100">
            <Metric label="Retention" value="92%" subtext="Client Success Rate" />
            <Metric label="Efficiency" value="40-68%" subtext="Cost Savings Range" />
            <Metric label="Capacity" value="700M+" subtext="Quarterly Transactions" />
            <Metric label="Deployment" value="< 60" subtext="Days Implementation" />
            <Metric label="Margin" value="65%" subtext="Average Gross Margin" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
               <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <div>
              <div className="inline-block px-2 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded mb-2">CASE STUDY</div>
              <h3 className="text-xl font-bold mb-2">Bank ABC Implementation (Reported)</h3>
              <p className="text-slate-400 leading-relaxed">
                Seamlessly processing <span className="text-white font-bold">420,000 monthly deals</span> across <span className="text-white font-bold">4 international jurisdictions</span>. 
                Zero system downtime recorded since deployment in 2023.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
