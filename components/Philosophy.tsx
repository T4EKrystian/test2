import React, { useEffect } from 'react';
import { Shield, Award, Clock } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="heritage" className="relative bg-royal-black overflow-hidden pb-20 md:pb-32">
      
      {/* Topo Pattern Overlay */}
      <div className="absolute inset-0 pattern-topo opacity-10 pointer-events-none"></div>

      {/* Infinite Marquee Strip - Premium Info Separator */}
      <div className="bg-royal-gold py-3 md:py-4 relative z-20 overflow-hidden select-none flex border-y border-black/10">
        <div className="animate-infinite-scroll whitespace-nowrap flex gap-8 md:gap-16 items-center">
           {[...Array(10)].map((_, i) => (
             <div key={i} className="flex items-center gap-8 md:gap-16">
                <span className="text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Nature</span>
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                <span className="text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Silence</span>
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                <span className="text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Golf</span>
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                <span className="text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Resort</span>
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
             </div>
           ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-20 md:py-32">
        {/* Decor Background Text */}
        <div className="absolute top-20 left-0 md:left-10 text-[25vw] md:text-[20vw] leading-none font-display text-white/[0.03] select-none pointer-events-none z-0">
          OAZA
        </div>

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            
             {/* Image Side - First on Mobile for Visual Impact */}
            <div className="order-1 md:order-2 relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden group shadow-2xl rounded-sm border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                <img 
                  src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2670&auto=format&fit=crop" 
                  alt="Sierra Park Vegetation" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
                />
                
                {/* Floating Caption Card */}
                <div className="absolute bottom-0 right-0 md:-left-12 md:bottom-8 bg-[#0F0F0F]/95 backdrop-blur-xl p-6 md:p-8 max-w-[240px] md:max-w-[260px] z-20 border border-white/10 shadow-2xl text-left">
                  <p className="text-royal-gold font-serif italic text-lg mb-2">11 000 Drzew</p>
                  <p className="text-stone-400 text-xs leading-relaxed font-light">
                    Parkowy charakter pola zapewnia intymność gry i niezwykłe doznania estetyczne o każdej porze roku.
                  </p>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="order-2 md:order-1 text-left">
               <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <Shield size={18} className="text-royal-gold" strokeWidth={1} />
                  <span className="text-royal-gold text-[10px] font-bold tracking-[0.3em] uppercase">
                    Filozofia Klubu
                  </span>
               </div>
               
               <h2 className="text-4xl md:text-7xl font-serif text-white leading-[1.1] mb-8 md:mb-12">
                 W Harmoni <br/> <span className="italic text-stone-500">z Naturą</span>
               </h2>
               
               <div className="space-y-8 md:space-y-12">
                 <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-royal-gold transition-colors duration-500 shrink-0">
                       <span className="font-display text-xl text-white">01</span>
                    </div>
                    <div>
                       <h3 className="text-white text-lg font-display uppercase tracking-widest mb-2">Cisza</h3>
                       <p className="text-stone-400 text-sm leading-loose font-light max-w-md">
                         Z dala od zgiełku miasta. Tutaj słychać tylko śpiew ptaków i uderzenie kija golfowego.
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-royal-gold transition-colors duration-500 shrink-0">
                       <span className="font-display text-xl text-white">02</span>
                    </div>
                    <div>
                       <h3 className="text-white text-lg font-display uppercase tracking-widest mb-2">Jakość</h3>
                       <p className="text-stone-400 text-sm leading-loose font-light max-w-md">
                         Mistrzowskie utrzymanie greenów i fairwayów. Standard klasy A doceniany przez profesjonalistów.
                       </p>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>

        {/* Elegant Separator at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 flex items-center gap-4 opacity-60">
           <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-royal-gold"></div>
           <div className="w-2.5 h-2.5 rotate-45 border border-royal-gold bg-royal-black"></div>
           <div className="w-16 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-royal-gold"></div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;