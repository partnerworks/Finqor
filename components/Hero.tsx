
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const providers = ["J.P. Morgan", "Deutsche Bank", "Citigroup", "Barclays"];
  const [dynamicNum, setDynamicNum] = useState('1.0842');
  const [nodes, setNodes] = useState({
    retail: 78,
    corporate: 52,
    lob: 91
  });

  useEffect(() => {
    // 4 times a second = 250ms
    const interval = setInterval(() => {
      // Update price number 4 times a second
      setDynamicNum(`1.084${Math.floor(Math.random() * 9)}`);
      
      // Update distribution nodes 4 times a second with slight variations
      setNodes(prev => ({
        retail: Math.min(100, Math.max(70, prev.retail + (Math.random() > 0.5 ? 1 : -1))),
        corporate: Math.min(100, Math.max(45, prev.corporate + (Math.random() > 0.5 ? 1 : -1))),
        lob: Math.min(100, Math.max(85, prev.lob + (Math.random() > 0.5 ? 1 : -1)))
      }));
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-white">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-slate-100 text-slate-600 mb-6 border border-slate-200">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Real-time deal aggregation
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-6 max-w-5xl tracking-tight text-left md:text-center">
            Real-Time FX Deal Aggregation <br className="hidden md:block" />
            <span className="text-black">for </span>
            <span className="text-accent relative hand-underline">Every Bank</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-3xl leading-relaxed font-medium">
            Bridging pricing, risk, and hedge execution across institutional workflows 24 / 7 / 365. 
            Deploy mission-critical middleware in under 60 days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
            <a href="#contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-accent shadow-2xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 text-center">
              Book a demo
            </a>
            <a href="#solutions" className="bg-white border border-slate-200 text-slate-700 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all duration-300 text-center">
              View Solutions
            </a>
          </div>

          {/* Technical UI Representation */}
          <div className="w-full max-w-5xl relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-white border border-slate-200 rounded-[1.5rem] shadow-2xl overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>
                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase text-left">FinQor 1FX Aggregator // System Active</div>
                <div className="w-16"></div>
              </div>
              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  {/* Visualizing Data Streams */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                    <div className="text-[10px] font-bold text-slate-400 mb-4 tracking-wider uppercase">Institutional Liquidity</div>
                    <div className="space-y-4">
                      {providers.map((name, i) => (
                        <div key={i} className="flex justify-between items-center text-xs font-mono">
                          <span className="text-slate-500 font-semibold">{name}</span>
                          <span className="text-green-500 font-bold">1.084{i+2}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center p-6 bg-primary rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-12 h-12 rounded-full border-4 border-accent border-t-transparent animate-spin mb-4 relative z-10"></div>
                    <div className="text-xs font-bold text-white tracking-widest uppercase relative z-10">Processing Flow</div>
                    <div className="text-[28px] font-mono text-white mt-2 relative z-10 transition-all duration-500">{dynamicNum}</div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                    <div className="text-[10px] font-bold text-slate-400 mb-4 tracking-wider uppercase">Distribution Nodes</div>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-400 font-bold"><span>RETAIL</span><span>{nodes.retail}%</span></div>
                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-accent transition-all duration-300" style={{ width: `${nodes.retail}%` }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-400 font-bold"><span>CORPORATE</span><span>{nodes.corporate}%</span></div>
                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-accent transition-all duration-300" style={{ width: `${nodes.corporate}%` }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-400 font-bold"><span>LOB CHANNELS</span><span>{nodes.lob}%</span></div>
                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-accent transition-all duration-300" style={{ width: `${nodes.lob}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
