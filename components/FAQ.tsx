
import React, { useState } from 'react';

// Use React.FC to handle standard component attributes like 'key'
const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{question}</span>
        <svg 
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is 1FXPD?",
      answer: "1FXPD (One Foreign Exchange Price Distributor) is a real-time middleware layer that aggregates liquidity and distributes cached, high-frequency pricing sets to downstream retail and corporate channels via REST APIs."
    },
    {
      question: "How do cached rates work out of hours?",
      answer: "Our engine maintains business continuity 24/7 by utilizing cached pricing and smart spread logic even when main market liquidity sources are thin, ensuring your customers always have access to a quote."
    },
    {
      question: "What is the typical implementation timeline?",
      answer: "Using our containerized microservices architecture, we typically achieve deployment in less than 60 days, significantly faster than the 9-18 months required by legacy vendors."
    },
    {
      question: "Which systems are compatible with your STP Orchestrator?",
      answer: "FinQor provides bi-directional API integrations with industry standards including Temenos, Murex, 360T, and SWIFT GPI, among others."
    },
    {
      question: "How does risk transfer work at a high level?",
      answer: "As trades flow into the system, 1FXRM aggregates risk in real-time and automatically executes offsetting hedges with your liquidity providers based on pre-defined risk mandates."
    },
    {
      question: "What is the SaaS model and support structure?",
      answer: "We offer a flexible SaaS model with tiered support including 24/7 technical assistance and dedicated floor support expertise to ensure mission-critical stability."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500">Common inquiries about our platform and implementation.</p>
        </div>
        
        <div className="bg-white rounded-3xl p-4 md:p-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
