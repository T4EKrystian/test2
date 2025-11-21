import React from 'react';

const CourseDetails: React.FC = () => {
  return (
    <section className="bg-[#050505] py-24 md:py-32 relative border-b border-white/5 overflow-hidden">
      
      {/* Background: Topographic Map Pattern (Subtle & Organic) */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M10 10c10 20 30 10 50 30s30 40 30 60M-10 50c20-10 40 10 60 0s40-30 60-10' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
             backgroundSize: '300px 300px',
             filter: 'blur(1px)'
           }}>
      </div>
      
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5 pt-12">
             <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-royal-gold/60"></span>
                <span className="text-royal-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                  Course Data
                </span>
             </div>
             
             <h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] mb-8">
               Parametry <br/> <span className="italic text-stone-500">Mistrzowskie</span>
             </h2>
             
             <p className="text-stone-400 font-light text-sm md:text-base leading-loose mb-10">
               Sierra Golf Resort to pole typu Parkland, które wymaga od gracza nie tylko siły, ale przede wszystkim strategii. Zaprojektowane przez Camerona Sinclaira, wykorzystuje naturalne walory krajobrazu Pętkowic.
             </p>

             <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 group cursor-default">
                   <span className="text-stone-500 text-xs uppercase tracking-widest group-hover:text-white transition-colors">Architekt</span>
                   <span className="text-white font-display tracking-widest uppercase text-sm">Cameron Sinclair</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 group cursor-default">
                   <span className="text-stone-500 text-xs uppercase tracking-widest group-hover:text-white transition-colors">Rok Otwarcia</span>
                   <span className="text-white font-display tracking-widest uppercase text-sm">2002</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 group cursor-default">
                   <span className="text-stone-500 text-xs uppercase tracking-widest group-hover:text-white transition-colors">System Nawadniania</span>
                   <span className="text-white font-display tracking-widest uppercase text-sm">Rain Bird</span>
                </div>
             </div>
             
             <button className="mt-10 text-[10px] text-royal-gold uppercase tracking-[0.3em] border-b border-royal-gold/30 pb-1 hover:text-white hover:border-white transition-colors">
                Pobierz Scorecard (PDF)
             </button>
          </div>

          {/* Right Column: Elegant Stats Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
             
             {/* Stat 1 */}
             <div className="group relative pl-8 border-l border-white/10 hover:border-royal-gold transition-colors duration-700">
                <span className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-royal-black border border-royal-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="text-[10px] text-stone-500 uppercase tracking-[0.3em] block mb-2">Dystans (Back Tee)</span>
                <div className="flex items-baseline gap-2">
                   <span className="text-5xl md:text-7xl font-display text-white font-light">6058</span>
                   <span className="text-royal-gold font-serif italic text-xl">metrów</span>
                </div>
             </div>

             {/* Stat 2 */}
             <div className="group relative pl-8 border-l border-white/10 hover:border-royal-gold transition-colors duration-700">
                <span className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-royal-black border border-royal-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="text-[10px] text-stone-500 uppercase tracking-[0.3em] block mb-2">Slope Rating</span>
                <div className="flex items-baseline gap-2">
                   <span className="text-5xl md:text-7xl font-display text-white font-light">134</span>
                   <span className="text-stone-600 font-serif italic text-sm ml-2">Trudność</span>
                </div>
             </div>

             {/* Stat 3 */}
             <div className="group relative pl-8 border-l border-white/10 hover:border-royal-gold transition-colors duration-700">
                <span className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-royal-black border border-royal-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="text-[10px] text-stone-500 uppercase tracking-[0.3em] block mb-2">Par Pola</span>
                <div className="flex items-baseline gap-2">
                   <span className="text-5xl md:text-7xl font-display text-white font-light">72</span>
                   <span className="text-stone-600 font-serif italic text-sm ml-2">Standard</span>
                </div>
             </div>

             {/* Stat 4 */}
             <div className="group relative pl-8 border-l border-white/10 hover:border-royal-gold transition-colors duration-700">
                <span className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-royal-black border border-royal-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="text-[10px] text-stone-500 uppercase tracking-[0.3em] block mb-2">Trawa (Greeny)</span>
                <div className="flex items-baseline gap-2">
                   <span className="text-4xl md:text-5xl font-display text-white font-light leading-tight">Bentgrass</span>
                </div>
                <p className="text-xs text-stone-500 mt-2 font-light">Penn G-2 variety</p>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CourseDetails;