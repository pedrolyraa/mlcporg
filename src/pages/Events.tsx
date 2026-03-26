import { motion } from 'framer-motion';
import { Target, Users, Flame, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 80, damping: 20 }
  }
};

export default function Events() {
  return (
    <div className="w-full bg-mlcp-black min-h-screen text-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/eventosum.png" 
            alt="MLCP Experience Hero" 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mlcp-black/40 via-mlcp-black/20 to-mlcp-black"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center pt-32 pb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-3">
              <div className="w-12 h-1 bg-mlcp-red" />
              <span className="text-sm md:text-base font-black tracking-[0.3em] text-mlcp-red uppercase">Um Encontro. Uma Transformação.</span>
              <div className="w-12 h-1 bg-mlcp-red" />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter uppercase leading-[0.85]"
            >
              MLCP <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">EXPERIENCE</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-16 font-light leading-relaxed"
            >
              O MLCP Experience é um encontro de homens criado para gerar transformação real. Nosso propósito é simples: levar homens a terem um encontro verdadeiro com Jesus.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Link 
                to="/#contato" 
                className="inline-flex items-center gap-3 bg-mlcp-red hover:bg-white text-white hover:text-mlcp-black px-10 py-5 font-black text-lg md:text-xl uppercase tracking-widest transition-all duration-300 group shadow-[0_0_40px_-10px_rgba(198,40,40,0.5)]"
              >
                Participar do próximo encontro
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. O que é o MLCP Experience */}
      <section className="py-32 bg-white text-mlcp-black relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Imagens (Esquerda) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative h-full min-h-[500px]">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="col-span-2 relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src="/images/eventosdois.png" alt="Homens Adorando" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="col-span-1 relative aspect-square rounded-2xl overflow-hidden shadow-xl mt-[-10%]"
              >
                <img src="/images/eventostres.png" alt="Irmandade" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
              <div className="col-span-1 flex items-end justify-start pb-8">
                <div className="w-32 h-32 border-b-8 border-r-8 border-mlcp-red" />
              </div>
            </div>

            {/* Texto (Direita) */}
            <div className="lg:col-span-6 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-sm font-black tracking-widest text-mlcp-red mb-4 uppercase">O que é a Experiência</h2>
                <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.95]">
                  Mais do que <br/>um evento
                </h3>
                <div className="w-20 h-2 bg-mlcp-black mb-8" />
                
                <div className="space-y-6 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                  <p>
                    O MLCP Experience é uma experiência completa onde conectamos o espiritual e o relacional. Em nossos encontros reunimos:
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      "Palavra que confronta e direciona.",
                      "Louvor poderoso com nossa banda MLCP Worship.",
                      "Comunhão verdadeira entre homens.",
                      "Ambiente de fé, conexão e crescimento.",
                      "Momentos descontraídos, como o nosso famoso MLCP Burger."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 font-medium text-mlcp-black">
                        <span className="mt-1 text-mlcp-red bg-mlcp-red/10 p-1 rounded-full"><Target size={16} /></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p>
                    Realizamos nossos encontros em igrejas parceiras e espaços estratégicos, sempre com o único objetivo de alcançar os corações dos homens e fortalecer vidas.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Para Quem é o Experience */}
      <section className="py-32 bg-mlcp-black text-white relative border-y border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] skew-x-[15deg] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Para quem é o encontro?</h2>
            <p className="text-xl md:text-2xl text-white/60 font-light">
              O MLCP Experience é desenhado para homens inconformados, que buscam ser forjados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { title: "Crescer Espiritualmente", icon: <Flame size={32} />, desc: "Para homens que não se contentam com uma fé morna e buscam intimidade." },
              { title: "Fortalecer a Família", icon: <Shield size={32} />, desc: "Para aqueles que querem liderar seu lar com mãos limpas e o coração puro." },
              { title: "Direção e Propósito", icon: <Target size={32} />, desc: "Para quem está perdido ou precisa recalibrar sua jornada à luz de Cristo." },
              { title: "Irmandade", icon: <Users size={32} />, desc: "Para aqueles que entendem que não foram feitos para caminhar na solidão." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gray-900 border border-white/10 p-10 rounded-2xl hover:bg-gray-800 hover:border-mlcp-red/30 transition-all duration-300 group text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-mlcp-red/10 text-mlcp-red flex items-center justify-center mb-6 group-hover:bg-mlcp-red group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-tight uppercase">{feature.title}</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed group-hover:text-white/80 transition-colors">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center bg-gray-900 p-12 md:p-16 rounded-3xl border border-mlcp-red/20 outline outline-1 outline-offset-8 outline-mlcp-red/10 shadow-[0_0_50px_-15px_rgba(198,40,40,0.3)] max-w-5xl mx-auto"
          >
             <h3 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase break-words px-4">
               "Aqui, homens se conectam, são edificados e saem diferentes de como chegaram."
             </h3>
          </motion.div>

        </div>
      </section>

      {/* 4. Imersão / Encerramento Visual */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
        <img 
          src="/images/eventosquatro.png" 
          alt="Imersão MLCP Experience" 
          className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-[2s]"
        />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-mlcp-black to-transparent z-20" />
      </motion.section>

    </div>
  );
}
