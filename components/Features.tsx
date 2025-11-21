import React, { useState } from 'react';
import { ArrowRight, Diamond, ChevronDown } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Pole Mistrzowskie",
    subtitle: "Klasa A",
    description: "18 dołków, par 72. Szybkie greeny, malownicze stawy i doskonały drenaż, który pozwala na grę niemal o każdej porze roku. Pole wymagające, ale sprawiedliwe.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Dom Klubowy",
    subtitle: "Styl Angielski",
    description: "Elegancki budynek klubowy z kominkiem, stołem bilardowym i wygodnymi skórzanymi fotelami. Idealne miejsce na relaks po rundzie.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Akademia",
    subtitle: "Driving Range",
    description: "Zadaszony Driving Range z 26 stanowiskami, putting green oraz nowoczesny symulator Trackman do treningu zimą i analizy swingu.",
    image: "https://images.unsplash.com/photo-1623567341691-30e553df79ea?q=80&w=2669&auto=format&fit=crop"
  }
];

const Features: React.FC = () => {
  const [activeId, setActiveId] = useState(1);

  const openBooking = () => {
    window.dispatchEvent(new Event('open-concierge-booking'));
  };

  return (
    <section id="experience" className="relative py-20 md:py-32 bg-royal-black overflow-hidden min-h-[800px] flex items-center">
      
      {/* Background Transition Layer */}
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            activeId === exp.id ? 'opacity-40 md:opacity-60 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${exp.image}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-royal-black via-royal-black/80 md:via-royal-black/70 to-royal-black/40 md:to-transparent"></div>
        </div>
      ))}

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-center">
          
          {/* List - Left Aligned on Mobile */}
          <div className="w-full lg:w-5/12 space-y-2 text-left">
             <h2 className="text-white text-4xl md:text-6xl font-serif italic mb-10 md:mb-16 text-gradient-gold inline-block animate-fade-up">
               Udogodnienia <br/> Sierra Golf
             </h2>
            
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div 
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`group cursor-pointer border-b border-white/10 py-6 md:py-10 transition-all duration-500 relative ${activeId === exp.id ? 'pl-6 md:pl-10 bg-white/5 md:bg-transparent' : 'hover:pl-4 hover:border-white/20'}`}
                >
                  {/* Active Indicator Line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-royal-gold transition-all duration-500 ${activeId === exp.id ? 'h-full opacity-100' : 'h-0 opacity-0'}`}></div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className={`text-[9px] uppercase tracking-[0.3em] mb-2 block transition-colors ${activeId === exp.id ? 'text-royal-gold' : 'text-stone-500'}`}>
                        0{exp.id} &mdash; {exp.subtitle}
                      </span>
                      <h3 className={`text-xl md:text-4xl font-display uppercase transition-all duration-500 ${activeId === exp.id ? 'text-white tracking-widest' : 'text-white/40'}`}>
                        {exp.title}
                      </h3>
                    </div>
                    {activeId === exp.id ? 
                      <Diamond size={12} className="text-royal-gold animate-pulse" /> : 
                      <ChevronDown size={16} className="text-white/20 md:hidden" />
                    }
                  </div>

                  {/* Mobile Accordion Description - Left Aligned */}
                  <div className={`md:hidden overflow-hidden transition-all duration-500 ${activeId === exp.id ? 'max-h-[200px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                     <p className="text-stone-300 font-light text-sm leading-relaxed text-left">
                       {exp.description}
                     </p>
                     <button onClick={(e) => { e.stopPropagation(); openBooking(); }} className="mt-4 text-[10px] uppercase tracking-widest text-royal-gold border-b border-royal-gold/30 pb-1">
                       Więcej
                     </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Description Panel (Hidden on Mobile) */}
          <div className="hidden lg:block w-full lg:w-5/12 lg:ml-auto">
             <div className="backdrop-blur-md bg-royal-black/40 p-12 border border-white/5 shadow-2xl animate-fade-up key-{activeId}">
               <h3 className="text-4xl font-serif italic text-white mb-8">
                 {experiences.find(e => e.id === activeId)?.title}
               </h3>
               <div className="w-16 h-[1px] bg-royal-gold mb-8"></div>
               <p className="text-stone-300 leading-loose font-light text-lg mb-12">
                 {experiences.find(e => e.id === activeId)?.description}
               </p>
               <button 
                  onClick={openBooking}
                  className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white hover:text-royal-gold transition-colors"
                >
                 <span className="border-b border-white/30 pb-1 group-hover:border-royal-gold transition-colors">Zarezerwuj</span>
                 <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-2 transition-transform"/>
               </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;