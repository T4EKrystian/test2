
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative border-t border-white/5 overflow-hidden">
      
      {/* Background Image - Heavily Blurred */}
      <div className="absolute inset-0 z-0">
         <img 
           src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop" 
           alt="Golf Background" 
           className="w-full h-full object-cover opacity-40 blur-sm"
         />
         <div className="absolute inset-0 bg-royal-black/90"></div>
         <div className="absolute inset-0 pattern-grid opacity-10"></div>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
           <div className="relative text-left">
              <Quote className="text-royal-gold mb-8 opacity-50" size={48} />
              <h3 className="text-3xl md:text-5xl font-serif text-white italic leading-tight mb-8">
                "Sierra Golf Resort to jedno z najpiękniejszych pól w Polsce. Stan utrzymania greenów i fairwayów jest perfekcyjny."
              </h3>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden ring-2 ring-royal-gold/20">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070" alt="Member" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <p className="text-white font-display tracking-widest text-sm uppercase">Tomasz W.</p>
                    <p className="text-royal-gold text-xs uppercase tracking-wider opacity-70">PGA Polska Pro</p>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 gap-8 border-l border-white/10 pl-0 lg:pl-12 text-left">
              <div className="group cursor-default p-4 rounded-sm hover:bg-white/5 transition-colors duration-500">
                 <div className="flex gap-2 mb-2 text-royal-gold">★★★★★</div>
                 <p className="text-stone-300 font-light italic text-sm mb-4 leading-relaxed group-hover:text-white transition-colors">
                    "Apartamenty przy polu to strzał w dziesiątkę. Cisza, spokój i rano kawa na tarasie z widokiem na 10. dołek."
                 </p>
                 <span className="text-xs text-white/40 uppercase tracking-widest block">Katarzyna M.</span>
              </div>
              <div className="w-full h-[1px] bg-white/5"></div>
              <div className="group cursor-default p-4 rounded-sm hover:bg-white/5 transition-colors duration-500">
                 <div className="flex gap-2 mb-2 text-royal-gold">★★★★★</div>
                 <p className="text-stone-300 font-light italic text-sm mb-4 leading-relaxed group-hover:text-white transition-colors">
                    "Jakość obsługi w recepcji i restauracji na najwyższym poziomie. Czuję się tu zawsze mile widziany."
                 </p>
                 <span className="text-xs text-white/40 uppercase tracking-widest block">Piotr L.</span>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
