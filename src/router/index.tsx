import { Navigate, RouteObject } from 'react-router-dom';
import { dealRoutes } from './router-helper';

const routes: RouteObject[] = [
  {
    path: '/',
    element: () => import('@/layout'),
    children: [
      {
        index: true,
        element: <Navigate to='/home' />
      },
      {
        path: 'home',
        element: () => import('@/pages/home'),
      },
      {
        path: 'posts',
        element: () => import('@/pages/posts'),
      },
      {
        path: 'projects',
        element: () => import('@/pages/projects'),
      },
      {
        path: 'share',
        element: () => import('@/pages/share'),
      },
      {
        path: 'about',
        element: () => import('@/pages/about'),
      },
    ],
  },
];

dealRoutes(routes);

export default routes;
