import { useEffect, useMemo, useRef, useState } from "react";
import { Dropdown, TabPane, Tabs } from "@douyinfe/semi-ui";
import useStore from "src/store";
import { IconChevronDown } from "@douyinfe/semi-icons";
import { TabProps } from "../../../../store/type";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocale } from "../../../../locales";
import { VscCloseAll } from "react-icons/vsc";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { BsFullscreen } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import ContextMenu from "../../../../components/contextMenu";

const HeaderTabs = () => {
  const tabList = useStore((state) => state.tabList);
  const setTabList = useStore((state) => state.setTabList);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { formatMessage, locale } = useLocale();
  // 是否滚动标签页
  const [hasCollapsible, setHasCollapsible] = useState<boolean>(false);
  // useState 值在ResizeObserve的回调函数中不会引用正确的值 启用一个变量来记录当前的折叠状态
  let showCollapsible = false
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabClass = "semi-tabs-item";
  useEffect(() => {
    setTimeout(() => {
      if (!tabsRef.current) return;
      const tabDomList = tabsRef?.current.getElementsByClassName(tabClass);
      if (tabDomList?.length) {
        for (const element of tabDomList) {
          element.addEventListener("contextmenu", (e: Event) => {
            openContextMenu();
            e.preventDefault();
          });
        }
      }
    });
    // 设置标签页折叠
    const resizeObserve = new ResizeObserver((entries, observer) => {
      const viewDom = entries[0].target as HTMLDivElement;
      const scrollDom = viewDom.getElementsByClassName(
        showCollapsible ? "semi-overflow-list-scroll-wrapper" : "semi-tabs-bar"
      )[0] as HTMLDivElement;
      const show =  viewDom.scrollWidth - 40 < scrollDom.scrollWidth;
      if (show !== showCollapsible) {
        setHasCollapsible(show);
        showCollapsible = show
      }
    });
    if (tabsRef.current) {
      // resize 自适应
      resizeObserve.observe(tabsRef.current);
    }
    return () => {
      tabsRef.current && resizeObserve.unobserve(tabsRef.current);
    };
  }, [tabList]);
  const getTabList: TabProps[] = useMemo(() => {
    // 设置tabList 展示数据
    return tabList.map((item) => {
      return {
        ...item,
        tab: formatMessage({ id: item.tab }), // 国际化
      };
    });
  }, [tabList, locale]);

  // 点击标签
  const changeTab = (key: string) => {
    key && navigate(key);
  };
  // 删除标签
  const closeTab = (key: string) => {
    const list = tabList.filter((item) => {
      return item.itemKey !== key;
    });
    navigate(list[list.length - 1].itemKey);
    setTabList(list);
  };
  // 关闭当前标签
  function closeCurrent() {
    closeTab(pathname);
  }
  // 关闭其他标签
  function closeOther() {
    const list = tabList.filter((item) => {
      return item.itemKey === pathname || !item.closable;
    });
    setTabList(list);
  }
  // 关闭全部标签
  function closeAll() {
    const list = tabList.filter((item) => {
      return !item.closable;
    });
    navigate(list[list.length - 1].itemKey);
    setTabList(list);
  }
  function openContextMenu() {
    console.log("openContextMenu");
  }

  return (
    <div className={"flex flex-row items-center relative"} ref={tabsRef}>
      <Tabs
        style={{ width: "calc(100% - 40px)" }}
        type="card"
        collapsible={hasCollapsible}
        activeKey={pathname}
        onChange={changeTab}
        onTabClose={closeTab}
      >
        {getTabList.map((item) => {
          return (
            <TabPane
              key={item.itemKey}
              tab={item.tab}
              itemKey={item.itemKey}
              closable={item.closable}
              className={tabClass}
            ></TabPane>
          );
        })}
      </Tabs>
      <Dropdown
        className={"h-full p-2"}
        trigger={"click"}
        position={"bottomLeft"}
        render={
          <Dropdown.Menu>
            <Dropdown.Item icon={<IoMdClose />} onClick={closeCurrent}>
              关闭当前标签
            </Dropdown.Item>
            <Dropdown.Item icon={<AiOutlineColumnWidth />} onClick={closeOther}>
              关闭其他标签
            </Dropdown.Item>
            <Dropdown.Item icon={<VscCloseAll />} onClick={closeAll}>
              关闭全部标签
            </Dropdown.Item>
            <Dropdown.Item icon={<BsFullscreen />}>全屏</Dropdown.Item>
          </Dropdown.Menu>
        }
      >
        <div
          className={" h-full cursor-pointer"}
          style={{
            marginTop: "2px",
            borderBottom: "1px solid var(--semi-color-border)",
          }}
        >
          <IconChevronDown />
        </div>
      </Dropdown>
      <ContextMenu x={1} y={2} visible={true} menuList={[]} />
    </div>
  );
};

export default HeaderTabs;
