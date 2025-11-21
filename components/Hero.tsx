
import React, { useEffect, useState } from 'react';
import { MapPin, Sun, Trophy, TreePine, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBooking = () => {
    window.dispatchEvent(new Event('open-concierge-booking'));
  };

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-royal-black flex flex-col justify-between">
      
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=2226&auto=format&fit=crop"
          alt="Sierra Golf Resort Park"
          className="w-full h-full object-cover object-center transition-transform duration-[3s] ease-out scale-105"
          style={{ 
            filter: 'brightness(0.75) contrast(1.15)',
            transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.15}px)` 
          }}
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]"></div>
        <div className="absolute inset-0 pattern-grid opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Top Widget Area */}
      <div className={`relative z-20 px-6 md:px-12 pt-24 md:pt-32 flex justify-between items-start w-full transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-white/90 backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full border border-white/5">
             <Sun size={12} className="text-royal-gold animate-spin-slow" />
             <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase">21°C • Pętkowice</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 px-3">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[9px] md:text-[10px] tracking-wider uppercase">Green Speed: 10.5</span>
          </div>
        </div>
        
        <div className="hidden md:flex flex-col items-end text-right">
           <span className="text-royal-gold text-[10px] tracking-[0.3em] uppercase">Est. 2002</span>
           <span className="text-white/40 text-[9px] tracking-widest uppercase">25km od Trójmiasta</span>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 w-full px-4 md:px-12 flex flex-col items-center justify-center flex-grow text-center -mt-16 md:-mt-0">
        
        <div className="flex flex-col items-center">
          {/* Animated Title */}
          <h1 className="relative leading-[0.85] mb-6 md:mb-12 flex flex-col items-center drop-shadow-2xl">
            <span 
              className={`reveal-text block text-[16vw] md:text-[11vw] font-display font-medium text-white tracking-tighter`}
              style={{ textShadow: '0 20px 50px rgba(0,0,0,0.6)' }}
            >
              <span className={`inline-block transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>SIERRA</span>
            </span>
            
            <div className={`flex items-center gap-4 md:gap-8 -mt-[2vw] md:-mt-[1.5vw] transform transition-all duration-1000 delay-700 ${loaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
               <div className="h-[1px] w-8 md:w-24 bg-gradient-to-r from-transparent via-royal-gold to-transparent"></div>
               <span className="text-[4vw] md:text-[2.5vw] font-serif italic text-white/90 whitespace-nowrap tracking-wide">
                Golf Resort
               </span>
               <div className="h-[1px] w-8 md:w-24 bg-gradient-to-r from-transparent via-royal-gold to-transparent"></div>
            </div>
          </h1>
        </div>

        {/* Description & CTA */}
        <div className={`flex flex-col items-center gap-8 md:gap-12 transform transition-all duration-1000 delay-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-stone-200 text-xs md:text-sm font-light leading-relaxed tracking-widest text-center max-w-[280px] md:max-w-lg uppercase border-b border-white/10 pb-4">
            Mistrzowskie pole klasy A <br/> 
            <span className="text-royal-gold">Parkland Character</span>
          </p>
          
          <button 
            onClick={openBooking}
            className="group relative px-8 py-3 md:px-12 md:py-4 overflow-hidden transition-all duration-500"
          >
            <div className="absolute inset-0 border border-white/30 group-hover:border-royal-gold/0 transition-colors duration-500"></div>
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-royal-gold transition-colors duration-500"></div>
            
            <span className="relative z-10 flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white group-hover:text-black transition-colors font-bold">
              Rezerwuj Tee Time
            </span>
          </button>
        </div>

      </div>

      {/* Bottom Info Rail */}
      <div className={`relative z-20 w-full border-t border-white/10 bg-black/60 backdrop-blur-xl transition-all duration-1000 delay-[1200ms] ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
         <div className="grid grid-cols-3 divide-x divide-white/5">
            
            {/* Stat 1 */}
            <div className="py-5 md:py-8 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
               <Trophy size={16} className="text-royal-gold mb-2 md:mb-3 opacity-80 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
               <span className="text-white font-display text-xl md:text-3xl leading-none mb-1">18</span>
               <span className="text-[8px] md:text-[9px] uppercase tracking-[0.25em] text-white/50 group-hover:text-white/80 transition-colors">Dołków</span>
            </div>

            {/* Stat 2 */}
            <div className="py-5 md:py-8 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
               <TreePine size={16} className="text-royal-gold mb-2 md:mb-3 opacity-80 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
               <span className="text-white font-display text-xl md:text-3xl leading-none mb-1">11k</span>
               <span className="text-[8px] md:text-[9px] uppercase tracking-[0.25em] text-white/50 group-hover:text-white/80 transition-colors">Drzew</span>
            </div>

            {/* Stat 3 */}
            <div className="py-5 md:py-8 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
               <MapPin size={16} className="text-royal-gold mb-2 md:mb-3 opacity-80 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
               <span className="text-white font-display text-xl md:text-3xl leading-none mb-1">72</span>
               <span className="text-[8px] md:text-[9px] uppercase tracking-[0.25em] text-white/50 group-hover:text-white/80 transition-colors">Par</span>
            </div>

         </div>
         
         {/* Mobile Scroll Indicator - Slightly adjusted vertical alignment */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-royal-black rounded-full border border-white/20 md:hidden w-8 h-8 flex items-center justify-center shadow-lg z-30">
            <ChevronDown size={16} className="text-royal-gold animate-bounce mt-1" strokeWidth={1.5} />
         </div>
      </div>
    </div>
  );
};

export default Hero;
