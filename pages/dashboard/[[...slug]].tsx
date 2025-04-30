// pages/dashboard/[[...slug]].tsx

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '../../components/modules/Dashboard/Layout';

const ViewMap: Record<string, React.ComponentType> = {
  dashboard: dynamic(() => import('../../views/dashboard/dashboard')),
  'forms-manager': dynamic(() => import('../../views/dashboard/forms-manager')),
  'survey-manager': dynamic(() => import('../../views/dashboard/survey-manager')),
  settings: dynamic(() => import('../../views/dashboard/settings')),
};

export default function DashboardRouterPage() {
  const { query } = useRouter();
  const slug = query.slug as string[] | undefined;
  const currentPath = slug ? slug[0] : 'dashboard';
  const PageComponent = ViewMap[currentPath];

  return (
    <Layout>
      {PageComponent ? <PageComponent /> : <div className="p-4">Page not found</div>}
    </Layout>
  );
}
