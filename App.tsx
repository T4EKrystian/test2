
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import History from './components/History';
import CourseDetails from './components/CourseDetails';
import Signature from './components/Signature';
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
    <div className="min-h-screen bg-royal-black text-white font-sans overflow-x-hidden selection:bg-royal-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <CourseDetails />
        <History />
        <Signature />
        <Features />
        <Residences />
        <Dining />
        <Membership />
        <Events />
        <Gallery />
        <Testimonials />
        
        {/* Final Extravagant CTA */}
        <section className="relative py-32 md:py-48 bg-royal-gold overflow-hidden flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
             <span className="block text-black/60 text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] mb-6 md:mb-8 animate-pulse">Limited Availability</span>
            <h2 className="text-5xl md:text-9xl font-display font-bold text-black mb-10 md:mb-14 leading-[0.85] tracking-tighter">
              BECOME <br/> LEGENDARY
            </h2>
            
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={openBooking}
                className="bg-black text-white min-w-[220px] md:min-w-[280px] py-4 md:py-6 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-2xl ring-1 ring-white/20"
              >
                Apply for Membership
              </button>
              <p className="text-black/70 text-[10px] md:text-xs mt-2 md:mt-4 font-serif italic">By invitation only. Or contact Concierge.</p>
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
