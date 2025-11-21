import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import History from './components/History';
import Residences from './components/Residences';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Membership from './components/Membership';
import Dining from './components/Dining';
import Footer from './components/Footer';
import AiConcierge from './components/AiConcierge';
import Testimonials from './components/Testimonials';

function App() {
  const openBooking = () => {
    window.dispatchEvent(new Event('open-concierge-booking'));
  };

  return (
    <div className="min-h-screen bg-royal-black text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <History />
        <Residences />
        <Features />
        <Dining />
        <Membership />
        <Events />
        <Gallery />
        <Testimonials />
        
        {/* Final Extravagant CTA */}
        <section className="relative py-32 md:py-48 bg-royal-gold overflow-hidden flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
             <span className="block text-black/60 text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-6 animate-pulse">Limited Availability</span>
            <h2 className="text-5xl md:text-9xl font-display font-bold text-black mb-8 md:mb-12 leading-[0.9]">
              BECOME <br/> LEGENDARY
            </h2>
            
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={openBooking}
                className="bg-black text-white min-w-[200px] md:min-w-[250px] py-4 md:py-5 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Apply for Membership
              </button>
              <p className="text-black/70 text-[10px] md:text-xs mt-2 md:mt-4">By invitation only. Or contact Concierge.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <AiConcierge />
    </div>
  );
}

export default App;