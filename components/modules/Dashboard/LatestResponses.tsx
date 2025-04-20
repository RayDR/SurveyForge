
import { useEffect, useState } from 'react';
import API from '../../../services/api';

export default function LatestResponses() {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    API.get('responses/?limit=10')
      .then(res => setResponses(res.data || []))
      .catch(() => setResponses([]));
  }, []);

  return (
    <div className="mt-6 bg-white p-4 shadow rounded">
      <h3 className="text-xl font-semibold mb-3">🕒 Latest Responses</h3>
      {responses.length === 0 ? (
        <p className="text-gray-500 italic">No recent responses.</p>
      ) : (
        <ul className="space-y-2">
          {responses.map((r: any, idx) => (
            <li key={idx} className="text-sm border-b pb-1">{r.respondent || 'Anonymous'} - {r.survey_title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
