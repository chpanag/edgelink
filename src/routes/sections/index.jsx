import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router';

import { CONFIG } from 'src/global-config';
import { ProductLayout } from 'src/layouts/simple/product-layout';

import { LoadingScreen } from 'src/components/loading-screen';

import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';

// ----------------------------------------------------------------------

const Page404 = lazy(() => import('src/pages/error/404'));
const ProductPage = lazy(() => import('src/pages/product'));

export const routesSection = [
  {
    path: '/',
    element: <Navigate to={CONFIG.auth.redirectPath} replace />,
  },

  // Product page
  {
    path: 'product',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ProductLayout>
          <ProductPage />
        </ProductLayout>
      </Suspense>
    ),
  },

  // Auth
  ...authRoutes,

  // Dashboard
  ...dashboardRoutes,

  // No match
  { path: '*', element: <Page404 /> },
];
