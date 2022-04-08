import { lazy } from 'react';
import { RouteObject, RouteProps } from 'react-router';
import LayoutIndex from '../../pages/layout/index';
import DisposeRoute from './disposeRoute';

const Workbench = lazy(() => import('src/views/dashboard/workbench'))
const Analyse = lazy(() => import('src/views/dashboard/analyse'))
const UserView = lazy(() => import('src/views/user/index'))
const PageForm = lazy(() => import('src/views/pages/form'))
const PageDetail = lazy(() => import('src/views/pages/detail'))
const PageResult = lazy(() => import('src/views/pages/result'))
const PageException = lazy(() => import('src/views/pages/exception'))
const Inexistence = lazy(() => import('src/pages/404'))


export interface WrapperRouteProps extends RouteProps {
	titleId: string
	auth?: boolean,
}

// 路由列表
export const routeList: RouteObject[] = [
	{
		path: '/',
		element: <DisposeRoute element={<LayoutIndex />} titleId="home" auth />,
		children: [
			{
				path: '/workbench',
				element: <DisposeRoute element={<Workbench />} titleId="工作台" auth />,
			},
			{
				path: '/analyse',
				element: <DisposeRoute element={<Analyse />} titleId="分析页" auth />,
			},
			{
				path: '/user',
				element: <DisposeRoute element={<UserView />} titleId="用户管理" auth />,
			},
			{
				path: '/pages/form',
				element: <DisposeRoute element={<PageForm />} titleId="表单页" auth />,
			},
			{
				path: '/pages/detail',
				element: <DisposeRoute element={<PageDetail />} titleId="详情页" auth />,
			},
			{
				path: '/pages/result',
				element: <DisposeRoute element={<PageResult />} titleId="结果页" auth />,
			},
			{
				path: '/pages/error',
				element: <DisposeRoute element={<PageException />} titleId="异常页" auth />,
			},
			{
				path: '*',
				element: (
					<DisposeRoute
						element={<Inexistence/>}
						titleId="404"
					/>
				)
			}
		]
	}
]