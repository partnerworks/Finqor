
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Capabilities', href: '#features' },
    { name: 'Results', href: '#proof' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3' 
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex flex-col group transition-standard"
            >
              <div className="flex items-baseline">
                <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-primary leading-none">
                  FinQor
                </span>
                <span className="text-accent font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] ml-1.5 leading-none">
                  Technologies
                </span>
              </div>
              <div className="h-0.5 w-0 group-hover:w-full bg-accent transition-all duration-300 mt-1"></div>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[13px] font-bold text-slate-600 hover:text-accent transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-primary text-white px-7 py-3 rounded-full text-[13px] font-bold hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/10 uppercase tracking-widest"
            >
              Request demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-primary hover:bg-slate-100 transition-standard focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 bg-white border-t border-slate-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-6 pb-10 space-y-5 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-sm font-extrabold text-slate-700 hover:text-accent uppercase tracking-widest border-l-4 border-transparent hover:border-accent pl-4 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block w-full text-center bg-accent text-white py-4 rounded-2xl font-bold shadow-xl shadow-accent/20 uppercase tracking-widest text-sm"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
