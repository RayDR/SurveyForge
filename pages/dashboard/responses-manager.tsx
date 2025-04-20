
import Layout from '../../components/modules/Dashboard/Layout';
import ResponsesTable from '../../components/modules/Dashboard/ResponsesTable';

export default function ResponsesManager() {
  return (
    <Layout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-blue-700">📄 Survey Responses</h1>
        <ResponsesTable />
      </div>
    </Layout>
  );
}
