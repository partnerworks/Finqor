
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', company: '', email: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name.toLowerCase()]: value }));
  };

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
            <div className="p-8 md:p-12 lg:p-16 relative">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Inquiry Sent Successfully</h3>
                  <p className="text-slate-500 max-w-xs mx-auto">
                    Thank you for your interest. A FinQor specialist will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                      <input 
                        name="Name"
                        type="text" 
                        required
                        placeholder="John Doe" 
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-standard" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Company</label>
                      <input 
                        name="Company"
                        type="text" 
                        required
                        placeholder="Institutional Bank" 
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-standard" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                    <input 
                      name="Email"
                      type="email" 
                      required
                      placeholder="john@bank.com" 
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-standard" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea 
                      name="Message"
                      rows={4} 
                      required
                      placeholder="How can we help transform your workflow?" 
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-standard resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-accent text-white py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-standard active:scale-[0.98]">
                    Send Inquiry
                  </button>
                  <p className="text-center text-xs text-slate-400">By submitting this form, you agree to our privacy policy.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
