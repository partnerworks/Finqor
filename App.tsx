
import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { PlatformOverview } from './components/PlatformOverview.tsx';
import { Solutions } from './components/Solutions.tsx';
import { Features } from './components/Features.tsx';
import { Differentiation } from './components/Differentiation.tsx';
import { Proof } from './components/Proof.tsx';
import { Team } from './components/Team.tsx';
import { MarketFocus } from './components/MarketFocus.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only bg-accent text-white p-4 fixed z-[100]">
        Skip to content
      </a>
      
      <Navbar />
      
      <main id="main-content" className="flex-grow pt-16">
        <Hero />
        <PlatformOverview />
        <Solutions />
        <Features />
        <Differentiation />
        <Proof />
        <Team />
        <MarketFocus />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
