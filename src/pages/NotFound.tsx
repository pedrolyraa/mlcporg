import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Página não encontrada');

  return (
    <div className="min-h-screen bg-mlcp-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.03] select-none leading-none">
          404
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-mlcp-red/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-mlcp-red/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="relative z-10 text-center px-4 max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 inline-block"
        >
          <span className="text-8xl md:text-9xl font-black text-mlcp-red leading-none">404</span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-24 h-1 bg-mlcp-red mx-auto mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-3xl md:text-5xl font-black mb-4 tracking-tighter"
        >
          PÁGINA NÃO ENCONTRADA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-white/60 text-lg mb-12 font-light"
        >
          Parece que esse caminho não existe. Mas você não precisa caminhar sozinho — volte ao início.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 bg-mlcp-red text-white px-8 py-4 font-bold text-lg hover:bg-red-700 transition-colors"
          >
            <Home size={20} />
            Ir para o início
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-8 py-4 font-bold text-lg hover:border-white transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
