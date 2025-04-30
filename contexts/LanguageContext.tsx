import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type LanguageKey = 'en' | 'es';

interface LanguageContextProps {
  language: LanguageKey;
  setLanguage: (lang: LanguageKey) => void;
  t: (key: string) => string;
}

const translations: Record<LanguageKey, Record<string, string>> = {
  en: {
    dashboard: 'Dashboard',
    formsManager: 'Forms Manager',
    surveyManager: 'Survey Manager',
    settings: 'Settings',
    save: 'Save',
    new: 'Nuevo',
    search: 'Search...',
    general: 'General',
    theme: 'Theme',
    language: 'Language',
    appTitle: 'App Title',
    shortTitle: 'Short Title',
    logoUrl: 'Logo URL',
    apiBaseUrl: 'API Base URL',
    profile: 'Profile',
    notifications: 'Notifications',
    logout: 'Logout',
    noResponses: 'No responses available.',
  },
  es: {
    dashboard: 'Tablero',
    formsManager: 'Administrador de Formularios',
    surveyManager: 'Administrador de Encuestas',
    settings: 'Configuraciones',
    save: 'Guardar',
    new: 'Nuevo',
    search: 'Buscar...',
    general: 'General',
    theme: 'Tema',
    language: 'Idioma',
    appTitle: 'Título de la App',
    shortTitle: 'Título Corto',
    logoUrl: 'URL del Logo',
    apiBaseUrl: 'URL Base API',
    profile: 'Perfil',
    notifications: 'Notificaciones',
    logout: 'Cerrar Sesión',
    noResponses: 'No hay respuestas disponibles.',
  },
};

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageKey>('en');

  useEffect(() => {
    const saved = (localStorage.getItem('surveyui:lang') as LanguageKey) || 'en';
    setLanguageState(saved);
  }, []);

  const setLanguage = (lang: LanguageKey) => {
    setLanguageState(lang);
    localStorage.setItem('surveyui:lang', lang);
    window.location.reload();
  };

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
