import React, { Suspense, useEffect } from "react";
import Header from "./components/header";
import Sider from "./components/sider";
import Footer from "./components/footer";
import { Layout } from "@douyinfe/semi-ui";
import { usePrefixCls } from "src/hook/useConfig";
import { Outlet, useLocation } from "react-router-dom";
import PageLoading from "src/components/loading/pageLoading";
import "./index.scss";
import useUserStore from "../../store/user";
import { getUserDetailByToken } from "../../api/user";
import { SwitchTransition, CSSTransition } from "react-transition-group";
const { Content } = Layout;
const LayoutIndex = () => {
  const prefixCls = usePrefixCls("layout");
  const { userInfo, setUserInfo } = useUserStore();
  const location = useLocation();
  useEffect(() => {
    // 如果用户信息为空 则获取用户详情
    if (!userInfo) {
      getUserDetailByToken().then((res) => {
        const { data } = res.data;
        setUserInfo(data);
      });
    }
  }, []);
  return (
    <Layout className={prefixCls}>
      <Sider />
      <Layout className={"overflow-hidden flex flex-col"}>
        <Header />
        <Content className={`${prefixCls}-content overflow-x-hidden`}>
          <Suspense fallback={<PageLoading />} >
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={location.key}
                timeout={300}
                appear={true}
                unmountOnExit={true}
                classNames="fade"
                nodeRef={null}
              >
                <Outlet />
              </CSSTransition>
            </SwitchTransition>
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutIndex;
