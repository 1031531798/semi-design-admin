import { Navigate } from "react-router-dom";
import useStore from "../../store/index";
import { DisposeRouteProps } from "./disposeRoute";


// 路由前置守卫
const GuardRoute = ({ element }: DisposeRouteProps) => {
  const { token } = useStore();
  // token鉴权
  return token ? element : <Navigate to={{ pathname: "/login" }} replace />;
};

export default GuardRoute;
