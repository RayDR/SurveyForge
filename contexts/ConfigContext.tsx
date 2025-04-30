import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AppConfig {
  title: string;
  shortTitle: string;
  logo: string;
  apiBaseUrl: string;
}

interface ConfigContextProps {
  config: AppConfig;
  setConfig: (config: AppConfig) => void;
}

const defaultConfig: AppConfig = {
  title: 'Survey Forge',
  shortTitle: 'SF',
  logo: '📊',
  apiBaseUrl: 'http://api.surveys.domoforge.com/'
};

const ConfigContext = createContext<ConfigContextProps>({
  config: defaultConfig,
  setConfig: () => {}
});

export const useConfig = () => useContext(ConfigContext);

export function ConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfigState] = useState<AppConfig>(defaultConfig);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setConfigState({
        title: localStorage.getItem('surveyui:title') || defaultConfig.title,
        shortTitle: localStorage.getItem('surveyui:shortTitle') || defaultConfig.shortTitle,
        logo: localStorage.getItem('surveyui:logo') || defaultConfig.logo,
        apiBaseUrl: localStorage.getItem('surveyui:api') || defaultConfig.apiBaseUrl
      });
    }
  }, []);

  const setConfig = (cfg: AppConfig) => {
    localStorage.setItem('surveyui:title', cfg.title);
    localStorage.setItem('surveyui:shortTitle', cfg.shortTitle);
    localStorage.setItem('surveyui:logo', cfg.logo);
    localStorage.setItem('surveyui:api', cfg.apiBaseUrl);
    setConfigState(cfg);
  };

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
}
