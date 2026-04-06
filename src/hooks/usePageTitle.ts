import { useEffect } from 'react';

const SITE_NAME = 'MLCP Oficial';

export function usePageTitle(pageTitle?: string) {
  useEffect(() => {
    if (pageTitle) {
      document.title = `${pageTitle} | ${SITE_NAME}`;
    } else {
      document.title = `${SITE_NAME} – Mãos Limpas e Coração Puro`;
    }

    return () => {
      document.title = `${SITE_NAME} – Mãos Limpas e Coração Puro`;
    };
  }, [pageTitle]);
}
