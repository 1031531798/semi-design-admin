import { useEffect, useMemo, useRef, useState } from "react";
import { Dropdown, TabPane, Tabs } from "@douyinfe/semi-ui";
import useStore from "src/store";
import { IconChevronDown } from "@douyinfe/semi-icons";
import { TabProps } from "../../../../store/type";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocale } from "../../../../locales";
import { VscCloseAll } from "react-icons/vsc";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useResizeObserver } from "../../../../hook/useResizeObserver";
import ContextMenu from "../../../../components/contextMenu";
import {ContextMenuInstance, ContextMenuItemProps} from "../../../../components/contextMenu/types";

const HeaderTabs = () => {
  const tabList = useStore((state) => state.tabList);
  const setTabList = useStore((state) => state.setTabList);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { observe, unobserve } = useResizeObserver();
  const { formatMessage, locale } = useLocale();
  // 标签栏事件
  const tabsMenus: ContextMenuItemProps[] = [
    { name: "关闭当前标签", icon: <IoMdClose />, onClick: closeCurrent },
    {
      name: "关闭其他标签",
      icon: <AiOutlineColumnWidth />,
      onClick: closeOther,
    },
    { name: "关闭全部标签", icon: <VscCloseAll />, onClick: closeAll },
  ];
  const [contextPosition, setContextPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  // 是否滚动标签页
  const [hasCollapsible, setHasCollapsible] = useState<boolean>(false);
  // useState 值在ResizeObserve的回调函数中不会引用正确的值 启用一个变量来记录当前的折叠状态
  let showCollapsible = false;
  const contextMenuRef = useRef<ContextMenuInstance>()
  const tabsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!tabsRef.current) return;
      const tabDomList =
        tabsRef?.current.getElementsByClassName("semi-tabs-tab");
      if (tabDomList?.length) {
        for (const element of tabDomList) {
          element.addEventListener("contextmenu", (e: Event) => {
            openContextMenu(e as MouseEvent, element as HTMLDivElement);
            e.preventDefault();
          });
        }
      }
    });
    // 设置标签页折叠
    if (tabsRef.current) {
      // resize 自适应
      observe(tabsRef.current, (entries, observer) => {
        const viewDom = entries[0].target as HTMLDivElement;
        const scrollDom = viewDom.getElementsByClassName(
          showCollapsible
            ? "semi-overflow-list-scroll-wrapper"
            : "semi-tabs-bar"
        )[0] as HTMLDivElement;
        const show = viewDom.scrollWidth - 40 < scrollDom.scrollWidth;
        if (show !== showCollapsible) {
          setHasCollapsible(show);
          showCollapsible = show;
        }
      });
    }
    return () => {
      unobserve();
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
  function openContextMenu(e: MouseEvent, element: HTMLDivElement) {
    const { offsetX, offsetY } = e;
    const offsetLeft = element?.offsetLeft || 0;
    setContextPosition({
      x: offsetX + offsetLeft,
      y: offsetY + 10,
    });

    contextMenuRef?.current?.open()
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
            {
              tabsMenus.map(item => <Dropdown.Item key={item.name} icon={item.icon} onClick={item.onClick}>
                {item.name}
              </Dropdown.Item>)
            }
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
      <ContextMenu
        ref={contextMenuRef}
        x={contextPosition.x}
        y={contextPosition.y}
        menuList={tabsMenus}
      />
    </div>
  );
};

export default HeaderTabs;
