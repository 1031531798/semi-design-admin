import { lazy } from 'react';
import { RouteObject, RouteProps } from 'react-router';
import LayoutIndex from '../../pages/layout/index';
import DisposeRoute from './disposeRoute';
import UserPage from 'src/views/user'

const UserView = lazy(() => import('src/views/user/index'))


export interface WrapperRouteProps extends RouteProps {
	/** document title id */
	titleId: string
	/** authorization？ */
	auth?: boolean
}

// 路由列表
export const routeList: RouteObject[] = [
	{
		path: '/',
		element: <DisposeRoute element={<LayoutIndex />} titleId="home" auth />,
		children: [
			{
				path: '/user',
				element: <DisposeRoute element={<UserPage />} titleId="user" auth />,
			}
		]
	}
]