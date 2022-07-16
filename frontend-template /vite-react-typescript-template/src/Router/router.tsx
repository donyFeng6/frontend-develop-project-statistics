import { lazy, ReactNode, Suspense } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

import Loading from '@/components/Loading'

// 切换页面会出现闪屏现象
import IndexPage from '@/pages/index/index'
const router: Object[] = [
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/home',
    element: lazy(() => import('@/pages/home')),
  },
  {
    path: '*',
    element: lazy(() => import('@/pages/404')),
  },
]

// 实现懒加载的用Suspense包裹 定义函数
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<Loading page='router' />}>{children}</Suspense>
}
const routers: RouteObject[] = []
router.forEach((route: any) => {
  let Element = route.element
  if (route.element._init) Element = lazyLoad(<Element />)
  routers.push({ path: route.path, element: Element })
})

export default () => useRoutes(routers)
