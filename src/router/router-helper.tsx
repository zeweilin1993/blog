import { RouteObject } from 'react-router';
import { lazy, Suspense } from 'react';

/**
 * @desc 处理routes 如果element是懒加载，要包裹Suspense
 * @param routes
 */
export const dealRoutes = (routes: RouteObject[]) => {
  if (routes && Array.isArray(routes) && routes.length > 0) {
    routes.forEach((route) => {
      if (route.element && typeof route.element === 'function') {
        const LazyComponent = lazy(route.element as any);
        route.element = (
          <Suspense fallback={null}>
            <LazyComponent />
          </Suspense>
        );
      }
      if (route.children) {
        dealRoutes(route.children);
      }
    });
  }
};
