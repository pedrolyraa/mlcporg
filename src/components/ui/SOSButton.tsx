import { LifeBuoy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SOSButton() {
  const location = useLocation();
  
  // Hide on SOS page
  if (location.pathname === '/sos-homem') return null;

  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link 
        to="/sos-homem" 
        className="flex items-center justify-center w-16 h-16 bg-mlcp-red rounded-full shadow-2xl shadow-mlcp-red/40 hover:bg-white hover:text-mlcp-red text-white transition-all duration-300 group relative"
      >
        <LifeBuoy size={28} className="absolute group-hover:scale-110 transition-transform" />
      </Link>
      
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-mlcp-black text-white text-xs font-bold py-2 px-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded">
        Precisa de Ajuda?
      </div>
    </motion.div>
  );
}
