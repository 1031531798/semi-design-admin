import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import {routeList} from './route'
export function getDefaultRouter () {
  return [
  ]
}
export const RenderRouter: FC = () => {
	const element = useRoutes(routeList)
	return element
}
