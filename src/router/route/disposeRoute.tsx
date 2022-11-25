import { FC } from 'react'
import { RouteProps } from 'react-router'
import GuardRoute from './guardRoute';
import useStore from 'src/store';
import { useLocation } from 'react-router-dom';
import {useLocale} from "../../locales";
interface DisposeRouteProps extends RouteProps {
  titleId: string,
  auth?: boolean
}
const getComponent = (props: any) => {
	return props.element
}
// 过滤的不需要显示tabs的路由
const tabsFilter = [
	'home'
]
const DisposeRoute: FC<DisposeRouteProps> = ({ titleId, auth, ...props }) => {
	const { formatMessage } = useLocale()
	const { pathname } = useLocation()
	const tabList = useStore(state => state.tabList)
  	const setTabList = useStore(state => state.setTabList)
	const RouteComponents = auth ? GuardRoute : getComponent
	if (titleId) {
		titleId = formatMessage({id: titleId})
		document.title = titleId
	}
	// 根据titleId过滤不需要的路由
	if (!tabsFilter.includes(titleId)) {
		// 设置tabs
		tabList.findIndex(item => {
			return item.itemKey === pathname
		}) < 0 && (
			setTabList([...tabList, {
				itemKey: pathname,
				tab: titleId,
				closable: true
			}])
		)
	}
	return <RouteComponents {...props} titleId={titleId} />
}

export default DisposeRoute
