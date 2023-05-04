import {useEffect, useMemo, useRef} from 'react'
import { Layout, Nav } from '@douyinfe/semi-ui'
import { usePrefixCls } from 'src/hook/useConfig';
import { useLocale } from '../../../../locales';
import { menuList, MenuItem } from './data';
import { useLocation, useNavigate } from 'react-router-dom';
import useStore from 'src/store';
import { findMenuByPath } from '../../../../utils/utils';
import useCache from '../../../../hook/useCache';
import { CacheEnum } from '../../../../enum/cache';
const { Sider } = Layout

const SiderIndex = () => {
  const prefixCls = usePrefixCls('layout-sider')
  const { setCache } = useCache()
  const { pathname } = useLocation()
  const {tabList, setTabList} = useStore()
  const setOpenRouter = useStore(state => state.setOpenRouter)
  const localeMode = useStore(state => state.localeMode)
  const navigate = useNavigate()
  const { formatMessage } = useLocale()
  const getMenu = useMemo(() => {
    return setMenuText(menuList)
  }, [menuList, localeMode])
  const menuTree = useRef<MenuItem[]>([])
  useEffect(() => {
    menuTree.current = findMenuByPath({
      path: pathname,
      menus: menuList
    })
    // 设置面包屑数据
    setOpenRouter(menuTree.current)
  }, [pathname])
  // 菜单名国际化
  function setMenuText(list: MenuItem[]): MenuItem[] {
    return list.map((menu: MenuItem) => {
      return {
        ...menu,
        textId: menu.text,
        text: formatMessage({ id: menu.text }),
        items: menu.items ? setMenuText(menu.items) : []
      }
    })
  }
  // 设置选中菜单 根据路由变化
  const getMenuSelect = useMemo(() => {
    const menu = findMenuByPath({
      path: pathname,
      menus: menuList
    })
    return menu.map(item => {
      return item.itemKey
    })
  }, [pathname])
  // 设置面包屑和标签页
  function setMenuHandle (data: any) {
    const {path, text, textId} = data

    if (!path) return
    // 判断tab 是否存在
    const hasTab = tabList.findIndex(item => {
      return item.itemKey === path
    })
    // 设置tabs
    if (hasTab < 0 ) {
      setTabList([...tabList, {
        itemKey: path,
        tab: textId || text || '未知',
        closable: true
      }])
    }

  }
  // 点击菜单
  function selectMenu(data: any) {
    const path = data.selectedItems[0].path
    // 设置面包屑
    setMenuHandle(data.selectedItems[0])
    // 跳转菜单路由
    navigate(path)
  }
  // 设置下拉展开
  const onOpenChange = (data: any) => {
    setCache({
      key: CacheEnum.openMenu,
      value: [...data.openKeys],
      storage: sessionStorage,
    })
  }
  return (
    <Sider className={prefixCls}>
      <Nav
        defaultOpenKeys={getMenuSelect}
        style={{ height: '100%' }}
        onOpenChange={onOpenChange}
        selectedKeys={getMenuSelect}
        onSelect={selectMenu}
        header={{
          logo: <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" alt='logo' />,
          text: process.env.REACT_APP_TITLE
        }}
        limitIndent={false}
        items={getMenu}
        footer={{
          collapseButton: true,
        }}
      ></Nav>
    </Sider>
  )
}

export default SiderIndex
