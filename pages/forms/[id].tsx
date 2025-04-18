
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import API from '../../services/api';
import toast, { Toaster } from 'react-hot-toast';

export default function FormViewer() {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState<any | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    API.get(`forms/${id}/`)
      .then(res => setForm(res.data))
      .catch(() => {
        toast.error('API not available. Showing defaults.');
        setForm({ title: 'Unavailable Survey', description: 'No description available.' });
        setError(true);
      });
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-8">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">{form?.title}</h1>
      <p className="mb-4 text-gray-600">{form?.description}</p>
      <input type="text" placeholder="Your response" className="w-full border p-2 rounded mb-4" />
      <button className="bg-primary text-white px-4 py-2 rounded">Submit</button>
    </div>
  );
}
