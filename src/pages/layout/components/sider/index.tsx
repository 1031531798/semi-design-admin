import { FC, useMemo, useState } from 'react'
import { Layout, Nav } from '@douyinfe/semi-ui' 
import { usePrefixCls } from 'src/hook/useConfig';
import { useLocale } from '../../../../locales/index';
import { menuList, MenuItem } from './data';
import { useNavigate } from 'react-router-dom';
const {Sider} = Layout

const Index :FC  = () => {
const prefixCls = usePrefixCls('layout-sider')
const [selectedKeys, setSelectedKeys] = useState<string[]>([])
const navigate = useNavigate()
const {formatMessage} = useLocale()
const getMenu = useMemo(() => {
  return setMenuText(menuList)
}, [menuList])

function setMenuText (list: MenuItem[]):MenuItem[] {
  return list.map((menu: MenuItem) => {
    return {
      ...menu,
      text: formatMessage({id: menu.text}),
      items: menu.items ? setMenuText(menu.items) : []
    }
  })
}
function selectMenu (data: any) {
  setSelectedKeys([...data.selectedKeys])
  navigate(data.selectedItems[0].path)
}

return (
    <Sider className={prefixCls}>
      <Nav
        defaultOpenKeys={['001']}
        style={{ height: '100%' }}
				selectedKeys={selectedKeys}
        onSelect={selectMenu}
        header={{
          logo: <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" alt='logo' />,
          text: process.env.REACT_APP_TITLE
        }}
        items={getMenu}
        footer={{
          collapseButton: true,
        }}
      ></Nav>
    </Sider>
  )
}

export default Index