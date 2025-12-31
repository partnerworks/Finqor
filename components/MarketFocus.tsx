
import React from 'react';

export const MarketFocus: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-6">Strategic Regional Focus</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We specialize in the emerging corridors of <span className="font-bold text-primary">MENA and Africa</span>, with active expansion into the GCC, Southern Asia, and Western markets through strategic partnerships.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="block text-accent font-bold mb-1">GCC & MENA</span>
                <span className="text-sm text-slate-500">Regional hub in ADGM, Abu Dhabi.</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="block text-accent font-bold mb-1">Africa</span>
                <span className="text-sm text-slate-500">High-growth cross-border corridors.</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-gradient-to-br from-accent to-blue-700 p-10 rounded-3xl text-white shadow-xl shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">Partner with Us</h3>
              <p className="mb-8 text-blue-100 leading-relaxed text-center lg:text-left">
                We work with Tier-1 banks, FinTechs, and Systems Integrators to deliver world-class institutional infrastructure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg border border-white/20">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm font-medium">Banks</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg border border-white/20">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm font-medium">FinTechs</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg border border-white/20">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm font-medium">Core Banking Vendors</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg border border-white/20">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm font-medium">Systems Integrators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
