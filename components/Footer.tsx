import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Brand (Left Large) - Left Aligned */}
          <div className="md:col-span-5 text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 md:mb-8 tracking-wide">SIERRA <span className="font-semibold">GOLF RESORT</span></h2>
            <p className="text-stone-500 text-sm leading-loose max-w-md font-light mb-8">
              Więcej niż golf. To styl życia w zgodzie z naturą. Zapraszamy do Pętkowic, gdzie pasja spotyka się z relaksem w najczystszej postaci.
            </p>
            <div className="flex space-x-8 md:space-x-6">
              <a href="#" className="text-stone-600 hover:text-royal-gold transition-colors"><Facebook size={20}/></a>
              <a href="#" className="text-stone-600 hover:text-royal-gold transition-colors"><Instagram size={20}/></a>
              <a href="#" className="text-stone-600 hover:text-royal-gold transition-colors"><Twitter size={20}/></a>
            </div>
          </div>

          {/* Navigation - Left Aligned */}
          <div className="md:col-span-3 text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-royal-gold mb-6 md:mb-8">Menu</h3>
            <ul className="space-y-4 text-sm text-stone-400 font-light">
              <li><a href="#about" className="hover:text-white hover:pl-2 transition-all duration-300">Resort</a></li>
              <li><a href="#course" className="hover:text-white hover:pl-2 transition-all duration-300">Pole Golfowe</a></li>
              <li><a href="#dining" className="hover:text-white hover:pl-2 transition-all duration-300">Restauracja</a></li>
              <li><a href="#residences" className="hover:text-white hover:pl-2 transition-all duration-300">Apartamenty</a></li>
              <li><a href="#membership" className="hover:text-white hover:pl-2 transition-all duration-300">Członkostwo</a></li>
            </ul>
          </div>

          {/* Contact Info - Left Aligned */}
          <div className="md:col-span-4 text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-royal-gold mb-6 md:mb-8">Kontakt</h3>
            <ul className="space-y-6 text-sm text-stone-400 font-light">
              <li className="flex items-start">
                <MapPin size={16} className="mr-4 mt-1 text-royal-gold/70 flex-shrink-0" />
                <span>Pętkowice, ul. Golfowa 1<br />84-200 Wejherowo, Polska</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-4 text-royal-gold/70 flex-shrink-0" />
                <span>+48 58 778 49 00</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-4 text-royal-gold/70 flex-shrink-0" />
                <span>recepcja@sierragolf.pl</span>
              </li>
            </ul>
            
            <div className="mt-10 pt-10 border-t border-white/10">
              <p className="text-xs text-stone-600 uppercase tracking-widest">Newsletter</p>
              <div className="mt-4 flex border-b border-stone-700 pb-2">
                <input type="email" placeholder="Adres Email" className="bg-transparent border-none text-white w-full focus:ring-0 text-sm placeholder-stone-600 font-light outline-none" />
                <button className="text-royal-gold text-xs font-bold uppercase hover:text-white transition-colors">Zapisz</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center text-stone-600 text-[10px] uppercase tracking-widest gap-4 md:gap-0">
          <p>&copy; 2024 Sierra Golf Resort. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-stone-400">Polityka Prywatności</a>
            <a href="#" className="hover:text-stone-400">Regulamin</a>
            <a href="#" className="hover:text-stone-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;