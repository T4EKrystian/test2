
import React from 'react';
import { Flag, Wind, Trophy, Map } from 'lucide-react';

const CourseDetails: React.FC = () => {
  const stats = [
    { label: 'Architect', value: 'Cameron Sinclair', icon: <Map size={16} /> },
    { label: 'Par', value: '72', icon: <Flag size={16} /> },
    { label: 'Długość', value: '6300m', icon: <Trophy size={16} /> },
    { label: 'HCP', value: '0-36', icon: <Wind size={16} /> },
  ];

  return (
    <section id="course" className="relative py-24 md:py-32 bg-royal-black border-t border-white/5">
       {/* Standardized Background */}
       <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none"></div>

       <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div className="text-left animate-fade-up">
               <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <span className="h-[1px] w-12 bg-royal-gold"></span>
                  <span className="text-royal-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                    Statystyki
                  </span>
               </div>
               <h2 className="text-4xl md:text-7xl font-display text-white uppercase tracking-tight">
                 Course <span className="text-stone-500 font-serif italic lowercase">details</span>
               </h2>
            </div>
            <p className="text-stone-400 font-light text-sm leading-loose max-w-md text-left md:text-right animate-fade-up delay-100">
               Zaprojektowane przez Camerona Sinclaira. <br/>
               Mistrzowska precyzja i szkocki charakter w sercu Kaszub.
            </p>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-12 md:py-16">
            {stats.map((stat, idx) => (
               <div key={idx} className="flex flex-col items-start group cursor-default hover:bg-white/5 p-4 rounded-sm transition-colors duration-300">
                  <div className="text-royal-gold mb-4 opacity-50 group-hover:scale-110 transition-transform duration-500">
                     {stat.icon}
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-2 block">
                     {stat.label}
                  </span>
                  <span className="text-3xl md:text-5xl font-display text-white group-hover:text-royal-gold transition-colors duration-300">
                     {stat.value}
                  </span>
               </div>
            ))}
         </div>

         <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-8">
               <h3 className="text-xl font-display text-white uppercase tracking-widest border-l-2 border-royal-gold pl-6">
                  Charakterystyka
               </h3>
               <p className="text-stone-400 text-sm leading-loose font-light">
                  Pole typu Parkland. Ponad 11 000 drzew i krzewów stwarza niepowtarzalny mikroklimat.
                  Szybkie greeny (śr. 10 Stimp) wymagają precyzyjnego puttowannia.
                  Liczne bunkry i przeszkody wodne testują strategię gry na każdym dołku.
               </p>
            </div>
            <div className="space-y-8">
               <h3 className="text-xl font-display text-white uppercase tracking-widest border-l-2 border-royal-gold pl-6">
                  Udogodnienia
               </h3>
               <ul className="grid grid-cols-1 gap-4 text-stone-400 text-sm font-light">
                  <li className="flex items-center gap-4">
                     <span className="w-1.5 h-1.5 bg-royal-gold rounded-full"></span>
                     GPS w każdym wózku golfowym
                  </li>
                  <li className="flex items-center gap-4">
                     <span className="w-1.5 h-1.5 bg-royal-gold rounded-full"></span>
                     System nawadniania Rain Bird
                  </li>
                  <li className="flex items-center gap-4">
                     <span className="w-1.5 h-1.5 bg-royal-gold rounded-full"></span>
                     Opieka Marshalla
                  </li>
               </ul>
            </div>
         </div>
       </div>
    </section>
  );
};

export default CourseDetails;
