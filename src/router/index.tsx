import { lazy, Suspense } from "react";
import Home from "@/pages/home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

// 处理routes 如果element是懒加载，要包裹Suspense
function dealRoutes(routes: any) {
  if (routes && Array.isArray(routes) && routes.length > 0) {
    routes.forEach((route) => {
      if (route.element && typeof route.element === "function") {
        const LazyComponent = lazy(route.element);
        route.element = (
          <Suspense fallback={<div>路由懒加载...</div>}>
            <LazyComponent />
          </Suspense>
        );
      }
      if (route.children) {
        dealRoutes(route.children);
      }
    });
  }
}
dealRoutes(routes);

export default routes;
