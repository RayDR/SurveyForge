
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Survey } from '../types/survey';

export default function Dashboard() {
  const [surveys, setSurveys] = useState<Survey[]>([]);

  useEffect(() => {
    axios.get('https://surveys.api.domoforge.com/api/surveys/').then(res => {
      setSurveys(res.data.surveys || []);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Survey Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow rounded p-4">Total Surveys: {surveys.length}</div>
        <div className="bg-white shadow rounded p-4">Responses: 42</div>
      </div>
    </div>
  );
}
