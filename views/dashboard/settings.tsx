// pages/dashboard/views/settings.tsx

import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { LanguageKey, useLanguage } from '../../contexts/LanguageContext';
import DashboardTitle from '../../components/modules/Dashboard/DashboardTitle';
import ThemeSelector from '../../components/general/ThemeSelector';
import Tabs from '../../components/general/Tabs';
import Breadcrumbs from '../../components/modules/Dashboard/BreadcrumbsDashboard';

export default function Settings() {
  const { themeKey, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const [title, setTitle] = useState('');
  const [shortTitle, setShortTitle] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [apiUrl, setApiUrl] = useState('');
  const { t } = useLanguage();

  const [tempLanguage, setTempLanguage] = useState<LanguageKey>('en');

  useEffect(() => {
    setTitle(localStorage.getItem('surveyui:title') || 'Survey Forge');
    setShortTitle(localStorage.getItem('surveyui:shortTitle') || 'SF');
    setLogoUrl(localStorage.getItem('surveyui:logo') || '');
    setApiUrl(localStorage.getItem('surveyui:api') || 'https://surveys.api.domoforge.com/api/');
    setTempLanguage((localStorage.getItem('surveyui:lang') as LanguageKey) || 'en');
  }, []);

  const handleSave = () => {
    localStorage.setItem('surveyui:title', title);
    localStorage.setItem('surveyui:shortTitle', shortTitle);
    localStorage.setItem('surveyui:logo', logoUrl);
    localStorage.setItem('surveyui:api', apiUrl);
    localStorage.setItem('surveyui:lang', tempLanguage);
    alert('Settings saved!');
    window.location.reload();
  };

  return (
    <div className="space-y-6">
      <DashboardTitle title="Application Settings" icon="⚙️" />
      <Breadcrumbs />

      <Tabs
        tabs={[
          { label: t('general'), content: (
            <div className="grid gap-4 max-w-xl">
              {/* Tu contenido General */}
              <div>
                <label className="block font-semibold">App Title</label>
                <input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="input"
                />
              </div>

              <div>
                <label className="block font-semibold">Short Title</label>
                <input
                  value={shortTitle}
                  onChange={e => setShortTitle(e.target.value)}
                  className="input"
                />
              </div>

              <div>
                <label className="block font-semibold">Logo URL</label>
                <input
                  value={logoUrl}
                  onChange={e => setLogoUrl(e.target.value)}
                  className="input"
                />
              </div>

              <div className="flex items-center gap-4 mt-2">
                {logoUrl && (
                  <img src={logoUrl} alt="Logo Preview" className="h-12 w-auto rounded shadow" />
                )}
              </div>

              <div>
                <label className="block font-semibold">API Base URL</label>
                <input
                  value={apiUrl}
                  onChange={e => setApiUrl(e.target.value)}
                  className="input"
                />
              </div>
            </div>
          )},
          { label: t('theme'), content: (
            <div className="max-w-md space-y-4">
              <label className="block font-semibold">Theme</label>
              <ThemeSelector
                selectedTheme={themeKey}
                onChange={(key) => setTheme(key)}
              />
            </div>
          )},
          { label: t('language'), content: (
            <div className="max-w-md space-y-4">
              <label className="block font-semibold">Language</label>
              <select
                value={tempLanguage}
                onChange={(e) => setTempLanguage(e.target.value as LanguageKey)}
                className="input"
              >
                <option value="en">🇺🇸 English</option>
                <option value="es">🇲🇽 Español</option>
              </select>
            </div>
          )}
        ]}
      />


      <button className="btn-primary mt-2" onClick={handleSave}>Save</button>
    </div>
  );
}
