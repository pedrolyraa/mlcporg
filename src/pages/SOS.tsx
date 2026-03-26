import { motion } from 'framer-motion';
import { ShieldAlert, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function SOS() {
  const [formData, setFormData] = useState({
    nome: '',
    cidade: '',
    whatsapp: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.cidade || !formData.whatsapp) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    const template = `🚨 [SOS HOMEM] Preciso de ajuda e gostaria de falar com um voluntário. Nome: ${formData.nome} | Cidade/Estado: ${formData.cidade} | WhatsApp: ${formData.whatsapp} | Mensagem: ${formData.mensagem || 'Nenhuma'}`;
    const url = `https://api.whatsapp.com/send?phone=5519991695856&text=${encodeURIComponent(template)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen bg-mlcp-black text-white flex flex-col justify-center py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          
          {/* Header Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <ShieldAlert size={64} className="text-mlcp-red" />
            <h1 className="text-5xl md:text-7xl font-black">Precisa de ajuda?</h1>
            <div className="w-24 h-2 bg-mlcp-red" />
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              Se você está passando por um momento difícil, saiba que você não precisa lutar sozinho. Um dos nossos voluntários pode conversar com você com <strong className="text-white">respeito e confidencialidade</strong>.
            </p>
          </motion.div>

          {/* Form Setup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white text-mlcp-black p-8 md:p-12 shadow-2xl relative"
          >
            {/* Design detail */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-mlcp-red -mr-4 -mt-4 -z-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-mlcp-black border-2 border-mlcp-red -ml-4 -mb-4 -z-10" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="nome" className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mlcp-red transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="cidade" className="block text-sm font-bold text-gray-700 mb-2">Cidade</label>
                <input 
                  type="text" 
                  id="cidade" 
                  name="cidade"
                  required
                  value={formData.cidade}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mlcp-red transition-all"
                  placeholder="Sua cidade / estado"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-bold text-gray-700 mb-2">WhatsApp</label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mlcp-red transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-bold text-gray-700 mb-2">Mensagem (opcional)</label>
                <textarea 
                  id="mensagem" 
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mlcp-red transition-all resize-none"
                  placeholder="Diga-nos brevemente o que aconteceu..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-mlcp-red text-white font-bold text-lg py-4 hover:bg-mlcp-black transition-colors flex justify-center items-center gap-2 group"
              >
                Falar com um voluntário
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
