import Layout from '../../components/modules/Dashboard/Layout';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function Settings() {
  const [title, setTitle] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [apiUrl, setApiUrl] = useState('');

  useEffect(() => {
    setTitle(localStorage.getItem('surveyui:title') || 'Survey Forge');
    setLogoUrl(localStorage.getItem('surveyui:logo') || '');
    setApiUrl(localStorage.getItem('surveyui:api') || '#');
  }, []);

  const handleSave = () => {
    localStorage.setItem('surveyui:title', title);
    localStorage.setItem('surveyui:logo', logoUrl);
    localStorage.setItem('surveyui:api', apiUrl);
    toast.success('Settings saved!');
  };

  return (
    <Layout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-blue-700">⚙️ Application Settings</h1>
        <div className="bg-white p-4 rounded shadow space-y-4">
          <div>
            <label className="block font-semibold">App Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)} className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block font-semibold">Logo URL</label>
            <input value={logoUrl} onChange={e => setLogoUrl(e.target.value)} className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block font-semibold">API Base URL</label>
            <input value={apiUrl} onChange={e => setApiUrl(e.target.value)} className="border p-2 rounded w-full" />
          </div>
          <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded shadow">Save</button>
        </div>
      </div>
    </Layout>
  );
}

