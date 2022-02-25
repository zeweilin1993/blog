import { RouteObject } from 'react-router';
import { dealRoutes } from './router-helper';

const routes: RouteObject[] = [
  {
    path: '/',
    element: () => import('@/layout'),
    children: [
      {
        path: '/home',
        element: () => import('@/pages/home'),
      },
      {
        path: '/about',
        element: () => import('@/pages/about'),
      },
    ],
  },
];

dealRoutes(routes);

export default routes;
