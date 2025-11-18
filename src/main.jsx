import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';

import App from './app';
import { CONFIG } from './global-config';
import { routesSection } from './routes/sections';
import { ErrorBoundary } from './routes/components';

// ----------------------------------------------------------------------

const router = createBrowserRouter([
  {
    Component: () => (
      <App>
        <Outlet />
      </App>
    ),
    errorElement: <ErrorBoundary />,
    children: routesSection,
  },
], {
  basename: CONFIG.assetsDir || '/',
});

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
