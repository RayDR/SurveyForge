import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import API from '../../../services/api';
import toast from 'react-hot-toast';
import { useLanguage } from '../../../contexts/LanguageContext';

export default function ResponsesTable() {
  const [responses, setResponses] = useState<any[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    API.get('responses/')
      .then(res => setResponses(res.data || []))
      .catch(() => {
        toast.error('API not available. Showing empty response table.');
        setResponses([]);
      });
  }, []);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(responses);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Responses');
    XLSX.writeFile(wb, 'responses.xlsx');
  };

  return (
    <div className="bg-white p-4 rounded shadow overflow-x-auto">
      <div className="flex justify-end mb-2">
        <button onClick={exportToExcel} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
          ⬇️ Export to Excel
        </button>
      </div>
      {responses.length === 0 ? (
        <p className="text-gray-500 italic">{t('noResponses')}</p>
      ) : (
        <table className="w-full text-sm border-t min-w-max">
          <thead className="bg-gray-100">
            <tr>
              {Object.keys(responses[0]).map((key) => (
                <th key={key} className="p-2">{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {responses.map((r, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                {Object.values(r).map((val, i) => (
                   <td key={i} className="p-2">{String(val)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
