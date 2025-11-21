
import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-white text-black py-20 md:py-32 relative">
       {/* Background Pattern */}
       <div className="absolute inset-0 pattern-grid opacity-50 pointer-events-none"></div>

       <div className="max-w-[1920px] mx-auto px-6 md:px-12 mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-end border-b border-black/10 pb-8 relative z-10">
          <div className="text-left w-full md:w-auto">
            <span className="text-black/40 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-2">Galeria</span>
            <h2 className="text-4xl md:text-7xl font-display uppercase text-black">
              Sierra <span className="font-serif italic lowercase text-royal-gold">moments</span>
            </h2>
          </div>
          {/* Text explicitly aligned left as requested */}
          <p className="text-black/60 max-w-md text-left mt-6 md:mt-0 font-light text-sm md:text-base">
            Zobacz piękno parku w Pętkowicach i architekturę naszego Resortu.
          </p>
       </div>

       {/* Grid Layout */}
       <div className="max-w-[1920px] mx-auto px-4 md:px-8 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 auto-rows-[300px] md:auto-rows-[600px]">
            
            {/* Item 1 */}
            <div className="md:col-span-7 relative group overflow-hidden h-[300px] md:h-auto shadow-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625459755251-322b87147683?q=80&w=2070')" }}
              ></div>
              <div className="absolute inset-0 flex items-end p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-lg md:text-xl font-serif italic">Mistrzowskie Otwarcie</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="md:col-span-5 relative group overflow-hidden bg-royal-black flex items-center justify-center min-h-[300px] shadow-sm">
               {/* Subtle Topo Pattern in dark box */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
               
               <div className="text-center p-8 z-10">
                 <h3 className="text-white text-2xl md:text-3xl font-serif italic mb-4">Pętkowice</h3>
                 <p className="text-gray-400 font-light text-xs md:text-sm leading-loose">
                   Z dala od zgiełku miasta, ale blisko Trójmiasta. Idealna lokalizacja dla golfistów szukających harmonii.
                 </p>
               </div>
               <div className="absolute inset-0 border border-white/5 m-4"></div>
            </div>

            {/* Item 3 */}
            <div className="md:col-span-12 relative group overflow-hidden h-[250px] md:h-auto shadow-sm">
               <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984')" }}
              ></div>
              <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/90 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 shadow-lg">
                 <span className="text-black text-[10px] md:text-xs font-bold tracking-widest uppercase">Club House Apartments</span>
              </div>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 mt-8 md:mt-8 text-left">
            <div className="md:col-span-1 pt-8 md:pt-12 border-t border-black/10">
              <span className="text-3xl md:text-4xl font-display block mb-2 text-royal-gold">01</span>
              <h4 className="text-base md:text-lg font-bold uppercase tracking-widest mb-4">Turnieje</h4>
              <p className="text-gray-600 font-light text-sm">
                Sierra Golf Resort regularnie gości prestiżowe turnieje ogólnopolskie, w tym cykle PGA Polska.
              </p>
            </div>
            <div className="md:col-span-1 pt-8 md:pt-12 border-t border-black/10">
              <span className="text-3xl md:text-4xl font-display block mb-2 text-royal-gold">02</span>
              <h4 className="text-base md:text-lg font-bold uppercase tracking-widest mb-4">Trackman</h4>
              <p className="text-gray-600 font-light text-sm">
                Nowoczesne studio analizy swingu dostępne przez cały rok. Trenuj jak zawodowcy.
              </p>
            </div>
            <div className="md:col-span-1 flex items-center justify-center bg-royal-gold/10 p-8 cursor-pointer group hover:bg-royal-gold transition-colors duration-500 mt-4 md:mt-0 border border-royal-gold/20" onClick={() => window.dispatchEvent(new Event('open-concierge-booking'))}>
               <div className="text-center">
                 <p className="font-serif italic text-xl md:text-2xl text-black mb-2 group-hover:text-white transition-colors">Gotowy do gry?</p>
                 <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold border-b border-black group-hover:border-white group-hover:text-white transition-colors">Rezerwuj Tee Time</span>
               </div>
            </div>
         </div>
       </div>
    </section>
  );
};

export default Gallery;
