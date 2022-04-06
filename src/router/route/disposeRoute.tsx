import { FC } from 'react'
import { RouteProps } from 'react-router'
import GuardRoute from './guardRoute';
interface DisposeRouteProps extends RouteProps {
  titleId: string,
  auth?: boolean
}
const getComponent = (props: any) => {
	return props.element
}
const DisposeRoute: FC<DisposeRouteProps> = ({ titleId, auth, ...props }) => {
	const RouteComponents = auth ? GuardRoute : getComponent
	if (titleId) {
		document.title = titleId
	}
	return <RouteComponents {...props} />
}

export default DisposeRoute
