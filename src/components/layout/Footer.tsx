import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-mlcp-black text-mlcp-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <img 
                src="/images/logomlcp.avif" 
                alt="MLCP Logo" 
                className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300 brightness-0 invert" 
              />
            </Link>
            <p className="text-mlcp-white/70 text-sm leading-relaxed mb-6">
              Levantando uma geração de homens com mãos limpas e coração puro. Quando um homem muda, uma família inteira é restaurada.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mlcp_oficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mlcp-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:barboanba@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mlcp-red transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/5519991695856?text=Ol%C3%A1%21%20Gostaria%20de%20entrar%20em%20contato%20com%20o%20movimento%20MLCP." target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mlcp-red transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">O Movimento</h4>
            <ul className="space-y-3">
              <li><Link to="/o-movimento" className="text-mlcp-white/70 hover:text-mlcp-white transition-colors text-sm">Quem Somos</Link></li>
              <li><Link to="/eventos" className="text-mlcp-white/70 hover:text-mlcp-white transition-colors text-sm">Experience</Link></li>
              <li><Link to="/testemunhos" className="text-mlcp-white/70 hover:text-mlcp-white transition-colors text-sm">Testemunhos</Link></li>
              <li><a href="/#contato" className="text-mlcp-white/70 hover:text-mlcp-white transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Envolva-se</h4>
            <ul className="space-y-3">
              <li><Link to="/faca-parte" className="text-mlcp-white/70 hover:text-mlcp-white transition-colors text-sm">Faça Parte</Link></li>
              <li><Link to="/leve-o-mlcp" className="text-mlcp-white/70 hover:text-mlcp-white transition-colors text-sm">Leve para sua cidade</Link></li>
              <li><a href="#" className="text-mlcp-white/70 hover:text-mlcp-white transition-colors text-sm">Faça uma doação</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">SOS Homem</h4>
            <p className="text-mlcp-white/70 text-sm leading-relaxed mb-4">
              Precisa de ajuda? Você não está sozinho. Nossos voluntários estão prontos para te ouvir.
            </p>
            <Link to="/sos-homem" className="inline-block bg-mlcp-red text-white px-6 py-2 border-2 border-mlcp-red font-semibold text-sm hover:bg-transparent transition-colors">
              Pedir Ajuda
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-mlcp-white/50">
          <p>&copy; {new Date().getFullYear()} Movimento MLCP. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-mlcp-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-mlcp-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
