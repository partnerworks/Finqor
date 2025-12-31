
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlatformOverview } from './components/PlatformOverview';
import { Solutions } from './components/Solutions';
import { Features } from './components/Features';
import { Differentiation } from './components/Differentiation';
import { Proof } from './components/Proof';
import { Team } from './components/Team';
import { MarketFocus } from './components/MarketFocus';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

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
