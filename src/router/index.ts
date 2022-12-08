import { useRoutes } from 'react-router-dom';
import {routeList} from './route'
export function getDefaultRouter () {
  return [
  ]
}
export const RenderRouter = () => {
	return useRoutes(routeList)
}
