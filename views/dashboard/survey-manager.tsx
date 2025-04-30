// pages/dashboard/views/survey-manager.tsx

import Breadcrumbs from '../../components/modules/Dashboard/BreadcrumbsDashboard';
import DashboardTitle from '../../components/modules/Dashboard/DashboardTitle';
import ResponsesTable from '../../components/modules/Dashboard/ResponsesTable';

export default function SurveyManager() {
  return (
    <div className="space-y-4">
      <DashboardTitle title="Surveys" icon="📝" />
      <Breadcrumbs />
      <ResponsesTable />
    </div>
  );
}
