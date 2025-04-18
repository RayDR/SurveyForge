
import Layout from '../../components/layout/Layout';
import SurveyTable from '../../components/ui/SurveyTable';

export default function FormManager() {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">📝 Manage Forms</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">+ Create Survey</button>
        </div>
        <SurveyTable />
      </div>
    </Layout>
  );
}
