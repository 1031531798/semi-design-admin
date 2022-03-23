import { FC, useMemo } from 'react'
import { Layout, Nav } from '@douyinfe/semi-ui' 
import { usePrefixCls } from 'src/hook/useConfig';
import { useLocale } from '../../../../locales/index';
import { menuList, MenuItem } from './data';
const {Sider} = Layout

const Index :FC  = () => {
const prefixCls = usePrefixCls('layout-sider')
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
return (
    <Sider className={prefixCls}>
      <Nav
        defaultOpenKeys={['job']}
        style={{ height: '100%' }}
        header={{
          logo: <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />,
          text: process.env.REACT_APP_TITLE
        }}
        items={getMenu}
        footer={{
          collapseButton: true,
        }}
        onSelect={key => console.log(key)}
      ></Nav>
    </Sider>
  )
}

export default Index