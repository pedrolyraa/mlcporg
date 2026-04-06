import { motion } from 'framer-motion';
import { Target, Eye, Shield } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

export default function About() {
  usePageTitle('O Movimento');
  return (
    <div className="w-full">
      {/* Header com Fundo de Imagem Escurecido */}
      <section
        className="relative pt-40 pb-32 bg-mlcp-black text-white bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/fundodois.avif')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter"
          >
            O MOVIMENTO
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-24 h-2 bg-mlcp-red mx-auto"
          />
        </div>
      </section>

      {/* Quem Somos (Agora com Imagem Lateral) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagem do movimento */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden"
            >
              <img
                src="/images/imagemnossahistoria.png"
                alt="Imagem do Movimento MLCP"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-mlcp-red -translate-y-4 -translate-x-4 z-20 hidden md:block" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-mlcp-red translate-y-4 translate-x-4 z-20 hidden md:block" />
            </motion.div>

            {/* Texto Original do Movimento */}
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-sm font-black tracking-[0.2em] text-mlcp-red mb-4 uppercase">Quem Somos</h2>
                <p className="text-2xl md:text-3xl lg:text-4xl font-black text-mlcp-black leading-snug tracking-tighter uppercase">
                  O MLCP – Mãos Limpas e Coração Puro é um movimento de homens comprometidos em viver uma vida alinhada com os princípios de Deus.
                </p>
              </motion.div>
              <div className="w-16 h-1 bg-mlcp-red" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-light text-gray-500 text-base"
              >
                Nosso propósito é levantar homens que sejam líderes em suas famílias e em sua geração. Acreditamos que quando um homem é transformado, uma família inteira pode ser restaurada. Não se trata apenas de ser um bom homem, mas de ser um homem forjado pelo caráter de Cristo, pronto para defender sua fé e proteger sua casa.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores - Agrupados */}
      <section className="py-32 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-mlcp-black">
              Identidade e Propósito
            </h2>
            <p className="text-xl text-gray-500 font-light mb-8">
              Os pilares que sustentam e direcionam o movimento MLCP.
            </p>
            <div className="w-24 h-1 bg-mlcp-red mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            
            {/* Missão Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="relative bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(198,40,40,0.15)] border border-gray-100 hover:border-mlcp-red/30 transition-all duration-500 hover:-translate-y-2 group overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-mlcp-red/5 rounded-full blur-2xl group-hover:bg-mlcp-red/10 transition-colors duration-500" />
              <motion.div 
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-mlcp-red group-hover:bg-mlcp-red group-hover:text-white group-hover:shadow-lg group-hover:shadow-mlcp-red/20 transition-all duration-500 mb-6"
              >
                <Target size={32} strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-2xl font-black text-mlcp-black tracking-tight mb-4 group-hover:text-mlcp-red transition-colors duration-300">
                Nossa Missão
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Formar homens que vivam com mãos limpas e coração puro diante de Deus.
              </p>
            </motion.div>

            {/* Visão Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="relative bg-mlcp-black p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_20px_40px_-15px_rgba(198,40,40,0.4)] border border-white/5 hover:border-mlcp-red/50 transition-all duration-500 hover:-translate-y-2 group overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mlcp-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div 
                whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-mlcp-red group-hover:bg-mlcp-red group-hover:text-white group-hover:shadow-lg group-hover:shadow-mlcp-red/20 transition-all duration-500 mb-6"
              >
                <Eye size={32} strokeWidth={1.5} />
              </motion.div>
              <h3 className="relative z-10 text-2xl font-black text-white tracking-tight mb-4 transition-colors duration-300">
                Nossa Visão
              </h3>
              <p className="relative z-10 text-white/70 leading-relaxed font-light">
                Levar o movimento MLCP para todo o Brasil, levantando homens que sejam sacerdotes de suas casas e líderes inabaláveis em sua geração.
              </p>
            </motion.div>

            {/* Valores Card Resumo */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="relative bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(198,40,40,0.15)] border border-gray-100 hover:border-mlcp-red/30 transition-all duration-500 hover:-translate-y-2 group overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-mlcp-red/5 rounded-full blur-2xl group-hover:bg-mlcp-red/10 transition-colors duration-500" />
              <motion.div 
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-mlcp-red group-hover:bg-mlcp-red group-hover:text-white group-hover:shadow-lg group-hover:shadow-mlcp-red/20 transition-all duration-500 mb-6"
              >
                <Shield size={32} strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-2xl font-black text-mlcp-black tracking-tight mb-4 group-hover:text-mlcp-red transition-colors duration-300">
                Nossos Valores
              </h3>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {['Deus', 'Família', 'Integridade', 'Liderança', 'Serviço', 'Comunhão'].map((val, i) => (
                  <span key={i} className="text-sm font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-full group-hover:bg-mlcp-red/5 group-hover:text-mlcp-red transition-colors">
                    {val}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Nossa História - Movida para o final */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            
            {/* Texto Nossa História */}
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-mlcp-black tracking-tighter uppercase">Nossa História</h2>
                <div className="w-16 h-1 bg-mlcp-red mb-8" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-light"
              >
                Fundado com a missão de transformar a vida de homens por meio do evangelho de Cristo, o Ministério Mãos Limpas e Coração Puro nasceu da necessidade de criar um ambiente de apoio, discipulado e crescimento para líderes espirituais.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-light"
              >
                Desde o início, focamos em realizar encontros e programas que impactam homens, suas famílias e comunidades, oferecendo ferramentas bíblicas para uma vida equilibrada em corpo, alma e espírito.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-light"
              >
                Ao longo dos anos, expandimos nossa atuação por meio de eventos, discipulados e ações voltadas para o serviço ao próximo, sempre fundamentados em nossos três pilares: <strong className="text-mlcp-black border-b border-mlcp-red">Governo e Prosperidade, Relacionamento e Servir</strong>.
              </motion.p>
            </div>

            {/* Imagem Nossa História */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] w-full overflow-hidden order-1 lg:order-2 shadow-2xl rounded-lg"
            >
              <img
                src="/images/imagemnossahistoria.avif"
                alt="História do Movimento MLCP"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Seção MLCP Worship */}
      <section className="py-32 bg-mlcp-black text-white relative overflow-hidden">
        {/* Background elements for depth */}
        <div className="absolute top-0 right-[-10%] w-1/2 h-full bg-white/[0.02] skew-x-[-10deg] -z-10 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-1/3 h-1/2 bg-mlcp-red/10 blur-[120px] rounded-full z-0 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Texto MLCP Worship */}
            <div className="space-y-10 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-mlcp-red" />
                  <span className="text-sm font-black tracking-[0.2em] text-mlcp-red uppercase">A Música no Movimento</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-2 tracking-tighter uppercase leading-[0.9]">
                  MLCP <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">WORSHIP</span>
                </h2>
              </motion.div>

              <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed pr-0 xl:pr-10">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl font-bold text-white leading-snug"
                >
                  A MLCP Worship nasceu no coração de Deus. Desde o nosso primeiro encontro, já existia um som, uma identidade e um propósito.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <strong className="text-white">Não somos apenas uma banda.</strong> Somos homens chamados, unidos por um propósito maior. Hoje, a MLCP Worship tem sido instrumento de Deus, servindo e abençoando igrejas, eventos e movimentos, levando uma atmosfera de fé, entrega e transformação.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Participamos continuamente da Marcha para Jesus em Campinas e em cidades da região, fortalecendo a unidade do corpo de Cristo. Cada integrante serve fielmente em sua igreja local, mas se une ao MLCP para cumprir algo maior: levantar uma geração de homens que adoram a Deus com <strong className="text-mlcp-red font-bold">verdade, intensidade e propósito.</strong>
                </motion.p>
              </div>
            </div>

            {/* Galeria Bento Grid Worship */}
            <div className="grid grid-cols-2 gap-4 h-full min-h-[500px] order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-2 relative rounded-xl overflow-hidden group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/5 bg-gray-900 aspect-video md:aspect-[21/9] lg:aspect-auto lg:h-[400px]"
              >
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                <img 
                  src="/images/mlcpworshipmusicbanda.jpeg" 
                  alt="Banda MLCP Adorando" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-xl overflow-hidden group shadow-lg border border-white/5 bg-gray-900 h-64"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-mlcp-red z-20" />
                <div className="absolute inset-0 bg-mlcp-red/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                <img 
                  src="/images/bandadois.jpeg" 
                  alt="Banda tocando no MLCP" 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative rounded-xl overflow-hidden group shadow-lg border border-white/5 bg-gray-900 h-64"
              >
                <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                <img 
                  src="/images/bandatres.jpeg" 
                  alt="Momento de Adoração MLCP Worship" 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
