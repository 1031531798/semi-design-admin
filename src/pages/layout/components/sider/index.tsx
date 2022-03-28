import { FC, useEffect, useMemo, useState } from 'react'
import { Layout, Nav } from '@douyinfe/semi-ui'
import { usePrefixCls } from 'src/hook/useConfig';
import { useLocale } from '../../../../locales/index';
import { menuList, MenuItem } from './data';
import { useNavigate } from 'react-router-dom';
import useCache from '../../../../hook/useCache';
const { Sider } = Layout

const Index: FC = () => {
  const prefixCls = usePrefixCls('layout-sider')

  const { setCache, getCache } = useCache()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])
  // 使用缓存数据
  useEffect(() => {
    const defaultKeys = getCache({ key: 'MENU_SELECT_KEYS', storage: sessionStorage })
    const defaultOpens = getCache({ key: 'MENU_OPEN_KEYS', storage: sessionStorage })
    if (Array.isArray(defaultKeys)) {
      setSelectedKeys(defaultKeys)
    }
    if (Array.isArray(defaultOpens)) {
      setOpenKeys(defaultOpens)
    }
  }, [getCache])
  const navigate = useNavigate()
  const { formatMessage } = useLocale()
  const getMenu = useMemo(() => {
    return setMenuText(menuList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuList])
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
  // 点击菜单
  function selectMenu(data: any) {
    // 设置选中菜单
    setSelectedKeys([...data.selectedKeys])
    setCache({
      key: 'MENU_SELECT_KEYS',
      value: [...data.selectedKeys],
      storage: sessionStorage,
    })
    // 跳转菜单路由
    navigate(data.selectedItems[0].path)
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