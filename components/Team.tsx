
import React from 'react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-accent font-bold tracking-widest uppercase text-xs mb-4">Domain Leadership</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 leading-tight">Built by Practitioners <br />for Practitioners</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              The FinQor founding team brings over <span className="text-accent font-bold">100 years of combined experience</span> in FX electronic trading and fintech entrepreneurship.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              We are ex-bankers across trading, sales, eFX, and IT trade floor support. We don't just build software; we solve the structural inefficiencies we experienced firsthand in institutional finance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Deep Domain Expertise",
                "Agile Mindset",
                "Scalable Infrastructure",
                "Institutional Heritage"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm font-bold text-slate-700">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="grid grid-cols-2 gap-6">
               <div className="space-y-6">
                 <div className="h-64 bg-slate-100 rounded-[2rem] overflow-hidden border border-slate-200">
                    {/* Abstract architectural image representing stability/finance */}
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=600" className="w-full h-full object-cover grayscale opacity-80" alt="Office Architecture" />
                 </div>
                 <div className="h-48 bg-primary rounded-[2rem] flex items-center justify-center p-8 text-white">
                    <div className="text-center">
                      <div className="text-3xl font-extrabold text-accent mb-1">100+</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Years Combined Exp</div>
                    </div>
                 </div>
               </div>
               <div className="space-y-6 pt-12">
                 <div className="h-48 bg-accent rounded-[2rem] flex items-center justify-center p-8 text-white">
                    <svg className="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                 </div>
                 <div className="h-64 bg-slate-100 rounded-[2rem] overflow-hidden border border-slate-200">
                    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400&h=600" className="w-full h-full object-cover grayscale opacity-80" alt="Data Tech" />
                 </div>
               </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-slate-50 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
