import {useLocation, Navigate} from 'react-router-dom';
import useStore from '../../store/index';
import {webSettings} from "../../config/setting";
import {DisposeRouteProps} from "./disposeRoute";
import {Toast} from "@douyinfe/semi-ui";

// 路由前置守卫
const GuardRoute = ({element}: DisposeRouteProps ) => {
  const {token} = useStore()
  const { pathname } = useLocation()
  // token鉴权
  if (!token) {
    // 如果token不存在就返回login
    Toast.warning('token 不能为空')
    return  <Navigate to={{ pathname: '/login' }} replace />
  }
  // 默认首页
  return pathname === '/' ? (
      <Navigate to={{ pathname: webSettings.defaultRouter }} replace />
  ) : (
      element
  )
}

export default GuardRoute
