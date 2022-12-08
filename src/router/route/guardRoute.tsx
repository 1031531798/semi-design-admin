import { Empty } from '@douyinfe/semi-ui';
import {useLocation, Navigate} from 'react-router-dom';
import { menuList } from 'src/pages/layout/components/sider/data';
import useStore from '../../store/index';
import { findMenuByPath } from '../../utils/utils';
import {webSettings} from "../../config/setting";
import {DisposeRouteProps} from "./disposeRoute";

const GuardRoute = ({element}: DisposeRouteProps ) => {
  const setOpenMenu = useStore(state => state.setOpenMenuBar)
  const setSelectMenuBar = useStore(state => state.setSelectMenuBar)

  const { pathname } = useLocation()
  const menuKey = findMenuByPath({
    menus: menuList,
    path: pathname,
    field: 'itemKey'
  })
  setOpenMenu(menuKey.map(item => item.itemKey))
  setSelectMenuBar(menuKey.map(item => item.itemKey))

  const isUser = true
  const node = pathname === '/' ? (
      <Navigate to={{ pathname: webSettings.defaultRouter }} replace />
  ) : (
      element
  )
  return isUser ? (
      node
  ) : (<Empty title="没有权限" description="您还没有登录，请先去登录" />)
}

export default GuardRoute
