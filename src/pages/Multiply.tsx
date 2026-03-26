import { motion } from 'framer-motion';
import { Globe, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Multiply() {
  const [formData, setFormData] = useState({
    nome: '',
    cidade: '',
    estado: '',
    whatsapp: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.cidade || !formData.estado || !formData.whatsapp) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    const template = `🌍 [LEVAR MLCP] Tenho interesse em iniciar um grupo na minha cidade. Nome: ${formData.nome} | Cidade: ${formData.cidade} | Estado: ${formData.estado} | WhatsApp: ${formData.whatsapp}`;
    const url = `https://api.whatsapp.com/send?phone=5519991695856&text=${encodeURIComponent(template)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4 md:px-8 mt-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Globe size={64} className="text-mlcp-red mx-auto mb-6" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 text-mlcp-black"
          >
            Leve o MLCP para sua cidade
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed font-light"
          >
            O MLCP nasceu com o propósito de levantar homens em todo o Brasil. Se você deseja iniciar um grupo de homens na sua cidade, entre em contato conosco e receba as orientações.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-gray-200 shadow-xl p-8 md:p-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-bold text-gray-700 mb-2">Seu Nome Completo</label>
              <input 
                type="text" 
                id="nome" 
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-300 px-4 py-4 focus:outline-none focus:ring-2 focus:ring-mlcp-red transition-all"
                placeholder="Ex: João da Silva"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cidade" className="block text-sm font-bold text-gray-700 mb-2">Cidade onde deseja iniciar</label>
                <div className="relative">
                  <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    id="cidade" 
                    name="cidade"
                    required
                    value={formData.cidade}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-mlcp-red transition-all"
                    placeholder="Ex: Campinas"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="estado" className="block text-sm font-bold text-gray-700 mb-2">Estado</label>
                <input 
                  type="text" 
                  id="estado" 
                  name="estado"
                  required
                  value={formData.estado}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 px-4 py-4 focus:outline-none focus:ring-2 focus:ring-mlcp-red transition-all"
                  placeholder="Ex: SP"
                />
              </div>
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-bold text-gray-700 mb-2">WhatsApp para contato</label>
              <input 
                type="tel" 
                id="whatsapp" 
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-300 px-4 py-4 focus:outline-none focus:ring-2 focus:ring-mlcp-red transition-all"
                placeholder="(00) 00000-0000"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-mlcp-black text-white font-bold text-lg py-5 mt-4 hover:bg-mlcp-red transition-colors flex justify-center items-center gap-2 group"
            >
              Quero iniciar um grupo MLCP
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
