
import React from 'react';

import { motion } from 'motion/react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Collage Area */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:mx-0">
              {/* Base Image (Couch Session) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute inset-0 z-10"
              >
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/Team_Strategy.png" 
                    alt="FinQor Founding Team Strategy"
                    className="h-full w-auto object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Executive Strategy Session</p>
                  </div>
                </div>
              </motion.div>

              {/* Overlapping Image (Selfie) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-12 -right-8 z-20 w-3/5"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500 group">
                  <img 
                    src="/Team_Dubai.png" 
                    alt="FinQor In The Field"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Forex Expo // Dubai</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10 transition-all duration-1000"></div>
              
              {/* Stat Card Overlay */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute top-1/4 -left-12 z-30 bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-black text-primary leading-none">100+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Years Depth</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Text Content Area */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Founding Leadership
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-8 leading-[1.05] tracking-tight">
              Built by Practitioners <br />
              <span className="text-black">for Practitioners</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                The FinQor founding team brings over <span className="text-accent font-bold underline decoration-accent/30 underline-offset-4">100 years of combined experience</span> in FX electronic trading and fintech entrepreneurship.
              </p>
              
              <p className="text-slate-500 leading-relaxed">
                We are former Managing Directors, Quant Traders, and eFX Architects from Tier-1 global institutions. We don't build generic software; we engineer surgical solutions for the structural inefficiencies we navigated daily on the trade floor.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
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
