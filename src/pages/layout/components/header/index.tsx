import { Nav, Avatar, Dropdown, Layout, Toast } from "@douyinfe/semi-ui";
import { usePrefixCls } from "../../../../hook/useConfig";
import HeaderNav from "./headNav";
import Tabs from "./tabs";
import ColorMode from "./colorMode";
import LocaleMode from "./localeMode";
import useStore from "../../../../store";
import { useGo } from "../../../../hook/useGo";
import useUserStore from "../../../../store/user";
import { IconExit, IconArticle } from "@douyinfe/semi-icons";
import GlobalSetting from "./globalSetting";
import "./header.scss";
import useSettingsStore from "@/store/settings";
const { Header } = Layout;
const HeaderIndex = () => {
  const prefixCls = usePrefixCls("layout-header");
  const { userInfo } = useUserStore();
  const { setToken } = useStore();
  const { platformSetting } = useSettingsStore();
  const { go } = useGo();
  function handleExit() {
    setToken("");
    Toast.success("退出成功");
    go({ path: "/login" });
  }
  return (
    <Header className={prefixCls}>
      <Nav
        style={{
          width: "100%",
        }}
        mode={"horizontal"}
        header={platformSetting.showBreadcrumb && <HeaderNav></HeaderNav>}
        footer={
          <>
            <ColorMode />
            <GlobalSetting></GlobalSetting>
            <LocaleMode />
            <Dropdown
              position="bottom"
              style={{
                width: "90px",
              }}
              render={
                <Dropdown.Menu>
                  <Dropdown.Item icon={<IconArticle />}>详情</Dropdown.Item>
                  <Dropdown.Item
                    icon={<IconExit />}
                    type="danger"
                    onClick={handleExit}
                  >
                    退出
                  </Dropdown.Item>
                </Dropdown.Menu>
              }
            >
              <Avatar size="small" color="light-blue" style={{ margin: 4 }}>
                {userInfo?.userName?.slice(0, 2)}
              </Avatar>
              <span>{userInfo?.userName}</span>
            </Dropdown>
          </>
        }
      ></Nav>
      <Tabs></Tabs>
    </Header>
  );
};

export default HeaderIndex;
