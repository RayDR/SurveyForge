
import { useEffect, useState } from 'react';
import API from '../../services/api';
import * as XLSX from 'xlsx';
import toast from 'react-hot-toast';

export default function SurveyTable() {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('surveys/')
      .then(res => setSurveys(res.data.surveys || []))
      .catch(() => {
        toast.error('API unavailable. Showing empty table.');
        setSurveys([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(surveys);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Surveys');
    XLSX.writeFile(wb, 'surveys.xlsx');
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-end mb-2">
        <button onClick={exportToExcel} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition text-sm">
          ⬇️ Export to Excel
        </button>
      </div>
      {loading ? (
        <p>Loading surveys...</p>
      ) : surveys.length === 0 ? (
        <p className="text-gray-500 italic">No surveys available.</p>
      ) : (
        <table className="w-full text-left border-t text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Title</th>
              <th className="p-2">Description</th>
              <th className="p-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {surveys.map((s: any) => (
              <tr key={s.id} className="border-t hover:bg-gray-50">
                <td className="p-2">{s.title}</td>
                <td className="p-2">{s.description}</td>
                <td className="p-2 text-right space-x-2">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button className="text-yellow-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
