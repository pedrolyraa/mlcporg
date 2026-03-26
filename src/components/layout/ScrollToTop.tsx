import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se houver hash na URL, tenta rolar suavemente até a seção ID correspondente.
    if (hash) {
      // Timeout mínimo (para o fim do event loop) para garantir 
      // renderização do componente alvo antes de fazer a rolagem
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      // Rola pro topo nativamente (instantâneo e leve sem custo frame-a-frame visível CPU)
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Componente puramente lógico e performático (não insere nodos na tela)
  return null;
}
