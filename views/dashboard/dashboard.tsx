// pages/dashboard/views/dashboard.tsx

import Breadcrumbs from "../../components/modules/Dashboard/BreadcrumbsDashboard";
import DashboardCharts from "../../components/modules/Dashboard/DashboardCharts";
import DashboardTitle from "../../components/modules/Dashboard/DashboardTitle";
import LatestResponses from "../../components/modules/Dashboard/LatestResponses";

export default function Dashboard() {
  return (
      <div className="space-y-6">
        <div className="py-4">
          <DashboardTitle title="Dashboard" icon="📊" />
          <Breadcrumbs />
          <DashboardCharts />
          <LatestResponses />
        </div>
      </div>
  );
}
