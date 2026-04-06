import { motion } from 'framer-motion';
import { Play, Quote } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Testimonials() {
  usePageTitle('Testemunhos');
  const testimonials = [
    {
      name: "Rafael Cardoso",
      text: "Eu estava a um passo de perder minha família. Encontrei no MLCP irmãos que me confrontaram com amor e me ajudaram a reposicionar minha vida como sacerdote do meu lar.",
      role: "Membro desde 2021"
    },
    {
      name: "Marcos Vinícius",
      text: "Ser homem hoje é um desafio. O movimento me deu ferramentas práticas e bíblicas para lidar com a pressão do trabalho sem sacrificar o tempo e a qualidade com a minha esposa e filhos.",
      role: "Líder de Pequeno Grupo"
    },
    {
      name: "Roberto Almeida",
      text: "Quando cheguei, pensei que estava sozinho em minhas lutas. Ver outros homens, de diferentes idades, compartilhando as mesmas batalhas e vencendo juntos me transformou completamente.",
      role: "Membro desde 2023"
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 bg-mlcp-black text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Testemunhos</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Histórias reais de homens comuns que experimentaram uma transformação extraordinária.
          </p>
        </div>
      </section>

      {/* Video Highlight Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vidas Transformadas</h2>
            <div className="w-16 h-1 bg-mlcp-red mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Video Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-mlcp-black group cursor-pointer overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1543807535-c27d88523c94?q=80&w=1000&auto=format&fit=crop" 
                alt="Testemunho Destaque" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-mlcp-red rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Play size={24} className="ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 text-xs font-bold uppercase tracking-wider mb-2 inline-block">Restauração Familiar</span>
                <h3 className="text-xl font-bold text-white">"Meu casamento foi salvo no limite."</h3>
              </div>
            </motion.div>

            {/* Video Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video bg-mlcp-black group cursor-pointer overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
                alt="Testemunho Destaque" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-mlcp-red rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Play size={24} className="ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 text-xs font-bold uppercase tracking-wider mb-2 inline-block">Liderança</span>
                <h3 className="text-xl font-bold text-white">"Aprendi a ser o sacerdote do meu lar."</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 border border-gray-100 shadow-xl shadow-gray-200/50 relative"
              >
                <Quote size={40} className="text-gray-100 absolute top-6 right-6" />
                <p className="text-gray-700 italic text-lg leading-relaxed mb-8 relative z-10">"{test.text}"</p>
                <div>
                  <h4 className="font-bold text-mlcp-black text-lg">{test.name}</h4>
                  <p className="text-sm text-mlcp-red font-semibold">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
