import { lazy, Suspense } from "react";

export const routes = [
  {
    path: "/",
    element: import('@/pages/home')
  },
];

function LazyElement(props: any) {
  const { importFunc } = props
  const LazyComponent = lazy(importFunc)
  return (
    <Suspense fallback={<div>路由懒加载...</div>}>
      <LazyComponent />
    </Suspense>
  )
}

// 处理routes 如果element是懒加载，要包裹Suspense
function dealRoutes(routesArr: any) {
  if (routesArr && Array.isArray(routesArr) && routesArr.length > 0) {
    routesArr.forEach((route) => {
      if (route.element && typeof route.element == 'function') {
        const importFunc = route.element
        route.element = <LazyElement importFunc={importFunc} />
      }
      if (route.children) {
        dealRoutes(route.children)
      }
    })
  }
}
dealRoutes(routes)

export default routes

