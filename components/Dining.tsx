import React from 'react';

const Dining: React.FC = () => {
  const openBooking = () => {
    window.dispatchEvent(new Event('open-concierge-booking'));
  };

  return (
    <section id="dining" className="relative py-20 md:py-0 min-h-[700px] md:h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
      
      <div className="absolute inset-0 z-0">
         <img src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2067&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 md:opacity-40 grayscale-[30%]" alt="Sierra Restaurant" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent md:bg-gradient-to-r md:from-black md:via-black/90 md:to-transparent"></div>
         <div className="absolute inset-0 pattern-grid opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-start">
        <div className="max-w-xl animate-fade-up pt-12 md:pt-0 text-left relative p-8 md:p-12 bg-black/40 backdrop-blur-sm border border-white/5 shadow-2xl">
           
           {/* Ornamental Corners */}
           <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-royal-gold opacity-80"></div>
           <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-royal-gold opacity-80"></div>
           <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-royal-gold opacity-80"></div>
           <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-royal-gold opacity-80"></div>

           <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="h-[1px] w-8 bg-royal-gold"></span>
              <span className="text-royal-gold text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase">
                Smaki Natury
              </span>
           </div>
            
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-6 md:mb-8 leading-[1.0]">
              Restauracja <br/> <span className="italic text-royal-gold">Sierra</span>
            </h2>
            
            <p className="text-stone-300 md:text-stone-400 font-light leading-loose mb-8 md:mb-12 text-sm md:text-lg border-l-2 border-royal-gold/30 pl-6">
              Wyjątkowe doznania kulinarne z widokiem na 18. dołek. 
              Nasza kuchnia łączy regionalne, kaszubskie składniki z nowoczesnym, europejskim twistem.
            </p>
            
            <div className="grid grid-cols-1 gap-6 md:gap-12 mb-10 md:mb-16 border-t border-white/10 pt-8 md:pt-10">
              <div>
                <h4 className="text-white font-display uppercase mb-2 tracking-widest text-sm">Bar & Cafe</h4>
                <p className="text-stone-400 text-xs leading-relaxed">Doskonała kawa, lekkie przekąski i szeroki wybór drinków w swobodnej, klubowej atmosferze.</p>
              </div>
            </div>

            <button 
              onClick={openBooking}
              className="w-full md:w-auto bg-white text-black px-10 py-4 md:px-12 md:py-5 text-[9px] md:text-[10px] uppercase tracking-[0.3em] hover:bg-royal-gold transition-colors font-bold shadow-xl"
            >
              Rezerwuj Stolik
            </button>
        </div>
      </div>
    </section>
  );
};

export default Dining;