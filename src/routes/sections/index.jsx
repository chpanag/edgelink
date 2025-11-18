import { lazy, Suspense } from 'react';

import { ProductLayout } from 'src/layouts/simple/product-layout';

import { LoadingScreen } from 'src/components/loading-screen';


// ----------------------------------------------------------------------

const Page404 = lazy(() => import('src/pages/error/404'));
const ProductPage = lazy(() => import('src/pages/product'));

export const routesSection = [
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ProductLayout>
          <ProductPage />
        </ProductLayout>
      </Suspense>
    ),
  },


  // No match
  { path: '*', element: <Page404 /> },
];
