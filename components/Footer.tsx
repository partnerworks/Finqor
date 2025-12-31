
import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const handleFooterClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };
  
  return (
    <footer className="bg-white border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a 
              href="#home" 
              onClick={(e) => handleFooterClick(e, '#home')}
              className="text-2xl font-bold tracking-tight text-primary hover:opacity-90 transition-opacity inline-flex items-baseline"
            >
              <span className="leading-none">FinQor</span>
              <span className="text-accent ml-0.5 leading-none">Technologies</span>
            </a>
            <p className="text-[13px] text-slate-500 mt-6 max-w-xs font-medium leading-relaxed">
              Innovative technology delivering disruptive, sustainable middleware solutions for institutional workflow transformation in MENA and Africa.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Platform</h4>
            <a href="#platform" onClick={(e) => handleFooterClick(e, '#platform')} className="text-sm font-bold text-slate-600 hover:text-accent transition-colors">Middleware Layer</a>
            <a href="#solutions" onClick={(e) => handleFooterClick(e, '#solutions')} className="text-sm font-bold text-slate-600 hover:text-accent transition-colors">Solutions (1FXPD)</a>
            <a href="#features" onClick={(e) => handleFooterClick(e, '#features')} className="text-sm font-bold text-slate-600 hover:text-accent transition-colors">Functional Capabilities</a>
            <a href="#proof" onClick={(e) => handleFooterClick(e, '#proof')} className="text-sm font-bold text-slate-600 hover:text-accent transition-colors">Results & Metrics</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">About</h4>
            <a href="#team" onClick={(e) => handleFooterClick(e, '#team')} className="text-sm font-bold text-slate-600 hover:text-accent transition-colors">Our Team</a>
            <a href="#faq" onClick={(e) => handleFooterClick(e, '#faq')} className="text-sm font-bold text-slate-600 hover:text-accent transition-colors">FAQ</a>
            <a href="mailto:support@finqor.com" className="text-sm font-bold text-slate-600 hover:text-accent transition-colors">Support</a>
            <a href="#contact" onClick={(e) => handleFooterClick(e, '#contact')} className="text-sm font-bold text-slate-600 hover:text-accent transition-colors">Book a Demo</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Legal</h4>
            <a href="privacy.html" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-600 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="terms.html" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-600 hover:text-accent transition-colors">Terms of Service</a>
            <a href="cookies.html" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-600 hover:text-accent transition-colors">Cookie Policy</a>
            <a href="disclaimer.html" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-600 hover:text-accent transition-colors">Disclaimer</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          <p>© {year} FinQor Technologies. ADGM, Abu Dhabi, UAE.</p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span> System Status: Nominal</span>
          </div>
        </div>
      </div>
      
      {/* Schema.org JSON-LD for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "FinQor Technologies",
          "url": "https://www.finqor.com",
          "logo": "https://www.finqor.com/images/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971-02-681-0221",
            "contactType": "customer service",
            "email": "support@finqor.com",
            "areaServed": ["AE", "SA", "ZA", "NG", "KE"],
            "availableLanguage": ["English", "Arabic"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": "UAE",
            "streetAddress": "ADGM"
          }
        })}
      </script>
    </footer>
  );
};
