
import React, { useEffect, useState } from 'react';
import { Wind, ArrowUpRight, Flag, Map } from 'lucide-react';

const Signature: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] min-h-screen overflow-hidden flex flex-col lg:flex-row">
      
      {/* LEFT SIDE: Visual Drama (60% width) */}
      <div className="relative w-full lg:w-[65%] h-[60vh] lg:h-auto overflow-hidden group">
        {/* Parallax Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-75 will-change-transform scale-110"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1576225106612-ea30b5bb16b0?q=80&w=2000&auto=format&fit=crop')",
            transform: `translateY(${offset * 0.05}px) scale(1.1)`
          }}
        ></div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent lg:bg-gradient-to-t lg:from-black/80 lg:via-transparent lg:to-transparent"></div>

        {/* Giant Stroke Number "18" - Artistic Element */}
        <div className="absolute bottom-0 right-0 lg:right-12 transform translate-y-1/4 lg:translate-y-0 mix-blend-overlay opacity-50 pointer-events-none">
           <span 
            className="text-[25rem] leading-none font-display font-bold text-transparent"
            style={{ 
              WebkitTextStroke: '2px rgba(255,255,255,0.5)',
            }}
           >
             18
           </span>
        </div>
      </div>

      {/* RIGHT SIDE: Editorial & Technical Data (40% width) */}
      <div className="relative w-full lg:w-[35%] bg-royal-charcoal border-l border-white/5 p-8 lg:p-16 flex flex-col justify-center z-10">
         
         {/* Background Pattern */}
         <div className="absolute inset-0 pattern-grid opacity-5"></div>

         {/* Content Container */}
         <div className="relative z-10 animate-fade-up">
            
            {/* Integrated Header Badge */}
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-white/5 rounded-full border border-white/10">
                  <Flag size={12} className="text-royal-gold" />
               </div>
               <span className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase">
                  Signature Hole
               </span>
            </div>

            <h3 className="text-royal-gold font-serif italic text-2xl mb-2">The Finisher</h3>
            <h2 className="text-5xl lg:text-7xl font-display text-white uppercase leading-[0.9] tracking-tight mb-8">
               Island <br/> Green
            </h2>
            
            <div className="w-12 h-[2px] bg-royal-gold mb-8"></div>

            <p className="text-stone-400 font-light text-sm leading-loose mb-12">
               Majestatyczne zakończenie rundy. Par 5 wymagające precyzyjnego uderzenia nad wodą. 
               Green chroniony jest przez jezioro i strategicznie rozmieszczone bunkry, 
               tworząc naturalny amfiteatr pod oknami Domu Klubowego.
            </p>

            {/* Tech Specs Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-white/10 pt-10">
               <div>
                  <span className="block text-stone-500 text-[9px] uppercase tracking-widest mb-2">Dystans (Pro)</span>
                  <span className="font-display text-3xl text-white">485m</span>
               </div>
               <div>
                  <span className="block text-stone-500 text-[9px] uppercase tracking-widest mb-2">HCP</span>
                  <span className="font-display text-3xl text-white">4</span>
               </div>
               <div>
                  <span className="block text-stone-500 text-[9px] uppercase tracking-widest mb-2">Wiatr (Avg)</span>
                  <div className="flex items-center gap-2 text-white">
                     <Wind size={18} className="text-royal-gold" />
                     <span className="font-display text-xl">NW 12km/h</span>
                  </div>
               </div>
               <div>
                  <span className="block text-stone-500 text-[9px] uppercase tracking-widest mb-2">Green Speed</span>
                  <span className="font-display text-xl text-white">10.5 Stimp</span>
               </div>
            </div>

            {/* Interactive Element: Stylized Course Map */}
            <div className="mt-12 pt-8 border-t border-white/10 relative h-32 w-full opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-crosshair group">
               <span className="absolute top-0 right-0 text-[8px] uppercase text-stone-600 tracking-widest">Hole Layout</span>
               
               {/* Abstract SVG Map of a Dogleg Right over water */}
               <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                  {/* Water Hazard */}
                  <path d="M180,80 Q220,40 280,90" fill="none" stroke="#1e3a8a" strokeWidth="20" className="opacity-30" />
                  
                  {/* Fairway Path */}
                  <path 
                    d="M20,50 C60,50 120,50 160,50 C200,50 220,20 260,20" 
                    fill="none" 
                    stroke="#3f3f3f" 
                    strokeWidth="12" 
                    strokeLinecap="round"
                  />
                  {/* Green */}
                  <circle cx="260" cy="20" r="8" fill="#C5A059" className="animate-pulse" />
                  
                  {/* Trajectory Line (Animated) */}
                  <path 
                    d="M20,50 Q140,50 260,20" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1" 
                    strokeDasharray="4,4"
                    className="opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                  />
               </svg>
            </div>
            
            <button className="mt-8 group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white hover:text-royal-gold transition-colors">
               Strategia Gry <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
         </div>
      </div>

    </section>
  );
};

export default Signature;
