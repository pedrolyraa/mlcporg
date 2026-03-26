import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.telefone) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    const template = `Olá! Gostaria de tirar algumas dúvidas. Nome: ${formData.nome} | Email: ${formData.email} | Telefone: ${formData.telefone}`;
    const url = `https://api.whatsapp.com/send?phone=5519991695856&text=${encodeURIComponent(template)}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs text-gray-600 mb-1 font-sans">Nome completo *</label>
        <input 
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          type="text" 
          className="w-full border border-gray-400 px-3 py-2 text-sm focus:outline-none focus:border-mlcp-black transition-colors" 
        />
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-1 font-sans">Email *</label>
        <input 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          type="email" 
          className="w-full border border-gray-400 px-3 py-2 text-sm focus:outline-none focus:border-mlcp-black transition-colors" 
        />
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-1 font-sans">Telefone *</label>
        <input 
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
          type="tel" 
          className="w-full border border-gray-400 px-3 py-2 text-sm focus:outline-none focus:border-mlcp-black transition-colors" 
        />
      </div>
      <button 
        type="submit"
        className="w-full bg-[#8B0000] hover:bg-red-900 transition-colors text-white py-3 text-sm block mt-6 text-center font-bold"
      >
        Enviar
      </button>
    </form>
  );
}
