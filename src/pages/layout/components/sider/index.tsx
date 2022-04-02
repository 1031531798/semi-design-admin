import { FC, useEffect, useMemo, useState } from 'react'
import { Layout, Nav } from '@douyinfe/semi-ui'
import { usePrefixCls } from 'src/hook/useConfig';
import { useLocale } from '../../../../locales/index';
import { menuList, MenuItem } from './data';
import { useLocation, useNavigate } from 'react-router-dom';
import useCache from '../../../../hook/useCache';
import useStore from 'src/store';
import { openMenuItem } from '../../../../store/index';
const { Sider } = Layout
interface PathFindProps {
  menus: any[],
  path: string,
  keys?: string[]
  field?: string,
}
const Index: FC = () => {
  const prefixCls = usePrefixCls('layout-sider')
  const { pathname } = useLocation()
  const { setCache, getCache } = useCache()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const setOpenRouter = useStore(state => state.setOpenRouter)
  const localeMode = useStore(state => state.localeMode)
  // 使用缓存数据
  useEffect(() => {
    const defaultKeys = getCache({ key: 'MENU_SELECT_KEYS', storage: sessionStorage })
    const defaultOpens = getCache({ key: 'MENU_OPEN_KEYS', storage: sessionStorage })
    // 当前页面路由参数
    const currentRouter = findMenuFieldByPath({ menus: menuList, path: pathname, field: 'itemKey', keys: [] })
    if (Array.isArray(defaultKeys)) {
      setSelectedKeys(defaultKeys)
    } else {
      setSelectedKeys(currentRouter.slice(-1))
    }
    if (Array.isArray(defaultOpens)) {
      setOpenKeys(defaultOpens)
    } else {
      setOpenKeys(currentRouter)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const navigate = useNavigate()
  const { formatMessage } = useLocale()
  const getMenu = useMemo(() => {
    return setMenuText(menuList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuList, localeMode])
  // 菜单名国际化
  function setMenuText(list: MenuItem[]): MenuItem[] {
    return list.map((menu: MenuItem) => {
      return {
        ...menu,
        icon: menu.icon ? renderIcon(menu.icon) : null,
        text: formatMessage({ id: menu.text }),
        items: menu.items ? setMenuText(menu.items) : []
      }
    })
  }
  // 设置面包屑数据
  function setBreadcrumb (path: string) {
    const menuTree: openMenuItem[] = findMenuByPath({
      menus: menuList,
      path,
    }).map((item: MenuItem) => {
      return {
        itemKey: item.itemKey,
        path: item.path,
        text: item.text
      }
    })
    setOpenRouter(menuTree)
  }
  // 点击菜单
  function selectMenu(data: any) {
    const path = data.selectedItems[0].path
    // 设置选中菜单
    setSelectedKeys([...data.selectedKeys])
    setCache({
      key: 'MENU_SELECT_KEYS',
      value: [...data.selectedKeys],
      storage: sessionStorage,
    })
    setBreadcrumb(path)
    // 跳转菜单路由
    navigate(path)
  }
  // 根据path 获取menu对象
  function findMenuByPath(config: PathFindProps): any {
    const { menus, keys = [], path } = config
    for (const menu of menus) {
      if (menu.path === path) {
        return [...keys, menu]
      }
      if (menu.items && menu.items.length > 0) {
        const result = findMenuByPath({ menus: menu.items, path, keys: [...keys, menu] })
        if (result.length === 0) {
          continue
        }
        return result
      }
    }
    return []
  }
  // 根据path 获取menu field
  function findMenuFieldByPath(config: PathFindProps): any {
    const { menus, keys = [], path, field = 'itemKey' } = config
    for (const menu of menus) {
      if (menu.path === path) {
        return [...keys, menu[field]]
      }
      if (menu.items && menu.items.length > 0) {
        const result = findMenuFieldByPath({ menus: menu.items, path, field, keys: [...keys, menu[field]] })
        if (result.length === 0) {
          continue
        }
        return result
      }
    }
    return []
  }
  function renderIcon(icon: any) {
    if (!icon) {
      return null
    }
    return icon.render()
  }
  // 设置下拉展开
  const onOpenChange = (data: any) => {
    setOpenKeys([...data.openKeys])
    setCache({
      key: 'MENU_OPEN_KEYS',
      value: [...data.openKeys],
      storage: sessionStorage,
    })
  }

  return (
    <Sider className={prefixCls}>
      <Nav
        defaultOpenKeys={['001']}
        style={{ height: '100%' }}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onOpenChange={onOpenChange}
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

export default Index