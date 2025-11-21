
import React, { useEffect, useState } from 'react';
import { MapPin, Wind, Sun, ArrowDown, Trophy, TreePine } from 'lucide-react';

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
      
      {/* Background Image with Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=2226&auto=format&fit=crop"
          alt="Sierra Golf Resort Park"
          className="w-full h-full object-cover object-center transition-transform duration-[3s] ease-out scale-105"
          style={{ 
            filter: 'brightness(0.85) contrast(1.1)',
            transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.1}px)` 
          }}
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        <div className="absolute inset-0 pattern-grid opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Top Widget Area (Mobile Preview Enhancement) */}
      <div className={`relative z-20 px-6 md:px-12 pt-24 md:pt-32 flex justify-between items-start w-full transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-white/90 backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full border border-white/5">
             <Sun size={14} className="text-royal-gold animate-spin-slow" />
             <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase">21°C • Słonecznie</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 px-3">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[9px] md:text-[10px] tracking-wider uppercase">Pole Otwarte</span>
          </div>
        </div>
        
        <div className="hidden md:flex flex-col items-end text-right">
           <span className="text-royal-gold text-[10px] tracking-[0.3em] uppercase">Est. 2024</span>
           <span className="text-white/40 text-[9px] tracking-widest uppercase">Pętkowice, Poland</span>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 w-full px-4 md:px-12 flex flex-col items-center justify-center flex-grow text-center -mt-16 md:-mt-0">
        
        <div className="flex flex-col items-center">
          {/* Animated Title */}
          <h1 className="relative leading-[0.85] mb-6 md:mb-10 drop-shadow-2xl flex flex-col items-center">
            <span 
              className={`block text-[15vw] md:text-[10vw] font-display font-medium text-white tracking-tighter transform transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-20 opacity-0 blur-xl'}`} 
              style={{ textShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
            >
              SIERRA
            </span>
            <div className={`flex items-center gap-3 md:gap-8 -mt-[2vw] md:-mt-[1.5vw] transform transition-all duration-1000 delay-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
               <div className="h-[1px] w-6 md:w-24 bg-royal-gold/80"></div>
               <span className="text-[4.5vw] md:text-[3vw] font-serif italic text-white/90 whitespace-nowrap tracking-wide">
                Golf Resort
               </span>
               <div className="h-[1px] w-6 md:w-24 bg-royal-gold/80"></div>
            </div>
          </h1>
        </div>

        {/* Description & CTA */}
        <div className={`flex flex-col items-center gap-6 md:gap-10 transform transition-all duration-1000 delay-700 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <p className="text-stone-200 text-xs md:text-sm font-light leading-relaxed tracking-widest text-center max-w-[280px] md:max-w-lg drop-shadow-lg uppercase">
            Mistrzowskie pole klasy A <br/> 25km od Gdyni
          </p>
          
          <button 
            onClick={openBooking}
            className="group relative px-8 py-3 md:px-10 md:py-4 overflow-hidden transition-all duration-500 rounded-sm"
          >
            <div className="absolute inset-0 border border-white/40 group-hover:border-royal-gold/0 transition-colors duration-500"></div>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-royal-gold transition-colors duration-500"></div>
            
            <span className="relative z-10 flex items-center gap-3 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white group-hover:text-black transition-colors font-bold">
              Odkryj Resort
            </span>
          </button>
        </div>

      </div>

      {/* Bottom Info Rail (Mobile Enhanced) */}
      <div className={`relative z-20 w-full border-t border-white/10 bg-black/60 backdrop-blur-md transition-all duration-1000 delay-[900ms] ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
         <div className="grid grid-cols-3 divide-x divide-white/10">
            
            {/* Stat 1 */}
            <div className="py-4 md:py-6 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
               <Trophy size={14} className="text-royal-gold mb-1.5 md:mb-2 opacity-80 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
               <span className="text-white font-display text-lg md:text-2xl leading-none mb-0.5">18</span>
               <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-white/60">Dołków</span>
            </div>

            {/* Stat 2 */}
            <div className="py-4 md:py-6 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
               <TreePine size={14} className="text-royal-gold mb-1.5 md:mb-2 opacity-80 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
               <span className="text-white font-display text-lg md:text-2xl leading-none mb-0.5">Par 72</span>
               <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-white/60">Mistrzowskie</span>
            </div>

            {/* Stat 3 */}
            <div className="py-4 md:py-6 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
               <MapPin size={14} className="text-royal-gold mb-1.5 md:mb-2 opacity-80 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
               <span className="text-white font-display text-lg md:text-2xl leading-none mb-0.5">25km</span>
               <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-white/60">Od Gdyni</span>
            </div>

         </div>
      </div>
    </div>
  );
};

export default Hero;