import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, ShieldAlert, Users, Phone, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import InfiniteMarquee from '../components/ui/InfiniteMarquee';
import ContactForm from '../components/ui/ContactForm';

// Animações Padronizadas para Staggered Reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 }
  }
};

const fadeUpVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* 
        Hero Section Modernizada 
        Usa o componente AnimatedBackground em vez de uma imagem simples brutal para 
        dar vida à interface sem perder a masculinidade (sombras e vermelhos).
      */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mlcp-black">
        <AnimatedBackground />

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center flex flex-col items-center pt-20 pb-40 md:pb-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="w-full mb-8">
              <InfiniteMarquee />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 max-w-6xl mx-auto tracking-tighter"
            >
              LEVANTANDO UMA GERAÇÃO COM MÃOS LIMPAS E CORAÇÃO PURO
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-16 font-light"
            >
              Quando um homem se levanta, uma família inteira é restaurada. <br className="hidden md:block"/>
              Você não foi criado para caminhar sozinho.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-2xl mx-auto"
            >
              {/* Botão Hover Sweep Moderno */}
              <Link 
                to="/eventos" 
                className="w-full justify-center sm:w-auto px-8 py-5 font-bold text-lg 
                           border-2 border-mlcp-red bg-mlcp-red text-white 
                           hover-sweep hover:text-mlcp-red flex items-center gap-2 group shadow-2xl shadow-mlcp-red/20"
                style={{ color: 'white' } as React.CSSProperties /* hack for currentColor text flip */}
              >
                <span className="relative z-20 group-hover:text-mlcp-red transition-colors duration-300 flex items-center gap-2">
                  Participar de um encontro
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white -z-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              </Link>

              {/* Botão Linha Ghost com Reveal */}
              <Link 
                to="/o-movimento" 
                className="w-full justify-center sm:w-auto px-8 py-5 font-bold text-lg 
                           border-2 border-white/20 text-white hover:border-white transition-all 
                           flex items-center gap-2 group relative overflow-hidden"
              >
                <span className="relative z-20 transition-colors duration-300">Conhecer o MLCP</span>
                <span className="absolute inset-0 bg-white/10 -z-10 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator Animado */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs font-bold tracking-widest uppercase">Descobrir</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-mlcp-red to-transparent"
          />
        </motion.div>
      </section>

      {/* Manifesto Snapshot Modernizado */}
      <section className="py-32 bg-white text-mlcp-black overflow-hidden relative">
        <div className="absolute top-0 right-[-10%] w-1/2 h-full bg-gray-50 skew-x-[-10deg] -z-10" />
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.95]">
                UM HOMEM <br />
                TRANSFORMADO <br/>
                <span className="text-mlcp-red">RESTAURA SUA CASA.</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-500 mb-10 leading-relaxed font-light">
                O MLCP – Mãos Limpas e Coração Puro é um movimento de homens comprometidos em viver uma vida alinhada com os princípios de Deus. Nosso propósito é levantar liderança em famílias e gerações.
              </motion.p>
              
              <ul className="space-y-6 mb-12">
                {[
                  "Honra sua palavra",
                  "Protege sua família",
                  "Vive com integridade",
                  "Busca a presença de Deus",
                  "Ajuda outros homens a se levantarem"
                ].map((item, idx) => (
                  <motion.li key={idx} variants={itemVariants} className="flex items-center gap-4 font-bold text-xl md:text-2xl text-mlcp-black group">
                    <div className="w-12 h-1 bg-gray-200 group-hover:bg-mlcp-red group-hover:w-16 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div variants={itemVariants}>
                <Link to="/o-movimento" className="inline-flex items-center gap-3 font-black text-mlcp-red border-b-2 border-mlcp-red pb-1 hover:text-mlcp-black hover:border-mlcp-black transition-colors text-lg uppercase tracking-wide group">
                  Ler o manifesto completo <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Imagem estática do manifesto */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-[3/4] lg:aspect-square group overflow-hidden"
            >
              <img 
                src="/images/andrecavaquinhomlcp.avif" 
                alt="André Valadão MLCP" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Elementos geométricos decorativos */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-mlcp-red -translate-y-4 translate-x-4 z-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-mlcp-red translate-y-4 -translate-x-4 z-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção SOS Homem Dinâmica */}
      <section className="bg-mlcp-black py-32 border-y border-white/10 relative overflow-hidden group">
        <AnimatedBackground />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <ShieldAlert size={800} className="text-white transform group-hover:scale-110 transition-transform duration-1000" />
        </motion.div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="w-20 h-20 mx-auto bg-mlcp-red/20 text-mlcp-red rounded-full flex items-center justify-center mb-8">
              <ShieldAlert size={40} />
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              PRECISA DE AJUDA?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl text-white/70 mb-12 leading-relaxed font-light">
              Se você está passando por um momento difícil, saiba que você não precisa lutar sozinho. Um voluntário vai conversar com você no máximo sigilo.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                to="/sos-homem" 
                className="inline-block bg-white text-mlcp-black border-2 border-white px-10 py-5 font-black text-xl hover:bg-transparent hover:text-white transition-all duration-300 uppercase tracking-widest shadow-2xl shadow-white/10"
              >
                Falar com um voluntário agora
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Community Section com Hover Cards Avançados */}
      <section className="py-32 bg-gray-50 text-mlcp-black">
        <div className="container mx-auto px-4 md:px-8">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <Users size={48} className="text-mlcp-red mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[1]">VOCÊ NÃO FOI CRIADO PARA CAMINHAR SOZINHO</h2>
            <p className="text-2xl text-gray-500 font-light">
              Aqui você encontrará amizade verdadeira, crescimento espiritual e propósito inabalável.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {[
              { title: "ENCONTROS", desc: "Reuniões focadas no desenvolvimento do caráter masculino à luz da palavra, olho no olho." },
              { title: "TREINAMENTOS", desc: "Formação profunda de liderança para tornar cada homem o arquiteto e sacerdote de seu lar." },
              { title: "EXPERIÊNCIAS", desc: "Atividades outdoor extremas desenhadas para forjar a resiliência e a irmandade." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="bg-white p-12 border border-gray-100 card-hover-pro relative overflow-hidden group"
              >
                {/* Microinteração de fundo progressivo avermelhado sutil */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-mlcp-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="text-mlcp-red/20 font-black text-8xl absolute -top-4 -right-4 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                  0{i+1}
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-6 tracking-wide group-hover:text-mlcp-red transition-colors">{feature.title}</h3>
                  <div className="w-12 h-1 bg-gray-200 mb-6 group-hover:bg-mlcp-red group-hover:w-full transition-all duration-500" />
                  <p className="text-gray-600 font-light text-lg leading-relaxed group-hover:text-gray-900 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link to="/eventos" className="inline-flex items-center gap-3 font-black text-mlcp-black hover:text-mlcp-red transition-colors text-xl uppercase tracking-widest group">
              Explorar próximos eventos 
              <span className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-mlcp-red group-hover:text-white transition-all">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Seção Doações */}
      <section className="py-24 bg-[#EBEBEB] text-mlcp-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            {/* Imagem */}
            <div className="w-full h-full min-h-[300px] relative overflow-hidden">
              <img 
                src="/images/imagemdoacao.avif" 
                alt="Doação MLCP" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Texto */}
            <div className="flex flex-col justify-center py-8">
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                Faça a sua <span className="text-mlcp-red">doação</span>
              </h2>
              <div className="w-16 h-1 bg-black mb-8" />
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                Suas doações ao Ministério Mãos Limpas e Coração Puro nos permitem continuar nossa missão de capacitar homens cristãos, fortalecer famílias e promover liderança íntegra e serviço à comunidade.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 font-medium">
                Cada contribuição é um investimento no crescimento espiritual e moral de líderes comprometidos com os princípios de Cristo, impactando vidas e transformando comunidades.
              </p>
              
              <div className="bg-black text-white px-8 py-3 font-bold rounded-full inline-flex items-center justify-center self-start text-sm">
                Faça sua doação: PIX: 308.846.608-93
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-24 bg-white text-mlcp-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Para mais dúvidas entre em contato:</h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-24 max-w-4xl mx-auto">
            {/* Esquerda: Informações de Contato */}
            <div className="space-y-10 flex flex-col justify-center h-full w-full max-w-xs">
              <div className="flex items-center gap-6 group">
                <div className="text-black group-hover:text-mlcp-red transition-colors">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <a href="https://wa.me/5519991695856?text=Ol%C3%A1%21%20Gostaria%20de%20entrar%20em%20contato%20com%20o%20movimento%20MLCP." target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">(19) 99169-5856</a>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="text-black group-hover:text-mlcp-red transition-colors">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <a href="mailto:barboanba@gmail.com" className="text-sm font-medium hover:underline">barboanba@gmail.com</a>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="text-black group-hover:text-mlcp-red transition-colors">
                  <div className="bg-black text-white p-1 rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-mlcp-red transition-colors relative left-[-4px]">
                    <Instagram size={18} />
                  </div>
                </div>
                <a href="https://www.instagram.com/mlcp_oficial/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium -ml-2 hover:underline">@mlcp_oficial</a>
              </div>
            </div>

            {/* Direita: Formulário */}
            <div className="w-full max-w-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
