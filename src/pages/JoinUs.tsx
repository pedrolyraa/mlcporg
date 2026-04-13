import { motion } from 'framer-motion';
import { Users, ShieldCheck, HeartHandshake, Compass, ArrowRight } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

export default function JoinUs() {
  usePageTitle('Faça Parte');
  return (
    <div className="w-full">
      <section 
        className="relative pt-40 pb-32 bg-mlcp-black text-white text-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/fotofundo.avif')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Você não foi criado para caminhar sozinho
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-24 h-2 bg-mlcp-red mx-auto"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
              Todo homem enfrenta batalhas na vida. Pressão no trabalho, desafios no casamento, responsabilidades com os filhos e lutas internas. No MLCP acreditamos que homens precisam caminhar juntos.
            </p>
            <h2 className="text-3xl font-bold">Aqui você encontrará:</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {[
              { icon: Users, title: 'Amizade verdadeira' },
              { icon: ShieldCheck, title: 'Crescimento espiritual' },
              { icon: HeartHandshake, title: 'Apoio em momentos difíceis' },
              { icon: Compass, title: 'Propósito para sua vida' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-8 text-center border border-gray-100 hover:border-mlcp-red/30 transition-colors"
              >
                <item.icon size={48} className="text-mlcp-red mx-auto mb-6" />
                <h3 className="text-xl font-bold">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://wa.me/5519991695856?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20participar%20da%20comunidade%20MLCP."
              target="_blank" rel="noopener noreferrer"
              className="bg-mlcp-red text-white px-10 py-5 font-bold text-xl hover:bg-mlcp-black transition-colors inline-flex items-center gap-2 group"
            >
              Quero fazer parte
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Background Image Section Divider */}
      <section className="h-96 w-full relative">
         <img 
            src="/images/imagemfundo.avif" 
            alt="Homens unidos" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-mlcp-red/80 mix-blend-multiply"></div>
      </section>
    </div>
  );
}
