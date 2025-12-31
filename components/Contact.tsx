
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-8 md:p-12 lg:p-16 bg-primary text-white">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Ready to transform your institutional workflows? Our experts are available to discuss your specific requirements and deployment strategy.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase">Email Us</p>
                    <p className="text-lg font-medium">support@finqor.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase">Call Support</p>
                    <p className="text-lg font-medium">+971 (0)2 681 0221</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase">Our Headquarters</p>
                    <p className="text-lg font-medium">ADGM, Abu Dhabi, UAE</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="p-8 md:p-12 lg:p-16">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-standard" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company</label>
                    <input type="text" placeholder="Institutional Bank" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-standard" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                  <input type="email" placeholder="john@bank.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-standard" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} placeholder="How can we help transform your workflow?" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-standard resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-accent text-white py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-standard">
                  Send Inquiry
                </button>
                <p className="text-center text-xs text-slate-400">By submitting this form, you agree to our privacy policy.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
