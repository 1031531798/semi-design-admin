import GuardRoute from "./guardRoute";
import { PathRouteProps } from "react-router-dom";
import { useLocale } from "../../locales";
export interface DisposeRouteProps extends PathRouteProps {
  titleId: string;
  auth?: boolean;
}
const getComponent = (props: any) => {
  return props.element;
};
// 过滤的不需要显示tabs的路由
const tabsFilter = ["home", "Login"];
const DisposeRoute = ({ titleId, auth, ...props }: DisposeRouteProps) => {
  const { formatMessage } = useLocale();
  // 是否需要鉴权
  const RouteComponents = auth ? GuardRoute : getComponent;
  // 根据titleId过滤不需要的路由
  if (!tabsFilter.includes(titleId)) {
    if (titleId) {
      titleId = formatMessage({ id: titleId });
      document.title = titleId;
    }
  }
  return <RouteComponents {...props} titleId={titleId} />;
};

export default DisposeRoute;
