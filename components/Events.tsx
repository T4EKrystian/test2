
import React from 'react';

const Events: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-royal-charcoal text-white overflow-hidden">
      {/* Decorative Luxury Pattern */}
      <div className="absolute inset-0 pattern-luxury opacity-[0.03] pointer-events-none"></div>
      <div className="absolute inset-0 border-y border-white/5 pointer-events-none"></div>
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
           <span className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Celebrations</span>
           <h2 className="text-4xl md:text-7xl font-display uppercase">
             Sierra <span className="font-serif italic text-royal-gold lowercase">events</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 h-auto md:h-[600px]">
           
           {/* Wedding Card */}
           <div className="group relative h-[450px] md:h-full overflow-hidden cursor-pointer border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" 
                alt="Weddings" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
              
              {/* Inner Frame Border */}
              <div className="absolute inset-4 border border-white/20 pointer-events-none z-20 transition-all duration-500 group-hover:inset-6 group-hover:border-royal-gold/50"></div>

              <div className="absolute top-0 left-0 w-full h-full p-8 md:p-12 flex flex-col justify-between items-start z-30">
                 <div className="bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20 shadow-lg">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white">Wesela</span>
                 </div>
                 
                 <div className="bg-black/40 p-6 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:p-0 rounded-sm">
                    <h3 className="text-3xl md:text-5xl font-serif italic text-white mb-4 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">W ogrodzie</h3>
                    <p className="text-white/90 text-sm font-light max-w-sm md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 leading-relaxed">
                       Powiedz "Tak" w otoczeniu 11 tysięcy drzew. Organizujemy przyjęcia weselne w plenerze oraz w eleganckich wnętrzach Domu Klubowego.
                    </p>
                 </div>
              </div>
           </div>

           {/* Corporate Card */}
           <div className="group relative h-[450px] md:h-full overflow-hidden cursor-pointer border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
                alt="Events" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
              
              {/* Inner Frame Border */}
              <div className="absolute inset-4 border border-white/20 pointer-events-none z-20 transition-all duration-500 group-hover:inset-6 group-hover:border-royal-gold/50"></div>

              <div className="absolute top-0 left-0 w-full h-full p-8 md:p-12 flex flex-col justify-between items-start z-30">
                 <div className="bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20 shadow-lg">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white">Biznes</span>
                 </div>
                 
                 <div className="bg-black/40 p-6 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:p-0 rounded-sm">
                    <h3 className="text-3xl md:text-5xl font-serif italic text-white mb-4 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Spotkania</h3>
                    <p className="text-white/90 text-sm font-light max-w-sm md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 leading-relaxed">
                       Prestiżowe otoczenie dla Twoich negocjacji. Sale konferencyjne, lunche biznesowe i turnieje firmowe.
                    </p>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Events;
