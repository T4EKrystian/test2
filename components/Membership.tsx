import React from 'react';
import { Check } from 'lucide-react';

const Membership: React.FC = () => {
  const openBooking = () => {
    window.dispatchEvent(new Event('open-concierge-booking'));
  };

  return (
    <section id="membership" className="py-20 md:py-32 relative overflow-hidden bg-royal-charcoal">
      {/* Premium Background Image - Dark Leather/Mesh Texture */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1615803709074-9580be50cdf6?q=80&w=2555&auto=format&fit=crop" 
            alt="Premium Texture" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-royal-black via-transparent to-royal-black"></div>
         {/* Texture Overlay */}
         <div className="absolute inset-0 pattern-diagonal opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-left md:text-center mb-16 md:mb-24 animate-fade-up">
          <span className="text-royal-gold text-[9px] md:text-[10px] tracking-[0.4em] uppercase border border-royal-gold/30 px-4 py-2 rounded-full bg-royal-gold/5 backdrop-blur-sm">Sierra Club</span>
          <h2 className="text-4xl md:text-7xl font-serif text-white mt-8">Karty Członkowskie</h2>
          <p className="text-stone-400 mt-6 font-light max-w-2xl mx-auto text-sm md:text-lg">Dołącz do społeczności Sierra Golf Resort. Ciesz się przywilejami i grą na polu klasy mistrzowskiej.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-[#121212]/80 backdrop-blur-md border border-white/5 p-8 md:p-10 hover:border-white/20 transition-all duration-500 group flex flex-col rounded-sm text-left shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5 group-hover:bg-royal-gold/50 transition-colors"></div>
            <div className="mb-8">
               <h3 className="text-2xl font-display text-white mb-2">Academy</h3>
               <div className="text-royal-gold text-sm font-serif italic">Dla początkujących</div>
            </div>
            <p className="text-stone-400 text-sm mb-8 md:mb-10 font-light leading-relaxed">Idealny start dla osób rozpoczynających przygodę z golfem. Nauka i praktyka.</p>
            <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 flex-1">
              <li className="text-stone-300 text-xs font-light flex items-start gap-3"><Check size={14} className="text-royal-gold mt-0.5"/> Nielimitowany Driving Range</li>
              <li className="text-stone-300 text-xs font-light flex items-start gap-3"><Check size={14} className="text-royal-gold mt-0.5"/> Lekcje z trenerem PRO</li>
              <li className="text-stone-300 text-xs font-light flex items-start gap-3"><Check size={14} className="text-royal-gold mt-0.5"/> Korzystanie z Akademii (Par 3)</li>
            </ul>
            <button onClick={openBooking} className="w-full py-4 border border-white/10 text-[9px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all">Więcej</button>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="bg-[#050505] border border-royal-gold p-8 md:p-12 transform md:-translate-y-8 relative shadow-[0_0_50px_rgba(197,160,89,0.1)] flex flex-col z-20 rounded-sm text-left">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-royal-gold text-black px-6 py-2 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] whitespace-nowrap shadow-lg">
              Pełne Członkostwo
            </div>
            <div className="mb-8 text-center md:text-left">
               <h3 className="text-3xl md:text-4xl font-display text-royal-gold mb-2">Unlimited</h3>
               <div className="text-white/60 text-sm font-serif italic">Bez limitów</div>
            </div>
            <p className="text-stone-400 text-sm mb-8 md:mb-10 font-light leading-relaxed text-left border-b border-white/10 pb-8">
              Pełen dostęp do pola mistrzowskiego 7 dni w tygodniu oraz prawo udziału w turniejach klubowych.
            </p>
            <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 flex-1 px-0 md:px-4">
              <li className="text-white text-sm font-light flex items-start gap-4"><Check size={16} className="text-royal-gold mt-0.5"/> Gra bez opłat Green Fee</li>
              <li className="text-white text-sm font-light flex items-start gap-4"><Check size={16} className="text-royal-gold mt-0.5"/> Rezerwacja Tee Time z wyprzedzeniem</li>
              <li className="text-white text-sm font-light flex items-start gap-4"><Check size={16} className="text-royal-gold mt-0.5"/> Zniżki w Pro Shop i Restauracji</li>
              <li className="text-white text-sm font-light flex items-start gap-4"><Check size={16} className="text-royal-gold mt-0.5"/> Przechowalnia sprzętu</li>
              <li className="text-white text-sm font-light flex items-start gap-4"><Check size={16} className="text-royal-gold mt-0.5"/> Prawo zapraszania gości</li>
            </ul>
            <button onClick={openBooking} className="w-full py-5 bg-royal-gold text-black text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all shadow-lg hover:shadow-royal-gold/20">Zostań Członkiem</button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#121212]/80 backdrop-blur-md border border-white/5 p-8 md:p-10 hover:border-white/20 transition-all duration-500 group flex flex-col rounded-sm text-left shadow-xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-white/5 group-hover:bg-royal-gold/50 transition-colors"></div>
            <div className="mb-8">
               <h3 className="text-2xl font-display text-white mb-2">Business</h3>
               <div className="text-royal-gold text-sm font-serif italic">Corporate</div>
            </div>
            <p className="text-stone-400 text-sm mb-8 md:mb-10 font-light leading-relaxed">Oferta dla firm. Wykorzystaj golf do budowania relacji biznesowych w prestiżowym otoczeniu.</p>
            <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 flex-1">
              <li className="text-stone-300 text-xs font-light flex items-start gap-3"><Check size={14} className="text-royal-gold mt-0.5"/> Karty imienne dla zarządu</li>
              <li className="text-stone-300 text-xs font-light flex items-start gap-3"><Check size={14} className="text-royal-gold mt-0.5"/> Vouchery dla klientów</li>
              <li className="text-stone-300 text-xs font-light flex items-start gap-3"><Check size={14} className="text-royal-gold mt-0.5"/> Możliwość brandingu na polu</li>
              <li className="text-stone-300 text-xs font-light flex items-start gap-3"><Check size={14} className="text-royal-gold mt-0.5"/> Eventy firmowe</li>
            </ul>
            <button onClick={openBooking} className="w-full py-4 border border-white/10 text-[9px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all">Kontakt B2B</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;