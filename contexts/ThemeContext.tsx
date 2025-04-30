import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type ThemeKey = 'light' | 'dark' | 'red' | 'blue';

interface ThemeContextProps {
  themeKey: ThemeKey;
  setTheme: (key: ThemeKey) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  themeKey: 'light',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeKey, setThemeKey] = useState<ThemeKey>('light');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem('surveyui:theme') as ThemeKey) || 'light';
    setThemeKey(saved);
    setLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('surveyui:theme', themeKey);
    document.documentElement.className = `theme-${themeKey}`;
  }, [themeKey]);

  if (!loaded) return null;

  return (
    <ThemeContext.Provider value={{ themeKey, setTheme: setThemeKey }}>
      {children}
    </ThemeContext.Provider>
  );
}
