import {lazy} from "react";
import { RouteObject } from "react-router";
import LayoutIndex from "../../pages/layout/index";
import LoginView from "../../pages/login/index";
import DisposeRoute from "./disposeRoute";
import { MenuItem, menuList } from "../../pages/layout/components/sider/data";
const V404 = lazy(() => import("src/pages/404"));

// 动态生成路由
export function setRouterByMenu(menus: MenuItem[]): RouteObject[] {
  const list: RouteObject[] = [];
  menus.forEach((menu) => {
    if (menu.items && menu.items.length !== 0) {
      list.push(...setRouterByMenu(menu.items));
    } else {
      const Component = lazy(() => import(`src/views${menu.path}`));
      list.push({
        path: menu.path,
        element: (
          <DisposeRoute element={<Component />} titleId={menu.text} auth />
        ),
        children: menu.items?.length ? setRouterByMenu(menu.items) : [],
      });
    }
  });
  return list;
}
// 路由列表
export const routeList: RouteObject[] = [
  {
    path: "/login",
    element: <DisposeRoute element={<LoginView />} titleId={"Login"} />,
  },
  {
    path: "/",
    element: <DisposeRoute element={<LayoutIndex />} titleId="home" auth />,
    children: [
      ...setRouterByMenu(menuList),
      {
        path: "*",
        element: <DisposeRoute element={<V404 />} titleId="404" />,
      },
    ],
  },
];
