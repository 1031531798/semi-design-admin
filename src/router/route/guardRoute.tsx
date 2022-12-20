import {useLocation, Navigate} from 'react-router-dom';
import { menuList } from 'src/pages/layout/components/sider/data';
import useStore from '../../store/index';
import { findMenuByPath } from '../../utils/utils';
import {webSettings} from "../../config/setting";
import {DisposeRouteProps} from "./disposeRoute";

const GuardRoute = ({element}: DisposeRouteProps ) => {
  const {setOpenMenuBar, setSelectMenuBar, token} = useStore()
  const { pathname } = useLocation()
  // 只有token存在才记录menu
  if (token) {
    const menuKey = findMenuByPath({
      path: pathname,
      menus: menuList,
      field: 'itemKey'
    })
    setOpenMenuBar(menuKey.map(item => item.itemKey))
    setSelectMenuBar(menuKey.map(item => item.itemKey))
  }

  // 路由验证
  const path = token ? webSettings.defaultRouter : '/login'
  return pathname === '/' ? (
      <Navigate to={{ pathname: path }} replace />
  ) : (
      element
  )
}

export default GuardRoute
