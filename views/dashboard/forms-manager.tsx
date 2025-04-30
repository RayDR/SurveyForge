// pages/dashboard/views/forms-manager.tsx

import Breadcrumbs from '../../components/modules/Dashboard/BreadcrumbsDashboard';
import DashboardTitle from '../../components/modules/Dashboard/DashboardTitle';
import SurveyTable from '../../components/modules/Dashboard/SurveyTable';


export default function FormsManager() {
  return (
    <div className="space-y-4">
      <DashboardTitle title="Forms Manager" icon="📝" />
      <Breadcrumbs />
      <button className="btn-primary mb-4">+ Create Survey</button>
      <SurveyTable />
    </div>
  );
}