import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'O Movimento', path: '/o-movimento' },
  { name: 'Experience', path: '/eventos' },
  { name: 'Faça Parte', path: '/faca-parte' },
  { name: 'SOS Homem', path: '/sos-homem' },
  { name: 'Leve o MLCP', path: '/leve-o-mlcp' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        scrolled ? 'bg-mlcp-black/80 backdrop-blur-xl py-4 shadow-2xl shadow-black/20 border-b border-white/5' : 'bg-gradient-to-b from-mlcp-black/80 to-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src="/images/logomlcp.avif" 
              alt="MLCP Logo" 
              className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav Modernizado */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-bold tracking-widest uppercase py-2 transition-colors duration-300 group ${
                  location.pathname === link.path ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
                {/* Linha animada sob os links (glassmorphism sweep) */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-mlcp-red transform origin-left transition-transform duration-300 ease-out ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-mlcp-red transition-colors backdrop-blur-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="lg:hidden absolute top-full left-0 w-full bg-mlcp-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block text-2xl font-black tracking-tighter transition-colors ${
                      location.pathname === link.path ? 'text-mlcp-red' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
