
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Residences: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const residences = [
    {
      title: "Sierra Apartments",
      desc: "Luksusowe apartamenty 50m od Domu Klubowego. Idealne na weekend.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Garden Villas",
      desc: "Przestronne wille z widokiem na 18. dołek dla całej rodziny.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    },
    {
      title: "The Penthouse",
      desc: "Najwyższy standard wykończenia i prywatny taras na dachu.",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const openBooking = () => {
    window.dispatchEvent(new Event('open-concierge-booking'));
  };

  return (
    <section id="residences" className="bg-white pattern-paper text-royal-black py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section - Strictly Left Aligned */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 animate-fade-up text-left">
          <div className="flex flex-col items-start text-left">
             <span className="text-royal-black/50 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase block mb-3 md:mb-4 text-left">
              Zakwaterowanie
            </span>
            <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-[0.9] text-left">
              Sierra <br/> <span className="text-royal-gold italic font-serif normal-case">Apartments</span>
            </h2>
          </div>
          <div className="max-w-md mt-8 md:mt-0 text-left">
            <p className="font-serif text-lg md:text-xl leading-relaxed text-royal-black/80 text-left">
              Zatrzymaj się na dłużej. <br className="hidden md:block"/> 
              Komfortowe apartamenty w sercu pola golfowego.
            </p>
          </div>
        </div>

        {/* Desktop Grid / Mobile Horizontal Snap Scroll */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {residences.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative min-w-[85vw] md:min-w-0 h-[450px] md:h-[600px] overflow-hidden cursor-pointer snap-center shadow-xl rounded-sm"
              onMouseEnter={() => setActiveSlide(idx)}
              onClick={openBooking}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:bg-black/40 transition-colors duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex justify-between items-end text-left">
                <div className="transform translate-y-0 md:translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                   <h3 className="text-2xl md:text-4xl font-display text-white mb-2">
                     {item.title}
                   </h3>
                   <p className="text-white/90 font-light text-xs md:text-sm max-w-[240px] leading-relaxed opacity-90 md:opacity-80">
                     {item.desc}
                   </p>
                </div>
                <button className="bg-white text-black p-3 md:p-4 rounded-full shadow-lg transform translate-y-0 md:translate-y-4 opacity-100 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Button Section */}
        <div className="mt-8 md:mt-16 w-full flex flex-col md:flex-row items-center justify-between border-t border-black/10 pt-8 md:pt-10 animate-fade-up gap-6">
           <div className="flex md:hidden gap-2 self-center">
              {residences.map((_, idx) => (
                <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${activeSlide === idx ? 'bg-black' : 'bg-black/20'}`}></div>
              ))}
           </div>
           
           <div className="hidden md:block text-xs font-bold uppercase tracking-widest text-black/40">
             Check-in: 15:00 &mdash; Check-out: 11:00
           </div>

           <button 
            onClick={openBooking}
            className="w-full md:w-auto bg-royal-gold text-black px-10 py-4 md:py-5 hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span className="flex items-center justify-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold">
              Sprawdź dostępność <ArrowRight size={14} />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Residences;
