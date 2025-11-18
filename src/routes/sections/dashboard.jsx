import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { usePathname } from '../hooks';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/dashboard/one'));
const PageTwo = lazy(() => import('src/pages/dashboard/two'));
const PageThree = lazy(() => import('src/pages/dashboard/three'));
const PageFour = lazy(() => import('src/pages/dashboard/four'));
const PageFive = lazy(() => import('src/pages/dashboard/five'));
const PageSix = lazy(() => import('src/pages/dashboard/six'));

// ----------------------------------------------------------------------

function SuspenseOutlet() {
  const pathname = usePathname();
  return (
    <Suspense key={pathname} fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  );
}

const dashboardLayout = () => (
  <DashboardLayout>
    <SuspenseOutlet />
  </DashboardLayout>
);
