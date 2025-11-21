
import React, { useEffect } from 'react';
import { Shield, Award, Clock } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="heritage" className="relative bg-royal-black overflow-hidden">
      
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
                  <p className="text-royal-gold font-serif italic text-lg md:text-xl mb-2 md:mb-3">"The Sanctuary"</p>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest leading-relaxed">
                    Unikalny mikroklimat stworzony przez tysiące roślin. Graj w ciszy.
                  </p>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="order-2 md:order-1 text-left">
              <div className="animate-fade-up">
                <span className="text-royal-gold text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase block mb-4 md:mb-6 flex items-center gap-3">
                   <Shield size={14} />
                   Charakter Pola
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 md:mb-10 leading-[1.1]">
                  Golf w sercu <br /> <span className="italic text-royal-gold">natury.</span>
                </h2>
                
                <div className="space-y-6 text-stone-400 font-light leading-loose text-sm md:text-lg max-w-xl border-l border-white/10 pl-6">
                  <p>
                    Sierra Golf Resort to mistrzowskie pole typu <span className="text-white font-medium">"Parkland"</span>. 
                    To oaza spokoju, gdzie 11 000 drzew tworzy naturalne ściany dla każdego z 18 dołków.
                  </p>
                  <p>
                    Znajdujemy się w Pętkowicach, zaledwie 25 minut drogi od Trójmiasta. 
                    To idealne miejsce na ucieczkę od zgiełku miasta, bez konieczności dalekiej podróży.
                  </p>
                </div>
              </div>
              
              {/* Info Grid */}
              <div className="mt-10 md:mt-12 grid grid-cols-2 gap-6 md:gap-8 border-t border-white/10 pt-8">
                <div className="flex gap-4 items-start group">
                   <div className="p-3 bg-white/5 rounded-sm text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-colors">
                      <Award size={20} />
                   </div>
                   <div>
                      <span className="block text-lg md:text-xl font-display text-white mb-1">Klasa A</span>
                      <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-500 leading-tight block">Standard Mistrzowski</span>
                   </div>
                </div>
                <div className="flex gap-4 items-start group">
                   <div className="p-3 bg-white/5 rounded-sm text-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-colors">
                      <Clock size={20} />
                   </div>
                   <div>
                      <span className="block text-lg md:text-xl font-display text-white mb-1">4h 15min</span>
                      <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-500 leading-tight block">Średni czas gry</span>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Add custom keyframes for marquee if not in global css, injecting style tag here for component isolation */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Philosophy;
