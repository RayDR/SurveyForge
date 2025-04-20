
import Layout from '../../components/modules/Dashboard/Layout';
import DashboardCharts from '../../components/modules/Dashboard/DashboardCharts';
import LatestResponses from '../../components/modules/Dashboard/LatestResponses';

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-blue-700">📊 Dashboard Overview</h1>
        <DashboardCharts />
        <LatestResponses />
      </div>
    </Layout>
  );
}
