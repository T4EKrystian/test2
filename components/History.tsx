
import React from 'react';

const History: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-royal-green text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 order-2 lg:order-1 text-left">
            <div className="flex items-center gap-4 mb-6 md:mb-8 animate-fade-up">
              <span className="h-[1px] w-12 bg-royal-gold"></span>
              <span className="text-royal-gold text-[10px] font-bold tracking-[0.3em] uppercase">
                Dziedzictwo & Tradycja
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight animate-fade-up">
              The Spirit <br /> <span className="italic text-royal-gold/90">of the Game</span>
            </h2>
            
            <div className="space-y-6 text-stone-300 font-light text-sm md:text-base leading-loose border-l border-white/10 pl-6 animate-fade-up">
              <p>
                Golf w Sierra Resort to coś więcej niż sport. To powrót do korzeni, do czasów, gdy gra była formą medytacji w ruchu. 
                Zaprojektowane przez mistrzów, nasze pole szanuje naturalną topografię terenu, tworząc wyzwanie godne prawdziwych dżentelmenów.
              </p>
              <p>
                Każdy fairway opowiada historię. Każdy green wymaga szacunku. Tutaj czas płynie wolniej, mierzony jedynie uderzeniami kija i szumem wiatru w koronach dębów.
              </p>
            </div>

            <div className="mt-12 flex gap-8">
               <div>
                  <span className="block text-3xl md:text-4xl font-display text-white">20+</span>
                  <span className="text-[9px] text-royal-gold uppercase tracking-widest">Lat Historii</span>
               </div>
               <div>
                  <span className="block text-3xl md:text-4xl font-display text-white">11k</span>
                  <span className="text-[9px] text-royal-gold uppercase tracking-widest">Drzew w Parku</span>
               </div>
            </div>
          </div>

          {/* Visuals */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
             <div className="relative z-10 group">
                {/* Dark Gradient Overlay for text legibility and mood */}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-green/90 via-transparent to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-royal-gold/5 mix-blend-overlay z-10 pointer-events-none"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1535132012281-121a8252ed02?q=80&w=2670&auto=format&fit=crop" 
                  alt="Atmospheric Golf Course History" 
                  className="w-full aspect-[4/3] object-cover shadow-2xl rounded-sm filter brightness-[0.7] contrast-[1.1] grayscale-[20%] group-hover:brightness-[0.8] group-hover:scale-[1.02] transition-all duration-1000 ease-out"
                />
                
                {/* Decorative Frame */}
                <div className="absolute inset-0 border border-white/5 m-4 pointer-events-none z-20"></div>
             </div>
             
             {/* Floating Quote Box */}
             <div className="absolute -bottom-10 -left-8 w-64 bg-[#050805] border-t border-r border-royal-gold/20 hidden md:flex flex-col items-center justify-center p-8 z-20 shadow-2xl">
                <span className="text-royal-gold text-3xl leading-none mb-2 opacity-60">❝</span>
                <p className="font-serif italic text-center text-stone-400 leading-relaxed text-sm">
                  "Elegance is not standing out, but being remembered."
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default History;
