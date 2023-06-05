import { Suspense, useEffect } from "react";
import Header from "./components/header";
import Sider from "./components/sider";
import Footer from "./components/footer";
import { Layout } from "@douyinfe/semi-ui";
import { usePrefixCls } from "src/hook/useConfig";
import {Outlet, useLocation, useOutlet} from "react-router-dom";
import PageLoading from "src/components/loading/pageLoading";
import "./index.scss";
import useUserStore from "../../store/user";
import { getUserDetailByToken } from "@/api/user";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import useSettingsStore from "@/store/settings";
const { Content } = Layout;
const LayoutIndex = () => {
  const prefixCls = usePrefixCls("layout");
  const { userInfo, setUserInfo } = useUserStore();
  const location = useLocation();
  const {platformSetting} = useSettingsStore()
  const currentOutlet = useOutlet()
  useEffect(() => {
    // 如果用户信息为空 则获取用户详情
    if (!userInfo) {
      getUserDetailByToken().then((res) => {
        const { data } = res.data;
        setUserInfo(data);
      });
    }
  }, []);
  function renderTransitionRoute() {
    return (
      <>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            timeout={500}
            classNames={{
              appear: "animate__animated",
              appearActive: "animate__fadeInLeft",
              enter: "animate__animated",
              enterActive: "animate__fadeInLeft",
              exit: "animate__animated",
              exitActive: "animate__fadeOutRight",
            }}
            appear
            unmountOnExit
          >
            {() => <div className="route-view h-full">
              {currentOutlet}
            </div>}
          </CSSTransition>
        </SwitchTransition>
      </>
    );
  }
  return (
    <Layout className={prefixCls}>
      <Sider />
      <Layout className={"overflow-hidden flex flex-col"}>
        <Header />
        <Content className={`${prefixCls}-content overflow-x-hidden`}>
          <Suspense fallback={<PageLoading />}>
            {platformSetting.transition ? renderTransitionRoute() : <Outlet />}
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutIndex;
