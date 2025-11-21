import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBooking = () => {
    window.dispatchEvent(new Event('open-concierge-booking'));
  };

  // Polish Translation - Sierra Specific
  const navLinks = [
    { name: 'Resort', href: '#heritage' },
    { name: 'Apartamenty', href: '#residences' },
    { name: 'Pole Golfowe', href: '#experience' },
    { name: 'Klub', href: '#membership' },
    { name: 'Restauracja', href: '#dining' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isOpen
            ? 'py-3 md:py-4 bg-royal-black/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
            : 'py-6 md:py-8 bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="relative z-50 group flex items-center gap-3">
              <Shield size={22} className="text-royal-gold" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-display font-bold tracking-widest text-white group-hover:text-royal-gold transition-colors">
                  SIERRA
                </span>
                <span className="text-[8px] md:text-[9px] tracking-[0.3em] text-white/60 group-hover:text-white transition-colors uppercase">
                  Golf Resort
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-16">
              <div className="flex items-center gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[10px] uppercase tracking-[0.25em] text-white/70 hover:text-royal-gold transition-colors relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-royal-gold group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></span>
                  </a>
                ))}
              </div>

              {/* Magnetic CTA */}
              <button 
                onClick={openBooking}
                className="group relative overflow-hidden border border-white/10 px-8 py-3 hover:border-royal-gold transition-colors duration-500"
              >
                <span className="relative z-10 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white group-hover:text-black transition-colors duration-300">
                  Concierge <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform"/>
                </span>
                <div className="absolute inset-0 bg-royal-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 text-white hover:text-royal-gold transition-colors p-2 -mr-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-royal-black flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-royal-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none"></div>

        <div className="flex flex-col items-center gap-6 md:gap-8 relative z-10 w-full px-6">
          <span className="text-royal-gold text-[10px] tracking-[0.5em] mb-4 md:mb-8 border-b border-royal-gold/30 pb-2">NAWIGACJA</span>
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-3xl md:text-6xl font-display text-white hover:text-royal-gold transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${100 + idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { setIsOpen(false); openBooking(); }}
            className="mt-8 md:mt-12 text-[10px] uppercase tracking-[0.3em] text-black bg-royal-gold px-10 py-4 hover:bg-white transition-all duration-300 w-full md:w-auto text-center"
          >
            Zarezerwuj Tee Time
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;