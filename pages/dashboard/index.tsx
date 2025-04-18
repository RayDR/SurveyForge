
import Layout from '../../components/layout/Layout';
import DashboardCharts from '../../components/ui/DashboardCharts';
import LatestResponses from '../../components/ui/LatestResponses';

export default function DashboardHome() {
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
