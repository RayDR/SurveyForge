
import Layout from '../../components/layout/Layout';
import ResponsesTable from '../../components/ui/ResponsesTable';

export default function ResponseViewer() {
  return (
    <Layout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-blue-700">📄 Survey Responses</h1>
        <ResponsesTable />
      </div>
    </Layout>
  );
}
